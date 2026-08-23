---
name: VDUSTR
description: A light, spacious technical publication for durable notes, experiments, and code.
colors:
  cobalt: "#1545c5"
  cobalt-soft: "#eaf0ff"
  cobalt-deep: "#0b286f"
  paper: "#fdfdfc"
  surface: "#ffffff"
  ink: "#14161c"
  ink-soft: "#454a56"
  slate: "#5c6270"
  slate-light: "#686e7b"
  rule: "#e5e7eb"
  rule-strong: "#d9dce2"
typography:
  display:
    fontFamily: "Lithue, Noto Serif TC, serif"
    fontSize: "clamp(4.5rem, 9vw, 8.25rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "0.08em"
  headline:
    fontFamily: "Lithue, Noto Serif TC, serif"
    fontSize: "clamp(2.2rem, 4vw, 3.5rem)"
    fontWeight: 400
    letterSpacing: "0.08em"
  title:
    fontFamily: "Lithue, Noto Serif TC, serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Noto Sans TC, PingFang TC, system-ui, sans-serif"
    fontSize: "1.03rem"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Noto Sans TC, PingFang TC, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  mono:
    fontFamily: "SFMono-Regular, Consolas, monospace"
rounded:
  focus: "4px"
  card: "12px"
  pill: "999px"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2.2rem"
  xl: "4rem"
components:
  latest-article-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.85rem 0 0.75rem"
  article-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  search-control:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
---

# Design System: VDUSTR

## Overview

**Creative North Star: "The Technical Herbarium"**

VDUSTR is a light, spacious technical publication where precise engineering notes sit inside an authored editorial setting. Lithué gives the masthead and headings their distinctive Traditional Chinese character; restrained cobalt botanical ink adds a memorable human mark without competing with the archive.

The system feels polished and publication-led while keeping familiar technical-blog navigation and reading patterns. Content carries authority through typography, whitespace, rules, and real article entries rather than promotional claims.

**Key Characteristics:**

- Near-white paper, dark ink, and one restrained cobalt accent.
- Lithué display type paired with a highly readable Traditional Chinese system sans.
- Hairline structure, generous whitespace, and flat content surfaces.
- Botanical ink artwork is the signature image language; article text remains the proof.

## Colors

The palette is deliberately narrow: paper and ink establish editorial calm, cool grays organize information, and cobalt identifies actions and active state.

### Primary

- **Botanical Cobalt** (`cobalt`): Use for the latest-article cue, links that require emphasis, active navigation, tags, selection, and focus indicators.
- **Cobalt Wash** (`cobalt-soft`): Use only as a low-emphasis accent surface.
- **Deep Cobalt** (`cobalt-deep`): Reserve for high-contrast accent text where the standard cobalt does not meet the required contrast.

### Neutral

- **Publication Paper** (`paper`): Global page ground and navigation backdrop.
- **Clean Surface** (`surface`): Cards and controls that need separation from the page.
- **Editorial Ink** (`ink`): Primary text, wordmark, and headings.
- **Soft Ink** (`ink-soft`): Supporting body copy.
- **Slate Notes** (`slate`, `slate-light`): Descriptions, dates, and metadata.
- **Cool Rules** (`rule`, `rule-strong`): One-pixel dividers and control boundaries.

**The One Cobalt Rule.** Cobalt is the only saturated interface color. Its scarcity makes the primary path and focus state unambiguous.

## Typography

**Display Font:** Lithué (with Noto Serif TC and generic serif fallback)

**Body Font:** Noto Sans TC (with PingFang TC and system sans fallback)

**Code Font:** SFMono-Regular (with Consolas and monospace fallback)

**Character:** Lithué provides an authored, literary voice for the identity and hierarchy. The sans-serif body stays neutral and spacious so long-form Traditional Chinese and code remain comfortable to read.

### Hierarchy

- **Display** (`display`): Homepage masthead only; keep its deliberate wide tracking and compact line box.
- **Headline** (`headline`): Homepage section headings and other major editorial divisions.
- **Title** (`title`): Article-card titles and compact content headings.
- **Body** (`body`): Long-form reading; prose paragraphs and lists stay within 72 characters.
- **Label** (`label`): Article indices, dates, metadata, and short action cues; use tabular numerals for dates and indices.

**The Lithué Voice Rule.** Use Lithué for the wordmark, hero statement, navigation, and headings. Do not use it for long paragraphs, metadata, or code.

**The Stable Font Path Rule.** Local Lithué names are development fallbacks only. The later justfont integration must serve or replace `/blog/fonts/lithue.woff2` through a stable production `@font-face` source while preserving the `Lithue` family name and `font-display: swap`.

## Layout

The homepage uses a centered fluid canvas capped at 92rem, with responsive side padding from 1.25rem to 5.5rem. The hero is an asymmetric two-column split: editorial statement left and transparent botanical illustration right. Article cards form four columns on wide screens, two below 72rem, and one below 50rem. The archive becomes a compact chronological list.

The shared article shell uses a 65–75ch reading measure; the implementation caps core prose at 72ch. Metadata precedes the body, and optional navigation or table-of-contents elements must remain subordinate to the reading column.

Below 72rem, hide the full navigation and use the Starlight mobile menu with a visible circular trigger. Below 50rem, stack the hero, let the illustration sit behind the lower hero edge without covering text, stack section headings, and collapse archive dates onto their own row.

**The First-Viewport Rule.** The latest real article must remain reachable in the first viewport; decorative art may yield space before that action does.

## Elevation & Depth

Content is flat by default. One-pixel cool-gray rules, white-on-paper tonal separation, and spacing establish structure. Article cards may gain a restrained cobalt-tinted ambient shadow only on hover; the opened mobile menu may use a soft downward shadow. No persistent shadow belongs on content at rest.

### Shadow Vocabulary

- **Card Hover** (`0 18px 42px rgba(21, 69, 197, 0.09)`): A temporary response paired with slight upward movement.
- **Mobile Menu:** A soft downward shadow reserved for the open overlay; keep it structural and visually quiet.

**The Flat-at-Rest Rule.** Surfaces at rest use rules and tonal contrast. Elevation appears only to communicate interaction or overlay state.

## Shapes

The form language is mostly rectilinear and editorial. Article previews and framed embedded content use gently curved card corners (`card`). Search uses a full pill (`pill`), while focus outlines may use the small focus radius (`focus`). Hairline borders stay one pixel and cool gray; avoid decorative clipping or mixed corner systems.

## Components

### Latest Article Link

- **Character:** The only explicitly emphasized homepage action.
- **Shape:** Text-led and borderless, with a three-pixel cobalt underline rather than a filled button.
- **State:** The arrow shifts diagonally on hover; keyboard focus uses the global three-pixel cobalt outline with four-pixel offset.

### Article Cards

- **Shape:** Restrained 12px corners and a one-pixel cool-gray border.
- **Content:** Index and up to two tags precede the Lithué title; summary, date, and arrow follow in a consistent vertical rhythm.
- **State:** Hover raises the card slightly, turns the border cobalt, and introduces only the documented ambient shadow.

### Archive Rows

- **Character:** Quiet, chronological, and scan-first.
- **Layout:** Date, title, and arrow align in a three-column row on larger screens; the date spans its own row on mobile.
- **State:** Hover changes only the title to cobalt.

### Navigation and Search

- **Navigation:** Lithué labels sit in a full-width paper header with a hairline divider. Hover and focus reveal a two-pixel cobalt underline.
- **Search:** Compact white pill with a one-pixel strong rule; preserve full Pagefind behavior and semantic labeling.
- **Mobile:** Hide desktop links and expose the Starlight menu trigger. Do not reproduce navigation as non-semantic artwork.

### Article Shell

- **Typography:** Spacious sans-serif prose, Lithué section headings, and readable code highlighting on the light theme.
- **Metadata:** Date and tags appear before the body using slate and cobalt.
- **Embeds:** Full width, white, one-pixel bordered, and card-rounded; retain a useful minimum height.

## Do's and Don'ts

### Do:

- **Do** preserve the approved light publication composition and keep real article entries central.
- **Do** use semantic HTML for all text, navigation, controls, cards, and focus states.
- **Do** preserve keyboard navigation, visible focus, readable contrast, reduced motion, and first-class Traditional Chinese typography.
- **Do** use the botanical artwork as a transparent decorative asset and retain its bloom, branch direction, loose petals, and pale wash when cropping.
- **Do** preserve article routes, article copy, search behavior, metadata, and code readability.

### Don't:

- **Don't** introduce a dark theme into this light-only identity.
- **Don't** add saturated colors beyond cobalt or turn neutral surfaces into decorative gradients.
- **Don't** use persistent content shadows, excessive rounding, or filled marketing buttons.
- **Don't** rasterize semantic content or interactive controls into brand imagery.
- **Don't** invent metrics, testimonials, clients, or outcomes; the archive is the proof.
