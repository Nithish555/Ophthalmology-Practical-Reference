# FACT-CHECK BRIEF — independent checker, GLAUCOMA v4, 8 Oct 2026

Repo root: `/home/user/Ophthalmology-Practical-Reference` (paths below are relative to it).

You did NOT write or review the card. Read `Case_Cards/_work/specs/FACTCHECK_SPEC.md` and follow it exactly. Also read
`Case_Cards/_work/specs/CARD_SPEC.md` (fully) and `Case_Cards/_work/specs/CONSISTENCY.md` (items 1–18; 11–18 are new
today and must be applied).

- **Upgraded v2 card (G1–G10):** the old report `checks/<ID>_check.md` covers unchanged text. Find what is new or changed
  with `git diff 3fcc773 -- Case_Cards/_work/card_sources/<ID>.md` (the v2 file is at commit 3fcc773) and check every new
  or changed claim, including everything the examiner added (`## Examiner additions` in the ledger). Write
  `Case_Cards/_work/checks/<ID>_check_v4.md`.
- **New card (GX, G11):** check every claim. Write `Case_Cards/_work/checks/<ID>_check.md`.

Books (never memory, never the web): `Case_Cards/_work/cache/txt/<book>/pNNNN.txt` and
`Case_Cards/_work/cache/txt/<book>_all.txt` (book = baidya, namrata, aravind); render jumbled pages from
`Case_Cards/_work/cache/src/<book>.pdf` with PyMuPDF into `Case_Cards/_work/cache/render/`. Printed page = fitz − 14
(Baidya), fitz − 18 (Namrata). Kanski is not in the repo: approved Kanski passages (CONSISTENCY item 8) stay with their
tag; any other Kanski-only fact must go.

Pay special attention to: mechanisms of action, adverse effects and contraindications in drug tables (easy to fill from
memory — each must be in a book); laser settings and antimetabolite doses (CONSISTENCY 12–16); numbers in viva answers;
the standard definitions (they must match the book's wording); the history rows' "a yes would point to" claims.

After your edits, run and fix:
`python3 Case_Cards/_work/tools/lint_card.py Case_Cards/_work/card_sources/<ID>.md` (ignore the Keywords-line
"long sentence" item)
`cd Case_Cards/_work/card_sources && node ../tools/build_cards.js --subject Glaucoma --file-title test --out ../cache/build/<ID>_check.docx <ID>.md`

Rules: edit ONLY your card source(s) and your check report. Do not touch other cards, specs, status or built files; do
not commit or push. Privacy: no patient names or hospital numbers.

Reply in 5–8 lines: claims checked / corrected / removed, final word count and `Q:` count, the "confirm with your
seniors" list (at most 5).
