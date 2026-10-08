# CARD SPEC — M.S. Ophthalmology practical case cards (TNMGRMU, exam 16 Oct 2026)

You are drafting case cards for a final-year M.S. Ophthalmology postgraduate at Joseph Eye Hospital (JEH), Tiruchirappalli.
His weak areas are **case presentation, fundus description and retinoscopy**. His goal is **first rank**. His thesis is on
AS-OCT angle parameters and phacoemulsification in primary angle-closure suspects, so examiners will ask him deep
angle-closure questions.

Write as a **senior ophthalmology consultant who trains M.S. candidates for this exam and has sat on its examining panels**.
Think through the case like an examiner first, then write like a senior teaching a junior the night before:
correct, complete, easy to remember.

---------------------------------------------------------------------------------------------------
## 1. THE FOUR STANDARDS (every card)

1. **Plain English, exact clinical terms.** Short sentences, one idea per line. Every finding, sign, test, classification,
   drug and operation uses the exact term examiners use ("grade 2 relative afferent pupillary defect", never "pupil reacts
   less"). Explain a hard term once, in brackets, after the term — never instead of it.
2. **Correct.** Every fact, number, grade and dose must come from YOUR SOURCE PACKET (the three books: Baidya 2024,
   Namrata Sharma (AIIMS), Aravind FAQ 2013). **Never use your own memory or the web for a clinical fact.** If the packet
   does not support a fact, leave it out. If the books disagree on a number or a treatment, use the newer book
   (Baidya > Namrata > Aravind) on the card and record the disagreement in your notes file (not on the card).
3. **Case-specific.** The generic proforma (particulars, general examination, the full list of ocular structures) lives in
   a separate index file. A card holds only what is special to THIS case. Do not pad with generic text.
4. **Neat and consistent.** The exact headings below, in the exact order. Tables for comparisons and classifications.
   Numbered steps for procedures.

---------------------------------------------------------------------------------------------------
## 2. WRITING RULES

- **British spelling**: oedema, haemorrhage, anaemia, tumour, paediatric, haemoglobin, oesophagus, centre, colour, fibre,
  ischaemia, anaesthesia, haemorrhagic, leucocyte, glaucomatous (same). The books use American spelling — convert it.
- **Abbreviations**: expand each one at its first use on the card, e.g. "intraocular pressure (IOP)". After that the
  abbreviation is fine in tables and notes. **Never use any abbreviation inside a say-it script** (spell everything out:
  "intraocular pressure", "right eye", "cup–disc ratio", "relative afferent pupillary defect", "millimetres of mercury").
- **Classifications**: name the system and give its grades (e.g. ISGEO, Shaffer, Spaeth, Van Herick, Hodapp–Parrish–
  Anderson, Scheie). Only systems present in your packet.
- **Numbers and doses**: every one must be traceable to a packet page (you will list them in the claims ledger).
- **Bold** only the words that earn marks (named signs, grades, numbers, drug names, decisive findings). Not whole lines.
- **No book names, no page numbers, no "Baidya says"** anywhere in the card body. They go only in the `@readmore` line.
- **Patients**: never a real name or hospital number. Write "Mr X, a 65-year-old man…".
- Use en dash for ranges (10–21 mm Hg), "mm Hg" with a space, "µm", "°" for degrees, "×" for times.
- Plain ASCII quotes are fine. No emoji except the ★ in the badge line.

---------------------------------------------------------------------------------------------------
## 3. THE CARD FILE FORMAT (a small Markdown dialect — a script turns it into Word/PDF, so follow it exactly)

Header lines (each on its own line, at the top, in this order):

    @card G1
    @title Primary open-angle glaucoma, including the glaucomatous optic disc
    @badge ★ Kept 6 times at JEH last year · Long case and short case
    @kind long
    @readmore Baidya p.152–167 · Namrata p.171–178 · Aravind 4.8, 4.15

- `@kind` is one of: `long` (long case or long+short), `short`, `fundus`, `task`, `chart`.
- `@readmore` uses **printed** page numbers (the packet header of every page gives "fitz N = printed p.M").
  Aravind is cited by section number (4.8, 4.15 …).

Body syntax:

    ## Section heading            ← one of the template headings below, exactly as written
    ### Sub-heading               ← optional, inside a section
    Plain line                    ← a paragraph (consecutive lines join into one paragraph; blank line ends it)
    - bullet                      ← bullet; "  - sub-bullet" (two spaces) for one nested level
    1. step                       ← numbered list (write 1. 2. 3. …)
    **bold**  *italic*            ← inline emphasis
    @widths 22 38 40              ← OPTIONAL line directly before a table: column widths in %, must sum to 100
    | Col A | Col B | Col C |     ← table: header row, then separator row, then body rows
    |---|---|---|
    | cell | cell<br>second line | cell |     ← <br> = line break inside a cell
    Q: question text              ← viva question (always followed by an A: line)
    A: answer text (1–3 lines)
    :::say                        ← opens a shaded "say-it" box (spoken script)
    ...paragraphs/bullets...
    :::                           ← closes the box
    :::trap  …  :::               ← red-edged box (use only for the Examiner traps section body)
    :::recall  …  :::             ← green box (use only for the Quick recall section body)
    :::short  …  :::              ← light box (use only for the Short-case version body)
    :::gonio                      ← gonioscopy cross diagram (draws two crosses, right eye and left eye)
    RE | S=III SS | T=III SS | I=IV CBB | N=III SS
    LE | S=II TM | T=III SS | I=III SS | N=III SS
    caption: Modified Shaffer grading — deepest structure seen in each quadrant
    :::

Rules: no other Markdown (no `#` single-hash headings, no `>` quotes, no HTML except `<br>` in table cells, no
horizontal rules, no code blocks, no footnotes). Every table row must have the same number of cells as its header.
Keep table cells short (they render at 9 pt). A table may have at most 4 columns.

---------------------------------------------------------------------------------------------------
## 4. TEMPLATES — the exact `##` headings, in this order

### A. LONG-CASE CARD (`@kind long`) — 4 to 6 printed pages ≈ 2,300–3,200 words in total
(The title bar is made from the header lines; do not write it as a section.)

    ## At a glance
      3 lines (3 bullets): what the case is · why it is kept · what examiners test.
    ## Case format — history
      Start with the chief-complaint wording to use (one line, in the department's style, e.g.
      "Mr X, a 70-year-old man, has come for regular follow-up for glaucoma" or "…came with complaints of defective
      vision in both eyes for the past 1 year").
      Then ONE table with columns: What to ask | Why it matters. Rows grouped (use a bold first cell like
      "**History of present illness**", "**Negative history**", "**Past, drug and surgical**", "**Personal and family**").
      **Every negative-history row must name the differential it rules out** (e.g. "No coloured haloes → rules out
      intermittent angle closure").
    ## Case format — examination
      ### General and systemic (this case only)  — bullets, only points specific to this case.
      ### Ocular examination — RE | LE template
        A table with columns: Structure | Look for in this case | How to record (example).
        One row per structure in the department's order: visual acuity (with pinhole) → head posture/ocular posture if
        relevant → lids and adnexa → conjunctiva → cornea → anterior chamber (Van Herick grade) → iris → pupil → lens →
        intraocular pressure (method, time) → gonioscopy → fundus (media, disc, vessels, background, macula) → fields.
        Skip structures with nothing case-specific (say "as in master proforma" for them in one row at most).
        The "How to record (example)" column uses the department's short recording style, e.g.
        "VH grade IV (ND)", "RTL 3 mm", "Tn (GAT) 18 mm Hg at 10 am", "PCIOL", "CPN (colour, pattern normal)".
      ### Special tests
        For each special test of this case: how to do it (2–4 numbered steps) and how to record it.
    ## Summary and complete diagnosis
      - A fill-in summary paragraph with blanks: "Mr ___, a ___-year-old man, presented with … On examination …"
      - The complete-diagnosis formula on one line:
        **eye → disease → type / stage / grade → aetiology → complications or status → other eye**
      - 2–3 example diagnosis lines in exam wording (e.g. "Both eyes primary open-angle glaucoma with pseudophakia, with
        intraocular pressure under control on medical management").
    ## Differential diagnosis
      Table: Condition | For | Against   (4–6 rows)
    ## What you must know
      ### Definition
      ### Classification   — table, with the named system in the heading or first row
      ### Pathogenesis     — 3–5 lines
      ### Investigations   — table: Test | Why | Expected finding
      ### Management       — stepwise: Medical (drug, strength, frequency — table if several) → Laser → Surgery
                             (indications and key steps) → Follow-up
      ### Complications
      ### Prognosis and counselling
      ### Recent advances  — only what is in the packet; if nothing, write one line "Nothing beyond the above in your
                             practical books." (do not invent)
    ## Viva questions
      20–30 questions, each `Q:` then `A:` (1–3 lines). Grouped with these `###` sub-headings, in this order:
      ### Why did you ask / examine…?
      ### Diagnosis
      ### Investigations
      ### Management and surgery
      ### Complications
      ### Recent advances
      Most likely questions first within each group. Draw them from Baidya's "Frequently Asked Questions", Namrata's
      "Viva Questions", Aravind's FAQs and Aravind's "What is the rationale for asking…?" questions.
      The first group MUST contain "Why did you ask about …?" / "Why did you look for …?" questions modelled on Aravind's
      model case sheets.
    ## Examiner traps
      :::trap with 4–6 one-line bullets — what costs marks in this case.
    ## Short-case version          ← ONLY on long+short cards (badge says "Long case and short case")
      :::short — the spot diagnosis, the focused examination to show (numbered), and 3 signs to demonstrate.
    ## Say-it script
      :::say — the exact 2-minute closing: summary → complete diagnosis → plan. Clinical register.
      NO abbreviations at all inside the box. About 180–260 words.
    ## Quick recall
      :::recall — 6–10 one-line facts, then a line "**Mnemonic:** …" using the matching mnemonic from the mnemonics
      PDF if your packet has one; otherwise "**Mnemonic:** none in your mnemonics file for this case."

### B. SHORT-CASE CARD (`@kind short`) — 1 to 2 pages ≈ 700–1,000 words

    ## The instruction you may get        — e.g. "Examine the fundus of this patient" (1–3 likely instructions)
    ## Spot                              — what you see first (2–4 bullets)
    ## Focused examination               — numbered steps: what to show the examiner
    ## Say-it description                — :::say box with the spoken description → ends with the complete-diagnosis line
    ## Differentials                     — table: Condition | Distinguishing point (2–3 rows)
    ## Must know                         — 6–10 bullets: classification, investigations, management
    ## Viva questions                    — 10–15 Q:/A: pairs (no sub-groups needed)

### D. TASK CARD (`@kind task`) — about 1 page, never more than 1.5 pages ≈ 550–750 words

    ## Indications
    ## Instrument check
    ## Steps                — numbered; MUST include consent, explaining the test to the patient (instruction),
                              topical anaesthetic drops, disinfection of the instrument — examiners tick these
    ## How to record the result
    ## Normal values and interpretation
    ## Common errors
    ## Viva questions       — 8–12 Q:/A: pairs

### E. CHART / PICTURE CARD (`@kind chart`) — about 1 page, never more than 1.5 pages ≈ 550–750 words

    ## What it is
    ## Reading order        — numbered, in the "read in this order" style
    ## Findings to name
    ## Grading or classification
    ## What each finding leads to (management)
    ## Viva questions       — 8–12 Q:/A: pairs

---------------------------------------------------------------------------------------------------
## 5. THE HOUSE FORMAT (from the department's own handwritten case sheets — follow its order and wording)

Department POAG case sheet (Case Sheet Proforma, PDF pages 7–9), in this order:
1. Opening line: "Mr X, 70-year-old male, has come for regular follow-up" (chief complaint).
2. **History of presenting illness**: "Patient was apparently normal __ years before, after which he had defective vision
   in both eyes which was gradual in onset, progressive in nature, not associated with pain/headache. He visited an
   ophthalmologist at his place, was found to have increased pressure in both eyes and was started on eye drops for both
   eyes (1 drop at bedtime). Then he came to our institution for further follow-up."
   Negative history as starred lines: No h/o headache with vomiting and pain · No h/o coloured haloes · No h/o
   redness/watering/pain · No h/o any trauma to eye · No h/o frequent change of glasses.
3. **Past history**: K/c/o DM / HTN / TB / asthma / epilepsy for past __ years, on treatment __; h/o cataract surgery
   __ years ago at __. The senior's added points (in coloured ink): sulfa allergy, any other drug allergy, head injury,
   CVA, migraine, Raynaud's, PVD, steroid use.
4. **Personal history**: mixed diet; smoker/alcoholic for __; normal bowel and bladder habits.
5. **Family history**: no h/o similar illness in family members.
6. **Treatment history**: on treatment for glaucoma for the past __ years in the form of eye drops (drug, strength,
   frequency, e.g. "E/D timolol 0.5% BD").
7. **General examination**: moderately built and nourished; not anaemic, icteric, cyanosed, no clubbing, no generalised
   lymphadenopathy; PR __/min regular, normal volume; RR __/min; BP __ mm Hg.
8. **Systemic examination**: CVS S1 S2 heard, no murmur; RS NVBS; P/A soft, no organomegaly; CNS no focal neurological
   deficit.
9. **Ocular examination table, columns RE | LE**, rows: Visual acuity · Tn by GAT (mm Hg) · (CCT µm) · Lids ·
   Conjunctiva · Cornea · Anterior chamber ("VH grade IV (ND)" = Van Herick grade 4, normal depth) · Iris ("CPN") ·
   Pupil ("RTL 3 mm" = round, reacting to light) · Lens ("PCIOL").
10. **Gonioscopy**: "By modified Shaffer's grading" — a cross (X) diagram for each eye with the grade written in each of
    the four quadrants (e.g. III in all quadrants). Last year's sheets also wrote the deepest structure seen (e.g. SS =
    scleral spur).
11. **Fundus** (RE and LE described separately): media clear; disc vertically oval in shape, well-defined margins,
    CDR 0.8; nasalisation +; bayoneting +; peripapillary atrophy +; NRR thinning + (superior/inferior); inferior
    notching +; tessellated fundus. Then **fields (confrontation test)**.
12. **"My provisional diagnosis"**: e.g. "(BE) primary open angle glaucoma with pseudophakia with intraocular pressure
    under control with medical management."

The SENIORS' CORRECTIONS on that sheet (orange ink) show what examiners want — follow them:
- add **extraocular movements (EOM)** right after visual acuity in the RE | LE table;
- the **central corneal thickness row was struck out** of the clinical table (put CCT under investigations instead);
- **"VH" (Van Herick) circled** — always grade the anterior chamber by Van Herick;
- **"Fields (confrontation test)"** added after the fundus, before the diagnosis;
- a **drug and systemic history checklist** added: sulfa allergy, other drug allergy, head injury, CVA, migraine,
  Raynaud's, PVD, steroid use.

The department's sheets are already typed up (anonymised) in `/home/claude/cards/notes/transcripts/proforma_p01-17.md`
(PDF pages 7–9 = POAG sheet, 10–13 = DigiNerve slides) and `proforma_p18-31.md`. Read the relevant pages there; open
the images only if something is unclear.

The department's FUNDUS formula (from its long write-ups): distant direct ophthalmoscopy "(at 1 arm distance) shows a
good red glow" → close direct ophthalmoscopy "reveals clear media" → disc (vertically oval, normal size, well-defined
margins, pink, CDR 0.3, healthy neuroretinal rim) → "vessels arising from the centre of the disc, branching
dichotomously, AV ratio 2:3" → each lesion as appearance + location + "s/o <lesion>" → macula (foveal reflex present /
absent, oedema) → "indirect ophthalmoscopy shows the peripheries to be normal" → "+90 D slit-lamp biomicroscopy
confirmed the findings".

Department teaching slides (DigiNerve, Case Sheet Proforma PDF pages 10–13) — the description scripts to copy:
- **AC depth, pen-torch method**: location of torch (temporally) → area of iris illuminated (whole iris = grade 4,
  normal depth; 2/3 of iris = grade 2, shallow) → grade.
- **AC depth, Van Herick technique**: slit-thin beam 1 mm inside the temporal limbus at a 60° angle → ratio of
  corneal thickness to the gap between posterior cornea and anterior iris (1:1 → grade 4, normal depth, wide open angle;
  1:1/4 → grade 2, shallow, occludable angle) → grade.
- **Bleb**: height (flat / medium …) · clarity (translucent / opaque) · horizontal extent (clock hours) · location over
  limbus (superiorly) · vascularity (avascular / highly vascular with corkscrew vessels) · microcysts (present/absent) ·
  subconjunctival fibrosis · sutures. "Suggestive of a good functioning bleb" vs "suggestive of a failing bleb".
- **Peripheral iridotomy/iridectomy**: margin (ragged irregular edges = laser; sharp well-defined edges = surgical) ·
  site (clock position) · surrounding iris (hypopigmented with pigment dispersion after laser) · retro-illumination
  test for patency (light reflex seen = patent).
- **Neovascularisation of iris**: appearance (thin) · character (friable) · course (arborising) · arrangement
  (irregular) · extent (clock hours).
- **Pseudoexfoliation — four points**: colour of material (white) · nature (flaky, dandruff-like) · location (pupillary
  margin as tufts; anterior lens capsule as a disc-shaped deposit) · with or without iris atrophy.
- **Glaucomatous disc**: size · shape of disc (vertically oval) · shape of cup · margins · colour · cup–disc ratio ·
  neuroretinal rim · location and nature of vessels (centrally arising, dichotomously branching) · arteriovenous ratio
  (2:3) · peripapillary changes (peripapillary atrophy) · RNFL defects (superior and inferior wedge-shaped).

Aravind model case sheets: describe each lesion, then say "suggestive of…". Aravind diagnosis wording, e.g.
"Right eye: primary open angle glaucoma status post trabeculectomy with failed bleb and grade 2 nuclear sclerosis.
Left eye: primary open angle glaucoma and grade 2 nuclear sclerosis." Every model sheet ends with "Why do we ask…?" /
"What is the rationale…?" questions — every long-case card needs a set like this.

---------------------------------------------------------------------------------------------------
## 6. WHAT YOU DELIVER (two files)

1. `/home/claude/cards/drafts/<ID>.md` — the card, in the format above. Nothing else in this file.
2. `/home/claude/cards/drafts/<ID>_notes.md` — working notes:
   - **Claims ledger**: every number, dose, strength, frequency, grade, cut-off, percentage, classification and
     named sign on the card, one per line, with the packet page(s) that support it, e.g.
     `- Normal IOP 10–21 mm Hg — ARAVIND fitz 204`
     `- Timolol 0.25%/0.5% twice daily — BAIDYA fitz 171`
   - **Disagreements** between books, and which one you used.
   - **Omitted**: things you wanted to include but could not find in the packet.
   - **Mnemonic**: which mnemonic you used and its packet page, or "none".

Check before you finish:
- headings exactly as the template, in order; every `:::` box closed; every table row has the right number of cells;
  `@widths` sum to 100;
- abbreviations expanded at first use; none inside `:::say`;
- British spelling; no book names or page numbers in the body; no patient names;
- word count within the budget (`wc -w` your file).
