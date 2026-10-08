# G9 notes — Gonioscopy: perform, grade and draw

Packet: ARAVIND fitz 212–217 (= printed p.186–191, section 4.2) · BAIDYA fitz 755–757 (= p.741–743) · BAIDYA fitz 162–165
(= p.148–151) · NAMRATA fitz 199 (= p.181) · TYPED FORMAT — GLAUCOMA fitz 0–1 · MNEMONICS PDF fitz 61, 58.
Every page was read in full. All tables (Shaffer, Scheie, Spaeth, direct/indirect, iris processes/PAS, vessels, Sampaolesi,
typed Van Herick/Scheie/Shaffer/Spaeth) were checked against the rendered page images, not only the extracted text.
House format: proforma PDF p.9 (transcript `proforma_p01-17.md`; image `img/proforma/p09.jpg` checked) and last year's
glaucoma sheet (`transcripts/lastyear.md` §2.4).

Word count (`wc -w`, default locale, as for G8): **819 total; :::gonio block 40; 779 excluding the diagram** (budget
600–780). With LC_ALL=C.UTF-8, wc also counts symbol-only tokens (→ · —): 846 total.
@readmore = Baidya p.148–150 (fitz 162–164), 741–742 (fitz 755–756) · Namrata p.181 (fitz 199) · Aravind 4.2.
Not used on the card: Baidya p.151 (fitz 165, PACS/PAC/PACG table) and p.743 (fitz 757, direct ophthalmoscope).
The earlier drafts/G9.md (no notes file) was replaced by this version.

## Claims ledger

### Header
- Badge "about 8 of the 12 glaucoma cases" — from the brief (lastyear.md: "Gonio" written 8 times, 5 ticked); not a packet claim

### Indications
- Open versus closed angle; early detection of narrow angles — ARAVIND fitz 214 (Q10 A i, ii); BAIDYA fitz 755
- Both eyes; extent of angle closure — BAIDYA fitz 164 ("to see the angle structures in both eyes and to evaluate the extent of angle closure")
- Part of every glaucoma examination — TYPED FORMAT fitz 1 ("Gonioscopy (draw a diagram if possible)"); house sheet (CARD_SPEC §5 item 10)
- Iridotomy patency — BAIDYA fitz 755; ARAVIND fitz 214 (Q10 vi c)
- Angle recession (trauma), new vessels (neovascular), pseudoexfoliation material, pigmentary glaucoma — ARAVIND fitz 214 (Q10 iii); BAIDYA fitz 755
- Tumour, foreign body, blood in the angle — ARAVIND fitz 214 (Q10 iv); BAIDYA fitz 755
- Kayser–Fleischer ring (Wilson's disease) — ARAVIND fitz 214 (Q10 v, "K-F ring"); BAIDYA fitz 755 ("KF ring"). The expansion of K-F is mine (abbreviation rule).
- Indentation gonioscopy can break an attack of acute angle closure — ARAVIND fitz 214 (Q10 B i)

### Instrument check
- Indirect lens: mirror image of the opposite angle; used only with a slit lamp — BAIDYA fitz 755; "with the mirror opposite angle is viewed" — BAIDYA fitz 756
- Goldmann three-mirror: the smallest, dome-shaped mirror is for gonioscopy — BAIDYA fitz 756; ARAVIND fitz 213 ("smallest and dome shaped ... the angle")
- Goldmann contact surface diameter 12 mm; curvature steeper than the cornea, so a viscous coupling agent is required; stabilises the globe, suitable for trabeculoplasty — BAIDYA fitz 756
- Zeiss four-mirror: contact surface 9 mm; no coupling agent; quick view of the entire angle at a time; useful for indentation; not for trabeculoplasty (eye not stabilised) — BAIDYA fitz 755
- Posner (permanently attached holder rod) and Sussman (held directly; patient's own tears as fluid bridge) sit in the Zeiss four-mirror row — ARAVIND fitz 213. Baidya states "9 mm, no coupling agent" for the Zeiss lens; the card applies it to the four-mirror group as Aravind groups them.
- Direct lens example Koeppe (also Barkan, Worst/Wurst, Swan-Jacob, Richardson) — ARAVIND fitz 212 (Q4); BAIDYA fitz 755
- Direct: supine, typically under general anaesthesia in infantile glaucoma; hand-held microscope — BAIDYA fitz 755; ARAVIND fitz 212 (Q5)

### Steps
- Van Herick first: "an initial guide as to which patients might require a more detailed examination of the chamber angle" — BAIDYA fitz 163
- IOP before gonioscopy or dilatation (preferably GAT) — BAIDYA fitz 164
- Defer gonioscopy until corneal oedema resolves in acute attacks — BAIDYA fitz 164
- Consent (introduce, explain) — Template D requirement (CARD_SPEC §4 D), not a packet fact
- Instruction wording — my station script; "look where I ask" ties to ARAVIND fitz 213 (patient looks towards the mirror)
- Topical anaesthesia ("The cornea is anesthetized") — ARAVIND fitz 213 (Techniques)
- Disinfect the lens — Template D requirement; not in the packet (see Omitted)
- Reason for the dim room: a dark room and mydriatic drops precipitate an acute attack — BAIDYA fitz 162; dilatation can precipitate an attack — NAMRATA fitz 199. "Dim the room" itself is inferred (see Inferred).
- Slit beam 2 mm wide, axis at a right angle to the mirror — BAIDYA fitz 756
- Beam off the pupil — inferred (see Inferred)
- Lens placed against the cornea at the slit lamp, with or without a fluid bridge — ARAVIND fitz 213
- Grade before any pressure — from the indentation mechanism (BAIDYA fitz 755; ARAVIND fitz 214 Q8) and "without indentation or manipulation" (ARAVIND fitz 217)
- Rotate the lens to see 360° — ARAVIND fitz 213. The order S → T → I → N is my convention (matches the :::gonio order); the packet gives none.
- Mirror at 12 o'clock shows the inferior angle — direct application of "opposite angle" (BAIDYA fitz 755–756)
- Narrow angle: patient looks in the direction of the mirror in use — ARAVIND fitz 213
- Landmarks from the iris root forwards: CBB, SS, TM, SL — ARAVIND fitz 214 (Q9); BAIDYA fitz 755–756
- Scleral spur white — ARAVIND fitz 214 ("prominent white line"); BAIDYA fitz 756 ("narrow white band")
- TM: posterior part = primary outflow site, seen as a pigmented band — ARAVIND fitz 214 (Q9 iii); anterior TM non-pigmented — ARAVIND fitz 216 (Shaffer grade 1 row); grade 2 = "TM (pigmented)" — ARAVIND fitz 216. "Posterior pigmented, anterior non-pigmented" is assembled from these rows, not one sentence.
- Schwalbe's line most anterior (end of Descemet's membrane, anterior limit of trabeculum) — BAIDYA fitz 755; ARAVIND fitz 214
- Indentation with the Zeiss four-mirror: gentle posterior pressure forces aqueous into the angle; appositional contact opens, PAS stays closed — BAIDYA fitz 755; ARAVIND fitz 214 (Q8); also shows the extent of PAS — NAMRATA fitz 199
- Note list: angle structures, iris configuration, PAS, neovascularisation, pigmentation, Sampaolesi's line — TYPED FORMAT fitz 1; pseudoexfoliation material, angle recession — ARAVIND fitz 214; blood — ARAVIND fitz 215 (Q15)

### How to record
- "Gonioscopy: by modified Shaffer's grading", an X per eye, grade in each quadrant — proforma PDF p.9 (III in every quadrant, both eyes)
- Grade and deepest structure per quadrant — brief; last year's sheet: SS in all four quadrants, BE (lastyear.md §2.4)
- Diagram pairs: III with CBB, II with (pigmented) TM — ARAVIND fitz 216 (grade 3 "up to ciliary body"; grade 2 "TM (pigmented)"). These are illustrative values, not patient data. See Disagreement 4 for why the card does not use "III SS".
- "Regular iris" — Spaeth contour R "regular or flat" — ARAVIND fitz 217
- Closed quadrant recorded as appositional (opens on indentation) or PAS — BAIDYA fitz 755; ARAVIND fitz 217

### Normal values and interpretation
- Shaffer: 4 wide open 35–40°, closure impossible, up to ciliary body · 3 open 25–35°, impossible, up to ciliary body · 2 moderately narrow 20°, eventual closure possible but unlikely, TM (pigmented) · 1 extremely narrow 10°, closure possible, only Schwalbe line ± anterior TM (non-pigmented) · S slit < 10°, portions appear closed, no structures seen but no obvious iridocorneal contact · O closed, complete, iridocorneal contact — ARAVIND fitz 216 (page image checked). The card uses Roman numerals to match the house diagram (Aravind uses 4, 3, 2, 1, S, O).
- Occludable angle: pigmented TM not visible (Shaffer 1 or 0) without indentation or manipulation in at least 3 quadrants — ARAVIND fitz 217
- Scheie: wide open (all structures visible); grade 1 narrow (hard to see the iris root); 2 narrow (CBB obscured); 3 narrow (posterior TM obscured); 4 narrow (only Schwalbe's line visible) — ARAVIND fitz 217
- Spaeth, four parameters — ARAVIND fitz 217:
  - insertion A (anterior to TM, i.e. Schwalbe's line), B (behind SL, at TM), C (centred at SS), D (deep to SS), E (extremely deep, into CB)
  - width 10, 20, 30, 40°
  - contour S (steep/convex), R (regular/flat), Q (queer/deeply concave)
  - TM pigment from minimal/none to dense = grade 4. The packet's lower grade number is missing, so the card says "to grade 4 (dense)".
- Van Herick: 1 < ¼ CT, 2 = ¼, 3 = ½ to ¼, 4 > 1 CT (normal depth) — TYPED FORMAT fitz 1; < ¼ corneal thickness = potentially occludable — BAIDYA fitz 163–164; slit-lamp screen ("initial guide") — BAIDYA fitz 163. For the card's "≥ 1", see Disagreement 5.

### Common errors
- Bright room or beam on the pupil → falsely open angle — INFERRED (see Inferred)
- Pressure while grading opens appositional closure — BAIDYA fitz 755; ARAVIND fitz 214 (Q8), fitz 217
- Charting the mirror's own quadrant — BAIDYA fitz 755–756 (opposite angle)
- Pigmented SL or Sampaolesi's line taken for pigmented TM (I called II) — SL "whitish to variably pigmented" BAIDYA fitz 755; Sampaolesi table ARAVIND fitz 215 (Q13); I/II hinge ARAVIND fitz 216
- Closed angle called synechial without indentation — ARAVIND fitz 217 ("In Grade O — indentation gonioscopy ... necessary")
- Iris processes taken for PAS — ARAVIND fitz 215 (Q11); BAIDYA fitz 756

### Viva
- Total internal reflection at the anterior surface of the precorneal tear film / tear–air interface — BAIDYA fitz 755; ARAVIND fitz 212 (Q3)
- Lens replaces the cornea–air interface with one of higher refractive index than cornea and tears — BAIDYA fitz 755; "plastic or glass surface" — ARAVIND fitz 212
- Indirect mirror: rays exit at much less than the critical angle — BAIDYA fitz 755
- Direct versus indirect — ARAVIND fitz 213–214 (Q7):
  - direct: simple orientation, can see over a convex iris; time-consuming, uncomfortable supine position
  - indirect: quicker, compression possible; orientation confusing at first
  - erect view (direct) — ARAVIND fitz 212 (Q5)
- Indentation = dynamic = compression gonioscopy; appositional versus synechial — ARAVIND fitz 214 (Q8); BAIDYA fitz 755; PAS extent — NAMRATA fitz 199
- Scleral spur: posterior lip of the scleral sulcus — ARAVIND fitz 214; site of attachment of the longitudinal muscle of the ciliary body — BAIDYA fitz 756
- Iris processes lacy, fenestrated, structures seen between strands; PAS solid, preclude any view — ARAVIND fitz 215 (Q11)
- Angle vessels — ARAVIND fitz 215 (Q12):
  - pathological: fine, cross the SS, branch and arborise in TM
  - normal: broad, do not cross the SS, do not arborise
- Sampaolesi's line salt-and-pepper, dark, granular, discontinuous; pigmented TM "brown sugar", fine, continuous — ARAVIND fitz 215 (Q13)
- After trauma: angle recession, trabecular dialysis, cyclodialysis, foreign bodies — ARAVIND fitz 216 (Q18); post-traumatic blood — ARAVIND fitz 215 (Q15)

## Disagreements (book used on the card)
1. **Shaffer degrees.** ARAVIND fitz 216: 4 = 35–40°, 3 = 25–35°, 2 = 20°, 1 = 10°, S < 10°, O closed. TYPED fitz 1: 4 = 35–45°, 3 = 25–35°, 2 = 10–25°, 1 = 0–10°, 0 = 0°; it has no slit grade and no structures. **Card: Aravind.**
2. **Scheie: two different schemes.** ARAVIND fitz 217 runs from wide open (all visible) through narrow 1–4, where 4 = only SL visible. TYPED fitz 1 runs 0 = wide open (CB seen), 1 = open (at least SS seen), 2 = only trabeculum, 3 = only SL, 4 = closed (iridocorneal contact). **Card: Aravind.**
3. **Spaeth.** ARAVIND fitz 217 has four parameters (insertion, width 10–40° in 10° steps, contour, TM pigment). TYPED fitz 1 has "three factors", width 10–50°, and no pigment. The brief said "three components". **Card: Aravind (four).**
4. **"III SS" pairing (brief example, CARD_SPEC §3 example, G1 and G6 diagrams).**
   - The packet does not support it. ARAVIND fitz 216 gives "up to ciliary body" for grade 3 as well as grade 4 (page image checked), so "III SS" would contradict the Shaffer table on the same card. **Card diagram: III CBB (open) and II TM (narrower quadrant).**
   - The packet gives no Shaffer grade for "scleral spur is the deepest structure seen". That view falls between Aravind grade 2 and grade 3. The only packet descriptions of it are TYPED Scheie 1 ("at least scleral spur") and Aravind Scheie 2 narrow (CBB obscured).
   - The house sheets never combine a grade with a structure: proforma p.9 writes "III" only, and last year's sheet writes "SS" only. "III CBB" therefore contradicts neither. **Caller to decide on harmonising.**
5. **Van Herick.**
   - Grade 4: TYPED says "> 1 CT" and leaves ½–1 ungraded. The department DigiNerve slide (CARD_SPEC §5) says 1:1 = grade 4. **Card: "≥ 1 (normal)"** to cover both.
   - Occludable cut-off: BAIDYA fitz 163–164 says < ¼ is potentially occludable (= typed grade 1). The department slide calls 1:¼ (grade 2) "occludable". **Card: Baidya (< ¼).**
6. **CBB colour.** ARAVIND: "gray or dark brown". BAIDYA: "pink, dull brown, or slate grey". The colours were cut for space; if they go back on, use Baidya.
7. **Principle wording.** ARAVIND Q1 says "total internal refraction" (a typo); ARAVIND Q3 and BAIDYA say "reflection". **Card: reflection.**
8. **Direct lens name.** ARAVIND writes "Worst"; BAIDYA writes "Wurst". Neither is on the card.
9. **Which Goldmann.** BAIDYA fitz 164 uses the Goldmann **2-mirror** for the angle and the "Goldmann Zeiss 4 mirror" for indentation. BAIDYA fitz 756 and the brief describe the **three-mirror**. The card names the three-mirror; both are indirect Goldmann lenses.
10. **Angle-closure extent (not on G9; relevant to G4 and the PACS thesis).** BAIDYA fitz 165: PACS = posterior-meshwork ITC in ≥ 3 quadrants (almost 270°). NAMRATA fitz 199: iridotrabecular contact > 180°.

## Cross-card consistency (action for the caller)
- G1 (Special tests, "Shaffer grade (4 = 35–45° … 1 = 0–10°)") and G4 ("Gonioscopic grading" table) print the **typed-format** Shaffer degrees. G4 also prints the **typed-format Scheie** (0 wide open … 4 closed). G9 prints the **book (Aravind)** versions, as this brief instructs. The G1 and G4 packets did not include Aravind 4.2. Suggest aligning G1 and G4 with G9, or the reverse.
- G1 and G6 draw "III SS"; G9 draws "III CBB" (Disagreement 4).
- G4 "Van Herick < ¼: potentially occludable" agrees with G9.

## Inferred (not stated in the packet; kept because the brief requires them)
- **"Dim the room", "beam off the pupil", and the error "bright room or beam on the pupil → falsely open angle".**
  - The packet only says that a dark room, mydriatics and pupil dilatation precipitate angle closure (BAIDYA fitz 162, 164; NAMRATA fitz 199).
  - It never says that light on the pupil makes a narrow angle look open during gonioscopy. BAIDYA fitz 162 even lists "reading" as a precipitant.
  - The brief's "short" beam is not in the packet. The packet's beam is "2 mm wide, axis at a right angle to the mirror" (BAIDYA fitz 756).
- "Grade before any pressure"; quadrant order S → T → I → N; "mirror at 12 o'clock = inferior angle" (each explained in the ledger).

## Omitted (not in the packet)
- **Corneal wedge** (parallelepiped) technique for finding SL.
- **Goldmann lens disinfection** method or agent, and a clean-lens check. The tonometer agents are in the G8 packet (ARAVIND fitz 210) and were not carried over. "Disinfect the lens" stays as a Template D step only.
- Name or strength of the topical anaesthetic; name of the coupling agent.
- Gonioscopic **appearance of angle recession**. The viva gives only the list of trauma findings.
- Location of **Sampaolesi's line** and its link to pseudoexfoliation. The packet has only the comparison table.
- A number for the critical angle; what is "modified" in "modified Shaffer"; why IOP must come before gonioscopy (the packet gives the order only).
- "Loch Ness monster", "Lister's morning mist": named in TYPED fitz 1 but explained nowhere in the packet.
- **In the packet but cut for the word budget** (consider adding back if space allows):
  - optical goniolens is the **gold standard**; alternatives are AS-OCT and high-frequency UBM — BAIDYA fitz 756 (thesis-relevant)
  - Goldmann single mirror: height 12 mm, tilt 62°, central well 12 mm, posterior radius 7.38 mm — ARAVIND fitz 212
  - Zeiss mirrors all tilted at 64°; Unger holder; Posner rod; Sussman hand-held — ARAVIND fitz 213
  - direct lens: erect view, binocular comparison, expensive — ARAVIND fitz 212–214. "Erect view" is in the viva, not the Instrument check.
  - Ritch and Trabeculens lenses; cycloscopy — ARAVIND fitz 212–213
  - three-mirror central lens (30° upright view of the posterior pole), equatorial and peripheral mirrors — BAIDYA fitz 756; ARAVIND fitz 213
  - trabeculum average width 600 µm; Schlemm's canal as a darker line deep to the posterior trabeculum (blood may be seen) — BAIDYA fitz 756
  - CBB narrower in hypermetropes, wider in myopes; iris processes insert at the SS — BAIDYA fitz 756
  - causes of TM pigmentation (11), blood in the angle, blood in Schlemm's canal (including after gonioscopy), causes of PAS — ARAVIND fitz 215–216 (Q14–17)
  - goniotomy, goniophotocoagulation, laser trabeculoplasty; post-operative ostium and cyclodialysis — ARAVIND fitz 214; BAIDYA fitz 755
  - Spaeth width definition (tangents to the peripheral third of the iris and the inner corneoscleral wall) — ARAVIND fitz 217
  - avoid dilating narrow angles until iridotomy — BAIDYA fitz 164; NAMRATA fitz 199

## Format decisions
- Viva: 8 Q/A pairs (the minimum); Q1 merges "why a goniolens" and "principle".
- Scheie and Spaeth share one 2-column table; pipes count toward `wc -w`.
- Blank lines around the :::gonio block, as in G1. Both @widths rows sum to 100. Abbreviations CBB, SS, TM, SL, PAS, RE and LE are expanded at first use.

## Mnemonic
- "I CAN SEE TILL SCHWALBE'S LINE" (iris root, ciliary body, scleral spur, trabecular meshwork, Schwalbe's line) — MNEMONICS PDF fitz 61
- Goldmann three-mirror lens: "The smallest the lens, the more peripheral the view" — MNEMONICS PDF fitz 58
