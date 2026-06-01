# Daily Funding News Monitor Workflow

## Goal

Check the latest funding, valuation, acquisition, and market-structure news each morning for:

- image generation
- creative AI
- visual AI
- multimodal creative tools
- 2D-to-3D and 3D-to-2D tools
- workflow competitors we already track

Also check tracked competitors' own sites for:

- blog posts
- product announcements
- launch notes
- changelog entries
- release notes
- pricing-page changes
- positioning and packaging changes
- partner / ecosystem motion
- customer-story / case-study signals

## Primary Source Stack

- PitchBook
- Crunchbase
- CB Insights
- TechCrunch

## Official Competitor Source Layer

For already tracked competitors, review their own public update surfaces when available.

Treat the competitor scan as a `semi-automated daily report + note-maintenance loop`, not just a list of headline launches.

This must cover the full competitor-note set from:

- all `*-competitor-note.md` files in `/Users/peter.kopylov/Documents/BizDev/research`

The daily coverage manifest is the full unique `*-competitor-note.md` set in `research`.

The landscape tracker remains useful only as a category map and for shortlist/community items that do not yet have full competitor notes. It must not be used as the primary daily coverage manifest.

The priority watchlist affects `depth`, not `coverage`.

Daily rule:

- a run is incomplete if it only reviews the priority watchlist
- coverage must span the full unique competitor-note set in `research`
- a run is also incomplete if it only reviews the landscape tracker subset
- if a tracked company has no usable official update surface, explicitly record that in `Coverage Checked` rather than silently omitting it

For each tracked competitor with a company name, do at least a light pass across:

- homepage hero changes
- product pages
- pricing pages
- blog/news pages
- changelog / release notes
- launch announcements
- primary social monitoring surface when already known from the competitor note or verifiable from official linked social profiles

### Required Source Tiers

Use a fixed source stack for each competitor whenever the surfaces exist:

- `Tier 1: Website surfaces`
- `Tier 2: LinkedIn / primary official social monitoring surface`
- `Tier 3: Docs / release notes / changelogs`
- `Tier 4: Partner / integration / ecosystem pages`
- `Tier 5: Customer stories / case studies`
- `Tier 6: Third-party funding/news`

Interpretation by tier:

- `Website surfaces` are the source of record for positioning, packaging, pricing, feature hierarchy, ICP, vertical focus, and partner motion
- `LinkedIn / primary official social` is the early-warning layer for GTM pushes, launches, campaigns, partnerships, and soft repositioning
- `Docs / release notes / changelogs` are the truth layer for feature depth, SDK/platform maturity, and workflow expansion
- `Partner / integration / ecosystem pages` are the hidden GTM layer
- `Customer stories / case studies` are the ICP validation layer
- `Third-party funding/news` is reserved for funding, valuation, acquisition, and external market-structure changes

For each competitor note, maintain a known official surface map containing, at minimum when discoverable:

- homepage
- main product page
- pricing page if public
- newsroom/blog page
- docs/release-notes page if present
- partner/integration page if present
- customer-story / case-study page if present
- primary social monitoring surface

Default:

- for B2B competitors, use `LinkedIn` as the default primary social monitoring surface unless another official surface is clearly stronger

## Major AI Player Required Sweep

In addition to the full competitor-note corpus, every daily run must also check major AI platform players whose launches can materially reshape the tracked landscape even when they are not yet standalone competitor notes.

Treat these as explicit required provider surfaces, not optional background checks:

- `OpenAI`
- `Google`
- `Anthropic`
- `xAI / Grok`

When materially relevant to the tracked image-generation, creative-AI, visual-AI, multimodal-creative, 2D-to-3D, 3D-to-2D, world-model, simulation, or workflow-competitor landscape, also check adjacent major-provider surfaces such as:

- `Meta`
- `Adobe`
- `Black Forest Labs`
- `Alibaba / Qwen`

For each major AI player reviewed, check the most relevant official public surfaces that exist at the time, such as:

- official blog / newsroom / announcements / index pages
- research / model-card / release-note pages
- product launch pages
- pricing / plan pages when packaging access changes
- official developer or API update surfaces when the change affects product availability or workflow integration

Coverage rule for these providers:

- every daily run should explicitly name which major AI players were checked in `Coverage Checked`
- if a major AI player had no material hit, say so implicitly in the coverage line rather than omitting the provider
- if a provider surface was unreachable or ambiguous, call that out explicitly
- these provider checks add to the competitor-note sweep; they do not replace it

## Current Priority Watchlist

For the current period, give extra attention to:

- Canva
- Krea
- FLORA
- Higgsfield
- Runway

Reason:

- these companies are currently among the most important signals for workflow, control, consistency, and major product movement
- Canva is especially important this week because a Thursday update is expected on `April 16, 2026`

Important rule:

- the priority watchlist gets extra scrutiny
- it does **not** replace daily coverage of the rest of the competitor-note set
- a watchlist-only pass is a failed run, even if the watchlist was reviewed deeply

## Secondary Source Stack

- PremierAlts
- Growjo
- Wellfound
- Bloomberg
- Reuters
- official company blog posts and funding announcements

## Output Rule

Create a new date-prefixed note in `research/` only when there are material updates.

Good default filename pattern:

- `YYYY-MM-DD-daily-funding-and-market-news.md`

The local markdown note is the hard-copy source of truth.

Important:

- the scan has two outputs: the short daily report and the maintenance signal for existing competitor notes
- even on quieter days, the scan must still say which competitor notes now look stale or need refreshes

When a material update note is created, also publish that same-day update into:

- `Google Doc: Competitors Updates`
- `https://docs.google.com/document/d/1w6RBNnoyv96u5DGkUkdqSJWa6UgOnJjljP0pi2bMnKc/edit`

Google Doc publishing rule:

- create or reuse one tab per run date
- daily tabs should be titled exactly `YYYY-MM-DD`
- weekly sweep tabs should be titled `YYYY-MM-DD Weekly` to avoid collisions with the daily tab on the same date
- do not create a Google Doc tab when there is no material update note to publish

Google Doc formatting rule:

- use the markdown note as the source content
- convert markdown into Google-Doc-friendly text before publishing
- preserve headings and bullets as readable text
- remove raw markdown link syntax like `[label](url)`
- convert each source link into a real clickable Google Docs hyperlink
- verify after publish that the tab title is correct and links are clickable

## Weekly Change-Detection Rule

The weekly full sweep should behave as a `net new change detector`, not as a weekly rewrite of known information.

Before writing a weekly update, compare the current findings against:

- yesterday's latest relevant research outputs
- the latest prior weekly sweep

If there are no materially new changes versus the known state from yesterday:

- output exactly `No important updates`
- do not create a new markdown note
- do not rewrite prior summaries in new words
- do not create a Google Doc tab
- do not update competitor notes or comparison files

Only create the longer weekly output when there are real net new material changes.

## What Counts as Material

- new funding round
- new valuation signal
- acquisition or merger
- new market-map/report signal that changes category understanding
- major public company move that affects the creative/image-generation landscape
- meaningful official competitor update such as:
  - new product launch
  - new feature wedge
  - major pricing change
  - rights/commercial-policy change
  - visible GTM or positioning shift

Treat these as material even when there is no single launch headline:

- homepage or product-page headline / value-prop changed meaningfully
- nav, page architecture, or product packaging changed in a way that signals a new wedge
- pricing, plan ladder, usage caps, or enterprise packaging changed
- new docs/release-note activity reveals meaningful product depth or distribution expansion
- partner/integration pages reveal new channels, ecosystems, or implementation strategy
- LinkedIn or official socials repeatedly reinforce a new GTM motion across multiple recent posts
- case studies or customer stories show a new vertical or buyer priority
- external funding / valuation / acquisition signal is new and credible

Important detection rule:

- treat a `multi-surface accumulated shift` as material even if there is no single launch post

## Suggested Output Structure

- `What Changed Since Last Run`
- `Coverage Checked`
- `Material Competitor Changes`
- `Provider / Market Signals`
- `Recommended Updates to Existing Competitor Notes`

Optional sections when useful:

- `Summary`
- `Why It Matters`
- `Sources`
- `Manual Rerun Check`

## Coverage Rule

Every daily run should explicitly record coverage.

The `Coverage Checked` section should:

- list all competitor-note companies reviewed in the run
- reflect the full unique competitor-note set in `research`
- note which ones received only a light pass
- note which ones received deeper priority review
- call out any skipped competitors and why they were skipped
- not substitute the landscape tracker subset for the full competitor-note set
- record source-tier evidence for the run in human-readable form

The `Coverage Checked` section must explicitly mention source-tier evidence such as:

- website/product/pricing surfaces checked
- LinkedIn / primary social checked
- docs / release / changelog surfaces checked where known
- partner / integration / ecosystem surfaces checked where relevant
- customer-story / case-study surfaces checked where relevant
- third-party funding/news surfaces checked

Do not treat `reviewed` as sufficient if the report does not say which source tiers were actually checked.

This prevents silent omissions when a company has a material update that is older than the current day but still newly relevant to us.

## Update Rule for Existing Files

If a new signal materially changes an existing competitor profile:

- update the relevant `*-competitor-note.md`
- update valuation/funding fields if needed
- update the `Official Site Updates / News Signal` section when relevant
- update the master comparison CSV only when the new signal is clear enough to belong in the comparison layer

The `Recommended Updates to Existing Competitor Notes` section is mandatory in every run.

Each recommendation should say:

- competitor name
- what changed
- which sections in the competitor note are now stale
- whether this needs a full note refresh or only a small patch

If there are no material reportable market changes but stale-note drift is detected, write:

- `No important market updates`

and still include a non-empty `Recommended Updates to Existing Competitor Notes` section.

This keeps note maintenance from being blocked by a quiet market day.

## Note Freshness And Maintenance

Track competitor-note freshness with these defaults:

- `fresh`: note updated in the last `30` days
- `aging`: note updated `31-45` days ago
- `stale`: note updated more than `45` days ago

Treat any note older than `30` days as a maintenance candidate for a source refresh, even if no clear material change is found that day.

Use a two-speed loop:

- `Daily light pass`: surface-level review across the full competitor-note set using the source tiers above
- `Weekly maintenance pass`: refresh a bounded set of stale or flagged notes, prioritizing:
  - notes with detected material changes
  - notes older than `30` days
  - priority competitors
  - competitors with incomplete or weak source maps

## Scope Guardrail

Do not log weak noise just to create a note.

Prefer:

- fewer but meaningful updates

over:

- a long list of low-signal links

## Working Principle

The monitor should behave like a practical market analyst, not a link scraper.

The point is to tell us:

- what changed
- why it matters
- which tracked competitors or market theses are affected

That includes both:

- external venture/news signals
- official competitor product/update signals
