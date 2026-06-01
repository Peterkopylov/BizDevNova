#!/usr/bin/env python3
"""Guardrails for daily/weekly competitor sweeps.

This script makes the sweep process more deterministic by:

1. Building the daily coverage manifest from the full competitor-note set.
2. Using the landscape tracker only as secondary metadata for category context.
3. Extracting note coverage and official surfaces from existing competitor notes.
4. Auditing a daily/weekly report for explicit coverage against the full note set.

It does not fetch the web itself. Its job is to prevent silent omissions and
to make "quality of sweep" visible from local artifacts.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Iterable
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
RESEARCH_DIR = ROOT / "research"
PLAYBOOK_PATH = ROOT / "playbooks" / "daily-funding-news-monitor-workflow.md"
TRACKER_PATH = RESEARCH_DIR / "2026-04-07-competitor-landscape-tracker.md"


def normalize_name(value: str) -> str:
    lowered = value.lower()
    lowered = lowered.replace(".ai", " ai")
    lowered = lowered.replace("&", " and ")
    lowered = re.sub(r"[^a-z0-9]+", " ", lowered)
    return re.sub(r"\s+", " ", lowered).strip()


def slugify(value: str) -> str:
    return normalize_name(value).replace(" ", "-")


def get_today() -> date:
    import os

    for key in ("BIZDEV_TODAY", "CODING_AGENT_TODAY"):
        value = os.environ.get(key)
        if value:
            return date.fromisoformat(value)
    return date.today()


def extract_note_date(path: Path) -> date | None:
    match = re.match(r"^(\d{4})-(\d{2})-(\d{2})-", path.name)
    if not match:
        return None
    return date.fromisoformat("-".join(match.groups()))


def classify_freshness(age_days: int | None) -> str:
    if age_days is None:
        return "unknown"
    if age_days <= 30:
        return "fresh"
    if age_days <= 45:
        return "aging"
    return "stale"


@dataclass
class Competitor:
    name: str
    category: str
    status: str
    notes: str
    priority: bool = False
    note_path: str | None = None
    official_domains: list[str] = field(default_factory=list)
    official_urls: list[str] = field(default_factory=list)
    social_urls: list[str] = field(default_factory=list)
    note_date: str | None = None
    last_official_source_refresh_date: str | None = None
    note_age_days: int | None = None
    freshness_status: str = "unknown"
    pricing_public: bool | None = None
    docs_release_surface_present: bool = False
    primary_social_monitoring_surface: str | None = None
    source_map_strength: str = "missing"
    official_surface_map: dict[str, str | None] = field(default_factory=dict)


def parse_markdown_table_rows(lines: Iterable[str]) -> list[list[str]]:
    rows: list[list[str]] = []
    for raw in lines:
        line = raw.strip()
        if not line:
            break
        if line.startswith("## "):
            break
        if not line.startswith("|"):
            continue
        if re.match(r"^\|[-\s|:]+\|?$", line):
            continue
        cells = [cell.strip() for cell in line.strip("|").split("|")]
        rows.append(cells)
    return rows


def load_priority_watchlist() -> set[str]:
    text = PLAYBOOK_PATH.read_text()
    match = re.search(
        r"## Current Priority Watchlist(.*?)##",
        text,
        flags=re.S,
    )
    if not match:
        return set()

    priorities: set[str] = set()
    for raw in match.group(1).splitlines():
        stripped = raw.strip()
        if stripped.startswith("- "):
            priorities.add(normalize_name(stripped[2:].strip("` ")))
    return priorities


def _extract_backtick_bullets(block: str) -> list[str]:
    items: list[str] = []
    seen: set[str] = set()
    for raw in block.splitlines():
        stripped = raw.strip()
        if not stripped.startswith("- "):
            continue
        value = stripped[2:].strip()
        if not value.startswith("`") or not value.endswith("`"):
            continue
        item = value.strip("` ")
        normalized = normalize_name(item)
        if normalized in seen:
            continue
        seen.add(normalized)
        items.append(item)
    return items


def load_major_ai_players() -> list[str]:
    text = PLAYBOOK_PATH.read_text()
    match = re.search(
        r"## Major AI Player Required Sweep(.*?)(?:## |\Z)",
        text,
        flags=re.S,
    )
    if not match:
        return []

    section = match.group(1)
    split_marker = "When materially relevant to the tracked"
    primary_block = section.split(split_marker, 1)[0]
    return _extract_backtick_bullets(primary_block)


def load_adjacent_major_providers() -> list[str]:
    text = PLAYBOOK_PATH.read_text()
    match = re.search(
        r"When materially relevant to the tracked(.*?)(?:For each major AI player reviewed|## |\Z)",
        text,
        flags=re.S,
    )
    if not match:
        return []
    return _extract_backtick_bullets(match.group(1))


def load_tracker_metadata() -> dict[str, Competitor]:
    lines = TRACKER_PATH.read_text().splitlines()
    competitors: dict[str, Competitor] = {}
    seen_names: set[str] = set()
    current_category = ""
    priorities = load_priority_watchlist()

    idx = 0
    while idx < len(lines):
        line = lines[idx].strip()
        if line.startswith("## ") and re.match(r"## \d+\.", line):
            current_category = re.sub(r"^## \d+\.\s*", "", line)
            idx += 1
            continue

        if line.startswith("| Company | Status | Notes |") or line.startswith("| Tool / Company | Status | Source |"):
            rows = parse_markdown_table_rows(lines[idx + 2 :])
            for row in rows:
                if len(row) < 3:
                    continue
                name, status, notes = row[:3]
                if name in {"Company", "Tool / Company"}:
                    continue
                if name == "No dedicated competitors added yet":
                    continue
                normalized_name = normalize_name(name)
                if normalized_name in seen_names:
                    continue
                seen_names.add(normalized_name)
                is_priority = any(
                    normalized_name == priority
                    or normalized_name.startswith(priority + " ")
                    or priority.startswith(normalized_name + " ")
                    for priority in priorities
                )
                competitors[normalized_name] = Competitor(
                    name=name,
                    category=current_category,
                    status=status.strip("` "),
                    notes=notes,
                    priority=is_priority,
                )
        idx += 1

    return competitors


def note_name_to_company_name(path: Path) -> str:
    stem_name = path.name.split("-competitor-note.md")[0]
    parts = stem_name.split("-")
    if len(parts) <= 3:
        return stem_name
    company_slug = "-".join(parts[3:])
    words = [word for word in company_slug.split("-") if word]
    if not words:
        return company_slug

    acronyms = {"ai", "ar", "vr", "3d", "2d"}
    normalized_words: list[str] = []
    for word in words:
        if word.lower() in acronyms:
            normalized_words.append(word.upper())
        else:
            normalized_words.append(word.capitalize())
    return " ".join(normalized_words)


def load_competitors() -> list[Competitor]:
    priorities = load_priority_watchlist()
    tracker_metadata = load_tracker_metadata()
    competitors_by_name: dict[str, Competitor] = {}

    for path in sorted(RESEARCH_DIR.glob("*-competitor-note.md")):
        name = note_name_to_company_name(path)
        normalized_name = normalize_name(name)
        metadata = tracker_metadata.get(normalized_name)
        is_priority = any(
            normalized_name == priority
            or normalized_name.startswith(priority + " ")
            or priority.startswith(normalized_name + " ")
            for priority in priorities
        )

        competitor = Competitor(
            name=metadata.name if metadata else name,
            category=metadata.category if metadata else "unmapped competitor note",
            status=metadata.status if metadata else "note only",
            notes=metadata.notes if metadata else "Present in research as a competitor note.",
            priority=metadata.priority if metadata else is_priority,
            note_path=str(path),
        )
        existing = competitors_by_name.get(normalized_name)
        if existing is None or Path(existing.note_path).name < path.name:
            competitors_by_name[normalized_name] = competitor

    return list(competitors_by_name.values())


def find_note_for_competitor(name: str) -> Path | None:
    target = normalize_name(name)
    target_words = set(target.split())
    candidates = sorted(RESEARCH_DIR.glob("*-competitor-note.md"))
    best: tuple[int, Path] | None = None
    for path in candidates:
        stem_name = path.name.split("-competitor-note.md")[0]
        stem_tokens = stem_name.split("-")[3:]
        if not stem_tokens:
            continue
        candidate_name = normalize_name(" ".join(stem_tokens))

        score = 0
        if candidate_name == target:
            score = 100
        elif target in candidate_name or candidate_name in target:
            score = 75
        else:
            candidate_words = set(candidate_name.split())
            overlap = len(target_words & candidate_words)
            if overlap >= 2:
                score = overlap * 10

        if score and (best is None or score > best[0]):
            best = (score, path)

    return best[1] if best else None


def extract_urls(text: str) -> list[str]:
    urls = re.findall(r"https?://[^\s)>\]]+", text)
    seen: set[str] = set()
    result: list[str] = []
    for url in urls:
        if url not in seen:
            seen.add(url)
            result.append(url)
    return result


def is_probably_official(host: str) -> bool:
    third_party_domains = (
        "pitchbook.com",
        "crunchbase.com",
        "cbinsights.com",
        "techcrunch.com",
        "premieralts.com",
        "growjo.com",
        "wellfound.com",
        "bloomberg.com",
        "reuters.com",
        "linkedin.com",
        "g2.com",
        "trustpilot.com",
        "sacra.com",
        "stockanalysis.com",
        "financecharts.com",
        "marketscreener.com",
        "businessinsider.com",
        "theaustralian.com.au",
        "accessnewswire.com",
        "globenewswire.com",
        "producthunt.com",
        "github.com",
    )
    return not any(host == domain or host.endswith("." + domain) for domain in third_party_domains)


def infer_pricing_public(note_text: str, official_urls: list[str]) -> bool | None:
    lowered = note_text.lower()
    if "no clear public pricing found" in lowered:
        return False
    if any("/pricing" in url or "/plans" in url for url in official_urls):
        return True
    return None


def pick_surface_url(urls: list[str], *keywords: str) -> str | None:
    for url in urls:
        lowered = url.lower()
        if any(keyword in lowered for keyword in keywords):
            return url
    return None


def pick_homepage_url(urls: list[str]) -> str | None:
    for url in urls:
        parsed = urlparse(url)
        if not parsed.path.strip("/"):
            return url
    return urls[0] if urls else None


def infer_primary_social_surface(
    social_urls: list[str],
    default_to_linkedin: bool = True,
) -> str | None:
    preferred_hosts = (
        "linkedin.com",
        "twitter.com",
        "x.com",
        "youtube.com",
        "instagram.com",
        "facebook.com",
        "tiktok.com",
        "threads.net",
    )
    if default_to_linkedin:
        preferred_hosts = ("linkedin.com",) + tuple(
            host for host in preferred_hosts if host != "linkedin.com"
        )
    for host in preferred_hosts:
        for url in social_urls:
            if host in url.lower():
                return url
    return social_urls[0] if social_urls else None


def infer_surface_map(official_urls: list[str], social_urls: list[str]) -> dict[str, str | None]:
    return {
        "homepage": pick_homepage_url(official_urls),
        "product": pick_surface_url(
            official_urls,
            "/product",
            "/products",
            "/feature",
            "/features",
            "/software",
            "/platform",
            "/solution",
            "/solutions",
            "/how-it-works",
            "/twikbot",
        ),
        "pricing": pick_surface_url(official_urls, "/pricing", "/plans"),
        "newsroom_blog": pick_surface_url(
            official_urls,
            "/news",
            "/newsroom",
            "/blog",
            "/whats-new",
            "/what-s-new",
            "/updates",
            "/announcements",
            "/release",
            "/changelog",
            "/index",
        ),
        "docs_release": pick_surface_url(
            official_urls,
            "docs.",
            "academy.",
            "/docs",
            "/developer",
            "/developers",
            "/release",
            "/releases",
            "/release-notes",
            "/changelog",
            "/help",
        ),
        "partner_integration": pick_surface_url(
            official_urls,
            "/partner",
            "/partners",
            "/integration",
            "/integrations",
            "/ecosystem",
            "/shopify",
            "/odoo",
            "/salesforce",
            "/api",
        ),
        "case_studies": pick_surface_url(
            official_urls,
            "/case",
            "/cases",
            "/use-case",
            "/use-cases",
            "/customer",
            "/customers",
            "/story",
            "/stories",
            "/success",
        ),
        "primary_social": infer_primary_social_surface(social_urls),
    }


def classify_surface_map_strength(surface_map: dict[str, str | None]) -> str:
    if not surface_map.get("homepage"):
        return "missing"
    present_count = sum(1 for value in surface_map.values() if value)
    if surface_map.get("product") and present_count >= 4:
        return "strong"
    if present_count >= 2:
        return "usable"
    return "weak"


def enrich_from_notes(competitors: list[Competitor]) -> None:
    today = get_today()
    for competitor in competitors:
        note_path = Path(competitor.note_path) if competitor.note_path else find_note_for_competitor(competitor.name)
        if not note_path:
            continue
        competitor.note_path = str(note_path)
        text = note_path.read_text()
        urls = extract_urls(text)
        official_urls: list[str] = []
        official_domains: list[str] = []
        social_urls: list[str] = []

        for url in urls:
            host = urlparse(url).netloc.lower()
            if not host:
                continue
            if host.startswith("www."):
                host = host[4:]
            if any(
                social_host in host
                for social_host in (
                    "linkedin.com",
                    "twitter.com",
                    "x.com",
                    "instagram.com",
                    "youtube.com",
                    "tiktok.com",
                    "facebook.com",
                    "threads.net",
                )
            ):
                if url not in social_urls:
                    social_urls.append(url)
            if not is_probably_official(host):
                continue
            if url not in official_urls:
                official_urls.append(url)
            if host not in official_domains:
                official_domains.append(host)

        competitor.official_urls = official_urls[:20]
        competitor.official_domains = official_domains[:12]
        competitor.social_urls = social_urls[:10]

        note_dt = extract_note_date(note_path)
        competitor.note_date = note_dt.isoformat() if note_dt else None
        competitor.last_official_source_refresh_date = competitor.note_date
        competitor.note_age_days = (today - note_dt).days if note_dt else None
        competitor.freshness_status = classify_freshness(competitor.note_age_days)
        competitor.pricing_public = infer_pricing_public(text, official_urls)
        competitor.official_surface_map = infer_surface_map(official_urls, social_urls)
        competitor.docs_release_surface_present = bool(
            competitor.official_surface_map.get("docs_release")
        )
        competitor.primary_social_monitoring_surface = competitor.official_surface_map.get(
            "primary_social"
        )
        competitor.source_map_strength = classify_surface_map_strength(
            competitor.official_surface_map
        )


def build_manifest() -> dict:
    competitors = load_competitors()
    enrich_from_notes(competitors)
    note_file_count = len(list(RESEARCH_DIR.glob("*-competitor-note.md")))
    major_ai_players = load_major_ai_players()
    adjacent_major_providers = load_adjacent_major_providers()
    manifest = {
        "coverage_scope": "full_unique_competitor_note_set",
        "research_dir": str(RESEARCH_DIR),
        "tracker_path": str(TRACKER_PATH),
        "playbook_path": str(PLAYBOOK_PATH),
        "note_file_count": note_file_count,
        "tracked_competitor_count": len(competitors),
        "priority_count": sum(1 for competitor in competitors if competitor.priority),
        "freshness_policy": {
            "fresh_max_days": 30,
            "aging_max_days": 45,
            "stale_min_days": 46,
        },
        "major_ai_players": major_ai_players,
        "adjacent_major_providers": adjacent_major_providers,
        "competitors": [asdict(competitor) for competitor in competitors],
    }
    return manifest


def extract_coverage_items(text: str) -> dict[str, list[str]]:
    result = {
        "deeper_priority_review": [],
        "light_pass_reviewed": [],
        "reviewed": [],
        "skipped": [],
    }

    coverage_match = re.search(r"(?:## |# )Coverage Checked(.*?)(?:\n## |\n# |\Z)", text, flags=re.S)
    if not coverage_match:
        return result

    coverage_block = coverage_match.group(1)
    competitor_names = [competitor.name for competitor in load_competitors()]
    normalized_lookup = {normalize_name(name): name for name in competitor_names}

    for raw in coverage_block.splitlines():
        stripped = raw.strip()
        if not stripped.startswith("- "):
            continue
        bullet = stripped[2:]
        lowered = bullet.lower()
        matched_names: list[str] = []
        for name in competitor_names:
            pattern = r"(?<![A-Za-z0-9])" + re.escape(name) + r"(?![A-Za-z0-9])"
            if re.search(pattern, bullet):
                matched_names.append(name)

        deduped_matches: list[str] = []
        seen: set[str] = set()
        for name in matched_names:
            normalized = normalize_name(name)
            if normalized in seen:
                continue
            seen.add(normalized)
            deduped_matches.append(name)

        if "skipped" in lowered:
            result["skipped"].extend(deduped_matches)
        elif "priority" in lowered:
            result["deeper_priority_review"].extend(deduped_matches)
        elif any(
            phrase in lowered
            for phrase in (
                "official-source pass reviewed",
                "tracked competitors reviewed",
                "reviewed today",
                "reviewed in this pass",
                "light pass",
            )
        ):
            result["light_pass_reviewed"].extend(deduped_matches)
            result["reviewed"].extend(deduped_matches)

    for key, items in result.items():
        deduped: list[str] = []
        seen: set[str] = set()
        for item in items:
            normalized = normalize_name(item)
            if normalized not in normalized_lookup or normalized in seen:
                continue
            seen.add(normalized)
            deduped.append(normalized_lookup[normalized])
        result[key] = deduped
    return result


def extract_section(text: str, section_name: str) -> str:
    pattern = rf"(?:## |# ){re.escape(section_name)}(.*?)(?:\n## |\n# |\Z)"
    match = re.search(pattern, text, flags=re.S)
    return match.group(1) if match else ""


def section_has_bullets(block: str) -> bool:
    return any(line.strip().startswith("- ") for line in block.splitlines())


def extract_competitor_mentions(block: str, competitor_names: list[str]) -> list[str]:
    mentions: list[str] = []
    for name in competitor_names:
        pattern = r"(?<![A-Za-z0-9])" + re.escape(name) + r"(?![A-Za-z0-9])"
        if re.search(pattern, block):
            mentions.append(name)
    deduped: list[str] = []
    seen: set[str] = set()
    for name in mentions:
        normalized = normalize_name(name)
        if normalized in seen:
            continue
        seen.add(normalized)
        deduped.append(name)
    return deduped


def extract_source_tier_evidence(text: str) -> dict[str, bool]:
    coverage_block = extract_section(text, "Coverage Checked")
    lowered = coverage_block.lower()
    return {
        "website": any(
            token in lowered
            for token in (
                "homepage",
                "website",
                "product",
                "pricing",
                "official/first-party surfaces",
                "official-source",
            )
        ),
        "social": any(token in lowered for token in ("linkedin", "social", "primary social")),
        "docs_release": any(token in lowered for token in ("docs", "release", "changelog", "academy")),
        "partner_integration": any(
            token in lowered for token in ("partner", "integration", "ecosystem")
        ),
        "case_studies": any(
            token in lowered
            for token in (
                "case study",
                "case-study",
                "customer story",
                "customer-story",
                "use case",
                "use-case",
            )
        ),
        "third_party": any(
            token in lowered
            for token in (
                "pitchbook",
                "crunchbase",
                "cb insights",
                "techcrunch",
                "reuters",
                "wellfound",
                "bloomberg",
            )
        ),
    }


def build_maintenance_candidates(
    tracked: list[dict],
    limit: int | None = None,
) -> list[dict]:
    candidates: list[dict] = []
    for item in tracked:
        reasons: list[str] = []
        recommended_refresh = "patch"

        if item.get("freshness_status") in {"aging", "stale"}:
            reasons.append(f"note freshness is {item['freshness_status']}")
            recommended_refresh = "surface_refresh"
        if item.get("source_map_strength") in {"missing", "weak"}:
            reasons.append(f"source map is {item['source_map_strength']}")
            recommended_refresh = "full_refresh"
        if not item.get("official_surface_map", {}).get("newsroom_blog"):
            reasons.append("missing newsroom/blog surface")
        if not item.get("primary_social_monitoring_surface"):
            reasons.append("missing primary social monitoring surface")

        if not reasons:
            continue

        candidates.append(
            {
                "name": item["name"],
                "priority": item.get("priority", False),
                "note_path": item.get("note_path"),
                "note_date": item.get("note_date"),
                "note_age_days": item.get("note_age_days"),
                "freshness_status": item.get("freshness_status"),
                "source_map_strength": item.get("source_map_strength"),
                "recommended_refresh": recommended_refresh,
                "reasons": reasons,
            }
        )

    candidates.sort(
        key=lambda item: (
            0 if item["priority"] else 1,
            0 if item["freshness_status"] == "stale" else 1 if item["freshness_status"] == "aging" else 2,
            -(item["note_age_days"] or -1),
            item["name"].lower(),
        )
    )
    return candidates[:limit] if limit else candidates


def audit_report(report_path: Path) -> dict:
    manifest = build_manifest()
    tracked = manifest["competitors"]
    tracked_names = {normalize_name(item["name"]): item["name"] for item in tracked}
    priority_names = {
        normalize_name(item["name"]): item["name"] for item in tracked if item["priority"]
    }
    competitor_names = [item["name"] for item in tracked]

    text = report_path.read_text()
    coverage = extract_coverage_items(text)
    source_tier_evidence = extract_source_tier_evidence(text)
    required_sections = [
        "What Changed Since Last Run",
        "Coverage Checked",
        "Material Competitor Changes",
        "Provider / Market Signals",
        "Recommended Updates to Existing Competitor Notes",
    ]
    section_presence = {
        section: bool(extract_section(text, section))
        for section in required_sections
    }
    material_competitor_changes_block = extract_section(text, "Material Competitor Changes")
    recommended_updates_block = extract_section(
        text, "Recommended Updates to Existing Competitor Notes"
    )
    material_change_mentions = extract_competitor_mentions(
        material_competitor_changes_block, competitor_names
    )
    recommended_update_mentions = extract_competitor_mentions(
        recommended_updates_block, competitor_names
    )
    maintenance_candidates = build_maintenance_candidates(tracked, limit=15)

    covered_normalized: set[str] = set()
    for group_items in coverage.values():
        for item in group_items:
            normalized = normalize_name(item)
            if normalized in tracked_names:
                covered_normalized.add(normalized)

    missing_tracked = [
        original
        for normalized, original in tracked_names.items()
        if normalized not in covered_normalized
    ]
    missing_priority = [
        original
        for normalized, original in priority_names.items()
        if normalized not in covered_normalized
    ]

    findings: list[str] = []
    for section, present in section_presence.items():
        if not present:
            findings.append(f"Report is missing a `{section}` section.")
    if missing_priority:
        findings.append(
            "Priority competitors missing from explicit coverage: "
            + ", ".join(sorted(missing_priority))
        )
    if missing_tracked:
        findings.append(
            "Tracked competitors missing from explicit coverage: "
            + ", ".join(sorted(missing_tracked))
        )
    if coverage["reviewed"] and not any(source_tier_evidence.values()):
        findings.append(
            "Coverage marks competitors as reviewed, but no source-tier evidence was recorded."
        )
    if not source_tier_evidence["website"]:
        findings.append("Coverage is missing website/product/pricing source-tier evidence.")
    if not source_tier_evidence["third_party"]:
        findings.append("Coverage is missing third-party funding/news source-tier evidence.")
    if not section_has_bullets(recommended_updates_block):
        findings.append(
            "`Recommended Updates to Existing Competitor Notes` must contain at least one bullet."
        )
    if (
        not material_competitor_changes_block.strip()
        and "No important market updates" not in text
    ):
        findings.append(
            "`Material Competitor Changes` is empty without an explicit `No important market updates` signal."
        )

    manifest_has_docs = any(
        item.get("official_surface_map", {}).get("docs_release") for item in tracked
    )
    manifest_has_social = any(item.get("primary_social_monitoring_surface") for item in tracked)
    manifest_has_partner = any(
        item.get("official_surface_map", {}).get("partner_integration") for item in tracked
    )
    manifest_has_cases = any(
        item.get("official_surface_map", {}).get("case_studies") for item in tracked
    )

    if manifest_has_social and not source_tier_evidence["social"]:
        findings.append("Coverage is missing LinkedIn / primary social source-tier evidence.")
    if manifest_has_docs and not source_tier_evidence["docs_release"]:
        findings.append("Coverage is missing docs / release / changelog source-tier evidence.")
    if manifest_has_partner and not source_tier_evidence["partner_integration"]:
        findings.append("Coverage is missing partner / integration / ecosystem source-tier evidence.")
    if manifest_has_cases and not source_tier_evidence["case_studies"]:
        findings.append("Coverage is missing customer-story / case-study source-tier evidence.")

    if maintenance_candidates and not recommended_update_mentions:
        findings.append(
            "Maintenance candidates exist in the manifest, but the report does not name any competitor in `Recommended Updates to Existing Competitor Notes`."
        )
    material_or_recommended_mentions = set(material_change_mentions) | set(
        recommended_update_mentions
    )
    if section_has_bullets(material_competitor_changes_block) and not material_or_recommended_mentions:
        findings.append(
            "`Material Competitor Changes` has bullets, but no tracked competitor names were detected there or in `Recommended Updates`."
        )

    return {
        "report_path": str(report_path),
        "tracked_competitor_count": len(tracked_names),
        "covered_competitor_count": len(covered_normalized),
        "missing_priority": sorted(missing_priority),
        "missing_tracked": sorted(missing_tracked),
        "section_presence": section_presence,
        "coverage": coverage,
        "source_tier_evidence": source_tier_evidence,
        "material_change_mentions": material_change_mentions,
        "recommended_update_mentions": recommended_update_mentions,
        "maintenance_candidates": maintenance_candidates,
        "findings": findings,
        "ok": not findings,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)

    manifest_parser = subparsers.add_parser(
        "manifest",
        help="Print the full daily coverage manifest built from competitor notes.",
    )
    manifest_parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON.")

    audit_parser = subparsers.add_parser("audit-report", help="Audit coverage in a report.")
    audit_parser.add_argument("report", help="Path to a daily or weekly report markdown file.")
    audit_parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON.")

    maintenance_parser = subparsers.add_parser(
        "maintenance-candidates",
        help="List stale or weakly mapped competitor notes for the weekly maintenance loop.",
    )
    maintenance_parser.add_argument(
        "--limit",
        type=int,
        default=15,
        help="Maximum number of maintenance candidates to return.",
    )
    maintenance_parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON.")

    args = parser.parse_args()

    if args.command == "manifest":
        data = build_manifest()
    elif args.command == "audit-report":
        report_path = Path(args.report).resolve()
        data = audit_report(report_path)
    elif args.command == "maintenance-candidates":
        manifest = build_manifest()
        data = {
            "as_of_date": get_today().isoformat(),
            "candidate_count": len(
                build_maintenance_candidates(manifest["competitors"], limit=args.limit)
            ),
            "candidates": build_maintenance_candidates(
                manifest["competitors"], limit=args.limit
            ),
        }
    else:
        parser.error(f"Unknown command: {args.command}")
        return 2

    json.dump(data, sys.stdout, indent=2 if args.pretty else None, ensure_ascii=False)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
