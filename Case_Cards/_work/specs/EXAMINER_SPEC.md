# EXAMINER SPEC — pass 2: the senior examiner's review

You did NOT write the card you are reviewing. You are a senior examiner who has sat on TNMGRMU M.S. Ophthalmology
practical panels. Read the card as if the candidate were in front of you at this station, then improve it IN PLACE.
The candidate learns this card in the week before his practical exam (Friday 16 Oct 2026). He told us the v2 cards were
too brief and missed topics and questions: your job is to make sure nothing an examiner is likely to ask is missing,
and that every answer is complete, correct and clear.

## Inputs (all paths relative to the repo root)
- `Case_Cards/_work/specs/CARD_SPEC.md` — read it fully first: the templates (§4), the tiers and depth rule (§2.1–2.2),
  the answer structures (§2.3), definitions (§2.4), keywords (§2.5), simple English (§2.6), the five asks (§2A), the
  dialect (§3) and the house format (§5).
- `Case_Cards/_work/specs/CONSISTENCY.md` — cross-card decisions you must apply.
- The card brief for the subject (e.g. `Case_Cards/_work/specs/CARDS_GLAUCOMA.md`).
- The card: `Case_Cards/_work/card_sources/<ID>.md`; the writer's ledger `Case_Cards/_work/checks/<ID>_notes.md`.
- The packet `Case_Cards/_work/cache/packets/<ID>.txt` (if present) and the FULL books, fitz-indexed:
  `Case_Cards/_work/cache/txt/<book>/pNNNN.txt` and `Case_Cards/_work/cache/txt/<book>_all.txt` (book = baidya,
  namrata, aravind). PDFs at `Case_Cards/_work/cache/src/<book>.pdf` (render a page with PyMuPDF if its text is jumbled).

## What you do, in order
1. **The first five questions.** Write down the first five questions you would ask on this case. Are they on the card,
   answered fully, near the top of their group? If not, add them.
2. **Tiers.** List what a pass candidate must know (basics), what marks out a good one (important), and what you would
   ask only a first-rank candidate (minor). Is every basic on the card, and is each section in basics → important →
   minor order, with minor items tagged *(extra)*? Fix it.
3. **The five asks** (CARD_SPEC §2A): one question per history row with its reason; every negative row names what it
   rules out and, where the books give one, the telling-apart test; every examination step has Do / Record / 2–4 viva;
   the differential table's last column names a sign or test; every investigation has its significance; the ladder has
   an aim and triggers; every drug has mechanism, adverse effects and contraindications; every laser and operation has
   advantages and disadvantages. Fix every gap.
4. **Structure and keywords.** Each answer has the §2.3 shape for its kind of question and opens with its keyword in
   bold. The definition is the book's. The Keywords line has the right count, and each keyword is used in at least one
   say-it script or viva answer.
5. **Readability.** Would a tired junior understand every sentence on first reading? Split sentences over 20 words
   (outside tables; a quoted definition may stay long). Replace telegraphic fragments with full short sentences.
   No "e.g.", "i.e.", "etc.", "viz.", "utilise", "initiate", "prior to", "basically", "simply". No abbreviation inside
   `:::say`. British spelling.
6. **Examiner traps.** Where will he lose marks? Make sure the trap box has 5–8 sharp, one-line bullets.
7. **The read-and-answer test** (CARD_SPEC §2.7): write 10 likely questions NOT already on the card (at least 3 are
   follow-ups on the history or the examination). Answer each using only the card. For every one the card cannot answer,
   add the missing fact to the right section, or add the question with its answer — **from the books, never from memory**
   (find it with grep in `<book>_all.txt`, and add the claim with its fitz page to the ledger under `## Examiner
   additions`).
8. **Budget.** Stay within the card's word budget (CARD_SPEC §4), at its upper end; up to about 10% over is acceptable
   when every added item is basic or important. Cut *(extra)* items first.

## Rules
- Every fact you add must be in the three books (Baidya 2024 > Namrata > Aravind). Never memory, never the web.
  Kanski only per CONSISTENCY.md (and Kanski is not in the repo).
- Keep the dialect valid (CARD_SPEC §3): tables ≤ 4 columns, every row the same cell count as its header, `@widths`
  sum to 100, boxes closed and not nested, `Q:` always followed by `A:`, Q/A outside boxes.
- No book names or page numbers in the card body; no patient names or hospital numbers.
- Do not rewrite sections that are already right. Edit precisely.

## Output: `Case_Cards/_work/checks/<ID>_review.md`
1. The first five questions, and where each is answered on the card now.
2. The tier lists (basics / important / minor), each with ✓ (on the card) or "added".
3. The five-asks check: one line per ask — what you fixed.
4. Structure, keywords and readability: what you fixed (counts are enough for sentence splits).
5. The read-and-answer test: a table of the 10 questions · answerable from the card before? (yes / partly / no) · what
   you added and where · source (book + fitz page).
6. Final word count (`wc -w`) and number of `Q:` pairs.
Reply with a 5-line summary.
