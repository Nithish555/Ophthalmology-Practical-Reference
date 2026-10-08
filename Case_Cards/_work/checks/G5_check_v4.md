# G5 fact-check v4 — Neovascular glaucoma, including rubeosis iridis

Independent checker, 8 Oct 2026. The v2 text at commit 3fcc773 is covered by `G5_check.md`. The v4 card is mostly
rewritten (405 lines added, 183 removed), so nearly the whole card was checked again, claim by claim, against the
per-page book text. Jumbled tables were rendered from the PDFs: Baidya fitz 180 (laser trabeculoplasty table) and
fitz 592 (cycloplegic table).

## 1. Summary
- **Claims checked:** about 270 new or changed claims, including all 14 examiner additions. Unchanged v2 text was
  spot-checked.
- **Verified unchanged:** about 255. **Corrected:** 10. **Gap filled from a book:** 1 (atropine adverse effects).
  **Format fixes:** 2 abbreviations expanded, plus the `@readmore` line. **Removed:** none.
- **Final word count:** builder **5,893** (budget 5,850, up to about 6,050 acceptable); lint 6,240; `wc -w` 6,621.
- **`Q:` count: 57** (19 in the examination steps, 33 in the viva section, 5 in the short-case block). Every `Q:` has an
  `A:`.
- Lint flags only the allowed long lines: the Keywords line, the quoted book formula, the quoted Baidya definition,
  the book's rubeosis definition and the RUBEOTIC mnemonic. The builder reports no warnings.

### The examiner's five focus points
1. **CRVO / ocular ischaemic syndrome / diabetic retinopathy table (BAIDYA fitz 281).**
   - Confirmed for ocular ischaemic syndrome: veins dilated but not tortuous; dot and blot haemorrhages in the
     mid-periphery; disc normal; choroidal filling delayed.
   - Confirmed for CRVO: veins dilated and tortuous; flame haemorrhages throughout the fundus; disc swollen.
   - Corrected: the book's third column is **NPDR**, "always bilateral", with hard exudates "always present" and
     haemorrhages and microaneurysms at the posterior pole. The book does not place the hard exudates at the posterior
     pole, as the card did. "Choroidal filling delayed" is an angiography row, so the card now says so.
   - The ischaemic CRVO criteria are all confirmed (BAIDYA fitz 281–282): counting fingers or worse; RAPD over 0.7 log
     unit; extensive haemorrhages; marked disc and macular oedema; cotton-wool spots "more in numbers"; ERG
     **"Always depressed"**, the book's own words. The cotton-wool wording was tightened. Namrata (fitz 238) agrees
     that the ERG is reduced in ischaemic CRVO (b-wave below 60% of normal, reduced b:a ratio). The card keeps
     Baidya's wording.
2. **"10 disc areas" versus "10 DD".** Both books describe the same thing: the CVOS threshold for ischaemic CRVO.
   - Baidya's table (fitz 282, Q4 and Q7) prints "10 DD". Elsewhere Baidya uses DD for disc diameter (fitz 317,
     "½ DD (disc diameter)").
   - Baidya's own FFA text (fitz 284) says "capillary nonperfusion ranging from 10 to 30 **disc areas**".
   - Namrata gives the CVOS definition as "10 disc areas" (fitz 238). Its CRVO table (fitz 235) says "disc area(s)", though
     one risk-factor line (fitz 240) says "10 DD".
   - Kept as **"10 disc areas"**. This is the newest book's own prose wording, Namrata's explicit CVOS definition, and
     the wording on card G7. Listed for the seniors because Baidya's table wording differs.
3. **Iridotomy contraindication.** Every piece is in the books.
   - Mechanism: secondary angle closure without pupillary block, by an anterior "pulling" membrane (ARAVIND fitz 229,
     4.6 Q1).
   - Neovascular glaucoma is a contraindication to laser peripheral iridotomy (ARAVIND fitz 293, 4.17 Q5).
   - ALT is contraindicated in NVG (ARAVIND fitz 296, 4.17 Q15). Laser trabeculoplasty is contraindicated in "NV
     glaucoma" (BAIDYA fitz 180, Q35; the rendered table confirms the column, and fitz 456 repeats it).
   - Caveat: the same Aravind section (fitz 293, Q7) lists the "angle closure stage of neovascular glaucoma" among
     the conditions where an **argon** laser is preferred over Nd:YAG for iridotomy. That is a contradiction inside
     the older book. Baidya and Namrata say nothing on iridotomy in NVG.
   - The card answer is kept, because the mechanism and two contraindication lists support it. Listed for the
     seniors.
4. **Diode cyclophotocoagulation and antimetabolites (CONSISTENCY 12–13).**
   - Cyclophotocoagulation: "1.5–2 s and 1500–2000 MW [mW]"; "approximately 12–24 burns … posterior to the limbus over
     360° avoiding … 3 and 9 o'clock" (BAIDYA fitz 455). This matches GX word for word.
   - Mitomycin C 0.2–0.5 mg/ml for 1–5 minutes, and 5-fluorouracil 50 mg/ml for 5 minutes or 5 mg subconjunctival
     injections. This matches CONSISTENCY 12 and GX (ARAVIND 4.19). `@readmore` now cites Aravind 4.19.
   - Other cyclophotocoagulation claims:
     - "Repeatable after a month": ARAVIND fitz 331, Q21.
     - "Quick": ARAVIND fitz 330, Q15.
     - Uveitis, hypotony, malignant glaucoma, sympathetic ophthalmia: ARAVIND fitz 331–332, Q23.
     - Phthisis: BAIDYA fitz 189, "Hypotony and phthisis bulbi are complications" of cyclophotocoagulation. Printed
       p.175 was added to `@readmore`.
5. **Anti-VEGF agents and retrobulbar alcohol.**
   - Anti-VEGF descriptions (NAMRATA fitz 301): verified, with one wording fix. Ranibizumab is a "humanized monoclonal
     antibody fragment" binding "all isoforms of VEGF-A".
   - Anti-VEGF doses: BAIDYA fitz 265 (CONSISTENCY 19).
   - Retrobulbar alcohol (ARAVIND fitz 236): 2–3 ml of lignocaine; effective 3–6 months; transient ptosis, eyelid
     swelling and ocular movement restriction — all verified.
   - Corrected: the book says "a **1 ml syringe** containing 95–100% alcohol", not "1 ml of alcohol".

## 2. Changes
| # | Where on the card | Before | After | Reason and source |
|---|---|---|---|---|
| 1 | Viva › Diagnosis, ocular ischaemic syndrome vs CRVO vs diabetic retinopathy | "The disc is normal and choroidal filling is delayed. … Diabetic retinopathy is bilateral, with hard exudates at the posterior pole." | "The disc is normal; angiography shows delayed choroidal filling. … Non-proliferative diabetic retinopathy is always bilateral, with hard exudates and posterior-pole haemorrhages." | The book's column is NPDR ("always bilateral", hard exudate "always present"; haemorrhages and microaneurysms at the posterior pole). Choroidal filling is an angiographic row — BAIDYA fitz 281 |
| 2 | Viva › Diagnosis, ischaemic vs non-ischaemic CRVO | "Haemorrhages, cotton-wool spots and disc and macular oedema are more extensive." | "Haemorrhages and disc and macular oedema are more marked, and cotton-wool spots more numerous." | The book's wording: "extensive and profound haemorrhages", "marked macular and disc oedema", cotton-wool spots "more in numbers" — BAIDYA fitz 281–282 |
| 3 | The ladder, step 4 (anti-VEGF) | "So it is an adjunct, given 2–3 days before PRP or surgery." | "So it is an adjunct to PRP, and I give it 2–3 days before surgery." | Baidya's 2–3 days is before "PPV + PRP + filtration surgery/valve" (BAIDYA fitz 194). CONSISTENCY 19 applies it to glaucoma surgery. Namrata's window "before PRP or surgical intervention" is usually 1 week (fitz 212). The laser-table row "(before PRP or surgery)" carries no timing and stays |
| 4 | The ladder, step 7 (useful vision) | "A glaucoma drainage device (Ahmed valve) is often the first choice." | "… is often the primary operation when filtering surgery is likely to fail." | "GDDs are often considered as a primary surgical procedure … where there is a high risk for failure of conventional filtering surgery" — NAMRATA fitz 213 |
| 5 | Drugs table, atropine | Mechanism "Cycloplegic: rests the iris and ciliary body"; adverse effects "Long-lasting cycloplegia: the strongest, longest-acting cycloplegic" | Mechanism adds "the strongest, longest-acting cycloplegic"; adverse effects "Mydriasis 7–10 days, cycloplegia 6–12 days; flushing, tachycardia, fever, delirium" | Five-asks gap (the ledger said no book lists atropine adverse effects). Found in BAIDYA fitz 592 (printed p.578, cycloplegic table, rendered) and ARAVIND fitz 198. `@readmore` now cites p.578 |
| 6 | Must know › related terms, ocular ischaemic syndrome | "the ocular features of chronic hypoperfusion of the eye's whole arterial supply (carotid or ophthalmic artery occlusion)" | "the ophthalmic features of chronic hypoperfusion of the entire arterial supply to the eye. The block lies in the carotid or ophthalmic artery." | Book wording ("constellation of ophthalmic features … chronic hypoperfusion of the entire arterial supply to the eye"); split to stay under 20 words — ARAVIND fitz 559 (7.16 Q4) |
| 7 | Step 4 viva, pressure by stage | "Persistently high, up to 60 mm Hg" | "Persistently high, and it can reach 60 mm Hg" | The same book prints "> 60 mm" in its table (fitz 211) and "can go up to 60 mm Hg" in the text (fitz 214). The new wording matches the classification table on this card and the v2 check (row 4) — NAMRATA |
| 8 | Positive history, "Similar attacks before?" | "NVG can follow recurrent angle-closure attacks." | "NVG can be associated with recurrent angle-closure attacks." | The book says "can be associated with", not that it follows them — NAMRATA fitz 210 |
| 9 | Viva › drugs, anti-VEGF agents | "Ranibizumab … is an antibody fragment against all forms of VEGF-A." | "… is a humanised antibody fragment against all isoforms of VEGF-A." | The book's terms — NAMRATA fitz 301 |
| 10 | Viva › laser and surgery, retrobulbar alcohol | "I change to a syringe with 1 ml of 95–100% alcohol." | "I change to a 1 ml syringe of 95–100% alcohol." | "the syringe is replaced with a 1 ml syringe containing 95–100% alcohol" — ARAVIND fitz 236 (4.6 Q33) |
| 11 | Step 2 viva, ectropion uveae | Membrane-traction mechanism only | Adds "Repeated uveitic attacks with the rubeosis add to it." | Books disagree. The newest book gives "due to repeated uveitic attack as a part of NVI" (BAIDYA fitz 192). Traction is in ARAVIND fitz 246 (Q4) and NAMRATA fitz 214, 248. Both are now on the card; traction is kept first because two books give it and Baidya itself links closure to "traction caused by the fibrovascular band" (fitz 193) |
| 12 | Step 6, Do | "+90 D" | "+90 dioptre (D)" | Abbreviation not expanded at first use (v2 expanded it) |
| 13 | Investigations, blood tests | "**HbA1c**" | "glycated haemoglobin (**HbA1c**)" | Abbreviation not expanded at first use |
| 14 | `@readmore` | "Baidya p.…, 176–180, 231, 235, …, 448, 626–627 · … Aravind …, 4.18, 4.20, …" | "Baidya p.…, 175–180, 231, 234–235, …, 448, 578, 626–627 · … Aravind …, 4.18, 4.19, 4.20, …" | p.175 (fitz 189, phthisis after cyclophotocoagulation); p.234 (fitz 248, floaters, total blackout, neuropathy and nephropathy — the ledger cited fitz 249); p.578 (fitz 592, atropine); Aravind 4.19 (antimetabolite doses, CONSISTENCY 12) |

### New claims verified without change (main sources)
- **Positive history.**
  - Pain and the angle-closure stage: NAMRATA fitz 214, Q7, "most patients present … at this stage".
  - Haloes from epithelial oedema: ARAVIND fitz 232.
  - No precipitating factor: BAIDYA fitz 190.
  - Dimness before pain; sudden or gradual loss: NAMRATA fitz 210; BAIDYA fitz 190.
  - New vessels after CRVO, NVI at 2–4 months: NAMRATA fitz 240.
  - NVG after ischaemic CRVO at 3–5 months: ARAVIND fitz 249. This follows CONSISTENCY 31.
  - Rubeosis after CRAO in 16–18% within 4–5 weeks: BAIDYA fitz 291.
  - Floaters and sudden total loss from vitreous haemorrhage: BAIDYA fitz 248.
  - Hypermetropia and chronic angle closure leading to NVG: BAIDYA fitz 191; NAMRATA fitz 213.
  - Duration of diabetes, control, hypertension and cholesterol: BAIDYA fitz 245, 251; ARAVIND fitz 249, Q16.
  - Ocular ischaemic syndrome symptoms (ocular angina 40%, amaurosis fugax 10%, slow recovery after light,
    transient neurological deficits): ARAVIND fitz 559.
  - Surgical barriers and Nd:YAG capsulotomy: NAMRATA fitz 214, Q8; ARAVIND fitz 247, Q5 G.
- **Negative history.**
  - Giant cell arteritis: jaw claudication; scalp tenderness most specific; ESR over 60 mm/hr (BAIDYA fitz 640–641).
  - Carotid–cavernous fistula: arterialised episcleral veins "the hallmark", chemosis, exophthalmos, ocular ischaemia
    (ARAVIND fitz 557).
  - Fuchs' heterochromic iridocyclitis: ARAVIND fitz 250, Q19.
  - Angle recession: ARAVIND fitz 249, Q18 v.
- **Past history and drugs.**
  - Beta-blocker contraindications: ARAVIND fitz 276.
  - CAI contraindications: ARAVIND fitz 281, Q42 (CONSISTENCY 17).
  - Hyperosmotic contraindications: ARAVIND fitz 282, Q50.
  - Glycerol not in diabetes: ARAVIND fitz 253.
  - Aspirin: BAIDYA fitz 300. Warfarin: ARAVIND fitz 322.
  - Under 60 and hypercoagulable states: BAIDYA fitz 284.
  - Smoking and nephropathy as risk factors: BAIDYA fitz 251.
  - Mechanisms, adverse effects and doses in the drug table:
    - Timolol, brimonidine and dorzolamide: ARAVIND fitz 276–281.
    - Hyperosmotics: ARAVIND fitz 281–283.
    - Prednisolone: ARAVIND fitz 201.
    - Acetazolamide 250 mg two to four times a day (CONSISTENCY 15) and mannitol 20%, 1–2 g/kg over 20–30 minutes
      (CONSISTENCY 20).
- **Examination.**
  - Long-standing corneal, iris and lens signs, festooned pupil, "IOP considered in a higher range", cycloplegia as
    treatment: BAIDYA fitz 192–193.
  - Tonopen: ARAVIND fitz 211, Q48. Anhydrous glycerin: ARAVIND fitz 233, Q24. UBM through corneal oedema: ARAVIND
    fitz 228.
  - Optociliary shunts: BAIDYA fitz 287, Q18.
  - Fellow-eye CRVO risk 1% a year, 7% in 5 years: BAIDYA fitz 281.
  - Open-angle glaucoma associated with CRVO: BAIDYA fitz 283, Q10.
  - PAS mark where the tube must not go: ARAVIND fitz 322.
- **Investigations.**
  - FFA once the haemorrhages clear: BAIDYA fitz 284.
  - Arm-to-retina time over 20 s, carotid colour Doppler, angiography as the gold standard: ARAVIND fitz 560–561.
  - B-scan: BAIDYA fitz 300; NAMRATA fitz 238.
  - Blood tests: BAIDYA fitz 284.
  - Thrombophilia screen and ESR in younger patients: NAMRATA fitz 237.
  - OCT and anti-VEGF for macular oedema: NAMRATA fitz 238.
- **Management.**
  - PRP settings (500 µm, 0.1 s, mild white burns one burn-width apart, out to the equator, 1200–1600 burns, 532 nm,
    3–4 sittings 3–4 weeks apart): BAIDYA fitz 451–452.
  - Risks of a single PRP sitting and PRP adverse effects; indirect laser for hazy media: BAIDYA fitz 452.
  - Prompt PRP per the CVOS, and prophylactic PRP when follow-up is not possible or with risk factors: BAIDYA
    fitz 286–287.
  - Anti-VEGF returns "to a higher extent" when stopped: BAIDYA fitz 286.
  - Intravitreal injection 4 mm from the limbus (phakic), 26/30 G needle: BAIDYA fitz 462.
  - Drainage devices — one-step valved device, smaller IOP fall, complications: ARAVIND fitz 325–327.
  - NVG as a poor-prognosis eye and a high-risk indication for an antimetabolite: ARAVIND fitz 306, 314.
  - Endarterectomy for symptomatic severe stenosis: ARAVIND fitz 562.
- **Viva.**
  - Ischaemic CRVO statistics (NVI 49%, NVA 37%, NVG 29% within 6 months; 45% NVG at 3 years): BAIDYA fitz 282–283.
  - Why NVI is commoner than NVD in CRVO: BAIDYA fitz 283, Q12.
  - Theories, origin, types of glaucoma, Wand's classification: ARAVIND fitz 247–249.

## 3. Items not verified and removed
- None. No v4 claim was missing from all three books.

## 4. Checks 2, 5, 6 and 7
- **Check 2 (five asks): pass after one fix.**
  - Every history row gives its reason.
  - Every negative row names what it rules out and how to tell them apart.
  - All seven steps have Do, Record and Viva.
  - The last differential column names a sign or test in every row.
  - Every investigation has its significance.
  - The ladder has an aim and triggers.
  - Fixed: the atropine row had no real adverse effects; they were filled from BAIDYA fitz 592.
  - Gap remaining: no book lists the complications of intravitreal injection (examiner and ledger agree).
- **Check 5 (priority, structure, keywords): pass.**
  - Basics come first in each section.
  - *(extra)* is limited to the two recent-advances items.
  - Answers open with the bold keyword.
  - The definition is Baidya's Q1 verbatim, and rubeosis iridis is Aravind's wording.
  - The ocular ischaemic syndrome related term is now in the book's wording.
  - All 14 keywords appear in a say-it script or viva answer (checked by script).
- **Check 6 (terminology and readability): pass after fixes.**
  - Fixed: "D" and "HbA1c" are now expanded at first use.
  - No banned words; British spelling (checked by script).
  - No abbreviation or capitalised acronym inside the three `:::say` boxes (checked by script).
  - No sentence over 20 words except the allowed quoted or definition lines.
  - No book names in the body; no patient names.
- **Check 7 (format): pass.**
  - Headings are in template A order.
  - Boxes are closed and not nested; Q/A pairs sit outside boxes.
  - Every table row matches its header; all `@widths` sum to 100; at most 4 columns.
  - The gonioscopy cross shows the deepest structure only (CONSISTENCY 2).
  - The builder reports 0 warnings.
- **CONSISTENCY: applied.**
  - Items 9, 12, 13, 15, 17, 19, 20 and 31 are checked and matching. Item 19 timing was tightened (change 3).
  - Items 2–3 are checked and matching.
  - Items 11, 14, 18 and 22 are not touched by this card beyond the matching mentions.

## 5. Confirm with your seniors
1. **Laser iridotomy in NVG.** The card says it is contraindicated, because there is no pupillary block: a membrane
   pulls the iris forward. The FAQ book's contraindication list agrees. However, the same book also names the
   "angle-closure stage of neovascular glaucoma" as a case where an argon laser is preferred for iridotomy. The two
   newer books are silent. Ask which answer your examiners expect.
2. **"10 disc areas" or "10 disc diameters"?** The card says disc areas (the CVOS definition). This is the wording in
   one book's definition and in the newest book's own angiography text. The newest book's comparison table prints
   "10 DD", and DD means disc diameter elsewhere in that book.
3. **Why ectropion uveae occurs.** Two books say the contracting fibrovascular membrane causes it. The newest book
   says repeated uveitic attacks with the rubeosis cause it. The card now gives both, traction first. Ask which your
   examiners prefer.
4. **Timing of anti-VEGF before surgery.** The card says 2–3 days, from the newest book (before vitrectomy, PRP and
   filtration or valve surgery). The other books say "usually 1 week, but can be 14–48 hours" and "24–78 hours".
5. **Disc in ocular ischaemic syndrome.** The newest book's comparison table says the disc is "normal" (not
   swollen), and the card uses that. The FAQ book's list of ocular ischaemic syndrome signs includes disc oedema and
   disc new vessels. If asked, say that the disc is usually normal, unlike the swollen disc of CRVO.
