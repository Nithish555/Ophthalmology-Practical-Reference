# Merge brief — one study guide from the four parts of the session notes

Repo root: `/home/user/Ophthalmology-Practical-Reference`. Inputs: `Case_Cards/_work/cache/video/notes_part1.md` …
`notes_part4.md` (made from the auto-captions of "Ophthalmology PG Long case Live — Survival tips explained", Cochin
Ophthalmic Club, 7 March 2021, 4 h 05 min; see `BRIEF.md` in the same folder). The reader is a final-year M.S.
Ophthalmology candidate at Joseph Eye Hospital (TNMGRMU practical exam, Friday 16 Oct 2026; weak areas: case
presentation, fundus description, retinoscopy; thesis on angle closure). He already has v4 case cards for glaucoma
(`Case_Cards/_work/card_sources/G1.md` … `G11.md`, `GX.md`) and an index with a master proforma (`00_index.md`).

## Output
`Case_Cards/_work/card_sources/VN.md` — written in the card dialect of `Case_Cards/_work/specs/CARD_SPEC.md` §3
(read §3 first: `@` header lines, `##`/`###`, bullets, numbered lists, pipe tables ≤ 4 columns with `@widths`
summing to 100, `Q:`/`A:` pairs outside boxes, `:::say`/`:::trap`/`:::recall` boxes that never nest). Use
`@kind index` for every card (no word budget). Five cards, in this order. The seven cases are: primary angle-closure glaucoma with cataract; ischaemic CRVO with neovascular glaucoma; axial proptosis (intraconal mass versus thyroid eye disease); third nerve palsy; perforated corneal ulcer (peripheral ulcerative keratitis versus fungal keratitis); a "uveitis" case redirected to bilateral pathological myopia; post-vitrectomy pseudophakic retinal detachment. Then the closing advice and a glaucoma talk on medical management.

1. `@card VN1` · `@title Long-case viva session — at a glance` — what the session is and how to use this guide
   (3 bullets); then a **timed summary table** (Time | Segment | What happened) covering the whole 4 hours, one row per
   real segment; then a line on the source's limits (auto-captions only, no slides; garbled terms corrected, [?] where
   unsure).
2. `@card VN2` · `@title Survival tips — what the examiners told candidates` — every distinct tip from the four
   parts, DE-DUPLICATED (merge repeats; keep all timestamps of a merged tip), grouped under `###` headings: Before you
   start · Presenting the history · Examination and findings · The diagnosis line · Investigations and management ·
   Behaviour in the viva · Time management. One numbered line per tip, ending with its timestamp(s) in square brackets.
   Close with a `:::trap` box: the 8–12 commonest mistakes the examiners criticised.
3. `@card VN3` · `@title The seven cases — what was presented, what was criticised, the preferred diagnosis line` —
   one `###` per case (topic as the heading, timestamps): patient summary (age, sex, complaint only); the candidate's
   diagnosis; the examiners' preferred diagnosis line (in a `:::say` box when the examiners gave a model line); the
   criticisms as bullets with timestamps; and a line "On your cards:" naming the matching card if one exists
   (glaucoma → G1/G4/G5/G6/G7…; others → "not yet built — RETINA/CORNEA/NERVES/OCULOPLASTY/MISC").
4. `@card VN4` · `@title Viva questions with the answers the examiners expected` — ALL questions from the four parts,
   de-duplicated, grouped by `###` topic: General and presentation · Glaucoma and angle closure · Retina and CRVO ·
   Orbit and proptosis · Neuro-ophthalmology (third nerve) · Cornea and corneal ulcer · Uveitis and myopia · Retinal detachment · Glaucoma talk. Each as
   `Q: … [mm:ss]` then `A: …` (the examiners' expected answer, keyword first in bold). Where the session gave no answer,
   write `A: Not answered in the session.` — never fill it from your own knowledge.
   **Glaucoma answers only:** compare each with the matching glaucoma card (already fact-checked against the books).
   If the session's answer disagrees with the card, keep the session's answer and add one line
   "Your card (G4) says …; confirm with your seniors." Do not check other subjects.
5. `@card VN5` · `@title Slides and images mentioned, and what to do with this session` — a table of every slide or
   image the speakers referred to (Time | What they said it showed); then 5–8 bullets "How to use this session in
   your last week" tying the tips to his JEH exam (long case 20 + 10 minutes; he presents in the department's format).

Header lines for each card: `@card`, `@title`, `@badge` (for example "From the Cochin Ophthalmic Club live long-case
session, 7 Mar 2021 · auto-captions"), `@kind index`, `@readmore` ("YouTube: Ophthalmology PG Long case Live — Survival
tips explained (Cochin Ophthalmic Club), https://www.youtube.com/watch?v=e3X1W9wrC_A").

## Rules
- Your own words throughout; at most a short quoted phrase where the exact wording matters (a model diagnosis line).
- British spelling; expand abbreviations at first use in each card; no abbreviations inside `:::say`.
- No names of candidates, examiners or patients.
- Never add clinical content that is not in the four notes files (apart from the "Your card says …" comparison lines).
- Check the build and fix every warning:
  `cd Case_Cards/_work/card_sources && node ../tools/build_cards.js --subject "Long-case viva session notes" --file-title "Video notes · Long-case survival tips" --out ../cache/build/VN_test.docx VN.md`
- Reply with: the number of tips (after de-duplication), questions per topic, and builder warnings left (should be 0).
