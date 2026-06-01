# Smart Snapshot Amplitude Event Spec

## Goal

Define a clean event schema for the `Smart Snapshot` feature so we can answer:

- how many users discover the feature
- how many start using it
- how they configure generation
- how many successfully generate an image
- how many download or otherwise use the result
- where users drop off in the flow

This spec is written for product + engineering implementation in Amplitude.

## Feature Summary

`Smart Snapshot` lets a user:

1. open the feature from the editor
2. frame a 3D scene / camera area
3. choose a style preset
4. enter a text description
5. choose output settings like image size and aspect ratio
6. generate a 2D image from the 3D scene
7. preview and optionally download the result

## Naming Convention

Recommended event naming:

- `smart_snapshot_*`

Reason:

- easy to group in Amplitude
- explicit feature-level namespace
- avoids collisions with generic editor / generation events

## Global Event Properties

These properties should be attached to all `smart_snapshot_*` events where available:

- `user_id`
- `session_id`
- `project_id`
- `scene_id`
- `workspace_id`
- `platform`
  - `web`
  - `desktop`
  - `mobile`
- `environment`
  - `prod`
  - `staging`
  - `dev`
- `entry_point`
  - example:
  - `toolbar_button`
  - `floating_icon`
  - `ask_dexi`
  - `context_menu`
  - `editor_panel`
- `feature_version`
  - useful if UX changes later

## Core Funnel Events

### 1. `smart_snapshot_opened`

Fire when:

- user opens the Smart Snapshot panel / modal / side panel

Properties:

- `entry_point`
- `scene_has_selected_camera` (`true/false`)
- `scene_object_count`
- `scene_character_count`
- `scene_light_count`
- `camera_mode`
  - `perspective`
  - `orthographic`
- `editor_state`
  - `edit`
  - `play`
  - `preview`

Why:

- measures feature discovery and real entry into the flow

---

### 2. `smart_snapshot_settings_changed`

Fire when:

- user changes any generation setting in the panel

Important:

- this should be fired on committed changes, not on every keystroke
- for text input, fire on blur, enter, or debounce

Properties:

- `changed_field`
  - `style_preset`
  - `description`
  - `image_size`
  - `aspect_ratio`
  - `orthographic_projection`
- `new_value`
- `old_value` if cheap to capture

Optional extra properties:

- `description_length`
- `description_word_count`

Why:

- helps understand what users actually adjust
- useful for settings adoption analysis

---

### 3. `smart_snapshot_generate_clicked`

Fire when:

- user clicks `Generate`

Properties:

- `style_preset`
- `description_length`
- `description_word_count`
- `description_is_empty` (`true/false`)
- `image_size`
- `aspect_ratio`
- `orthographic_projection` (`true/false`)
- `scene_object_count`
- `scene_character_count`
- `scene_light_count`
- `camera_mode`
- `bounding_frame_defined` (`true/false`)

Why:

- this is the main intent event
- best top-of-funnel input into generation conversion

---

### 4. `smart_snapshot_generation_started`

Fire when:

- backend generation job is successfully created

Properties:

- `generation_id`
- `style_preset`
- `image_size`
- `aspect_ratio`
- `orthographic_projection`
- `provider`
  - if relevant
- `model_name`
  - if relevant
- `queue_position` if available

Why:

- separates user click from actual job start
- useful for reliability and backend acceptance rate

---

### 5. `smart_snapshot_generation_succeeded`

Fire when:

- generation finishes successfully and result is shown to the user

Properties:

- `generation_id`
- `duration_ms`
- `style_preset`
- `image_size`
- `aspect_ratio`
- `orthographic_projection`
- `provider`
- `model_name`
- `output_width`
- `output_height`

Why:

- key success event
- main denominator for output quality / downstream usage

---

### 6. `smart_snapshot_generation_failed`

Fire when:

- generation job fails

Properties:

- `generation_id` if created
- `failure_stage`
  - `validation`
  - `job_creation`
  - `generation`
  - `result_render`
- `error_code`
- `error_message_grouped`
  - normalized category, not raw stack trace
- `style_preset`
- `image_size`
- `aspect_ratio`
- `orthographic_projection`

Why:

- required for reliability tracking
- helps separate UX problems from backend failures

---

### 7. `smart_snapshot_result_viewed`

Fire when:

- generated image is visible to the user

Properties:

- `generation_id`
- `is_first_result_in_session` (`true/false`)
- `style_preset`
- `image_size`
- `aspect_ratio`

Why:

- distinguishes successful backend generation from actual exposure to the output

---

### 8. `smart_snapshot_download_clicked`

Fire when:

- user clicks `Download`

Properties:

- `generation_id`
- `file_format`
  - `png`
  - `jpg`
  - etc.
- `image_size`
- `aspect_ratio`
- `style_preset`

Why:

- direct signal of output value
- one of the strongest “result was useful” events

## Secondary / Nice-to-Have Events

### `smart_snapshot_closed`

Fire when:

- user closes the panel without generating or after using it

Properties:

- `generated_in_session` (`true/false`)
- `downloaded_in_session` (`true/false`)
- `time_in_panel_ms`

Why:

- useful for abandonment analysis

---

### `smart_snapshot_result_regenerated`

Fire when:

- user generates again from the same panel/session after already getting a result

Properties:

- `previous_generation_id`
- `new_generation_id`
- `style_preset`
- `changed_after_previous_result`
  - array or compact string of changed fields

Why:

- helps distinguish exploration from one-shot use

---

### `smart_snapshot_preview_expanded`

Fire when:

- user expands the preview image

Properties:

- `generation_id`

Why:

- weak but useful signal of result interest

## Recommended User Properties

These should not necessarily be sent on every event, but should exist in Amplitude as user properties if already tracked elsewhere:

- `account_type`
  - `free`
  - `paid`
  - `enterprise`
- `role`
  - if available
- `country`
- `language`
- `days_since_signup`
- `has_used_smart_snapshot_before`
- `editor_power_user_segment`
  - if segmentation logic already exists

## Recommended Derived Funnel

Main funnel:

1. `smart_snapshot_opened`
2. `smart_snapshot_generate_clicked`
3. `smart_snapshot_generation_started`
4. `smart_snapshot_generation_succeeded`
5. `smart_snapshot_download_clicked`

This gives us:

- open -> intent conversion
- click -> backend-start conversion
- start -> success conversion
- success -> download conversion

## Recommended Key Metrics

### Adoption

- unique users who triggered `smart_snapshot_opened`
- unique users who triggered `smart_snapshot_generate_clicked`
- percentage of active editor users who used Smart Snapshot

### Conversion

- `% opened -> generate clicked`
- `% generate clicked -> generation started`
- `% generation started -> generation succeeded`
- `% generation succeeded -> download clicked`

### Reliability

- generation failure rate
- median generation duration
- p90 generation duration

### Engagement / Use Pattern

- average generations per user
- average generations per session
- most used `style_preset`
- most used `aspect_ratio`
- most used `image_size`
- share of users toggling `orthographic_projection`

## Recommended Property Normalization

To keep data clean:

- `style_preset` should be canonicalized
  - e.g. `manga`, not `Manga`, `manga style`, etc.
- `image_size` should use enum values
  - e.g. `1k_low`, `1k_high`, `2k`
- `aspect_ratio` should use enum values
  - e.g. `16_9`, `9_16`, `1_1`
- `error_message_grouped` should be normalized into a finite set
- booleans should be real booleans, not strings

## Implementation Notes for Engineering

- Do not fire `settings_changed` on every keypress in the description field.
- Always distinguish:
  - user intent (`generate_clicked`)
  - backend accepted job (`generation_started`)
  - backend success (`generation_succeeded`)
- Prefer one stable `generation_id` across all generation/result/download events.
- If generation is asynchronous, make sure success/failure events are emitted exactly once per job.

## Minimal MVP Event Set

If we want the smallest useful analytics implementation first, start with:

1. `smart_snapshot_opened`
2. `smart_snapshot_generate_clicked`
3. `smart_snapshot_generation_started`
4. `smart_snapshot_generation_succeeded`
5. `smart_snapshot_generation_failed`
6. `smart_snapshot_download_clicked`

This is enough to answer the most important adoption + conversion questions.

## Suggested Questions for Product / Eng Before Implementation

- What exactly counts as “open”: panel visible, fully rendered, or first interaction?
- Is preview shown automatically after success, or does the user have to click into it?
- Can users regenerate from the same settings?
- Can users change the frame / crop before generation?
- Do we need to track generated image sharing as a separate event?
- Do we already have a common `generation_id` / `job_id` pattern used elsewhere?
