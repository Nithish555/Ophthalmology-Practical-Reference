# 01 GLAUCOMA — status
Owner: claude/new-session-h6zrwy · claimed 8 Oct 2026 12:02 IST
State: in progress — v4 upgrade under way (MASTER_PROMPT_PRACTICALS_v4.md §11). v2 file stays at commit 3fcc773 (tag push not possible from this environment)
Next step: examiner review (pass 2) running for every card; then the independent fact-check of each card, then the build and the §12 checks.

| Card | Stage | Notes |
|---|---|---|
| GX | checked | New in v3/v4: glaucoma treatment toolkit (§8.2) |
| G1 | reviewed | POAG + glaucomatous optic disc — add block "Glaucomatous optic disc" |
| G4 | checked | Primary angle-closure disease — thesis topic, deepest card |
| G5 | checked | Neovascular glaucoma — add block "Rubeosis iridis" |
| G6 | reviewed | Pseudoexfoliation — add block "Pseudoexfoliation" |
| G7 | drafted | CRVO with POAG |
| G8 | reviewed | Applanation tonometry (task) |
| G9 | reviewed | Gonioscopy (task) |
| G10 | drafted | Humphrey field (chart) |
| G2 | checked | POAG with trabeculectomy |
| G3 | reviewed | POAG with drainage device |
| G11 | reviewed | New (extra, 8 Oct): other glaucomas the examiner may ask — buphthalmos, Sturge–Weber, lens-induced, uveitic, steroid-induced, pigmentary. Added on the candidate's request for wider topic coverage |

## How to resume (read this first if this session has stopped)
- **All work is on branch `claude/new-session-h6zrwy` (pull request #1), not yet on `main`.** A new session must start
  from that branch: merge pull request #1 into `main` first, or run §10.3 step 2 (it merges unmerged branches that change
  `Case_Cards/`). Then send: `Read MASTER_PROMPT_PRACTICALS_v4.md and follow it. SUBJECT: INDEX, GLAUCOMA`.
- **Pass 1 (writing) is finished for every card** (stage `drafted` or later). Do not redraft any card.
- **Pass 2 (examiner) was running in parallel for every card** when this note was written. A card still at `drafted`
  may carry part of its examiner's edits (committed in checkpoint commits) but has no `checks/<ID>_review.md` yet:
  re-run the examiner on it (brief: `Case_Cards/_work/briefs/EXAMINER_BRIEF.md`; it edits in place, so partial edits
  are kept and completed).
- **Fact-check** (brief: `Case_Cards/_work/briefs/FACTCHECK_BRIEF.md`) follows each review; it writes
  `checks/<ID>_check_v4.md` (upgraded cards) or `checks/<ID>_check.md` (GX, G11). A card whose report exists is
  `checked`.
- **Then build** (`Case_Cards/_work/README.md`; file order GX G1 G4 G5 G6 G7 G8 G9 G10 G2 G3 G11) and run the §12 checks
  (`python3 Case_Cards/_work/tools/lint_card.py`, coverage file `checks/01_coverage.md`, render and look at every page).
- Every session must first rebuild the cache (master prompt §10.2): `pip install pymupdf`, extract the books to
  `Case_Cards/_work/cache/txt/`, `npm install` in `Case_Cards/_work/tools/`.
- Cross-card decisions made during this upgrade are CONSISTENCY.md items 11–34; apply them.

Budget decision (candidate, 8 Oct 12:50 IST): finish the running examiner reviews, build and send the PDF, then
independent fact-checks only for GX, G1, G4, G5, G6 (cheaper model); G2's and G5's fact-checks were already running.
Fact-checks for G3, G7, G8, G9, G10, G11 and the index are deferred to a later session.

Questions for the user:
Requests for other subjects:
