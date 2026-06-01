# LoRA Training: Final Images vs Input-Output Pairs

## Summary

Standard LoRA training is usually done on the final target images themselves, not on explicit `input -> output` pairs.

This means a typical LoRA learns from:

- images
- captions / tags

rather than from paired examples such as:

- rough scene -> final image
- sketch -> rendered output
- layout -> styled output

## Core Idea

A standard LoRA is usually meant to learn:

- what a subject looks like
- what a style looks like
- what a product or identity should look like

It is not usually the main mechanism for learning:

- how to transform one visual input into another visual output

## What LoRA Is Good For

LoRA is especially useful when the goal is to learn:

- a person
- a character
- a product identity
- a visual style
- a brand aesthetic

In those cases, the training data is usually:

- the target images you want the model to imitate or preserve

## What Paired Data Is More Useful For

Explicit `input -> output` pairs are more relevant when the goal is:

- transformation
- conditioning
- controlled translation from one representation to another

That is usually more aligned with:

- ControlNet-style approaches
- image-to-image systems
- paired supervised training setups
- custom transformation pipelines

## Why This Matters

This distinction is important for product thinking.

If the goal is:

- identity or style learning

then LoRA can be the right tool.

If the goal is:

- `3D scene -> final 2D image`

then the paired scene and output may be useful, but that is not the same as standard LoRA training.

## Strategic Relevance

This matters because it separates two different product layers:

1. `LoRA / adaptation layer`
   - what should this subject or style look like?

2. `Control / transformation layer`
   - how should this structured input become a final output?

Those are related, but not identical.

## Main Takeaway

In standard usage:

- LoRA is trained on final target images

not on explicit paired `input -> output` examples.

Paired examples belong more naturally to transformation or conditioning systems than to basic LoRA training.
