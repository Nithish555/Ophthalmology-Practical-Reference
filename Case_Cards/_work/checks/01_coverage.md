# 01 GLAUCOMA — coverage check (master prompt §12 check 1), v4 build of 8 Oct 2026

Checked on the BUILT file `Case_Cards/01_Glaucoma_Case_Cards.pdf` (93 pages, 12 cards, 0 builder warnings) with
`pdftotext`.

## Every §8.1 card present
GX (toolkit) · G1 · G4 · G5 · G6 · G7 · G8 · G9 · G10 · G2 · G3 — all present, in this order — plus G11 (extra viva
sheet, added on the candidate's request for wider topic coverage).

## Every checklist line owned by GLAUCOMA (§8.3)
| Checklist line | Long / short | Card | Block on the built file |
|---|---|---|---|
| POAG | Long | G1 | Whole card |
| PACG | Long | G4 | Whole card |
| POAG with trabeculectomy | Long | G2 | Whole card |
| POAG with GDD | Long | G3 | Whole card |
| Neovascular glaucoma (NVG) | Long | G5 | Whole card |
| Pseudoexfoliative glaucoma | Long | G6 | Whole card |
| Applanation tonometry | Short | G8 | Whole card |
| Gonioscopy | Short | G9 | Whole card |
| POAG disc / glaucomatous optic disc | Short | G1 | "Glaucomatous optic disc" — present |
| CRVO with POAG | Short | G7 | Whole card |
| Pseudoexfoliation | Short | G6 | "Pseudoexfoliation" — present |
| Pseudoexfoliation (MISC list) | Short | G6 | "Pseudoexfoliation" — present |
| Rubeosis iridis (MISC list) | Short | G5 | "Rubeosis iridis" — present |

Result: 13 / 13 present.

## Typed format (Case Format/Glaucoma Case Presentation Format.pdf)
Every history and examination point of the typed format was searched for in the built glaucoma file and the built
index. 59 of 71 points are on the glaucoma cards. The other 12 — head and ocular posture, skin naevi and phakomatosis,
Lisch nodules, patent ductus arteriosus with congenital rubella, lid hyperpigmentation, conjunctival follicles,
adrenochrome pigmentation, retrolental cells and vessel tortuosity — are listed on the index (card A, "Case-specific
add-ons", glaucoma row), which carries the generic proforma. Result: all typed-format points covered.

## Other §12 checks (this build)
- Check 2 (five asks): `tools/check_five_asks.py` — all 12 cards PASS (it fails the v2 card, as it should).
- Check 3 (examiner review): `checks/<ID>_review.md` exists for every card, with the read-and-answer test.
- Check 4 (independent fact-check): done for GX, G1, G2, G4, G5, G6 and the index. **Deferred** (candidate's budget
  decision, 8 Oct): G3, G7, G8, G9, G10, G11 — their v2 text was fact-checked on 7 Oct; their new v4 text has the
  writer's ledger and the examiner's review but no independent check yet.
- Checks 5–6 (keywords, structure, readability): `tools/lint_card.py` — every keyword used in a say-it or an answer;
  no abbreviation inside a say-it box; no banned words; the only sentences over 20 words are quoted book definitions,
  exam diagnosis lines, mnemonics and the approved Kanski passages.
- Check 7: pages rendered and inspected (cover, toolkit tables, history tables, steps, gonioscopy cross diagrams,
  say-it boxes, trap and recall boxes, G11); no stray markup in the text layer.
- Check 8 (privacy): no 6–7-digit hospital number and no patient name in the card sources or the built files.
- Check 9: the five points to confirm with seniors are in `_work/01_Glaucoma_working_notes.md`.
