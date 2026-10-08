# G2 fact-check v4: POAG with trabeculectomy (bleb assessment and the failed bleb)

Independent check of `Case_Cards/_work/card_sources/G2.md` (upgraded v2 card), 8 Oct 2026. The card was edited in place.
Against the v2 text (commit 3fcc773), almost every line was rewritten or added in v4 and by the examiner. So I checked the
whole card claim by claim against the book text (fitz-indexed pages), not only the diff. I applied CONSISTENCY items
1–34. The old report `G2_check.md` still stands for the v2 numbers, which are unchanged. I re-confirmed them on the page
text: MMC, 5-FU, sponge, injections, flap, ostium, sutures, tPA, laser suture lysis, 12 mm Hg, 2–4 months and 41%.

## 1. Summary

- **Claims checked:** about 300 distinct claims (numbers, doses, settings, grades, named signs, mechanisms, adverse
  effects, contraindications, diagnosis lines, history "a yes would point to" claims, viva statements).
- **Verified as written:** about 284.
- **Corrected:** 16 edits (table below). This includes 4 CONSISTENCY applications: items 11, 13, 18, 24 and 32.
- **Removed:** 2 unsupported statements (section 3).
- **Final word count:** builder **5,799** (was 5,711; the budget is 3,300–5,500, and up to about 6,050 is acceptable).
  Lint counts 6,129 and `wc -w` counts **6,579**.
- **`Q:` count: 54**: 22 in the ten examination steps and 32 in the viva section (unchanged).
- **Lint:** clean except the Keywords-line "long sentence" (ignored by the brief).
- **Build** (`../cache/build/G2_check.docx`): 12 tables, 4 boxes and 1 gonio diagram, with no warnings.

### The examiner's three focus points

1. **Endophthalmitis protocol** (Baidya fitz 461–462, printed p.447–448).
   - Verified: the header reads "Management of postoperative endophthalmitis". The B-scan is step B.
   - Verified: intravitreal "Vancomycin 1 mg/0.1 ml plus Ceftazidime 2 mg/0.1 ml" is step C. Aqueous or vitreous
     sampling is step D.
   - Verified: the vitrectomy triggers on p.448 are "not responding after intravitreal injection" (PPV indication a)
     and EVS "immediate pars plana vitrectomy in eyes with VA of perception of light".
   - Baidya's 48-hour sentence is "Intravitreal may be repeated after 48 hours if there is no improvement, vitrectomy
     surgery is suggested". It is ambiguously punctuated, and in both readings "no improvement" governs the next step.
   - The card said "I may repeat the injection after 48 hours" without that condition, so I reworded it (change 16).
   - **No bleb-specific regimen in any book:** confirmed by grep for bleb plus endophthalmitis, infection or antibiotic
     in all three books. Aravind fitz 312 (Q55–Q57) gives only the earliest sign, the treatment of bleb infection and
     the organisms. Baidya fitz 458 lists only the organisms. Aravind fitz 421 lists only the "most common organism".
   - Aravind's endophthalmitis chapter lists H. influenzae under *postoperative* endophthalmitis "(associated with
     bleb-related endophthalmitis)". This supports treating it by the postoperative protocol.
   - The card nowhere presents the regimen as bleb-specific: the Complications bullet and the viva both say so.
   - CONSISTENCY 18 (Streptococcus most common) is correct on the card. Aravind fitz 421 Q26 agrees.
2. **Cataract in an eye with a bleb** (Aravind fitz 25–26).
   - Every element is on the page: miotic pupils, posterior synechiae, congested eyes and bleeding, prior surgery
     (scarring or filtering bleb), diabetes and hypertension, increased postoperative IOP rise, and suprachoroidal
     haemorrhage.
   - Also on the page: the temporal clear corneal approach "enables preserving viable conjunctiva", the early
     postoperative IOP spike, and "subsequent filtering surgery prone for failure". **Verified, no change.**
   - **Repeat-trabeculectomy success** (Aravind 4.18 Q43, fitz 309): verified, except one item. Q43's preoperative list
     reads "Discontinue use of pilocarpine, aqueous suppressants, carbonic anhydrase inhibitor and aspirin".
   - The examiner left pilocarpine out because Q11 vi (fitz 303) gives pilocarpine 1% before surgery. The two do not
     conflict. Q11 vi is a short course: "3 times, 1 hour before the operation", to constrict the pupil. Q43 itself
     lists "constriction of pupil" as an intraoperative step.
   - I restored "stop pilocarpine drops" (change 15). I also gave the preoperative-care answer Q11's timing, so the
     two answers read consistently (change 14).
3. **MD wording for severe damage** (CONSISTENCY 32). Baidya fitz 178 Q21 prints "MD > –12 dB" and "extensive visual
   field defect including defects within central 5 degrees". Baidya's figure caption (fitz 208) gives "–12 dB or
   worse". The card said "worse than −12 dB" and "a field defect within the central 5°". It is now in the G1/G10
   wording (change 8).

## 2. Changes

| # | Where on the card | Before | After | Reason and source |
|---|---|---|---|---|
| 1 | Header `@readmore` | "Baidya p.151, 153–155, 164–166, 173, 177, 265, 421, 443–447, 578 · Namrata p.172–177, 200 · Aravind 4.5, …" | "Baidya p.151, 153–155, 158, 164–166, 173, 177, 193–194, 265, 421, 441, 443–448, 578 · Namrata p.172–178, 200 · Aravind 4.1, 4.5, …" | Adds the pages the card now rests on: the acetazolamide dose (Baidya fitz 172 = p.158), the MD captions (fitz 207–208 = p.193–194), TSCPC (fitz 455 = p.441), the vitrectomy triggers (fitz 462 = p.448), the CCT categories (Namrata fitz 196 = p.178) and CCT calibration (Aravind 4.1, fitz 210) |
| 2 | Positive history, digital pressure / suture lysis row | "…are the first steps for a failing bleb. If they were needed, the bleb was failing early" | "…are used when the early pressure is above target, or the bleb is failing. If they were needed, the pressure was hard to control early" | Q42 (Aravind fitz 309) lists hourly steroids first, so these are not "the first steps". Digital pressure is applied "rather than waiting for a bleb to fail" when IOP is above 12 mm Hg or the target is missed (Q48, fitz 310). Suture lysis is done "when the target IOP is not reached" (4.17 Q29, fitz 298). So their use does not prove a failing bleb |
| 3 | Negative history, redness row | "Delay leads to bleb-related endophthalmitis" | "Delay risks bleb-related endophthalmitis" | Aravind fitz 312 Q55: "If treatment is delayed, there is a risk of endophthalmitis" |
| 4 | Negative history, watering row | Yes → "Endophthalmitis…; bleb infection". Tell apart → "Seidel's test shows a leaking bleb; the vitreous shows endophthalmitis" | Yes → endophthalmitis, plus drop side effects (lacrimation from pilocarpine, allergy to brimonidine, corneal surface toxicity). Tell apart → hypopyon and vitreous cells; fluorescein 1% staining; lid allergy | **CONSISTENCY 24** (the standard watering row, G1/G4 wording). Sources: pilocarpine lacrimation (Baidya fitz 170); brimonidine allergic dermatitis (Baidya fitz 163); fluorescein 1% for surface toxicity (Baidya fitz 168); endophthalmitis tearing (Baidya fitz 459). No book gives watering as a sign of bleb infection or a leaking bleb, so that claim and its Seidel tell-apart were removed (the writer's own ledger lists this under "Omitted") |
| 5 | Step 2, viva "What does a grade 3 RAPD tell you here?" | "A grade 3 RAPD is seen in advanced glaucoma. It fits the 0.9 cup, so this eye has little reserve." | "Advanced damage: a relative afferent pupillary defect is seen in advanced glaucoma. Here it fits the 0.9 cup in the right eye." | Baidya fitz 168: "Relative afferent pupillary defect can be seen in advanced cases". The book does not grade it, and "little reserve" is not in the books |
| 6 | Step 4, viva on the late leak | "Otherwise I repair it." | "If these fail, I repair it surgically." | Aravind fitz 312 Q54 vi: "If not effective, then surgical repair is done". "Otherwise" read as "if the leak is not minimal" |
| 7 | Step 5, viva "commonest problem" | "With high IOP: malignant glaucoma, pupillary block or delayed suprachoroidal haemorrhage." | "With high IOP: pupillary block or delayed suprachoroidal haemorrhage. Malignant glaucoma has a high or normal IOP." | **CONSISTENCY 18**. Baidya fitz 165: malignant glaucoma has "normal or elevated IOP". The complications table and quick recall already said this |
| 8 | Step 10, viva "How do you stage the damage?" | "marked cupping, a field defect within the central 5° and a mean deviation worse than −12 dB" | "marked cupping and an extensive field defect including the central 5°. The mean deviation is −12 dB or worse." | **CONSISTENCY 32**, the same wording as G1 and G10. Baidya fitz 178 Q21: "extensive visual field defect including defects within central 5 degrees". Fig. 5.12d (fitz 208): "–12 dB or worse" |
| 9 | Investigations, CCT row | "calibrated for a CCT of 520 µm…" | "calibrated for a mean CCT of 520 µm… Thin is under 500 µm; thick is over 570 µm" | **CONSISTENCY 11** in full: Aravind fitz 210 ("mean of 520 microns"); Namrata fitz 196 (thin < 500 µm, thick > 570 µm) |
| 10 | Laser and surgery table, TSCPC key steps | "270°, sparing the temporal quadrant" | "12–24 burns behind the limbus over 360°, sparing 3 and 9 o'clock (settings: card GX)" | **CONSISTENCY 13**: TSCPC settings follow Baidya, and case cards quote GX. Baidya fitz 455 (p.441): "12–24 burns are placed posterior to the limbus over 360° avoiding the neurovascular bundles at 3 and 9 o'clock". The old text was Aravind 4.17 Q34 (fitz 299), the older book |
| 11 | What you must know, related term "Endophthalmitis" | "microbial inflammation of the vitreous and inner eye, with loss of vision" | "an inflammation of the vitreous and inner layers of the eyeball by microbial agents. It is characterised by loss of vision with exudation of the vitreous." | CARD_SPEC §2.4: definitions in the book's wording (Baidya fitz 457) |
| 12 | Viva "How does B-scan show a choroidal detachment?" | "Large ones meet as 'kissing choroids'." | "Elevations from both sides form 'kissing choroids'." | Baidya fitz 435: "Elevation may happen from both sides with diverging distal parts (kissing choroids)". The book says nothing about size |
| 13 | Viva "Which eyes need an antimetabolite?" | "Intermediate: drops for 3 years" | "Intermediate: drops for over 3 years" | The books disagree: Aravind fitz 314 Q66 says "for 3 years"; Baidya fitz 179 Q28 e says "over 3 years". The newer book wins, and this now matches the history table and the other viva answer on the card |
| 14 | Viva "What is the preoperative care?" | "Aspirin stops 5 days before; pilocarpine 1% before surgery prevents iris prolapse." | "Aspirin stops 5 days before. Pilocarpine 1%, three times in the hour before surgery, constricts the pupil and prevents iris prolapse." | Aravind fitz 303 Q11 vi: "Constrict pupil with pilocarpine 1% 3 times, 1 hour before the operation. It prevents iris prolapse". Separates this short course from the drops stopped earlier (change 15) |
| 15 | Viva "How will you improve the success of the repeat operation?" | "I treat surface infection and stop aqueous suppressants, carbonic anhydrase inhibitors and aspirin." | "I treat surface infection. I stop pilocarpine drops, aqueous suppressants, carbonic anhydrase inhibitors and aspirin." | Aravind fitz 309 Q43 1 ii lists pilocarpine first. See focus point 2: no conflict with Q11 vi |
| 16 | Viva "How do you treat bleb-related endophthalmitis?" | "I may repeat the injection after 48 hours. I advise vitrectomy if there is no improvement, or at once if vision is only perception of light." | "If there is no improvement, I may repeat the injection after 48 hours, or advise vitrectomy. I advise immediate vitrectomy if vision is only perception of light." | Baidya fitz 461: the repeat and vitrectomy both depend on "no improvement". Baidya fitz 462: PPV indication (a), "not responding after intravitreal injection", and the EVS's "immediate pars plana vitrectomy" for perception-of-light vision |

### Verified unchanged: the main new or changed claims (sample with pages)

- **Model patient and diagnosis lines:** 56 years; RE 1 year, LE 6 months; operated 6 months ago; 6/60→6/12 and
  6/24→6/9; 4 mm sluggish pupil with grade 3 RAPD; NS grade 2; EOM full; 26/24 mm Hg; CDR 0.9 and 0.75 with bayoneting
  and laminar dot; diagnosis wording (Aravind fitz 20–22).
- **Sudden loss of vision:** acute IOP rise with corneal oedema, CRVO, snuff-out (Aravind fitz 23).
- **CRVO:** haemorrhages in all four quadrants and a dilated tortuous venous system (Baidya fitz 279).
- **Endophthalmitis:** symptoms (loss of vision, pain and redness, tearing and photophobia) and signs (hypopyon,
  vitreous cellular debris, loss of red reflex) (Baidya fitz 459).
- **Beta-blockers:** contraindicated in asthma, COPD, cardiac failure and bradycardia. Timolol 0.5% OD or BD causes
  irritation and dry eyes. Dorzolamide 2% TID. Oral CAI side effects: paraesthesia, nausea, renal stones (Namrata fitz
  193).
- **Acetazolamide:** 250 mg two to four times daily (Baidya fitz 172). CAI contraindications are sulpha allergy, renal
  failure and chronic liver disease (Aravind fitz 281).
- **Steroid response:** POAG is a risk factor (Namrata fitz 218).
- **Atropine:** flushing, tachycardia, fever, delirium (Baidya fitz 592). Its role is to tighten the lens–iris
  diaphragm, keep the blood–aqueous barrier, relieve ciliary spasm and prevent synechiae (Aravind fitz 306 Q32).
- **Surgical iridectomy versus laser iridotomy** (Aravind 4.17 Q13, fitz 295).
- **Encapsulated bleb after ALT:** the risk is up to 3 times higher (4.17 Q20, fitz 296).
- **Laser suture lysis:** lasers, lens, timing and complications (4.17 Q29–Q30, fitz 298–299). The settings follow
  4.18 Q42 (CONSISTENCY 16).
- **Digital pressure:** technique, 10 s at most (4.17 Q31, fitz 299). Role and problems (Q47, Q49, fitz 310).
- **TSCPC:** indications and complications (4.17 Q33, Q35, fitz 299–300).
- **Combined surgery:** indications, advantages and disadvantages (4.18 Q61–Q64, fitz 313).
- **Antimetabolites:** risk tiers (Q66, fitz 314). Preventing toxicity (4.19 Q13, fitz 318).
- **Trabeculectomy steps:** paracentesis purpose and BSS via the paracentesis (Q12, Q21, fitz 303–305). Structures
  removed (Q13). Flaps (Q14–Q18). Tighter flap (Q26). Tenonectomy (Q27). Postoperative evaluation (Q31). Prognosis
  (Q33).
- **Malignant glaucoma:** treatment (Q38, fitz 308).
- **UBM:** PI patency and trabeculectomy function (Baidya fitz 187). Malignant glaucoma on UBM (Baidya fitz 165;
  Aravind fitz 227).
- **B-scan choroidal detachment** (Baidya fitz 435).
- **Fields:** every 6 months in mild to moderate disease, every 3 months in advanced disease (Namrata fitz 194).
- **Indications:** Namrata fitz 194 and Aravind fitz 302 Q7. Relative contraindications: Baidya fitz 178 Q23.
- **Drainage devices:** indication and complications (Baidya fitz 179 Q30–Q31). "Plate at the equator" matches
  Aravind's "equatorial reservoir".
- **Non-penetrating surgery** (Baidya fitz 180 Q32). **Photodynamic therapy** (4.19 Q11).
- **MMC side effects** (Baidya fitz 179 Q29). **5-FU side effects** (4.19 Q9).

## 3. Items not verified and removed

- **Watering as a sign of bleb infection, with Seidel's test as its tell-apart:** not in any of the three books (change
  4). The writer's ledger lists it under "Omitted".
- **"So this eye has little reserve"** (Step 2 viva): not in the books (change 5).

Kept under the spec's exemptions:
- "at 10 am": the house recording example.
- "Patient looks down" and "use diffuse light": examination instructions.
- "Compare the lid margins… in the primary position": a bedside technique.
- "Opaque", "no microcysts" and "Seidel's test negative" in the model patient: the department slide wording, logged in
  v2.

## 4. Checks 2, 5, 6 and 7

- **Check 2 (five asks): pass after change 4.**
  - Every history row has its reason. Every negative row names what it rules out and a tell-apart sign; the watering
    row now meets the CONSISTENCY 24 standard.
  - Steps 1–10 each have Do, Record and 2–4 Q/A. The differential table's last column names a sign or test.
  - Every investigation has its significance. The ladder has an aim and a trigger for each step.
  - The drug table gives mechanism, adverse effects and contraindications. For 5-FU and atropine it says "none stated
    in your books", which is true.
  - Every procedure row has advantages and disadvantages. Minor: the TSCPC "advantages" cell reads more like an
    indication. The books give no better advantage for this case, so I left it.
- **Check 5 (priority, structure, keywords): pass.**
  - Basics come first in each section. Only 2 viva questions are *(extra)*, well under 10%.
  - Every answer opens with its bold keyword (the edited answers too).
  - The trabeculectomy definition quotes Aravind 4.18 Q3; Baidya and Namrata give no definition. The endophthalmitis
    related term now uses Baidya's wording.
  - All 15 keywords appear in a say-it box or a viva answer (checked by script).
- **Check 6 (terminology and readability): pass.**
  - Abbreviations are expanded at first use, and there are none inside the `:::say` boxes (script).
  - British spelling is clean, with no "e.g.", "i.e.", "etc.", "viz.", "utilise", "initiate", "prior to",
    "basically" or "simply".
  - No book names or page numbers in the body, and no patient names.
  - The new 24-word definition sentence was split. Lint flags only the Keywords line.
- **Check 7 (format): pass.**
  - Template A headings are in order. The writer added one optional `###` inside "What you must know"
    ("Trabeculectomy and wound-healing modulation"), a documented choice.
  - The 4 boxes are closed and not nested, and Q/A pairs sit outside the boxes.
  - The 12 tables have consistent cell counts and at most 4 columns. Every `@widths` line sums to 100.
  - Every `Q:` is followed by an `A:`. The build gave no warnings.

## 5. Confirm with your seniors

1. **Bleb-related endophthalmitis.** None of your books gives a bleb-specific regimen. The card applies Baidya's general
   postoperative protocol: B-scan, sample, intravitreal vancomycin 1 mg/0.1 ml with ceftazidime 2 mg/0.1 ml, a repeat
   or vitrectomy if there is no improvement, and immediate vitrectomy with perception-of-light vision. Ask how the
   department manages it.
2. **Transscleral cyclophotocoagulation pattern.** Baidya treats 360°, sparing 3 and 9 o'clock, and the card follows it
   (CONSISTENCY 13). Aravind treats 270° and spares the temporal quadrant. Ask which pattern the department uses.
3. **Combined cataract and trabeculectomy: long-term pressure control.** Aravind's trabeculectomy FAQ (Q63) calls
   long-term control "questionable" after combined surgery, and the card follows it. Aravind's model case sheet says the
   opposite: long-term control is an advantage of combined surgery, and "questionable" belongs to cataract surgery
   alone.
4. **MMC or 5-FU as the routine agent, and the 5-FU strength** (carried over from v2). The card follows Baidya: MMC in
   almost all cases, and 5-FU at 50 mg/ml (CONSISTENCY 12). Aravind uses 5-FU for most primary surgery, and one Aravind
   page prints 30 mg/ml.
5. **Bleb needling and "failing" versus "failed".** Needling revision of a failed or encapsulated bleb is not in your
   books, so it is not on the card. None of the books defines where "failing" ends and "failed" begins. Ask whether
   examiners expect needling, and how the department words the diagnosis.
