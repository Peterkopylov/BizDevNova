# Tactical Plan: Interior Scene Generation

Date: `May 26, 2026`

## Summary

We defined the general tactical direction for the near term.

The immediate focus is not to solve all scene-generation cases at once. Instead, we will focus on a narrow starting case and improve it until it becomes reliably `good enough`.

## Starting Use Case

The starting use case is:

- the user uploads a photo of a room
- the system outputs an editable 3D scene

In practice, the input photo is usually one of these configurations:

- a `U-shaped` room view with `3 visible walls`
- an `L-shaped` room view with `2 visible walls`

In a typical room photo, we expect:

- up to about `15` large objects
- and potentially an unbounded number of small objects

The current tactical assumption is that we should care much more about:

- `large scene-defining furniture and layout`

than about:

- complete recovery of every small decorative object

## What Defines “Good Enough”

For the current starting case, a result is `good enough` if:

- the important furniture is present
- the bounding-box-level size is correct enough to support rearrangement
- major objects are in the right places
- orientations are mostly correct
- there are no gross artifacts
- the scene is useful as an editable layout, even if some fine details are imperfect
- colors are correct
- there are no odd extra objects

This definition is intentionally practical.

The goal is not:

- perfect meshes
- perfect decorative detail
- perfect reconstruction of every small item

The goal is:

- a scene that is structurally useful and editable

## How This Could Be Quantified

In principle, we can quantify this through:

- `% of important large objects correctly recovered in the scene`
- `% size agreement for important objects`
- `% of correct spatial relations between objects`
- `LLM heuristic score for object-form quality`
- `LLM heuristic score for gross artifacts`

So there is a path toward a more formal evaluation framework.

## What We Decided For Now

For the moment, we decided **not** to over-invest in formal quantification.

Instead, the working process is:

- Alexey keeps these criteria in mind while improving the model
- we review outputs frequently
- we discuss them together
- we iterate based on visible failures and practical usefulness

This is a conscious decision.

At the current stage, we believe this will move us faster than building a heavy evaluation framework too early.

## Possible Future Split: Text vs Image

We also discussed that it may make sense to separate:

- `generation from text description`
- `generation from image`

The intuition is:

- for `text generation`, it may be more acceptable to use library objects
- for `image generation`, primitive-based reconstruction may be better

This distinction is important, but we are not making it the main focus right now.

For now, we stay focused on the concrete starting case:

- `single room photo -> editable interior scene`

## Adjacent Cases To Treat Separately

We explicitly treat these as separate cases:

### 1. Apartment top-down plan

- floor-plan-like reconstruction
- furniture placement based on top-down layout
- more size-sensitive and layout-sensitive than a normal room photo case

### 2. Generation from text description

- different prompting behavior
- different expectations around object sourcing
- likely a different optimization strategy

These are relevant, but should not distract from the current main task.

## Broader Evaluation Dimensions For The Future

We also discussed a broader future evaluation framework.

The current working evaluation dimensions are:

### Gross scene validity

- obvious object collisions or impossible overlaps
- violations of physical plausibility
- major structural breakdowns
- floating walls or walls lifted off the floor
- furniture intersecting walls in obviously broken ways

These should be treated as near-`no-go` failures.

### Object similarity

- bounding box or rough occupied volume
- object shape or silhouette similarity
- color / visual appearance for major objects
- whether a compound object is assembled in a structurally coherent way

### Object presence

- whether the important objects are present at all
- especially whether the `large / important scene-defining objects` are present

### Relative positioning

- whether objects are in the right places relative to one another

### Object size

- whether the dimensions are roughly right
