---
name: Julius Gutierrez Portfolio
description: A dark, navy portfolio that reads as senior engineering: precise, restrained, structural.
colors:
  signal-blue: "#3b82f6"
  signal-blue-light: "#60a5fa"
  signal-blue-deep: "#2563eb"
  sky-cyan: "#38bdf8"
  ink-void: "#070a11"
  ink-base: "#0a0e17"
  surface-raised: "#10151f"
  surface-blueprint: "#1a2744"
  text-primary: "#f1f5f9"
  text-body: "#cbd5e1"
  text-muted: "#94a3b8"
  divider: "#94a3b824"
typography:
  display:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "8px"
  md: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  button-ghost:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "24px"
  chip:
    backgroundColor: "#3b82f61f"
    textColor: "#bfdbfe"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Julius Gutierrez Portfolio

## 1. Overview

**Creative North Star: "The Architect's Blueprint"**

This is a dark drafting-table surface where structure is made visible. The
palette is deep navy bordering on black, and the single blue accent behaves
like linework on a blueprint: precise, deliberate, never decorative. The system
exists to make a time-poor decision-maker conclude, in seconds, that the person
behind it ships hard systems and does not need to shout about it.

Density is low. Generous negative space, calm vertical rhythm, and a flat tonal
hierarchy do the work that gradients and glow would do in a lesser portfolio.
Depth comes from stepped navy surfaces and hairline borders, not from drop
shadows. Type carries the hierarchy: a tight, heavy display weight against a
quiet muted body. The aesthetic philosophy is restraint as evidence of
seniority; the confidence is in what is left out.

This system explicitly rejects the interchangeable dark-blue-gradient portfolio
that every bootcamp grad ships. It rejects the cluttered resume dump, walls of
text with no hierarchy. It rejects trend for trend's sake: glassmorphism,
neon-on-black, motion with no purpose. If a visitor could mistake this for a
template, the system has failed.

**Key Characteristics:**
- Deep navy near-black canvas, flat by default
- A single blue accent, used sparingly as a signal
- Archivo throughout, hierarchy via weight and scale, not color
- Tonal layering for depth; shadows only on hover
- Wide negative space, calm rhythm, low density

## 2. Colors

A near-monochrome navy field with one blue accent. The restraint is the point.

### Primary
- **Signal Blue** (#3b82f6): The one accent. Reserved for the primary CTA, links, focus rings, and hover borders. It should touch a small fraction of any screen; its scarcity is what makes it read as intentional.
- **Signal Blue Light** (#60a5fa): Eyebrow labels, icon glyphs, the lighter stop of the rare accent gradient. A softer voice of the same signal.
- **Signal Blue Deep** (#2563eb): The pressed and hover state of the primary button.

### Secondary
- **Sky Cyan** (#38bdf8): A cooler companion to Signal Blue, used only as the second stop in the eyebrow tick and accent gradients. Never a standalone fill.

### Neutral
- **Ink Void** (#070a11): The deepest background tone; the far end of the body gradient.
- **Ink Base** (#0a0e17): The default page background.
- **Surface Raised** (#10151f): Cards and the navbar-scrolled state. One tonal step above the page; this step IS the elevation.
- **Surface Blueprint** (#1a2744): The project image placeholder field, carrying a faint blue dot-grid.
- **Text Primary** (#f1f5f9): Headings and high-emphasis text.
- **Text Body** (#cbd5e1): Default paragraph text.
- **Text Muted** (#94a3b8): Secondary text, captions, inactive nav links.
- **Divider** (#94a3b8 at 14% alpha): Hairline borders on cards, the navbar underline, separators.

### Named Rules
**The Signal Rule.** Signal Blue is used on no more than 10% of any given screen. It marks exactly one primary action, plus links, focus, and hover. If blue is filling space rather than pointing at something, remove it.

**The Tonal Depth Rule.** Surfaces separate by lightness step (Ink Base to Surface Raised), never by a colored stripe or a heavy shadow at rest.

## 3. Typography

**Display Font:** Archivo (with Helvetica, Arial, sans-serif fallback)
**Body Font:** Archivo (same stack)

**Character:** One family, full range. Archivo is an engineered grotesque with commanding heavy weights; pushed to weight 800 with negative tracking it gives headings real structural presence, and dropped to a calm 400 it stays quiet and legible for body. No serif, no decorative pairing; the discipline is the personality.

### Hierarchy
- **Display** (800, clamp 2.6rem to 4rem, line-height 1.1, -0.03em): The hero headline only. One per page.
- **Headline** (700, clamp 1.75rem to 2.25rem, line-height 1.2, -0.02em): Section titles.
- **Title** (700, 1.25rem, line-height 1.3): Card titles, service and project names.
- **Body** (400, 1rem, line-height 1.6): Paragraph text. Cap measure at 65 to 75ch; the hero subtext is held to a narrow column on purpose.
- **Label** (700, 0.75rem, line-height 1.4, 0.14em tracking, uppercase): Section eyebrows and the tech-stack strip.

### Named Rules
**The Weight-Not-Color Rule.** Emphasis comes from weight and scale contrast (at least a 1.25 ratio between steps), never from coloring a word. Headings stay in Text Primary.

## 4. Elevation

This system is flat by default. Depth is communicated through tonal layering: the page sits at Ink Base, raised surfaces step up to Surface Raised, and a hairline Divider border traces the edge. There is no resting drop shadow. A shadow appears only as a response to interaction, never as ambient decoration.

### Shadow Vocabulary
- **Hover Lift** (`box-shadow: 0 8px 32px rgba(59,130,246,0.18)`): A soft, blue-tinted cast that appears only when a card is hovered, paired with a 4px upward translate. It signals interactivity; it is not present at rest.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat when idle. If a card has a drop shadow before the cursor reaches it, the shadow is wrong. Depth at rest is a tonal step plus a 1px border, nothing more.

## 5. Components

### Buttons
- **Shape:** Lightly rounded corners (8px radius).
- **Primary:** Signal Blue fill, white text, 10px by 22px padding, weight 700, no text-transform. One primary action per view.
- **Hover / Focus:** Background shifts to Signal Blue Deep (#2563eb). Focus shows a visible ring. Transitions ease out, around 200ms.
- **Ghost:** Surface Raised tint over the dark canvas (white at ~8% alpha), Text Primary label, 1px Divider border. Used for the secondary action such as Download CV. Hover lifts the tint to ~14%.

### Chips
- **Style:** Signal Blue at 12% alpha background (#3b82f61f), text in a pale blue (#bfdbfe), no border, 8px radius, weight 600.
- **State:** Static metadata tags only (project tech tags). Not interactive filters.

### Cards / Containers
- **Corner Style:** Medium rounding (16px radius).
- **Background:** Surface Raised (#10151f).
- **Shadow Strategy:** None at rest. Hover Lift only (see Elevation).
- **Border:** 1px Divider hairline; on hover the border shifts to Signal Blue.
- **Internal Padding:** 24px (the lg step).

### Navigation
- **Style:** Fixed top bar, transparent over the hero, transitioning to a translucent Ink Base (85% alpha) with a 12px backdrop blur and a Divider underline once scrolled past 24px.
- **Typography:** Nav links in Text Muted, weight 700; hover lifts them to Text Primary.
- **Mobile:** Below the md breakpoint, links collapse into a right-anchored Drawer (260px) over Surface Raised, opened by a hamburger icon.

### Section Eyebrow (signature)
A small label pattern: a 3px-wide, 16px-tall vertical blue tick paired with an uppercase 0.14em-tracked label in Signal Blue Light. It opens every content section and is the system's one consistent flourish.

## 6. Do's and Don'ts

### Do:
- **Do** keep the page flat at rest; convey depth with the Ink Base to Surface Raised tonal step and a 1px Divider border.
- **Do** confine Signal Blue to roughly 10% of any screen: one primary CTA, links, focus, hover.
- **Do** drive hierarchy with Archivo's weight and scale contrast; keep heading text in Text Primary.
- **Do** reserve the Hover Lift shadow for hover and focus states only.
- **Do** hold body copy to a 65 to 75ch measure and give sections wide negative space.

### Don't:
- **Don't** ship the generic dev-template look: the interchangeable dark-blue gradient with glowing cards. If it reads as a template, it has failed.
- **Don't** dump the resume: no walls of text with every job detail exposed at once and no hierarchy.
- **Don't** chase trend for its own sake: no glassmorphism, no neon-on-black, no motion without purpose.
- **Don't** color a word for emphasis. Gradient text (`background-clip: text` over a gradient) is prohibited; the existing Highlight and project-initial treatments should migrate to weight-based emphasis.
- **Don't** use a colored side-stripe (`border-left` greater than 1px) on cards or callouts. Use a full hairline border or a tonal step.
- **Don't** apply a resting drop shadow to any surface; flat-by-default is the rule.
