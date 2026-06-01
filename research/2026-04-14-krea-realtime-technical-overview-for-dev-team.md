# Krea Realtime: Technical Overview for the Dev Team

## Summary

This note summarizes what we can say publicly and confidently about Krea's `Realtime` product family.

The key distinction is important:

- `Krea Realtime 14B` is a **publicly described realtime video model** with a fairly detailed technical write-up
- `Krea Realtime` for image editing/generation is a **publicly documented product feature**, but its underlying architecture is **not disclosed at the same level of detail**

So the safest engineering read is:

- we know a lot about how Krea solves realtime **video**
- we know a lot about how Krea exposes realtime **image UX**
- we do **not** have enough public evidence to claim that image realtime uses exactly the same architecture as video realtime

## Timeline

### 1. Realtime as a visible product direction

Krea's docs and product surfaces clearly expose `Realtime` as a first-class feature family:

- realtime image generation
- realtime edit
- realtime video

Relevant public surfaces:

- Realtime docs: [docs.krea.ai/user-guide/features/realtime](https://docs.krea.ai/user-guide/features/realtime)
- Realtime Edit launch post: [krea.ai/blog/realtime-edit](https://www.krea.ai/blog/realtime-edit)
- Krea Realtime 14B technical post: [krea.ai/blog/krea-realtime-14b](https://www.krea.ai/blog/krea-realtime-14b)

### 2. Realtime video model launch

The clearest technical launch is:

- `Krea Realtime 14B`
- date: `October 20, 2025`

Source:

- [Krea Realtime 14B: Real-Time, Long-Form AI Video Generation](https://www.krea.ai/blog/krea-realtime-14b)

### 3. Realtime image editing launch

The clearest public launch for the current image-side interaction model is:

- `Realtime Edit`
- date: `January 20, 2026`

Source:

- [Realtime Edit](https://www.krea.ai/blog/realtime-edit)

## What the user-facing functionality does

From public docs and product writing, Krea Realtime supports:

- prompt-driven live generation
- drawing directly on a canvas
- uploaded image references
- webcam as live input
- browser tab or screen input
- image or video output modes
- adjustable `AI Strength`
- seed changes
- multiple realtime models for different output styles

Sources:

- [Realtime docs](https://docs.krea.ai/user-guide/features/realtime)
- [Realtime Edit](https://www.krea.ai/blog/realtime-edit)

### Realtime Edit behavior

Krea describes Realtime Edit as:

- every brushstroke updates the image instantly
- no explicit `Generate` button
- the model reacts while the user is still drawing

This is the core UX claim:

- `you draw and see the finished result at the same time`

Source:

- [Realtime Edit](https://www.krea.ai/blog/realtime-edit)

### Visual input modes

The docs make it clear that realtime is not just prompt-to-image. It can use:

- `Draw`
- `Web Camera`
- `Screen Record`
- `Text Only`

This is important because it means realtime is built as a **live conditioning surface**, not just a fast image generator.

Source:

- [Realtime docs](https://docs.krea.ai/user-guide/features/realtime)

### Output and model surfaces

The docs also mention:

- image output
- short video output in realtime
- multiple realtime model options
- `Flux Realtime Quality`
- `Realtime Video Frame Consistency`

Source:

- [Realtime docs](https://docs.krea.ai/user-guide/features/realtime)

## How Krea Realtime 14B works technically

This section is about the part Krea actually explains in public: `Realtime 14B` for video.

## The core problem they are solving

Standard high-quality video diffusion models are not ideal for realtime streaming because they:

- denoise the whole video sequence together
- rely on bidirectional attention
- are good for quality, but bad for frame streaming

Krea's stated goal was to create a model that could:

- stream frames back immediately
- allow prompt changes while generation is still happening
- support long-form realtime generation

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Base model and conversion strategy

Krea says `Realtime 14B` is:

- distilled from `Wan 2.1 14B`
- converted from a regular video diffusion model into an autoregressive model
- trained using `Self-Forcing`

That means the system is not described as a brand-new model from scratch. It is a transformed and distilled large video model optimized for realtime interaction.

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Why autoregressive matters

Their technical argument is:

- bidirectional models denoise all frames together
- autoregressive or causal models can fully denoise one frame or frame block at a time
- once a frame is done, it can be shown immediately

This is what enables streaming.

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Self-Forcing pipeline

Krea describes a 3-stage pipeline:

1. `Bidirectional Timestep Distillation`
2. `Causal ODE Pretraining`
3. `Self-Forcing Distribution Matching Distillation`

What this does at a high level:

- reduces sampling steps from roughly `~30` to `4`
- introduces a block-causal generation structure
- trains the model using its own previous generations as context
- reduces train/inference mismatch and exposure bias

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Exposure bias

One of the key technical problems Krea highlights is `exposure bias`.

That means:

- during training, autoregressive models are often conditioned on clean or teacher-provided past frames
- during inference, they must condition on their own imperfect outputs
- errors can accumulate frame by frame

Their claim is that `Self-Forcing` reduces this by making training look more like actual inference.

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Block-causal masking

Krea says the model uses `block-causal` attention:

- frames inside a block can attend to each other
- frames can attend to all past blocks
- but not future ones

This is a compromise:

- more expressive than strict one-frame-at-a-time causality
- still streamable

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Memory and inference engineering

Krea also describes several engineering techniques that made 14B-scale training and inference feasible:

- dynamic KV cache freeing
- gradient checkpointing
- FSDP / ZeRO-3 sharding
- `KV Cache Recomputation`
- `KV Cache Attention Bias`

The important product implication is that they are not only shipping a model. They are shipping a model-plus-systems stack designed for realtime responsiveness.

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Long-form realtime inference

Krea says long-form realtime generation adds extra problems:

- first-frame distribution shift
- error accumulation
- repetitive motion
- performance under a sliding window

Their public solution includes:

- `First Frame Anchoring`
- `KV Cache Recomputation`

This is specifically about keeping long-form streaming coherent without collapsing.

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Performance numbers Krea publicly claims

Publicly stated headline numbers:

- `14B` parameter model
- `11 fps` text-to-video inference
- `4 inference steps`
- `~1 second` to first frames
- single `NVIDIA B200 GPU`

Source:

- [Krea Realtime 14B](https://www.krea.ai/blog/krea-realtime-14b)

## Can image realtime use the same approach?

This is where we need to be careful.

## What is confirmed

Krea image realtime clearly behaves like a live generation system:

- brushstrokes update output instantly
- webcam/screen can act as continuous visual input
- prompt and visual state drive ongoing updates

Sources:

- [Realtime Edit](https://www.krea.ai/blog/realtime-edit)
- [Realtime docs](https://docs.krea.ai/user-guide/features/realtime)

## What is not confirmed

Krea does **not** publicly say that image realtime:

- uses the same `Realtime 14B` architecture
- uses `Self-Forcing`
- uses an autoregressive frame-streaming image model

No public technical post currently makes that claim.

## Best current inference

The safest engineering interpretation is:

- `Realtime 14B` is a dedicated realtime **video** stack
- `Realtime Edit` is a dedicated realtime **image interaction surface**
- they may share product principles like:
  - low-latency updates
  - continuous conditioning
  - no prompt-wait loop
- but we do not have evidence that they share the same underlying model architecture

So for internal discussion, the right phrasing is:

- `Krea clearly has a sophisticated realtime interaction layer`
- `Krea publicly explains the video-side architecture`
- `the image-side implementation is still partially opaque`

## API implications

One more useful point for the team:

- Krea publicly documents `Realtime` as a product feature
- but their public API reference looks job-based and async
- we did not find a clearly documented standalone realtime API endpoint for image generation

That suggests:

- realtime is currently more visible as an app capability than as a public developer primitive

Relevant docs:

- [API reference introduction](https://docs.krea.ai/api-reference/introduction)
- [Flux image API example](https://docs.krea.ai/api-reference/image/flux)

## Practical product takeaways

For our own thinking, Krea shows a few important principles:

1. `Realtime` is not just a model feature. It is a whole interaction paradigm.
2. Live conditioning surfaces matter:
   - brush
   - shape
   - webcam
   - screen
3. The user experience value is:
   - no waiting
   - no repeated full reruns
   - faster steering
4. Krea's moat likely comes from the combination of:
   - frontier model access
   - own model work
   - low-latency interaction design
   - systems engineering

## Suggested internal summary

If we need a one-paragraph explanation for the team:

> Krea's realtime stack appears to combine two layers. First, a true realtime video model (`Krea Realtime 14B`) that they publicly describe as an autoregressive model distilled from Wan 2.1 14B using Self-Forcing. Second, a live creative interface for image and video where prompts, brushstrokes, webcam input, screen input, and references continuously condition generation. The video-side architecture is public and fairly detailed; the image-side architecture is not. So we can confidently say Krea has solved realtime interaction as a product surface, but we should not assume their image realtime literally uses the same architecture as their realtime video model.

## Sources

- [Krea Realtime 14B: Real-Time, Long-Form AI Video Generation](https://www.krea.ai/blog/krea-realtime-14b)
- [Realtime Edit](https://www.krea.ai/blog/realtime-edit)
- [Realtime docs](https://docs.krea.ai/user-guide/features/realtime)
- [Krea API reference introduction](https://docs.krea.ai/api-reference/introduction)
- [Krea Flux image API reference](https://docs.krea.ai/api-reference/image/flux)
