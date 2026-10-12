# WRITER BRIEF — pass 1 (senior teaching assistant), GLAUCOMA v4 upgrade, 8 Oct 2026

Repo root: `/home/user/Ophthalmology-Practical-Reference` (all paths below are relative to it).

## Why this work
The candidate (final-year M.S. Ophthalmology, practical exam Friday 16 Oct 2026) read the v2 glaucoma cards and said the
answers are **too brief** and **many topics and questions are missing**. Your card must fix that: full, explained,
book-correct answers; every topic and FAQ the three books give for the case; the upper end of the word and question
budgets. Quality over speed — but every fact must come from the books.

## Read first (in this order)
1. `Case_Cards/_work/specs/CARD_SPEC.md` — fully. It is the operative spec: roles, tiers, answer structures, keywords,
   simple English, the five asks (§2A), the dialect (§3), the templates (§4), the house format (§5), deliverables (§6).
2. `Case_Cards/_work/specs/CARDS_GLAUCOMA.md` — your card's sources, kind, checklist blocks and card-specific notes.
3. `Case_Cards/_work/specs/CONSISTENCY.md` — cross-card decisions; apply every one that touches your card.
4. Your v2 card `Case_Cards/_work/card_sources/<ID>.md` (if it exists), its ledger `Case_Cards/_work/checks/<ID>_notes.md`
   and its fact-check `Case_Cards/_work/checks/<ID>_check.md`, and the card's section in
   `Case_Cards/_work/01_Glaucoma_working_notes.md`.
5. The department's sheets, typed and anonymised: `Case_Cards/_work/transcripts/proforma_p01-17.md` (POAG sheet = PDF
   pages 7–9; DigiNerve slides = 10–13), `transcripts/lastyear.md`, `transcripts/fundus_case.md` where relevant.
   The typed formats are PDFs in `Case Format/` (e.g. `Case Format/Glaucoma Case Presentation Format.pdf` — read with
   `pdftotext -layout`). Mnemonics: `Ophthal mnemonics final.pdf` (`pdftotext`, then grep).
6. For context only: `MASTER_PROMPT_PRACTICALS_v4.md` §2, §4, §9, §11.

## The books (never memory, never the web, for any clinical fact)
Per-page text, fitz-indexed: `Case_Cards/_work/cache/txt/<book>/pNNNN.txt` (book = baidya, namrata, aravind);
whole-book files for grep: `Case_Cards/_work/cache/txt/<book>_all.txt` (each page starts `===== BOOK fitz N =====`).
PDFs: `Case_Cards/_work/cache/src/<book>.pdf` — render a page with PyMuPDF when its text is jumbled (tables!):
`python3 -c "import pymupdf;d=pymupdf.open('Case_Cards/_work/cache/src/baidya.pdf');d[170].get_pixmap(matrix=pymupdf.Matrix(2,2)).save('Case_Cards/_work/cache/render/b170.png')"` then Read the PNG.
Printed page = fitz − 14 (Baidya), fitz − 18 (Namrata); Aravind is cited by section number. Priority when books
disagree: Baidya 2024 > Namrata > Aravind 2013 (log the disagreement in the notes, not on the card). Kanski is NOT in the
repo; keep the approved Kanski passages already on the v2 cards with their tag, add no new Kanski facts.

## Your steps
1. **Packet.** Extract your card's source pages (CARDS_GLAUCOMA.md table; verify the ranges by opening the pages) into
   `Case_Cards/_work/cache/packets/<ID>.txt`, with a header per page like `===== BAIDYA fitz 166 = printed p.152 =====`.
   Read it fully — above all every "Frequently Asked Questions" (Baidya), "Viva Questions" (Namrata) and FAQ (Aravind)
   section for the topic: each of those questions should end up answered somewhere on the card (steps, viva, must-know),
   unless it is trivial or belongs to another card. Use `grep -n` on `<book>_all.txt` to find more (for example drug
   names, signs, classifications) anywhere in the books.
2. **Ledger first.** In `Case_Cards/_work/checks/<ID>_notes.md` (create it for a new card; for a v2 card keep everything
   and append a section `## v4 additions`) list every NEW or CHANGED claim — numbers, doses, strengths, frequencies,
   grades, cut-offs, classifications, named signs, mechanisms, adverse effects, contraindications, diagnosis wording —
   each with its book and fitz page. Also: `### Disagreements`, `### Omitted` (wanted but not in the books),
   `### Mnemonic`, and `### Coverage of the books' FAQs` (each FAQ question → where it is answered on the card, or why not).
3. **Draft (upgrade in place).** Bring `Case_Cards/_work/card_sources/<ID>.md` to the v4 template for its `@kind`
   (CARD_SPEC §4), following the upgrade rules in CARDS_GLAUCOMA.md. Keep every verified v2 fact; rewrite telegraphic
   lines as full short sentences; basics first, *(extra)* last. Keep the `@card`, `@title`, `@badge`, `@kind`, `@readmore`
   header lines (update `@readmore` with the printed pages you used).
4. **Self-check** against CARD_SPEC §6 "Check before you finish". Then run the builder on your card alone and fix every
   warning:
   `cd Case_Cards/_work/card_sources && node ../tools/build_cards.js --subject Glaucoma --file-title test --out ../cache/build/<ID>_test.docx <ID>.md`
   Then run the lint script and fix what it reports (a quoted book definition may stay over 20 words; a say-it
   sentence may run slightly long if splitting it would sound unnatural — but no abbreviations in `:::say`):
   `python3 Case_Cards/_work/tools/lint_card.py Case_Cards/_work/card_sources/<ID>.md`

## Rules
- Edit ONLY your card source(s) and your own `checks/<ID>_notes.md`. Do not touch other cards, the specs,
  CONSISTENCY.md, the status files or the built files. Do not run git commit/push (the main session commits).
- If you think a cross-card decision is needed (a new grading choice, a number that must match another card), do not
  edit CONSISTENCY.md: put it under "Proposals for CONSISTENCY.md" in your reply.
- Privacy: no patient name or hospital number anywhere (the repo is public). Use "Mr X".
- Be token-efficient: grep and read the pages you need; do not dump whole books.

## Reply (short)
Final `wc -w` of the card; number of `Q:` pairs (and how many in steps / viva section / short-case blocks); what you
added (topics and question groups); book disagreements; what you omitted for lack of a source; proposals for
CONSISTENCY.md; any builder warning you could not fix.
