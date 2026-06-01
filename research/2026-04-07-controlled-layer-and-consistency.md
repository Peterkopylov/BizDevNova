# Controlled Layer and Consistency

## Summary

If users build something in a controlled layer and an image is generated on top of that structure, consistency does not disappear as a problem. It changes shape.

A controlled layer can strongly improve:

- structural consistency
- scene consistency
- composition consistency

But it does not automatically guarantee:

- character identity consistency
- object identity consistency
- rendering consistency
- style consistency

Core takeaway:

- a controlled layer is a major consistency advantage
- but only for the dimensions it explicitly controls

## The Core Question

If the customer creates a structured scene first and image generation happens on top of it, what happens to consistency?

Short answer:

- consistency gets better
- but it does not become solved by default

## What the Controlled Layer Naturally Improves

A controlled layer is very good at locking:

- object placement
- spatial relationships
- camera logic
- scene composition
- interaction logic
- allowed structure of the world

This means the system can keep stable:

- where things are
- what is present in the scene
- how elements relate to each other

This is already a major improvement over pure prompt-based generation.

## What Can Still Drift

Even if the same controlled scene is reused, image generation may still drift in:

- face details
- hair shape
- clothing details
- textures
- materials
- lighting feel
- line weight
- proportions
- style interpretation

This means the system may preserve:

- the same scene

while failing to preserve:

- the same exact character
- the same exact visual treatment

## The Real Shift

Without a controlled layer, the problem is:

- the whole image is regenerated from scratch with weak control

With a controlled layer, the problem becomes:

- the scene structure is stable, but the visual interpretation of that structure can still vary

That is a much better starting point, but it is not the same thing as full consistency.

## 3 Layers of Consistency

It is useful to separate consistency into three layers.

### 1. Structural Consistency

This is where a controlled layer is strongest:

- layout
- spatial relationships
- camera position or framing logic
- scene graph
- action logic

### 2. Identity Consistency

This is about whether the same thing remains the same thing:

- the same character
- the same product
- the same mascot
- the same object with the same defining traits

This is not guaranteed just because the scene structure is stable.

### 3. Rendering Consistency

This is about visual treatment:

- style
- shading
- lighting grammar
- texture logic
- material feel
- illustration or photoreal look

This also needs its own control mechanisms.

## Product Implication

A controlled layer is not "the consistency solution."

It is the foundation for one type of consistency:

- structural consistency

To achieve stronger end-to-end consistency, the product likely needs additional layers such as:

- identity anchors
- style anchors
- persistent references
- locked attributes
- constrained variation rules
- edit-based iteration

## Why This Still Matters a Lot

Even if it does not solve all consistency problems, a controlled layer still reduces generation entropy.

Instead of asking the model to decide everything from scratch, the system constrains:

- layout
- relationships
- composition
- part of the meaning of the scene

That alone can make the output much more repeatable and more useful in production workflows.

## A Useful Mental Model

The controlled layer narrows the possibility space.

It turns:

- infinite visual ambiguity

into:

- constrained visual ambiguity

That is a meaningful advantage, but not the same as deterministic output.

## A Strong Product Principle

If generation happens from scratch every time, even on top of the same controlled layer, consistency will remain limited.

If generation happens from persistent state, consistency can improve much more.

This suggests a strong product principle:

- `edit the existing world`

is often better than:

- `regenerate the whole world`

This may become one of the central design choices in the product.

## What Must Be Controlled for Stronger Consistency

If the goal is deeper consistency, the system likely needs to control more than geometry or layout.

It may need to encode:

- canonical identity attributes
- allowed variation ranges
- fixed style rules
- what may change
- what must remain locked

Otherwise the system knows:

- where the character stands

but not necessarily:

- what makes that character recognizably the same

## Positioning Implication

It may be risky to promise generic `consistency` too early.

A more precise promise could be:

- `layout consistency`
- `scene consistency`
- `structured generation`
- `repeatable composition`
- `controllable variation`

Then later product layers can expand toward:

- identity lock
- style lock
- persistent visual memory

## Best-Fit Use Cases for Structural Consistency First

A structural-consistency-first product may already be valuable in:

- advertising creatives
- e-commerce scene generation
- product mockups
- retail layout visualization
- interior and space visualization

These workflows often benefit immediately from stronger control over composition and scene structure.

## Harder Use Cases

Use cases that require deeper identity or narrative continuity will likely need more than a controlled layer alone:

- children's books
- comics
- recurring mascots
- long-form storyboards
- branded character systems

In these categories, structural control helps, but character persistence becomes critical.

## Main Takeaways

- a controlled layer improves consistency, but only across the dimensions it actually controls
- the strongest natural advantage is in structural consistency
- identity and rendering consistency remain separate product problems
- the best system may combine controlled structure with persistent identity and style memory
- product messaging should distinguish between `structured control` and full `consistency`

## Suggested Follow-Up

Useful next documents from here:

- a consistency framework for our own product design
- a map of which consistency layer matters most by use case
- a competitor comparison by `structural`, `identity`, and `rendering` consistency
