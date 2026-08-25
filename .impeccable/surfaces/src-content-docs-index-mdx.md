---
version: 1
slug: "src-content-docs-index-mdx"
primary_target: "src/content/docs/index.mdx"
related_targets: ["src/styles/global.css", "src/components/Header.astro"]
---

# Home surface brief

## Scope and mode

- Scope: `/blog/` home, global navigation, article archive entry, and the shared article shell.
- Visitor mode: Read with a Persuade-quality first impression.

## Audience and job

- Traditional Chinese technical readers discover the archive and enter an article.
- Potential collaborators can recognize a considered personal publishing identity through the work itself.
- Primary action: read the latest article or choose an archive entry.

## Chosen direction

- Approved comp: `.impeccable/mocks/decision/canon.webp`.
- FORM seed key: `691434db`; the user selected the category-standard canon from that direction round.
- Quality bar: the approved canon comp itself is the governing quality card; no separate catalog challenger was selected.
- A light, spacious technical publication with Lithué as the defining masthead and heading voice.
- Memorable moment: the oversized VDUSTR statement paired with a blue botanical ink illustration, followed immediately by real article entries.

## Composition contract

| Ingredient     | Comp commitment                                                                              | Implementation medium                                       |
| -------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Header         | Full-width white bar, hairline divider, brand left, restrained navigation right              | Semantic HTML and CSS through Starlight overrides           |
| Brand          | Lithué 日花 mark beside VDUSTR                                                               | Authored SVG mark plus semantic text                        |
| Hero           | Two-column split, large VDUSTR statement left, botanical image right                         | Semantic HTML/CSS plus generated transparent WebP           |
| Primary action | Latest article entry appears within the first viewport and receives the only cobalt emphasis | Semantic link with authored focus, hover, and active states |
| Article index  | Four-column desktop row with real article title, topic, summary, date, and arrow             | Semantic article list; two columns on tablet, one on mobile |
| Article shell  | 65–75ch reading column, metadata before body, optional table of contents                     | Starlight content layout and targeted overrides             |
| Search         | Compact header control; full Pagefind search behavior                                        | Starlight Search component, restyled                        |

## Visual record

- Page ground: near-white `#fdfdfc`.
- Text: ink `#14161c`.
- Accent: cobalt `#1545c5`.
- Muted text: slate `#5c6270`.
- Rules: cool gray `#e5e7eb`, one pixel.
- Corners: restrained 12px only on article previews and controls.
- Elevation: none on content; a soft downward shadow is reserved for the opened mobile menu.
- Display type: Lithué Regular, maximum 6rem, tracking no tighter than -0.03em.
- Body type: system Traditional Chinese sans, 1rem–1.125rem with 1.85 line height.

## Constraints

- The local font is a development source only. The production `@font-face` must use a stable `/blog/fonts/lithue.woff2` path so justfont can replace or serve it later.
- Keep all article body copy unchanged except compatibility fixes.
- Preserve existing dated routes and external links.
- Do not fabricate audience metrics, clients, testimonials, or project outcomes.
