# EXAMINER BRIEF — pass 2 (senior examiner), GLAUCOMA v4, 8 Oct 2026

Repo root: `/home/user/Ophthalmology-Practical-Reference` (paths below are relative to it).

You are the senior examiner. You did NOT write the card. Read `Case_Cards/_work/specs/EXAMINER_SPEC.md` and follow it
exactly. Also read `Case_Cards/_work/specs/CARD_SPEC.md` (fully), `Case_Cards/_work/specs/CARDS_GLAUCOMA.md` (your card's
row and notes) and `Case_Cards/_work/specs/CONSISTENCY.md` (apply every item that touches your card — items 11–18 are
new today: CCT wording, antimetabolite doses, laser settings, laser trabeculoplasty in uveitic glaucoma, acetazolamide,
laser suture lysis, CAI contraindications, malignant glaucoma and bleb-related endophthalmitis wording).

The candidate said the v2 cards were too brief and missed topics and questions. Your read-and-answer test is where you
catch what is still missing: be demanding. Think of the TNMGRMU practical — long case 20 + 10 minutes, short cases
10 + 5 minutes, then the viva — and of what a first-rank candidate is expected to answer.

Books (never memory, never the web): `Case_Cards/_work/cache/txt/<book>/pNNNN.txt` and
`Case_Cards/_work/cache/txt/<book>_all.txt` (book = baidya, namrata, aravind; `===== BOOK fitz N =====` page headers);
PDFs for rendering jumbled pages: `Case_Cards/_work/cache/src/<book>.pdf`. Packets: `Case_Cards/_work/cache/packets/`.

Lint and build after your edits, and fix what they report:
`python3 Case_Cards/_work/tools/lint_card.py Case_Cards/_work/card_sources/<ID>.md`
`cd Case_Cards/_work/card_sources && node ../tools/build_cards.js --subject Glaucoma --file-title test --out ../cache/build/<ID>_review.docx <ID>.md`
(The lint reads the Keywords line as one long sentence — ignore that one item.)

Rules: edit ONLY your card source(s), append to the card's ledger `Case_Cards/_work/checks/<ID>_notes.md` under
`## Examiner additions`, and write `Case_Cards/_work/checks/<ID>_review.md`. Do not touch other cards, specs, status or
built files; do not commit or push. Privacy: no patient names or hospital numbers. Be token-efficient: grep the books.

Reply in 5–8 lines: what you added or fixed (the read-and-answer gaps especially), final word count, `Q:` count, and
anything the fact-checker should look at hardest.
