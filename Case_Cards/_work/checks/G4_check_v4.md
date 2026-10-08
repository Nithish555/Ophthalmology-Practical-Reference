# G4 fact-check (v4) — Primary angle-closure disease (PACS, PAC, PACG; after LPI; the acute attack)

Checker: independent fact-checker (did not write the card), 8 Oct 2026. The v2 card was about 3,200 words and the v4 card
is about 6,700, so almost every line is new or rewritten (`git diff 3fcc773` touches 389 lines). I therefore checked the
whole v4 text, not only the diff, against the books: BAIDYA fitz 86, 143, 159–160, 162–172, 178, 186,
223, 455, 729–731, 735, 754 · NAMRATA fitz 191, 193, 196–202, 370 · ARAVIND fitz 210, 213–217, 227–238, 240, 268, 271,
273, 275–285, 292–298, 305, 307, 311, 313. Page images rendered where the text layer is blank or a table is jumbled:
ARAVIND fitz 234 (dark-room and mydriatic test flowcharts), 295 (iridectomy versus iridotomy table), NAMRATA fitz 193
(Table 1, antiglaucoma drugs). Mnemonic checked in `Ophthal mnemonics final.pdf` p.61. Kanski not in the repo; the three
approved Kanski bullets and the Kanski viva answer are word for word as in v2 (diffed; tag kept).

## 1. Summary
- Claims checked: about 330 (every number, dose, grade, cut-off, drug mechanism, adverse effect and contraindication,
  named sign, classification, diagnosis line, prose statement and viva answer).
- Verified as written: about 310. Corrected: 9 facts (11 edits). Removed as unsupported: 5 items (listed in section 3).
  Trimmed for the word budget: 2 items (a duplicate bullet and one sentence).
- Final counts: `wc -w` **6,709** · builder **5,947** words (it was 5,949; budget about 5,950, ceiling about 6,050, so
  net −2) · lint count 6,250 · `Q:` pairs **53** (23 in the nine examination steps, 30 in the viva section) · builder: 0
  warnings. Remaining lint "long sentence" flags: the Keywords line, the quoted book definition and the approved Kanski
  text (all must stay).
- The three things the examiner asked me to look at hardest:
  1. **Apraclonidine "children"**: the row was *right in substance, but the age was missing*. The books disagree (section
     2, rows 1–2). Both rows now read "Children under 2 years".
  2. **The three Baidya cataract facts** (fitz 86, 143, 160): all three verified; no change.
  3. **AS-OCT and UBM statements** (Baidya fitz 729–735, Aravind 4.5): UBM statements verified. Three AS-OCT items the
     books do not give were removed ("360°", "lens vault", "iris against the meshwork") and one AS-OCT role was wrong in
     two scripts (AS-OCT "shows the mechanism"). No AS-OCT parameter value is on the card now.

## 2. Every change
| Where on the card | Before | After | Reason and source |
|---|---|---|---|
| 1. Drugs table, brimonidine, contraindications | "Infants and children" | "Children under 2 years" | BAIDYA fitz 186 (printed p.172, congenital glaucoma Q9): "Avoid α agonists like apraclonidine or brimonidine in children <2 years as these can cause respiratory depression, coma, hypotension, and bradycardia". NAMRATA fitz 193 (p.175, Table 1, α-adrenergic agonists row): "CNS effects and respiratory arrest in young children (contraindicated <2 years)". ARAVIND fitz 278–279 (Q20, Q32): "children and infants". Newest books give the age; matches card GX |
| 2. Drugs table, apraclonidine, contraindications | "Children" | "Children under 2 years" | **Books disagree.** ARAVIND fitz 279: Q20 says "alpha-2 agonists are contraindicated in children"; Q32 names brimonidine; Q31 and Q34 say apraclonidine has "minimal blood brain barrier penetration" and none of clonidine's central side effects. But the two newer books name apraclonidine itself: BAIDYA fitz 186 ("apraclonidine or brimonidine in children <2 years"), NAMRATA fitz 193 (apraclonidine listed in the same row, "contraindicated <2 years"). Newest book wins (FACTCHECK_SPEC rule 3), so the row stays, now with the age. Aravind's view is logged here and in section 5, not on the card |
| 3. Investigations table, AS-OCT row | "non-contact, 360°, seated" · "Objective picture of the angle and lens vault" · "Iris against the meshwork" · "cannot see behind the iris pigment epithelium" | "non-contact, seated" · "Image of the angle" · "An occludable angle" · "limited view behind the iris" | "360°" and "lens vault" come only from the department imaging sheet (IMAGING fitz 22), not from Baidya, Namrata or Aravind (grep: "vault" appears only for ICL vault, BAIDYA). "Occludable angle" is Baidya's ISGEO wording (fitz 165, PACS column: "Anterior segment OCT shows an occludable angle"); "iris against the meshwork" is not. "Limited ability to view structures posterior to the iris" is BAIDYA fitz 730 (printed p.716); "cannot" overstated it. Non-contact and seated verified (fitz 730) |
| 4. Investigations, "Say:" line | "Ultrasound biomicroscopy and anterior segment optical coherence tomography will show the mechanism" | "Ultrasound biomicroscopy will show the mechanism, and anterior segment optical coherence tomography the occludability." | Role error. UBM separates pupillary block, plateau iris and lens-related closure (BAIDYA fitz 729; ARAVIND fitz 227; NAMRATA fitz 200). AS-OCT shows occludability (NAMRATA fitz 200; BAIDYA fitz 165) and has limited view behind the iris (fitz 730) |
| 5. Say-it closing | "I would look for plateau iris with ultrasound biomicroscopy and anterior segment optical coherence tomography." | "I would check occludability with anterior segment optical coherence tomography, and look for plateau iris with ultrasound biomicroscopy." | Same reason as row 4; a thesis candidate must not say AS-OCT finds plateau iris |
| 6. Negative history, "Frequent change of near glasses?" row, last column | "Normal chamber depth; open angle" | "Open angle on gonioscopy" | No book says POAG has a normal chamber depth. Gonioscopy in POAG is done "to exclude angle closure" and shows an open angle (BAIDYA fitz 168, Fig. 4.2 "Gonioscopic view in primary open angle glaucoma"; NAMRATA fitz 191) |
| 7. Differential table, drug-induced ciliary effusion, last column | "Drug history; ultrasound shows ciliary body engorgement" | "Drug history; ultrasound shows supraciliary effusion" | NAMRATA fitz 199 names "ciliary body engorgement or suprachoroidal effusion" as the condition, not as an ultrasound finding. UBM demonstrating supraciliary effusion is BAIDYA fitz 403 (uveal effusion) and fitz 730 |
| 8. Viva, trabeculectomy | "Non-penetrating surgery fails, because the meshwork lies close to the iris root." | "Non-penetrating surgery is relatively contraindicated: the meshwork lies close to the iris root, so filtration may fail." | Overstated. ARAVIND fitz 236 (Q30): "a relative contraindication… effective filtration may not occur" |
| 9. Must know, Prognosis | Good: "appositional closure that opens on indentation; early iridotomy." Poor: "synechial closure over 270°, plateau iris, a combined mechanism, advanced cupping." | Good: "appositional closure, which iridotomy usually relieves." Poor: "synechial closure over 270°, and plateau iris or a combined mechanism, which persist after a patent iridotomy." | No book lists prognostic factors. Rewritten to restate what the books do say: IOP is usually relieved by iridotomy in pupillary block (BAIDYA fitz 165, Q3); synechial closure over 270° is a trabeculectomy indication (ARAVIND fitz 235); plateau iris stays occludable despite a patent iridotomy (BAIDYA fitz 166; ARAVIND fitz 231); in combined mechanism IOP stays high with an open angle (ARAVIND fitz 237). "Early iridotomy" and "advanced cupping" as prognostic factors are in no book: removed |
| 10. Step 6 viva, diurnal variation | "The normal swing is 3–6 mm Hg, and larger in glaucoma." | "…3–6 mm Hg; in glaucoma it is larger, and 8 mm Hg or more is significant." | CONSISTENCY 33: ≥ 8 mm Hg significant on every card that gives diurnal variation. NAMRATA fitz 192 (POAG, diurnal variation: "IOP difference of 8 mm Hg or more between any two reading is significant"); 3–6 mm Hg is BAIDYA fitz 170 (Q8) |
| 11. Step 1 viva, hypermetropia | "Hypermetropia means a short eye, small cornea and thick lens. This crowded front segment is a risk factor for PACG." | "Hypermetropia goes with a short eye. A short axial length, small cornea and thick lens crowd the front segment and raise the risk of PACG." | The books do not say hypermetropia "means" a small cornea and thick lens; they list those as separate anatomical risk factors (ARAVIND fitz 230, Q3; NAMRATA fitz 201, Q2: "Hyperopia [increased lens thickness, small corneal diameters and short axial length]"; fitz 197 "small eye ball in hypermetropia") |
| 12. @readmore | Baidya p.… 164, 209 … · Namrata p.173, 178–184, 352 | Added Baidya p.172 and Namrata p.175 | New source for rows 1–2 (BAIDYA fitz 186 = p.172; NAMRATA fitz 193 = p.175) |
| 13. Must know, Recent advances (trim) | "*(extra)* AS-OCT may detect occludability better than gonioscopy, but gonioscopy remains the gold standard." | Deleted | Budget. The same fact stays in the Investigations row, the "Can imaging replace gonioscopy?" viva answer and the traps. The *(extra)* thesis line remains |
| 14. Step 3 viva (trim) | "…and a flat iris. Pupillary block gives a shallow chamber with a forward-bowed iris." | "…and a flat iris." | Budget. The contrast is in the differential table (plateau row, "convex iris") |

Net effect on the builder count: 5,949 → 5,947.

## 2b. Verified with the points the brief asked about
- **Phacoemulsification in the short eye** (viva, Management — laser and surgery): "shallow anterior chamber" is listed among the
  "other ocular factors… associated with increased PC rent" (BAIDYA fitz 143, printed p.129, Q2). "A hyperopic eye with
  shallow AC depth" is an intraoperative cause of corneal oedema after cataract surgery (fitz 86, p.72, Q1). Choice of
  formula by axial length: "<20 mm Holladay II/Hoffer Q; 20–22 mm Hoffer Q" (fitz 160, p.146). The card matches all three.
- **UBM** (BAIDYA fitz 729–730; ARAVIND fitz 227–228): supine, topical anaesthesia, eye cup 22–24 mm, methylcellulose
  1–2.5%; angle width as linear distance or angle, iris–meshwork area, iris thickness and contour, iris–ciliary body
  relation, confirms plateau iris, distinguishes pupillary block, plateau iris and lens-related closure; penetration "not
  more than 4 mm from the limbus" (CONSISTENCY 27); supine position "may falsely widen the anterior chamber"; images
  through opaque media; 50–100 MHz, axial 25 µm, lateral 50 µm (Aravind); chamber depth among its measurements (Aravind
  Q4); dark-room testing "objective results" (Aravind Q3 i). All on the card as written.
- **UBM versus AS-OCT table** (BAIDYA fitz 730): contact and coupling medium vs non-contact; skilled operator vs not; lower
  vs higher axial resolution; slower vs faster; smaller vs wider field; sees behind the iris pigment epithelium vs limited;
  opaque media vs clear cornea only; supine vs seated. Viva answer matches. AS-OCT "low coherence interferometry,
  resolution higher than UBM" is BAIDYA fitz 735 (p.721). The Visante and Cirrus figures on that page (1320 nm, 840 nm,
  resolutions) are not on the card, correctly.
- **Gonioscopy remains the gold standard; imaging is complementary** — BAIDYA fitz 729. AS-OCT "may be superior in its
  ability to detect angle occludability" — NAMRATA fitz 200. Both on the card in the correct relationship.
- **Standard definition** (Must know): word for word NAMRATA fitz 196 ("e.g." written "for example").
- **ISGEO table**: PACS "three or more quadrants (almost 270 degrees)" (BAIDYA fitz 165, CONSISTENCY 25); PAC "raised IOP
  and/or PAS"; PACG adds glaucomatous optic neuropathy (ARAVIND fitz 229; NAMRATA fitz 200 footnotes); no letter expansion
  (CONSISTENCY 6).
- **Gonioscopy grading** (CONSISTENCY 1): Shaffer, Scheie, Spaeth, occludable-angle line all equal ARAVIND fitz 216–217.
  Cross diagram follows CONSISTENCY 2 and agrees with the Record line and the say-it.
- **Acute-attack ladder and drug table** (ARAVIND fitz 238, 276–283; NAMRATA fitz 200): mannitol 20% 1–2 g/kg over 20–30
  min; acetazolamide 250–500 mg stat then 250 mg four times a day (CONSISTENCY 15); glycerol 50% 1–1.5 g/kg after ruling out
  diabetes; apraclonidine 0.5%; pilocarpine 2% four times over 30 minutes then 6-hourly once IOP < 40; timolol 0.5% twice
  daily with brimonidine 0.2% three times daily; prednisolone acetate 1% four times daily; ibuprofen 500 mg twice daily;
  hourly review; central corneal indentation; YAG PI in both eyes; surgical iridectomy if cornea hazy and closure < 2/3;
  primary trabeculectomy if > 2/3 or persistent inflammation. Mechanisms, adverse effects and contraindications of
  mannitol, glycerol, acetazolamide, pilocarpine, timolol, brimonidine and prednisolone all found (Aravind fitz 276–283,
  268; CAI contraindications per CONSISTENCY 17).
- **Nd:YAG iridotomy** (BAIDYA fitz 455, CONSISTENCY 13, 26): 2–5 mJ, 1–3 pulses, 150–200 µm, 11–1 o'clock, outer third, crypt,
  alpha-2 agonist before and after, oral acetazolamide with advanced damage or high IOP, steroid four times daily for about
  a week; pilocarpine 1% and +55 D Abraham lens (NAMRATA fitz 201); spike ≥ 8 mm Hg or > 30 mm Hg (NAMRATA fitz 202).
  Argon iridoplasty 200–400 mW, 0.1 s, 20–24 spots over 360°, no spot size (ARAVIND fitz 297, CONSISTENCY 13).
- **Antimetabolites** (CONSISTENCY 12): MMC 0.2–0.5 mg/ml for 1–5 min (ARAVIND fitz 313, 315); 5-FU 50 mg/ml for 5 min as
  decided (see section 5, item 4).
- **Provocative tests** (ARAVIND fitz 234–235, page image): dark room 90 minutes awake; mydriatic test pupil 4–6 mm;
  positive > 8 mm Hg or closure.

## 3. Items not verifiable in the three books, removed
- "Lens vault" and "360°" for AS-OCT (department imaging sheet only; row 3).
- "Iris against the meshwork" as the AS-OCT finding (not in the books; replaced by the book's "occludable angle").
- "Normal chamber depth" as a POAG sign (row 6).
- "Ultrasound shows ciliary body engorgement" in drug-induced effusion (row 7).
- "Early iridotomy" and "advanced cupping" as prognostic factors (row 9).

## 4. Checks 2, 5, 6, 7 and the CONSISTENCY items
- **Check 2 (five asks): pass.** Every history row has a reason, every negative row names what a "yes" rules in and gives a
  telling-apart test, each of the nine steps has Do, Record and 2–4 viva pairs, the differential's last column names a sign
  or test (row 7 now names one the book supports), every investigation has its significance (the AS-OCT row now says what
  it can and cannot show), the ladder has aim, triggers and every drug's mechanism, adverse effects and contraindications,
  every laser and operation has advantages and disadvantages. The iridoplasty "disadvantage" matches GX.
- **Check 5 (priority, structure, keywords): pass.** Basics first; *(extra)* items are 2 (under 1%); answers open with
  their keyword; all 14 Keywords-line terms appear in a say-it box or a viva answer (script-checked). Definition equals the book.
- **Check 6 (terminology, readability): pass.** No "e.g.", "i.e.", "etc.", "viz.", "utilise", "initiate", "prior to",
  "basically", "simply"; British spelling; no abbreviations inside the two `:::say` boxes; no book names or page numbers
  in the body; no patient names; abbreviations expanded at first use (script-checked; "Tn" is the department's label and the
  cell beside it says "Tension by Goldmann applanation tonometer (GAT)"). Every new sentence is 20 words or fewer.
- **Check 7 (format): pass.** Headings equal the long-case template in order; all boxes closed and not nested; every `Q:`
  has an `A:`; every table row has the header's cell count; all `@widths` sum to 100; no table over 4 columns. Builder: 0 warnings.
- **CONSISTENCY** applied or confirmed: 1 (grading tables), 2 (cross diagram), 3 (Van Herick), 6 (ISGEO), 11 (CCT 520 µm, 0.7
  mm Hg per 10 µm, < 500, > 570), 12 (MMC, 5-FU), 13 (laser settings), 15 (acetazolamide), 17 (CAI contraindications), 18
  (malignant glaucoma "high or normal"), 20 (mannitol), 23 (glaukomflecken), 24 (watering row), 25 ("almost 270°", Vogt's
  triad), 26 (LPI regimen), 27 (UBM about 4 mm), 33 (diurnal swing, **added now**), 8 (Kanski tag and "Kanski p.377").

## 5. Confirm with your seniors (5 points)
1. **Nd:YAG iridotomy settings** — Baidya 2024 (on the card): 2–5 mJ, optimal size 150–200 µm. Namrata: 4–8 mJ, at least 200
   µm. Aravind: 3–8 mJ, 300–500 µm. Ask what your laser is set at; be ready to say "2 to 5 millijoules, some texts go to 8".
2. **Apraclonidine in children** — Baidya and Namrata (card) list apraclonidine with brimonidine as to be avoided under 2
   years; Aravind says apraclonidine barely crosses the blood–brain barrier and blames brimonidine. Know both statements.
3. **ISGEO extent of iridotrabecular contact** — Baidya (card): three or more quadrants, almost 270°; Aravind: more than
   270°; Namrata: more than 180°. Check which your thesis and your guide use.
4. **5-fluorouracil concentration** — the card prints 50 mg/ml for 5 minutes (CONSISTENCY 12; Aravind's NVG and uveitis
   chapters). Aravind's trabeculectomy chapter (fitz 313, Q65) prints 30 mg/ml for 5 minutes, with MMC at 0.2–0.5 mg/ml for
   1–5 min. Ask what concentration your unit soaks the sponge in. (For the assembler: GX and every card inherit the 50.)
5. **AS-OCT parameters for your thesis** — none of the three books names or gives values for angle opening distance, lens
   vault or similar parameters. The department imaging sheet gives AS-OCT "360° coverage" and "lens vault" (not in the
   books, so not on the card). Use your thesis definitions; know that UBM, not AS-OCT, shows the mechanism behind the iris.

Other book disagreements noted, not on the card: UBM frequency "50–100 MHz" (Aravind, kept) against Baidya's "prototype
models 50 to 80 MHz" with a 4 × 4 mm field (fitz 729); Abraham lens +55 D (Namrata, kept) against +66 D (Aravind);
Vogt's triad (Baidya and Namrata, kept; Aravind's version uses a dilated fixed pupil).
