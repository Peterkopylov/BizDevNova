# Image Blaster Watch Item

Source: [neilsonnn/image-blaster](https://github.com/neilsonnn/image-blaster)

Review date: `May 15, 2026`

## Summary

`image-blaster` is a GitHub project positioned as an `image-to-world skillset for Claude`.

The core idea is notable for our current `2d to 3d` / `image to editable environment` tracking:

- take a single input image
- generate a `World Labs Marble` environment for the static world
- generate separate `Hunyuan 3D` object models for dynamic objects
- generate ambient and object-level SFX
- output a bundle that can be used in game engines, DCC tools, or web apps

The repo frames this as a way to go from image to a meshed 3D environment in under `5 minutes`.

## Why It Matters

This is interesting not because it is a proprietary model company, but because it is a very explicit example of a `composable pipeline` for `image -> world`.

It suggests a practical stack like:

- `world model` for static environment
- `object model generator` for manipulable objects
- `image editing layer` for cleanup and references
- `audio generation layer` for atmosphere and physics SFX

That is strategically relevant because one strong product direction may not be:

- one monolithic perfect model

but:

- orchestrating several specialized models into a workflow that produces a more usable scene package

## Public Details Captured

The README says the project creates:

- 3D models (`.glb`, `.obj`) for dynamic objects
- Gaussian splat (`.spz`) for the static environment
- ambient looping sound and object-specific physics SFX (`.mp3`)

Named model stack in the README:

- `marble-1.1` for explorable environment generation
- `nano-banana` for source cleanup and reference-image editing
- `gpt-image-2` as alternate image edit provider
- `hunyuan-3d` for 3D object generation through `FAL`
- `elevenlabs-sfx` for sound effects

The repo says it can be embedded into:

- Unity / Unreal / Godot
- Blender / 3DS Max / Maya
- Three.js / Electron apps

## Strategic Takeaway

This is a useful memory item because it reinforces a specific thesis:

- `image to editable 3D environment` may be won by workflow composition, not only by native scene-generation quality

In other words:

- static world reconstruction
- separate dynamic object extraction
- exportable scene assets
- auxiliary atmosphere/audio generation

may together create more practical value than a single beautiful-but-closed scene output.

## Signals

- public GitHub repo
- `756` stars visible at review time
- MIT license
- no published releases

## Open Questions

- How much of the final result quality depends on Marble versus the object-extraction / orchestration logic?
- How usable are the generated dynamic object models in practice for real editing workflows?
- Does this kind of pipeline outperform a single end-to-end scene model for production usability?
- Is this mainly a useful hack/demo, or an early sign of a durable product architecture?
