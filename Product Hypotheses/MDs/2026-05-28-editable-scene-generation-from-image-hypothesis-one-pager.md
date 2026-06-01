# Hypothesis One-Pager: Editable Scene Generation From Image

Date: `May 28, 2026`

Based on:

- [Interior scene tactical plan](/Users/peter.kopylov/Documents/BizDev/meetings/2026-05-26-tactical-plan-interior-scene-generation.md)
- [Next steps one-pager](/Users/peter.kopylov/Documents/BizDev/meetings/2026-05-26-next-steps-one-pager.md)
- [2D image to 3D editable environment topic note](/Users/peter.kopylov/Documents/BizDev/research/2026-04-23-2d-image-to-3d-editable-environments-topic-note.md)
- [3D editable scene generator business case narrative](/Users/peter.kopylov/Documents/BizDev/research/2026-05-20-3d-editable-scene-generator-business-cases-presentation.md)
- [Fire brigade vehicle layout training use case](/Users/peter.kopylov/Documents/BizDev/research/2026-05-20-fire-brigade-vehicle-layout-training-use-case.md)
- [Controlled layer and consistency](/Users/peter.kopylov/Documents/BizDev/research/2026-04-07-controlled-layer-and-consistency.md)

## Hero Description

Turn a real-world image into an editable 3D scene that users can inspect, rearrange, and reuse.

The value is a `usable spatial scaffold`, not perfect mesh beauty: a scene that captures the important objects, positions, and layout well enough for planning, training, communication, or redesign.

## Why Now

`Image -> 3D` is becoming common, but `image -> editable scene` is still early, technically credible, and not yet owned by one obvious workflow-first product.

## Problem It Solves

Users can capture a real-world setup with photos, but they cannot quickly turn it into a structured scene they can edit, compare, or reuse. Current workarounds like diagrams, Miro boards, and manual rebuilding are slow, static, and poor at preserving spatial structure.

## ICP

### Primary ICP

Teams who care more about `layout correctness and editability` than about perfect 3D object fidelity.

Best-fit early users:

- interior and room layout teams
- training and simulation teams
- operational teams documenting real-world setups
- showroom, booth, or display planners
- teams creating digital-twin-lite reconstructions from photos

### Likely Early Wedges

- `interior reconstruction`
- `equipment compartment / vehicle layout training`
- `retail display or aisle reconstruction`
- `workspace or station setup reconstruction`

## Use Case / User Story

### Interior Example

Input:

- user uploads one photo of a room

System does:

- detects room structure
- identifies major scene-defining objects
- reconstructs an editable 3D scene
- preserves rough size, orientation, and relative placement

Output:

- editable room scene with movable major furniture and a plausible room shell

User outcome:

- user can rearrange the space, inspect the layout, communicate alternatives, or use it as a planning starting point

### Operational Training Example

Input:

- user uploads photos of a vehicle compartment or workstation

System does:

- reconstructs the compartment or station as an editable scene
- places important objects in roughly correct positions

Output:

- explorable training-ready layout with editable object placement

User outcome:

- team can train spatial memory, review current state, and maintain layout knowledge more easily than with static boards

## Proposed Product Hypothesis

If a single image can be turned into a structurally useful editable scene, users will accept approximate geometry as long as object presence, placement, orientation, and scale are good enough to work with.

## Key Competitors To Watch And Why

- [Marble](https://www.worldlabs.ai/): best benchmark for `image -> editable 3D world`, especially editing, expansion, composition, and export.
- [SpAItial](https://spaitial.ai/): strong signal for where spatially grounded, interactive world generation is heading.
- [PentoPix](https://www.pentopix.com/): useful workflow-first reference for editable scene assembly, camera control, and production fit.
- [Meshy](https://www.meshy.ai/) / [Tripo](https://www.tripo3d.ai/): asset-first tools that may pull scene features into their products over time.

## Key Features

### Core Features

- single-image upload
- `single room photo -> editable interior layout` as the first wedge
- room or scene shell reconstruction
- major-object detection and placement
- editable object selection and movement
- rough object scale and orientation preservation
- scene graph or equivalent structured representation
- save and reopen editable scene state
- support for scenes with fewer than about `15` large scene-defining objects
- optimize for `large furniture and layout`, not small-object completeness
- output is acceptable when it is structurally usable: important objects present, major positions right, orientations mostly correct, no gross artifacts

### Second-Order Features

- object replacement with library assets
- scene expansion beyond the visible frame
- prompt-assisted editing of the reconstructed scene
- export to DCC / engine / web workflow formats
- before / after comparison
- multi-image refinement
- collaboration, comments, and review mode
- training or guided walkthrough mode

## Success Hypothesis

We should consider the hypothesis promising if early users consistently say:

- `this is good enough to rearrange`
- `this is easier than rebuilding manually`
- `this helps me explain or review the setup`
- `this is useful even though the objects are approximate`

Useful evaluation signals:

- percent of important large objects recovered
- rough size agreement for important objects
- correctness of relative positioning
- correctness of orientation
- frequency of gross scene failures
- qualitative judgment of whether the scene is usable for editing

## Key Risks And Open Questions

- can we get enough structural accuracy from a single image in messy real-world scenes?
- how much editability is needed before users perceive real value?
- where should we use primitives versus library assets?
- what export or downstream workflow matters most for the first ICP?
- should the product promise `reconstruction` or `editable approximation`?
- which wedge is commercially strongest first: interiors, equipment layouts, retail, or another operational setup?
