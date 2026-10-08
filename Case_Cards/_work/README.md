# Case cards — working folder (for building the remaining subjects)

Built 7 Oct 2026 from MASTER_PROMPT_PRACTICALS_v2.md. Finished files sit one level up:
`00_Index_and_Master_Case_Format` and `01_Glaucoma_Case_Cards` (.docx + .pdf).

What is here, so the next chats build RETINA, CORNEA, MISC, NERVES, OCULOPLASTY and VIVA the same way:

- `specs/CARD_SPEC.md` — the card templates, writing rules, house format and the small Markdown dialect the builder reads.
- `specs/CONSISTENCY.md` — decisions every card must follow (gonioscopy grading = Aravind 4.2 tables; cross diagrams show
  the deepest structure seen; Van Herick grades; Kanski only as a tagged fallback; and others).
- `specs/FACTCHECK_SPEC.md` — the independent fact-check procedure used on every card.
- `specs/BUILDER_SPEC.md`, `tools/build_cards.js`, `tools/gonio_png.py`, `tools/page_map.py` — the Word/PDF builder
  (Node + docx library; LibreOffice for the PDF). Build command:
  `node build_cards.js --subject "Retina" --file-title "02 · Retina and fundus case cards" --out 02_Retina_Fundus_Case_Cards.docx R0.md R1.md …`
  then `soffice --headless --convert-to pdf 02_Retina_Fundus_Case_Cards.docx`.
- `card_sources/` — the source of every finished card (edit a card here and rebuild).
- `transcripts/` — the department's handwritten sheets typed up WITH ALL PATIENT NAMES AND NUMBERS REMOVED:
  Case Sheet Proforma (pp 1–31), FUNDUS CASE (pp 1–20) and last year's case lists. Note: FUNDUS CASE has drawings only,
  no written fundus description; the written fundus formula is on proforma pp 21 and 30.
- `01_Glaucoma_working_notes.md` — where the books disagree and what to confirm with your seniors (card by card).
- `checks/` — each card's claims ledger (`_notes`) and its independent fact-check report (`_check`) with book pages.

Page numbers in the specs and notes are fitz (0-based PDF index): Baidya printed = fitz − 14, Namrata = fitz − 18,
Kanski = fitz − 4; Aravind is cited by section number.
