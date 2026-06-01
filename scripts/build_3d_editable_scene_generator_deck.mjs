import pptxgen from "/Users/peter.kopylov/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pptxgenjs/dist/pptxgen.cjs.js";

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "OpenAI Codex";
pptx.company = "OpenAI";
pptx.subject = "3D Editable Scene Generator business cases";
pptx.title = "3D Editable Scene Generator: Best Business Use Cases";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "en-US",
};

const COLORS = {
  navy: "102A43",
  teal: "0F766E",
  tealLight: "CCFBF1",
  orange: "EA580C",
  orangeLight: "FFEDD5",
  slate: "475569",
  light: "F8FAFC",
  border: "CBD5E1",
  green: "166534",
};

function addHeader(slide, title, kicker = "") {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.4,
    line: { color: COLORS.teal, transparency: 100 },
    fill: { color: COLORS.teal },
  });
  if (kicker) {
    slide.addText(kicker.toUpperCase(), {
      x: 0.6,
      y: 0.58,
      w: 3.4,
      h: 0.24,
      fontFace: "Aptos",
      fontSize: 10,
      color: COLORS.orange,
      bold: true,
      charSpace: 0.8,
    });
  }
  slide.addText(title, {
    x: 0.6,
    y: 0.83,
    w: 10.8,
    h: 0.48,
    fontFace: "Aptos Display",
    fontSize: 24,
    bold: true,
    color: COLORS.navy,
  });
}

function addFooter(slide, n) {
  slide.addText(String(n), {
    x: 12.55,
    y: 7.1,
    w: 0.35,
    h: 0.2,
    fontSize: 10,
    color: COLORS.slate,
    align: "right",
  });
}

function bulletRuns(items, fontSize = 18, color = COLORS.navy, indent = 16) {
  return items.map((t) => ({
    text: t,
    options: {
      bullet: { indent },
      hanging: 3,
      paraSpaceAfterPt: 9,
      breakLine: true,
      fontSize,
      color,
    },
  }));
}

function addBullets(slide, items, x, y, w, h, opts = {}) {
  slide.addText(bulletRuns(items, opts.fontSize || 18, opts.color || COLORS.navy, opts.indent || 16), {
    x, y, w, h,
    margin: opts.margin ?? 0,
    valign: "top",
    fontFace: "Aptos",
  });
}

function addSectionCard(slide, title, body, x, y, w, h, color = COLORS.teal) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    rectRadius: 0.08,
    line: { color: color, pt: 1.2 },
    fill: { color: "FFFFFF" },
  });
  slide.addText(title, {
    x: x + 0.18,
    y: y + 0.12,
    w: w - 0.3,
    h: 0.28,
    fontSize: 15,
    bold: true,
    color,
  });
  slide.addText(body, {
    x: x + 0.18,
    y: y + 0.45,
    w: w - 0.3,
    h: h - 0.55,
    fontSize: 12,
    color: COLORS.slate,
    valign: "top",
    margin: 0,
  });
}

// Slide 1
{
  const s = pptx.addSlide();
  s.background = { color: "F7FBFA" };
  s.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 7.5,
    line: { color: "F7FBFA", transparency: 100 },
    fill: { color: "F7FBFA" },
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.7,
    y: 0.8,
    w: 1.6,
    h: 0.42,
    rectRadius: 0.05,
    line: { color: COLORS.orange, transparency: 100 },
    fill: { color: COLORS.orangeLight },
  });
  s.addText("Strategy Draft", {
    x: 0.95,
    y: 0.93,
    w: 1.1,
    h: 0.15,
    fontSize: 11,
    color: COLORS.orange,
    bold: true,
    align: "center",
  });
  s.addText("3D Editable Scene Generator", {
    x: 0.7,
    y: 1.55,
    w: 7.2,
    h: 0.6,
    fontSize: 28,
    bold: true,
    color: COLORS.navy,
    fontFace: "Aptos Display",
  });
  s.addText("Best business use cases, competitive context, and what we should train for", {
    x: 0.7,
    y: 2.25,
    w: 6.5,
    h: 0.55,
    fontSize: 18,
    color: COLORS.slate,
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 7.8,
    y: 1.15,
    w: 4.5,
    h: 4.7,
    rectRadius: 0.08,
    line: { color: COLORS.border, pt: 1 },
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "D1D5DB", blur: 1, angle: 45, distance: 1, opacity: 0.18 },
  });
  s.addText("Core thesis", {
    x: 8.15,
    y: 1.45,
    w: 1.8,
    h: 0.25,
    fontSize: 16,
    bold: true,
    color: COLORS.teal,
  });
  addBullets(s, [
    "Value is in scene reconstruction and editable spatial scaffolding",
    "Best use cases prioritize layout correctness over mesh beauty",
    "Winning products combine generation, editability, and workflow fit",
  ], 8.1, 1.9, 3.7, 2.2, { fontSize: 15, color: COLORS.navy });
  addSectionCard(s, "What matters most", "Object presence\nRelative positioning\nScale coherence\nPrimitive usefulness\nEditability", 8.15, 4.15, 3.7, 1.35, COLORS.orange);
  s.addText("May 20, 2026", {
    x: 0.7,
    y: 6.75,
    w: 2.3,
    h: 0.2,
    fontSize: 11,
    color: COLORS.slate,
  });
  addFooter(s, 1);
}

// Slide 2
{
  const s = pptx.addSlide();
  addHeader(s, "What Unites The Best Use Cases", "Framing");
  addSectionCard(s, "Text prompt → scene", "Use when the setup is imagined, planned, or not yet built.", 0.7, 1.5, 2.75, 1.5, COLORS.teal);
  addSectionCard(s, "Image → scene", "Use when the physical setup already exists and needs to be reconstructed, documented, or edited.", 3.65, 1.5, 3.05, 1.5, COLORS.orange);
  addSectionCard(s, "Shared value", "Create a usable spatial scaffold so humans can plan, train, communicate, or reconfigure.", 6.9, 1.5, 3.1, 1.5, COLORS.green);
  addSectionCard(s, "Not the goal", "Perfect hero-quality meshes are less important than layout and editability.", 10.2, 1.5, 2.4, 1.5, COLORS.slate);
  s.addText("The strongest use cases are united by four needs:", {
    x: 0.7,
    y: 3.45,
    w: 5.5,
    h: 0.25,
    fontSize: 18,
    color: COLORS.navy,
    bold: true,
  });
  addBullets(s, [
    "Scene layout matters more than final mesh beauty",
    "Users need editable outputs, not a static render",
    "The result must help people act: plan, train, communicate, or reconfigure",
    "Primitives are often enough if object presence and positioning are correct",
  ], 0.8, 3.85, 6.2, 2.3, { fontSize: 17 });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 7.6, y: 3.7, w: 4.7, h: 2.2,
    rectRadius: 0.06,
    line: { color: COLORS.teal, pt: 1.4 },
    fill: { color: COLORS.tealLight },
  });
  s.addText("Core value", {
    x: 8,
    y: 4.1,
    w: 1.4,
    h: 0.2,
    fontSize: 17,
    color: COLORS.teal,
    bold: true,
  });
  s.addText("Recreate the setup so humans can work with it.", {
    x: 8,
    y: 4.45,
    w: 3.6,
    h: 0.6,
    fontSize: 24,
    bold: true,
    color: COLORS.navy,
    fontFace: "Aptos Display",
  });
  addFooter(s, 2);
}

// Slide 3
{
  const s = pptx.addSlide();
  addHeader(s, "Best Business Use Cases For Text", "Prompt-first");
  addSectionCard(s, "Trade show booth / showroom planning", "Create booth concepts before anything is built. Test furniture, signage, and traffic flow.", 0.7, 1.55, 2.35, 1.45, COLORS.teal);
  addSectionCard(s, "Retail display and merchandising concepts", "Generate shelf zones, promo islands, and store corners from a brief. Explore planogram directions quickly.", 3.25, 1.55, 2.45, 1.45, COLORS.orange);
  addSectionCard(s, "Office / reception / workspace planning", "Generate room layouts from a functional description for stakeholder review.", 5.95, 1.55, 2.25, 1.45, COLORS.green);
  addSectionCard(s, "Training and simulation environments", "Create cashier, reception, classroom, service desk, or emergency scenarios from text.", 8.45, 1.55, 2.25, 1.45, COLORS.teal);
  addSectionCard(s, "Previs / virtual production", "Turn scripts or shot descriptions into editable 3D setups for camera planning and scene blocking.", 10.95, 1.55, 1.7, 1.45, COLORS.orange);
  s.addText("Text-to-scene is strongest when the target setup does not exist yet.", {
    x: 0.7, y: 3.4, w: 6.5, h: 0.25, fontSize: 20, bold: true, color: COLORS.navy,
  });
  addBullets(s, [
    "Planning a new space",
    "Exploring alternatives",
    "Converting operational intent into a visual layout",
    "Building training or simulation environments from description",
  ], 0.8, 3.85, 5.5, 2.0, { fontSize: 17 });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 7.1, y: 3.7, w: 5.2, h: 2.0,
    rectRadius: 0.05,
    line: { color: COLORS.border, pt: 1 },
    fill: { color: "FFFFFF" },
  });
  s.addText("Text is best for", {
    x: 7.45, y: 4.05, w: 1.5, h: 0.18, fontSize: 16, bold: true, color: COLORS.teal,
  });
  addBullets(s, [
    "first-draft blockouts",
    "scenario design",
    "workflow explanation",
    "internal alignment before execution",
  ], 7.4, 4.35, 4.25, 1.2, { fontSize: 16 });
  addFooter(s, 3);
}

// Slide 4
{
  const s = pptx.addSlide();
  addHeader(s, "Best Business Use Cases For Image", "Image-first");
  s.addText("Image-to-scene is strongest when the physical setup already exists.", {
    x: 0.7, y: 1.35, w: 6.4, h: 0.25, fontSize: 20, bold: true, color: COLORS.navy,
  });
  addBullets(s, [
    "Current-state capture",
    "Layout learning",
    "Before/after redesign",
    "Operational memory and retrieval",
  ], 0.8, 1.78, 4.5, 1.5, { fontSize: 17 });
  addSectionCard(s, "1. Interior / room reconstruction", "Recreate a room from a photo. Test furniture, layout, and redesign ideas.", 0.7, 3.15, 2.3, 1.35, COLORS.teal);
  addSectionCard(s, "2. Retail shelf / aisle reconstruction", "Rebuild shelf layouts from photos. Check facings, placement, and promo structure.", 3.2, 3.15, 2.35, 1.35, COLORS.orange);
  addSectionCard(s, "3. Equipment compartment and vehicle layout training", "Reconstruct fire trucks, ambulances, field-service vans, or cabinets.", 5.75, 3.15, 2.55, 1.35, COLORS.green);
  addSectionCard(s, "4. Operational workstations", "Packing stations, reception desks, service counters, workshop bays.", 8.55, 3.15, 1.9, 1.35, COLORS.teal);
  addSectionCard(s, "5. Showroom / booth / display reconstruction", "Capture a real setup from photos and reuse it for redesign, review, or training.", 10.7, 3.15, 1.9, 1.35, COLORS.orange);
  s.addShape(pptx.ShapeType.roundRect, {
    x: 6.0, y: 1.55, w: 6.2, h: 1.15,
    rectRadius: 0.05,
    line: { color: COLORS.green, pt: 1.2 },
    fill: { color: "F0FDF4" },
  });
  s.addText("Strongest pattern: real-world setup → editable digital twin lite", {
    x: 6.35, y: 1.92, w: 5.55, h: 0.32, fontSize: 20, bold: true, color: COLORS.green,
    align: "center",
  });
  addFooter(s, 4);
}

// Slide 5
{
  const s = pptx.addSlide();
  addHeader(s, "Real Use Case: Fire Brigade In Oberhaching", "Proof point");
  s.addText("A real example comes from a volunteer fire brigade in Oberhaching.", {
    x: 0.7, y: 1.3, w: 6.2, h: 0.25, fontSize: 20, bold: true, color: COLORS.navy,
  });
  addBullets(s, [
    "Firefighters need to repeatedly learn where each item is stored in specific fire trucks",
    "There is no universal standard layout across brigades",
    "Different brigades can have different trucks and different compartment setups",
    "Sergey currently uses a manual Miro board with photos, lists, and labels",
  ], 0.8, 1.75, 5.2, 3.2, { fontSize: 17 });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.9, y: 5.3, w: 4.8, h: 1.1,
    rectRadius: 0.04,
    line: { color: COLORS.orange, pt: 1.2 },
    fill: { color: COLORS.orangeLight },
  });
  s.addText("The value is not visual polish. The value is spatial memory, retrieval speed, and vehicle-specific training.", {
    x: 1.15, y: 5.58, w: 4.3, h: 0.55, fontSize: 16, bold: true, color: COLORS.orange,
    align: "center", valign: "mid",
  });
  s.addImage({
    path: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-20-fire-brigade-vehicle-layout-training-use-case-reference.png",
    x: 6.2, y: 1.2, w: 6.35, h: 4.85,
  });
  addFooter(s, 5);
}

// Slide 6
{
  const s = pptx.addSlide();
  addHeader(s, "Why This Use Case Matters", "Generalization");
  addSectionCard(s, "Why it is strong", "Real user solving the problem manually.\nLayout accuracy matters more than visual fidelity.\nPrimitive scene reconstruction is already useful.", 0.7, 1.45, 3.45, 2.0, COLORS.teal);
  addSectionCard(s, "What it can support", "Training new members.\nRefresh training.\nVehicle-specific memory drills.\nCross-crew familiarization.\nInteractive retrieval simulations.", 4.45, 1.45, 3.35, 2.0, COLORS.orange);
  addSectionCard(s, "Why it extends beyond fire brigades", "Same pattern appears in ambulances, service vans, industrial cabinets, workshop stations, and operational storage environments.", 8.1, 1.45, 4.55, 2.0, COLORS.green);
  s.addText("This is a broader category opportunity:", {
    x: 0.7, y: 4.05, w: 4.2, h: 0.2, fontSize: 18, bold: true, color: COLORS.navy,
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.9, y: 4.45, w: 5.2, h: 1.2,
    rectRadius: 0.05,
    line: { color: COLORS.teal, pt: 1.2 },
    fill: { color: COLORS.tealLight },
  });
  s.addText("Operational equipment layout reconstruction\nWorkspace inventory and retrieval training", {
    x: 1.2, y: 4.82, w: 4.6, h: 0.5, fontSize: 20, bold: true, color: COLORS.teal,
    align: "center",
  });
  addFooter(s, 6);
}

// Slide 7
{
  const s = pptx.addSlide();
  addHeader(s, "Competitive Landscape", "Three layers");
  addSectionCard(s, "Asset-first tools", "Meshy\nTripo\nTrellis3D\n\nStrength: object generation\nWeakness: weaker full-scene ownership", 0.75, 1.55, 3.0, 2.35, COLORS.orange);
  addSectionCard(s, "World / editable scene platforms", "Marble\nSpAItial\n\nStrength: scene generation, editing, expansion, composition", 4.1, 1.55, 3.0, 2.35, COLORS.teal);
  addSectionCard(s, "Workflow-first editable scene systems", "PentoPix\n\nStrength: practical production workflows, camera/layout control, editable scene assembly", 7.45, 1.55, 3.0, 2.35, COLORS.green);
  addSectionCard(s, "Open technical pressure", "WorldGen\nTencent HunyuanWorld\n\nThese matter more as technical/open signals than as commercial adoption leaders.", 10.8, 1.55, 1.8, 2.35, COLORS.slate);
  s.addText("What competitors suggest", {
    x: 0.7, y: 4.45, w: 3.5, h: 0.2, fontSize: 18, bold: true, color: COLORS.navy,
  });
  addBullets(s, [
    "The market is moving from beautiful 3D output toward editable, explorable, exportable scene structure",
    "The winner may not be the best pure generator",
    "The winner may be the product that best combines layout reconstruction, editability, workflow fit, and export",
  ], 0.8, 4.85, 11.0, 1.8, { fontSize: 17 });
  addFooter(s, 7);
}

// Slide 8
{
  const s = pptx.addSlide();
  addHeader(s, "Commercial And Social Signals Are Still Weak", "Market maturity");
  s.addText("The category currently has stronger technical momentum than mature market validation.", {
    x: 0.7, y: 1.28, w: 8.5, h: 0.25, fontSize: 20, bold: true, color: COLORS.navy,
  });
  addBullets(s, [
    "Weak or no G2 / Trustpilot footprint",
    "Limited public customer-count disclosure",
    "Few strong case studies with repeatable production metrics",
    "Thin evidence of broad enterprise deployment",
    "Modest or unclear official social traction for many players",
  ], 0.8, 1.78, 5.6, 2.4, { fontSize: 17 });
  addSectionCard(s, "Marble", "Strongest product and funding signals, but still limited classic SaaS review proof.", 6.9, 1.7, 2.45, 1.35, COLORS.teal);
  addSectionCard(s, "SpAItial", "Strong frontier positioning, but social and commercial proof are still early.", 9.55, 1.7, 2.45, 1.35, COLORS.orange);
  addSectionCard(s, "PentoPix", "Practical workflow positioning, but review-platform and large-scale customer proof are still thin.", 6.9, 3.3, 2.45, 1.35, COLORS.green);
  addSectionCard(s, "WorldGen / HunyuanWorld", "Matter more as technical and open-model signals than as mature commercial adoption signals.", 9.55, 3.3, 2.45, 1.35, COLORS.slate);
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.9, y: 5.0, w: 11.7, h: 1.05,
    rectRadius: 0.05,
    line: { color: COLORS.orange, pt: 1.2 },
    fill: { color: COLORS.orangeLight },
  });
  s.addText("Strategic takeaway: room remains for a player that combines real workflow usefulness with clearer customer proof.", {
    x: 1.15, y: 5.34, w: 11.2, h: 0.35, fontSize: 19, bold: true, color: COLORS.orange,
    align: "center",
  });
  addFooter(s, 8);
}

// Slide 9
{
  const s = pptx.addSlide();
  addHeader(s, "What We Should Train Our Model For", "Training priorities");
  addBullets(s, [
    "Object presence",
    "Relative positioning",
    "Scale coherence",
    "Orientation",
    "Primitive usefulness",
    "Editability",
    "Scene completeness",
  ], 0.9, 1.75, 4.1, 3.0, { fontSize: 19 });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 5.4, y: 1.6, w: 6.2, h: 2.0,
    rectRadius: 0.06,
    line: { color: COLORS.teal, pt: 1.3 },
    fill: { color: COLORS.tealLight },
  });
  s.addText("We should not train for best-looking final meshes or parity with dedicated text-to-3D object systems.", {
    x: 5.8, y: 2.05, w: 5.4, h: 0.65, fontSize: 20, bold: true, color: COLORS.teal,
    align: "center", valign: "mid",
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 5.4, y: 4.05, w: 6.2, h: 1.55,
    rectRadius: 0.06,
    line: { color: COLORS.orange, pt: 1.3 },
    fill: { color: COLORS.orangeLight },
  });
  s.addText("Ugly but structurally right should win over pretty but spatially wrong.", {
    x: 5.85, y: 4.5, w: 5.3, h: 0.48, fontSize: 24, bold: true, color: COLORS.orange,
    align: "center",
  });
  addFooter(s, 9);
}

// Slide 10
{
  const s = pptx.addSlide();
  addHeader(s, "Priority Training Targets And Evaluation", "Execution");
  addSectionCard(s, "Highest-priority scene families", "Retail shelf / aisle layouts\nRoom and reception layouts\nEquipment-in-compartments scenes\nWorkstation and counter setups\nBooth / showroom scenes", 0.7, 1.55, 3.8, 2.3, COLORS.teal);
  addSectionCard(s, "What to emphasize in training", "Bounded spaces\nRepeated objects\nCompartments and shelves\nObject-to-container relations\nLeft/right and front/back consistency\nEditable scene structure", 4.8, 1.55, 3.8, 2.3, COLORS.orange);
  addSectionCard(s, "Suggested evaluation weighting", "Relative positioning 35%\nObject presence 20%\nScale coherence 15%\nPrimitive usefulness 20%\nEditability 10%", 8.9, 1.55, 3.7, 2.3, COLORS.green);
  s.addText("Main takeaway", {
    x: 0.7, y: 4.45, w: 2.8, h: 0.2, fontSize: 18, bold: true, color: COLORS.navy,
  });
  s.addShape(pptx.ShapeType.roundRect, {
    x: 0.9, y: 4.85, w: 11.7, h: 1.1,
    rectRadius: 0.05,
    line: { color: COLORS.teal, pt: 1.4 },
    fill: { color: "FFFFFF" },
  });
  s.addText("The strongest near-term value is scene reconstruction and editable spatial scaffolding for real business workflows.", {
    x: 1.2, y: 5.2, w: 11.1, h: 0.35, fontSize: 22, bold: true, color: COLORS.navy,
    align: "center",
  });
  addFooter(s, 10);
}

await pptx.writeFile({
  fileName: "/Users/peter.kopylov/Documents/BizDev/research/2026-05-20-3d-editable-scene-generator-business-cases.pptx",
});
