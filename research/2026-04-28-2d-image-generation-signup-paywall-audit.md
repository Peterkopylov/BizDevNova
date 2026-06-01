# 2D Image Generation Competitors: Signup Wall and Payment Wall Audit

## Summary

This note audits how the tracked `2D image generation` competitors gate access across three stages:

- `before registration`
- `after registration but before payment`
- `after payment / upgrade`

Reviewed on `April 28, 2026` from public official pages and help/docs where available.

## Scope Used

This pass focuses on the broad, user-facing `2D image generation` set most relevant to the current landscape:

- Adobe Firefly
- Canva AI
- Fotor
- Freepik AI
- Ideogram
- Krea
- Leonardo.Ai
- Meta AI Image Generator
- Midjourney
- NightCafe
- OpenArt
- Playground
- Recraft
- Runway

Adjacent comparison points:

- Figma AI
- Lovable

This is not a full logged-in product QA pass. It is a public-source gating audit based on official websites, pricing pages, and help docs.

## Audit Table

| Competitor | What is possible before registration? | What is possible after registration but before payment? | Free usage reset policy | Where is the payment wall? |
| --- | --- | --- | --- | --- |
| `Adobe Firefly` | Browse homepage, gallery, plans, and community content. Public marketing strongly invites creation, but actual generation is tied to account access. | `Firefly Free` exists. Users can generate with limited credits and try standard image features and mood boards. | Included free credits reset on a recurring plan cycle; exact public reset wording varies by plan surface. | Payment starts when free credits or premium usage needs are exceeded. Paid tiers unlock more credits and broader premium feature access. |
| `Canva AI` | Many AI feature pages are visible publicly. Some pages show upload fields or “Generate” CTAs, but Canva generally routes creation into the editor/account flow. | Canva free accounts can access some AI features and third-party AI apps in limited form. Some tools/pages explicitly mention free daily usage; many stronger edit tools are Pro-gated. | Mixed / tool-specific. Some free AI allowances appear to reset daily, but Canva does not present one simple universal AI reset policy across all free AI surfaces. | The wall appears at premium editing and workflow features rather than at basic account creation. `Magic Expand`, `Magic Eraser`, and some AI usage caps push users to `Canva Pro`. |
| `Fotor` | Public AI generator landing pages show prompt boxes, model cards, uploads, and examples. Marketing says “free,” but actual generation flow is account-linked. | Free tier includes limited free credits. Fotor publicly mentions `8 free credits` for first trial and limited free-plan credits more broadly. | Public reset policy is not crisply stated on the reviewed pricing/tool pages; the strongest visible signal is an initial free-credit allowance rather than a clearly documented recurring reset. | Paywall hits on higher credit use, premium models, higher concurrency, watermark-free/HD outputs, and broader AI tool access via `Pro` / `Pro+`. |
| `Freepik AI` | Visitors can browse pricing, models, docs, and tool pages. Public pages expose models and credit costs. | Free plan offers limited daily/basic access to AI tools. | Free usage appears to follow a recurring daily/basic allowance model, but the reviewed public pages did not expose one simple reset line for all tools. | Payment wall appears quickly for meaningful usage: commercial AI license, premium content access, materially higher credits, and unlimited/selected unlimited generations sit behind paid plans. |
| `Ideogram` | Public site and docs are browseable; community discovery is visible. Image generation itself is account-based. | Free plan gives `10 slow credits/week`, `2 canvases`, public generations, remix, Magic Prompt, and JPG downloads. | `Weekly` reset for the main free credit bucket. | Payment wall blocks priority queue, private generation, PNG/original downloads, uploads for Remix/Describe, editor scale, and higher credit volumes. |
| `Krea` | Pricing and product marketing are public. The app itself is centered on sign-in before real use. | Free plan gives `100 compute units/day`, full access to realtime models, and limited access to image/video/3D/upscaling/LoRA features. | `Daily` reset. | Payment wall is usage- and model-based: more compute, more models, broader upscaling, more training, and deeper production usage require paid plans. |
| `Leonardo.Ai` | Public browsing of pricing, feature pages, and model catalog is possible. Generation is account-based. | Free plan gives `150 fast tokens/day`, basic quality, public creations, limited collections, limited canvas/realtime/tools, and no private generation. | `Daily` reset. | Payment wall sits on privacy, higher monthly tokens, model training, concurrency, queue depth, and top-ups. Paid plans also unlock private generations and higher-quality workflow. |
| `Meta AI Image Generator` | Current official web access appears to hit a login wall. Official Meta routes resolve to “Not Logged In” when unauthenticated. | After login, Meta AI image generation is available inside Meta’s product/account surface. No public pricing page was found for a paid plan. | No clear public free-credit reset policy found; current gating appears to be login/access-based rather than credit-cycle-based. | No clear payment wall found from reviewed official pages. Current gating appears to be `login wall first`, with image generation treated as a free product surface where available. |
| `Midjourney` | Public browsing of docs, explore/community surfaces, and plans is possible. Full generation is gated. | On the web/Discord product, no general free tier is currently available. Docs say a `limited trial` exists on the `niji · journey` mobile app, but not in Discord. | `No recurring general free reset` for the main product because there is no normal free tier. | Midjourney’s main wall is essentially at signup + subscription. Paid subscription is required for normal access, and higher tiers unlock relax mode, privacy/stealth, and more fast hours. |
| `NightCafe` | Public browsing is open; product/blog messaging is very explicit about free use. | After signup, users receive free credits and daily top-ups. Official help says users get free starter credits and `5` more daily credits, plus other ways to earn credits. | `Daily` top-up, plus one-time starter credits and optional earned credits. | Payment wall is soft and credit-based. Users can continue free usage slowly, earn more credits, buy credit packs, or subscribe to `NightCafe PRO` for recurring credits and perks. |
| `OpenArt` | Public pages, model lists, examples, and pricing are visible. App-style creation is account-based. | Free plan gives `40 one-time trial credits for 7 days`, `4 parallel generations`, and limited testing of premium features. OpenArt also publicly states some basic image generations are now unlimited on free. | Main trial credits are `one-time / 7-day trial`; some basic free generation appears to continue outside the trial, but not as a simple recurring credit reset. | Payment wall appears at scale and advanced workflow: monthly credits, characters, personalized models, stories, editing suite, faster throughput, and add-on credits. |
| `Playground` | Public marketing and help are open, but actual design/generation happens inside the account experience. | Free plan includes `10 image edits every 3 hours` on `Playground v3`, `3 image edits per month` on premium external models, and `10 downloads/day`. | Mixed reset model: `every 3 hours` for core Playground edits, `monthly` for premium external model edits, and `daily` for downloads. | Payment wall hits on external model usage, background removal/upscaling, higher edit caps, and premium model credits. Playground also uses one-time upsells like `Day Pass` and extra 4o credit bundles. |
| `Recraft` | Public landing pages are unusually open and tool-forward. Visitors can browse image/vector/mockup tools, examples, and claims like “no credit card required.” | Free plan offers `30 credits/day`, public generations, basic editing, and limited uploads. Recraft repeatedly markets `up to 30 free image generations per day`. | `Daily` reset. | Payment wall starts at privacy, more uploads, more credits, top-ups, and full commercial-rights messaging on paid plans. Free outputs are public and may appear in the gallery. |
| `Runway` | Public pages, demos, examples, and pricing are browseable. Creation requires account access. | Free plan gives a `one-time 125 credits`, access to some image/video/audio tools, 3 editor projects, and limited storage. Credits do not refresh. | `One-time only`; no recurring free credit reset. | Payment wall hits after the one-time free credits are used or when users need unsupported models/tools. No credit purchase on free; users must upgrade to paid tiers for ongoing creation. |
| `Figma AI` | Public pages expose pricing, AI feature descriptions, and editor/product surfaces. Collaboration/viewing can be explored publicly in Figma generally, but AI creation is account-based. | `Starter` is free and includes `150 AI credits/day`, up to `500 AI credits/month`. Free users can use AI features in limited form and experiment in personal drafts. | `Daily` soft cap plus `monthly` cap. | Payment wall is credit- and seat-based rather than a hard creation lock. Higher plans include more monthly AI credits, some capabilities depend on seat type, and extra AI credits can be purchased as an add-on. |
| `Lovable` | Visitors can browse product, pricing, and examples publicly. Actual creation flow is account-based. | Free plan exists with `5 daily credits`, up to `30/month`, no credit card required. Free users can create with public projects, unlimited collaborators, and limited hosted domains. | `Daily` credit refill with `monthly` cap. | Payment wall is a usage/capability wall: more monthly credits, top-ups, custom domains, code mode, permissions, and badge removal require paid plans. |

## Cross-Competitor Patterns

### 1. `Signup wall first` is the default

Most competitors allow public browsing of:

- homepage
- examples / gallery
- pricing
- model list
- marketing claims

But actual generation usually starts only after account creation.

The strongest exceptions in tone are `Fotor`, `Canva`, and `Recraft`, which show more public-facing tool UI before login, even if meaningful creation still routes into account flow.

### 2. The most common free layer is `registered free credits`

The dominant model is:

- register first
- get limited free credits or free queue usage
- upgrade once you hit volume, privacy, or quality needs

Strong examples:

- `Leonardo.Ai`: 150 fast tokens/day
- `Recraft`: 30 credits/day
- `Krea`: 100 compute units/day
- `Ideogram`: 10 slow credits/week
- `OpenArt`: 40 trial credits / 7 days
- `Runway`: 125 one-time credits
- `NightCafe`: starter credits + daily top-up

The reset models split into a few clear patterns:

- `daily refill`: Krea, Leonardo.Ai, Recraft, NightCafe, Figma AI, Lovable
- `weekly refill`: Ideogram
- `mixed multi-window reset`: Playground
- `one-time free taste`: Runway, OpenArt trial
- `unclear or tool-specific public reset`: Canva AI, Fotor, Freepik AI, Adobe Firefly

### 3. There are three main types of payment wall

#### `A. Volume wall`

Users can create for free, but only up to a small daily/weekly/monthly limit.

Examples:

- Krea
- Leonardo.Ai
- Ideogram
- Recraft
- NightCafe
- Runway
- OpenArt

#### `B. Premium feature wall`

Basic generation is free, but advanced editing, premium models, or high-quality export require payment.

Examples:

- Adobe Firefly
- Canva AI
- Fotor
- Playground
- Freepik AI

#### `C. Hard subscription wall`

Very little or no normal product use before paying.

Strongest example:

- Midjourney

### 4. Privacy is a common upgrade trigger

Several competitors let free users create, but keep free outputs public or less controlled.

Examples:

- `Ideogram`: free generations are public
- `Leonardo.Ai`: free creations are public
- `Recraft`: free outputs are public and may appear in the gallery
- `Midjourney`: privacy/stealth is reserved for higher plans

This means `private generation` is one of the cleanest monetization levers in the category.

### 5. The cleanest “taste first” flows are not the same as the strongest paid walls

Best free taste:

- Recraft
- Leonardo.Ai
- Krea
- NightCafe

Strong adjacent free taste:

- Figma AI
- Lovable

Hardest wall:

- Midjourney

Most enterprise/professionalized credit gating:

- Adobe Firefly
- Freepik AI
- Runway

## Fast Takeaways

- The most common structure is `public browse -> signup -> limited free generation -> payment for scale/privacy/premium models`.
- `Midjourney` is the clearest outlier with a much harder wall.
- `Runway` is generous enough to test, but uses a `one-time` free layer rather than a recurring free plan.
- `Recraft`, `Leonardo.Ai`, and `Krea` appear strongest if we care about giving users meaningful hands-on value before asking them to pay.
- `Privacy` and `better models / higher throughput` are the two most repeated upgrade triggers in this category.
- `Figma AI` and `Lovable` follow a similar structural pattern in broader workflow products: `free account + recurring credits + paid upgrade for serious usage`.

## Adjacent Notes

`Figma AI` is not a pure 2D image-generation tool. It is a collaborative design platform with AI image editing/generation and other AI workflow features embedded across products.

`Lovable` is further from the core category. It is primarily an AI app builder, but it is useful as a reference for how AI-native workflow tools structure signup gates, free credits, and upgrade triggers.

## Sources

- [Adobe Firefly homepage](https://www.adobe.com/products/firefly/)
- [Adobe Firefly plans](https://www.adobe.com/products/firefly/plans)
- [Canva AI profile picture generator](https://www.canva.com/features/ai-profile-picture-generator/)
- [Canva AI image expander](https://www.canva.com/features/ai-image-expander/)
- [Canva AI script generator](https://www.canva.com/features/ai-script-generator/)
- [Canva AI sketch-to-image](https://www.canva.com/features/ai-sketch-and-draw/)
- [Fotor pricing](https://www.fotor.com/pricing)
- [Fotor AI image generator](https://www.fotor.com/ai-image-generator/)
- [Freepik pricing docs](https://www.freepik.com/ai/docs/pricing)
- [Freepik pricing](https://www.freepik.com/pricing)
- [Ideogram plans and pricing](https://docs.ideogram.ai/plans-and-pricing/available-plans)
- [Ideogram signup and registration](https://docs.ideogram.ai/using-ideogram/getting-started/signup-and-registration)
- [Krea pricing](https://www.krea.ai/pricing)
- [Leonardo.Ai pricing](https://leonardo.ai/pricing)
- [Meta login gate page](https://l.meta.ai/l/)
- [Midjourney plans](https://docs.midjourney.com/docs/plans)
- [Midjourney plan information](https://docs.midjourney.com/hc/en-us/sections/28005319720845-Plan-Information)
- [NightCafe free credits questions](https://help.nightcafe.studio/portal/en/kb/articles/free-credits-questions)
- [NightCafe is free](https://nightcafe.studio/blogs/info/is-nightcafe-free)
- [NightCafe subscription FAQ](https://help.nightcafe.studio/portal/en/kb/subscription-payment-credits/subscription-faq)
- [OpenArt pricing](https://openart.ai/pricing)
- [OpenArt free credits note](https://openart.ai/credit/daily-free)
- [Playground free plan limits](https://help.playgroundai.com/en/articles/11434147-what-are-the-limits-on-the-free-plan)
- [Playground paid plan limits](https://help.playgroundai.com/en/articles/11165689-how-many-images-or-edits-under-the-paid-plans-pro-day-pass)
- [Recraft free plan](https://www.recraft.ai/docs/plans-and-billing/free-plan)
- [Recraft credits](https://www.recraft.ai/docs/plans-and-billing/credits)
- [Recraft AI image generator](https://www.recraft.ai/ai-image-generator)
- [Runway pricing](https://runwayml.com/pricing)
- [Runway free plan details](https://help.runwayml.com/hc/en-us/articles/50404627334547-Free-plan-details)
- [Figma pricing](https://www.figma.com/pricing/)
- [Figma AI credits help](https://help.figma.com/hc/en-us/articles/35865276858647)
- [Lovable pricing](https://lovable.dev/pricing)
- [Lovable plans and credits docs](https://docs.lovable.dev/introduction/plans-and-credits)
