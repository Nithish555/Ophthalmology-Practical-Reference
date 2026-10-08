# TRANSCRIPTION SPEC — department handwritten case sheets (anonymised)

These are handwritten teaching case sheets from an ophthalmology department (Joseph Eye Hospital), written by
postgraduates and corrected by seniors. They will be used to build an exam "house format": the order of headings, the
RE | LE tables, the exact clinical wording, the drawings and the diagnosis lines.

## What to do
Open every page image you are given with the Read tool. Each page has a full-page image `pNN.jpg` (NN = 1-based PDF page
number) and, for handwriting, higher-resolution halves `pNN_top.jpg` / `pNN_bottom.jpg` (or `_left` / `_right` for
landscape pages). Read the full page first; open the halves whenever the handwriting is hard to read.

For each page write, in Markdown:
- `### PDF page NN — <case / topic> — <part of the sheet>`
- A faithful transcription in reading order, keeping the headings exactly as written (History of presenting illness,
  Past history, …), the starred/bulleted lines, abbreviations as written (h/o, k/c/o, RTL, VH Gr IV, PCIOL, CDR …) and
  the department's phrasing. Expand nothing; correct obvious spelling only.
- Tables (e.g. RE | LE ocular examination) as Markdown tables with the same rows and columns.
- Drawings: describe what is drawn, which eye, labels, colours used (e.g. "red pencil drawing of fundus with flame
  haemorrhages in the superotemporal quadrant; disc outlined in black; labelled 'NVE'"), and any legend.
- Seniors' corrections in coloured ink (orange/red/green): mark them `[senior's note: …]` — they matter, they show what
  examiners want.
- The diagnosis line ("My provisional diagnosis: …") word for word.
- Write `[illegible]` for what you cannot read. Never guess clinical facts.

## Privacy — essential
These sheets contain REAL patients' names, ages, hospital/IP/OP/MR numbers and dates.
- In the transcription replace every patient name with `Mr X` / `Mrs X` / `Master X` / `Miss X`, every hospital, IP, OP,
  MRD or registration number with `[number]`, every address/place of residence with `[place]`, and every date with
  `[date]`. Age and sex may stay.
- Separately, append every name and number you replaced (exactly as written, one per line, with the page) to the private
  file you are told about. That file is used ONLY to search the final documents for leaks and is never shared.

## Output
Write the transcription to the file you are told, starting with a short header: source file, pages covered, and a
3–6 line summary of the heading order used across these sheets. At the end add `## Format observations` — 5–15 bullets
on the house style you noticed (order of headings, how the RE | LE table is laid out, how findings are worded, how the
diagnosis is phrased, anything the seniors corrected).
