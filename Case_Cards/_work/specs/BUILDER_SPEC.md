# BUILDER SPEC — turn the card files into Word (.docx) and PDF

## Goal
A script `/home/claude/cards/build/build_cards.js` (Node + docx-js, which is installed globally: `require('docx')`
works) that converts card files written in the small Markdown dialect of CARD_SPEC.md §3 into ONE .docx per subject,
then a PDF via LibreOffice (`soffice --headless --convert-to pdf --outdir <dir> <file.docx>`).

Usage:
    node build/build_cards.js --subject "Glaucoma" --file-title "01 · Glaucoma case cards" \
        --out build/out/01_Glaucoma_Case_Cards.docx drafts/G1.md drafts/G4.md …
    node build/build_cards.js --subject "Index and master case format" --file-title "00 · Index and master case format" \
        --no-contents --out build/out/00_Index_and_Master_Case_Format.docx drafts/00_index.md

Read the docx skill before writing code: load it with the Skill tool (`anthropic-skills:docx`) and follow its docx-js
guidance (A4 page size, numbering config for bullets, table widths, etc.).

## The dialect (from CARD_SPEC.md §3 — read it; this is a summary)
Header lines at the top of each file: `@card`, `@title`, `@badge`, `@kind` (long|short|task|chart|fundus|index),
`@readmore`. A file may contain SEVERAL cards (each starts with `@card`).
Body: `## ` section heading · `### ` sub-heading · plain lines → paragraph (consecutive lines join; blank line ends) ·
`- ` bullet, `  - ` nested bullet · `1. ` numbered (renumber from 1 for each new list) · `**bold**`, `*italic*` ·
`@widths 22 38 40` (optional, before a table; percentages) · pipe tables (header row, `|---|` separator, rows; `<br>`
= line break inside a cell) · `Q: …` then `A: …` (viva pairs) · boxes `:::say`, `:::trap`, `:::recall`, `:::short`
… `:::` (box content may contain paragraphs, bullets, numbered items and bold) · `:::gonio` block (see below).
Any unknown `:::name` → a plain light-grey box. Warn (to stderr) about anything you cannot parse; never crash.

## Page and type
- A4 (11906 × 16838 twips). Margins: top 850, bottom 850, left 964, right 964 (≈1.5 cm / 1.7 cm).
- Font Calibri throughout. Body 10 pt, line spacing ~1.08, 3 pt after paragraphs. Tables 9 pt.
- Colours: navy `1F3864` (titles, table headers), section heading colour `1F3864` with a thin bottom border `9DC3E6`,
  sub-heading colour `31849B`, table borders `8EA9C1`, alternate body rows lightly shaded `F3F6FA`.
- British-English document language (en-GB).

## Elements
1. **Subject cover page** (unless `--no-contents`): title (e.g. "Glaucoma — Case Cards", navy, 24 pt), subtitle
   "M.S. Ophthalmology practical examination · Tamil Nadu Dr M.G.R. Medical University · 16 October 2026", one line
   "Every card follows the same headings. The generic long-case proforma is in 00 · Index and master case format.",
   a key line "★ kept at JEH last year · Long case · Short case · Task · Chart", and a contents table with columns
   No. | Card | Type | Last year (from @card, @title, @kind, and the ★ text in @badge).
2. **Each card starts on a new page** with a **header bar**: a full-width one-cell table, navy fill, white text:
   line 1 = `@card` id + "  " + `@title` (bold 14 pt); line 2 = `@badge` (9.5 pt). The ★ may be gold (`FFC000`).
3. `##` section heading: 11.5 pt bold navy, bottom border, 8 pt before / 3 pt after, keep with next.
4. `###` sub-heading: 10 pt bold teal, 5 pt before / 2 pt after, keep with next.
5. Bullets and numbered lists: real Word numbering (not typed characters); nested bullet level; numbered lists restart
   at 1 for every new list.
6. **Tables**: full text width; header row navy fill with white bold text, repeated on each page (tableHeader);
   EVERY row `cantSplit: true` (rows never split across pages); cell margins ~60–80 twips; widths from `@widths`, else
   proportional to the longest text in each column (min 12 % per column).
7. **Boxes** (single-cell full-width tables, `cantSplit`): `say` → fill `EEF3FA`, thick left border navy, a small
   label "SAY IT" in navy small caps at the top; `trap` → fill `FDF0EE`, left border `C0392B`; `recall` → fill
   `EEF7EE`, left border `2E7D32`; `short` → fill `F4F6F8`, left border `7F8C8D`.
8. **Viva**: `Q:` → paragraph with a bold navy "Q " label then the question in bold, keep with next;
   `A:` → paragraph indented ~0.4 cm, normal weight.
9. **`@readmore`** → last paragraph of the card: 8.5 pt italic grey ("Read more: …") with a thin top border.
10. **`:::gonio` block** — lines `RE | S=… | T=… | I=… | N=…`, `LE | S=… | T=… | I=… | N=…`, `caption: …`.
    Draw a PNG (Python + PIL is fine, called from Node, or pure Node with `sharp` + SVG) with two crosses side by side,
    titled "Right eye" and "Left eye". Each cross is an X; write each quadrant's text inside its quadrant (superior at top,
    inferior at bottom; for the RIGHT eye temporal on the left and nasal on the right, for the LEFT eye nasal on the left
    and temporal on the right — as seen facing the patient) with a small grey S / I / N / T marker. Embed it ~11 cm
    wide, centred, caption below in 9 pt italic.
11. **Footer** on every page: left "<file-title>", right "Page X of Y" (8 pt grey).
12. Inline: `**bold**`, `*italic*`, `<br>` inside table cells. No stray `*`, `#`, `|` or `:::` may reach the output —
    warn if any remain after parsing.

## Checks the script prints (stderr or a report file)
Per card: word count, number of viva pairs, tables and their column counts, any parse warnings.

## Your task
1. Snapshot the current drafts first (they are being edited by others): copy `/home/claude/cards/drafts/G*.md`
   (not the _notes/_check files) to `/home/claude/cards/build/test_input/` and build from that copy.
2. Write the script; build `build/out/test_Glaucoma.docx` from the snapshot in this order: G1 G4 G5 G6 G7 G8 G9 G10 G2 G3;
   convert to PDF.
3. Render pages with `pdftoppm -r 60 -png` and LOOK at a good sample (the cover, the first two pages of G1, a page
   with a big table, a say-it box, the viva section, the gonio diagram page, and G8). Fix what looks wrong
   (overflows, ugly spacing, split rows, wrong numbering, unreadable colours).
4. Write `/home/claude/cards/build/page_map.py`: given the PDF, report the page range and page count of each card
   (find each card's first page by its header-bar text).
5. Reply with: how to run it, the page count per card from the test build, and any issues you could not fix.
