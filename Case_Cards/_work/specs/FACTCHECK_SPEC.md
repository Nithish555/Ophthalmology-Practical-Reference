# FACT-CHECK SPEC — independent checker

You did NOT write the card you are checking. Your job is to make it correct, consistent and exam-ready, and to log
every change. The candidate will learn this card the night before his practical exam; a wrong number costs him marks.

## Inputs
- The card: `/home/claude/cards/drafts/<ID>.md` (format: see §3 of /home/claude/cards/notes/CARD_SPEC.md — read
  CARD_SPEC.md fully first; it also gives the writing rules and templates).
- The writer's notes with a claims ledger: `/home/claude/cards/drafts/<ID>_notes.md` (use it as a map, not as proof).
- The packet the writer used: `/home/claude/cards/packets/<ID>.txt`.
- The FULL books as per-page text, fitz-indexed: `/home/claude/cards/txt/baidya/pNNNN.txt`,
  `/home/claude/cards/txt/namrata/pNNNN.txt`, `/home/claude/cards/txt/aravind/pNNNN.txt` (4-digit, zero-padded fitz
  index), Kanski fallback `/home/claude/cards/txt/kanski/pNNNN.txt`. Whole-book files `txt/<book>_all.txt` are handy for
  grep. If a page's text is garbled or a table is jumbled, render the page image with PyMuPDF from
  `/home/claude/cards/src/<book>.pdf` (e.g. `python3 -c "import fitz;d=fitz.open('src/aravind.pdf');d[216].get_pixmap(matrix=fitz.Matrix(2,2)).save('/tmp/claude-0/-home-claude/adab4b5c-ac1e-5229-869f-0f9c94e6878a/scratchpad/a216.png')"`) and Read it.
- Cross-card decisions you MUST apply: `/home/claude/cards/notes/CONSISTENCY.md`.

## What to check — every one of these on the card
1. Every number, dose, strength, frequency, duration, cut-off, percentage, grade, stage, classification (and its
   named system), named sign/eponym, and every diagnosis line: find it in the books. Verified → leave it.
   Wrong → correct it to what the book says. Not found anywhere in the three books → remove it or rephrase to what the
   books do support (exceptions: the department's house wording and recording style from CARD_SPEC §5; patient-instruction
   wording in task steps; exam notes taken from the candidate's own regulation pages; approved Kanski fallback with the tag).
2. Books disagree → the newer book wins on the card (Baidya 2024 > Namrata > Aravind 2013). Log it.
3. Statements of fact in prose and viva answers (not only numbers): same test. Watch for claims that sound right but are
   not in the books — remove them.
4. Terminology pass: exact clinical terms, no lay substitutes; every abbreviation expanded at its first use on the card;
   NO abbreviations inside `:::say`; British spelling (oedema, haemorrhage, anaemia, ischaemia, haemoglobin, tumour,
   paediatric, centre, colour, fibre, anaesthesia, leucocyte, oesophagus, -ise where the card uses it consistently);
   no book names or page numbers in the body; no patient names.
5. Format validity: headings exactly per the template in CARD_SPEC §4 and in order; every `:::` box closed; every table
   row has the same number of cells as its header; `@widths` sum to 100; max 4 columns; `Q:` always followed by `A:`.
6. Apply every decision in CONSISTENCY.md that touches this card.
7. Keep the card within its word budget (CARD_SPEC §4). If a correction adds words, trim the least exam-relevant
   material elsewhere.

## How to work
- Go claim by claim through the card from top to bottom. Use grep on the book text to find each claim fast.
- Fix the card IN PLACE with the Edit tool (small, exact replacements).
- Do not rewrite sections that are correct. Do not add new facts except where a correction needs them or your brief
  explicitly asks for an addition.

## Output: `/home/claude/cards/drafts/<ID>_check.md`
1. Summary: claims checked (approx. count), verified, corrected, removed; final word count (`wc -w`).
2. A table of every change: where on the card · before · after · reason and source (book + fitz page).
3. Items you could not verify and removed (one line each).
4. "Confirm with your seniors" — at most 5 genuinely doubtful points the candidate should check (e.g. book disagreements
   that matter, department conventions).
Reply with the summary and the "confirm with your seniors" list.
