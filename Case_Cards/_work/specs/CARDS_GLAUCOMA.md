# GLAUCOMA cards — per-card briefs (v4; read CARD_SPEC.md first)

Last year at JEH (34 real cases): glaucoma 12 = POAG ×6 (one with pseudoexfoliation glaucoma) · PACG ×4 (one was the
LONG case) · NVG ×1 · CRVO with POAG ×1. Tasks done: applanation tonometry on 8, gonioscopy on 8, Humphrey field on 3.
Glaucoma short cases were do-and-show tasks: the candidate had to PERFORM the test, not just describe it.
Gonioscopy was recorded as a cross diagram with the deepest structure seen in each quadrant (e.g. SS = scleral spur).
Station timings for drills: long case 20 + 10 min · short case 10 + 5 min · fundus 10 + 5 min.

**The candidate's feedback (8 Oct 2026):** the v2 glaucoma cards were too brief and missed topics and questions. The v4
upgrade must (a) turn every telegraphic line into full, explained sentences, (b) cover every topic and FAQ the three
books give for the case, and (c) reach the upper end of each budget: long cards about 4,500–5,500 words with 30–35
viva-section questions PLUS 2–4 questions per examination step PLUS 4–6 per short-case block.

Cards that are about a status (G2 trabeculectomy, G3 drainage device, G7 CRVO with POAG) must NOT repeat POAG basics
that live on card G1 (definition, risk factors, the drug table, target pressure). One line "For primary open-angle
glaucoma itself, see card G1." is allowed. Focus on what is special to that eye. Full drug, laser and surgery profiles
live on GX; case cards keep the short form and end their drug table with "Full profiles: card GX."

## File order and kinds
`01_Glaucoma_Case_Cards`: GX (toolkit) → G1 → G4 → G5 → G6 → G7 → G8 → G9 → G10 → G2 → G3 → G11 (viva sheet, extra).

| # | Card | `@kind` | Sources (fitz; Baidya printed = fitz − 14, Namrata = fitz − 18) |
|---|---|---|---|
| GX | Glaucoma treatment toolkit | toolkit | Aravind 1.4 (fitz 44), 4.7 (238), 4.15 (275), 4.16 (286), 4.17 (292), 4.18 (301), 4.19 (315), 4.20 (319), 4.21 (328) · Baidya 166–194 (drug tables 170–172; trabeculectomy, SLT, GDD 173–180) · Namrata 189–225 |
| G1 | ★ POAG, incl. the glaucomatous optic disc (L+S) | long | Baidya 166 (NTG 172), 195–215 (perimetry, OCT) · Namrata 189 · Aravind 4.8 (239), 4.4 (220), 4.15 (275), 4.16 (286), 4.3 · Proforma 7–9, 13 · Glaucoma case format · Aravind model glaucoma sheet |
| G2 | POAG with trabeculectomy — bleb assessment, failed bleb | long | Aravind 4.18 (301), 4.19 (315) · Baidya 166–194 (trabeculectomy passages) · Namrata 189–225 · Proforma 11 (bleb slide) |
| G3 | POAG with glaucoma drainage device | long | Aravind 4.20 (319) · Baidya 187–194 · Namrata 194, 204, 213, 217 |
| G4 | ★ Primary angle-closure disease (PACS / PAC / PACG), post-laser iridotomy, the acute attack. **The deepest card**: thesis on AS-OCT angle parameters and phacoemulsification in PACS | long | Baidya 162–165 · Namrata 196–202 · Aravind 4.6 (229; haloes and the Fincham test at 232), 4.7 (238), 4.5 UBM (227), 4.17 lasers (292), 4.14 lens-induced (differential) · Proforma 10–11 · approved Kanski uses in CONSISTENCY.md (text already on the v2 card; Kanski itself is not in the repo) |
| G5 | ★ Neovascular glaucoma, incl. rubeosis iridis (L+S) | long | Baidya 190–194 · Namrata 210–214 · Aravind 4.9 (246) · Proforma 12 |
| G6 | ★ Pseudoexfoliation syndrome and glaucoma (L+S) | long | Baidya 181–182 · Namrata 221–225 · Aravind 4.11 (259) · Proforma 12 |
| G7 | ★ CRVO with POAG / hemi-CRVO with POAG | short | Baidya 278 · Namrata 234 · Aravind 6.6 (381) · FUNDUS CASE 18–19 |
| G8 | ★ Applanation tonometry — perform and record | task | Aravind 4.1 (204), 4.3 · Baidya 752–754 · Glaucoma case format |
| G9 | ★ Gonioscopy — perform, grade, draw | task | Aravind 4.2 (212) · Baidya 752–754, 162–165 · Namrata 196–202 · Glaucoma case format (Scheie, Shaffer, Spaeth) · Proforma 9 |
| G10 | ★ Humphrey field in glaucoma (last year's task) | chart | Baidya 195–208 (single-field interpretation 198) · Aravind 4.4 (220) · `Short Viva/fields viva.pdf` pp 1–4 · Imaging PDF "Visual fields" |
| G11 | Other glaucomas the examiner may ask — childhood and secondary glaucomas (not on the checklist; extra) | viva | Baidya 183–186 (buphthalmos), 187–189 (Sturge–Weber) · Namrata 203–205 (Sturge–Weber short case), 206–209 (buphthalmos short case), 218–220 (steroid-induced) · Aravind 4.10 pigmentary, 4.12 uveitic, 4.13 steroid-induced, 4.14 lens-induced · angle recession and malignant glaucoma: grep the three books |

Before relying on a fitz range above, open the pages: the ranges were mapped on 7–8 Oct and may be off by a page or two.

## Checklist lines each card must carry (master prompt §8.3)
- GLAUCOMA long: POAG → G1 · PACG → G4 · POAG with trabeculectomy → G2 · POAG with GDD → G3 · Neovascular glaucoma (NVG)
  → G5 · Pseudoexfoliative glaucoma → G6.
- GLAUCOMA short: Applanation tonometry → G8 · Gonioscopy → G9 · POAG disc / glaucomatous optic disc → G1 block
  **"Glaucomatous optic disc"** · CRVO with POAG → G7 · Pseudoexfoliation → G6 block **"Pseudoexfoliation"**.
- MISC (owned by GLAUCOMA): Pseudoexfoliation → G6 · Rubeosis iridis → G5 block **"Rubeosis iridis"**.

So the `## Short-case version` blocks are: G1 `### Glaucomatous optic disc` · G5 `### Rubeosis iridis` ·
G6 `### Pseudoexfoliation`.

## Upgrade rules (master prompt §11) — for G1–G10
1. **Keep what is right.** The v2 cards were fact-checked claim by claim (`checks/<ID>_check.md`). Edit
   `card_sources/<ID>.md` in place; do not redraft from zero. Reuse every verified fact.
2. **History.** One question per row, in positive and negative tables. The negative table gets "A 'yes' would point to"
   and "How to tell them apart" columns. G1's lumped row "no headache with vomiting, coloured haloes, redness, watering
   or pain" becomes five rows, and the haloes row follows the model row in CARD_SPEC §2A.
3. **Examination.** "Special tests" become must-do steps (`### Step n — …`) with **Do / Record / Viva**. Move
   step-specific questions out of the viva section into the steps.
4. **Differentials.** Add the "How to tell apart" column and the exclude-first line.
5. **Investigations.** Move them up into `## How I will proceed — investigations`, with the "Significance" column.
6. **Management.** The first-person ladder with triggers; the drug table gains mechanism and contraindication columns;
   add the laser and surgery table with advantages and disadvantages; full profiles move to GX.
7. **Short-case blocks** (named above), each with its spoken description and its own viva.
8. **Say-it.** Add the spoken opening; keep and polish the closing.
9. **Wording and order.** Full short sentences; basics first; minor items tagged *(extra)*.
10. **New and changed claims** go into the ledger `checks/<ID>_notes.md` under `## v4 additions`, each with its page.

## Card-specific notes
- **G1**: add the related-terms definitions (ocular hypertension, normal-tension glaucoma, glaucoma suspect, target
  pressure, juvenile open-angle glaucoma); the OCT and perimetry essentials the books give (Baidya 195–215); every Aravind
  4.8 FAQ and Baidya POAG FAQ not yet on the card.
- **G4**: deepest card. Cover the ISGEO classification (PACS / PAC / PACG), mechanisms (pupillary block, plateau iris,
  lens-related, combined mechanism), provocative tests where the books give them, the acute attack and its management
  (Aravind 4.7), laser iridotomy and iridoplasty, UBM and AS-OCT findings the books give, lens extraction in angle
  closure (approved Kanski use, keep its tag), and the Fincham test for haloes.
- **G5**: PRP settings must match card R1 (CONSISTENCY / progress.md: Baidya 500 µm, 0.1 s, 1200–1600 burns in 3–4
  sittings). Anti-VEGF agents as the books give them.
- **G7**: short-case template B; keep the approved Kanski definition with its tag.
- **G8, G9**: these were do-and-show tasks on 8 of 12 cases — the steps table must be complete (consent, instruction,
  anaesthetic, disinfection) and the viva full (10–15).
- **G11**: new card, template G. Conditions, in this order: buphthalmos (primary congenital glaucoma) · Sturge–Weber
  syndrome · lens-induced glaucomas (phacomorphic, phacolytic, and others the books list) · uveitic glaucoma ·
  steroid-induced glaucoma · pigmentary glaucoma. Add angle-recession glaucoma and malignant glaucoma only if the three
  books cover them.
