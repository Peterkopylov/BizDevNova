# Nova Workflow Market Matrix

Research date: `April 23, 2026`

## How to Read This

This matrix mixes:

- workspace research already collected in this repo
- Nova / Delightex internal strengths
- external market-size proxies for category potential

Important caution:

- some of these workflows are not yet clean standalone market categories
- in those cases, `market potential` uses the nearest credible category proxy, not a perfect one-to-one market definition

Definition note:

- in this matrix, `feature` means a reusable product capability or workflow primitive that users need in order to produce the desired output
- examples include things like camera controls, editable scene graph, templates, import/export, collaboration, brand/style controls, no-code logic, analytics, and publishing
- the goal is to identify which capabilities can become shared Nova platform layers across multiple workflows, not only one-off buttons for a single use case

## Common Reusable Features

| Common feature | Feature explanation | Why it matters across Nova workflows |
| --- | --- | --- |
| `Editable scene/world graph` | A structured representation of the world: objects, hierarchy, positions, relationships, states, and editable properties. | Core foundation for image, video, games, 3D scenes, websites, simulations, and presentations. Everything needs a structured world users can inspect and modify. |
| `Camera system` | Tools for defining viewpoints, framing, camera paths, shots, zoom, focus, and transitions. | Needed for still images, video shots, presentation paths, product showcases, websites, simulations, and game views. |
| `Templates / starters` | Prebuilt scenes, workflows, layouts, roleplay scenarios, game mechanics, website sections, or presentation structures that users can customize. | Helps users begin fast across games, websites, roleplays, presentations, scenes, and marketing outputs. |
| `Asset library` | A reusable collection of 3D objects, characters, environments, materials, UI elements, effects, sounds, and interaction components. | Reusable objects, characters, environments, materials, UI elements, and interaction components are useful everywhere. |
| `Style / brand controls` | Controls for visual identity: colors, fonts, materials, lighting style, rendering look, logos, brand kits, and reusable style presets. | Needed for marketing images, videos, presentations, websites, product showcases, and business-facing simulations. |
| `Collaboration` | Shared editing, comments, permissions, version history, review flows, and team workspaces. | Useful across teams: design, education, sales, marketing, training, game creation, and business presentation workflows. |
| `Export / publish / share link` | The system that turns a project into a usable output: image, video, web link, playable game, embedded scene, simulation, or exported file. | Every workflow needs a way to produce something usable: image, video, game, web page, experience, deck-like flow, or simulation link. |
| `No-code logic / interaction triggers` | Visual or simple logic for events, conditions, actions, branching, user input, hotspots, scoring, and behavior. | Useful for games, simulations, websites, presentations, product demos, and interactive scenes. |
| `State persistence` | Saving and reusing the same world, assets, characters, styles, logic, and user progress across edits, outputs, and sessions. | Important for consistent scenes, repeatable generation, simulations, games, websites, and multi-step editing. |
| `Preview / test instantly` | Fast local or browser-based playback so users can immediately see, test, and iterate on what they are building. | Users need fast feedback loops across all workflows. |
| `Analytics / usage tracking` | Measurement of views, engagement, completion, actions, decisions, scores, conversions, or learning outcomes. | Especially valuable for business workflows: simulations, presentations, websites, product demos, and sales experiences. |
| `Import pipeline` | Ways to bring external inputs into Nova: slides, docs, images, scripts, 3D assets, product models, CSV/JSON, brand kits, and references. | Needed to bring in slides, docs, images, 3D assets, brand kits, product models, scripts, and source content. |

## Nova Strengths Used in This Framing

From the internal strengths note, the main reusable advantages are:

- fast engine that works on lower-end devices
- cross-platform runtime
- collaborative editor
- `CoBlocks` for accessible logic / no-code behavior
- 3D-native UI framework
- deep editor maturity and many internal features already built
- strong fit for products built around `environment + action + consequence`
- strong fit for the thesis: `editor of the world before it is rendered`

## Matrix

| Feature / Workflow | Market | Direct competitors | Adjacent competitors | Market size | CAGR | CAGR analysis | Funding signals, last 1-2 years | Target users | Key features needed by default | Our potential angle | Best competitor |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- | --- | --- | --- |
| `3D scene -> 2D image` | `3D rendering / structured visual commerce / product visualization` | `3-4` | `6-7` | `USD 4.85B` | `19.6%` | [Grand View Research](https://www.grandviewresearch.com/industry-analysis/3d-rendering-market-report) | `0` clean recent direct rounds verified; adjacent visual/creative AI shows `5+` rounds and `~USD 499M+` known, including Black Forest Labs `$300M`, Higgsfield `$80M`, FLORA `$42M`, Krea `~$47M`, Recraft `$30M`. | ecommerce teams, furniture/home brands, manufacturers, product marketers, sales enablement teams, creative ops teams | camera presets, lighting/material controls, batch render variants, product/scene consistency, brand/style presets, editable scene graph, export for ads/catalog/social, fast iteration loops | Strongest if Nova is positioned as `layout-first controllable generation`, not another prompt image tool. The advantage is structured scenes, repeatable composition, lower-end device support, and future expansion from still image into interactive product experiences. | [Spaces](https://getspaces.ai/) |
| `3D scene -> video` | `AI video generation` with a controllable `3D-first` wedge | `1-2` | `3-4` | `USD 946.4M` | `20.3%` | [Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-video-generator-market-report) | `3` major adjacent rounds and `~USD 1.295B` known: Luma `$900M Series C` in `2025`, Runway `$315M` in `2026`, Higgsfield `$80M` Series A extension in `2026`. | marketers, agencies, social content teams, filmmakers, product storytelling teams, brands needing repeatable motion content | path/camera animation, timeline/editor, reference-consistent characters/objects, scene-state persistence, style lock, shot sequencing, render queue, export presets, optional audio/voice sync later | Nova should avoid competing head-on as a generic text-to-video tool. Better wedge: `directable motion from an editable 3D world` with persistent scene state, controllable cameras, and reusable assets. This is closer to production infrastructure than prompt magic. | [PentoPix](https://www.pentopix.com/3d_world) |
| `Text -> game` | `Game engines / AI-assisted game creation` | `5-7` | `8-11` | `USD 3.58B` | `18.4%` | [Grand View Research](https://www.grandviewresearch.com/industry-analysis/game-engines-market-report) | `0` clean recent direct startup rounds with disclosed amounts in the reviewed notes; older/indirect signals include Rosebud `4` rounds with latest `Seed` but no amount, GDevelop `Pre-Seed`, Buildbox parent AppOnboard `Series B`, and public-company/incumbent capital from Roblox, Unity, and Epic. | beginners, students, educators, hobbyists, indie creators, small studios, branded interactive teams | prompt-to-playable starter generation, editable world, no-code logic, `CoBlocks` progression, templates, asset/state inspector, test/play instantly, publish to web/mobile, multiplayer hooks, monetization/export path | This is one of Nova's most natural fits because we already have engine depth, cross-platform runtime, collaborative editing, and beginner-friendly logic. The angle is `from vibe coding to real editable game logic`, not just toy generation. | [Rosebud](https://rosebud.ai/) |
| `Text/Image -> editable 3D scene` | `3D mapping / 3D modeling / world generation` | `1-2` | `4-6` | `USD 7.93B` | `16.2%` | [Grand View Research](https://www.grandviewresearch.com/industry-analysis/3d-mapping-3d-modeling-market) | `3+` rounds and `~USD 1.243B+` known: World Labs `$1B` in `2026` plus `$230M` in `2024`, SpAItial `$13M Seed`, Meshy `2` rounds with undisclosed amount. | 3D artists, game teams, designers, virtual production teams, agencies, education creators, simulation builders | image/text-to-scene creation, meaningful scene editability, object replacement, layout preservation, spatial consistency, import/export, collaboration, asset library, camera setup, behavior-ready scene graph | Nova can play a stronger workflow position than pure model players: `editable world generation for downstream use`. The differentiator is not prettiest first output, but controllable scene structure plus collaboration plus the ability to turn scenes into simulation/game/web outputs later. | [Marble / World Labs](https://www.worldlabs.ai/) |
| `Text -> AI simulation (roleplay)` | `Simulation learning / AI conversation training` | `5-6` | `7-8` | `USD 29.15B` | `16.4%` | [Simulation learning market analysis](https://www.einpresswire.com/article/898329838/simulation-learning-market-to-grow-at-16-4-cagr-during-2026-2030-reaching-53-5-billion-by-2030) | `2+` rounds and `USD 40M+` known: Yoodli `$40M Series B` in `2025`; Second Nature shows `Series A` but amount not cleanly visible; Mursion has `5` historical rounds but latest visible amount is older than the 1-2 year window. | enterprise L&D teams, sales enablement, universities, soft-skills training, interview/presentation coaching, management training | scenario builder, persona goals, relationship modeling, multi-agent orchestration, scoring/rubrics, analytics, replay/debrief, branch logic, voice later, team dashboards | Nova has a differentiated angle if it goes beyond chat into `spatial and multi-party simulation`. The engine, collaboration, and control systems let us sell `rehearsal infrastructure`, especially for group scenarios, not just single-bot conversation. | [Second Nature](https://www.secondnature.ai/) |
| `Presentation (slides) -> 3D experience` | `Presentation software` / `AI presentation generation` / interactive demo tooling | `0-1` | `2-4` | `USD 9.65B` | `14.6%` | [Presentation software market analysis](https://www.thebusinessresearchcompany.com/report/presentation-software-global-market-report) | `1` adjacent 3D-web/experience-builder round and `USD 10M` known: Spline `$10M Series A` in `2024`; no separate Omma funding verified; AI-presentation competitors have market activity but no clean direct `slides -> 3D experience` funding signal in the folder. | sales teams, founders, agencies, enterprise comms, conference speakers, solutions engineers, product marketing | slide/document import, deck-to-scene conversion, guided narrative flow, interactive hotspots, brand-safe templates, presenter mode, analytics, collaboration, export/share link, mobile-safe playback | This could be a sharp Nova wedge because most AI presentation tools stop at flat slides. Our angle is `turn narrative into explorable environment` for business storytelling, demos, onboarding, and trade-show or sales use. The 3D UI framework matters here. | [Omma](https://omma.build/) |
| `3D website builder` | `Website builder software` with a `3D-native` layer | `0-1` | `3-5` | `USD 6.38B` | `9.8%` | [Website builder software market analysis](https://www.researchandmarkets.com/reports/6075310/website-builder-software-market-report) | `1` adjacent/direct ecosystem round and `USD 10M` known: Spline `$10M Series A` in `2024`; Spline also raised `$15M Seed` in `2023`, but that is outside the strict 1-2 year window. No separate Omma funding verified. | designers, creative agencies, startups, premium brands, ecommerce brands, portfolio creators, campaign microsite teams | prompt/site starter, no-code layout, responsive publishing, 3D scene embedding/editing, interaction triggers, CMS/content hooks, templates, performance optimization, analytics, collaboration | Strong if positioned as `3D-native site creation without heavy dev work`, especially on devices where many 3D experiences fail. Nova's low-end performance and cross-platform runtime are a real advantage here, but this market may pull toward agency/design-led buyers more than core product buyers. | [Omma](https://omma.build/) |

## Short Strategic Read

### Best fit with Nova's existing strengths

The strongest natural fits look like:

1. `Text -> game`
2. `Text/Image -> editable 3D scene`
3. `Text -> AI simulation`

Why:

- they use the engine as a real product advantage, not cosmetic packaging
- they benefit from collaboration, cross-platform runtime, and no-code logic
- they align with `environment + action + consequence`

### Best near-term wedge if we want a clear commercial story

The cleanest commercial wedges appear to be:

1. `3D scene -> 2D image`
2. `Text -> AI simulation`
3. `Presentation -> 3D experience`

Why:

- buyers already understand the workflow pain
- value can be explained without teaching people a new category from scratch
- Nova can still differentiate through controllability and interactivity

### Most strategically ambitious

The most strategically ambitious bets are:

1. `Text/Image -> editable 3D scene`
2. `3D scene -> video`
3. `3D website builder`

Why:

- these sit close to where world models, controllable generation, and interactive web are heading
- but the markets are noisier and the category boundaries are less settled

## Recommended Positioning Principle

Across almost all of these, the strongest Nova story is probably not:

- `we also generate`

It is:

- `we give you an editable world before render or playback`

That supports a clearer product thesis:

- structured generation
- persistent state
- controllable variation
- collaboration
- usable downstream outputs

## Competitor Count Notes

- Counts above are now based on the research folder with a stricter standard:
- `direct decent competitor` means a productized workflow a buyer could plausibly choose for that exact job today
- `adjacent` includes infrastructure layers, broader platforms, frontier betas, open-source benchmarks, or neighboring workflows
- `3D website builder` is especially fragile in the current notes:
- `Dora` appears only inside one landscape note in this repo and does not have a dedicated competitor note or follow-up validation here
- because of that, the folder currently supports at most `0-1 direct` rather than a confident broader direct count
- `Text/Image -> editable 3D scene` is also much earlier than it first looked:
- the folder supports `Marble` as the clearest productized direct player
- `PentoPix` is a strong practical adjacent workflow competitor
- `SpAItial`, `WorldGen`, and `Tencent HunyuanWorld` are strategically important, but are better treated as frontier or benchmark adjacents than mature direct commercial peers

## External Market-Size Sources Used

- `3D rendering market`: Grand View Research  
  [https://www.grandviewresearch.com/industry-analysis/3d-rendering-market-report](https://www.grandviewresearch.com/industry-analysis/3d-rendering-market-report)
- `AI video generator market`: Grand View Research  
  [https://www.grandviewresearch.com/industry-analysis/ai-video-generator-market-report](https://www.grandviewresearch.com/industry-analysis/ai-video-generator-market-report)
- `Game engines market`: Grand View Research  
  [https://www.grandviewresearch.com/industry-analysis/game-engines-market-report](https://www.grandviewresearch.com/industry-analysis/game-engines-market-report)
- `3D mapping & 3D modeling market`: Grand View Research  
  [https://www.grandviewresearch.com/industry-analysis/3d-mapping-3d-modeling-market](https://www.grandviewresearch.com/industry-analysis/3d-mapping-3d-modeling-market)
- `Simulation learning market`: The Business Research Company summary surfaced via industry press  
  [https://www.einpresswire.com/article/898329838/simulation-learning-market-to-grow-at-16-4-cagr-during-2026-2030-reaching-53-5-billion-by-2030](https://www.einpresswire.com/article/898329838/simulation-learning-market-to-grow-at-16-4-cagr-during-2026-2030-reaching-53-5-billion-by-2030)
- `Conversational AI market`: Grand View Research  
  [https://www.grandviewresearch.com/industry-analysis/conversational-ai-market-report](https://www.grandviewresearch.com/industry-analysis/conversational-ai-market-report)
- `Presentation software market`: The Business Research Company summary  
  [https://www.thebusinessresearchcompany.com/report/presentation-software-global-market-report](https://www.thebusinessresearchcompany.com/report/presentation-software-global-market-report)
- `AI presentation generation market`: Research and Markets summary for The Business Research Company report  
  [https://www.researchandmarkets.com/reports/6226537/ai-presentation-generation-market-report](https://www.researchandmarkets.com/reports/6226537/ai-presentation-generation-market-report)
- `Website builder software market`: Research and Markets summary for The Business Research Company report  
  [https://www.researchandmarkets.com/reports/6075310/website-builder-software-market-report](https://www.researchandmarkets.com/reports/6075310/website-builder-software-market-report)
