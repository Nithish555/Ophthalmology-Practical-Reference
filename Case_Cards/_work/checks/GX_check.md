# GX — Glaucoma treatment toolkit: independent fact-check (new card, 8 Oct 2026)

Card: `Case_Cards/_work/card_sources/GX.md` (`@kind toolkit`). Books checked as per-page text (fitz-indexed); page images
rendered for Baidya fitz 451 and 592, Aravind fitz 295, and the existing render of Baidya fitz 456. Kanski is not in the
repo; the one Kanski line (lens extraction, tagged) is the wording already approved for G4 (CONSISTENCY 8) and is kept.

## 1. Summary

- Claims checked: about 520 (every dose, strength, frequency, mechanism, adverse effect, contraindication, laser
  setting, operative step, advantage, disadvantage, say-box statement and viva answer).
- Verified and left alone: about 505.
- Corrected or reworded to the book: 8 changes. Removed because no book supports them: 5 words or phrases (listed in
  section 3). One frequency added so GX matches G5 (prednisolone in neovascular glaucoma).
- Word count after edits: `lint_card.py` 3,625 (was 3,626; ceiling 3,630); `wc -w` 3,969; builder 3,511. No net words added.
- `Q:` count: 21 (Drugs 10 · Lasers 5 · Surgery 6). Lint: clean except the Keywords-line "long sentence" item. Builder: 0 warnings.

### The examiner's five "look hardest" points

| Point | Result |
|---|---|
| Atropine "pupil stays dilated 7–10 days" (Baidya fitz 592) | **Verified on the page image.** The table columns are: drug · mydriasis · cycloplegic effect · side effects. Atropine (0.5, 1%): mydriasis **7–10 days**, cycloplegia 6–12 days; side effects flushing, tachycardia, fever, delirium; "Atropine is the strongest cycloplegic" (text below the table). The card's 7–10 days is the mydriasis column, so it is right. No change. |
| Surgical iridectomy "mostly at 12 o'clock" (Aravind fitz 295, Q13) | **Verified on the page image.** In the two-column table (surgical iridectomy · laser iridotomy), the Site row reads: surgical = "Near limbal incision site (mostly 12 o'clock)"; laser = "Any clock hour on the iris surface". The parenthesis belongs to the surgical column. No change to "mostly at 12 o'clock". (The word "Basal" before iridectomy is not in the book: removed.) |
| PRP "532 nm green" (Baidya) | **Verified, but the page is fitz 451 (printed p.437), not 450**, and the examiner's premise is wrong: on the page image, 532 appears in **both** columns. Slit-lamp column: "Laser types: 532 green/yellow", size 500 µm, exposure 0.1 s (0.05–0.2), mild white burns, edges one burn width apart, 3–4 sittings, 1200–1600 burns. Indirect column: "Green 532 µm" (a unit misprint), 400–500 µm, 0.05–0.10 s, 3–5 sittings, 1200–2000 burns. The card's settings are the slit-lamp column's, so they are right. Ledger citation to correct: BAIDYA fitz 451. |
| Prednisolone frequencies | **Four times a day after laser:** Baidya fitz 455 ("a potent topical steroid, four times daily for 1 week", drug unnamed) plus Namrata fitz 202 ("topical prednisolone acetate 1% is given 4 times a day for 5–7 days"). Verified. **After an angle-closure attack:** Aravind fitz 238 ("1% prednisolone acetate, 4 times a day") and Namrata fitz 200 ("topical steroids qid"). Verified; "an attack" made explicit. **Hourly for a failing bleb:** Aravind fitz 309 Q42 says only "increase the steroids to hourly dosing" (drug unnamed): reworded "steroid hourly". **Gap found:** Baidya fitz 193 gives prednisolone acetate 1% **6–8 times a day** in neovascular glaucoma, and G5 prints that figure; GX did not. Added. Disagreement logged: Aravind fitz 294 (4.17 Q9, after laser iridotomy) gives prednisolone acetate 1% every 2 hours for 1 day, then tapered over a week; the card follows Baidya and Namrata (newer, and the same as CONSISTENCY 26). |
| Atropine as an angle-closure trigger (Namrata fitz 197) | **Verified.** Namrata's drug-history list: "drugs which induce angle closure attack … anticholinergic agents (topical, e.g. atropine, cyclopentolate, and tropicamide…)". "In an occludable angle" is the card's qualifier and is consistent with the book (shallow chamber on dilation, same page). Baidya fitz 193 recommends atropine in neovascular glaucoma even at the angle-closure stage with corneal oedema; no clash (synechial closure, not pupillary block). |

## 2. Every change

| Where on the card | Before | After | Reason and source |
|---|---|---|---|
| Drugs, opening line and first heading | "Each heading gives the fall in intraocular pressure (IOP) the class achieves." then "### Prostaglandin analogues — first line; IOP falls 25–32%" | Line deleted; heading now "…; intraocular pressure (IOP) falls 25–32%" | The line was untrue: the hyperosmotic, acute-attack and supporting-drug headings give no fall. IOP is now expanded at its first use. Fall by class is correct: PG 25–32%, β-blockers 20–30%, adrenergic agonists 15–20%, parasympathomimetics 15–20%, CAIs 15–20% (ARAVIND fitz 283 Q59). Saves 11 words, used for the next row. |
| Pilocarpine, mechanism | "pulls the scleral spur and opens the meshwork" | "pulls the scleral spur, tightening the meshwork and raising outflow" | Book wording: "contraction of the longitudinal ciliary muscle, which pulls the scleral spur to tighten the trabecular meshwork, thereby increasing aqueous outflow" (ARAVIND fitz 276 Q5). |
| Pilocarpine, cautions | "Young myopes tolerate it poorly" | "Young patients tolerate it poorly" | "Myopes" is in no book for this point. Aravind fitz 257 (4.10 Q12): "poorly tolerated by these young patients", with more retinal detachment; Namrata fitz 193: headaches in young patients. |
| Beta-blocker, cautions | "Works poorly in a patient already on oral beta-blockers" | "…already on systemic beta-blockers" | NAMRATA fitz 190: "already on systemic beta-blockers (topical beta-blockers would work sub-optimally)". |
| Topical CAI, adverse effects | "Systemic: rarely thrombocytopenia" | "Systemic: thrombocytopenia" | "Rarely" is not in any book; Aravind fitz 281 (Q41) lists it without a frequency. |
| Acetazolamide, adverse effects | "…renal stones; rarely aplastic anaemia, Stevens–Johnson syndrome" | "…renal stones; aplastic anaemia, Stevens–Johnson syndrome" | Same reason: listed without a frequency in ARAVIND fitz 280 (Q39) and BAIDYA fitz 172. |
| Prednisolone row, frequency | "four times a day after laser or an attack; hourly for a failing bleb" | "four times a day after laser or an angle-closure attack; 6–8 times a day in neovascular glaucoma; steroid hourly for a failing bleb" | See the table above. BAIDYA fitz 455, 193; NAMRATA fitz 202, 200; ARAVIND fitz 238, 309. Matches G5. |
| Bevacizumab row, adverse effect | "The effect lasts only some weeks" | "The effect lasts some weeks" | ARAVIND fitz 254: "an effect lasting for some weeks". "Only" is the card's judgement. |
| Bevacizumab row, caution | "Never a substitute for PRP" | "PRP remains the mainstay" | No book says "never": Namrata fitz 212 even says bevacizumab alone "controls IOP … at an early open angle stage". Baidya fitz 194: "PRP is the mainstay of treatment". |
| Surgical peripheral iridectomy, steps | "Basal iridectomy through a limbal incision…" | "Iridectomy through a limbal incision…" | "Basal" is in no book for this operation (ARAVIND fitz 295 Q13: "near limbal incision site"; fitz 238). Now the same as G4's wording. |
| Trabeculectomy, steps | "basal iridectomy, so the iris cannot block the ostium" | "peripheral iridectomy, so the iris cannot block the ostium" | ARAVIND fitz 303 Q12 x: "A peripheral iridectomy is performed to prevent blockage of the internal ostium"; fitz 309 Q43: "larger than this ostium". "Basal" is not in the books. |
| Combined cataract surgery and trabeculectomy, disadvantages | "…slower recovery; weaker long-term control…" | "…slower recovery than cataract alone; weaker long-term control…" | The same row lists "earlier visual recovery" as an advantage. Aravind compares the two: earlier than a two-stage plan (fitz 313 Q62), but "visual recovery longer than in cataract alone" (fitz 26, model case sheet). Without the comparison the cell looked contradictory. |
| `@readmore` | "Baidya p.110, 148–152, …" | "Baidya p.148–152, …" | p.110 (fitz 124, netarsudil in the cornea chapter) is no longer used: the newer-drugs table was cut by the examiner. |

Ledger citation errata (ledger not edited, by rule): PRP table is BAIDYA fitz **451**, not 450. All other fitz citations I
opened were correct.

## 3. Items removed because no book supports them

- "Basal" before iridectomy (surgical iridectomy and trabeculectomy cells).
- "Rarely" before thrombocytopenia, and before aplastic anaemia and Stevens–Johnson syndrome.
- "Young myopes" (pilocarpine).
- "Never a substitute for PRP" (bevacizumab).
- "Only" in "the effect lasts only some weeks".

Checked and kept although they are the card's own glosses (all fit the book's meaning): "press the inner corner of the eye"
for lacrimal occlusion (patient-instruction wording); "for less bleeding" (Aravind fitz 254 "reduced risk of bleeding");
"Contraindications of both apply" in the timolol–dorzolamide row (a consequence of the two components).

## 4. Checks 2, 5, 6, 7 and the CONSISTENCY items

- **Check 2 (five asks): pass, with one note.** Every drug row has mechanism, adverse effects and contraindications; every
  laser and operation row has advantages and disadvantages. Nd:YAG hyaloidotomy is in a viva answer only: no book gives
  its advantages or complications, so nothing could be added.
- **Check 5 (priority, keywords): pass.** All ten Keywords-line terms appear in the say box or a viva answer (script
  run). MIGS is the only *(extra)* item (under 10%).
- **Check 6 (terminology): pass.** Spelling is British. None of "e.g.", "i.e.", "etc.", "viz.", "utilise", "initiate",
  "prior to", "basically", "simply". No abbreviation in the say box. "ICE", "PAS", "POAG", "PRP", "VEGF", "MMC", "5-FU",
  "MIGS" are expanded at first use; IOP is now expanded in the first drug heading. Lint reports no sentence over 20 words
  except the Keywords line.
- **Check 7 (format): pass.** Headings follow template F; every table row has the right cell count; `@widths` sum to 100;
  at most 4 columns; boxes closed; Q/A outside boxes. Builder: 13 tables, 0 warnings.
- **CONSISTENCY 12** (MMC 0.2–0.5 mg/ml for 1–5 min; 5-FU 50 mg/ml for 5 min or 5 mg injections): matches Aravind fitz 313 Q65,
  315–316 Q5, 317 Q8. **13** (Nd:YAG iridotomy 2–5 mJ, 1–3 pulses, 150–200 µm, Baidya fitz 455; SLT 0.5–1.5 mJ, 400 µm, 3 ns, ALT
  200–1200 mW, 50 µm, 0.1 s, 40–50 spots over 180°, Baidya fitz 456 image; transscleral cyclophotocoagulation 1.5–2 s,
  1500–2000 mW, 12–24 burns, sparing 3 and 9 o'clock, Baidya fitz 455; iridoplasty 200–400 mW, 0.1 s, 20–24 spots over
  360° with no spot size, Aravind fitz 297): all match. **14** laser trabeculoplasty contraindicated in uveitic glaucoma: matches (SLT row).
  **15** acetazolamide: matches. **16** suture lysis 50 µm, 0.02–0.1 s, 250–1000 mW (Aravind fitz 309 Q42): matches.
  **17** CAI contraindications (sulpha allergy, renal failure, chronic liver disease): matches on both CAI rows.
  **19** bevacizumab 1.25 mg/0.05 ml: matches. **20** mannitol 20%, 1–2 g/kg over 20–30 minutes: matches.
  **22** valve opens above 8–10 mm Hg, tube 1.5–2 mm, plate 8–10 mm behind the limbus, ligature 2–3 weeks: matches.
  **26** peri-iridotomy regimen: matches. **30** SLT energy: matches.

## 5. Confirm with your seniors (at most 5)

1. **Steroid after laser iridotomy and in the attack:** the card uses prednisolone acetate 1% four times a day for about a
   week (Baidya, Namrata); Aravind's laser chapter says every 2 hours for the first day, then taper. Neovascular
   glaucoma: 6–8 times a day (Baidya). Ask which schedule the department uses.
2. **Intraoperative 5-fluorouracil strength and the routine antimetabolite:** 50 mg/ml for 5 minutes on the card (Aravind
   4.9, 4.10, 4.19), but Aravind 4.18 prints 30 mg/ml; Baidya says use mitomycin C in almost all cases, Aravind says
   5-fluorouracil in most primary operations.
3. **Nd:YAG iridotomy settings:** Baidya 2–5 mJ, 150–200 µm (card) versus Namrata 4–8 mJ, 200–500 µm and Aravind 3–8 mJ,
   300–500 µm; pre-laser pilocarpine 1% (Namrata) versus 2% three times (Aravind); Abraham lens +55 D versus +66 D.
4. **Laser trabeculoplasty in steroid-induced and uveitic glaucoma:** Baidya lists steroid-induced as an indication and
   uveitic as a contraindication; Aravind 4.13 says steroid-induced cases respond poorly, and Aravind 4.17 lists
   inflammatory glaucoma among SLT indications. The card follows Baidya.
5. **Argon laser trabeculoplasty power:** Baidya prints 200–1200 "MW" (a unit misprint); Aravind gives 800–1200 mW. The card
   uses Baidya, 200–1200 mW.
