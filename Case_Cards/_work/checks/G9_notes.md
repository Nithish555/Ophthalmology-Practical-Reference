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

## v4 additions

Packet rebuilt 8 Oct 2026: `cache/packets/G9.txt` — ARAVIND fitz 212–217 (4.2), 22 (model sheet), 52 (1.5),
233–234 (4.6), 238 (4.7), 240 (4.8), 248 (4.9), 255 (4.10) · BAIDYA fitz 755–756 (= p.741–742), 162–165
(= p.148–151), 166 (= p.152), 168 (= p.154), 181 (= p.167), 183 (= p.169), 185 (= p.171), 135 (= p.121),
279 (= p.265), 729 (= p.715) · NAMRATA fitz 196–202 (= p.178–184), 191 (= p.173), 222–223 (= p.204–205),
236 (= p.218), 372 (= p.354) · typed Glaucoma Case Presentation Format · proforma PDF p.9 transcript ·
lastyear.md · mnemonics PDF. Also used: ARAVIND fitz 243 (4.8 Q39, miotics in angle recession).
Note on the caller's page list: the gonioscopy instrument pages in Baidya are fitz 755–756 (p.741–742); fitz 752–754
(p.738–740) are the tonometers (card G8).

### New or changed claims (v4)
Indications
- Exclude angle closure and look for secondary causes of open-angle glaucoma (angle recession, pseudoexfoliation, pigment dispersion) — BAIDYA fitz 168; NAMRATA fitz 191 (adds PAS, angle neovascularisation)
- Gonioscopy of both eyes in all patients in whom angle closure is suspected — NAMRATA fitz 198
- Gonioscopy every year in open-angle glaucoma: with age the lens thickens and an angle-closure component may develop, which may need iridotomy — ARAVIND fitz 240 (4.8 Q12)
- Post-operative: ostium, cyclodialysis, iridotomy — ARAVIND fitz 214 (Q10 vi); iridotomy patency — BAIDYA fitz 755
- Undilated gonioscopy for angle new vessels in CRVO — BAIDYA fitz 279 ("a must ... in an undilated iris"); NAMRATA fitz 236 ("undilated gonioscopy is essential")
- Therapeutic: indentation breaks an acute attack; goniotomy, goniophotocoagulation — ARAVIND fitz 214 (Q10 B)
- Optical gonioscopy is the gold standard; AS-OCT and UBM are other methods — BAIDYA fitz 756; UBM gives high-quality images but gonioscopy remains the gold standard for narrow angle and angle closure (PAS extent, PAS versus apposition); imaging is complementary, not a substitute — BAIDYA fitz 729
Instrument check
- Goldmann single, two- and three-mirror; Zeiss four-mirror, Posner, Sussman — BAIDYA fitz 755; ARAVIND fitz 212 (Q4)
- Goldmann two-mirror to see angle structures; Zeiss four-mirror for indentation — BAIDYA fitz 164, 193
- Start with a two-mirror lens (Goldmann) to avoid artefactual distortion of the angle by inadvertent pressure on the cornea — NAMRATA fitz 198
- Goldmann: 12 mm contact, steeper than cornea → viscous coupling agent; stabilises the globe; suits trabeculoplasty; angle mirror smallest and dome-shaped — BAIDYA fitz 756 (v2)
- Zeiss four-mirror: 9 mm, no coupling agent, entire angle quickly, indentation; not for trabeculoplasty (eye not stabilised) — BAIDYA fitz 755 (v2); Posner — permanently attached holder rod; Sussman — held directly, the patient's own tears as fluid bridge — ARAVIND fitz 213
- Direct lenses (Koeppe, Barkan, Swan-Jacob, Richardson); hand-held microscope; supine; general anaesthesia in infantile glaucoma; erect view — BAIDYA fitz 755; ARAVIND fitz 212 (Q4–5)
- Anhydrous glycerin (one or two drops) for gonioscopy through corneal oedema — ARAVIND fitz 233 (4.6 Q24)
Steps
- Van Herick first as an initial guide — BAIDYA fitz 163; IOP before gonioscopy (preferably GAT) — BAIDYA fitz 164; NAMRATA fitz 198
- Why IOP before gonioscopy: gonioscopy pressure opens the angle and lowers IOP; GAT after gonioscopy reads low — NAMRATA fitz 195 (Q6)
- Defer gonioscopy until corneal oedema resolves in acute attacks — BAIDYA fitz 164, 193
- Dilatation avoided in narrow angles and contraindicated in angle closure until iridotomy — BAIDYA fitz 164; NAMRATA fitz 199
- Topical anaesthesia; lens placed at the slit lamp with or without a fluid bridge; rotated through 360°; patient looks in the direction of the mirror in use to see into a narrow angle — ARAVIND fitz 213
- Semi-dark room for slit-lamp examination (examiner's eyes partly dark-adapted) — ARAVIND fitz 52 (1.5 Q3)
- Slit beam 2 mm wide, axis at a right angle to the mirror; opposite angle viewed — BAIDYA fitz 756
- Mirror image of the opposite angle — BAIDYA fitz 755; "mirror at 12 o'clock shows the inferior angle; at 3 o'clock the 9 o'clock angle" is a direct application (v2 accepted)
- Grade without pressure first — NAMRATA fitz 198; ARAVIND fitz 217 ("without indentation or manipulation")
- Indentation: gentle posterior pressure with the Zeiss four-mirror forces aqueous into the angle, pushing the peripheral iris back; apposition opens, PAS stays closed — BAIDYA fitz 755; extent of PAS — NAMRATA fitz 199; varying the pressure — ARAVIND fitz 214 (Q8)
- Grade O needs indentation with the Zeiss lens to tell apposition from synechiae — ARAVIND fitz 217
- Double-hump sign on indentation gonioscopy in plateau iris — BAIDYA fitz 166
- Axially depressing the central cornea may force open the angle temporarily (acute attack) — ARAVIND fitz 238 (4.7)
- Note list (structures, iris configuration, PAS, neovascularisation, pigmentation, Sampaolesi's line) — TYPED FORMAT; pseudoexfoliation material ("whitish material in the angle") — BAIDYA fitz 141, 181; ARAVIND fitz 214
- Disinfect the lens before and after use — Template D requirement; no book gives an agent for goniolenses (see Omitted)
How to record
- Deepest structure per quadrant; :::gonio RE SS ×4, LE S=TM, rest SS — CONSISTENCY 2; last year's sheet (lastyear.md) (v2)
- Aravind model wording: "Trabecular meshwork seen in all four quadrants with a patent ostium and peripheral iridectomy seen superiorly" — ARAVIND fitz 22
- Department line on "modified Shaffer" — CONSISTENCY 2 wording, verbatim (v2)
Normal values and interpretation (structures table)
- Order from the iris root forwards: CBB, SS, TM, SL — ARAVIND fitz 214 (Q9); mnemonic "I CAN SEE TILL SCHWALBE'S LINE" — MNEMONICS PDF fitz 61
- CBB: pink, dull brown or slate-grey band just behind the spur; width depends on iris insertion; narrower in hypermetropes, wider in myopes — BAIDYA fitz 756 (ARAVIND: grey or dark brown — Disagreement 6, Baidya used)
- SS: narrow (prominent) white band/line just behind the trabeculum; posterior lip of the scleral sulcus; attachment of the longitudinal ciliary muscle — BAIDYA fitz 756; ARAVIND fitz 214
- Iris processes insert at the level of the scleral spur and cover the ciliary body to a varying extent — BAIDYA fitz 756
- TM: from SL to SS, average width 600 µm — BAIDYA fitz 756; pigmented band, posterior part = primary outflow site — ARAVIND fitz 214; anterior non-pigmented — ARAVIND fitz 216
- Schlemm's canal: slightly darker line deep to the posterior trabeculum, especially if non-pigmented; blood sometimes seen — BAIDYA fitz 756
- SL: most anterior, whitish to variably pigmented; peripheral end of Descemet's membrane and anterior limit of the trabeculum — BAIDYA fitz 755; junction of angle structures and cornea — ARAVIND fitz 214
- Shaffer, Scheie, Spaeth, occludable angle — CONSISTENCY 1 = ARAVIND fitz 216–217 (v2, unchanged)
- Spaeth width = angle between tangents to the peripheral third of the iris and the inner corneoscleral wall — ARAVIND fitz 217
- Van Herick 4 ≥ 1, 3 ¼–½, 2 ¼, 1 < ¼; < ¼ may be occludable — CONSISTENCY 3; NAMRATA fitz 201; BAIDYA fitz 163–164; grade 0 = iridocorneal contact — NAMRATA fitz 201
Common errors
- Pressure → apposition opens (looks open) — BAIDYA fitz 755; NAMRATA fitz 198 (artefactual distortion)
- Gonioscopy before tonometry → IOP falsely low — NAMRATA fitz 195
- Angle recession must be confirmed by comparing with the fellow eye — NAMRATA fitz 372
- Others v2 (opposite quadrant, Sampaolesi/pigmented SL, synechial without indentation, iris processes)
Viva
- Principle: total internal reflection at the precorneal tear film / tear–air interface; goniolens replaces it with an interface of higher refractive index than cornea and tears; indirect mirror sends rays out at much less than the critical angle — BAIDYA fitz 755; ARAVIND fitz 212 (v2)
- Direct versus indirect table — ARAVIND fitz 213–214 (Q7): indirect — equipment available, quicker, compression possible, slit lamp light and optics; orientation confusing initially, difficult in narrow angles · direct — binocular comparison, simple orientation, can see over a convex iris; special equipment, time-consuming, expensive, uncomfortable supine
- Iris processes versus PAS; normal versus new vessels; Sampaolesi's line versus pigmented TM — ARAVIND fitz 215 (Q11–13) (v2)
- New vessels: Wand's stage 4 = vessels cross the scleral spur — ARAVIND fitz 248 (4.9 Q10)
- Sampaolesi's line: dark, dense, scalloped band of pigment on or anterior to Schwalbe's line; seen in pseudoexfoliation, not exclusive — also pigment dispersion syndrome and chronic inflammation — BAIDYA fitz 183 (Q6), 181; NAMRATA fitz 222–223 ("dark, dense and uneven wavy pigmentation along Schwalbe's line")
- Pseudoexfoliation: dandruff-like deposit on the trabecular meshwork — BAIDYA fitz 181
- Pigmentary glaucoma: wide-open angle; dense, homogeneous dark-brown pigment over the full circumference of the TM; pigmented Schwalbe's line — ARAVIND fitz 255 (4.10 Q4)
- Causes of TM pigmentation (11 listed; card names 6: pigmentary glaucoma/pigment dispersion, pseudoexfoliation, trauma, after laser iridotomy, after acute angle closure, anterior uveitis) — ARAVIND fitz 215 (Q14)
- Causes of PAS: PACG, anterior uveitis, ICE syndrome, after intraocular surgery, trauma — ARAVIND fitz 216 (Q17)
- After trauma: angle recession, trabecular dialysis, cyclodialysis, foreign bodies — ARAVIND fitz 216 (Q18); blood — ARAVIND fitz 215 (Q15)
- Angle recession: separation of circular from longitudinal ciliary muscle fibres; posterior displacement of the iris and widening of the CBB on gonioscopy; compare with the fellow eye — NAMRATA fitz 372; tear in the circular muscle of the ciliary body — BAIDYA fitz 135
- Cyclodialysis: separation of the ciliary body attachment from the scleral spur; can cause hypotony — NAMRATA fitz 372; BAIDYA fitz 135
- Miotics ineffective in angle-recession glaucoma (trabecular scarring); prostaglandin analogues drug of choice — ARAVIND fitz 243 (4.8 Q39)
- Blood in the angle: post-traumatic, post-surgical, post-laser; ghost cells as candy-stripe — ARAVIND fitz 215 (Q15); blood in Schlemm's canal: raised episcleral venous pressure (carotid-cavernous fistula, dural shunt, Sturge–Weber, superior vena cava obstruction, ocular hypotony, after gonioscopy) or low IOP (after trabeculectomy, hypotony) — ARAVIND fitz 215–216 (Q16)
- Angle closure: chronic — PAS late; acute/subacute — occludable configuration — ARAVIND fitz 233 (4.6 Q23)
- Congenital glaucoma (direct gonioscopy): smooth, homogeneous, compacted TM; high anterior iris insertion; vascular loops at the iris root from the major arterial circle (Loch Ness monster phenomenon); fine fluffy tissue on the peripheral iris (Lister's morning mist) — BAIDYA fitz 185

### Disagreements (v4)
- **CBB colour**: BAIDYA fitz 756 "pink, dull brown or slate grey"; ARAVIND fitz 214 "gray or dark brown". Card: Baidya (newer).
- **Which Goldmann lens**: BAIDYA fitz 164, 193 and NAMRATA fitz 198 name the two-mirror lens for grading; BAIDYA fitz 756 describes the three-mirror. Card: "Goldmann two- or three-mirror lens".
- **Van Herick "suspicious" grades**: NAMRATA fitz 201 calls grades 0–2 suspicious of angle closure; BAIDYA fitz 163–164 and NAMRATA fitz 198 say < ¼ (grade 1) may be occludable. Card: CONSISTENCY 3 (< ¼).
- **Sampaolesi's line position**: BAIDYA "on Schwalbe's line or anterior to it"; NAMRATA "along Schwalbe's line"; ARAVIND fitz 255 "a pigment line anterior to Schwalbe's line". Card: Baidya.
- **Principle wording**: ARAVIND Q1 "total internal refraction" (typo) versus Q3 and BAIDYA "reflection". Card: reflection (v2).
- v2 disagreements 1–10 stand.

### Omitted (v4)
- **Corneal wedge (parallelepiped) technique** for finding Schwalbe's line: not in the three books (searched "parallelepiped", "corneal wedge", "wedge", "optical section"). The card identifies each structure by the books' descriptions instead.
- **Order of quadrants**: no book gives one (only "rotate through 360°"). The card gives the opposite-angle rule only.
- **Inversion in the mirror beyond "mirror image of the opposite angle"** (for example whether left and right are reversed within the image): not in the books.
- **Goniolens disinfection agent and method; coupling-fluid name; contact-lens care**: not in the books.
- **Dim room "because light constricts the pupil and opens the angle"; beam kept off the pupil**: not in the books (Kanski only, not approved). The card says "semi-dark room", which the books give for any slit-lamp examination.
- **Grading of PAS extent in clock hours; Spaeth pigment grade numbering below 4**: not stated (CONSISTENCY 1 supplies 0–4).
- **Provocative tests** (ARAVIND fitz 234) — belong to G4.
- **Cycloscopy** (ARAVIND Q2), lens dimensions (single mirror 62°, Zeiss 64°), Ritch and Trabeculens lenses, goniotomy steps: left off for the budget.
- **PXF versus pigmentary glaucoma gonioscopy table** (ARAVIND fitz 261 Q15; garbled two-column text): belongs to G6/G11.

### Mnemonic
- "I CAN SEE TILL SCHWALBE'S LINE" (angle structures) — MNEMONICS PDF fitz 61 (mnemonic 60 / 71; page footer 63).
- "The smallest the lens, the more peripheral the view" (Goldmann three-mirror) — MNEMONICS PDF fitz 58 (mnemonic 57 / 71; page footer 60).

### Coverage of the books' FAQs
ARAVIND 4.2: Q1 definition, Q3 principle → Viva 1 · Q2 cycloscopy → omitted (budget) · Q4 lenses → Instrument check · Q5–6 direct, indirect → Instrument check, Viva 2 · Q6 technique → Steps · Q7 comparison → Viva 2 · Q8 compression → Steps, Viva 3 · Q9 structures → Normal values table · Q10 uses → Indications · Q11–13 → Viva · Q14 TM pigment → Viva · Q15–16 blood → Viva · Q17 PAS causes → Viva · Q18 trauma → Viva · Shaffer, occludable, Scheie, Spaeth → Normal values.
ARAVIND 4.6 Q23 (findings in angle closure) → Viva; Q24 (oedema, glycerin) → Instrument check, Steps · 4.7 (gonioscopy of both eyes in an attack; corneal indentation) → Viva 3 · 4.8 Q12 (yearly gonioscopy) → Indications; Q39 (miotics in angle recession) → Viva · 4.9 Q10 (Wand stage 4) → Viva · 4.10 Q4 (pigmentary glaucoma) → Viva.
BAIDYA p.741–742 (instrument section): every point → Instrument check, Normal values, Viva · p.150, 154 → Steps, Indications · p.152 (double hump) → Viva 3 · p.169 Q6 (Sampaolesi) → Viva · p.171 (congenital) → Viva *(extra)* · p.715 (gold standard) → Indications/Viva.
NAMRATA PACG (p.178–184): Q1 Van Herick → Normal values · Q2–Q8 (risk factors, mechanisms, LPI, ISGEO) → card G4 · examination text (two-mirror first, indentation, gradings) → Instrument check, Steps · POAG Q6 → Steps · p.354 Q6 (rings of trauma) → Viva (angle recession, cyclodialysis).

### v4 format decisions and final counts
- Final counts: lint 1,207 words (task budget 800–1,100, +10% = 1,210; the `:::gonio` block counts about 35); builder 1,138; `wc -w` 1,394. 13 Q/A pairs, all in the viva section.
- Steps became a 2-column table (Step | Why); consent, instruction, anaesthetic, disinfection (before and after), the order relative to Van Herick, tonometry and dilatation, and deferral for corneal oedema are all rows. Fluorescein is not used in gonioscopy (no book mentions it), so it has no row.
- New tables: lenses (Lens | Contact and coupling | Best for) and the angle structures (Structure | How to recognise it). Shaffer, occludable, Scheie, Spaeth and Van Herick kept exactly per CONSISTENCY 1 and 3; Van Herick grade 0 (NAMRATA fitz 201) dropped to keep CONSISTENCY 3's four grades.
- `:::gonio` unchanged in content (CONSISTENCY 2); caption shortened. The department line is CONSISTENCY 2's wording, split into two sentences, with "POAG" spelt out (abbreviation rule, as the v2 fact-check did).
- Inferred, kept as procedure: "Disinfect the lens before and after each patient — it touches every patient's cornea" (Template D asks for disinfection; no book gives a goniolens agent); "The lens curve is steeper than the cornea" is the book's reason for the coupling fluid (BAIDYA fitz 756).
- Cut for the budget (verified, can return): CBB narrower in hypermetropes, wider in myopes; TM width 600 µm; Schlemm's canal blood; trabecular dialysis; blood in Schlemm's canal causes; Wand stage 4; pigmentary-glaucoma gonioscopy; indentation breaking an acute attack is kept only under Indications; the Goldmann three-mirror mnemonic (only the angle-structures mnemonic stays).
- Lint flags the Keywords line (35 words, a list) and the CONSISTENCY 2 sentence (22 words, contains a quotation); both left as they are.

## Examiner additions

Pass 2 (senior examiner), 8 Oct 2026. Every new or changed claim, with its page. Review: `checks/G9_review.md`.

### Added
- Record a closed quadrant as appositional (opens on indentation) or synechial (PAS) — BAIDYA fitz 755 (indentation opens apposition, PAS stays closed); ARAVIND fitz 217 (grade O needs indentation to tell them apart); two forms of iridotrabecular contact, appositional and synechial — ARAVIND fitz 230 (4.6 Q4)
- Written example: pigmented TM as the deepest structure = Shaffer grade 2 (moderately narrow) — ARAVIND fitz 216 (book Shaffer, Arabic numeral, outside the diagram, per CONSISTENCY 1–2)
- CBB wider in myopic eyes (narrower in hypermetropes) — BAIDYA fitz 756
- Blood in Schlemm's canal: after gonioscopy, raised episcleral venous pressure (carotid-cavernous fistula, dural shunt, Sturge–Weber, superior vena cava obstruction, ocular hypotony), low IOP (after trabeculectomy, hypotony) — ARAVIND fitz 215–216 (Q16); blood can sometimes be seen in the canal — BAIDYA fitz 756
- Plateau iris on indentation: double hump — BAIDYA fitz 166; sine-wave peripheral iris "hanging over the anterior ciliary processes" — ARAVIND fitz 231 (4.6 Q8)
- ISGEO staging: PACS = posterior-meshwork ITC in 3 or more quadrants (almost 270°), no PAS, normal IOP, disc and field — BAIDYA fitz 165; PAC = ITC > 270° with elevated IOP and/or PAS, normal disc and fields; PACG = adds optic nerve and field damage — ARAVIND fitz 229 (4.6 Q2). Same wording as card G4.
- Direct versus indirect rewritten as sentences: direct — erect view, can see over a convex iris, time-consuming, supine; indirect — quicker, compression possible, orientation confusing initially — ARAVIND fitz 212 (Q5), 213–214 (Q7)
- Angle recession: widening of the ciliary body band is the most important sign; compare with the fellow eye — NAMRATA fitz 216, 372

### Moved or changed
- Occludable-angle definition moved from Normal values into the viva (same wording) — ARAVIND fitz 217 (CONSISTENCY 1).
- Old viva "Gonioscopy in angle closure?" replaced by the occludable + ISGEO answer (acute/chronic line from ARAVIND fitz 233 dropped).
- "IOP" avoided in the new answer ("pressure"), because the card never expands IOP.
- Indications line shortened to "secondary causes" (Step 12 lists them).

### Disagreement noted
- ITC extent for PACS: BAIDYA fitz 165 "3 or more quadrants (almost 270°)"; ARAVIND fitz 229 "greater than 270°"; NAMRATA fitz 200 "> 180°". Card: Baidya (newest), as on G4.

### Cut for the budget (verified; all are on other cards)
- Viva "Why do miotics fail in angle-recession glaucoma?" (ARAVIND fitz 243) — on G11.
- *(extra)* congenital glaucoma gonioscopy (BAIDYA fitz 185) — on G11.
- Indications "indentation can break an acute attack" (ARAVIND fitz 214) — on G4.
- Common-errors row "not comparing the fellow eye" (NAMRATA fitz 372) — kept in the trauma answer.
- The mnemonic line "I CAN SEE TILL SCHWALBE'S LINE" (MNEMONICS PDF fitz 61) — the order stays in Step 10 and the structures table.

### Not added (considered)
- Deferring gonioscopy 4–6 weeks after acute trauma (NAMRATA fitz 216): on G11; budget.
- Goldmann three-mirror: central lens 30° posterior pole, equatorial and peripheral mirrors (BAIDYA fitz 756; ARAVIND fitz 213): budget.
- Coupling-fluid name: the books name methylcellulose only for UBM and laser lenses (BAIDYA fitz 729, UBM; NAMRATA fitz 452, YAG capsulotomy lens), never for a goniolens.
- Van Herick technique (slit beam at the temporal limbus at 60°): only on the department slide; it is on G4 Step 3.
