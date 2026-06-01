# B2C Real-Life Scenario Training

Date: `May 28, 2026`

YouTrack issue:

Status: `Draft`

Based on:

- [Editable scene generation from image hypothesis one-pager](/Users/peter.kopylov/Documents/BizDev/Product%20Hypotheses/MDs/2026-05-28-editable-scene-generation-from-image-hypothesis-one-pager.md)
- [AI Roleplay deck](/Users/peter.kopylov/Documents/BizDev/research/presentations/ai-roleplay-wedges/AI%20Roleplay.pptx)
- [3D editable scene generator business case narrative](/Users/peter.kopylov/Documents/BizDev/research/2026-05-20-3d-editable-scene-generator-business-cases-presentation.md)
- [3D editor and spatial placement in AI roleplay](/Users/peter.kopylov/Documents/BizDev/research/2026-05-19-insight-3d-editor-and-spatial-placement-in-ai-roleplay.md)
- [Multi-agent roleplay product mechanics](/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-insight-product-mechanics-for-good-multi-agent-roleplay.md)

## Hero Description

Let people recreate real-life situations and use them as interactive training environments.

The value is a `grounded scenario-training loop`, not generic AI chat: a product that puts the user into a recognizable scene, lets them practice inside it, and helps them improve through repetition and feedback.

## Why Now

Consumers already use AI for:

- advice
- tutoring
- language learning
- journaling
- message drafting

But most tools still stop at:

- generic text advice
- one-on-one chatbot conversation
- abstract roleplay without the real context of the user's life
- training without believable scene context

The opening here is a more grounded consumer experience:

- upload the space
- describe the people
- recreate the mood and constraints
- practice inside the situation

## Problem It Solves

People often want to train for real-life situations, but current consumer tools are weak in three ways:

1. they do not reflect the user's real context
2. they do not let the user practice inside believable scenes
3. they rarely handle multiple people or spatial context well

Typical moments include:

- a difficult conversation with a partner
- a tense talk with a parent or sibling
- a boundary-setting conversation with a friend
- a landlord, roommate, or neighbor issue
- an apology, confrontation, or vulnerable request
- speaking a foreign language in a restaurant, shop, or airport
- practicing social confidence in public situations

The unmet need is not only advice. It is `situated training`.

## ICP

Consumers who want to improve real-world performance in situations that are social, contextual, and easier to practice than to improvise live.

Best-fit early users:

- people with relationship or family tension
- users preparing for difficult social conversations
- people with anxiety around upcoming interactions
- language learners who want contextual speaking practice
- users who want to rehearse in realistic environments instead of generic chat
- users who already journal, reflect, or use AI for emotional support
- people who want to practice how to say or do something before doing it for real

## Use Case / User Story

### Difficult Conversation At Home

Input:

- user uploads a photo of their kitchen
- user describes their partner's personality
- user explains the situation:
  - they need to talk about finances
  - their partner becomes defensive quickly
  - they want to stay calm and avoid escalation

System does:

- recreates a lightweight version of the kitchen
- creates a partner character with the requested traits
- sets emotional parameters and likely responses
- lets the user run the conversation several ways

Output:

- a roleplay scene grounded in the user's own space
- multiple rehearsals with different reactions or difficulty levels
- post-session feedback on tone, escalation, clarity, and missed opportunities

User outcome:

- user feels less anxious
- user finds language that feels natural
- user enters the real conversation more prepared

### Language Learning In A Realistic Public Scene

Input:

- user uploads a photo of a cafe, store, or airport-like environment
- user chooses a target language
- user wants to practice ordering, asking for help, or responding to follow-up questions

System does:

- recreates the public setting
- simulates one or more people in the scene
- adjusts difficulty, pace, and accent or formality
- lets the user retry the same scene until they feel fluent

Output:

- a contextual speaking-practice scene with feedback on language, confidence, and response quality

User outcome:

- user gets more comfortable using the language in realistic situations, not just in abstract drills

### Panel Interview Preparation

Input:

- user selects a job interview scenario with multiple interviewers
- user describes the role, company type, and likely panel dynamics
- user wants to practice handling different personalities in the room:
  - a friendly recruiter
  - a skeptical hiring manager
  - a domain expert who asks deep follow-up questions

System does:

- creates a multi-NPC interview panel with different goals and tones
- simulates turn-taking, interruptions, and shifts in attention
- evaluates how well the user answers different stakeholders without losing coherence

Output:

- a realistic panel interview simulation with several interviewers
- feedback on clarity, confidence, stakeholder handling, and answer structure
- replay options with harder panel dynamics or different interviewer personalities

User outcome:

- user gets better at staying calm in multi-person interview settings
- user practices speaking to the whole room instead of only one person
- user improves readiness for real panel interviews

### Social Confidence In A Small Group Setting

Input:

- user describes a real social situation:
  - joining a dinner with new people
  - meeting a partner's friends
  - attending a networking event
- user uploads a photo of the venue or picks a similar setting
- user wants to practice entering the conversation without freezing or sounding awkward

System does:

- recreates the environment and populates it with several characters
- simulates shifting attention, side comments, and varying levels of openness
- lets the user retry moments like introductions, joining a topic, or redirecting the conversation

Output:

- a multi-character social practice scene
- feedback on confidence, timing, warmth, and conversational flow

User outcome:

- user feels more prepared for live group interaction
- user reduces anxiety around joining conversations with unfamiliar people

## Product Hypothesis

If consumers can recreate real-life situations and train inside them, they will find that meaningfully more valuable than generic AI advice, text-only roleplay, or flat tutoring interfaces.

Core belief:

- `context increases emotional relevance`
- `context also improves learning transfer`
- `repetition inside believable scenes increases confidence`
- `realism increases retention and willingness to return`

## Key Competitors To Watch And Why

Closest product references from the existing `AI roleplay` competitor corpus:

- [Yoodli](https://yoodli.ai/): strongest reference for realistic roleplay plus post-session coaching, analytics, and retry loops; also the clearest signal for multi-persona simulations, though not as a full consumer multi-NPC wedge
- [Second Nature](https://secondnature.ai/): strongest reference for scenario realism, feedback structure, and conversation practice tied to operational readiness
- [Virti](https://www.virti.com/): strongest reference for immersive scenes, virtual humans, and environment-aware training
- [Mursion](https://www.mursion.com/): useful benchmark for emotionally believable high-stakes simulations and premium immersive practice
- [DialogueTrainer](https://www.dialoguetrainer.com/): strong reference for difficult-conversation practice and measurable soft-skills improvement
- [Skillsoft CAISY](https://documentation.skillsoft.com/en_US/percipio/Content/LX_Design_Studio/lxd_caisy.htm): useful benchmark for structured scenario authoring, coaching modes, and scalable evaluation workflows

Behavioral alternatives outside the direct competitor-note set:

- `ChatGPT / general AI assistants`: strongest baseline for advice, scripting, and reflection
- `mental wellness and journaling apps`: indirect competitors for emotional preparation and reflection
- `relationship coaching / therapy-adjacent content apps`: indirect competitors for difficult conversation support

What none of them fully combine yet:

- real-life scene recreation
- broad consumer scenario training
- multi-character simulation as the core product wedge
- spatial context
- feedback on how the interaction went

Important nuance:

- some competitors have partial signals around multi-persona or immersive simulation
- but none of them appears to position `consumer-facing multi-NPC real-life training` as the main product thesis

## Key Features

### Core Features

- prompt-based scenario creation
- upload a photo of the real environment
- lightweight scene reconstruction from image
- character creation:
  - name
  - relationship to the user
  - personality traits
  - likely triggers or patterns
- emotional, difficulty, or lesson settings
- play mode with voice or voice-plus-text interaction
- replay / retry loop
- multi-NPC scene support where relevant
- spatial scene grounding:
  - who is where
  - who the user is speaking to
  - what the visible environment is
- post-session feedback on:
  - clarity
  - tone
  - escalation
  - confidence
  - empathy
  - fluency or response quality

### Second-Order Features

- alternative outcomes:
  - `what if they react badly?`
  - `what if they stay silent?`
  - `what if a second person joins?`
- multi-character scenes
- camera or viewpoint logic for scene-based interaction
- memory across repeated practice sessions
- scene editing:
  - change location
  - change time of day
  - change mood
- suggested phrasing and rewrite options
- guided mode for more anxious users
- reflective journaling after practice
- save scenario library:
  - `my partner`
  - `my mom`
  - `my boss`
  - `my roommate`

### MVP User Journeys

- user uploads a photo or describes the setting
- user defines the people, goals, and training context
- the system creates the rehearsal scene
- the user practices the scenario
- the system provides feedback and allows retries

## Success Hypothesis

We should consider the hypothesis promising if early users consistently say:

- `this feels close to my real situation`
- `this helped me prepare what to say`
- `this feels more useful than generic AI chat`
- `this helped me practice in context`
- `this made me less anxious`
- `I want to retry the same situation in a different way`

Useful evaluation signals:

- repeat rehearsal rate
- average retries per scenario
- percent of users who save or revisit a scenario
- self-reported confidence increase after use
- self-reported realism of the recreated interaction
- self-reported training usefulness by use case
- number of users creating recurring character sets

## Key Risks And Open Questions

- how emotionally realistic does the simulation need to be before consumers trust it?
- is this better framed as `training`, `rehearsal`, `preparation`, or `confidence-building`?
- how close can we get to real-life context without making setup too heavy?
- is photo-based spatial grounding necessary in v1, or only a strong enhancer?
- which use case creates the strongest pull first:
  - relationship conversations
  - family conflict
  - social anxiety
  - life-admin conversations
  - language learning
- how do we stay clearly useful without drifting into unsafe therapy claims?
- what level of multi-character orchestration is needed to feel real for consumer scenarios?
- how much spatial accuracy is necessary before the scene feels meaningfully better than non-spatial roleplay?
