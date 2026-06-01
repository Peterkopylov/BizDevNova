# Reddit Customer Signal: Face and Body Consistency

## Summary

This Reddit thread is a useful customer-signal artifact because it shows a real user asking for help with a concrete production problem:

- how to keep the same person's face and body consistent across newly generated images and videos

It is valuable for two reasons:

1. the customer request is explicit and detailed
2. the comment section surfaces real alternatives, workflows, and competitor mentions

Source:

- [Reddit thread: "What are the best method to keep a specific person face + body consistency when generating new images/videos"](https://www.reddit.com/r/StableDiffusion/comments/1pki4e3/what_are_the_best_method_to_keep_a_specific/)

## Why This Matters

This is not abstract market commentary.

It is a direct expression of a real need:

- identity consistency across scenes
- body consistency, not only face consistency
- the ability to change pose, outfit, background, and lighting without losing the person

This maps directly to one of the strongest open pain points in image generation.

## Customer Request

The original poster describes a practical workflow need:

- generate the same specific person from different angles
- under different lighting
- in different backgrounds
- with different outfits
- while preserving face and body identity

The user explicitly considers several possible approaches:

- training a LoRA per person
- using face-swap models
- building a workflow with face/body consistency nodes
- looking for some alternative method

## Key Customer Pain Revealed

The thread highlights that the user is not looking for:

- one good image

The user is looking for:

- repeatable identity across many outputs

And not just:

- face consistency

But also:

- body consistency
- pose flexibility
- clothing changes
- lighting and environment changes

This is a stronger and more realistic requirement than most basic image-generation demos.

## What The Comment Section Reveals

The comments suggest that the market does not yet have one universally accepted solution.

Instead, people recommend a mix of:

- LoRA training
- reference-image workflows
- face-control tools
- pose-control workflows
- tool-specific pipelines

This is a useful sign that the problem is real and still fragmented.

## Competitors / Tools Mentioned in Comments

The following tools or approaches were explicitly mentioned in the thread:

- `Nano Banana Pro`
- `Ideogram`
- `Higgsfield Soul`
- `Midjourney OmniReference`
- `Qwen Edit 2509`
- `InstantID`
- `IPAdapter`
- `FaceID`
- `PuLID`
- `Ostris AI Toolkit`
- `Z-Image`
- `Flux`

This thread should also feed the separate running tracker for consistency-related tools:

- [Consistency tools mentioned in community discussions](/Users/Peter/Documents/BizDev/research/2026-04-07-consistency-tools-mentioned-in-community.md)

## Pattern in the Recommended Solutions

The recommendations fall into a few recurring buckets.

### 1. Train a LoRA

Several commenters point toward:

- creating a training dataset
- fine-tuning a LoRA
- using a lightweight or small LoRA per person

This suggests that many advanced users still see LoRA-based identity locking as one of the more reliable routes.

### 2. Use Reference Images

Some comments recommend:

- creating a strong reference set
- especially multiple headshots or views
- then using those references repeatedly to generate training material or guide generation

This reinforces the idea that persistent anchors matter.

### 3. Combine Identity Control with Pose Control

One especially useful comment says the hardest part is:

- body consistency

and suggests mixing:

- a light identity hint
- with pose control

This is strategically important because it supports the idea that consistency is multi-layered, not one-dimensional.

### 4. Use Face-Control Nodes or Identity Tools

Specific tools mentioned include:

- `InstantID`
- `IPAdapter`
- `FaceID`
- `PuLID`

This indicates an ecosystem of partial solutions rather than one dominant winner.

## Important Strategic Insight

A very important theme in the thread is:

- face consistency alone is not enough

One commenter explicitly asks:

- why are we only concerned about the face? surely body needs to be included for consistency

That matters because many marketed solutions appear to solve:

- face identity

while the real production need is often:

- full-person consistency across scenes and actions

## Relevance to Our Thesis

This thread strongly supports several working ideas in our notes:

- consistency is a real customer pain, not a made-up category
- structural and identity consistency are separate but connected problems
- body consistency is often harder than face consistency
- persistent references and constrained editing matter
- the market is still stitching together fragmented workflows

## Implications for Us

- any product in this space should be careful not to over-focus on face-only consistency
- a stronger wedge may be `person consistency across scenes`, not just `face consistency`
- workflow packaging is likely valuable because users currently rely on messy multi-step pipelines
- there is room for a product that makes identity + pose + scene changes feel unified rather than hacked together

## Open Questions

- Which of the mentioned tools are gaining the most traction in real production workflows?
- Which approaches work best without requiring custom LoRA training per person?
- How much of this problem can be solved through a controlled layer versus identity-specific adaptation?
- Is there a viable wedge around `body consistency` specifically, since that appears less solved than face consistency?
