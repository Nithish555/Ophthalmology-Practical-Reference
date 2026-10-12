# MASTER PROMPT — PRACTICALS v4: CASE CARDS, PRESENTATION AND VIVA NOTES (cloud edition)
## M.S. Ophthalmology practical exam (Tamil Nadu Dr M.G.R. Medical University) · Friday 16 October 2026

> **How to use.** Open a Claude Code cloud session on the GitHub repo **`Nithish555/Ophthalmology-Practical-Reference`** and send:
> `Read MASTER_PROMPT_PRACTICALS_v4.md and follow it. SUBJECT: RETINA`
> Subjects: **INDEX · GLAUCOMA · RETINA · CORNEA · MISC · NERVES · OCULOPLASTY · VIVA · ALL**. You may name several, e.g. `SUBJECT: INDEX, GLAUCOMA`.
>
> **To continue where a session stopped,** send the same line with that subject. This works from any Claude account. `SUBJECT: CONTINUE` resumes every unfinished subject.
>
> **Everything lives in the repo:** the sources, the work in progress and the finished files.
> - **Each session saves as it goes.** It commits and pushes after every card step (§10.5).
> - **A stopped session loses little.** If it stops halfway (usage limit, closed tab, switching accounts), it loses at most the step it was on.
> - **The next session reads `Case_Cards/status/`** and carries on from there.
>
> **Any Claude account can continue,** as long as its GitHub connection can push to this repo. Either sign in to GitHub as Nithish555 when connecting it, or add that account as a collaborator on the repo.
>
> **Running sessions in parallel (fastest).**
> 1. Start one session first with `SUBJECT: INDEX, GLAUCOMA`. Its first job is to bring the shared card spec up to v4 (§10.6, step 1).
> 2. When `Case_Cards/status/00_SPEC.md` says **"synced to v4"**, start the others: `RETINA` · `CORNEA` · `MISC` · `NERVES, OCULOPLASTY` · `VIVA` (last).
>
> `ALL` builds everything, in the §10.6 order, in one session.
>
> **What v4 does.** It makes one card for every case on the department checklist, built only from the reference files and books in this repo. Each card is complete study notes and an exam guide in one: read it, and you can present the case, perform the examination and answer the viva.
>
> **Not in the repo.** The v1 prompt and the 10-day plan, which cover refraction, ward rounds, OSCE skills, the thesis and the log book, are on the candidate's Mac only.
>
> Written 8 Oct 2026. **Every path below is relative to the repo root.**

**What changed**
- **v4 (8 Oct) — the GitHub cloud edition.**
  - **Answer writing (§2.3–§2.6):** a fixed answer structure for each kind of question; standard book definitions first; a "Keywords the examiner listens for" line on every card, with each keyword used in the answers; simple English in a professional register.
  1. **Runs on the repo.** Every path is a repo path (§5, §10.1).
  2. **Saves and resumes.** It commits and pushes one card step at a time, and keeps a status file per subject, so any session from any account can resume (§10.3–§10.5).
  3. **Checks its sources first,** and stops if Baidya is missing (§10.3).
  4. **Installs its own tools** (§10.2).
  5. **Scans before every push.** The repo is public as of 8 Oct 2026, so every commit is public; a privacy scan runs before each push (§10.5, §12).
- **v3 (7 Oct) — the content rules:**
  1. **The candidate's five asks** are the core of every card:
     - history with a reason for every question;
     - the must-do examination, with the viva each step brings;
     - differentials and how to tell them apart;
     - investigations and their significance;
     - a stepwise management ladder: each drug's mechanism, adverse effects and contraindications, then combinations, then laser, then surgery with advantages and disadvantages (§4).
  2. **Self-sufficient, priority-ordered notes.** A senior teaching assistant writes each card and a senior examiner reviews it. Basics come first, then important points, then minor ones. A read-and-answer test proves the card is enough on its own (§1, §2).
  3. **Every checklist line** maps to a card, and to the named block on it that answers it (§8.3).
  4. **One treatment toolkit card per subject** holds the full drug, laser and surgery profiles (§8.2, template F).
  5. **Short cases answered in full.** Every long case gets a spoken opening as well as the closing.
  6. **GLAUCOMA and INDEX** (built under v2 on 7 Oct) are upgraded, not rebuilt (§11).
  7. **Corrections to v2:**
     - p 21 of the proforma is an optic-atrophy fundus write-up;
     - `FUNDUS CASE.pdf` has drawings only;
     - C2 also covers "Corneal ulcer" and "Hypopyon ulcer".

---

## 1. YOUR ROLE — teach first, then examine

Every card passes through two senior roles. Give them to different sub-agents where you can, so the examiner reads the card fresh.

**Pass 1 — the writer: a senior teaching assistant.**
- You sit with the candidate in the week before the exam.
- For every point, write what it is, why it matters and how to say it to the examiner.
- Never leave a term, sign or test unexplained. Never write a question without its answer.
- Gather every fact from the books before you write (§7). Write nothing the books do not support.

**Pass 2 — the reviewer: a senior examiner.** You have sat on TNMGRMU M.S. practical panels. Read the card as if the candidate were in front of you at this station:
- What are the first five questions I would ask on this case? Are they on the card, answered, near the top?
- What must a pass candidate know (basics)? What marks out a good one (important)? What would I ask only a first-rank candidate (minor)? Is the card in that order, and is every basic there?
- Where will he lose marks? Put those in "Examiner traps".
- Are the keywords I listen for on the card, and does each one appear in an answer? Does each answer open with its keyword and follow the §2.3 structure? Is each definition the book's?
- Would a tired junior understand every sentence on first reading (§2.6)?
- Run the read-and-answer test (§2.7). Fill each gap from the books, never from memory.

Then an **independent fact-check** tests every claim, including anything the examiner added (§12).

**The candidate.** A final-year M.S. postgraduate at Joseph Eye Hospital (JEH), Tiruchirappalli. His weak areas are **case presentation, fundus description and retinoscopy**, and his goal is first rank. His thesis is on AS-OCT angle parameters and phacoemulsification in primary angle-closure suspects, so expect deep angle-closure questions.

**The standard every card must meet:**
1. **Enough on its own.** After reading the card he can present the case, perform the examination and answer the viva, without opening a book.
2. **Plain English, exact clinical terms.** Short sentences, one idea per line. Every finding, sign, test, classification, drug and operation uses the exact term examiners use ("grade 2 relative afferent pupillary defect", never "pupil reacts less"). Explain a hard term once, in brackets, after the term — never instead of it.
3. **Correct.** Every fact, number, grade and dose comes from the sources in §7. Omit anything you cannot verify.
4. **Priority-ordered.** Basics first, then important points, then minor ones (§2.1).
5. **Well structured, with the examiner's keywords.** Each answer has the shape for its kind of question, opens with its keyword, and starts from the standard definition (§2.3–§2.5). The English is simple and the register professional (§2.6).
6. **Case-specific and consistent.**
   - A card holds only what is special to its case. The generic proforma is in the index (§9.0). The shared drug, laser and surgery profiles are on the subject's toolkit card (§8.2).
   - The same headings appear in the same order on every card. Use tables for comparisons and numbered steps for procedures.

---

## 2. HOW DEEP TO GO, AND HOW TO WRITE EACH ANSWER

Every answer on a card must be **correct, complete, professional and easy to read**. The examiner listens for exact medical terms and a clear order. The candidate needs simple English to learn it fast. This section sets the rules for both.

### 2.1 Three tiers — basics, then important, then minor
In every section, write the basics first, then the important points, then the minor ones.

| Tier | What belongs here | Share of the card | How it is shown |
|---|---|---|---|
| **Basic** | What every pass candidate must know; missing it fails the station: the definition, the must-do examination in order, how to record each finding, the complete diagnosis, the main differentials, first-line investigations, first-line treatment with its mechanism and main side effect, the standard operation and its indications | about 60% | First in every section. Never cut. |
| **Important** | Commonly asked; separates a good candidate from an average one: named classifications and grades, second-line treatment, combinations, choosing between operations, complications and their management | about 30% | After the basics. |
| **Minor** | Asked only of a first-rank candidate or by a probing examiner: newer drugs, genetics, trials, rarer variants | at most 10% | Last, tagged *(extra)*. Cut these first when over budget. |

### 2.2 Depth — detailed, not exhaustive
- **Fact plus reason.** Give each point as the fact plus its reason ("…because…"). A viva answer runs 1–3 lines; a list answer up to 6 short items; a management step 2–4 lines.
- **One follow-up deep.** Answer the question and the examiner's most likely next question ("Why?", "What else?", "What next?"), then stop.
- **Never telegraphic.** If a junior could not follow a line without the book, it is too short. Write full short sentences. In tables, make each cell a complete thought.
- **Leave out:**
  - the history of eponyms;
  - rare variants the books mention only in passing;
  - trial details beyond the name and a one-line result;
  - numbers no examiner would ask.

### 2.3 Answer structure — the same shape for the same kind of question
Examiners mark structure as well as content. Use the shape for the kind of question. Lead with the answer, never with background.

| The question asks for | Structure of the answer |
|---|---|
| **A definition** ("What is…?") | 1. The standard definition, in the book's wording, with its key terms unchanged. 2. One line in plain words. 3. The 2–3 features that make the diagnosis. |
| **A classification** | 1. Name the system. 2. Give its grades in order, as a table or numbered list. 3. Say which grade this patient has. |
| **Causes** | 1. Group them (for example congenital / acquired, or ocular / systemic). 2. Put the most common first in each group. 3. Add the mnemonic, if the mnemonics file has one. |
| **Symptoms and signs** | 1. Symptoms first. 2. Then signs in examination order, front to back: lids → conjunctiva → cornea → anterior chamber → iris → pupil → lens → intraocular pressure → angle → fundus. |
| **Difference between A and B** | A table with the same rows for both: age, onset, symptoms, the key sign, the key test, treatment. |
| **Investigations** | In order: confirm the diagnosis → stage or grade it → find the cause → baseline for follow-up → fitness for surgery. Give the purpose of each. |
| **Management** | Aim → medical → laser → surgery → follow-up and counselling, in the first person, with the trigger for each step up (§4.5). |
| **A drug** | Class → strength, dose and frequency → mechanism of action → adverse effects (ocular, then systemic) → contraindications. |
| **An operation or laser** | Indications → principle → key steps (numbered) → advantages → disadvantages and complications. |
| **Complications** | Grouped by time (during surgery / early / late) or by site (ocular / systemic). Most common and most serious first. |
| **"Why did you ask / check…?"** | 1. The reason, in one sentence. 2. What a positive answer would mean. 3. The test that would confirm it. |
| **Prognosis** | Good factors, then poor factors. |

### 2.4 Definitions and medical terms
- **Every card starts its "must know" part with the standard definition** of its condition. Use the newest book that defines it (§7), keeping that book's key terms exactly. The fact-check compares each definition with the book (§12).
- **Related terms.** After the main definition, define the 3–6 related terms an examiner may ask, one line each. For a glaucoma card, for example: ocular hypertension, normal-tension glaucoma, glaucoma suspect, target pressure.
- **Explain once.** Explain each hard term once, in brackets, the first time it appears: "**bayoneting** (double angulation of a vessel)". Never replace the term with the explanation.
- **Exact names.** Write every named sign, grading system, test, drug and operation exactly as the books do, with correct spelling and dashes, e.g. "Hodapp–Parrish–Anderson", "Van Herick", "relative afferent pupillary defect".

### 2.5 Keywords the examiner listens for
- **A keyword line on every card.** Every card carries a line **"Keywords the examiner listens for"**: 8–15 exact terms or short phrases for a long case, 6–10 for any other card. They are the named signs, grading systems, key numbers, investigations and operations the books use for this case.
  - Example for a glaucoma long case: *vertical cup–disc ratio · ISNT rule · neuroretinal rim thinning · bayoneting · nasalisation · Van Herick grade · Goldmann applanation tonometry · central corneal thickness · Shaffer grading · target pressure · maximal tolerated medical therapy*.
- **Keywords appear in the answers.** Each keyword appears in at least one say-it script or viva answer on the card. A keyword the card never uses is either missing from the answers or not a keyword.
- **Keyword first.** In viva answers, put the keyword at the start of the answer, in bold, so the examiner hears it in the first second: "**Bayoneting** is…", not "It is called bayoneting when…".

### 2.6 Simple English, professional register
**Simple English** — for every word that is not a medical term:
- **Short sentences:** at most 20 words, one idea each; most sentences shorter.
- **Plain words.** Use "use, start, stop, because, about, show, need, before, after", not "utilise, initiate, discontinue, owing to, approximately, demonstrate, necessitate, prior to, following".
- **Active voice:** "Laser iridotomy opens a new path for aqueous", not "A new path is created for aqueous by laser iridotomy".
- **Write it out on the cards.** No "e.g.", "i.e.", "etc." or "viz."; write "for example", "that is", or finish the list.
- **No filler.** Never "basically", "simply", "it is important to note that".

**Professional register:**
- **Findings** are in the present tense and the third person: "The right eye shows…", "Intraocular pressure is 18 millimetres of mercury".
- **Management** is in the first person, as examiners expect: "I will start…", "I would advise…".
- **Numbers** always carry units, the method and, where it matters, the time (intraocular pressure by Goldmann applanation at 10 am).
- **No casual words, no exclamation marks, no questions inside answers.**

**Model answers.** These show the format; the facts come from the fact-checked glaucoma card G1. Verify any fact you reuse, like any other:

> **Q: What is glaucoma?**
> A: **Glaucoma** is a chronic, progressive optic neuropathy with irreversible optic-nerve damage and matching visual field defects, with or without raised intraocular pressure. In plain words: the optic nerve is slowly and permanently damaged, and the field of vision shrinks to match. The diagnosis rests on the **optic disc**, the **visual field** and the **angle**.
>
> **Q: Tell me about latanoprost.**
> A: **Latanoprost** is a **prostaglandin analogue**, used as 0.005% drops once at bedtime. It lowers intraocular pressure by **increasing uveoscleral outflow**. Side effects: conjunctival hyperaemia, longer lashes and iris pigmentation. Avoid it in uveitis.

### 2.7 The read-and-answer test
The examiner runs it on every card:
1. Write 10 questions an examiner is likely to ask on this case that are **not** already on the card. At least 3 must be follow-ups on the history or the examination.
2. Answer each one using **only** the card.
3. For each one the card cannot answer, add the missing fact to the right section, or add the question with its answer. Take it from the books.
4. Record the 10 questions and the result in `Case_Cards/_work/checks/<ID>_review.md`.

---

## 3. THE EXAM

**Official scheme** — TNMGRMU PG practical scheme modified at the 64th Standing Academic Board, 25 Nov 2025:

| Head | Marks |
|---|---|
| Long case | 80 (1 × 80) |
| Short cases | 60 (2 × 30) |
| Fundus | 60 (2 × 30) |
| Refraction | 30 (1 × 30) |
| Ward rounds | 30 (5 × 6) |
| OSCE | 20 (5 × 4) |
| Dissertation | 20 |
| **Clinical total** | **300** |
| Viva (incl. competency) | 80 (60 + 20) |
| Log book | 20 |
| **Aggregate** | **400 — pass 200** |

**Timings for drills.** The first photo in `Last Year Cases` shows an **older** 300-mark scheme. Ignore its marks. Its timings are the only official ones found, so use them to time practice:

| Station | Time |
|---|---|
| Long case | 20 + 10 min |
| Short case | 10 + 5 min each |
| Fundus | 10 + 5 min |
| Refraction | 10 + 5 min |
| Ward rounds | 3 + 2 min per patient |
| OSCE | 2 min per station |

**How last year's glaucoma cases were tested.** The candidate had to **perform** each test, not just describe it. Of the 12 glaucoma cases, 8 carried applanation tonometry, 8 gonioscopy and 3 a Humphrey field. Glaucoma short cases are therefore do-and-show tasks.

---

## 4. WHAT EVERY CARD MUST ANSWER — the candidate's five asks

On 7 Oct 2026 the candidate asked for a PDF on long-case and short-case presentation and viva that answers five things for every case. They are the core of every card. Each has a fixed place in the templates (§9).

| # | The ask | What the card must contain | Where (§9) |
|---|---|---|---|
| 1 | Positive and negative history, with the justification for each question | Every question with its reason. Every negative-history question names what it rules out, and the bedside test that tells the look-alikes apart | Long A3 · Short B5 · Fundus C5 |
| 2 | The must-do ocular examination, and the viva questions each step brings, with answers | The steps in the order performed; for each, how to do it, how to record it, and its 2–4 viva questions answered | Long A4 · Short B3 · Fundus C2–C3 · Task D3 |
| 3 | Which differentials to think of, and how to tell each apart | A table with the clinching sign or test for each | Long A6 · Short B6 · Fundus C7 |
| 4 | How to proceed: which investigations, what each involves, and its significance | Investigations in order, each with how it is done, the expected finding and what it changes | Long A7 · Short B7 · Fundus C8 |
| 5 | How to manage: drugs (mechanism, adverse effects, contraindications) → combinations → laser → surgery (each with advantages and disadvantages) | A first-person treatment ladder with the trigger for each step up; drug and procedure tables; full profiles on the toolkit card | Long A8 · Short B8 · Fundus C9 · Toolkit F |

### 4.1 History — a reason for every question
- **One question per row.** Never lump questions together: "no redness, watering or pain" is three questions with three different reasons.
- **Positive history** covers onset, duration, progression, laterality, associated symptoms and treatment so far. For each, say what the answer tells you: the cause, how chronic it is, its stage, or a complication.
- **Negative history.** For each question, name what a "yes" would point to — the conditions it rules out. Where the books give a bedside sign or test that tells those look-alikes apart, add it.
- **Past, drug, treatment, personal and family history.** For each, give the consequence for diagnosis or treatment (e.g. asthma → no beta-blocker).
  - Treatment history records the drug, strength, frequency, duration, compliance and side effects.
- **Minimum list.** Start from the department's starred negative-history lines (in `_work/transcripts/`). Then add what the typed formats and the books add.

**Model row** — the candidate's own example, checked against Aravind 4.6:

| Question | A "yes" would point to | How to tell them apart |
|---|---|---|
| Any coloured haloes? | **Corneal epithelial oedema** from a pressure rise: angle closure. Other causes of haloes: mucus on the cornea in conjunctivitis, incipient cataract, vitreous opacities, snow blindness, a tilted intraocular lens | **Fincham (stenopaeic slit) test**: a slit is moved across the pupil. The glaucoma halo stays intact; the halo of incipient cataract breaks into its component colours |

### 4.2 Examination — the must-do steps and their viva
- **Steps in performance order.** List the steps a candidate **must perform** in this case, numbered **in the order performed**. The order itself earns marks:
  - pupils before any drop;
  - tonometry before gonioscopy and dilatation;
  - the disc after dilatation.
- **Three parts per step:**
  - **Do** — how, in 1–3 lines, including what to tell the patient;
  - **Record** — in the department's shorthand, e.g. "VH grade IV (ND)" or "Tn by GAT 18 mm Hg at 10 am";
  - **Viva** — the 2–4 questions this step brings, each answered: why it is done, what a finding means, the principle, the grading.
- **No repeats.** A step's viva questions live with that step only. Do not repeat them in the viva section.
- **Keep the template table.** The RE | LE table (what to look for at each structure) stays: the steps say *how*, the table says *what*.

### 4.3 Differentials — and how to tell each apart
- **Table:** Condition · Points for · Points against · How to tell apart. Give 4–6 rows, the most likely first.
- **The last column** names a sign the candidate can show, or a test result — never just "clinical features".
- **Exclude-first line.** Under the table, add one line: the differential to exclude first, and how.

### 4.4 How I will proceed — investigations and their significance
- **Table:** Test — what I do · Why · Expected finding in this case · Significance — what it changes.
- **Order:** confirm the diagnosis → grade or stage it → find the cause (systemic work-up) → set a baseline for follow-up → check fitness for surgery.
- **"What I do"** gives the essentials, e.g. the specimen and how it is taken, the stain and culture medium, the scan protocol.
- **Spoken line.** Close with one line he can say: "I will proceed with … to confirm …, then … to stage …".

### 4.5 How I will manage — the ladder, in the first person
Write the ladder the way the candidate will say it: the aim first, then each step up with the trigger for it.

> **Model** (primary open-angle glaucoma; format only — verify every fact like any other):
> My aim is to lower the intraocular pressure to a target of ___ mm Hg and stop further optic-nerve damage.
> 1. **Medical.** I will start a prostaglandin analogue, latanoprost 0.005% once at bedtime. It lowers the pressure by increasing uveoscleral outflow. Its main side effects are ___; I avoid it in ___.
> 2. **If the target is not reached** by ___, I will switch to ___ or add ___. If two drugs are needed, I prefer a fixed combination because ___; its disadvantage is ___.
> 3. **Laser.** If drops fail or cannot be used reliably, I will offer ___. Advantages: ___. Disadvantages: ___.
> 4. **Surgery.** If the pressure is still above target, or the fields progress on maximal tolerated therapy, I will do ___. Advantages: ___. Disadvantages: ___. If it fails, or is likely to fail, ___.
> 5. **Follow-up and counselling.** ___

- **Every drug:**
  - give its name, strength, route and frequency;
  - give a one-line mechanism of action, the main adverse effects (ocular and systemic) and the contraindications;
  - keep it to this short form on the case card, and spell out any contraindication that applies to this patient;
  - the full profile goes on the toolkit card.
- **Combinations.** Say which ones, why (e.g. simpler dosing, better adherence, less preservative toxicity) and their disadvantages.
- **Laser and surgery.** Use a table: Procedure (indication in this case) · Key steps · Advantages · Disadvantages and complications.
- **Escalation triggers.** State the numbers or events that move treatment up a step, as the books give them.
- **Viva coverage.** Every drug and procedure on the ladder appears in at least one viva question: its mechanism, a side effect, or why this one rather than another.

---

## 5. INPUTS — the reference files, the books and the shared work folder

The repo root **is** the candidate's "Practicals Reference" folder; the books are in `Books/`.

**How to read them:**
- **Tools.** Use PyMuPDF and pdftotext (§10.2 installs them). Extract each book's text once per session, per page, into `Case_Cards/_work/cache/` (never committed).
- **Finding the books.** Find each one by name pattern, not exact file name: `Books/*Baidya*`, `Books/*Namrata*`, `Books/Aravind*`, `Books/KANSKI*`.
  - If Baidya is split into several part files, join the parts in page order into one PDF in the cache first. The fitz page numbers in §8 count from the start of the whole book.
- **Handwritten and scanned pages** have no usable text layer. **They are already typed up, with names removed, in `Case_Cards/_work/transcripts/`.** Read the transcripts. Open a page image only to settle a doubtful word.
- **Privacy.** The handwritten case sheets and the photos in `Last Year Cases/` carry **real patients' names and hospital numbers**.
  - Never copy a name or number into any file you write; write "Mr X, a 65-year-old man…".
  - The repo is public, so anything you commit can be read by anyone (§10.5).

| Path (repo root) | What it is | Use it for |
|---|---|---|
| `MS_Ophthalmology_Practical_Long_Short_Case_Checklist.pdf` | The department's list of long-case and short-case candidates, by subject | **The definitive topic list.** §8.3 maps every line of it to a card. |
| `Case Format/Case Sheet Proforma.pdf` (31 pp, handwritten, **the department's own case sheets**) | **PDF pages (1-based):**<br>2–6 proptosis (bilateral, thyroid)<br>7–9 primary open-angle glaucoma<br>10–13 DigiNerve slides (AC depth by pen-torch and Van Herick, bleb, iridotomy, iris new vessels, pseudoexfoliation, glaucomatous disc)<br>14–17 corneal ulcer<br>18–20 uveitis (acute anterior)<br>**21 fundus write-up: optic atrophy**<br>22–25 ptosis (diagnosis line left blank)<br>26–29 sixth nerve palsy (no diagnosis line)<br>30 fundus write-up: diabetic retinopathy | **The house format.** Follow its order of headings, its RE \| LE tables, its starred negative history and its diagnosis wording. Transcripts: `Case_Cards/_work/transcripts/proforma_p01-17.md`, `proforma_p18-31.md`. |
| `Case Format/Cornea · Glaucoma · Paralytic Squint · Proptosis · Strabismus Case Presentation Format.pdf` (typed; Thomas, Mythri, Ashwin, Jacob, *Guidelines for Clinical Case Presentations*) | Point-by-point history and examination checklists:<br>cornea — slit-lamp illumination methods, drawing colour code<br>glaucoma — Van Herick, Scheie, Shaffer and Spaeth grading<br>paralytic squint — diplopia-charting rules, palsy mimics<br>proptosis — Hertel exophthalmometry | **Completeness.** Every point in these lists must appear on the matching cards. |
| `FUNDUS CASE.pdf` (20 pp, handwritten, colour drawings) | **The department's sheets for last year's fundus cases:**<br>1–3 and 10 PDR (with PRP, vitreous haemorrhage)<br>4–5 and 11 superotemporal BRVO (11 with pseudoexfoliation)<br>6–9 ARMD (drusen, disciform scar, subretinal haemorrhage)<br>12–14 retinitis pigmentosa<br>15–16 and 20 coloboma (iris, chorioretinal, disc)<br>17 Stargardt disease<br>18–19 RVO with ERM and PRP marks | **The house fundus sheet:** vision with pinhole, NCT, anterior-segment table, colour drawing, diagnosis, plan. It has **drawings only**; the written fundus description formula is on proforma pp 21 and 30. Transcript: `Case_Cards/_work/transcripts/fundus_case.md`. |
| `Last Year Cases/` (7 photos) | Photo 1: the older scheme (§3). Photos 2–7: handwritten lists of last year's 34 real cases | **Priority**: §6 lists the diagnoses, anonymised. Transcript: `Case_Cards/_work/transcripts/lastyear.md`. |
| `Short Viva/fields viva.pdf` (18 pp, scanned) | pp 1–4 Humphrey printouts · pp 5–6 FFA frames · p 7 fundus photograph · pp 8–18 Goldmann/Bjerrum charts of neurological field defects | Field and FFA cards |
| `Short Viva/Interpreting Imaging in Exam 2.pdf` (YOSI Exam Accelerator) | How to read OCT, FFA/ICG, B-scan, Pentacam/Sirius (incl. BAD-D), specular microscopy, AS-OCT/UBM, Hess chart, VEP/ERG, CT/MRI and visual fields | The "read it in this order" scripts on chart cards |
| `Short Viva/instruments.pdf` (36 pp, scanned catalogue) | Numbered instrument photos by surgery, IOL types, care of microsurgical instruments | Instrument cards (VIVA subject) |
| `Ophthal mnemonics final.pdf` | 71 mnemonics, one per page | The matching mnemonic in each card's quick recall |
| `Practical Curriculum  Old/2203-MS-Ophthalmology-2021.pdf` | The 2021 syllabus; its OSCE and viva rules match the current scheme | Background only |
| `Books/*Baidya*` — *Clinical and Practical Postgraduate Ophthalmology*, K.P. Baidya, 1st ed. 2024 (786 pp). **Not in the repo on 8 Oct 2026: it must be added (§10.3).** | Case-based: History → Examination → Provisional diagnosis → **Frequently Asked Questions** for each case | **Knowledge source 1** (newest) |
| `Books/*Namrata*` — *Ophthalmology Clinics for Postgraduates*, Namrata Sharma, Atul Kumar, Prafulla Kumar Maharana (498 pp, AIIMS) | Long and short cases: Introduction → History → Examination → Differential diagnosis → Investigation → Management → **Viva Questions** | **Knowledge source 2** |
| `Books/Aravind*` — *Aravind FAQs in Ophthalmology* (2013) | FAQ by section, plus model case sheets | **Knowledge source 3** — see below |
| `Books/KANSKI*` — Kanski's *Clinical Ophthalmology*, 9th ed. **Not in the repo on 8 Oct 2026; optional.** | Textbook | The tagged fallback only (§7) |

**Aravind FAQ** — knowledge source 3:
- **"Case Sheet Writing" (fitz 8–26)** has four model case sheets: a diabetic-retinopathy fundus description, a proptosis (thyroid) long case, a third-nerve-palsy case and a glaucoma (POAG, post-trabeculectomy) case.
  - Use their phrasing: describe each lesion, then say "suggestive of…".
  - Use their diagnosis wording, e.g. "Right eye, pupil-sparing, infranuclear, incomplete third nerve palsy due to ischaemic microangiopathy".
- **Each model ends with "What is the rationale for asking…?" questions.** They are the model for every card's "Why did you ask…?" viva group.

**The shared work folder** — `Case_Cards/_work/`. It was made by the first build on 7 Oct 2026; read its `README.md`. In this prompt, `_work/` always means `Case_Cards/_work/`.

| Item | What it holds |
|---|---|
| `specs/CARD_SPEC.md` | The card templates, writing rules, the department's house format (its §5) and the small Markdown dialect the builder reads. **Synced to v4 in §10.6, step 1.** |
| `specs/CONSISTENCY.md` | Cross-card decisions every card follows (gonioscopy grading, cross diagrams, Van Herick grades, the approved Kanski uses, and others). Append-only. |
| `specs/FACTCHECK_SPEC.md` | The independent fact-check procedure |
| `specs/BUILDER_SPEC.md`, `tools/build_cards.js`, `tools/gonio_png.py`, `tools/page_map.py` | The Word/PDF builder (Node + docx; LibreOffice for the PDF) |
| `transcripts/` | The handwritten sheets, typed up and anonymised |
| `card_sources/`, `checks/`, `01_Glaucoma_working_notes.md` | The finished v2 cards, their claims ledgers and fact-check reports, and the book disagreements to confirm with seniors |

---

## 6. LAST YEAR'S REAL CASES AT JEH (34 cases, anonymised) — build these first

| Category | Diagnoses (count) | Notes |
|---|---|---|
| **Glaucoma (12)** | POAG ×6 (one with pseudoexfoliation glaucoma) · PACG ×4 · NVG ×1 · CRVO with POAG ×1 | Tasks done: applanation tonometry on 8, gonioscopy on 8, Humphrey field on 3. One PACG was a **long case** (case sheet). Gonioscopy was recorded as a cross diagram with the deepest structure seen in each quadrant (e.g. SS = scleral spur). |
| **Fundus (16)** | Retinitis pigmentosa ×4 · PDR ×3 · ARMD ×2 · superotemporal BRVO ×2 · coloboma ×2 · hemi-CRVO with POAG ×1 · Stargardt disease (both eyes) ×1 · dislocated lens in vitreous ×1 | Sheets in `FUNDUS CASE.pdf` |
| **Anterior segment (5)** | Fungal corneal ulcer ×2 · failed graft ×1 · subluxated lens (Marfan syndrome) ×1 · lamellar cataract / aphakia ×1 | One fungal ulcer was a **long case** (case sheet). One fundus coloboma patient was also listed for her iris coloboma. |
| **Cranial nerve (1)** | Third nerve palsy | |

Mark these cards ★ and build them first within each subject. JEH draws its exam cases from its own patients, so expect the same pattern again.

---

## 7. SOURCES — and how to gather the data correctly

**Knowledge, in this order:**
1. **Baidya (2024)** — newest.
2. **Namrata Sharma** — AIIMS clinics.
3. **Aravind FAQ (2013)** — viva Q&A and Aravind phrasing.

**Rules for the sources:**
- **Disagreements.** If the books disagree on a number or a treatment, use the newer book. Note the disagreement in the working notes, not on the card.
- **Format, in this order:** the department's handwritten sheets → the typed case formats → Aravind's model sheets.
- **Fallback, only when all three books lack a topic** (e.g. the ROP chart, IOL dislocation): use Kanski 9th ed. (`Books/KANSKI*`; not in the repo on 8 Oct 2026, see §10.3).
  - Tag that section on the card: *(Kanski — not in your practical books)*.
  - Record the use in `CONSISTENCY.md`.
- **Never** use the web or memory for clinical facts.
- **Page numbers.** All page numbers in §8 are **fitz (0-based PDF index)**. Printed page = fitz − 14 for Baidya, fitz − 18 for Namrata, fitz − 4 for Kanski. Aravind is cited by section number.

**The pipeline every card follows — so the data is right before it is written:**
1. **Packet.** Extract the card's source pages (§8) into one text file in `Case_Cards/_work/cache/packets/<ID>.txt` (never committed), with a header on each page, e.g. "BAIDYA fitz 166 = printed p.152". Render and read any scanned or garbled page; do not trust a jumbled table's text layer.
2. **Ledger first.** Before drafting, list every fact the card will use, each with its page, in `Case_Cards/_work/checks/<ID>_notes.md`: numbers, doses, grades, classifications, named signs, diagnosis wording.
3. **Draft only from the ledger** (pass 1). Need a fact the packet lacks? Search the full books. If it is not there, it does not go on the card, unless the Kanski rule allows it, with the tag.
4. **Examiner review** (pass 2), then an **independent fact-check** against the full books (§12).

---

## 8. THE CARD LIST, SOURCE MAP AND CHECKLIST COVERAGE

One card per condition. A condition listed as both a long and a short case gets **one card with both versions**.

**Key:**
- ★ = kept at JEH last year (build first).
- Types: **L** = long case · **S** = short case · **F** = fundus short case · **T** = task you perform · **C** = chart or picture · **X** = treatment toolkit.
- Sources: **B** = Baidya · **N** = Namrata Sharma · **A** = Aravind section number · **Prof** = Case Sheet Proforma pages · **FC** = FUNDUS CASE pages · **Fmt** = typed case format.

**Card IDs:** the IDs below match the v2 build. Never renumber a card: the index and the finished glaucoma file use these IDs.

### 8.1 Cards

#### GLAUCOMA — `01_Glaucoma_Case_Cards`
| # | Card | Type | Sources (fitz) |
|---|---|---|---|
| GX | Glaucoma treatment toolkit (see §8.2) | X | A 1.4 (44), 4.7 (238), 4.15 (275), 4.16 (286), 4.17 (292), 4.18 (301), 4.19 (315), 4.20 (319), 4.21 (328) · B 166–194 · N 189–225 |
| G1 | ★ Primary open-angle glaucoma, incl. the glaucomatous optic disc | L+S | B 166 (NTG 172) · N 189 · A 4.8 (239), 4.4 fields (220), 4.15 drugs (275), 4.16 newer drugs (286) · Prof 7–9, 13 · Fmt Glaucoma · Aravind model glaucoma sheet |
| G2 | POAG with trabeculectomy — bleb assessment, failed bleb | L | A 4.18 (301), 4.19 (315) · B 166–194 (trabeculectomy passages) · N 189–225 · Prof 11 (bleb slide) |
| G3 | POAG with glaucoma drainage device | L | A 4.20 (319) · B 187–194 · N 194, 204, 213, 217 (drainage-device passages) |
| G4 | ★ Primary angle-closure disease (PACS / PAC / PACG), incl. post-laser iridotomy and the acute attack. Deepest card of all: the thesis is on AS-OCT angle parameters and phacoemulsification in primary angle-closure suspects | L | B 162 · N 196 · A 4.6 (229; coloured haloes and the Fincham test at 232), 4.7 (238), 4.5 UBM (227), 4.17 lasers (292) · Prof 10–11 (AC depth, iridotomy slides) · approved Kanski uses in `CONSISTENCY.md` |
| G5 | ★ Neovascular glaucoma, incl. rubeosis iridis | L+S | B 190 · N 210 · A 4.9 (246) · Prof 12 (iris new-vessel slide) |
| G6 | ★ Pseudoexfoliation syndrome and glaucoma | L+S | B 181 · N 221 · A 4.11 (259) · Prof 12 (DigiNerve PXF slide) |
| G7 | ★ CRVO with POAG / hemi-CRVO with POAG | S | B 278 · N 234 · A 6.6 (381) · FC 18–19 |
| G8 | ★ Applanation tonometry — perform and record | T | A 4.1 (204) · B 752–754 · Fmt Glaucoma |
| G9 | ★ Gonioscopy — perform, grade, draw | T | A 4.2 (212) · B 752–754 · Fmt Glaucoma (Scheie, Shaffer, Spaeth) · Prof 9 (cross diagram) |
| G10 | ★ Humphrey field in glaucoma (last year's task; not on the checklist) | C | B 195–208 (single-field interpretation 198) · A 4.4 (220) · `fields viva.pdf` pp 1–4 · Imaging PDF "Visual fields" |

G2, G3 and G7 describe a status. They do not repeat POAG basics from G1; one line "For primary open-angle glaucoma itself, see card G1" is enough.

#### RETINA AND FUNDUS — `02_Retina_Fundus_Case_Cards`
| # | Card | Type | Sources (fitz) |
|---|---|---|---|
| RX | Retina treatment toolkit (see §8.2) | X | A 6.4 (364), 6.8 (394), 6.12 (440), 6.13 (448), 6.15 (454) · B 226–241, DME 262, PRP 451 · N 326, 350–355 |
| R0 | **Normal fundus** — the perfect description | F | Aravind model DR sheet · Prof 21, 30 · FC (any page) |
| R1 | ★ PDR, incl. PRP marks and laser scars | L+S | B 248, PRP 451 · N 247 · A 6.3 (356), 6.4 (364) · FC 1–3, 10 |
| R2 | NPDR with diabetic macular oedema | L+S | B 245, DME 262 · N 254, DME 326 · A 6.3, 6.4 · Prof 30 |
| R3 | ★ CRVO (ischaemic / non-ischaemic, hemi-CRVO) | L+S | B 278 · N 234 · A 6.6 (381) |
| R4 | ★ BRVO / superotemporal BRVO | L+S | B 272 · N 241 · FC 4–5, 11 |
| R5 | ★ Age-related macular degeneration — wet and dry | L+S | B 315 · N 290 · A 6.12 (440) · FC 6–9 |
| R6 | ★ Retinitis pigmentosa | L+S | B 331 · N 262 · A 6.10 (424) · FC 12–14 |
| R7 | Retinal detachment | L | B 226 (lattice 220) · N 278 · A 6.8 (394) |
| R8 | Hypertensive retinopathy | F | A 6.5 (375) · B 287–292 |
| R9 | ★ Stargardt disease | F | B 346 · N 364 · FC 17 |
| R10 | Macular hole | F | B 301 · N 270 |
| R11 | ★ Coloboma — iris, chorioretinal, disc | F | B 352 · N 336 · FC 15–16, 20 |
| R12 | Silicone-oil-filled eye | S | N 350, 355 · B 239–241 · A 6.13 (448) |
| R13 | FFA — NPDR, NVE, capillary non-perfusion | C | B 405–414 (interpretation 407) · A 6.1 (340) · `fields viva.pdf` pp 5–6 · Imaging PDF FFA |
| R14 | Diabetic retinopathy chart — grading | C | A 6.3 · B 245, 248 · N 247, 254 |
| R15 | ROP chart | C | *Fallback: Kanski* (not covered in the three books) |
| R16 | Fundus photographs — spotters | C | `fields viva.pdf` p 7 · figures in B ch 7, N ch 4 |

Retina long cases use template A, with the fundus described in the department order (template C) inside the examination steps. **PRP settings on R1 must match G5** (`CONSISTENCY.md`).

#### CORNEA — `03_Cornea_Case_Cards`
| # | Card | Type | Sources (fitz) |
|---|---|---|---|
| CX | Cornea treatment toolkit (see §8.2) | X | A 1.4 (44), 2.5 (92), 2.6 (98), 2.7 (103), 2.13 (124), 2.17 (151) · B 24–43 (fungal management 33–34), 51, 85–90 · N 108, 124, 152 |
| C1 | ★ Fungal corneal ulcer | L+S | B 24–43 (fungal management 33–34) · N 108 · A 2.5 (92) · Prof 14–17 · Fmt Cornea |
| C2 | Corneal ulcer — the approach to infective keratitis (bacterial, incl. hypopyon ulcer; Acanthamoeba and viral as differentials) | L | B 24–43 · N 108 · A 2.5, 2.6 Acanthamoeba (98), 2.7 viral (103) · Prof 14–17 · Fmt Cornea |
| C3 | ★ Failed graft / post-keratoplasty eye | L+S | B 89 · N 152 (acute graft rejection) · A 2.17 (151) |
| C4 | Keratoconus | L | B 51 · N 124 · A 2.13 (124) · Imaging PDF Pentacam |
| C5 | Pseudophakic / aphakic bullous keratopathy | L | B 85 · A 2.16 (147) · B 123 (specular microscopy) |
| C6 | Opaque cornea, incl. adherent leucoma | L+S | A 2.11 (117) · B 73–90 · N 178 |
| C7 | Nummular keratitis | S | A 2.7 (103) · B 39, 94 |
| C8 | Corneal dystrophy | S | B 61 (IC3D 64), 68, 74 · N 135, 146, 171 · A 2.14 (133), 2.15 (143) |
| C9 | Corneal degeneration | S | B 79 · N 162, 168 · A 2.10 (114) |
| C10 | Band-shaped keratopathy | S | B 81 · N 166 · A 2.10 (114) |
| C11 | Atheromatous ulcer | S | B 31 · N 320 |

C1 and C2 share the general approach to a corneal ulcer. Put the full approach on C2 and keep C1 to what is special to fungal keratitis.

#### MISC — LENS, UVEA, ANTERIOR SEGMENT — `04_Lens_Uvea_Misc_Case_Cards`
| # | Card | Type | Sources (fitz) |
|---|---|---|---|
| MX | Lens and uvea treatment toolkit (see §8.2) | X | A 3.6 (184), 3.7 (198), ch 5 (334–339) · B 136–150, 374–398 · N 303, 359–362, 427–453 |
| M1 | ★ Ectopia lentis / Marfan syndrome with subluxated lens | L+S | B 136 · N 432 · A ch 5 (334–339) |
| M2 | ★ Dislocated lens in vitreous | L+S | B 140 · N 359 |
| M3 | Anterior subluxation / dislocation of lens | L+S | B 136 · N 432 · *fallback Kanski if thin* |
| M4 | Dislocated / subluxated IOL | L+S | N 359–362 · *fallback Kanski* |
| M5 | ★ Developmental (zonular / lamellar) cataract and aphakia | S | N 427 · B 150 (paediatric cataract) |
| M6 | Traumatic cataract | S | B 132 · N 453 |
| M7 | Uveitis, incl. festooned pupil, iris nodules, synechiae | L+S | B 374–397 (VKH 391–395), 398 (intermediate) · N 303 · A 3.1–3.7 (160–203) · Prof 18–20 |
| M8 | Hyphaema | S | B 132–135 · N 214–217 |
| M9 | Hypopyon and inverse hypopyon | S | B 37 · A (fitz 415, inverse hypopyon) |

#### NERVES — `05_Nerves_Case_Cards`
| # | Card | Type | Sources (fitz) |
|---|---|---|---|
| NX | Nerves treatment toolkit, incl. diplopia charting and the Hess chart (see §8.2) | X | A 9.1 (645), 9.2 (647), 8.9 botulinum (632), 7.3 (468), 7.7 (506) · B 612, 615, 556–565 · N 90, 374–389 · Fmt Paralytic Squint, Strabismus |
| N1 | ★ Third nerve palsy | L+S | B 659 · N 374 · A 7.8 (511) · Aravind model third-nerve sheet · Fmt Paralytic Squint |
| N2 | Fourth nerve palsy | L+S | B 670 · N 389 · A 7.9 (522) |
| N3 | Sixth nerve palsy | L+S | B 676 · N 382 · A 7.10 (526) · Prof 26–29 |
| N4 | Optic atrophy | L+S | A 7.5 (490), 7.2 (461) · B 621–636 · Prof 21 (fundus write-up) |
| N5 | Anterior ischaemic optic neuropathy (NAION / AAION) | L+S | B 637 · A 7.7 (506) |
| N6 | Facial nerve palsy, incl. lagophthalmos | L+S | B 565 (lagophthalmos), 556–558 · N 90 |

The books disagree on Hirschberg values (Baidya 7° / 15° / 30°; Namrata and Aravind 15° / 30° / 45°). Follow the §7 rule: Baidya goes on the card. Log the disagreement and list it under "confirm with your seniors".

#### OCULOPLASTY — `06_Oculoplasty_Case_Cards`
| # | Card | Type | Sources (fitz) |
|---|---|---|---|
| OX | Oculoplasty treatment toolkit (see §8.2) | X | A 8.3 (588), 8.5 (602), 8.6 (603), 8.8 (628), 7.11 (531) · B 465–547 · N 19–81, 421 |
| O1 | Proptosis, incl. thyroid eye disease | L+S | B 465 (evaluation), 478 (TED) · N 19, 53 · A 8.6 (603) · Prof 2–6 · Fmt Proptosis · Aravind model proptosis sheet |
| O2 | Ptosis | L+S | B 503 (acquired), 515 (congenital), 518 (BPES) · N 33, 70, 81 · A 8.3 (588) · Prof 22–25 |
| O3 | Ocular myasthenia gravis | L+S | B 687 · N 421 · A 7.11 (531) |
| O4 | Anophthalmic socket | L+S | B 514, 547 · N 43 |
| O5 | Contracted socket | L+S | B 544 · N 43 |

Facial palsy is on card N6.

#### VIVA — `07_Viva_Charts_Instruments` (build last)
| # | Card | Sources (fitz / pages) |
|---|---|---|
| V1 | Visual fields — glaucoma and neurological | `fields viva.pdf` · B 195–208 · A 4.4, 7.13 (545) |
| V2 | Imaging — OCT, FFA/ICG, B-scan, Pentacam, specular, AS-OCT/UBM, ERG/VEP, CT/MRI | Imaging PDF · B 405–444 · A 1.8 (66), 1.9 (74), 6.1, 6.2 (351) |
| V3 | Instruments, by surgery | `instruments.pdf` · B 741–778 · N 458 |

### 8.2 Treatment toolkits — one per subject
Each toolkit is built **first** in its subject, because the case cards quote its doses and settings. It is placed first in the subject file.
- **Cover what the books cover.** Include each topic below only if the three books cover it. Drop any they lack. Use the tagged Kanski fallback only when an examiner is likely to ask.
- **Order by tier.** First-line items come first; newer agents come last, tagged *(extra)*.

| Toolkit | Drugs | Lasers and procedures | Surgery |
|---|---|---|---|
| **GX** Glaucoma | Prostaglandin analogues, beta-blockers, alpha-2 agonists, carbonic anhydrase inhibitors (topical, oral), miotics, hyperosmotics; fixed combinations (which, why, disadvantages); newer drugs *(extra)*; drugs in the acute attack | Laser iridotomy, iridoplasty, laser trabeculoplasty (selective, argon), cyclophotocoagulation | Trabeculectomy with antifibrotics, combined surgery, drainage devices (valved and non-valved), non-penetrating surgery, cyclodestruction, MIGS *(extra)*; lens extraction in angle closure (approved Kanski use) |
| **RX** Retina | Anti-VEGF agents, intravitreal steroids and implants | Panretinal photocoagulation, focal and grid laser, barrage laser, photodynamic therapy, cryotherapy | Vitrectomy, scleral buckling, pneumatic retinopexy, tamponades (gases, silicone oil) and their removal |
| **CX** Cornea | Antibacterials (fortified and commercial), antifungals (topical, oral, intrastromal, intracameral), antivirals, anti-Acanthamoeba agents, cycloplegics, steroids in graft rejection | Corneal scraping and culture, bandage contact lens, tissue adhesive, collagen cross-linking, EDTA chelation, phototherapeutic keratectomy | Therapeutic keratoplasty, penetrating keratoplasty, DALK, DSEK / DMEK, conjunctival flap, tarsorrhaphy, intracorneal ring segments |
| **MX** Lens and uvea | Topical, periocular and systemic steroids; cycloplegics; NSAIDs; immunosuppressants and biologicals *(extra)* | Optical correction of aphakia and subluxation; Nd:YAG capsulotomy | Lensectomy (anterior, pars plana), capsular tension ring / segment, anterior-chamber, iris-fixated and scleral-fixated IOLs, IOL repositioning or exchange, paediatric cataract surgery, hyphaema wash-out |
| **NX** Nerves | Steroids in optic neuritis and arteritic ischaemic optic neuropathy; lubricants in lagophthalmos | Occlusion, prisms, botulinum toxin; diplopia charting and the Hess chart (how to do, read, record) | Squint surgery for palsies (recession–resection, transposition), lid procedures for lagophthalmos (tarsorrhaphy, gold weight, lateral tarsal strip) |
| **OX** Oculoplasty | Thyroid eye disease (steroid regimens, selenium, radiotherapy); myasthenia gravis (pyridostigmine, steroids, immunosuppressants, thymectomy) | Ice-pack and neostigmine tests for myasthenia gravis | Ptosis surgery (Fasanella–Servat, Müller muscle–conjunctival resection, levator resection, frontalis sling and its materials); orbital decompression and the order of surgery in thyroid eye disease; orbital implants, dermis-fat and mucous-membrane grafts, prostheses |

### 8.3 Checklist coverage map — every line of the department checklist
Lines are written exactly as on the checklist.
- **Block names.** "Block" means a `###` sub-heading in that card's **Short-case version**, titled with the checklist wording. A line mapped to a whole card needs no block.
- **Cross-subject lines.** Lines that sit under one subject on the checklist but belong to another subject's card are built by the subject that **owns the card**. Example: Pseudoexfoliation under MISC is built on G6 by GLAUCOMA.
  - The other session **does not edit** that card. It checks that the block exists. If it is missing, it adds a line under "Requests for other subjects" in its **own** status file (§10.4); the owner reads it at its next start (§10.3).

**GLAUCOMA — long:** POAG → G1 · PACG → G4 · POAG with trabeculectomy → G2 · POAG with GDD → G3 · Neovascular glaucoma (NVG) → G5 · Pseudoexfoliative glaucoma → G6
**GLAUCOMA — short:** Applanation tonometry → G8 · Gonioscopy → G9 · POAG disc / glaucomatous optic disc → G1 block "Glaucomatous optic disc" · CRVO with POAG → G7 · Pseudoexfoliation → G6 block "Pseudoexfoliation"

**CORNEA — long:** Corneal ulcer → C2 · Fungal corneal ulcer → C1 · Hypopyon ulcer → C2, its own section "Hypopyon ulcer" · Failed corneal graft → C3 · Keratoconus → C4 · Pseudophakic / aphakic bullous keratopathy → C5 · Opaque cornea → C6
**CORNEA — short:** Nummular keratitis → C7 · Corneal dystrophy → C8 · Corneal degeneration → C9 · Band-shaped keratopathy (BSK) → C10 · Atheromatous ulcer → C11 · Post-keratoplasty eye → C3 block "Post-keratoplasty eye" · Failed graft → C3 block "Failed graft" · Hypopyon → M9 · Fungal corneal ulcer → C1 block "Fungal corneal ulcer" · Opaque cornea → C6 block "Opaque cornea"

**RETINA — long:** CRVO → R3 · Ischaemic CRVO → R3, its own section "Ischaemic CRVO" (how it is proved, its diagnosis line and its management) · BRVO / STBRVO → R4 · NPDR with macular edema → R2 · PDR → R1 · Wet ARMD → R5 · Retinal detachment → R7 · Retinitis pigmentosa → R6
**RETINA — short:** Dry ARMD → R5 block "Dry ARMD" · Wet ARMD → R5 block "Wet ARMD" · NPDR → R2 block "NPDR" · PDR → R1 block "PDR" · Hypertensive retinopathy → R8 · BRVO / STBRVO → R4 block · CRVO → R3 block · Retinitis pigmentosa → R6 block · Stargardt disease → R9 · Macular hole → R10 · Coloboma → R11 · Silicone-filled eye → R12 · PRP marks → R1 block "PRP marks" · FFA: NPDR, NVE, CNP areas → R13 · ROP chart → R15 · Diabetic retinopathy chart → R14

**OCULOPLASTY — long:** Proptosis → O1 · Ptosis → O2 · Ocular myasthenia gravis → O3 · Anophthalmic socket → O4 · Contracted socket → O5
**OCULOPLASTY — short:** Ptosis → O2 block · Ocular myasthenia gravis → O3 block · Proptosis → O1 block · Anophthalmic socket → O4 block · Contracted socket → O5 block · Facial palsy → N6 block "Facial palsy"

**NERVES — long:** Third nerve palsy → N1 · Fourth nerve palsy → N2 · Sixth nerve palsy → N3 · Optic atrophy → N4 · AION → N5 · Facial nerve palsy → N6
**NERVES — short:** each of the six → the short-case block on N1–N6

**MISCELLANEOUS — long:** Uveitis → M7 · Ectopia lentis / Marfan syndrome with subluxated lens → M1 · Anterior subluxation of lens → M3 · Dislocated lens in vitreous → M2 · Dislocated IOL → M4
**MISCELLANEOUS — short:**
- **Lens:**
  - Developmental / zonular cataract → M5 block "Developmental / zonular cataract"
  - Lamellar cataract → M5 block "Lamellar cataract"
  - Aphakia → M5 block "Aphakia"
  - Ectopia lentis → M1 block "Ectopia lentis"
  - Subluxated lens → M1 block "Subluxated lens"
  - Marfan syndrome with subluxated lens → M1 block "Marfan syndrome with subluxated lens"
  - Anterior subluxation of lens → M3 block
  - Dislocated lens in vitreous → M2 block
  - Dislocated IOL → M4 block "Dislocated IOL"
  - Subluxated IOL → M4 block "Subluxated IOL"
  - Traumatic cataract → M6
- **Uvea and anterior chamber:**
  - Uveitis → M7 block "Uveitis"
  - Festooned pupil → M7 block "Festooned pupil"
  - Hyphema → M8
  - Hypopyon → M9 block "Hypopyon"
  - Inverse hypopyon → M9 block "Inverse hypopyon"
- **Owned by other subjects:**
  - Pseudoexfoliation → G6 (GLAUCOMA)
  - Rubeosis iridis → G5 block "Rubeosis iridis" (GLAUCOMA)
  - Coloboma → R11, with an iris-coloboma part (RETINA)
  - Fundus photographs → R16
  - FFA → R13
  - ROP chart → R15
  - Diabetic retinopathy chart → R14
  - PRP marks → R1 block "PRP marks"

The coverage check (§12, check 1) proves every line above is present on the built file.

---

## 9. CARD TEMPLATES — the exact headings, in this order

**Page budgets** (≈ 550 words per printed page; the builder warns outside these):

| Kind (`@kind`) | Pages | Words |
|---|---|---|
| Long case (`long`) | 6–9 (L+S cards may use one more for the short-case blocks) | 3,300–5,000 |
| Short case (`short`) | 2–3 | 1,100–1,700 |
| Fundus short case (`fundus`) | 2–3 | 1,100–1,700 |
| Task (`task`) | 1.5–2 | 800–1,100 |
| Chart (`chart`) | 1.5–2 | 800–1,100 |
| Toolkit (`toolkit`) | 4–6 | 2,200–3,300 |

Over budget? Cut *(extra)* items first, then trim the wording. Never cut a basic.

**On every card, of every kind:**
- **Answer rules.** Every answer follows §2.3–§2.6: its structure, the standard definition, keyword first, simple English, professional register.
- **The Keywords line** (§2.5) is on every card. On C, D, E and F cards it comes right after item 1.

**Builder limits** (from `CARD_SPEC.md` §3 and `BUILDER_SPEC.md`):
- **Tables:** at most **4 columns**, with short cells.
- **Boxes** (`:::say`, `:::trap`, `:::recall`, `:::short`) **do not nest**. `Q:` / `A:` pairs go outside boxes.
- **Sub-headings:** step and block headings are `###` sub-headings.

### 9.0 The index file — `00_Index_and_Master_Case_Format`
It holds five parts:
1. **The master long-case proforma, and how to present it in 8–10 minutes.**
   - **Coverage.** Particulars, chief complaints, history of present illness, negative history, past, personal and family history, general and systemic examination, and the ocular examination in RE \| LE order:
     - visual acuity;
     - head posture;
     - Hirschberg test and ocular movements;
     - lids and adnexa, conjunctiva, cornea, anterior chamber (Van Herick), iris, pupil, lens;
     - IOP;
     - gonioscopy;
     - fundus: distant direct → direct → 90 D → indirect;
     - then summary, complete diagnosis, differentials, investigations and management.
   - **The five-asks method (new since v3).** How to justify every history question; how to order the examination steps; how to present differentials with the clinching sign; how to say investigations as "to confirm, to stage, to find the cause"; how to say a management ladder.
2. **The master fundus format.** Use the department's sheets and the formula on proforma pp 21 and 30, with Kanski's drawing colour code.
3. **The master short-case method.** Template B, as a method the candidate can apply to any short case.
4. **The card index, with ★ marks, and the checklist coverage map** (§8.3), so he can find any checklist line in one look.
5. **The toolkit list:** where each subject's drug, laser and surgery profiles are.

Every subject card then carries **only what is specific to its case**.

### A. LONG-CASE CARD (L or L+S)
1. **Title bar** (from the `@` header lines): the card name; ★ and how many times it was kept last year; whether it is also a short case.
2. **At a glance** — 3 lines: what the case is, why it is kept, what examiners test. Then the **Keywords the examiner listens for** line: 8–15 terms (§2.5).
3. **History — positive and negative, with reasons** (ask 1, §4.1):
   - the chief-complaint wording, and the house wording for the history of present illness;
   - **Positive history** — table: Question · Why I ask — what the answer tells me;
   - **Negative history** — table: Question · A "yes" would point to · How to tell them apart;
   - **Past, drug, treatment, personal and family history** — table: Question · Why it matters (diagnosis or treatment).
4. **Examination — must-do steps and their viva** (ask 2, §4.2):
   - **General and systemic (this case only)** — bullets, each with why;
   - **Ocular examination — RE | LE template** — table: Structure · Look for in this case · How to record (example);
   - **Step 1 … Step n**, in the order performed, special tests included. Each step: **Do** · **Record** · 2–4 viva Q/A. Gonioscopy steps carry the `:::gonio` cross diagram.
5. **Summary and complete diagnosis:**
   - a fill-in summary paragraph;
   - the complete-diagnosis formula: **eye → disease → type / stage / grade → aetiology → complications or status → other eye**;
   - 2–3 example diagnosis lines in exam wording.
6. **Differential diagnosis** (ask 3, §4.3) — table: Condition · Points for · Points against · How to tell apart. Then the exclude-first line.
7. **How I will proceed — investigations** (ask 4, §4.4) — table: Test — what I do · Why · Expected finding · Significance. Then the spoken line.
8. **How I will manage** (ask 5, §4.5):
   - **Aim**;
   - **The ladder** — numbered first-person steps, each with its trigger;
   - **Drugs in this case** — table: Drug (strength · frequency) · Mechanism of action · Adverse effects · Contraindications. Keep the short form, and end with "Full profiles: card <subject>X.";
   - **Laser and surgery in this case** — table: Procedure (indication) · Key steps · Advantages · Disadvantages and complications;
   - **Follow-up and counselling**.
9. **What you must know:**
   - definition: the standard definition in the book's wording, one plain-English line, then 3–6 related terms defined in one line each (§2.4);
   - classification — a table with the named system;
   - pathogenesis in 3–6 lines;
   - complications;
   - prognosis;
   - recent advances — only those in the three books, tagged *(extra)*. If there are none, write one line: "Nothing beyond the above in your practical books."
10. **Viva questions — 25 to 35**, each with a 1–3-line answer, grouped in this order:
    1. "Why did you ask…?" (history);
    2. diagnosis and differentials;
    3. investigations;
    4. management — drugs;
    5. management — laser and surgery;
    6. complications;
    7. recent advances.

    Within each group, put the basics first and tag minor questions *(extra)*. Draw the questions from Baidya's FAQs, Namrata's viva questions, Aravind's FAQs and Aravind's "What is the rationale for asking…?" questions. Do not repeat the questions already attached to the examination steps.
11. **Examiner traps** — 5–8 one-line bullets: what costs marks in this case.
12. **Short-case version** (L+S cards only) — one `###` block per checklist short-case line this card owns (§8.3). Each block:
    - the instruction you may get;
    - the spot diagnosis;
    - the focused examination (numbered);
    - a `:::say` spoken description, ending in the complete-diagnosis line;
    - 3 signs to show;
    - 4–6 viva Q/A specific to the short case.

    History, differentials, investigations and management are already on the card; do not repeat them.
13. **Say-it script** — two shaded boxes, no abbreviations:
    - **Opening** (about 1 minute; 150–200 words): particulars, chief complaint, history of present illness, the key negative history, past and treatment history — as he will say it;
    - **Closing** (2 minutes; 180–260 words): summary → complete diagnosis → plan.
14. **Quick recall + mnemonic** — 8–12 one-liners, plus the matching mnemonic from the mnemonics PDF. If there is none, write "Mnemonic: none in your mnemonics file for this case."
15. **Read more** — one line of printed page numbers, e.g. `Baidya p.152 · Namrata p.171 · Aravind 4.8`.

### B. SHORT-CASE CARD (S)
1. **Title bar**, with ★.
2. **The instruction you may get** (1–3 likely instructions), and **Spot**: what you see first. Then the **Keywords** line: 6–10 terms (§2.5).
3. **Focused examination — steps and their viva** (ask 2): numbered, in order. Each step has **Do**, **Record** and 1–2 viva Q/A.
4. **Say-it description** (`:::say`) → the complete-diagnosis line.
5. **History to ask, if the examiner allows** (ask 1) — table: Question · Why (what it rules in or out); 3–6 rows.
6. **Differentials** (ask 3) — table: Condition · How to tell apart (sign or test); 2–4 rows.
7. **How I will proceed** (ask 4) — table: Test · What it shows · Significance; 3–5 rows.
8. **How I will manage** (ask 5) — 3–6 numbered first-person steps:
   - drugs with a one-line mechanism and the key adverse effect or contraindication;
   - procedures with one advantage and one disadvantage;
   - full profiles on the toolkit card.
9. **Must know** — 6–10 bullets: the standard definition first (§2.4), then classification and key numbers.
10. **Viva questions** — 12–18, basics first.
11. **Quick recall** — 4–6 lines.
12. **Read more.**

### C. FUNDUS CARD (F)
Use `FUNDUS CASE.pdf` and proforma pp 21 and 30 as the model of the department's style.
1. **Title bar**, with ★, and **the instruction you may get** ("Examine the fundus of this patient").
2. **Before you dilate:**
   - **The checks:** iris new vessels, lens status, pseudoexfoliation, relative afferent pupillary defect;
   - **For each:** why it is checked here, with 1 viva Q/A.
3. **Say-it description** (`:::say`), in the department's order:
   - distant direct ophthalmoscopy (red glow);
   - media;
   - disc: size, shape, colour, margins, cup–disc ratio, neuroretinal rim;
   - vessels: origin, branching, AV ratio, calibre, crossings, sheathing;
   - background: each lesion described by colour, shape, size in disc diameters, margins, number and location → "suggestive of…";
   - macula and foveal reflex;
   - periphery (indirect ophthalmoscope, 20 D);
   - "Confirmed with a 90 D lens."

   Then 3–5 viva Q/A on the description (e.g. why the AV ratio matters; flame versus blot haemorrhage).
4. **What to draw**, using Kanski's colour code:
   - red: flat retina and haemorrhages;
   - blue: detached retina and retinal vessels (usually veins);
   - breaks: red with a blue outline;
   - black: pigment;
   - yellow: exudates;
   - green: vitreous opacities.
5. **History to ask, if allowed** (ask 1) — table: Question · Why; 3–6 rows.
6. **Complete diagnosis** with grade or stage, in exam wording.
7. **Differentials** (ask 3) — table: Condition · How to tell apart.
8. **How I will proceed** (ask 4) — table: Test (FFA, OCT, B-scan, systemic work-up) · What it shows · Significance.
9. **How I will manage** (ask 5) — the first-person ladder, with the toolkit as the reference.
10. **Viva questions** — 12–18.
11. **Quick recall** — 4–6 lines.
12. **Read more.**

### D. TASK CARD (T)
1. **Indications.**
2. **Instrument check.**
3. **Steps** — table: Step · Why (the viva answer). Include **consent, instruction, anaesthetic drops and disinfection** — examiners tick these.
4. **How to record the result**, e.g. IOP with time and method, or the gonioscopy cross diagram with a named grading.
5. **Normal values and interpretation.**
6. **Common errors**, and how each skews the result.
7. **Viva questions** — 10–15.
8. **Read more.**

### E. CHART / PICTURE CARD (C)
1. **What it is.**
2. **Reading order** — use the imaging PDF's "read in this order" lists.
3. **Findings to name** — table: Finding · What it means.
4. **Grading or classification.**
5. **What each finding leads to** — the management.
6. **Viva questions** — 10–15.
7. **Read more.**

### F. TOOLKIT CARD (X) — `@kind toolkit`, first card in the subject file
1. **Title bar** — e.g. "GX · Glaucoma treatment toolkit — every drug, laser and operation the glaucoma cards use".
2. **How to say a management plan in this subject** — a 4–6-line first-person model.
3. **Drugs** — one table per drug group: Drug (strength · frequency) · Mechanism of action · Adverse effects (ocular · systemic) · Contraindications and cautions. Rows go in order of use.
4. **Combinations** (where the books list them) — table: Combination · Why use it · Disadvantages.
5. **Lasers** — table: Procedure (indications) · Key steps and settings · Advantages · Disadvantages and complications.
6. **Surgery** — the same table.
7. **Choosing between them** — short comparison tables, e.g. trabeculectomy versus drainage device, or valved versus non-valved implants.
8. **Viva questions** — 20–30, on mechanisms, side effects, choices and steps.
9. **Read more.**

---

## 10. THE REPO — where things live, how to save, how to resume, how to build

### 10.1 Where everything lives
| Path | What it is | Who changes it |
|---|---|---|
| Repo root: the checklist, `Case Format/`, `FUNDUS CASE.pdf`, `Last Year Cases/`, `Short Viva/`, `Ophthal mnemonics final.pdf`, `Practical Curriculum  Old/` | The reference files (§5) | Nobody: read-only |
| `Books/` | The knowledge sources (§5, §7) | Nobody: read-only |
| `MASTER_PROMPT_PRACTICALS_v4.md` | This prompt | Only the candidate |
| `Case_Cards/<NN>_<Subject>_Case_Cards.docx` and `.pdf` | The finished subject files | The session that owns the subject |
| `Case_Cards/status/<NN>_<SUBJECT>.md` | **Where each subject stands**: owner, stage of every card, next step (§10.4) | The session that owns the subject |
| `Case_Cards/status/00_SPEC.md` | Whether the shared spec is synced to v4 | The spec-sync session (§10.6, step 1) |
| `Case_Cards/progress.md` | The log of the first build (7 Oct) | Nobody: history only |
| `Case_Cards/_work/specs/` | The shared spec: CARD_SPEC, EXAMINER_SPEC, FACTCHECK_SPEC, BUILDER_SPEC, CONSISTENCY | The spec-sync session; anyone appends to CONSISTENCY |
| `Case_Cards/_work/tools/` | The builder | The spec-sync session |
| `Case_Cards/_work/transcripts/` | The anonymised handwritten sheets | Nobody: read-only |
| `Case_Cards/_work/card_sources/<ID>.md` | Each card's source, in the builder's dialect | The subject's owner |
| `Case_Cards/_work/checks/` | `<ID>_notes.md` (claims ledger), `<ID>_review.md` (examiner), `<ID>_check.md` (fact-check), `<NN>_coverage.md` | The subject's owner |
| `Case_Cards/_work/<NN>_<Subject>_working_notes.md` | Book disagreements; points to confirm with seniors | The subject's owner |
| `Case_Cards/_work/cache/` | Per-page book text, packets, rendered pages, `node_modules` — **never committed** | Anyone; rebuilt as needed |
| `Case_Cards/candidate_notes.md` | New uploads and seniors' tips (§13) | Any session, anonymised |

### 10.2 Set up the session — first thing, every time
1. **Reading tools:** PyMuPDF and poppler (`pdftotext`, `pdftoppm`). Install what is missing, e.g. `pip install pymupdf pillow` and `apt-get install -y poppler-utils`.
2. **Building tools:**
   - **Node with the `docx` package:** run `npm install docx` inside `Case_Cards/_work/tools/`; `node_modules` stays out of git. If the build fails on a docx API error, try `npm install docx@8`.
   - **LibreOffice:** `apt-get install -y libreoffice-writer`.
   - **The Carlito font:** `fonts-crosextra-carlito`. It has the same widths as Calibri; without it the pages reflow and the page budgets mean nothing.
3. **If the building tools cannot be installed, carry on.** Packets, ledgers, drafting, review and fact-check need only the reading tools. Set the subject's state to "build pending"; a later session builds it.
4. **`.gitignore`.** If the repo root has none, create one with these lines, and commit it:
   - `Case_Cards/_work/cache/`
   - `node_modules/`
   - `__pycache__/`
   - `.DS_Store`
5. **Book text.** Extract each book's text once per session into `Case_Cards/_work/cache/txt/<book>/pNNNN.txt`, one file per page, named by the fitz index with zero padding.

### 10.3 Start or resume — before any card work
1. **Get the latest state.** Run `git fetch --all --prune`, then bring your branch up to date with `origin/main`.
2. **Recover work that never reached `main`.**
   - List the remote branches not merged into `origin/main` that change `Case_Cards/` (`git log --oneline origin/main..<branch> -- Case_Cards/`). They hold steps an earlier session saved but never got onto `main`.
   - Merge each one before you start.
   - If a merge conflicts in a status file, keep the later stage for each card. If it conflicts anywhere else, stop and ask the user.
3. **Check the sources** listed in §5.
   - **If Baidya is missing, stop and tell the user.** It is knowledge source 1, and cards built without it would carry older numbers than the glaucoma cards. Wait until it is added, or until the user tells you plainly to go ahead without it. In that case, write "Baidya not checked" in the Notes of every card you build.
   - **If Kanski is missing, carry on.** Wherever a section needs the fallback, write "source not in the repo" in the card's notes and status row. Never invent the fact.
4. **Read the state:** every file in `Case_Cards/status/`, then `_work/README.md`. Look in each status file's "Requests for other subjects" for anything addressed to your subject.
5. **Claim your subject(s).** Open or create `Case_Cards/status/<NN>_<SUBJECT>.md` and set its Owner line to this session.
   - If another session owns it and its last commit is under 30 minutes old, it may still be running: ask the user before you take over.
   - Otherwise take over, and write "taken over from …" in the Owner line.
   - Commit and push the claim at once (§10.5).
6. **Continue where it stopped.** Work on the first card whose stage is not `done`, starting at its next stage (§10.4).
   - **Trust the files in the repo.** If a stage's output file is there but the status row lags behind, advance the row.
   - Anything that was never committed is gone; redo it.
7. **`SUBJECT: CONTINUE`** resumes every subject whose state is not `delivered`, in the §10.6 order.

### 10.4 The status file
One per subject: `Case_Cards/status/<NN>_<SUBJECT>.md`, e.g. `02_RETINA.md`.

```
# 02 RETINA — status
Owner: <branch name> · claimed 8 Oct 2026 14:05 IST
State: in progress          (in progress · build pending · blocked: <why> · delivered)
Next step: R3 — examiner review

| Card | Stage | Notes |
|---|---|---|
| RX | done | |
| R1 | checked | |
| R3 | drafted | |
| R4 | todo | |

Questions for the user:
Requests for other subjects:
```

**Card stages, in order:**
1. `todo`;
2. `ledger` — the claims ledger is written (`checks/<ID>_notes.md`);
3. `drafted` — the card source is written (pass 1);
4. `reviewed` — the examiner review and the read-and-answer test are done (pass 2);
5. `checked` — the independent fact-check is applied;
6. `done` — the card is in a build that passed §12.

Upgrade cards (§11) start at `v2`. For them, `drafted` means "edited to the v4 template".

**Times.** Write times in IST (UTC + 5:30). The cloud clock is usually UTC.

### 10.5 Saving progress — commit and push as you go
- **One commit per card stage.** Commit the stage's files **and** the status-row update together, so the two never disagree. Message format: `cards(02 RETINA): R3 reviewed`.
- **Push straight away.** Run `git pull --rebase origin main`, then `git push origin HEAD:main`. If the push is rejected because `main` has moved on, pull with rebase and push again, up to 3 tries.
- **Only the main session commits.** Sub-agents may draft, review and check cards in parallel, but the main session commits their files.
- **Conflicts.** Each subject owns separate files, so a rebase is normally clean. If it is not:
  - `CONSISTENCY.md`: keep both added blocks;
  - another subject's files: take theirs, unchanged;
  - anything else: stop and ask the user.
- **If pushing to `main` is not allowed** (rejected for permissions or branch protection, not because `main` moved on):
  - push your session branch instead;
  - open a pull request to `main`, and merge it if your tools allow;
  - if they don't, end your final message with "Merge pull request #N before you start another session". The next session's §10.3 step 2 picks up the branch anyway.
- **Never hold more than one card stage unsaved.** A session can stop at any moment.
- **Commit the subject's `.docx` and `.pdf` only when its build passes §12,** not after every trial build. Each one adds megabytes to the history for good.
- **Privacy scan before every push.** The repo is public (as of 8 Oct 2026): everything you push can be read and copied by anyone.
  1. Run `git diff --cached | grep -nE '(^|[^0-9.,])1[0-9]{5,6}([^0-9]|$)'`. It catches the 6–7-digit hospital numbers on the sheets. Look at every hit; a real hospital number must not be pushed.
  2. Check that no patient name is in the diff. Names exist only in the handwritten sheets and photos. Never transcribe from those; use `_work/transcripts/`.
  3. Never commit the per-page book text or the packets. They stay in `_work/cache/`.

### 10.6 Building a subject — the steps
**Build order with `ALL`:** INDEX (upgrade) → GLAUCOMA (upgrade) → RETINA → CORNEA → MISC → NERVES → OCULOPLASTY → VIVA.
**Within a subject:** toolkit → ★ cards → other long-case cards → short-case and fundus cards → tasks and charts.

**Step 0 — Set up, sync, claim:** §10.2 and §10.3.

**Step 1 — Sync the shared spec (one session only).**
- **Why it matters:** the drafting, examiner and fact-check sub-agents read the files in `_work/specs/`, not this prompt. If those files still describe v2, the cards come out in v2 shape.
- **Check `Case_Cards/status/00_SPEC.md`:**
  - It says **"synced to v4"** → skip this step.
  - It says **"syncing"** and was committed under an hour ago → another session is doing it. Meanwhile do work that does not depend on the spec (packets, ledgers), then pull again.
  - Otherwise → do the sync.
- **The sync:**
  1. Write "syncing to v4 — <your branch> — <time IST>" in `00_SPEC.md`, then commit and push.
  2. **`CARD_SPEC.md`:**
     - its §1 and §2 from §1, §2 and §4 here (roles, tiers, depth rule, read-and-answer test, the five asks);
     - its §4 templates from §9 here;
     - its §5 house format: keep it, but correct the proforma page references as in §5 here;
     - its §3 dialect: keep it as it is.
  3. **Paths.** In every spec file and in `_work/README.md`, replace the old workspace paths (`/home/claude/cards/...`) with repo paths:
     - drafts → `Case_Cards/_work/card_sources/`;
     - notes, reviews and checks → `Case_Cards/_work/checks/`;
     - packets, book text and renders → `Case_Cards/_work/cache/`.
  4. Add §12 checks 2, 5 and 6 to `FACTCHECK_SPEC.md`. Write `EXAMINER_SPEC.md` for pass 2 (§1, §2).
  5. In `_work/tools/build_cards.js`, add `toolkit: 'Toolkit'` to `KIND_LABEL`, and set `WORD_BUDGET` to the §9 budgets (including `fundus` and `toolkit`).
  6. Write **"synced to v4"** in `00_SPEC.md`, then commit and push.

**Step 2 — The toolkit card first.** Its doses and settings are what the case cards quote.

**Step 3 — Each card, one committed stage at a time:**
1. Packet (in the cache).
2. `ledger`.
3. `drafted` (pass 1).
4. `reviewed` (pass 2, with the read-and-answer test).
5. `checked` (independent fact-check).

Sub-agents may work on several cards in parallel.

**Step 4 — Build.** Run `node Case_Cards/_work/tools/build_cards.js …` (full command in `_work/README.md`), then convert to PDF with LibreOffice. Render every page into the cache and look at each one.

**Step 5 — Checks** (§12).

**Step 6 — Deliver** (§12, check 10).

### 10.7 Ending a session
Before you stop, for whatever reason:
1. **Save.** Every finished stage is committed and pushed, and the status file's "Next step" says exactly where to pick up.
2. **Final message.** Give:
   - what you finished;
   - the GitHub link to each delivered file, e.g. `https://github.com/Nithish555/Ophthalmology-Practical-Reference/blob/main/Case_Cards/02_Retina_Fundus_Case_Cards.pdf`;
   - what comes next;
   - any questions for the user;
   - the exact line to send to continue, e.g. `Read MASTER_PROMPT_PRACTICALS_v4.md and follow it. SUBJECT: RETINA`.

---

## 11. UPGRADE MODE — files already built under v2

As of 8 Oct 2026 these are `Case_Cards/00_Index_and_Master_Case_Format` and `Case_Cards/01_Glaucoma_Case_Cards`. Their status files start with every card at `v2`.

1. **Tag first.** Before your first upgrade edit, tag the current commit `v2-build` and push the tag. Git history keeps the v2 files; there is no backup folder.
2. **Keep what is right.** The v2 cards were fact-checked claim by claim (`_work/checks/`). Edit `_work/card_sources/<ID>.md` in place; do not redraft from zero.
3. **Bring each card to the template** (commit each card's stages as in §10.5):
   1. **History.** One question per row, in positive and negative tables. The negative table gets "A 'yes' would point to" and "How to tell them apart" columns. For example, G1's lumped row "no headache with vomiting, coloured haloes, redness, watering or pain" becomes five rows, and the haloes row follows the §4.1 model.
   2. **Examination.** "Special tests" become must-do steps with **Do / Record / Viva**. Move step-specific questions out of the viva section and into the steps.
   3. **Differentials.** Add the "How to tell apart" column.
   4. **Investigations.** Move them up into "How I will proceed", and add the "Significance" column.
   5. **Management.**
      - Rewrite it as the first-person ladder with triggers.
      - The drug table gains mechanism and contraindication columns.
      - Add a laser and surgery table with advantages and disadvantages.
      - Full profiles move to the new **GX** card.
   6. **Short-case blocks.** Add one block, named after each checklist line the card owns (§8.3): G1 "Glaucomatous optic disc", G5 "Rubeosis iridis", G6 "Pseudoexfoliation". Each has its spoken description and its own viva.
   7. **Say-it.** Add the spoken opening.
   8. **Wording and order.** Rewrite telegraphic lines as full short sentences. Put basics first and tag minor items *(extra)*.
   9. **Examiner review.** Run it, including the read-and-answer test.
4. **Fact-check what is new.** Check only new and changed claims; the old reports stand for unchanged text. Log the changes in `_work/checks/<ID>_check_v4.md`.
5. **Upgrade the index (00).**
   - Add the five-asks method to the master proforma.
   - Bring the short-case method in line with template B.
   - Replace the card index with the card index plus the checklist coverage map (§8.3) and the toolkit list.
6. **Rebuild.** Use the same file names. The v2 versions stay in git history under the `v2-build` tag.

---

## 12. WRITING RULES AND QUALITY CHECKS

**Writing:**
- **Plain English with exact terms** — see §1. Write full short sentences, never telegraphic notes.
- **Abbreviations.** Expand each one at first use on the card. Never use an abbreviation inside a say-it script.
- **Classifications.** Name the system and give its grades, e.g. ISGEO, Shaffer, Spaeth, Van Herick, Hodapp–Parrish–Anderson, ICDR with DME grading, ETDRS CSME, SUN, CAS / EUGOGO, LOCS III. Follow `CONSISTENCY.md` where it has decided one.
- **Numbers and doses.** Every one is verified in the §7 sources, or left out.
- **Priority.** Basics first in every section; minor items last and tagged *(extra)*.
- **Answers.** Use the structure for each kind of question, the book's standard definitions, keyword first, simple English and a professional register (§2.3–§2.6).
- **Style.**
  - British spelling (oedema, haemorrhage, tumour, paediatric).
  - Bold only the words that earn marks.
  - No book names or page numbers in the body; they go in the "Read more" line only.
- **Patients.** No patient name or hospital number anywhere.

**Format.** Each subject is one `.docx` + `.pdf` in `Case_Cards/`:
- A4, with each card starting on a new page;
- a header bar on each card and a shaded box for each say-it script;
- navy table headers, and table rows that never split across pages.

The builder in `_work/tools/` already does all of this.

**Checks before delivering each subject file:**
1. **Coverage.**
   - Every card in §8.1 for this subject is present.
   - Every checklist line in §8.3 owned by this subject is present as a card or a named block on the **built** file.
   - Every point in the matching typed format is covered.
   - Write the result, one row per checklist line, to `_work/checks/<NN>_coverage.md`.
2. **The five asks, card by card:**
   - every history row has its reason;
   - every negative-history row names what it rules out (and the telling-apart test where the books give one);
   - every must-do step has Do, Record and Viva;
   - the differential table's last column names a sign or test;
   - every investigation has its significance;
   - the ladder has an aim, triggers, and every drug's mechanism, adverse effects and contraindications (here or on the toolkit);
   - every laser and operation has advantages and disadvantages.
3. **Examiner review** — `<ID>_review.md` exists, with the read-and-answer test passed (gaps filled).
4. **Independent fact-check** — a sub-agent that did not write the card checks every number, dose, grade, classification and diagnosis line against the three books, including the examiner's additions. Apply the fixes.
5. **Priority, structure and keywords:**
   - basics come first in every section;
   - minor items are tagged and no more than about 10%;
   - nothing on the examiner's "pass candidate" list is missing;
   - every answer has the §2.3 shape for its kind of question, and opens with its keyword;
   - every definition matches the book's wording (§2.4);
   - every term on the Keywords line appears in at least one say-it script or viva answer. A short script can check this: take each keyword and search the rest of the card source.
6. **Terminology and readability pass:**
   - **Terms:** no lay substitutes, no spoken abbreviations, British spelling.
   - **Sentence length:** a script lists every sentence over 20 words outside tables. Split each one, unless it is a quoted definition.
   - **Banned words:** the script also flags "e.g.", "i.e.", "etc.", "utilise", "initiate", "prior to", "basically" and "simply". Replace each with the plain word (§2.6).
7. **Render and look at every page.** No stray markdown, no split tables, page budgets kept.
8. **Privacy pass.** Run the §10.5 scan over the card sources and every file you are about to push. No patient name or hospital number may appear: the repo is public.
9. **Confirm with your seniors.** List at most 5 genuinely doubtful points per subject (book disagreements that matter, department conventions) in `_work/<NN>_<Subject>_working_notes.md`.
10. **Deliver.**
    - Commit the subject's `.docx` and `.pdf` to `Case_Cards/`, along with the coverage and working-notes files.
    - Set the status file's State to `delivered` and every card to `done`.
    - Push (§10.5).
    - Give the GitHub links in your final message (§10.7).

---

## 13. MEMORY
The candidate asked that his practical-exam uploads be remembered.
- **Where:** add any new upload (a new case list, a senior's tip) to `Case_Cards/candidate_notes.md`, then commit and push it.
- **Anonymise it.** The repo is public.
- **Already included:** his requests of 7 Oct 2026 — the five asks, and "detailed notes that are enough on their own, basics first" — are built into this prompt.
