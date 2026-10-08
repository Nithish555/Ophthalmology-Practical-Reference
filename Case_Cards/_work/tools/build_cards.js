#!/usr/bin/env node
'use strict';
/**
 * build_cards.js — turn case-card files (the Markdown dialect of notes/CARD_SPEC.md §3) into ONE
 * Word file per subject. Spec: notes/BUILDER_SPEC.md.
 *
 *   node build/build_cards.js --subject "Glaucoma" --file-title "01 · Glaucoma case cards" \
 *       --out build/out/01_Glaucoma_Case_Cards.docx drafts/G1.md drafts/G4.md ...
 *   node build/build_cards.js --subject "Index and master case format" \
 *       --file-title "00 · Index and master case format" --no-contents \
 *       --out build/out/00_Index_and_Master_Case_Format.docx drafts/00_index.md
 *
 *   --report FILE   also write the per-card check report to FILE (it always goes to stderr)
 *
 * Then the PDF (a private LibreOffice profile avoids clashes with other soffice runs):
 *   soffice -env:UserInstallation=file:///tmp/lo_cards_profile --headless \
 *       --convert-to pdf --outdir build/out build/out/01_Glaucoma_Case_Cards.docx
 *
 * The gonioscopy crosses are drawn by gonio_png.py (Python 3 + Pillow) next to this file.
 * Bad input never stops the build: whatever cannot be parsed is reported as a WARNING on stderr
 * and rendered as plainly as possible.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  Document, Packer, Paragraph, TextRun, Tab, Table, TableRow, TableCell, ImageRun, Footer,
  Bookmark, BookmarkStart, BookmarkEnd, InternalHyperlink, AlignmentType, BorderStyle, HeadingLevel, LevelFormat, PageNumber,
  SectionType, ShadingType, TableLayoutType, TabStopType, VerticalAlign, WidthType,
} = require('docx');

// ───────────────────────────── page, type and colours ─────────────────────────────
const PAGE = { width: 11906, height: 16838 };                       // A4 in twips
const MARGIN = { top: 794, bottom: 794, left: 907, right: 907, header: 397, footer: 397 };
const TEXT_W = PAGE.width - MARGIN.left - MARGIN.right;              // 9978 twips
const FONT = 'Calibri';
const SYMBOL_FONT = 'Segoe UI Symbol';                              // for glyphs Calibri lacks:
// ∝, circled operators (⊕ …), enclosed letters and numbers (Ⓝ ①), misc symbols and dingbats (★ ✓)
const SYMBOLS = /([∝⊕-⊙①-⓿☀-➿⭐]+)/;
const COL = {
  navy: '1F3864', rule: '9DC3E6', teal: '31849B', tableBorder: '8EA9C1', zebra: 'F3F6FA',
  group: 'E2E9F3', gold: 'FFC000', goldOnWhite: 'C99700', grey: '7F7F7F', dark: '404040',
  white: 'FFFFFF', hairline: 'BFBFBF',
};
const SIZE = { body: 19, table: 17, h1: 28, h2: 22, h3: 19, badge: 18, readmore: 16, footer: 15, caption: 17 };
const BOXES = {
  say: { fill: 'EEF3FA', edge: COL.navy, label: 'Say it' },
  trap: { fill: 'FDF0EE', edge: 'C0392B' },
  recall: { fill: 'EEF7EE', edge: '2E7D32' },
  short: { fill: 'F4F6F8', edge: '7F8C8D' },
};
const PLAIN_BOX = { fill: 'F2F2F2', edge: null };                  // any unknown :::name
const KIND_LABEL = { long: 'Long case', short: 'Short case', fundus: 'Fundus case', task: 'Task', chart: 'Chart', index: 'Index' };
const WORD_BUDGET = { long: [2300, 3200], short: [700, 1000], task: [550, 750], chart: [550, 750] };
const COVER_SUBTITLE = 'M.S. Ophthalmology practical examination · Tamil Nadu Dr M.G.R. Medical University · 16 October 2026';
const COVER_NOTE = 'Every card follows the same headings. The generic long-case proforma is in 00 · Index and master case format.';
const COVER_KEY = '★ kept at JEH last year · Long case · Short case · Task · Chart';
const GONIO_WIDTH_CM = 11;
const GONIO_PX = { width: 1400, height: 600 };                      // must match gonio_png.py

// ───────────────────────────── command line ─────────────────────────────
function usage(msg) {
  if (msg) process.stderr.write(`build_cards.js: ${msg}\n`);
  process.stderr.write('usage: node build_cards.js --subject NAME --file-title TEXT --out FILE.docx [--no-contents] [--report FILE] CARD.md ...\n');
  process.exit(2);
}

function parseArgs(argv) {
  const o = { subject: '', fileTitle: '', out: '', contents: true, report: '', files: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const val = () => { if (i + 1 >= argv.length) usage(`${a} needs a value`); return argv[++i]; };
    if (a === '--subject') o.subject = val();
    else if (a === '--file-title') o.fileTitle = val();
    else if (a === '--out') o.out = val();
    else if (a === '--report') o.report = val();
    else if (a === '--no-contents') o.contents = false;
    else if (a === '-h' || a === '--help') usage();
    else if (a.startsWith('--')) usage(`unknown option ${a}`);
    else o.files.push(a);
  }
  if (!o.out) usage('--out is required');
  if (!o.files.length) usage('no card files given');
  if (!o.subject) o.subject = o.fileTitle || 'Case cards';
  if (!o.fileTitle) o.fileTitle = o.subject;
  return o;
}

// ───────────────────────────── warnings and notes ─────────────────────────────
const globalWarnings = [];
function warn(card, line, msg) {
  if (!card) { globalWarnings.push(msg); process.stderr.write(`WARNING ${msg}\n`); return; }
  const where = `${path.basename(card.file)}${line ? `:${line}` : ''}`;
  card.warnings.push(`${line ? `line ${line}: ` : ''}${msg}`);
  process.stderr.write(`WARNING ${card.id || '?'} (${where}): ${msg}\n`);
}
const snippet = (s, n = 60) => (s.length > n ? `${s.slice(0, n)}…` : s);

// ───────────────────────────── reading card files ─────────────────────────────
function newCard(file, line, id) {
  return { file, line, id, title: '', badge: '', kind: '', readmore: '', body: [], blocks: [], warnings: [], notes: [] };
}

function readCards(file) {
  let text;
  try {
    text = fs.readFileSync(file, 'utf8');
  } catch (e) {
    warn(null, 0, `cannot read ${file}: ${e.message} — skipped`);
    return [];
  }
  const lines = text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').split('\n');
  const cards = [];
  let card = null;
  if (!lines.some(l => /^@card\b/.test(l))) {
    card = newCard(file, 1, path.basename(file, path.extname(file)));
    cards.push(card);
    warn(card, 0, 'no "@card" line — the whole file is treated as one card');
  }
  let orphan = 0;
  lines.forEach((raw, idx) => {
    const n = idx + 1;
    const m = raw.match(/^@card\b[ \t]*(.*)$/);
    if (m) {
      card = newCard(file, n, m[1].trim() || `card${cards.length + 1}`);
      if (!m[1].trim()) warn(card, n, '"@card" has no id');
      cards.push(card);
      return;
    }
    if (!card) { if (raw.trim() && !orphan) orphan = n; return; }
    const h = raw.match(/^@(title|badge|kind|readmore)\b[ \t]*(.*)$/);
    if (h) {
      const key = h[1];
      if (card[key]) warn(card, n, `second "@${key}" line — the first one is kept`);
      else card[key] = h[2].trim();
      return;
    }
    card.body.push({ text: raw, n });
  });
  if (orphan) warn(cards[0], orphan, 'text before the first "@card" line is ignored');

  for (const c of cards) {
    if (!c.title) warn(c, c.line, 'no "@title" line');
    if (!c.kind) warn(c, c.line, 'no "@kind" line');
    else if (!KIND_LABEL[c.kind.toLowerCase()]) warn(c, c.line, `unknown @kind "${c.kind}" (expected long, short, task, chart, fundus or index)`);
    c.kind = c.kind.toLowerCase();
    c.blocks = parseBlocks(c.body, c);
  }
  return cards;
}

// ───────────────────────────── block parser ─────────────────────────────
// Block types: h2, h3, para, list{ordered, items[{level, ordered, text}]}, table, q, a,
// box{kind, blocks}, gonio{RE, LE, caption}.
function parseBlocks(lines, card) {
  const blocks = [];
  let cont = null;            // the block a following plain line joins (para, q or a)
  let widths = null;          // pending @widths for the next table
  const push = b => {
    if (widths && b.type !== 'table') {
      warn(card, widths.n, '"@widths" is not directly followed by a table — ignored');
      widths = null;
    }
    blocks.push(b);
    return b;
  };
  const lastList = () => {
    const b = blocks[blocks.length - 1];
    return b && b.type === 'list' ? b : null;
  };

  let i = 0;
  while (i < lines.length) {
    const { text: raw, n } = lines[i];
    const line = raw.replace(/\s+$/, '');
    const t = line.trim();
    let m;

    if (!t) { cont = null; i++; continue; }

    // ── boxes ──
    if ((m = t.match(/^:::\s*([A-Za-z][\w-]*)\s*$/))) {
      cont = null;
      const name = m[1].toLowerCase();
      const inner = [];
      let j = i + 1;
      let closed = false;
      for (; j < lines.length; j++) {
        const tj = lines[j].text.trim();
        if (tj === ':::') { closed = true; break; }
        if (/^##\s/.test(lines[j].text) || /^:::\s*[A-Za-z]/.test(tj)) break;
        inner.push(lines[j]);
      }
      if (!closed) {
        warn(card, n, `":::${name}" is not closed with ":::" — closed at ${j < lines.length ? `line ${lines[j].n}` : 'the end of the card'}`);
      }
      if (name === 'gonio') {
        push(parseGonio(inner, card, n));
      } else {
        if (!BOXES[name]) warn(card, n, `unknown box ":::${name}" — rendered as a plain grey box`);
        push({ type: 'box', kind: name, n, blocks: parseBlocks(inner, card) });
      }
      i = closed ? j + 1 : j;
      continue;
    }
    if (t.startsWith(':::')) {
      warn(card, n, t === ':::' ? 'stray ":::" with no open box — ignored' : `cannot read box line "${snippet(t)}" — ignored`);
      cont = null; i++; continue;
    }

    // ── headings ──
    if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
      cont = null;
      let level = m[1].length;
      if (level !== 2 && level !== 3) {
        const as = level < 2 ? 2 : 3;
        warn(card, n, `"${m[1]}" headings are not part of the dialect — rendered as "${'#'.repeat(as)}"`);
        level = as;
      }
      push({ type: level === 2 ? 'h2' : 'h3', text: m[2].trim(), n });
      i++; continue;
    }

    // ── directives ──
    if ((m = t.match(/^@([A-Za-z]+)\b\s*(.*)$/))) {
      cont = null;
      if (m[1] === 'widths') {
        if (widths) warn(card, widths.n, '"@widths" is not directly followed by a table — ignored');
        const vals = m[2].replace(/%/g, ' ').trim().split(/[\s,]+/).filter(Boolean).map(Number);
        if (!vals.length || vals.some(v => !(v > 0))) {
          warn(card, n, `cannot read "@widths ${m[2]}" — ignored`);
          widths = null;
        } else {
          widths = { vals, n };
        }
      } else {
        warn(card, n, `"@${m[1]}" is not allowed here — ignored`);
      }
      i++; continue;
    }

    // ── tables ──
    if (t.startsWith('|')) {
      cont = null;
      const rows = [];
      while (i < lines.length && lines[i].text.trim().startsWith('|')) rows.push(lines[i++]);
      const w = widths;
      widths = null;
      push(parseTable(rows, card, w));
      continue;
    }

    // ── bullets ──
    if ((m = line.match(/^(\s*)([-*+])\s+(.*)$/))) {
      cont = null;
      const indent = m[1].replace(/\t/g, '    ').length;
      if (m[2] !== '-') warn(card, n, `bullet marker "${m[2]}" — the dialect uses "- "`);
      let level = indent >= 2 ? 1 : 0;
      let list = lastList();
      if (level === 1 && !list) {
        warn(card, n, 'nested bullet without a parent item — shown as a top-level bullet');
        level = 0;
      }
      if (list && level === 0 && list.ordered) list = null;   // a top-level bullet ends a numbered list
      if (!list) list = push({ type: 'list', ordered: false, items: [], n });
      list.items.push({ level, ordered: false, text: m[3].trim(), n });
      i++; continue;
    }

    // ── numbered items ──
    if ((m = line.match(/^(\s*)(\d{1,3})([.)])\s+(.*)$/))) {
      cont = null;
      if (m[3] === ')') warn(card, n, `numbered item "${m[2]})" — the dialect uses "${m[2]}."`);
      if (m[1].length >= 2) warn(card, n, 'indented numbered item — numbered lists have one level; shown at the top level');
      let list = lastList();
      if (list && (!list.ordered || Number(m[2]) === 1)) list = null;   // "1." always starts a new list
      if (!list) list = push({ type: 'list', ordered: true, items: [], n });
      list.items.push({ level: 0, ordered: true, text: m[4].trim(), n });
      i++; continue;
    }

    // ── viva ──
    if ((m = t.match(/^([QA]):\s*(.*)$/))) {
      cont = push({ type: m[1] === 'Q' ? 'q' : 'a', text: m[2].trim(), n, lines: 1 });
      i++; continue;
    }

    // ── Markdown outside the dialect ──
    if (/^(?:-{3,}|\*{3,}|_{3,})$/.test(t)) { warn(card, n, 'horizontal rule is not part of the dialect — ignored'); cont = null; i++; continue; }
    if (t.startsWith('```')) { warn(card, n, 'code fence is not part of the dialect — ignored'); cont = null; i++; continue; }
    let textLine = t;
    if (t.startsWith('>')) {
      warn(card, n, '"> " quote is not part of the dialect — shown as a paragraph');
      textLine = t.replace(/^>\s?/, '');
    }

    // ── plain line: consecutive lines join into one paragraph ──
    if (cont) {
      cont.text += ` ${textLine}`;
      cont.lines++;
    } else {
      cont = push({ type: 'para', text: textLine, n, lines: 1 });
    }
    i++;
  }
  if (widths) warn(card, widths.n, '"@widths" is not followed by a table — ignored');
  return blocks;
}

const SEPARATOR = /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?$/;
function splitRow(s) {
  let x = s.trim();
  if (x.startsWith('|')) x = x.slice(1);
  if (x.endsWith('|')) x = x.slice(0, -1);
  return x.split('|').map(c => c.trim());
}

function parseTable(rows, card, widths) {
  const n = rows[0].n;
  const header = splitRow(rows[0].text);
  const ncol = header.length;
  let body = rows.slice(1);
  if (body.length && SEPARATOR.test(body[0].text.trim())) body = body.slice(1);
  else warn(card, n, 'table has no "|---|" separator row under its header');
  if (ncol > 4) warn(card, n, `table has ${ncol} columns (the dialect allows at most 4)`);
  const out = [];
  for (const r of body) {
    if (SEPARATOR.test(r.text.trim())) { warn(card, r.n, 'extra "|---|" row inside the table — ignored'); continue; }
    let cells = splitRow(r.text);
    if (cells.length !== ncol) {
      warn(card, r.n, `table row has ${cells.length} cells but the header has ${ncol} — ${cells.length < ncol ? 'padded with empty cells' : 'extra cells joined into the last cell'}`);
      cells = cells.length < ncol
        ? cells.concat(Array(ncol - cells.length).fill(''))
        : cells.slice(0, ncol - 1).concat([cells.slice(ncol - 1).filter(Boolean).join(' · ')]);
    }
    out.push(cells);
  }
  if (!out.length) warn(card, n, 'table has no body rows');
  let pct = null;
  if (widths) {
    if (widths.vals.length !== ncol) {
      warn(card, widths.n, `"@widths" has ${widths.vals.length} values but the table has ${ncol} columns — automatic widths used`);
    } else {
      const sum = widths.vals.reduce((a, b) => a + b, 0);
      if (Math.abs(sum - 100) > 0.5) warn(card, widths.n, `"@widths" values sum to ${sum}, not 100 — scaled to 100`);
      pct = widths.vals.map(v => (v * 100) / sum);
    }
  }
  return { type: 'table', n, header, rows: out, widths: pct || autoWidths(header, out), auto: !pct };
}

// Widths proportional to the longest text in each column, at least 12 % each.
function autoWidths(header, rows) {
  const ncol = header.length;
  const longest = Array(ncol).fill(1);
  for (const r of [header, ...rows]) {
    r.forEach((c, j) => {
      for (const seg of c.split(/<br\s*\/?>/i)) longest[j] = Math.max(longest[j], plain(seg).length);
    });
  }
  const floor = Math.min(12, 100 / ncol);
  const total = longest.reduce((a, b) => a + b, 0);
  let pct = longest.map(l => (l * 100) / total);
  const pinned = new Set();
  for (let guard = 0; guard <= ncol; guard++) {
    pct.forEach((p, j) => { if (p < floor - 1e-9) pinned.add(j); });
    const rest = pct.reduce((a, p, j) => a + (pinned.has(j) ? 0 : p), 0);
    const scale = rest > 0 ? (100 - pinned.size * floor) / rest : 0;
    pct = pct.map((p, j) => (pinned.has(j) ? floor : p * scale));
    if (!pct.some((p, j) => !pinned.has(j) && p < floor - 1e-9)) break;
  }
  return pct;
}

function parseGonio(lines, card, n) {
  const g = { type: 'gonio', n, RE: null, LE: null, caption: '' };
  const EYE = { RE: 'RE', OD: 'RE', R: 'RE', RIGHT: 'RE', 'RIGHT EYE': 'RE', LE: 'LE', OS: 'LE', L: 'LE', LEFT: 'LE', 'LEFT EYE': 'LE' };
  for (const { text, n: ln } of lines) {
    const t = text.trim();
    if (!t) continue;
    const cap = t.match(/^caption\s*:\s*(.*)$/i);
    if (cap) { g.caption = cap[1].trim(); continue; }
    const parts = t.split('|').map(s => s.trim());
    const eye = EYE[parts[0].toUpperCase()];
    if (!eye) {
      warn(card, ln, `cannot read gonio line "${snippet(t)}" — expected "RE | S=… | T=… | I=… | N=…", "LE | …" or "caption: …"`);
      continue;
    }
    const q = {};
    for (const p of parts.slice(1)) {
      const mm = p.match(/^([STIN])[a-z]*\s*=\s*(.*)$/i);
      if (!mm) { warn(card, ln, `cannot read gonio quadrant "${snippet(p)}" — expected S=, T=, I= or N=`); continue; }
      q[mm[1].toUpperCase()] = mm[2].trim();
    }
    for (const k of ['S', 'T', 'I', 'N']) if (!(k in q)) warn(card, ln, `${eye} gonio line has no ${k}= quadrant`);
    if (g[eye]) warn(card, ln, `second ${eye} line in the gonio block — it replaces the first`);
    g[eye] = q;
  }
  if (!g.RE) warn(card, n, 'gonio block has no RE line — the right-eye cross is left empty');
  if (!g.LE) warn(card, n, 'gonio block has no LE line — the left-eye cross is left empty');
  return g;
}

// ───────────────────────────── inline text ─────────────────────────────
// **bold**, *italic*, <br>. Unpaired markers stay literal (and are reported by the stray check).
function parseInline(s) {
  const out = [];
  const rec = (str, bold, italics) => {
    let buf = '';
    const flush = () => { if (buf) { out.push({ text: buf, bold, italics }); buf = ''; } };
    let i = 0;
    while (i < str.length) {
      const ch = str[i];
      if (ch === '<') {
        const m = /^<br\s*\/?>/i.exec(str.slice(i));
        if (m) { flush(); out.push({ br: true }); i += m[0].length; continue; }
      }
      if (ch === '*') {
        if (str[i + 1] === '*') {
          const close = str.indexOf('**', i + 2);
          if (close > i + 2) { flush(); rec(str.slice(i + 2, close), true, italics); i = close + 2; continue; }
        } else if (str[i + 1] && !/\s/.test(str[i + 1])) {
          const close = closingStar(str, i + 1);
          if (close > i + 1) { flush(); rec(str.slice(i + 1, close), bold, true); i = close + 1; continue; }
        }
      }
      buf += ch;
      i++;
    }
    flush();
  };
  rec(s, false, false);
  return out;
}

function closingStar(str, from) {
  for (let j = from; j < str.length; j++) {
    if (str[j] !== '*') continue;
    if (str[j + 1] === '*') {               // skip a **bold** span inside the italic
      const c = str.indexOf('**', j + 2);
      if (c < 0) return -1;
      j = c + 1;
      continue;
    }
    if (!/\s/.test(str[j - 1])) return j;
  }
  return -1;
}

// Typographic quotes: "x" → “x”, it's → it’s.
function smartQuotes(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const prev = i ? s[i - 1] : '';
    if (c === '"') out += !prev || /[\s([{—–\-/*>‘]/.test(prev) ? '“' : '”';
    else if (c === "'") out += !prev || /[\s([{—–\-/*>“]/.test(prev) ? '‘' : '’';
    else out += c;
  }
  return out;
}

const plain = s => String(s).replace(/<br\s*\/?>/gi, ' ').replace(/\*\*|\*/g, '').replace(/\s+/g, ' ').trim();

// ───────────────────────────── statistics for the report ─────────────────────────────
function walk(blocks, fn) {
  for (const b of blocks) {
    fn(b);
    if (b.type === 'box') walk(b.blocks, fn);
  }
}

function blockText(b) {
  switch (b.type) {
    case 'list': return b.items.map(it => it.text).join(' ');
    case 'table': return [b.header, ...b.rows].map(r => r.join(' ')).join(' ');
    case 'gonio': return [b.caption, ...['RE', 'LE'].flatMap(e => Object.values(b[e] || {}))].join(' ');
    case 'box': return '';
    default: return b.text || '';
  }
}

function cardStats(card) {
  let words = 0;
  const tables = [];
  const boxes = [];
  let gonio = 0;
  walk(card.blocks, b => {
    words += plain(blockText(b)).split(' ').filter(w => /[\p{L}\p{N}]/u.test(w)).length;
    if (b.type === 'table') tables.push(b.header.length);
    if (b.type === 'box') boxes.push(b.kind);
    if (b.type === 'gonio') gonio++;
  });
  // viva pairs, and Q/A pairing checks (in reading order)
  let pairs = 0;
  const seq = [];
  walk(card.blocks, b => { if (b.type !== 'box') seq.push(b); });
  seq.forEach((b, k) => {
    if (b.type === 'q') {
      if (seq[k + 1] && seq[k + 1].type === 'a') pairs++;
      else warn(card, b.n, '"Q:" is not followed by an "A:" line');
    } else if (b.type === 'a' && !(seq[k - 1] && seq[k - 1].type === 'q')) {
      warn(card, b.n, '"A:" without a "Q:" line before it');
    }
  });
  // joined paragraphs (consecutive source lines) are noted, not warned
  walk(card.blocks, b => {
    if ((b.type === 'para' || b.type === 'q' || b.type === 'a') && b.lines > 1) {
      card.notes.push(`line ${b.n}: ${b.lines} consecutive lines joined into one paragraph ("${snippet(plain(b.text), 50)}")`);
    }
  });
  return { words, tables, boxes, gonio, pairs };
}

// ───────────────────────────── rendering helpers ─────────────────────────────
const dxa = size => ({ size, type: WidthType.DXA });
const line = (color, size = 4) => ({ style: BorderStyle.SINGLE, size, color });
const NONE = { style: BorderStyle.NONE, size: 0, color: 'auto' };
const NO_TABLE_BORDERS = { top: NONE, bottom: NONE, left: NONE, right: NONE, insideHorizontal: NONE, insideVertical: NONE };
const fill = color => ({ type: ShadingType.CLEAR, color: 'auto', fill: color });

function toTwips(pct, total) {
  const w = pct.map(p => Math.round((p * total) / 100));
  w[w.length - 1] += total - w.reduce((a, b) => a + b, 0);
  return w;
}

// A tiny paragraph: separates two tables (Word would merge them) and closes a cell that ends in a table.
const spacer = (twips = 100) => new Paragraph({
  spacing: { before: 0, after: 0, line: twips, lineRule: 'exact' },
  run: { size: 2 },
  children: [],
});

// Turn render items ({p: paragraph options} | {t: Table}) into docx objects, adding the
// spacing that tables lack.
function finalize(items) {
  const out = [];
  let lastTable = false;
  for (const it of items) {
    if (it.t) {
      if (lastTable) out.push(spacer());
      out.push(it.t);
      lastTable = true;
      continue;
    }
    const o = { widowControl: true, ...it.p };
    if (lastTable && !o.heading) {
      o.spacing = { ...(o.spacing || {}), before: Math.max((o.spacing && o.spacing.before) || 0, 110) };
    }
    out.push(new Paragraph(o));
    lastTable = false;
  }
  return out;
}

class Builder {
  constructor(opts) {
    this.opts = opts;
    this.card = null;
    this.numberedLists = 0;
    this.gonioCount = 0;
    this.tmp = null;
    this.bookmarks = new Map();
  }

  // Runs for one line of dialect text.
  runs(raw, base = {}, where = 'text') {
    const out = [];
    for (const tok of parseInline(smartQuotes(String(raw)))) {
      if (tok.br) { out.push(new TextRun({ break: 1 })); continue; }
      this.checkStray(tok.text, where);
      for (const seg of tok.text.split(SYMBOLS)) {
        if (!seg) continue;
        const o = { text: seg };
        if (base.bold || tok.bold) o.bold = true;
        if (base.italics || tok.italics) o.italics = true;
        if (base.size) o.size = base.size;
        if (base.color) o.color = base.color;
        if (SYMBOLS.test(seg)) {
          o.font = SYMBOL_FONT;
          if (/^★+$/.test(seg)) o.color = base.starColor || COL.goldOnWhite;
        }
        out.push(new TextRun(o));
      }
    }
    return out;
  }

  checkStray(text, where) {
    const t = text.replace(/\bRE \| LE\b/g, '');   // the template heading "Ocular examination — RE | LE template"
    const m = t.match(/\*|#|\||:::|<\/?[A-Za-z][^>]*>/);
    if (m) warn(this.card, 0, `Markdown left in the output (${JSON.stringify(m[0])}) in ${where}: "${snippet(text.trim())}"`);
  }

  bookmarkFor(card) {
    let id = `card_${String(card.id).replace(/[^A-Za-z0-9]/g, '_')}`.slice(0, 36);
    if (this.bookmarks.has(id) && this.bookmarks.get(id) !== card) {
      warn(card, card.line, `card id "${card.id}" is used twice`);
      id = `${id}_${this.bookmarks.size}`;
    }
    this.bookmarks.set(id, card);
    card.bookmark = id;
    return id;
  }

  // ── blocks → render items ──
  blocks(blocks, width, opt = {}) {
    const items = [];
    blocks.forEach((b, k) => {
      const next = blocks[k + 1];
      const keepWithNext = !!opt.lastKeepsWithNext && k === blocks.length - 1;
      const start = items.length;
      try {
        this.block(b, next, width, items, keepWithNext);
      } catch (e) {
        warn(this.card, b.n, `could not render a ${b.type} block (${e.message}) — shown as plain text`);
        items.push({ p: { children: [new TextRun(plain(blockText(b)) || '')] } });
      }
      if (keepWithNext) {
        const last = items[items.length - 1];
        if (items.length > start && last.p) last.p.keepNext = true;
      }
    });
    return items;
  }

  block(b, next, width, items, keepWithNext = false) {
    switch (b.type) {
      case 'h2':
        items.push({ p: { heading: HeadingLevel.HEADING_2, children: this.runs(b.text, {}, 'heading') } });
        break;
      case 'h3':
        items.push({ p: { heading: HeadingLevel.HEADING_3, children: this.runs(b.text, {}, 'sub-heading') } });
        break;
      case 'para': {
        // a short lead-in line stays with the list, table or box it introduces
        const leadIn = next && ['list', 'table', 'box', 'gonio'].includes(next.type) && plain(b.text).length < 160;
        items.push({ p: { keepNext: leadIn || undefined, children: this.runs(b.text, {}, 'paragraph') } });
        break;
      }
      case 'list': {
        const instance = b.ordered ? ++this.numberedLists : 0;
        b.items.forEach((it, idx) => {
          const lastItem = idx === b.items.length - 1;
          items.push({
            p: {
              numbering: it.ordered
                ? { reference: 'numbers', level: 0, instance }
                : { reference: 'bullets', level: it.level },
              spacing: { after: lastItem ? 60 : 30 },
              keepLines: true,
              children: this.runs(it.text, {}, it.ordered ? 'numbered item' : 'bullet'),
            },
          });
        });
        break;
      }
      case 'q':
        items.push({
          p: {
            keepNext: true,
            keepLines: true,
            indent: { left: 227, hanging: 227 },
            tabStops: [{ type: TabStopType.LEFT, position: 227 }],
            spacing: { before: 50, after: 0 },
            children: [
              new TextRun({ text: 'Q', bold: true, color: COL.navy }),
              new TextRun({ children: [new Tab()] }),
              ...this.runs(b.text, { bold: true }, 'viva question'),
            ],
          },
        });
        break;
      case 'a':
        items.push({ p: { keepLines: true, indent: { left: 227 }, spacing: { after: 40 }, children: this.runs(b.text, {}, 'viva answer') } });
        break;
      case 'table':
        items.push({ t: this.table(b, width) });
        break;
      case 'box':
        items.push({ t: this.box(b, width, keepWithNext) });
        break;
      case 'gonio':
        items.push(...this.gonio(b, width));
        break;
      default:
        warn(this.card, b.n, `unknown block type ${b.type}`);
    }
  }

  // ── tables ──
  table(b, width) {
    const ncol = b.header.length;
    const colW = toTwips(b.widths, width);
    const cell = (raw, w, o = {}) => {
      const segs = String(raw).split(/<br\s*\/?>/i);
      const children = segs.map(seg => new Paragraph({
        widowControl: true,
        keepNext: o.keepNext || undefined,
        spacing: { before: 0, after: 0, line: 245, lineRule: 'auto' },
        children: this.runs(seg.trim(), {
          size: SIZE.table,
          bold: o.header || o.group,
          color: o.header ? COL.white : o.group ? COL.navy : undefined,
        }, o.header ? 'table header' : 'table cell'),
      }));
      return new TableCell({
        width: dxa(w),
        columnSpan: o.span,
        shading: o.fill ? fill(o.fill) : undefined,
        margins: { top: 60, bottom: 60, left: 80, right: 80 },
        verticalAlign: o.header ? VerticalAlign.CENTER : VerticalAlign.TOP,
        children,
      });
    };
    const rows = [new TableRow({
      tableHeader: true,
      cantSplit: true,
      children: b.header.map((h, j) => cell(h, colW[j], { header: true, fill: COL.navy })),
    })];
    let stripe = 0;
    for (const r of b.rows) {
      const isGroup = ncol > 1 && r[0].trim() && r.slice(1).every(c => !c.trim());
      if (isGroup) {
        // a group label row ("**Negative history** | |") spans the table
        rows.push(new TableRow({ cantSplit: true, children: [cell(r[0], width, { group: true, span: ncol, fill: COL.group, keepNext: true })] }));
        stripe = 0;
        continue;
      }
      rows.push(new TableRow({
        cantSplit: true,
        children: r.map((c, j) => cell(c, colW[j], { fill: stripe % 2 ? COL.zebra : undefined })),
      }));
      stripe++;
    }
    const border = line(COL.tableBorder);
    return new Table({
      width: dxa(width),
      columnWidths: colW,
      layout: TableLayoutType.FIXED,
      borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
      rows,
    });
  }

  // ── boxes: single-cell tables that never split ──
  box(b, width, keepWithNext = false) {
    const st = BOXES[b.kind] || PLAIN_BOX;
    const pad = { top: 90, bottom: 90, left: st.edge ? 200 : 160, right: 170 };
    const items = [];
    if (st.label) {
      items.push({
        p: {
          keepNext: true,
          spacing: { before: 0, after: 50 },
          children: [new TextRun({ text: st.label, bold: true, smallCaps: true, color: COL.navy, size: 17, characterSpacing: 20 })],
        },
      });
    }
    items.push(...this.blocks(b.blocks, width - pad.left - pad.right));
    const lastP = [...items].reverse().find(it => it.p);
    if (lastP && items[items.length - 1] === lastP) lastP.p.spacing = { ...(lastP.p.spacing || {}), after: 0 };
    // Word keeps a table row with the next paragraph when every paragraph in the row is "keep with next"
    if (keepWithNext) for (const it of items) if (it.p) it.p.keepNext = true;
    const children = finalize(items);
    if (!children.length || children[children.length - 1] instanceof Table) children.push(spacer(20));
    const edge = st.edge ? line(st.edge, 24) : line(COL.hairline, 4);
    const side = st.edge ? NONE : line(COL.hairline, 4);
    return new Table({
      width: dxa(width),
      columnWidths: [width],
      layout: TableLayoutType.FIXED,
      borders: NO_TABLE_BORDERS,
      rows: [new TableRow({
        cantSplit: true,
        children: [new TableCell({
          width: dxa(width),
          shading: fill(st.fill),
          borders: { left: edge, top: side, right: side, bottom: side },
          margins: pad,
          children,
        })],
      })],
    });
  }

  // ── gonioscopy crosses ──
  gonio(b, width) {
    const out = [];
    let png = null;
    try {
      png = this.drawGonio(b);
    } catch (e) {
      warn(this.card, b.n, `could not draw the gonioscopy diagram (${String(e.message).split('\n')[0]}) — shown as a table instead`);
    }
    if (png) {
      const w = (GONIO_WIDTH_CM / 2.54) * 96;     // docx-js sizes images in 96-dpi pixels
      const h = (w * GONIO_PX.height) / GONIO_PX.width;
      const desc = ['RE', 'LE'].map(e => `${e === 'RE' ? 'Right' : 'Left'} eye: ${['S', 'T', 'I', 'N'].map(q => `${q} ${plain((b[e] || {})[q] || '—')}`).join(', ')}`).join('. ');
      out.push({
        p: {
          alignment: AlignmentType.CENTER,
          keepNext: b.caption ? true : undefined,
          spacing: { before: 80, after: 30 },
          children: [new ImageRun({
            type: 'png',
            data: png,
            transformation: { width: Math.round(w), height: Math.round(h) },
            // a unique drawing id (docx-js would give every image id 1)
            altText: { id: String(1000 + this.gonioCount), name: `Gonioscopy ${this.gonioCount}`, title: 'Gonioscopy cross diagram', description: desc },
          })],
        },
      });
    } else {
      const rows = ['S', 'T', 'I', 'N'].map(q => [
        { S: 'Superior', T: 'Temporal', I: 'Inferior', N: 'Nasal' }[q],
        (b.RE || {})[q] || '', (b.LE || {})[q] || '',
      ]);
      out.push({ t: this.table({ header: ['Quadrant', 'Right eye', 'Left eye'], rows, widths: [30, 35, 35] }, width) });
    }
    if (b.caption) {
      out.push({
        p: {
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 100 },
          children: this.runs(b.caption, { italics: true, size: SIZE.caption, color: COL.dark }, 'gonio caption'),
        },
      });
    }
    return out;
  }

  drawGonio(b) {
    if (!this.tmp) this.tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cards-gonio-'));
    const k = ++this.gonioCount;
    const specFile = path.join(this.tmp, `gonio${k}.json`);
    const pngFile = path.join(this.tmp, `gonio${k}.png`);
    const clean = q => Object.fromEntries(Object.entries(q || {}).map(([key, v]) => [key, plain(smartQuotes(v))]));
    fs.writeFileSync(specFile, JSON.stringify({ RE: clean(b.RE), LE: clean(b.LE) }));
    execFileSync(process.env.PYTHON || 'python3', [path.join(__dirname, 'gonio_png.py'), specFile, pngFile], {
      stdio: ['ignore', 'ignore', 'pipe'],
      timeout: 60000,
    });
    return fs.readFileSync(pngFile);
  }

  // docx-js 9 gives every Bookmark the numeric id 1 (each one starts its own counter), which is
  // invalid OOXML; replace its start and end markers with a document-wide unique id.
  bookmark(name, children) {
    const bm = new Bookmark({ id: name, children });
    this.bookmarkSeq = (this.bookmarkSeq || 0) + 1;
    bm.start = new BookmarkStart(name, this.bookmarkSeq);
    bm.end = new BookmarkEnd(this.bookmarkSeq);
    return bm;
  }

  // ── card pieces ──
  headerBar(card) {
    const titleText = card.title ? `${card.id}  ${card.title}` : card.id;
    const children = [new Paragraph({
      heading: HeadingLevel.HEADING_1,
      keepNext: true,
      spacing: { before: 0, after: card.badge ? 40 : 0 },
      children: [this.bookmark(this.bookmarkFor(card), this.runs(titleText, { bold: true, color: COL.white, size: SIZE.h1 }, 'header bar'))],
    })];
    if (card.badge) {
      children.push(new Paragraph({
        spacing: { before: 0, after: 0 },
        children: this.runs(card.badge, { color: COL.white, size: SIZE.badge, starColor: COL.gold }, 'badge'),
      }));
    }
    return new Table({
      width: dxa(TEXT_W),
      columnWidths: [TEXT_W],
      layout: TableLayoutType.FIXED,
      borders: NO_TABLE_BORDERS,
      rows: [new TableRow({
        cantSplit: true,
        children: [new TableCell({
          width: dxa(TEXT_W),
          shading: fill(COL.navy),
          margins: { top: 100, bottom: 100, left: 200, right: 200 },
          verticalAlign: VerticalAlign.CENTER,
          children,
        })],
      })],
    });
  }

  readMore(card) {
    return {
      p: {
        keepLines: true,
        spacing: { before: 160, after: 0 },
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: COL.hairline, space: 4 } },
        children: [
          new TextRun({ text: 'Read more: ', italics: true, size: SIZE.readmore, color: COL.grey }),
          ...this.runs(card.readmore, { italics: true, size: SIZE.readmore, color: COL.grey }, 'read more'),
        ],
      },
    };
  }

  cardChildren(card) {
    this.card = card;
    // the card's last block stays with the read-more line, so that line never sits alone on a page
    const items = this.blocks(card.blocks, TEXT_W, { lastKeepsWithNext: !!card.readmore });
    if (card.readmore) items.push(this.readMore(card));
    else warn(card, card.line, 'no "@readmore" line');
    return [this.headerBar(card), ...finalize(items)];
  }

  cover(cards) {
    this.card = null;
    const items = [];
    items.push({ p: { heading: HeadingLevel.TITLE, spacing: { before: 900, after: 120 }, children: this.runs(`${this.opts.subject} — Case Cards`, {}, 'cover title') } });
    items.push({
      p: {
        spacing: { before: 0, after: 200 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: COL.navy, space: 8 } },
        children: [new TextRun({ text: COVER_SUBTITLE, size: 22, color: COL.teal })],
      },
    });
    items.push({ p: { spacing: { before: 120, after: 60 }, children: this.runs(COVER_NOTE, {}, 'cover') } });
    items.push({ p: { spacing: { before: 0, after: 120 }, children: this.runs(COVER_KEY, { size: 18, color: '595959', starColor: COL.goldOnWhite }, 'cover key') } });
    items.push({ p: { heading: HeadingLevel.HEADING_2, children: [new TextRun('Contents')] } });

    const colW = toTwips([7, 47, 12, 34], TEXT_W);
    const border = line(COL.tableBorder);
    const cell = (children, w, o = {}) => new TableCell({
      width: dxa(w),
      shading: o.fill ? fill(o.fill) : undefined,
      margins: { top: 70, bottom: 70, left: 80, right: 80 },
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({ spacing: { before: 0, after: 0, line: 245, lineRule: 'auto' }, children })],
    });
    const head = ['No.', 'Card', 'Type', 'Last year'].map((h, j) =>
      cell([new TextRun({ text: h, bold: true, color: COL.white, size: SIZE.table })], colW[j], { fill: COL.navy }));
    const rows = [new TableRow({ tableHeader: true, cantSplit: true, children: head })];
    cards.forEach((c, k) => {
      // the ★ part of the badge; "at JEH last year" is already said by the column header and the key
      const star = c.badge.split(/\s+·\s+/).find(s => s.includes('★'));
      const starText = star ? star.replace('★', '').replace(/\s+at JEH last year\b/i, '').trim() : '';
      const lastYear = star
        ? this.runs(`★ ${starText}`, { size: SIZE.table, starColor: COL.goldOnWhite }, 'contents')
        : [new TextRun({ text: '—', size: SIZE.table, color: COL.grey })];
      const sh = k % 2 ? COL.zebra : undefined;
      rows.push(new TableRow({
        cantSplit: true,
        children: [
          cell([new TextRun({ text: c.id, bold: true, size: SIZE.table, color: COL.navy })], colW[0], { fill: sh }),
          cell([new InternalHyperlink({ anchor: c.bookmark, children: this.runs(c.title || c.id, { size: SIZE.table }, 'contents') })], colW[1], { fill: sh }),
          cell([new TextRun({ text: (/long case and short case/i.test(c.badge || '') ? 'Long + short case' : (KIND_LABEL[c.kind] || c.kind || '—')), size: SIZE.table })], colW[2], { fill: sh }),
          cell(lastYear, colW[3], { fill: sh }),
        ],
      }));
    });
    items.push({
      t: new Table({
        width: dxa(TEXT_W),
        columnWidths: colW,
        layout: TableLayoutType.FIXED,
        borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
        rows,
      }),
    });
    return finalize(items);
  }

  footer() {
    return new Footer({
      // The CardFooter style carries the 8 pt grey: LibreOffice formats page-number field results
      // with the paragraph style, not with the run that holds the field.
      children: [new Paragraph({
        style: 'CardFooter',
        tabStops: [{ type: TabStopType.RIGHT, position: TEXT_W }],
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: COL.hairline, space: 4 } },
        children: [
          ...this.runs(this.opts.fileTitle, { size: SIZE.footer, color: COL.grey }, 'footer'),
          new TextRun({ children: [new Tab(), 'Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES], size: SIZE.footer, color: COL.grey }),
        ],
      })],
    });
  }

  document(cards) {
    const properties = type => ({
      ...(type ? { type } : {}),
      page: {
        size: { width: PAGE.width, height: PAGE.height },
        margin: { top: MARGIN.top, bottom: MARGIN.bottom, left: MARGIN.left, right: MARGIN.right, header: MARGIN.header, footer: MARGIN.footer },
      },
    });
    const cardSections = cards.map(card => ({ card, children: this.cardChildren(card) }));   // sets bookmarks first
    const sections = [];
    if (this.opts.contents) sections.push({ properties: properties(), footers: { default: this.footer() }, children: this.cover(cards) });
    for (const s of cardSections) {
      sections.push({ properties: properties(sections.length ? SectionType.NEXT_PAGE : undefined), footers: { default: this.footer() }, children: s.children });
    }
    if (!sections.length) {
      sections.push({ properties: properties(), footers: { default: this.footer() }, children: [new Paragraph('No cards.')] });
    }
    const bulletLevel = (level, text, left) => ({
      level, format: LevelFormat.BULLET, text, alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left, hanging: 255 } }, run: { font: FONT, color: COL.navy } },
    });
    return new Document({
      creator: 'build_cards.js',
      title: this.opts.fileTitle,
      subject: `${this.opts.subject} — case cards`,
      description: COVER_SUBTITLE,
      styles: {
        default: {
          document: {
            run: { font: FONT, size: SIZE.body, language: { value: 'en-GB' } },
            paragraph: { spacing: { before: 0, after: 50, line: 250, lineRule: 'auto' } },   // ~1.04 lines
          },
          title: { run: { font: FONT, size: 48, bold: true, color: COL.navy }, paragraph: { spacing: { after: 120 } } },
          heading1: {
            run: { font: FONT, size: SIZE.h1, bold: true, color: COL.navy },
            paragraph: { spacing: { before: 0, after: 40 }, keepNext: true, outlineLevel: 0 },
          },
          heading2: {
            run: { font: FONT, size: SIZE.h2, bold: true, color: COL.navy },
            paragraph: {
              spacing: { before: 140, after: 50 },
              keepNext: true,
              keepLines: true,
              outlineLevel: 1,
              border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: COL.rule, space: 1 } },
            },
          },
          heading3: {
            run: { font: FONT, size: SIZE.h3, bold: true, color: COL.teal },
            paragraph: { spacing: { before: 100, after: 40 }, keepNext: true, keepLines: true, outlineLevel: 2 },
          },
        },
        paragraphStyles: [{
          id: 'CardFooter',
          name: 'Card footer',
          basedOn: 'Normal',
          run: { font: FONT, size: SIZE.footer, color: COL.grey },
          paragraph: { spacing: { before: 0, after: 0, line: 240, lineRule: 'auto' } },
        }],
      },
      numbering: {
        config: [
          { reference: 'bullets', levels: [bulletLevel(0, '•', 397), bulletLevel(1, '–', 680)] },
          {
            reference: 'numbers',
            levels: [{
              level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 397, hanging: 340 } }, run: { font: FONT, bold: true, color: COL.navy } },
            }],
          },
        ],
      },
      sections,
    });
  }

  cleanup() {
    if (this.tmp) fs.rmSync(this.tmp, { recursive: true, force: true });
  }
}

// ───────────────────────────── report ─────────────────────────────
function report(cards, opts) {
  const lines = [];
  const fmt = n => n.toLocaleString('en-GB');
  lines.push(`build_cards.js — ${opts.fileTitle} → ${opts.out}`);
  lines.push(`${cards.length} card(s) from ${opts.files.length} file(s)${opts.contents ? ' + cover page with contents' : ''}`);
  for (const c of cards) {
    const s = c.stats;
    const budget = WORD_BUDGET[c.kind];
    const flag = budget ? (s.words < budget[0] ? '  << below budget' : s.words > budget[1] ? '  >> over budget' : '') : '';
    lines.push('');
    lines.push(`${c.id}  ${c.title}   [${c.kind || '?'} · ${path.basename(c.file)}]`);
    lines.push(`    words ${fmt(s.words)}${budget ? ` (budget ${fmt(budget[0])}–${fmt(budget[1])})${flag}` : ''} · viva pairs ${s.pairs}`);
    lines.push(`    tables ${s.tables.length}${s.tables.length ? ` (columns: ${s.tables.join(', ')})` : ''} · boxes ${s.boxes.length ? s.boxes.join(', ') : 'none'} · gonio diagrams ${s.gonio}`);
    lines.push(`    warnings: ${c.warnings.length ? '' : 'none'}`);
    for (const w of c.warnings) lines.push(`      - ${w}`);
    if (c.notes.length) {
      lines.push('    notes:');
      for (const n of c.notes) lines.push(`      - ${n}`);
    }
  }
  if (globalWarnings.length) {
    lines.push('');
    lines.push('general warnings:');
    for (const w of globalWarnings) lines.push(`  - ${w}`);
  }
  const total = cards.reduce((a, c) => a + c.warnings.length, 0) + globalWarnings.length;
  lines.push('');
  lines.push(`done: ${cards.length} card(s), ${total} warning(s)`);
  return lines.join('\n');
}

// ───────────────────────────── main ─────────────────────────────
async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const cards = opts.files.flatMap(readCards);
  if (!cards.length) warn(null, 0, 'no cards found in the input files');
  const builder = new Builder(opts);
  let doc;
  try {
    doc = builder.document(cards);
  } finally {
    builder.cleanup();
  }
  for (const c of cards) c.stats = cardStats(c);
  const buffer = await Packer.toBuffer(doc);
  fs.mkdirSync(path.dirname(path.resolve(opts.out)), { recursive: true });
  fs.writeFileSync(opts.out, buffer);
  const text = report(cards, opts);
  process.stderr.write(`\n${text}\n`);
  if (opts.report) fs.writeFileSync(opts.report, `${text}\n`);
}

main().catch(e => {
  process.stderr.write(`build_cards.js: could not write the document: ${e.stack || e}\n`);
  process.exit(1);
});
