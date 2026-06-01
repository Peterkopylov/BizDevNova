const fs = await import("node:fs/promises");
const path = await import("node:path");
const { Presentation, PresentationFile } = await import("@oai/artifact-tool");

const W = 1280;
const H = 720;

const OUT_DIR = "/Users/peter.kopylov/Documents/BizDev/research/presentations/ai-roleplay-wedges";
const SCRATCH_DIR = path.join(OUT_DIR, "build", "tmp");
const PREVIEW_DIR = path.join(SCRATCH_DIR, "preview");

const BG = "#F7F2E8";
const INK = "#111827";
const MUTED = "#5B6473";
const WHITE = "#FFFFFF";
const PRIMARY = "#5A55EA";
const PRIMARY_DARK = "#3D37C9";
const TEAL = "#15B8A6";
const CORAL = "#E56B5D";
const GOLD = "#D3A23A";
const PALE = "#FBFAF6";
const LINE = "#D8D2C8";

const TITLE = "Georgia";
const BODY = "Aptos";
const MONO = "Aptos Mono";

const SOURCES = {
  market1: "Precedence Research conversational AI market page (2025 market size USD 19.21B; CAGR 23.24% 2026-2035)",
  market2: "Grand View Research AI in education market page (2024 market size USD 5.88B; CAGR 31.2% 2025-2030)",
  yoodli: "/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-yoodli-competitor-note.md",
  secondNature: "/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-second-nature-competitor-note.md",
  skillsoft: "/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-skillsoft-caisy-competitor-note.md",
  virti: "/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-virti-competitor-note.md",
  mursion: "/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-mursion-competitor-note.md",
  dialoguetrainer: "/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-dialoguetrainer-competitor-note.md",
  featureSurface: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-19-yoodli-screenshot-derived-feature-surface.md",
  criticalFeatures: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-18-critical-features-to-enter-ai-roleplay-market.md",
  businessCase: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-18-most-viable-business-case-for-ai-roleplay-market-entry.md",
  multiNpc: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-18-multi-npc-business-cases-and-best-wedge.md",
  multiNpcWedge: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-18-multi-npc-conversations-as-a-wedge-for-ai-roleplay.md",
  spatial: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-19-insight-3d-editor-and-spatial-placement-in-ai-roleplay.md",
  arvr: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-19-insight-ar-vr-in-ai-roleplay.md",
  pairShopping: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-19-insight-sales-practice-for-in-store-shopping-by-pairs.md",
  multiAgent: "/Users/peter.kopylov/Documents/BizDev/research/2026-04-22-insight-product-mechanics-for-good-multi-agent-roleplay.md",
};

const COMPETITORS = [
  ["Yoodli", "2021", "n/d public total\n15k+ employee rollout signal", "Series B", "Communication coaching + AI roleplays"],
  ["Second Nature", "2018", "n/d public total", "Series B", "Customer-facing roleplay training"],
  ["Skillsoft CAISY", "1998", "105M+ learners\n(parent company)", "Public", "Enterprise conversation simulator inside L&D suite"],
  ["Virti", "2017", "n/d public total", "Series A", "Immersive roleplay + video + virtual humans"],
  ["Mursion", "2014", "18M+ simulation minutes", "Venture / late early stage", "Premium immersive workforce simulations"],
  ["DialogueTrainer", "2016", "75k trained\n400k playthroughs", "Private / undisclosed", "Soft-skills simulation with measurable outcomes"],
];

const SLIDES = [
  {
    type: "market",
    kicker: "MARKET",
    title: "AI roleplay is a wedge inside two larger growth markets",
    subtitle:
      "There is no clean public standalone market number for AI roleplay, so the best sizing frame is adjacent markets: conversational AI on one side and AI-enabled training on the other.",
    sources: ["market1", "market2"],
  },
  {
    type: "table",
    kicker: "COMPETITORS",
    title: "Key competitors span public incumbents, venture-backed platforms, and focused specialists",
    subtitle: "User counts are public only where disclosed; otherwise we use the strongest public adoption signal we found.",
    sources: ["yoodli", "secondNature", "skillsoft", "virti", "mursion", "dialoguetrainer"],
  },
  {
    type: "threeCols",
    kicker: "POSITIONING",
    title: "The market is not really buying dialogue. It is buying a business-problem solution.",
    subtitle: "The strongest players package AI roleplay as rehearsal infrastructure for specific operational moments.",
    columns: [
      {
        label: "REVENUE AND CUSTOMER TEAMS",
        bullets: [
          "sales onboarding",
          "objection handling",
          "rep certification",
          "buying committee practice",
          "customer escalation readiness",
        ],
      },
      {
        label: "WORKPLACE AND LEADERSHIP",
        bullets: [
          "manager feedback conversations",
          "HR and conflict scenarios",
          "leadership communication",
          "interview and panel prep",
          "coaching at scale",
        ],
      },
      {
        label: "IMMERSIVE TRAINING",
        bullets: [
          "healthcare and clinical communication",
          "education and classroom scenarios",
          "frontline service practice",
          "VR / virtual human scenarios",
          "behavior change training",
        ],
      },
    ],
    sources: ["businessCase", "yoodli", "secondNature", "skillsoft", "virti", "mursion", "dialoguetrainer"],
  },
  {
    type: "featureGrid",
    kicker: "TABLE STAKES",
    title: "The category baseline is already clear",
    subtitle: "A new entrant without these features will look thin, even if the model quality is good.",
    cards: [
      ["Scenario Builder", "Prebuilt or custom scenarios tied to a real workflow."],
      ["Configurable Personas", "Customer, manager, stakeholder, or patient profiles with adjustable behavior."],
      ["Play Mode", "Live voice or voice-plus-text simulation with a realistic turn-taking loop."],
      ["Assessment", "Rubric-based scoring plus strengths, gaps, and next-step feedback."],
      ["Replay Surface", "Transcript, recording, or replay to support reflection and retraining."],
      ["Team Visibility", "Admin dashboard, assignment, certification, and program analytics."],
    ],
    sources: ["criticalFeatures", "featureSurface"],
  },
  {
    type: "wedgeIntro",
    kicker: "OUR WEDGE",
    title: "Two meaningful wedges sit above the crowded one-on-one roleplay layer",
    subtitle: "Multi-NPC and spatial both push the product from simple dialogue simulation toward situated social rehearsal.",
    sources: ["multiNpcWedge", "spatial", "pairShopping"],
  },
  {
    type: "multiNpc",
    kicker: "MULTI-NPC",
    title: "Multi-NPC is where orchestration starts to matter more than text generation",
    subtitle: "The hard part stops being a single AI answer and becomes the social system around the conversation.",
    sources: ["multiNpc", "multiAgent", "featureSurface", "yoodli", "secondNature", "mursion"],
  },
  {
    type: "spatial",
    kicker: "SPATIAL",
    title: "Spatial is valuable when room geometry and environment affect the outcome",
    subtitle: "It matters less for phone-style objection handling, and much more for showroom, classroom, clinical, or frontline settings.",
    sources: ["spatial", "arvr", "pairShopping", "virti", "mursion"],
  },
  {
    type: "combo",
    kicker: "COMBINED WEDGE",
    title: "Spatial + multi-NPC is the sharpest wedge we can own",
    subtitle: "That combination turns AI roleplay into a social scene simulator, especially if 3D scene generation makes authoring fast enough.",
    sources: ["spatial", "multiNpc", "pairShopping", "multiAgent"],
  },
  {
    type: "featuresStrategy",
    kicker: "FEATURE STRATEGY",
    title: "We still need table stakes, but a few features can sharpen the story fast",
    subtitle: "The wedge works only if the basic authoring, play mode, and feedback loop are already strong.",
    sources: ["criticalFeatures", "spatial", "multiAgent"],
  },
  {
    type: "mvp",
    kicker: "MVP",
    title: "A credible MVP can stay compact",
    subtitle: "The first version does not need full world simulation. It needs fast scenario creation, a strong play loop, and reliable assessment.",
    sources: ["criticalFeatures", "multiNpc", "spatial"],
  },
];

function shapeLine(color = LINE, width = 1.2) {
  return { style: "solid", fill: color, width };
}

function addRect(slide, x, y, w, h, fill, line = null, radius = "roundRect") {
  return slide.shapes.add({
    geometry: radius,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: line ? shapeLine(line) : { width: 0, style: "solid", fill: "#00000000" },
  });
}

function addText(slide, text, x, y, w, h, opts = {}) {
  const box = addRect(slide, x, y, w, h, "#00000000", null, "rect");
  box.text = String(text ?? "");
  box.text.fontSize = opts.size ?? 18;
  box.text.typeface = opts.face ?? BODY;
  box.text.color = opts.color ?? INK;
  box.text.bold = Boolean(opts.bold);
  box.text.alignment = opts.align ?? "left";
  box.text.verticalAlignment = opts.valign ?? "top";
  box.text.autoFit = opts.autoFit ?? "shrink";
  box.text.insets = { left: 0, right: 0, top: 0, bottom: 0 };
  return box;
}

function addBullets(slide, items, x, y, w, h, size = 17, color = INK) {
  const text = items.map((item) => `• ${item}`).join("\n");
  addText(slide, text, x, y, w, h, { size, color, face: BODY, autoFit: "shrink" });
}

function addHeader(slide, idx, total, kicker) {
  addRect(slide, 0, 0, W, H, BG, null, "rect");
  addRect(slide, 0, 0, 18, H, PRIMARY, null, "rect");
  addText(slide, kicker, 46, 28, 260, 18, { size: 12, face: MONO, bold: true, color: PRIMARY_DARK });
  addText(slide, `${String(idx).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, 1128, 28, 96, 18, {
    size: 12,
    face: MONO,
    bold: true,
    color: PRIMARY_DARK,
    align: "right",
  });
  addRect(slide, 46, 58, 1178, 2, INK, null, "rect");
}

function addTitle(slide, title, subtitle) {
  addText(slide, title, 46, 82, 880, 72, { size: 30, face: TITLE, bold: true, color: INK });
  addText(slide, subtitle, 48, 156, 980, 52, { size: 16, face: BODY, color: MUTED });
}

function addFooter(slide, text = "Internal synthesis based on public sources and our own research notes.") {
  addText(slide, text, 46, 690, 1180, 16, { size: 10, face: BODY, color: MUTED });
}

function addSpeakerNotes(slide, body, sourceKeys) {
  const sources = sourceKeys.map((key) => `- ${SOURCES[key] || key}`).join("\n");
  slide.speakerNotes.setText(`${body}\n\n[Sources]\n${sources}`);
}

function addMetricCard(slide, x, y, w, h, color, metric, label, note) {
  addRect(slide, x, y, w, h, WHITE, INK);
  addRect(slide, x, y, w, 8, color, null, "rect");
  addText(slide, metric, x + 22, y + 24, w - 44, 48, { size: 30, face: TITLE, bold: true, color: INK });
  addText(slide, label, x + 22, y + 78, w - 44, 40, { size: 16, face: BODY, color: INK });
  addText(slide, note, x + 22, y + h - 38, w - 44, 22, { size: 10, face: BODY, color: MUTED });
}

function addCard(slide, x, y, w, h, label, body, accent = PRIMARY) {
  addRect(slide, x, y, w, h, WHITE, INK);
  addRect(slide, x, y, 8, h, accent, null, "rect");
  addText(slide, label, x + 22, y + 20, w - 44, 22, { size: 12, face: MONO, bold: true, color: accent });
  addText(slide, body, x + 22, y + 56, w - 44, h - 76, { size: 17, face: BODY, color: INK });
}

function addTable(slide, x, y, w, rowH, headers, rows) {
  const widths = [0.16, 0.10, 0.18, 0.16, 0.40];
  let cx = x;
  headers.forEach((header, i) => {
    const cw = w * widths[i];
    addRect(slide, cx, y, cw, rowH, PRIMARY_DARK, null, "rect");
    addText(slide, header, cx + 10, y + 10, cw - 20, rowH - 16, {
      size: 12,
      face: MONO,
      bold: true,
      color: WHITE,
    });
    cx += cw;
  });

  rows.forEach((row, r) => {
    let colX = x;
    const top = y + rowH + r * rowH;
    row.forEach((cell, i) => {
      const cw = w * widths[i];
      addRect(slide, colX, top, cw, rowH, r % 2 === 0 ? WHITE : PALE, INK);
      addText(slide, cell, colX + 10, top + 8, cw - 20, rowH - 14, {
        size: i === 4 ? 11 : 12,
        face: BODY,
        color: INK,
        autoFit: "shrink",
      });
      colX += cw;
    });
  });
}

function slide1(p) {
  const slide = p.slides.add();
  addHeader(slide, 1, SLIDES.length, SLIDES[0].kicker);
  addTitle(slide, SLIDES[0].title, SLIDES[0].subtitle);

  addMetricCard(
    slide,
    58,
    250,
    275,
    190,
    PRIMARY,
    "$19.2B",
    "Conversational AI market size in 2025",
    "Precedence Research"
  );
  addMetricCard(
    slide,
    356,
    250,
    275,
    190,
    TEAL,
    "23.2%",
    "Conversational AI CAGR, 2026-2035",
    "Precedence Research"
  );
  addMetricCard(
    slide,
    654,
    250,
    275,
    190,
    GOLD,
    "$5.9B",
    "AI in education market size in 2024",
    "Grand View Research"
  );
  addMetricCard(
    slide,
    952,
    250,
    275,
    190,
    CORAL,
    "31.2%",
    "AI in education CAGR, 2025-2030",
    "Grand View Research"
  );

  addCard(
    slide,
    58,
    474,
    1168,
    170,
    "SO WHAT",
    "There is no clean public market estimate for AI roleplay itself. The strongest way to size it is as a high-growth layer sitting between conversational AI and AI-enabled training. That is enough to show the category is real, but still early and not fully carved out.",
    PRIMARY
  );
  addFooter(slide);
  addSpeakerNotes(slide, "Use this slide to frame the market honestly: roleplay is real, but the best public sizing comes from adjacent markets rather than a pure-play line item.", SLIDES[0].sources);
}

function slide2(p) {
  const slide = p.slides.add();
  addHeader(slide, 2, SLIDES.length, SLIDES[1].kicker);
  addTitle(slide, SLIDES[1].title, SLIDES[1].subtitle);
  addTable(
    slide,
    46,
    232,
    1180,
    68,
    ["Competitor", "Founded", "Users / adoption", "Funding stage", "Hero description"],
    COMPETITORS
  );
  addFooter(slide, "Funding stage reflects the strongest public signal we verified; some private-company details remain partial.");
  addSpeakerNotes(slide, "The point of this slide is breadth: public incumbent, venture-backed platforms, and sharper specialists all exist already.", SLIDES[1].sources);
}

function slide3(p) {
  const slide = p.slides.add();
  addHeader(slide, 3, SLIDES.length, SLIDES[2].kicker);
  addTitle(slide, SLIDES[2].title, SLIDES[2].subtitle);
  const cols = SLIDES[2].columns;
  const width = 360;
  cols.forEach((col, i) => {
    const x = 58 + i * 392;
    addRect(slide, x, 254, width, 340, WHITE, INK);
    addRect(slide, x, 254, width, 10, [PRIMARY, TEAL, CORAL][i], null, "rect");
    addText(slide, col.label, x + 20, 278, width - 40, 44, { size: 13, face: MONO, bold: true, color: INK });
    addBullets(slide, col.bullets, x + 20, 334, width - 40, 230, 17, INK);
  });
  addFooter(slide);
  addSpeakerNotes(slide, "This is the slide that reframes the category. Competitors are not pitching 'conversation' as the product; they are pitching faster readiness for specific moments.", SLIDES[2].sources);
}

function slide4(p) {
  const slide = p.slides.add();
  addHeader(slide, 4, SLIDES.length, SLIDES[3].kicker);
  addTitle(slide, SLIDES[3].title, SLIDES[3].subtitle);
  const cards = SLIDES[3].cards;
  cards.forEach((card, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    addCard(slide, 58 + col * 392, 240 + row * 180, 360, 150, card[0], card[1], [PRIMARY, TEAL, CORAL, GOLD, PRIMARY, TEAL][i]);
  });
  addFooter(slide);
  addSpeakerNotes(slide, "This is the minimum credible stack. Any wedge we pursue still sits on top of this workflow.", SLIDES[3].sources);
}

function slide5(p) {
  const slide = p.slides.add();
  addHeader(slide, 5, SLIDES.length, SLIDES[4].kicker);
  addTitle(slide, SLIDES[4].title, SLIDES[4].subtitle);
  addCard(
    slide,
    58,
    246,
    550,
    284,
    "MULTI-NPC",
    "More than one active stakeholder in the same scene: a buying committee, a shopping pair, a panel interview, a manager plus HR, or a classroom group. The user is not just answering a single bot. They are navigating competing goals, power, attention, and sequencing.",
    PRIMARY
  );
  addCard(
    slide,
    672,
    246,
    554,
    284,
    "SPATIAL",
    "A scene where position, movement, eye-line, proximity, and environment matter. This matters when the room changes the conversation: a showroom, hospital room, front desk, classroom, or live retail floor.",
    TEAL
  );
  addCard(
    slide,
    58,
    562,
    1168,
    96,
    "THESIS",
    "Generic roleplay is crowded. Social complexity and situated interaction are where stronger differentiation still exists.",
    CORAL
  );
  addFooter(slide);
  addSpeakerNotes(slide, "Define both wedges clearly before we go deeper, so the rest of the deck can build on common language.", SLIDES[4].sources);
}

function slide6(p) {
  const slide = p.slides.add();
  addHeader(slide, 6, SLIDES.length, SLIDES[5].kicker);
  addTitle(slide, SLIDES[5].title, SLIDES[5].subtitle);
  addCard(slide, 58, 236, 340, 270, "WHO ALREADY HAS IT", "Yoodli clearly has multi-persona roleplays.\nSecond Nature has multiple-stakeholder scenarios.\nMursion supports multi-avatar simulation.\nVirti is immersive, but true multi-NPC is not clearly verified in the same way.", PRIMARY);
  addCard(slide, 440, 236, 370, 270, "BUSINESS CASES TODAY", "Buying committee sales conversations\nPanel interview practice\nGroup presentations and audience Q&A\nCustomer escalation scenarios\nLeadership conversations with multiple parties", TEAL);
  addCard(slide, 852, 236, 374, 270, "WHAT WE CAN ADDRESS", "Pair-shopping retail sales\nShowroom selling where two people influence the purchase\nManager + HR + employee rehearsals\nClassroom facilitation\nHealthcare bedside communication with family present", CORAL);
  addCard(slide, 58, 538, 1168, 118, "WHY THE ORCHESTRATOR MATTERS", "With multi-NPC, quality depends on how goals, interruptions, alliances, turn-taking, and attention are coordinated. That orchestration layer can become a real moat, because the hard problem stops being 'generate a reply' and becomes 'simulate a social system.'", GOLD);
  addFooter(slide);
  addSpeakerNotes(slide, "This is the core strategic slide for multi-NPC. The orchestrator matters because multiple believable agents need coordination, not just better copy.", SLIDES[5].sources);
}

function slide7(p) {
  const slide = p.slides.add();
  addHeader(slide, 7, SLIDES.length, SLIDES[6].kicker);
  addTitle(slide, SLIDES[6].title, SLIDES[6].subtitle);
  addCard(slide, 58, 228, 270, 190, "WHO HAS IT", "Virti is the clearest spatial / immersive player in our set.\nMursion is also closest through immersive simulations and multi-avatar practice.", PRIMARY);
  addCard(slide, 354, 228, 270, 190, "CURRENT USE CASES", "Healthcare\nCustomer service\nLeadership training\nEducation\nVR-compatible immersive soft-skills practice", TEAL);
  addCard(slide, 650, 228, 270, 190, "WHAT WE CAN ADDRESS", "Pair-shopping retail\nElectronics / furniture showrooms\nAutomotive walkarounds\nHospitality floor scenarios\nFront-desk or classroom facilitation", CORAL);
  addCard(slide, 946, 228, 280, 190, "WHAT SPATIAL ADDS", "Attention distribution\nWho you are facing\nPhysical context\nMovement through the scene\nObject-aware interaction", GOLD);
  addCard(slide, 58, 452, 1168, 200, "WHY IT MATTERS", "Spatial turns roleplay into situated interaction rehearsal. The user is not only choosing what to say. They are choosing where to stand, who to address, when to shift attention, and how to use the environment or product in the interaction. That is especially valuable when success depends on social geometry, not just wording.", TEAL);
  addFooter(slide);
  addSpeakerNotes(slide, "This slide should feel practical. Spatial is not a generic visual upgrade; it matters only when environment and physical context change the interaction quality.", SLIDES[6].sources);
}

function slide8(p) {
  const slide = p.slides.add();
  addHeader(slide, 8, SLIDES.length, SLIDES[7].kicker);
  addTitle(slide, SLIDES[7].title, SLIDES[7].subtitle);
  addCard(slide, 58, 236, 560, 182, "PRIMARY WEDGE", "A generated 3D scene with multiple active NPCs creates a differentiated rehearsal surface: the room exists, the stakeholders exist, and the user has to navigate both.", PRIMARY);
  addCard(slide, 666, 236, 560, 182, "WHY 3D SCENE GENERATION HELPS", "If scene setup is generated from a text prompt, spatial authoring becomes cheap enough to use often. That lowers the content bottleneck that usually blocks immersive products.", TEAL);
  addCard(slide, 58, 446, 360, 180, "ADJACENT WEDGE 1", "Buying committee readiness with room-level analytics: who was ignored, who blocked, who drove the deal.", CORAL);
  addCard(slide, 462, 446, 360, 180, "ADJACENT WEDGE 2", "Pair-shopping retail training: one excited buyer, one skeptical buyer, product in scene, conversion pressure.", GOLD);
  addCard(slide, 866, 446, 360, 180, "ADJACENT WEDGE 3", "Certification and readiness proofs: roleplay as an operational gate, not just practice content.", PRIMARY_DARK);
  addFooter(slide);
  addSpeakerNotes(slide, "This is the wedge slide. The combination matters more than either component alone.", SLIDES[7].sources);
}

function slide9(p) {
  const slide = p.slides.add();
  addHeader(slide, 9, SLIDES.length, SLIDES[8].kicker);
  addTitle(slide, SLIDES[8].title, SLIDES[8].subtitle);
  addCard(slide, 58, 232, 360, 330, "NECESSARY", "Scenario builder from a text prompt\nAssessment and feedback policy\nPlay mode interface\nTranscript / replay\nEnd-of-session score and coaching", PRIMARY);
  addCard(slide, 462, 232, 360, 330, "STRENGTHENS POSITIONING", "Camera view defines who you are speaking to\nNPC movement in the scene\nScene-aware prompts\nAttention and coverage analytics\nStakeholder-specific feedback", TEAL);
  addCard(slide, 866, 232, 360, 330, "EXPLORE", "Latency and realtime interaction\nOpenAI Realtime API or equivalent voice loop\nInterruptions and fast turn-taking\nWhether speech feels natural enough for group scenes\nHow much orchestration can run live", CORAL);
  addCard(slide, 58, 590, 1168, 70, "BOTTOM LINE", "If realtime breaks, the magic breaks. Spatial and multi-NPC both get more believable when latency is low enough to preserve conversational flow.", GOLD);
  addFooter(slide);
  addSpeakerNotes(slide, "Use this slide to separate table stakes from premium differentiators and to call out latency as a real product risk, not a nice-to-have.", SLIDES[8].sources);
}

function slide10(p) {
  const slide = p.slides.add();
  addHeader(slide, 10, SLIDES.length, SLIDES[9].kicker);
  addTitle(slide, SLIDES[9].title, SLIDES[9].subtitle);
  addCard(slide, 58, 246, 215, 280, "1. PROMPT", "User describes the scenario in text.\n\nExample: couple shopping for a TV, one price-sensitive and one gaming-focused.", PRIMARY);
  addCard(slide, 294, 246, 215, 280, "2. GENERATE", "System fills character descriptions, orchestrator rules, assessment policy, and scene definition.", TEAL);
  addCard(slide, 530, 246, 215, 280, "3. PLAY", "Play mode runs the scene with voice or voice+text interaction and basic room context.", CORAL);
  addCard(slide, 766, 246, 215, 280, "4. ASSESS", "End-of-session feedback scores readiness, missed stakeholders, tone, and next-step coaching.", GOLD);
  addCard(slide, 1002, 246, 224, 280, "5. ITERATE", "User retries with the same scene or a variation to improve consistency and certification readiness.", PRIMARY_DARK);
  addCard(slide, 58, 560, 1168, 100, "MVP SHAPE", "The first MVP does not need photorealism or complex world simulation. It needs fast authoring from prompt, believable roleplay flow, an orchestrated multi-party scene where relevant, and a clear assessment at the end.", TEAL);
  addFooter(slide);
  addSpeakerNotes(slide, "This is the product-shape slide. Keep it simple: prompt -> generate -> play -> assess -> retry.", SLIDES[9].sources);
}

async function ensureDirs() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(SCRATCH_DIR, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
}

async function saveBlob(blob, filePath) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  await fs.writeFile(filePath, bytes);
}

async function build() {
  await ensureDirs();
  const p = Presentation.create({ slideSize: { width: W, height: H } });
  slide1(p);
  slide2(p);
  slide3(p);
  slide4(p);
  slide5(p);
  slide6(p);
  slide7(p);
  slide8(p);
  slide9(p);
  slide10(p);

  for (let i = 0; i < p.slides.items.length; i += 1) {
    const preview = await p.export({ slide: p.slides.items[i], format: "png", scale: 1 });
    await saveBlob(preview, path.join(PREVIEW_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`));
  }

  const pptx = await PresentationFile.exportPptx(p);
  const outPath = path.join(OUT_DIR, "ai-roleplay-wedges-2026-05-19.pptx");
  await pptx.save(outPath);
  console.log(outPath);
}

await build();
