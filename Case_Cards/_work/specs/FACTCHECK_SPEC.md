# FACT-CHECK SPEC — independent checker (v4)

You did NOT write or review the card you are checking. Your job is to make it correct, consistent and exam-ready, and to
log every change. The candidate will learn this card in the week before his practical exam (16 Oct 2026); a wrong
number costs him marks.

## Inputs (all paths relative to the repo root)
- The card: `Case_Cards/_work/card_sources/<ID>.md` (format: CARD_SPEC.md §3 — read `Case_Cards/_work/specs/CARD_SPEC.md`
  fully first; it also gives the writing rules and templates).
- The writer's claims ledger: `Case_Cards/_work/checks/<ID>_notes.md` (a map, not proof), including any `## v4 additions`
  and `## Examiner additions` sections.
- The examiner's review: `Case_Cards/_work/checks/<ID>_review.md`.
- The packet (if present): `Case_Cards/_work/cache/packets/<ID>.txt`.
- The FULL books as per-page text, fitz-indexed: `Case_Cards/_work/cache/txt/baidya/pNNNN.txt`,
  `Case_Cards/_work/cache/txt/namrata/pNNNN.txt`, `Case_Cards/_work/cache/txt/aravind/pNNNN.txt` (4-digit zero-padded
  fitz index); whole-book files `Case_Cards/_work/cache/txt/<book>_all.txt` for grep (each page starts with
  `===== BOOK fitz N =====`). If a page's text is garbled or a table is jumbled, render the page with PyMuPDF from
  `Case_Cards/_work/cache/src/<book>.pdf`, for example
  `python3 -c "import pymupdf;d=pymupdf.open('Case_Cards/_work/cache/src/aravind.pdf');d[216].get_pixmap(matrix=pymupdf.Matrix(2,2)).save('Case_Cards/_work/cache/render/a216.png')"`
  and Read the PNG. Kanski is NOT in the repo.
- Cross-card decisions you MUST apply: `Case_Cards/_work/specs/CONSISTENCY.md`.
- **Upgrade of a v2 card:** the old report `Case_Cards/_work/checks/<ID>_check.md` covers text that is unchanged. Check
  every NEW or CHANGED claim (compare with the v2 text: `git show v2-build:Case_Cards/_work/card_sources/<ID>.md`, or
  `git show 3fcc773:Case_Cards/_work/card_sources/<ID>.md` if the tag is absent) — and anything that looks wrong anyway.

## What to check — every one of these on the card
1. **Facts.** Every number, dose, strength, frequency, duration, cut-off, percentage, grade, stage, classification (and
   its named system), named sign/eponym, mechanism of action, adverse effect, contraindication, and every diagnosis line:
   find it in the books. Verified → leave it. Wrong → correct it to what the book says. Not found anywhere in the three
   books → remove it or rephrase to what the books support (exceptions: the department's house wording and recording
   style from CARD_SPEC §5; patient-instruction wording in task steps; approved Kanski fallback with the tag).
2. **The five asks** (master prompt §12 check 2): every history row has its reason; every negative-history row names
   what it rules out (and the telling-apart test where the books give one); every must-do step has Do, Record and Viva;
   the differential table's last column names a sign or test; every investigation has its significance; the ladder has
   an aim, triggers, and every drug's mechanism, adverse effects and contraindications (here or on the toolkit card);
   every laser and operation has advantages and disadvantages. Report gaps; fill them from the books if you can.
3. **Books disagree** → the newer book wins on the card (Baidya 2024 > Namrata > Aravind 2013). Log it.
4. **Statements of fact in prose and viva answers** (not only numbers): same test. Watch for claims that sound right but
   are not in the books — remove them.
5. **Priority, structure and keywords** (§12 check 5): basics come first in every section; minor items tagged
   *(extra)* and no more than about 10%; every answer has the CARD_SPEC §2.3 shape and opens with its keyword; every
   definition matches the book's wording (§2.4); every term on the Keywords line appears in at least one say-it script
   or viva answer (check with a script: search the rest of the card for each keyword).
6. **Terminology and readability** (§12 check 6): exact clinical terms, no lay substitutes; every abbreviation expanded
   at its first use; NO abbreviations inside `:::say`; British spelling; list every sentence over 20 words outside
   tables and split it (unless it is a quoted definition); flag and replace "e.g.", "i.e.", "etc.", "viz.", "utilise",
   "initiate", "prior to", "basically", "simply"; no book names or page numbers in the body; no patient names.
7. **Format validity**: headings exactly per the template in CARD_SPEC §4 and in order; every `:::` box closed and not
   nested; Q/A outside boxes; every table row has the same number of cells as its header; `@widths` sum to 100; max 4
   columns; `Q:` always followed by `A:`.
8. Apply every decision in CONSISTENCY.md that touches this card.
9. Keep the card within its word budget (CARD_SPEC §4; up to about 10% over is acceptable). If a correction adds words,
   trim *(extra)* material first.

## How to work
- Go claim by claim through the card from top to bottom. Use grep on the book text to find each claim fast.
- Fix the card IN PLACE with small, exact edits. Do not rewrite sections that are correct. Do not add new facts except
  where a correction or a five-asks gap needs them.

## Output: `Case_Cards/_work/checks/<ID>_check.md` (upgrade of a v2 card: `<ID>_check_v4.md`)
1. Summary: claims checked (approx. count), verified, corrected, removed; final word count (`wc -w`); `Q:` count.
2. A table of every change: where on the card · before · after · reason and source (book + fitz page).
3. Items you could not verify and removed (one line each).
4. Checks 2, 5, 6 and 7: one line each — pass, or what you fixed.
5. "Confirm with your seniors" — at most 5 genuinely doubtful points (book disagreements that matter, department
   conventions).
Reply with the summary and the "confirm with your seniors" list.
