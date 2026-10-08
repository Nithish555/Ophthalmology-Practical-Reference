# G3 fact-check: POAG with a glaucoma drainage device

## 1. Summary

- **Claims checked:** about 170. This covers every number, device detail, surgical step, complication, diagnosis line, differential row, viva answer, say-it line and recall line, including repeats. Each was checked against the full book text. Where the text layer was jumbled or missing graphics, I read the rendered page images instead: ARAVIND fitz 319–327 (all nine pages rendered), BAIDYA fitz 178–180 and 187–194, and NAMRATA fitz 193–195, 204, 212–213, 216–217 and 223.
- **Verified and left unchanged:** about 157.
- **Corrected, completed or reconciled:** 13 edits (table below). This includes the 3 book disagreements named in the brief and 2 additions from Aravind graphics that the text layer had missed.
- **Removed or rephrased as unsupported:** 3 wordings: "mostly", "often", and "never" (which appeared twice). The facts around them stay.
- **Format and consistency:** the gonioscopy cross now shows the deepest structure only (CONSISTENCY §2). The examination-table rows are back in template order (CARD_SPEC §4). Every table row has the right number of cells, all `@widths` add up to 100, all boxes are closed, there are 20 Q:/A: pairs, and the say-it box has 234 words with no abbreviations.
- **Final word count:** **3,036** (`wc -w`). The budget is 2,300–3,200.

### Results for the specific points in the brief
- **Device table.** Every number matches ARAVIND fitz 321:
  - Molteno: polypropylene, circular plate, single, double or triple plate, tube 0.63/0.3 mm.
  - Baerveldt: silicone, non-valved.
  - Ahmed: oval polypropylene plate, 184 mm² (double plate 364 mm²), silicone tube, outflow only above 8–10 mm Hg.
  - Tube tie: 2–3 weeks (fitz 323, Q16–17).
  - The Baerveldt tube cell said "—", but the book gives 0.64/0.3 mm in a graphic. I filled it in. Baidya and Namrata give no device numbers.
- **Surgical steps.** All of these are verified:
  - quadrant: superotemporal (fitz 323); inferonasal as the next site (BAIDYA fitz 187)
  - plate edge 8–10 mm behind the corneoscleral junction, sutured to episclera
  - 23-gauge tract at the posterior edge of the blue limbus, bevel up, 1.5–2 mm parallel to the iris
  - pars plana tube 3–4 mm behind the limbus, bevel down, after complete vitrectomy (fitz 324)
  - full-thickness patch graft over the 3–5 mm of tube exposed to lid contact (fitz 325)
- **Complications and phases.** Every complication on the card is in Q37 (fitz 326–327) or Q18, Q21, Q24 and Q30. For the phases, the card gives only the two names (Q39) and the late-complication definition of the hypertensive phase (Q37 late vii). Nothing was completed from memory.
- **Disagreements.** The newer book's position is now on the card in all three cases (rows 10 and 11 below; anti-VEGF was already right).
- **Gonioscopy cross.** It now shows the deepest structure only (row 4).

### Note for the coordinator: the Aravind 4.20 text layer drops every boxed graphic
The page images contain answers that the writer's notes call missing:
- Q6, the principle of a drainage device (fitz 319)
- the aqueous-shunt classification chart (fitz 320)
- the Baerveldt tube, 0.64/0.3 mm, its types (single or double plate) and Q11, the advantages of the Baerveldt (fitz 321)
- Q14 xi: new vessels in the angle are treated before surgery by PRP or goniophotocoagulation (fitz 322)
- Q28: what the patch graft prevents (fitz 325)
- Q38: how to manage tube erosion (fitz 327)

So the writer's note that "Baerveldt fenestrations and a 0.64 mm tube, the GDD principle and absorption route, an erosion stent, wider patch-graft benefits" are unsupported is wrong: all of these are in the book. The writer also suggested adding ARAVIND fitz 328 to finish Q38–39. That would not help: fitz 328 starts section 4.21 (cyclodestructive procedures). Q39 is cut short in the print itself. Other cards built from Aravind packets may have the same gap.

## 2. Changes made to the card

| # | Where on the card | Before | After | Reason and source |
|---|---|---|---|---|
| 1 | @readmore | Baidya p.173–177, 179–180 | Baidya p.165, 173–177, 179–180 | Baidya's own FAQ on valve surgery: Q30 indications and Q31 complications. It supports the card's indications, diplopia, hypotony, hyphaema, scleral perforation, erosion with endophthalmitis, and migration. BAIDYA fitz 179 = p.165. |
| 2 | Examination table, row order | "Pupil, lens, fields" was the last row, after the fundus | "Pupil, lens" moved to after the iris row. The fundus row became "Fundus, fields", with "then fields by confrontation" | CARD_SPEC §4 department order: iris → pupil → lens → IOP → gonioscopy → fundus → fields. No content was lost. |
| 3 | Examination table, gonioscopy, "How to record" | Modified Shaffer cross (below) | Cross diagram, deepest structure seen (below) | CONSISTENCY §2 |
| 4 | `:::gonio` block | III SS in all 8 quadrants; caption "Modified Shaffer grading, deepest structure seen…" | SS in all 8 quadrants; caption "Deepest structure seen in each quadrant (SS = scleral spur) — open angles in all quadrants. RE: tube tip free superotemporally; no PAS or NVA" | CONSISTENCY §2: no Roman-numeral grade paired with a structure; the caption names the conclusion. This also matches last year's sheet (SS in all four quadrants). |
| 5 | Differential, intro line | Devices mostly treat refractory secondary glaucomas: | Refractory secondary glaucomas that are also treated with devices: | "Mostly" is not in the books. ARAVIND fitz 320 (Q8) says "all refractory glaucomas" and includes congenital, juvenile and failed primary glaucomas. |
| 6 | Differential, row for glaucoma after PKP | Indication; often a pars plana tube | Indication; pars plana tube indicated | The books make post-PKP eyes an indication for pars plana insertion but give no frequency. ARAVIND fitz 322 (Q14 viii), fitz 324 (Q26). |
| 7 | Device table, Baerveldt "Tube" cell | — | Outer **0.64 mm**, inner **0.3 mm** | The book gives the numbers in a graphic the text layer missed. The dash wrongly suggested no data. ARAVIND fitz 321 (Q10, page image). |
| 8 | Key step 2 | …never superonasal. | …avoid superonasal. | The book lists the complications of superonasal placement (pseudo-Brown's syndrome, impact on the optic nerve). It does not forbid it. ARAVIND fitz 324 (Q23). |
| 9 | Key step 5 | at the posterior blue limbus | at the posterior edge of the blue limbus | Exact site wording: "posterior edge of blue limbus". ARAVIND fitz 324 (Q26, page image). |
| 10 | Management, valved vs non-valved | valved is one-step; safety and efficacy appear equal. | …appear equal, except in Sturge–Weber syndrome, where the **Ahmed valve** gives better long-term control than the Molteno. | Book disagreement; the newer book wins (brief). Baidya (2024): "Ahmed valve is superior to the Molteno tube in the long-term control of glaucoma in SWS" (BAIDYA fitz 189). Aravind (2013): "appear to be equal" (fitz 325, Q32). Baidya's claim applies to Sturge–Weber syndrome only, so it is added as the exception rather than made general. |
| 11 | Device vs trabeculectomy table, IOP-fall row | **Smaller percentage** | **Smaller percentage**; comparable results in neovascular glaucoma | Book disagreement; the newer book wins (brief). Namrata: devices in NVG "have shown comparable results to trabeculectomy" (NAMRATA fitz 213). Aravind: the percentage IOP fall is smaller (fitz 326, Q35). Namrata's point applies to NVG only, so Aravind's general point stays for this POAG eye. Baidya has no statement. |
| 12 | Viva: "Why a scleral patch graft…?" | It covers the 3–5 mm of tube exposed to lid contact; complications… | …exposed to lid contact, preventing tube erosion, hypotony, tube–corneal touch and scleral perforation; complications… | The answer to "why" was incomplete. The book's answer is a "Prevents" chart (erosion of tube through sclera, hypotony, tube–corneal touch, perforation of sclera) that the text layer missed. ARAVIND fitz 325 (Q28, page image). |
| 13 | Quick recall, plate line | never superonasal | avoid superonasal | Same as row 8 |

### Anti-VEGF timing (checked; already correct, no change)
- The card has 2–3 days before vitrectomy, PRP and valve implantation, in NVG with vitreous haemorrhage. This is from BAIDYA fitz 194, the newest book.
- Namrata has a different window: "usually 1 week before, but can be within 14–48 hours" before PRP or surgery in advanced NVG (NAMRATA fitz 212).
- Baidya wins. The disagreement is logged here and not shown on the card.

## 3. Items I could not verify, removed or rephrased
- "Devices **mostly** treat refractory secondary glaucomas": no proportion appears in any book (rephrased, row 5).
- Post-PKP glaucoma "**often** a pars plana tube": no frequency appears in any book (rephrased, row 6).
- "**Never** superonasal" (×2): the books give complications, not a prohibition (rephrased, rows 8 and 13).

Nothing else had to be removed. Every other fact traced to a book page.

### Book content found but NOT added (the card makes no wrong claim here; add only if you want it)
- **Q11, advantages of the Baerveldt** (ARAVIND fitz 321, graphic):
  - easier to implant
  - larger surface area than the Molteno, so greater drainage
  - flexible silicone fits the globe
  - fenestration holes allow fibrous ingrowth, which lowers the bleb height and reduces the risk of postoperative diplopia
  - single or double plate
- **Q38, managing tube erosion** (ARAVIND fitz 327, graphic): place a stent, which lengthens the tube and protects it from laceration. Stent material: Storz silastic tube.
- **Q6, principle** (ARAVIND fitz 319, graphic): the plate stimulates a fibrous capsule that forms the bleb wall. Aqueous drains into the space between the plate and the capsule, then by passive diffusion into the periocular tissues, then is taken up by lymphatics and venous capillaries.
- **Shunt classification chart** (ARAVIND fitz 320, graphic):
  - translimbal drainage to the anterior subconjunctival space (Krupin–Denver)
  - translimbal drainage to a posterior sub-Tenon's reservoir, which is either valved or flow-restricted (Ahmed, long Krupin) or non-valved (Molteno, Baerveldt)
  - drainage to the suprachoroidal space (modified Schocket)
- **BAIDYA fitz 179 (p.165), the newest book:**
  - Q30 adds indications: ICE syndrome, pseudophakic glaucoma, post-vitrectomy, and congenital glaucoma after conventional surgery has failed.
  - Q31 adds complications: early or late failure, corneal decompensation from endothelial cell loss, and migration or expulsion of the plate.
- **NAMRATA fitz 357 (p.339):** devices have better outcomes than trabeculectomy in silicone-oil-filled eyes. This is not relevant to POAG.

## 4. Confirm with your seniors
1. **Phases after surgery: timing and order.**
   - Aravind's answer (Q39) is cut short in print. The page shows "Hypertensive phase" with "Transient ↑ IOP in immediate postoperative…" beneath it, and "Hypotensive phase", and then stops.
   - Its only full definition says the hypertensive phase is poor IOP control with a properly working **Baerveldt** device.
   - The card gives the two names and that definition only. Ask your seniors which comes first and when, for valved and for tied non-valved tubes.
2. **Anti-VEGF before surgery in NVG.**
   - The card says 2–3 days (Baidya, in NVG with vitreous haemorrhage, before vitrectomy, PRP and valve).
   - Namrata says usually 1 week, though it can be 14–48 hours.
   - Ask which window your department uses.
3. **Comparing outcomes.**
   - Your books say only three things:
     - The IOP fall is smaller than after trabeculectomy (Aravind).
     - Results are comparable in NVG (Namrata).
     - Valved and non-valved devices appear equal, except in Sturge–Weber syndrome, where the Ahmed does better than the Molteno (Baidya).
   - None of your books mentions any of the comparative trials of drainage devices, so ask for the department's standard answer to "tube or trabeculectomy?" and "Ahmed or Baerveldt?".
4. **Recording the tube.**
   - The books give only 1.5–2 mm, bevel up and parallel to the iris.
   - They give no number for the tube–cornea gap and no clock-hour convention.
   - Ask how the department writes the tube on its sheet.
5. **Imaging the tube (anterior segment OCT, UBM).**
   - Your books do not cover it.
   - Examiners may link it to your thesis on anterior segment OCT, so ask your seniors what answer they expect.
