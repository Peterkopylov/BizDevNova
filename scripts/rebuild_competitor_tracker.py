from pathlib import Path
import re


RESEARCH_DIR = Path("/Users/peter.kopylov/Documents/BizDev/research")
TRACKER_PATH = RESEARCH_DIR / "2026-04-07-competitor-landscape-tracker.md"


def extract_title(path: Path) -> str:
    text = path.read_text(errors="ignore")
    match = re.search(r"^#\s+(.+?)\s+Competitor Note\s*$", text, re.M)
    if match:
        return match.group(1)
    stem = path.stem.removesuffix("-competitor-note")
    return stem


def build_tracker() -> str:
    note_files = sorted(RESEARCH_DIR.glob("*competitor-note.md"))
    items = sorted((extract_title(path).lower(), extract_title(path), path.name) for path in note_files)

    lines = [
        "# Competitor Landscape Tracker",
        "",
        "## Summary",
        "",
        "This tracker is the master coverage index for the daily funding and competitor-update scans.",
        "The primary scan universe is all published `*-competitor-note.md` files in `/Users/peter.kopylov/Documents/BizDev/research`.",
        "Recalculate the current coverage count from the note corpus whenever this file is rebuilt; do not treat any prior count in this file as operational.",
        "The bucket lists below are optional prioritization aids, not the source of truth for daily coverage.",
        "",
        "Status labels:",
        "",
        "- `profile complete` - a structured competitor note exists and should be included in scan coverage",
        "- `shortlisted` - identified as relevant, but not yet fully profiled",
        "- `watchlist` - adjacent or lower-priority competitor worth remembering",
        "",
        "## Master Competitor Coverage List",
        "",
        f"Current competitor-note count at last rebuild: `{len(items)}`",
        "",
        "| Company | Status | Note |",
        "|---|---|---|",
    ]

    for _, title, filename in items:
        lines.append(
            f"| {title} | `profile complete` | [{filename}](/Users/peter.kopylov/Documents/BizDev/research/{filename}) |"
        )

    lines.extend(
        [
            "",
            "## Priority Watch Areas",
            "",
            "- Image generation and creative AI",
            "- Marketing and ad creative",
            "- Commerce and marketplace optimization",
            "- Consistency and identity workflows",
            "- Design workflow platforms",
            "- Infrastructure and workflow engines",
            "- Image-to-3D and adjacent asset-conversion tools",
            "- Interactive, simulation, and workflow-adjacent creation tools",
            "",
            "## Suggested Next Step",
            "",
            "- Keep adding new competitors as dated `*-competitor-note.md` files, then rerun this rebuild script when you want the tracker refreshed.",
        ]
    )

    return "\n".join(lines) + "\n"


def main() -> None:
    TRACKER_PATH.write_text(build_tracker())


if __name__ == "__main__":
    main()
