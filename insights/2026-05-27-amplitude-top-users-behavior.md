# Amplitude Insight: Top 30 Most Active Users

## Summary

Amplitude analysis of the last `3 months` shows a highly engaged but weakly monetized power-user segment.

The top users are:

- global rather than concentrated in one country
- overwhelmingly web-first
- mostly on `BASIC` plans
- heavily oriented around `game development`
- strongly correlated with high project counts and repeat sessions

The strongest strategic signal is:

- deep engagement exists without conversion

That suggests a real product-value signal, but also a monetization and packaging gap.

## Source Snapshot

Questions answered in Amplitude:

- `top 30 most active users (most events) in the past 3 months`
- `common behavioral features of top 30 users`

Important caveat from the returned data:

- the behavioral profile was based on `29` retrieved profiles, not all `30`

## Quantitative Signals

Top event-volume users:

- top user: `10,918` events in `3 months`
- next three users: `9,321`, `9,082`, `8,654`
- noticeable drop after rank `4`, then a second tier around `~6,000` events

Instrumentation gap:

- `122,013` events were attributed to `(none)` for `user ID`

Interpretation:

- there appears to be a small cluster of extreme power users
- missing user IDs are large enough to distort user-level analysis and lifecycle understanding

## Identified Top User

Known identification provided after the initial pull:

- top-ranked user is `Vladislav Sigay`

Reference links:

- Stripe subscription: [sub_1TUjLy4DGxsUcIsoJtN24xiM](https://dashboard.stripe.com/acct_14KQvi4DGxsUcIso/subscriptions/sub_1TUjLy4DGxsUcIsoJtN24xiM)
- Amplitude activity: [amplitude_id 92253581428](https://app.eu.amplitude.com/analytics/jetbrainsdelightex/project/100026480/search/amplitude_id%3D92253581428/activity)

Why this matters:

- the top user is no longer just an anonymous high-event account
- this creates a concrete path for manual review of subscription status, lifecycle, and whether the user is an ideal power-user case or an outlier

## Identified Second User

Known identification provided after the initial pull:

- second-ranked user is `jusing fan`

Reference links:

- Stripe subscription: [sub_1TKv4O4DGxsUcIsoRhKFMvQq](https://dashboard.stripe.com/acct_14KQvi4DGxsUcIso/subscriptions/sub_1TKv4O4DGxsUcIsoRhKFMvQq)
- Amplitude activity: [amplitude_id 107149556054](https://app.eu.amplitude.com/analytics/jetbrainsdelightex/project/100026480/search/amplitude_id%3D107149556054/activity?_source=user%20lookup)

Consistency note:

- later pasted outputs map `92253581428` to a Netherlands `PRO` user and `107149556054` to a Taiwan `PRO` user
- that conflicts with the earlier mapping of those IDs to the overall `#1` and `#2` users
- the identity/rank mapping should be rechecked directly in Amplitude before treating these as settled facts

## Common Behavioral Features

### Geography

- power users are internationally distributed
- countries mentioned include Portugal, Spain, Hong Kong, South Korea, United States, Taiwan, Singapore, Thailand, United Kingdom, Algeria, India, Turkey, Netherlands, Ecuador, Nigeria, and Germany
- no single geography dominates

Separate country-level read from the last `30 days`:

- Spain was reported at roughly `256-329` active users, depending on the specific cut
- Spain was one of the strongest European markets by active-user volume
- Spain users averaged about `47` events per user, which is solid but below higher-depth markets like the `UK`, `Taiwan`, and `Germany`

### Platform and Device

- usage is `100% web`
- `Windows` is the dominant OS
- `Chrome` is the main browser

This suggests the core engagement loop is currently browser-native and desktop-skewed.

### Plan Mix

- `BASIC`: about `19` users, roughly `63%`
- `PRO`: `4` users
- `TRIAL`: `6` users

This is the clearest monetization signal in the set:

- the most active users are mostly not paying

### Role and Intent

- students make up the largest visible role segment
- game designers are the second most visible segment
- creators, developers, educators, and artists also appear

Common intent patterns:

- `game development` appears most often
- `stories`, `coding`, `exploring`, and `professional` also recur frequently
- many power users selected multiple intents

Interpretation:

- these are not narrow single-purpose users
- the product may be functioning as a multi-job creative sandbox, especially for game-related workflows

### Project and Session Behavior

- high project count appears strongly correlated with high event volume
- standout examples include `72` and `66` active projects for two `PRO` users
- several others had `26` active projects
- session counts ranged from `15` to `360`
- usage time ranged from about `40` to `730` hours

This suggests engagement is tied not only to repeated visits, but to maintaining many active artifacts over time.

### Acquisition and Revenue

- most users appear to have come through `Google Sign-In`
- UTM fields were reportedly empty
- no paid marketing attribution was visible
- no purchases / revenue were observed across the reviewed top-user set

Interpretation:

- these power users appear mostly organic
- the product is creating real habit without yet capturing corresponding revenue

## Spain-Specific Behavior Pattern

Spain is worth separating from the global power-user view because it shows up repeatedly in both country-level and power-user-level cuts.

Reported `30-day` pattern for Spain:

- around `329` unique active users in the last `30 days`
- prior month comparison was stated as `183`, implying roughly `~80%` growth

Most common reported actions:

- `Item Inspector Opened`: `12,145`
- `Page Views`: `2,291`
- `Project Play Mode Ended/Played`: roughly `~2,125` combined
- `Project Editor Opened`: `532`
- `Project Preview Opened`: `457`
- `Sessions Started`: `584`

Interpretation:

- Spain users do not look passive
- they appear to spend disproportionate time inspecting and interacting with project elements, not only opening pages
- the mix of inspector, play mode, and editor usage suggests active hands-on project work

Additional reported pattern:

- `Item Inspector Opened` reportedly spiked sharply on `May 23-24, 2026`

This could indicate:

- a classroom exercise
- a campaign or distribution push
- a product change that increased inspector-centric workflows

The note does not duplicate the earlier classroom-sharing section, but the Spain spike is directionally consistent with the education/classroom hypothesis.

## Top PRO Users

Separate review of the top `10` users who were classified as `PRO` during the `3-month` window adds a useful nuance:

- the heaviest overall users were not necessarily the heaviest `PRO` users
- some users counted in the `PRO` window reportedly show `BASIC` as their current plan, suggesting downgrade or plan-state drift

### Main Patterns in the Top PRO Cohort

- Spain contributed `3` of the top `10` `PRO` users, reinforcing Spain as a high-value market
- Portugal contributed a likely classroom cluster, including repeated `Povoa de Lanhoso / Braga` profiles with similar role and intent patterns
- one Netherlands game-designer profile stood out with `72` active projects
- one France profile was explicitly labeled `Educator`
- one Spain profile reportedly had a `Stripe checkout` referrer, which is stronger purchase-intent evidence than generic organic entry

### Top PRO User Profile Table

| Rank | Events (3mo) | Amplitude ID | Country | City | Role | Intent | Active Projects | Plan (current) |
| --- | ---: | ---: | --- | --- | --- | --- | ---: | --- |
| 1 | 4,596 | 93397275545 | Spain | Madrid | Student | Stories, Gamedev, Professional | 3 | PRO |
| 2 | 2,763 | 92253581428 | Netherlands | Amsterdam | Game Designer | Gamedev | 72 | PRO |
| 3 | 2,460 | 107149556054 | Taiwan | Taipei | Student | Stories | 66 | PRO |
| 4 | 2,267 | 94414784875 | Spain | Madrid | Student | Coding | 7 | PRO |
| 5 | 1,955 | 102666285968 | Portugal | Braga | Student | Gamedev, Stories | 12 | BASIC* |
| 6 | 1,739 | 103071715347 | Portugal | Povoa de Lanhoso | Student | Gamedev, Stories | 15 | BASIC* |
| 7 | 1,452 | 105460406286 | Italy | Friuli VG | Student | Professional | 2 | PRO |
| 8 | 1,444 | 91455880961 | Spain | Illescas (Toledo) | Unknown | Unknown | 6 | BASIC* |
| 9 | 1,377 | 102873605219 | Portugal | Povoa de Lanhoso | Student | Gamedev, Stories | 14 | BASIC* |
| 10 | 1,311 | 109192685231 | France | Cergy | Educator | Gamedev, Coding, Stories | 1 | PRO |

Interpretation:

- `PRO` usage appears mixed between individual power creators and education-linked cohorts
- active-project count is highly uneven inside the cohort, with a few very deep users and several lighter structured users
- current-plan state should not be overinterpreted without checking plan history because several users were counted as `PRO` in-window but appear as `BASIC` now

## Project Sharing Behavior

Follow-up review of `Project Shared` activity across the top `30` users found confirmed sharing behavior for `7` users during the last `3 months`.

Reported publishing users:

- `#1` Portugal, student
- `#3` Portugal, student
- `#4` Portugal, student
- `#7` Spain, `PRO`, student
- `#10` Portugal, student
- `#11` Spain, game designer
- `#12` United States, creator
- `#27` Spain, `PRO`, student

Important note:

- the summary listed `7` users, but the enumerated set contains `8`; this should be rechecked against the raw event pull

### Main Patterns

### Bulk Publishing in Classroom Windows

- several Portugal-based student users reportedly published `10+` projects each inside a single short session window
- example timing mentioned was roughly `08:51` to `08:59` on specific March dates
- project names reportedly looked like class or assignment artifacts rather than consumer portfolio projects

Interpretation:

- this looks much more like classroom activity than solo creator publishing

### Sharing Mode Was Mostly Unlisted

- almost every `Project Shared` event reportedly used sharing type `unlisted`
- only `1` reported instance used `gallery`

Interpretation:

- power users are sharing by direct link, not trying to publish into a broad public discovery surface
- the core use case appears to be controlled distribution, not audience building

### Remix Was Usually Enabled

- most shared projects reportedly had `Remix Enabled: true`

Interpretation:

- sharing is likely collaborative, instructional, or assignment-based rather than view-only

### Entry Point Was the Editor Share Popup

- reported share origin was consistently the `Editor Share Popup`

Interpretation:

- the behavior is strongly tied to in-flow creation work
- the path appears to be `edit -> Share button -> publish`, not gallery-first behavior

### Teacher / Facilitator Signal

- user `#7` was described as repeatedly opening the share dialog for the same project across many sessions
- this user also reportedly used `QR Code Download`

Interpretation:

- this is a strong signal for teacher-led or facilitator-led distribution to a group

## Updated Strategic Read

The earlier read that top users are simply heavy free-plan creators is probably incomplete.

A stronger interpretation is:

- a meaningful subset of top power-user activity may come from educational or classroom workflows
- project creation and sharing may be coordinated across groups, not purely individual usage
- the highest-value behavior may be `create -> share unlisted -> remix/assign -> repeat`

That matters because it shifts the product opportunity from:

- generic freemium creator monetization

toward:

- education packaging
- classroom distribution features
- assignment/remix workflows
- teacher-oriented collaboration and sharing tools

An added refinement from the Spain and `PRO` cuts:

- Spain may be one of the clearest regions where both engagement depth and monetizable intent show up together
- the `PRO` segment is not cleanly separated from education behavior, so paid conversion may still be happening inside classroom or teacher-led contexts rather than only prosumer creator contexts

## Why It Matters

- strong usage among students and game-oriented creators suggests a concrete wedge, even if it is not yet monetized well
- the product may already have a power-user segment that can inform packaging, onboarding, and retention strategy
- zero revenue across the most active users is a warning that engagement alone is not enough
- the `(none)` user-ID bucket is large enough that instrumentation quality should be treated as a product-strategy issue, not just an analytics cleanup task
- `Project Shared` behavior suggests that some of the deepest engagement may be institutional or classroom-driven rather than purely individual

## Product Implications

- there may be room for a `student` or `creator` paid tier instead of relying on a generic `PRO` upgrade path
- high-project users are likely a better upgrade target than high-event users alone
- game-development workflows appear important enough to justify dedicated onboarding, templates, examples, or messaging
- browser performance and web experience likely matter more than secondary platforms for this segment
- classroom-specific workflows may deserve first-class support: unlisted sharing, QR distribution, remix-based assignments, and teacher controls
- public gallery growth may be less important than private distribution if the dominant sharing behavior is unlisted

## Recommended Next Steps

- review `Vladislav Sigay` specifically as the current highest-activity account
- resolve the identity mismatch around `92253581428` and `107149556054` before using them as canonical named examples
- verify whether the top users are real users, internal accounts, or automation/test traffic
- segment the top users by project count, cohort age, and retained weeks to find what best predicts depth
- inspect what actions generate most of the event volume to separate productive use from noisy instrumentation
- investigate why `122,013` events have no `user ID`
- test monetization hypotheses for student / creator / game-dev-heavy power users
- verify the listed `7` versus `8` publishing-user discrepancy in the source summary
- inspect a sample of shared-project names and sharing timestamps to confirm the classroom-use hypothesis
- identify whether teacher accounts and student accounts can be distinguished reliably in product data
- compare Spain against Italy, Germany, and the UK on `events per active user`, share behavior, and paid-plan propensity

## Open Questions

- are the highest-event users succeeding at meaningful outcomes, or just generating many low-value actions?
- which specific workflows drive the project-count correlation?
- why have the top users not converted despite very high engagement?
- how much of the apparent global distribution reflects organic pull versus uneven instrumentation coverage?
