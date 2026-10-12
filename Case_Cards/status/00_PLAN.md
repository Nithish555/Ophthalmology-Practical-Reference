# 00 PLAN — what to build next (decided by the candidate, 8 Oct 2026)

**Done:** 00 INDEX and 01 GLAUCOMA, v4 (on branch `claude/new-session-h6zrwy`, pull request #1 — merge it into `main`
first). Six glaucoma fact-checks are still owed (see `01_GLAUCOMA.md`).

**Next — "All ★ cases, lean"** (chosen because of a limited budget; not started yet):

| File | Cards to build now | Kind |
|---|---|---|
| 02 Retina | RX (short retina toolkit), R0 normal fundus, ★ R1 PDR with PRP marks, ★ R3 CRVO, ★ R4 BRVO, ★ R5 ARMD, ★ R6 retinitis pigmentosa, ★ R9 Stargardt, ★ R11 coloboma | toolkit, fundus, long+short |
| 03 Cornea | ★ C1 fungal corneal ulcer, ★ C3 failed graft / post-keratoplasty eye | long+short |
| 04 Misc | ★ M1 ectopia lentis / Marfan, ★ M2 dislocated lens in vitreous, ★ M5 lamellar cataract and aphakia | long+short, short |
| 05 Nerves | ★ N1 third nerve palsy | long+short |

These cover 15 of last year's 16 fundus cases (the 16th, the dislocated lens, is M2) and every other ★ case.

**"Lean" means:**
- Writer on the cheaper model, following `Case_Cards/_work/briefs/WRITER_BRIEF.md` (adapt the subject brief: write
  `specs/CARDS_RETINA.md` etc. from master prompt §8.1 and §8.3, as `specs/CARDS_GLAUCOMA.md` was written), ledger
  first, then the self-checks: `tools/lint_card.py`, `tools/check_five_asks.py`, the builder.
- Examiner review (`briefs/EXAMINER_BRIEF.md`) on the long cases first; fundus cards if budget allows.
- No separate CX, MX, NX toolkit cards yet: the case cards' drug and procedure tables carry the short profiles
  themselves.
- Independent fact-check deferred; mark each card's status row "fact-check deferred".
- Build each subject file with the cards done, run the §12 checks that apply, commit the .docx/.pdf, mark the status
  "delivered (partial: ★ cards only)".

**To start (any Claude session — cloud or desktop):**
`Read MASTER_PROMPT_PRACTICALS_v4.md and follow it. Then read Case_Cards/status/00_PLAN.md and build the next cards there, lean. SUBJECT: RETINA`
(then CORNEA, MISC, NERVES the same way).
