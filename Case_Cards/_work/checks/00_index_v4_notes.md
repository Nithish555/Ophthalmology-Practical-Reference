# 00 Index — v4 upgrade notes (cards A–D)

Source: `Case_Cards/_work/card_sources/00_index.md` (edited in place; v2 text kept where it was right).
v2 text is recoverable from commit 3fcc773 (`git show 3fcc773:Case_Cards/_work/card_sources/00_index.md`).
Method text (five asks, answer shapes, template B order, card list, coverage map, toolkit topics) comes from
MASTER_PROMPT_PRACTICALS_v4.md §2.3–§2.6, §4, §8.1–§8.3, §9.0, §9 B–C. Department wording comes from the transcripts.
Every NEW clinical fact is listed below with its book and fitz page (Baidya printed = fitz − 14; Namrata = fitz − 18).

Build: `node ../tools/build_cards.js --subject "Index and master case format" --file-title "00 · Index and master case
format" --no-contents --out ../cache/build/00_test.docx 00_index.md` → 4 cards, **0 warnings**; PDF render 24 pages
(v2: 11), every page looked at.
Builder word counts: A 4,856 · B 1,868 · C 1,966 · D 2,346 = **11,036 words**; `wc -w 00_index.md` = 13704 (markup included).
Lint: only three long "sentences" left, all deliberate — the two quoted book definitions (glaucoma, Baidya fitz 169;
pseudoexfoliation, Baidya fitz 182) and the keyword list line on card C. No banned words. No abbreviations in `:::say`.
The two American spellings left ("NPDR with macular edema", "Hyphema") are the checklist's own wording, copied exactly.

## What changed, card by card

### Card A — master long-case proforma
- **Templates moved into tables** (opening line, history of presenting illness, past/personal/family/treatment,
  general/vitals/systemic, summary) so the fill-in wording stays exact and the prose obeys the 20-word rule.
- **Treatment history** row: compliance and side effects added (§4.1).
- **Negative history**: the glaucoma screen split one line per item; pointer to ask 1.
- **Coverage check against §9.0 item 1**: all rows were present (visual acuity; head posture; Hirschberg and ocular
  movements; lids and adnexa … lens; IOP; gonioscopy; fundus distant direct → direct → 90 D → indirect; fields; summary,
  complete diagnosis, differentials, investigations, management). **Added** a "Hirschberg test" how-to paragraph (it
  was only a table row), the swinging torch light test in the pupil row, and confrontation fields as numbered steps.
- **"Differentials, investigations and management"** rewritten to the v4 shapes (4–6 differentials with the telling
  sign; five-purpose investigation order incl. fitness for surgery; ladder with triggers).
- **New `## The five-asks method`**: overview table; Ask 1 (rules; worked negative-history table with the haloes model
  row + Fincham test, headache with vomiting, frequent change of glasses, night blindness, injury; past/drug rows;
  "Why did you ask…?" model Q/A); Ask 2 (the three order rules with reasons, PART B mnemonic, the 8-step long-case order,
  Do/Record/Viva, worked Van Herick step with 2 Q/A); Ask 3 (rules, worked POAG differential table, exclude-first line);
  Ask 4 (five purposes, worked POAG investigation table, spoken line); Ask 5 (worked POAG ladder as a say-it script,
  trigger list).
- **New `## How to answer any viva question`**: keyword-first rule and the other §2.4–§2.6 rules; the §2.3 table (12
  rows); the two §2.6 model answers (glaucoma definition now in Baidya's exact wording; latanoprost).
- **Model opening/closing** say-it scripts: long sentences split; content unchanged.
- **Case-specific add-ons**: squint rows now point to NX (diplopia charting, Hess chart).
- `@readmore` extended.

### Card B — master fundus format
- Checked against §9.0 item 2 and template C. Already present: department order, the pp 21/30 formula, the RE|LE order,
  the colour table. **Added:**
  - "Before you dilate — four checks" (renamed to the template heading) + 3 Q/A (iris new vessels, RAPD, pseudoexfoliation)
    and a shorthand table (NS-2, PCIOL, PxF in ALC, RTL).
  - Background row: "The background retina appears normal" (department wording, proforma p 21).
  - Note that the optic atrophy write-up (p 21) puts the +90 D confirmation before the periphery.
  - Two lesion rows from the department write-ups: flame-shaped haemorrhages (p 30), pale disc (p 21).
  - Say-it of an abnormal fundus: the department's diabetic retinopathy write-up (p 30), spoken, no abbreviations.
  - "Viva on the description": 6 Q/A (distant direct ophthalmoscopy, AV ratio, flame vs dot haemorrhages, cotton-wool
    spot, direct vs indirect ophthalmoscope, why the +90 D lens).
  - Drawing section renamed "What to draw — Kanski's colour code" (template wording); coloured-pencil list; the books'
    extra codes (flap of tear blue; thinned retina red hatches outlined in blue; lattice blue hatches outlined in blue;
    gas green) added to the existing list.
  - New "History to ask, if the examiner allows" table (6 rows).
  - "Diagnosis and plan" → "Diagnosis, investigations and plan" with a Test | What it shows | Significance table
    (macular OCT, FFA, B-scan, systemic work-up) and a pointer to the ladder (card A ask 5) and card RX.
- Page numbers of the proforma removed from the body (kept in @readmore).

### Card C — master short-case method
- Rebuilt on template B: "The method, in one look" (11 steps) then one `##` per template-B heading, each with a
  **Method** line and a worked **pseudoexfoliation** example: instruction → spot → Keywords line (10 terms) → focused
  examination as `### Step 1–5` with Do / Record / 1–2 Q/A → say-it description ending in the diagnosis line → history
  table → differentials table → how I will proceed table → how I will manage (6 first-person steps) → must know →
  viva (4 Q/A) → quick recall.
- Kept: "Glaucoma short cases were do-and-show" (unchanged) and the timing (now as bullets).
- The v2 say-it is kept but now ends at the diagnosis line (differentials and plan moved to their own headings).
- Facts in the example reuse the fact-checked G6 v2 ledger (`checks/G6_notes.md`); the pages are listed below.

### Card D — card index
- Title now "Card index, checklist coverage map and toolkit list". Badge: **68 cards in 7 subject files, 6 of them
  toolkits · 21 cards marked ★** (v2: 61 cards, 21 ★).
- (a) Full §8.1 card list for all seven files, IDs unchanged, toolkit first in each file (GX, RX, CX, MX, NX, OX),
  ★ with counts kept from v2; G11 "Other glaucomas the examiner may ask: childhood and secondary glaucomas *(extra)*"
  last in the glaucoma file (type V). Types corrected to §8.1: G5 L+S (v2 had L); R0, R8, R9, R10, R11 F (v2 had S).
  Key gains F, X and V.
- (b) Checklist coverage map: one table per subject (Glaucoma, Cornea, Retina, Oculoplasty, Nerves, Miscellaneous),
  every checklist line copied exactly from the checklist PDF in its printed order (104 lines: 37 long, 67 short), with
  card and block as §8.3 gives them; cross-subject lines show the owning file.
- (c) Toolkit list: one table (Card and file | Drugs | Lasers and procedures | Surgery) from §8.2.
- Kept: "Marks and timings" and "Last year's 34 cases at JEH" (long sentences split only).

## v4 additions — new clinical claims and their pages

### Card A
- Haloes = corneal epithelial oedema acting as a diffraction grating, splitting white light into colours; other causes
  (mucus in conjunctivitis, incipient cataract, vitreous opacities, snow blindness, IOL tilt) — ARAVIND fitz 232 (4.6 Q14–16)
- Fincham (stenopaeic slit) test: slit moved across the pupil; glaucoma halo stays intact, incipient-cataract halo breaks
  into component colours — ARAVIND fitz 232 (4.6 Q17)
- Acute angle-closure attack: pain, redness, headache, nausea, vomiting — NAMRATA fitz 196; BAIDYA fitz 172 (per G1 ledger)
- Attack signs: mid-dilated, vertically oval, poorly reacting pupil; shallow AC — BAIDYA fitz 164; ARAVIND fitz 232 (Q19)
- Frequent change of glasses: raised pressure on zonules and ciliary body impairs accommodation; field defect mistaken for
  poor vision — ARAVIND fitz 22–23 (model glaucoma sheet, printed p.663–664)
- Night blindness: defective dark adaptation in open-angle glaucoma; miotics accentuate it — ARAVIND fitz 22
- Angle-recession glaucoma: past trauma, recession on gonioscopy, usually unilateral — NAMRATA fitz 192
- Beta-blockers contraindicated in asthma / COPD — NAMRATA fitz 193
- Steroid-induced glaucoma: corticosteroid intake; posterior subcapsular cataract — NAMRATA fitz 192
- RAPD to be looked for before pupil dilation (vein occlusion) — NAMRATA fitz 236; swinging torch light test — NAMRATA fitz 370
- Iris examined before dilatation for new vessels at the pupillary margin — NAMRATA fitz 214
- AC cells counted before pupillary dilatation — BAIDYA fitz 378
- Angle of deviation (Hirschberg) measured before dilating — BAIDYA fitz 571
- Colour vision preferably tested before pupillary dilatation — ARAVIND fitz 36 (1.2)
- Tonometry before gonioscopy (falsely low after) and before dilatation (transient rise 4–5 mm Hg) — NAMRATA fitz 195;
  before gonioscopy or dilatation, note the time — BAIDYA fitz 164, 168
- Disc and RNFL with +90 D / +78 D at the slit lamp under dilated pupils — NAMRATA fitz 191; BAIDYA fitz 168
- No dilatation in narrow angles / angle closure until iridotomy — BAIDYA fitz 164; NAMRATA fitz 199
- PART B mnemonic (Pupillary reflex, Angle of AC / of squint, Rubeosis, Tension, BCVA) — MNEMONICS PDF page 51 (fitz 50)
- Hirschberg: pencil torch at the midline from 2 feet; reflexes normally at the centre of the pupil; pupillary border
  7° (14 PD), mid-iris 15° (30 PD), limbus 30° (60 PD); rough estimate — BAIDYA fitz 571
- Van Herick as an initial guide to who needs detailed angle examination — BAIDYA fitz 168; grade 1 (< ¼) may be
  occludable — CONSISTENCY.md item 3 (Baidya, Namrata)
- OHT: IOP > 21 mm Hg on 2 consecutive readings, normal disc and rim — BAIDYA fitz 169; NAMRATA fitz 192
- NTG: IOP < 22 mm Hg on the diurnal curve; more disc haemorrhages and notching — BAIDYA fitz 173–174 (per G1 ledger)
- PXG: white flakes on pupillary margin and lens; Sampaolesi's line — BAIDYA fitz 181, 183
- PACG: indentation separates appositional closure from synechiae — BAIDYA fitz 164; ARAVIND fitz 214 (per G4/G9 ledgers)
- Gonioscopy excludes angle closure and secondary causes (angle recession, pigment dispersion) — BAIDYA fitz 168
- Humphrey 24-2 / 30-2 — ARAVIND fitz 224 (4.4); paracentral, arcuate, nasal step — ARAVIND fitz 221–222
- Staging by mean deviation cut-offs −6 dB and −12 dB (mild / moderate / severe / end-stage) — BAIDYA fitz 178; ARAVIND fitz 225
- CCT: thin < 500 µm reads falsely low, thick > 570 µm falsely high — NAMRATA fitz 196; ARAVIND fitz 243; thin CCT a
  risk factor for POAG — BAIDYA fitz 168
- Diurnal phasing: swing ≥ 8 mm Hg significant — NAMRATA fitz 192
- OCT RNFL: superior and inferior first affected; double hump lost — BAIDYA fitz 212
- Specular microscopy and biometry before cataract surgery in PXF — NAMRATA fitz 223
- Glaucoma definition (exact wording) — BAIDYA fitz 169
- Glaucomas classified by the iridocorneal angle (basis for "the angle" in the model answer) — NAMRATA fitz 189
- Target pressure: level at which further damage is unlikely — BAIDYA fitz 175; ARAVIND fitz 240
- Latanoprost 0.005% — BAIDYA fitz 172; NAMRATA fitz 193; ARAVIND fitz 281; once at bedtime (HS) — NAMRATA fitz 193;
  ARAVIND fitz 281
- Latanoprost increases uveoscleral outflow — NAMRATA fitz 193; ARAVIND fitz 284
- PG side effects: conjunctival hyperaemia, lash growth, iris pigmentation — NAMRATA fitz 193; ARAVIND fitz 281;
  contraindicated in uveitis — ARAVIND fitz 285 (Q72)
- Review after 2 months; substitute or add — ARAVIND fitz 25 (model sheet)
- Fixed combination advantages (simple dosing, adherence, less preservative toxicity) — ARAVIND fitz 284 (4.15 Q66);
  disadvantage: dosing-time conflict (timolol morning, PG bedtime) — ARAVIND fitz 284–285 (Q67)
- Laser trabeculoplasty when drops cannot be used reliably (cost, memory, instillation, intolerance) — NAMRATA fitz 194
- SLT targets pigmented TM cells, no thermal transfer to surrounding tissue — ARAVIND fitz 297 (4.17 Q22)
- LT contraindications: uveitic, neovascular, angle recession — BAIDYA fitz 180
- Trabeculectomy indications (not at target on 3 drugs; field progression on maximal therapy; side effects; poor
  compliance; baseline > 40 mm Hg; one eye lost; difficult follow-up) — NAMRATA fitz 194
- Partial-thickness flap: uniform IOP control, less hypotony — ARAVIND fitz 301 (4.18 Q4)
- Trabeculectomy complications (hypotony with flat AC, leak, bleb infection/endophthalmitis, cataract) — ARAVIND fitz 311 (Q50)
- Follow-up 3-monthly (mild–moderate) or monthly (advanced); fields 6-monthly (mild–moderate); IOP and compliance each
  visit — NAMRATA fitz 194; gonioscopy yearly — ARAVIND fitz 240; damage irreversible — BAIDYA fitz 169

### Card B
- NVI looked for at the pupillary margin under high magnification before dilatation — NAMRATA fitz 214; an important
  sign deciding management — NAMRATA fitz 236
- RAPD an ominous sign in vein occlusion; look before dilation — NAMRATA fitz 236
- CRVO among PXF complications — ARAVIND fitz 261 (4.11 Q16); weak zonules — BAIDYA fitz 182
- Distant direct ophthalmoscopy at 2 feet (one arm's distance); media opacities; reflexes: greyish = RD, black = VH,
  white = leukocoria — ARAVIND fitz 59 (1.6 Q4–6)
- AV ratio judged after the first bifurcation; normal 2:3 — BAIDYA fitz 762
- Flame haemorrhages in the nerve fibre layer, from superficial precapillary arterioles; dot haemorrhages in the inner
  retina (structures perpendicular) — ARAVIND fitz 359 (6.3 Q24–25)
- Cotton-wool spots: ischaemic infarcts of the nerve fibre layer; axoplasmic flow interrupted — ARAVIND fitz 359 (Q26)
- Direct vs indirect: monocular vs binocular; 10–15° vs 35°; 15× vs 2–3×; erect vs inverted; up to equator vs ora
  serrata; poorer vs better in hazy media; stereopsis nil vs present — BAIDYA fitz 758
- +90 D / +78 D at the slit lamp best for the disc, through a dilated pupil — NAMRATA fitz 191; BAIDYA fitz 168
- Coloured pencils red, blue, green, yellow, brown, black, eraser — BAIDYA fitz 762
- Colour code: detached retina blue, attached red, veins blue, breaks red with blue outline, flap of tear blue, thinned
  retina red hatches outlined in blue, lattice blue hatches outlined in blue, pigment black, exudates yellow, vitreous
  opacities green — ARAVIND fitz 398 (6.8 Q32); arteries red — ARAVIND fitz 64 (1.7 Q12); drusen, chorioretinal
  coloboma yellow; sclerosed vessels black; silicone oil and gas green; choroidal lesions brown — BAIDYA fitz 763
- Duration of diabetes the strongest predictor: 8% at 3 y, 25% at 5 y, 60% at 10 y, 90% at 15 y; glycaemic control;
  aggravating factors HTN, hyperlipidaemia, CVD, anaemia; ask laser and injections; ask the other eye — BAIDYA fitz 245;
  impaired renal function — BAIDYA fitz 262
- BRVO history: hypertension, atherosclerosis, DM, smoking, hyperlipidaemia — BAIDYA fitz 272
- RP: night blindness the earliest and hallmark symptom; pedigree chart; drug history phenothiazine/thioridazine,
  chloroquine — BAIDYA fitz 332
- OCT in DME: cystic changes in INL and OPL, thickening; centre-involving = central 1 mm subfield — BAIDYA fitz 263
- FFA in DR: macular ischaemia; IRMA vs NVE — ARAVIND fitz 347 (6.1); in CRVO: after the acute phase; macular
  ischaemia; extent of CNP; conversion to ischaemic — ARAVIND fitz 385 (6.6 Q32)
- B-scan when dense VH opacifies the media: retina attached or detached, traction, foreign body; basic tests CBC, FBS,
  PPBS, HbA1c, ECG, lipids, urea, creatinine — BAIDYA fitz 300

### Card C (pseudoexfoliation example; pages from the fact-checked G6 ledger, spot-checked)
- Definition (exact wording) — BAIDYA fitz 182 (Q1)
- Hallmark flecks on the pupillary margin; loss of ruff; poor mydriasis — BAIDYA fitz 181; NAMRATA fitz 221–222
- Four-point description — department DigiNerve slide (proforma PDF p 12)
- Asymmetric AC depth / phacodonesis = zonular dialysis; UBM confirms extent — ARAVIND fitz 263 (Q25)
- Tonometry order — NAMRATA fitz 195
- Sampaolesi's line: dark, dense, scalloped band on or anterior to Schwalbe's line; not specific (PDS, chronic
  inflammation) — BAIDYA fitz 183 (Q6)
- Three zones: central disc (absent in 20%), clear zone from iris rubbing, peripheral granular zone after dilatation —
  ARAVIND fitz 260 (Q10E); NAMRATA fitz 222
- Systemic links (MI, stroke, hypertension) — BAIDYA fitz 181; aortic aneurysm — NAMRATA fitz 225
- True exfoliation: heat / infrared, glassblowers, lamellar delamination, clear scrolls — BAIDYA fitz 182; ARAVIND fitz 259;
  glaucoma infrequent — NAMRATA fitz 223
- Angle closure from the lens moving forward on weak zonules — ARAVIND fitz 262
- Monotherapy usually insufficient — NAMRATA fitz 223; late IOL decentration — NAMRATA fitz 223 (Q2)
- PDS: 30–50 y, men, myopia, Krukenberg spindle, mid-peripheral defects, uniform band — NAMRATA fitz 223, 225
- Primary amyloidosis: systemic, bilateral, fine deposits throughout the eye — NAMRATA fitz 223
- Occludable in 9–18%; 40% develop glaucoma or OHT — NAMRATA fitz 222
- Diurnal swings wider; treat aggressively — ARAVIND fitz 261, 263
- Specular: low density, altered size and shape — ARAVIND fitz 260 (Q13)
- Timolol 0.5% twice daily — BAIDYA fitz 171; reduces aqueous production; contraindicated in asthma — NAMRATA fitz 193
- LT more successful than in POAG but shorter-lasting — ARAVIND fitz 263 (Q23)
- Trabeculectomy if target not reached or progression; combined with cataract surgery — NAMRATA fitz 223
- Cataract precautions: hooks, expansion ring, dispersive viscoelastic, chop, CTR, aggressive longer steroids —
  NAMRATA fitz 224 (Table 1); ARAVIND fitz 264 (Q26)
- Zonules: material invades the attachments; proteolytic enzymes — ARAVIND fitz 260 (Q11)
- Follow-up yearly without glaucoma, 3-monthly with — BAIDYA fitz 183 (Q9)
- Glaucoma capsulare usually unilateral — ARAVIND fitz 259; after 50, mostly 7th decade, men = women, Scandinavians —
  BAIDYA fitz 181; PXG vs POAG (> 60, unilateral, > 40 mm Hg, poor drug response) — NAMRATA fitz 224; ARAVIND fitz 261

### Card D
- No clinical facts. Card list, types and ★ from master prompt §8.1 and v2 card D (last year's counts from §6 and
  `transcripts/lastyear.md`); checklist lines from `MS_Ophthalmology_Practical_Long_Short_Case_Checklist.pdf`
  (pdftotext); card and block mapping from §8.3; toolkit topics from §8.2. DSEK and DMEK expansions — BAIDYA, ARAVIND
  (whole-book grep).

## Disagreements (book versus book; the card follows the rule in §7)
- **Hirschberg values:** BAIDYA fitz 571 — reflex at the pupillary border 7°, mid-iris 15°, limbus 30°, normally at
  the centre of the pupil. ARAVIND fitz 638–639 — 1 mm = 7°, pupil border 15°, mid-iris 30°, normal reflex just nasal
  to the centre. Card A uses Baidya (§8.1 says so). Confirm with seniors.
- **Distance for distant direct ophthalmoscopy:** BAIDYA fitz 758 says 22–25 cm; ARAVIND fitz 59 says 2 feet (one arm's
  distance), as do the department's sheets. Card B keeps the department's "one arm's distance" (v2 wording, house
  format) and gives no number. Confirm with seniors.
- **Drusen colour:** ARAVIND fitz 64 says black; BAIDYA fitz 763 says yellow; the department uses orange. Card B says
  yellow (Baidya) and notes the department's orange.
- **Fincham test wording:** ARAVIND fitz 232 says the cataract halo "breaks into component colors" (kept verbatim, as in
  the §4.1 model row).

## Omitted
- A generic "fitness for surgery" test list: the books give none outside specific operations. Card A's worked row
  points to the case card's own pre-operative tests (example from G6).
- Kanski: not in the repo. No new Kanski fact added. Card B keeps the v2 "Kanski p.27" in @readmore and the template's
  name "Kanski's colour code"; every colour on the card is in Aravind 6.8 / 1.7 or Baidya fitz 762–763.
- The optic atrophy write-up's macula line ("greyish black area … suggestive of epiretinal membrane") was not copied
  into the say-it models: no book support for that description.

## For the main session
- G11's title on card D is the one the brief gave; GLAUCOMA status calls it "other glaucomas … buphthalmos,
  Sturge–Weber, lens-induced, uveitic, steroid-induced, pigmentary".
- §8.3 maps short blocks onto M5 and M9, which are short (S) cards, and gives N6 two blocks ("Facial nerve palsy" for
  the nerves line, "Facial palsy" for the oculoplasty line). Card D copies §8.3 as written; the MISC and NERVES owners
  should name their blocks to match.
