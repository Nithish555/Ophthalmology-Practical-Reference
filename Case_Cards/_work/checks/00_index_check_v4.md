# 00 Index — independent review and fact-check (v4)

Card source: `Case_Cards/_work/card_sources/00_index.md` (cards A–D, `@kind index`). Writer's notes:
`checks/00_index_v4_notes.md`. Base for "new": commit 3fcc773 (v2, already fact-checked). Every NEW or CHANGED claim
was checked against the per-page book text (`cache/txt/<book>/pNNNN.txt`); one jumbled table (Baidya fitz 180) was
rendered and read. Page numbers below are fitz (0-based PDF index).

## 1. Summary
- **New clinical claims checked:** about 115 (card A about 55, card B about 30, card C about 30; card D has none).
- **Verified unchanged:** about 108. **Corrected or rephrased:** 5. **Removed:** 0 (one unsupported phrase rephrased).
- **Added by the examiner pass:** 5 method gaps filled (card A 1, card B 4); the added clinical facts are all sourced
  below.
- **Build:** 4 cards, **0 warnings** (A 4,955 · B 2,132 · C 1,961 · D 2,346 builder words). `wc -w` = 14,105 (markup
  included). `Q:` pairs = 25 (A 5 · B 10 · C 10). PDF render 24 pages; card B's changed pages looked at.
- **Lint:** only the two quoted book definitions exceed 20 words (glaucoma, Baidya fitz 169; pseudoexfoliation,
  Baidya fitz 182). Keyword and budget lines ignored as instructed.

## 2. Senior examiner's read (cards A–C)
- **Card A — present any long case in 8–10 minutes.** Proforma coverage matches §9.0 item 1 in full (particulars →
  management; ocular rows in the RE | LE order; fundus distant direct → direct → 90 D → indirect). The five-asks method
  and "How to answer any viva question" are both present and complete (the §2.3 table, keyword-first rule, two model
  answers). **Gap filled:** nothing told him how to *say* the 3.5-minute examination block; four bullets added under the
  timing table. The opening script was labelled "the first 2 minutes" but is a 1-minute, ~150-word script (template A
  item 13); relabelled "about 1 minute".
- **Card B — describe any fundus.** Kanski's colour code matches template C item 4 exactly (red, blue, red with blue
  outline, black, yellow, green). **Gaps against template C's order:** no "instruction you may get", no differentials
  heading, diagnosis / investigations / plan merged into one section, no quick recall. Fixed: instruction added first;
  the merged section split into "Complete diagnosis → Differentials → How I will proceed → How I will manage" in
  template order; a sourced worked differential table added; quick recall added last. "Before you dilate" now has one
  Q/A for each of the four checks (lens status was missing).
- **Card C — run any short case.** Follows template B's headings in order (instruction → spot + keywords → focused
  examination with Do / Record / viva → say-it → history → differentials → proceed → manage → must know → viva →
  quick recall), each with a method line and the worked pseudoexfoliation example. Two fixes: a history row asked two
  questions (breaks its own "one question per row" rule); one viva answer did not open with its keyword.

## 3. Every change
| Where | Before | After | Reason and source |
|---|---|---|---|
| A · Ask 4 table, pachymetry row | "A thin cornea (below 500 µm) reads falsely low and is a risk factor. A thick cornea (above 570 µm) reads falsely high" | Adds first: "Goldmann applanation is accurate at 520 µm; the error is about 0.7 mm Hg per 10 µm." Rest unchanged | CONSISTENCY item 11 (same CCT wording on every card). ARAVIND fitz 210; BAIDYA fitz 754; NAMRATA fitz 196 |
| A · Ask 5 say-it, follow-up | "I will repeat the field every six months and gonioscopy every year." | "I will repeat the field every six months, or every three months if advanced. I will repeat gonioscopy every year." | Incomplete: the book gives 6-monthly (mild–moderate) and 3-monthly (advanced). NAMRATA fitz 194; gonioscopy yearly ARAVIND fitz 240 |
| A · Ask 5 say-it, counselling | "I will counsel him that the drops are lifelong and that lost vision does not return." | "I will counsel him that glaucoma is chronic, so the drops and the follow-up must continue. Lost vision does not return." | "Lifelong" is in none of the three books (grep). Rephrased to what they support: chronic disease (BAIDYA fitz 169), compliance at each visit (NAMRATA fitz 194), irreversible damage (BAIDYA fitz 169) |
| A · How to present, after the timing table | — | New "Saying the examination (minutes 4–7.5)": row by row, right eye then left; group normal rows; slow on the key structure, describe then "suggestive of"; pressure with method and time, then special tests | Method gap. Non-clinical; built from the card's own RE \| LE rule, the timing table's "brisk on normal rows" and the house "suggestive of" format (CARD_SPEC §5) |
| A · heading | "Model opening — the first 2 minutes" | "Model opening — about 1 minute" | Template A item 13: opening about 1 minute (150–200 words); the script is ~150 words |
| B · new first section | — | "The instruction you may get": "Examine the fundus of this patient." Do exactly that, in order; introduce yourself and take consent first | Template C item 1 (master prompt §9 C) |
| B · Before you dilate, Q2 | "It can only be looked for before the pupil is dilated." | "Look for it before the pupil is dilated." | Overstated. Book: "important to look for RAPD before pupil dilation". NAMRATA fitz 236 |
| B · Before you dilate | — | New Q/A: "Why record the lens status?" — explains part of the vision loss; every diagnosis line carries it ("NS-2", "PCIOL") | Template C item 2 wants 1 Q/A per check. Content reuses the card's own v2 table row (department convention) |
| B · after the description table | "The diabetic retinopathy write-up follows this order exactly." | "…follows this order as far as the macula, where it stops." | Wrong: the department's DR write-up (proforma PDF p 30) ends at "Macula: Edema ⊕"; no periphery or +90 D line (`transcripts/proforma_p18-31.md`) |
| B · abnormal say-it heading | "(the department's diabetic retinopathy write-up)" | "(… write-up, with the last two steps added)" | Same reason; the periphery and +90 D lines come from the department formula (CARD_SPEC §5) |
| B · "Diagnosis, investigations and plan" | One section, three bullets and the test table | Split into "Complete diagnosis" · "Differentials" · "How I will proceed" (table unchanged) · "How I will manage" (Plan and Management bullets unchanged) | Template C order (items 6–9) |
| B · new Differentials | — | Method line + worked table "haemorrhages and hard exudates in one fundus": diabetic retinopathy (microaneurysms the earliest sign, dot and blot haemorrhages, hard exudates) · CRVO (flame and blot haemorrhages in all four quadrants, dilated tortuous veins, "blood and thunder") · hypertensive retinopathy (arteriolar narrowing and AV crossing changes first; haemorrhages and cotton-wool spots later) · drusen v hard exudates (round or oval, whitish or yellowish, punched-out choroidal or RPE atrophy; exudates waxy yellow, distinct margins, with microaneurysms and haemorrhages) | Template C item 7 had no example. BAIDYA fitz 246; NAMRATA fitz 236; BAIDYA fitz 287 (Keith–Wagener–Barker), ARAVIND fitz 375; ARAVIND fitz 359 (6.3 Q23) |
| B · new Quick recall (last) | — | 6 lines: description order; lesion formula; four checks before dilating; AV ratio 2:3 after the first branching; colour code (two lines) | Template C item 11. Facts already on the card: BAIDYA fitz 762 (AV ratio); ARAVIND fitz 398 (colours) |
| B · @readmore | …6.1; 6.3; 6.6; 6.8 · Baidya p.231, 249… | Adds Aravind 6.5; Baidya p.232 and p.273 | Printed pages for the new differential sources (Baidya fitz 246 → p.232, fitz 287 → p.273) |
| C · History table | "Any coloured haloes, or headache with vomiting?" | "Any coloured haloes?" (reason unchanged) | Two questions in one row breaks ask 1's "one question per row" rule, which this card teaches. Reason: ARAVIND fitz 262 |
| C · Step 1 viva answer | "The hallmark flecks and the loss of the pupillary ruff are on the **pupillary margin**." | "The **pupillary margin** carries the hallmark flecks and shows loss of the pupillary ruff." | Keyword first (§2.5). Facts unchanged: BAIDYA fitz 181; NAMRATA fitz 221 |

**Notes-ledger page slip (no card change):** the coloured-pencil list is BAIDYA **fitz 761**, not 762.

**Verified without change (main new claims, with pages):** haloes and the Fincham test (ARAVIND 232); acute attack
symptoms (NAMRATA 196; BAIDYA 162) and pupil (BAIDYA 164; ARAVIND 232 Q19); frequent change of glasses and night
blindness (ARAVIND 22); angle recession and steroid glaucoma (NAMRATA 192; ARAVIND 4.13 for "open angle"); beta-blockers
in asthma (NAMRATA 193); before-dilating checks (NAMRATA 236, 214; BAIDYA 378, 571; ARAVIND 36); tonometry order and
the 4–5 mm Hg rise (NAMRATA 195; BAIDYA 164, 168); +90 / +78 D (NAMRATA 191; BAIDYA 168); no dilating until
iridotomy (BAIDYA 164; NAMRATA 199); PART B (mnemonics PDF p 51); Hirschberg 7° / 15° / 30° (BAIDYA 571); Van Herick as
an initial guide (BAIDYA 168); OHT and NTG (NAMRATA 192; BAIDYA 173–174); gonioscopy purpose (BAIDYA 168); 24-2 / 30-2
and defects (ARAVIND 224, 221); mean deviation −6 / −12 dB (BAIDYA 178; ARAVIND 225); diurnal swing ≥ 8 mm Hg
(NAMRATA 192); OCT double hump (BAIDYA 212); target pressure (BAIDYA 175); latanoprost (NAMRATA 193; ARAVIND 281, 285
Q72); review at 2 months (ARAVIND 25); fixed combinations (ARAVIND 284 Q66–67); laser trabeculoplasty use and SLT
(NAMRATA 194; ARAVIND 297 Q22); LT contraindications (BAIDYA 180, rendered); trabeculectomy indications (NAMRATA 194),
flap (ARAVIND 301 Q4), complications (ARAVIND 311 Q50); glaucoma definition verbatim (BAIDYA 169). Card B: distant
direct ophthalmoscopy (ARAVIND 59); AV ratio (BAIDYA 762); haemorrhage shapes and cotton-wool spots (ARAVIND 359);
direct v indirect (BAIDYA 758); colour codes (ARAVIND 398; BAIDYA 762–763); diabetes duration (BAIDYA 245); renal
function (BAIDYA 262); BRVO risks (BAIDYA 272); RP history (BAIDYA 332); OCT in DME (BAIDYA 263); FFA (ARAVIND 347,
385); B-scan and basic tests (BAIDYA 300); department write-ups (proforma PDF pp 21, 30). Card C: every
pseudoexfoliation fact (BAIDYA 171, 181–183; NAMRATA 221–225; ARAVIND 259–264).

## 4. Coverage map (card D)
- **Checklist lines:** all **104** present (37 long, 67 short), compared by script against
  `pdftotext -layout MS_Ophthalmology_Practical_Long_Short_Case_Checklist.pdf -`. Wording is exact, including the
  checklist's own spellings ("NPDR with macular edema", "Hyphema"). Within each subject and long / short group the lines
  are in the printed order.
- **Card and block:** every line matches §8.3. Where §8.3 names a card without a block (R4 short, Hypopyon under
  CORNEA, Pseudoexfoliation under MISC), the card uses the checklist wording, as §8.3's block rule says, consistent with
  the owning subject's own line.
- **Card list:** matches §8.1 exactly — IDs, titles, types and ★ for all seven files; toolkits first; G11 "Other
  glaucomas the examiner may ask: childhood and secondary glaucomas *(extra)*" last in glaucoma, type V (its source is
  `@kind viva`). V1–V3 are typed C, as in v2 (§8.1 gives the viva file no type column).
- **Badge:** 68 cards (12 + 18 + 12 + 10 + 7 + 6 + 3), 6 toolkits, 21 ★ (glaucoma 8, retina 7, cornea 2, misc 3,
  nerves 1) — correct. ★ counts agree with §6.
- **No change needed on card D.**

## 5. Checks 2, 5, 6 and 7
- **Check 2 (five asks):** the method on card A covers all five; the worked examples carry reasons, tell-apart tests,
  purposes and triggers. Fixed: card C's two-question history row; card B's missing differential method and example.
- **Check 5 (priority, structure, keywords):** answers follow the §2.3 shapes; one answer made keyword-first. Card C's
  10 keywords all appear in a say-it or an answer. Cards A, B and D carry no keyword line; they are method and index
  cards, and the lint line was ignored as instructed.
- **Check 6 (readability):** no sentence over 20 words outside tables except the two quoted definitions; no "e.g.",
  "i.e.", "etc.", "viz." or other banned words; no abbreviations inside any `:::say` (lint); British spelling except the
  checklist's own words in the coverage map; no book names or pages in the body; no patient names or numbers.
- **Check 7 (format):** builder 0 warnings; every table ≤ 4 columns with matching cells; `@widths` sum to 100; boxes
  closed and not nested; every `Q:` has its `A:`.

## 6. Confirm with your seniors
1. **Hirschberg values.** The card follows Baidya (pupillary border 7°, mid-iris 15°, limbus 30°; BAIDYA fitz 571).
   Aravind gives pupillary border 15° and mid-iris 30°, with 1 mm of decentration = 7° (ARAVIND fitz 638–639). Ask
   which set the department expects.
2. **Distance for distant direct ophthalmoscopy.** The card keeps the department's "one arm's distance" (ARAVIND fitz 59:
   2 feet). Baidya says 22–25 cm (BAIDYA fitz 758).
3. **Drusen colour in the drawing.** Standard code yellow (Baidya fitz 763); Aravind 1.7 says black (fitz 64); your
   department's sheets use orange.
4. **Gonioscopy wording.** The department writes "by modified Shaffer's grading" but the books do not define that
   system; the card writes the deepest structure seen in each quadrant (CONSISTENCY items 1–2).
5. **Iris transillumination defects in pseudoexfoliation versus pigment dispersion.** Card C (Namrata, newer) puts
   pseudoexfoliation defects at the pupillary margin and pigment dispersion defects mid-peripheral (NAMRATA fitz 221,
   223, 225). Aravind 4.11 calls the pseudoexfoliation defects mid-peripheral (ARAVIND fitz 260).
