# G1 fact-check v4 — Primary open-angle glaucoma, including the glaucomatous optic disc

Checker: independent (did not write or review the card), 8 Oct 2026. Upgrade of a v2 card. The v2 text (3,197 words,
commit 3fcc773) was a different, much shorter layout, so almost the whole v4 card (6,819 words by `wc -w`) counts as new.
I therefore checked every claim against the book text, not only the diff. Pages read in full: BAIDYA fitz 52, 146, 163–180,
195–200, 204–214, 456, 731, 753–754 · NAMRATA fitz 189–196, 201, 218 (steroid-induced glaucoma chapter) · ARAVIND fitz 20–26, 204–214,
220–225, 232–233, 239–245, 256–259, 275–285, 296–297, 303, 311–313, 320–325, 384. The mnemonic PART B was checked in the
mnemonics PDF (page index 50). House wording was checked against `proforma_p01-17.md` (PDF pages 7–9, 13) and
`proforma_p18-31.md` (PDF page 21).

## 1. Summary

- **Claims checked:** about 330 (every number, strength, frequency, cut-off, grade, classification, named sign, mechanism,
  adverse effect, contraindication, diagnosis line, and the factual statements in the history rows, viva answers, traps,
  short case and say-it scripts).
- **Verified, no change:** about 315.
- **Corrected or tightened:** 13 edits (12 content or wording, 1 `@readmore`). Details in section 2.
- **Removed:** 1 term ("port-wine" before haemangioma) and 2 paraphrases that went beyond the book ("vulnerable",
  "laminar dots are pores"), each replaced by the book's wording.
- **Word budget:** builder count **6,047 before and after** (no net words added; the ceiling is 6,050). `wc -w` 6,820 → 6,819.
  `lint_card.py` 6,411 (unchanged).
- **`Q:` count:** 55 (55 `A:`). Builder: 0 warnings. Lint: only the Keywords line and the two quoted book definitions
  are flagged as long sentences (allowed).

### The five items the examiner asked me to look at hardest

1. **Short-case script and Step 6 Record (house wording).** Every sentence is either the department's own wording
   (fundus formula on PDF page 21: red glow, clear media, vessels from the centre branching dichotomously, macula, "indirect
   ophthalmoscopy shows the peripheries to be normal", "+90 D slit-lamp biomicroscopy confirmed"; and the DigiNerve disc
   slide on PDF page 13: size, shape, cup, margins, colour, CDR 0.9, rim, vessels, AV ratio 2:3, peripapillary atrophy,
   wedge-shaped RNFL defects) or a book fact added to it (bayoneting and nasalisation: Baidya fitz 169, Aravind fitz 242;
   red-free light for wedge defects: Baidya fitz 169, Namrata fitz 192). The card does not label any house-only sentence as
   a book fact, so the house wording stays. Two points: I replaced "nasal shift" by the book term **nasalisation**; and
   "The disc is pale" is the slide's wording, not a book finding (see "Confirm with your seniors", item 1).
2. **"How will you know that his glaucoma is progressing?"** All five strands are in the books: glaucoma progression
   analysis compares baseline and follow-up pattern-deviation plots (BAIDYA fitz 206); a deepening, enlarging or new
   scotoma (ARAVIND fitz 225, Q38, which asks for a *reproducible* change; I added that word); OCT event analysis = change
   beyond test–retest variability and trend analysis = rate of change by linear regression (BAIDYA fitz 214); a disc
   haemorrhage predicts rapid progression (BAIDYA fitz 169); nasalisation "can be an indicator for the progression"
   (ARAVIND fitz 242, Q31). No strand is invented.
3. **Myopia row (Aravind fitz 244, Q45).** The book says: faulty IOP measurement from decreased scleral rigidity, and more
   POAG from increasing ovality of the disc through stretching. The card's "the stretched, oval myopic disc is vulnerable"
   was a loose paraphrase; it now follows the book (see table).
4. **Normal-IOP statistics (Aravind fitz 204, Q1–Q2).** 10–21 mm Hg; mean 15.5 ± 2.57; "two standard deviations above the
   mean is approximately 20.5 mm Hg as approximately 95% of the area under a Gaussian curve lies between mean ± 2 SD" — all
   correct on the card. The phrase "the upper end is about 20.5" was ambiguous, so it now says "mean plus 2 standard
   deviations is about 20.5 mm Hg". Asymmetry ≥ 4 mm Hg: BAIDYA fitz 168. The book also calls the limits "a rough
   approximation" and the curve skewed to the right; this is not on the card (not needed).
5. **Pigmentary glaucoma "Younger, 20–30 years".** Matches NAMRATA fitz 192 ("Younger age group 20–30 years") and ARAVIND
   4.10 (fitz 255–257) ("young, 3rd decade"); CONSISTENCY item 28 as corrected. No "30–50" remains on the card.

## 2. Changes made (card order)

| Where on the card | Before | After | Reason and source |
|---|---|---|---|
| `@readmore` | Aravind … 4.15–4.18, 4.20 … | Aravind … 4.15–4.20 … | The mitomycin C dose comes from section 4.19 (ARAVIND fitz 313, "Dosage: MMC: 0.2 to 0.5 mg/ml for 1–5 min"), which was missing from the list. |
| Past history, "Short sight (myopia)?" | Raises POAG risk; the stretched, oval myopic disc is vulnerable. Low scleral rigidity can make the pressure reading faulty. | Raises POAG risk: stretching makes the myopic disc more oval. Decreased scleral rigidity can give a faulty pressure reading. | ARAVIND fitz 244 Q45: "Faulty measurement of IOP due to decreased scleral rigidity"; "increased chances of POAG due to increasing ovality of the disk due to stretching". "Vulnerable" is not in the book. Baidya fitz 167 supports the risk. |
| General and systemic, face and skin | port-wine haemangioma (Sturge–Weber) | haemangioma (Sturge–Weber) | "Port-wine" is in none of the three books; ARAVIND fitz 23 says "Hemangioma (Sturge-Weber)". |
| Step 1 viva, colour vision | Asymmetric dyschromatopsia suggests another optic neuropathy, not glaucoma | … suggests an intracranial lesion, not glaucoma | ARAVIND fitz 244 Q42: asymmetric dyschromatopsia is an indicator of an intracranial lesion; BAIDYA fitz 175: dyschromatopsia is an indication for neuroimaging. |
| Step 4 viva, normal IOP | About 95% of people lie within 2 standard deviations of the mean; the upper end is about 20.5 mm Hg. | About 95% lie within 2 standard deviations of the mean; mean plus 2 standard deviations is about 20.5 mm Hg. | ARAVIND fitz 204 Q2 wording. The old "upper end" did not say what it was the upper end of. Same word count. |
| Step 5 Do (gonioscopy) | a Goldmann lens with coupling fluid | a Goldmann lens with a fluid bridge | ARAVIND fitz 213: gonioprism "placed against the cornea with or without a fluid bridge". "Coupling fluid" is not the book's term. |
| Step 6 viva, laminar dots (short-case block) | Laminar dots are lamina cribrosa pores seen in an advanced cup. | Laminar dots are lamina cribrosa fenestrations, seen in advanced cases. | BAIDYA fitz 168: "Laminar dot sign or linear fenestrations in lamina cribrosa is seen in advanced cases." No book says the dots are "pores". |
| Short-case viva, beta-zone atrophy | the outer alpha zone is irregularly pigmented | … irregularly hypopigmented | ARAVIND fitz 242 Q29: "alpha is characterized by irregular hypopigmentation". |
| Short-case say-it | with bayoneting and nasal shift | with bayoneting and nasalisation | The books' term (BAIDYA fitz 169; ARAVIND fitz 242). Also matches the Step 6 viva and the "three signs". |
| Investigations viva, progression | A deepening, enlarging or new scotoma means progression. | A reproducible deepening, enlarging or new scotoma means progression. | ARAVIND fitz 225 Q38: each change must be "reproducible"; BAIDYA fitz 206: criteria on at least two consecutive tests. |
| Investigations viva, diurnal variation | … rises at night, following aqueous production. | … rises at night, tracking aqueous production. | "following" is on the banned-word list (CARD_SPEC §2.6). Source unchanged: BAIDYA fitz 170 Q8; ARAVIND fitz 239 Q5. |
| Drug table, brimonidine | Brimonidine 0.15%, 0.2% | Brimonidine 0.1%, 0.15%, 0.2% | Newest book lists 0.1%, 0.15% (NAMRATA fitz 193); Aravind lists 0.2% tartrate and 0.15% purite (ARAVIND fitz 278, Q24). The ledger said "card lists all three", but 0.1% was missing. |
| Laser and surgery table, SLT row | Selective laser trabeculoplasty (SLT), or argon (ALT) … (ALT: half controlled at 5 years) | … or argon laser … (argon: half controlled at 5 years) | "ALT" was never expanded (FACTCHECK check 6). Source: ARAVIND fitz 296 Q19 (about 50% controlled at 5 years). |
| Before `## Examiner traps` | no blank line after the last answer | blank line added | Format only. |

## 3. Items not verifiable in the books and removed

- "Port-wine" (haemangioma): in no book. Removed.
- "The stretched, oval myopic disc is vulnerable" and "laminar dots are pores": paraphrases that go beyond the books.
  Replaced by the books' wording (section 2).
- Nothing else was removed. The remaining non-book material is allowed under the spec exceptions: the department's
  recording shorthand and example patient values (proforma PDF pp 7–9), the disc slide (PDF p 13: "pale", CDR 0.9, AV ratio
  2:3), the fundus formula (PDF p 21), the target-pressure worked example (30 × 0.7 − 3 = 18, so 16–20, correct from the
  formula in ARAVIND fitz 24), "N6 at 33 cm" and "He does not smoke or drink alcohol" (example values), the At-a-glance
  framing, and patient-instruction wording ("press the inner corner", "drops are for life").

## 4. Checks 2, 5, 6, 7 and CONSISTENCY

- **Check 2 (five asks): pass.** Every history row has its reason; every negative row names what a "yes" points to and a
  telling-apart sign (Fincham test, Van Herick, gonioscopy, fluorescein staining); Steps 1–7 each have Do, Record and 2–4
  Q/A; the differential's last column names a sign or test; every investigation has its significance; the ladder has an
  aim and triggers; the drug table has mechanism, adverse effects and contraindications for all five classes; the laser and
  surgery table has advantages and disadvantages for all four procedures.
- **Check 5 (priority, keywords): pass.** A script found all 15 Keywords-line terms in a say-it box or a `Q:`/`A:` answer.
  Answers open with their bold keyword. The definitions of glaucoma (BAIDYA fitz 169) and open-angle glaucoma (NAMRATA
  fitz 189) match the books word for word. *(extra)* items: one bullet and one viva (about 2%).
- **Check 6 (terminology, readability): pass after fixes.** No abbreviation inside any `:::say` box (script checked);
  say-it lengths: opening 164, closing 207, short case 139 words. "ALT" is now not used; "following" replaced. Banned words
  ("e.g.", "i.e.", "etc.", "utilise", "initiate", "prior to", "basically", "simply", "approximately") are absent. British
  spelling checked. Lint flags only the Keywords line and the two quoted definitions (allowed). No book names or page
  numbers in the body.
- **Check 7 (format): pass.** Headings in template order; boxes closed and not nested; `Q:` always followed by `A:` (55 and
  55); table rows match headers; `@widths` sum to 100; at most 4 columns; the builder reports 0 warnings.
- **CONSISTENCY:** items 1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 17, 22, 23, 24, 28, 30, 32, 33, 34 checked and met. No
  Kanski material is on the card. The `:::gonio` diagram carries structures only (SS), with no Roman numeral.

## 5. Confirm with your seniors

1. **"The disc is pale" in the department's glaucomatous-disc description** (the slide on PDF page 13, copied into the
   short-case script). No book calls a glaucomatous disc pale, and the card itself teaches that pallor out of proportion to
   cupping points away from glaucoma (BAIDYA fitz 175; ARAVIND fitz 244). Ask whether "pale" means the pale floor of a deep
   cup, and whether to say it.
2. **Cup–disc asymmetry "> 0.2" or "≥ 0.2".** BAIDYA fitz 168 says "≥ 0.2", but BAIDYA fitz 175 and NAMRATA fitz 191, 194
   say "> 0.2". The department's own example (0.8 right, 0.6 left) is exactly 0.2.
3. **Gonioscopy notation.** The sheet writes "modified Shaffer" grade III in every quadrant; the card writes the deepest
   structure (SS), as last year's sheet did. No book says which structure each department grade means (card G9).
4. **Upper limit of normal pressure.** BAIDYA fitz 169 gives 10–21 mm Hg; its NTG page gives 12–22 and "always below 22";
   Aravind says NTG is "less than 21". The card uses 10–21 and "below 22".
5. **Staging cut-offs and "mild".** The books print "MD < −6 dB" for early and "> −12 dB" for severe; the card reads them
   as "−6 dB or better" and "−12 dB or worse" (CONSISTENCY 32). Baidya defines mild as a nasal step or paracentral scotoma;
   Namrata says a normal standard field. This changes the Z value and the 30% target.
