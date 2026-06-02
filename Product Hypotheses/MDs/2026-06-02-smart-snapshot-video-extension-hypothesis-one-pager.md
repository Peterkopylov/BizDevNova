# Smart Snapshot Video Extension

## Hero Description

Start with one scene. Turn it into a video.

Design the opening frame, choose the clip length, and describe what happens next. Nova turns your scene into a short video while keeping the original look, characters, and composition as the starting point.

## Internal Justification

Image generation is already easy to try, but turning a good static result into a controllable video is still awkward. Users often have to switch tools, rewrite prompts from scratch, or accept a video that drifts away from the original composition, characters, or environment.

This creates a clean extension opportunity for Nova: the user already has intent, composition, and visual setup in the first scene. Instead of asking them to begin again in a separate video tool, we can treat the designed first frame as structured creative state and let them animate forward from it. The value is not just `text-to-video`; it is `continue this designed moment into a directed sequence`.

## ICP

Best-fit early users are people who want short, visually consistent clips without learning a full video workflow.

- social content creators making short story, promo, or character clips
- marketers turning a campaign visual into a lightweight motion asset
- educators and presenters creating short explanatory scenes
- indie creators prototyping animated moments before investing in full production
- Nova users who already get value from image generation and want a natural next step

## Use Case / User Story

### Product Promo Example

Input:
user designs a clean first scene showing a product on a table, sets duration to `8 seconds`, and writes: `camera slowly pushes in, soft light sweeps across the bottle, then small particles appear around it`

System does:
uses the designed first scene as the opening frame, preserves product identity and composition, interprets timing and motion from the prompt, and generates a short video with coherent movement and lighting changes

Output:
a short branded clip that starts exactly from the user-approved key visual and develops into a simple product animation

User outcome:
the user gets a usable motion asset for ads, landing pages, or social posts without rebuilding the scene in a separate video editor

### Character Moment Example

Input:
user designs a fantasy street scene with one character, sets duration to `12 seconds`, and writes: `the character looks up, starts walking forward, banners move in the wind, and the camera follows slightly from the side`

System does:
anchors the first frame, keeps the scene style and main character stable enough, translates the described actions into motion beats, and renders a short cinematic continuation

Output:
a short narrative clip that feels like an extension of the original generated scene rather than a new unrelated prompt result

User outcome:
the user can turn a single strong image into a story beat, concept teaser, or mood clip fast enough to iterate on creative ideas

## Key Competitors To Watch And Why

- [Runway](https://runwayml.com/): strongest benchmark for controllable AI video and a likely reference point for user expectations around prompt-driven scene continuation.
- [Pika](https://pika.art/): important because it packages video generation into a creator-friendly workflow rather than a research-style interface.
- [Luma Dream Machine](https://lumalabs.ai/dream-machine): matters as a benchmark for motion quality, visual appeal, and simple prompt-to-video UX.
- [Higgsfield](https://higgsfield.ai/): relevant for cinematic control language and the growing expectation that users can direct shots, not just generate motion.
- [PentoPix](https://www.pentopix.com/): strategically important because it connects editable scene creation with video output, which is closer to the Nova workflow than pure prompt-only generators.

## Key Features

### MVP

- generate video from a user-designed first scene
- explicit duration control such as `5`, `10`, or `15` seconds
- free-text field for `what happens next`
- preserve major scene composition, subject identity, and style from frame one
- support basic motion types: character movement, camera motion, environmental motion, lighting change
- return one or more short video variants from the same starting scene

### Potential extension

- timeline-style prompt segments such as `0-3 sec`, `3-6 sec`, `6-10 sec`
- motion-strength and camera-behavior controls
- editable keyframes beyond the first scene
- regenerate only a selected segment while keeping the rest
- voice or storyboard guidance for multi-scene sequencing

## Success Hypothesis

We should consider the hypothesis promising if early users consistently say:

- `I can turn a good image into a usable video in one flow`
- `The video stays close enough to the first scene I designed`
- `This is easier than jumping into a separate AI video tool`
- `I want to iterate on motion and timing, not rebuild the whole visual`
- `This is good enough for short promo, social, or concept clips`

## Key Risks And Open Questions

- how reliably can we preserve subject identity, composition, and style across motion?
- is one free-text continuation prompt enough, or will users quickly need timeline controls?
- what clip lengths feel useful before quality or coherence breaks down?
- should the first version optimize for cinematic motion, product animation, or character scenes?
- how much manual control is needed before users trust the workflow for repeat use?
