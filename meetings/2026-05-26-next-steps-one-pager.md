# Next Steps One-Pager

Date: `May 26, 2026`

Source materials:

- meeting board photo
- audio recording: [26 May at 10-33.m4a](/Users/peter.kopylov/Documents/BizDev/meetings/26%20May%20at%2010-33.m4a)
- transcript chunks generated from the recording

## Objective

The immediate goal is to define a practical evaluation framework for our `image-to-3D editable scene` work, starting with `interior reconstruction from a single photo`.

The focus is not on perfect meshes or visual polish. The focus is on whether the model can reconstruct a room as a `usable editable layout` with:

- the right major objects
- roughly correct sizes
- correct relative positioning
- plausible orientation
- no obvious structural failures

## What We Aligned On

We should evaluate the model in layers, starting from coarse scene validity and moving toward object- and layout-level correctness.

The discussion also made one thing very clear:

- the most important near-term blocker is not generic quality
- it is the model's handling of `compound / corner-connected furniture`, especially `L-shaped sofas`

This is important because the scene can look broadly correct, while still failing on one structurally important relation such as:

- two sofa sections placed at right angles but facing the wrong internal directions

That kind of result may look superficially acceptable, but is still not `good enough` for editable interiors.

The current working evaluation dimensions are:

1. `Gross scene validity`

- obvious object collisions or impossible overlaps
- violations of physical plausibility
- major structural breakdowns
- floating walls or walls lifted off the floor
- furniture intersecting walls in obviously broken ways

These should be treated as near-`no-go` failures.

2. `2D fitting`

- how well the reconstructed scene aligns back to the source image when projected or compared visually

3. `Object similarity`

- bounding box or rough occupied volume
- object shape or silhouette similarity
- color / visual appearance for major objects
- whether a compound object is assembled in a structurally coherent way

4. `Object presence`

- whether the important objects are present at all
- especially whether the `large / important scene-defining objects` are present

5. `Relative positioning`

- whether objects are in the right places relative to one another

6. `Object size`

- whether the dimensions are roughly right

## A Practical Definition Of “Good Enough”

The working definition of `good enough` for a single-photo interior is:

- the important furniture is present
- the bounding-box-level size is correct enough to support rearrangement
- major objects are in the right places
- orientations are mostly correct
- there are no gross artifacts
- the scene is useful as an editable layout, even if some fine details are imperfect

This means:

- decorative details like pillows or small accessories are optional quality improvements
- large furniture objects are mandatory

The team discussion also implied a ranking of priorities:

1. presence of important large objects
2. correct bounding box / footprint
3. correct relative positioning
4. correct shape assembly for compound objects
5. color and finer appearance details

## Initial Scope

The first benchmark should stay narrow and practical.

We should start with:

- `interior scenes`
- `one input photograph`
- scenes with fewer than about `15 large furniture objects`

The working assumption from the discussion is that a typical first target should look like:

- one room or one visible room corner
- bounded geometry
- a manageable number of large furniture items
- not a supermarket shelf or an extreme clutter case

This keeps the first benchmark grounded and makes annotation and scoring manageable.

## Interior Benchmark: What Good Looks Like

For an interior scene, a strong result should satisfy most of the following:

- large objects are present
- bounding-box-level sizes are roughly correct
- orientations are correct
- relative positions are correct
- compound objects are assembled correctly enough to be usable
- overall room shape is plausible
- there are no empty artifacts or broken structural gaps
- major objects have roughly appropriate color / appearance
- there are no obvious extra objects that do not belong

In short:

- the result does not need to be beautiful
- it does need to be structurally useful

## Candidate Input Modes

The board suggests three starting modes worth testing:

- `photo`
- `top-down plan` or layout-like input, especially if dimensions are available
- `empty space` as a setup to be filled

For now, the cleanest first milestone is:

- `single photo -> editable interior layout`

The other two modes can become follow-on tasks after the first evaluation loop is stable.

## Suggested Metrics To Operationalize Next

The board points toward a small set of measurable outputs that we should formalize next:

- `% of important large objects correctly recovered in the scene`
- `% size agreement` for important objects
- `% of correct spatial relations` between objects
- an `LLM-assisted qualitative heuristic` for overall scene usefulness
- an additional lightweight heuristic for visual or structural sanity if needed

The most important unresolved detail is to define:

- what exactly counts as an `important` or `large` object
- which pairwise relations we score
- how we score compound-object assembly failures
- how we combine hard metrics with heuristic scoring

The transcript also suggests that not everything should be collapsed into one magic number immediately.

A more practical first step is:

- track several metrics separately
- look at patterns across a small evaluation set
- only aggregate once we understand what is actually stable and informative

## Recommended First Evaluation Recipe

For the first version, I would recommend:

- define a set of `10-20` interior photos
- annotate only the `large scene-defining objects`
- record for each object:
  - presence
  - rough size
  - orientation
  - relative position
  - whether compound objects are assembled coherently
- mark hard failures separately:
  - impossible overlaps
  - floating objects
  - severe scene breakage
  - obvious hallucinated large objects

To make the benchmark more robust, the meeting strongly suggests adding a few scenes that deliberately stress corner relations, for example:

- an interior with an `L-shaped sofa`
- a kitchen with corner cabinetry
- a room with corner-connected furniture or desk layouts

This creates a benchmark that is simple enough to run quickly, but still useful for product and research decisions.

## What We Should Do Next

### 1. Freeze the first benchmark scope

Decide explicitly:

- interior only
- one photo only
- fewer than `15` large furniture objects

### 2. Define the annotation schema

At minimum:

- large object class
- approximate size / box
- orientation
- pairwise relation to key neighbors

### 3. Define the first scoring sheet

Core metrics:

- important large object presence
- size agreement
- orientation correctness
- relative-position correctness
- compound-object assembly correctness
- hard-failure count

Keep the first version multi-metric rather than over-aggregated.

### 4. Decide the first optimization target

The clearest first target from the discussion is:

- reduce gross artifacts
- improve handling of `L-shaped` and other corner-connected furniture
- make interior scenes reliably `good enough`, not perfect

This should be tested first through prompt / model / pipeline changes before larger architectural changes.

### 5. Select the first evaluation set

Pick a small, stable set of rooms with:

- clear furniture layout
- limited clutter
- understandable geometry
- at least a few scenes with hard corner cases

The discussion explicitly pointed to adding more than one interior scene so we do not overfit to a single sofa case.

### 6. Use the stronger model where needed

One practical suggestion from the meeting was:

- stop over-optimizing for the cheapest generation path while quality is still not good enough
- use the stronger model / advanced mode if it materially improves adherence to scene rules

Cost optimization should come later than proving usefulness.

### 7. Add one qualitative model-judge layer

Use an LLM-based evaluator only as a secondary heuristic, not as the primary source of truth.

It should answer questions like:

- is the room structurally plausible
- are there obvious extra objects
- is the reconstructed scene useful for editing or planning

## Main Takeaway

The next step is not “train everything.”

The next step is:

- define a clean first benchmark for `single-photo interior reconstruction`
- focus on `important large-object recovery and scene layout`
- explicitly test `compound / corner-connected furniture`
- score usefulness at the level of `editable structure`, not visual beauty
- optimize for `good enough interiors` before trying to solve every scenario

That gives us a tractable evaluation loop and a much clearer target for training and iteration.
