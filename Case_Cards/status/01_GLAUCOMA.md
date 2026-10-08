# 01 GLAUCOMA — status
Owner: claude/new-session-h6zrwy · claimed 8 Oct 2026 12:02 IST
State: delivered (v4 build, 8 Oct 2026 13:15 IST) — independent fact-check still owed for G3, G7, G8, G9, G10, G11 (deferred on budget)
Next step: when budget allows, run the independent fact-check (briefs/FACTCHECK_BRIEF.md) on G3, G7, G8, G9, G10, G11, then rebuild 01 and re-run the §12 checks.

| Card | Stage | Notes |
|---|---|---|
| GX | done | New in v3/v4: glaucoma treatment toolkit (§8.2) |
| G1 | done | POAG + glaucomatous optic disc — add block "Glaucomatous optic disc" |
| G4 | done | Primary angle-closure disease — thesis topic, deepest card |
| G5 | done | Neovascular glaucoma — add block "Rubeosis iridis" |
| G6 | done | Pseudoexfoliation — add block "Pseudoexfoliation" |
| G7 | reviewed — in the 8 Oct build; fact-check deferred | CRVO with POAG |
| G8 | reviewed — in the 8 Oct build; fact-check deferred | Applanation tonometry (task) |
| G9 | reviewed — in the 8 Oct build; fact-check deferred | Gonioscopy (task) |
| G10 | reviewed — in the 8 Oct build; fact-check deferred | Humphrey field (chart) |
| G2 | done | POAG with trabeculectomy |
| G3 | reviewed — in the 8 Oct build; fact-check deferred | POAG with drainage device |
| G11 | reviewed — in the 8 Oct build; fact-check deferred | New (extra, 8 Oct): other glaucomas the examiner may ask — buphthalmos, Sturge–Weber, lens-induced, uveitic, steroid-induced, pigmentary. Added on the candidate's request for wider topic coverage |

## How to resume (read this first if this session has stopped)
- **All work is on branch `claude/new-session-h6zrwy` (pull request #1), not yet on `main`.** A new session must start
  from that branch: merge pull request #1 into `main` first, or run §10.3 step 2 (it merges unmerged branches that change
  `Case_Cards/`). Then send: `Read MASTER_PROMPT_PRACTICALS_v4.md and follow it. SUBJECT: INDEX, GLAUCOMA`.
- **Writing and examiner review are finished for every card**; GX, G1, G2, G4, G5, G6 are also fact-checked
  (`done`). Do not redraft or re-review any card.
- **Still owed:** the independent fact-check of G3, G7, G8, G9, G10, G11 (brief: `Case_Cards/_work/briefs/FACTCHECK_BRIEF.md`;
  each writes `checks/<ID>_check_v4.md`, or `checks/G11_check.md` for the new G11). Then rebuild 01 (file order GX G1 G4
  G5 G6 G7 G8 G9 G10 G2 G3 G11; command in `Case_Cards/_work/README.md`) and re-run the §12 checks
  (`tools/lint_card.py`, `tools/check_five_asks.py`, `checks/01_coverage.md`, render and look at every page).
- Every session must first rebuild the cache (master prompt §10.2): `pip install pymupdf`, extract the books to
  `Case_Cards/_work/cache/txt/`, `npm install` in `Case_Cards/_work/tools/`.
- Cross-card decisions made during this upgrade are CONSISTENCY.md items 11–34; apply them.

Budget decision (candidate, 8 Oct 12:50 IST): finish the running examiner reviews, build and send the PDF, then
independent fact-checks only for GX, G1, G4, G5, G6 (cheaper model); G2's and G5's fact-checks were already running.
Fact-checks for G3, G7, G8, G9, G10, G11 and the index are deferred to a later session.

Questions for the user:
Requests for other subjects:
