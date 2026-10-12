#!/usr/bin/env python3
"""Lint card sources against MASTER_PROMPT_PRACTICALS_v4.md §12 checks 5–7 (structure, keywords, readability).

Usage:  python3 lint_card.py Case_Cards/_work/card_sources/G1.md [more.md ...]

Reports, per card:
  - word count against the v4 budget for its @kind;
  - Q:/A: pairing and the number of viva pairs;
  - the "Keywords the examiner listens for" line: present, count, and any keyword never used again in a :::say box or
    an A: answer;
  - sentences over 20 words outside tables (quoted definitions may stay long — judge each one);
  - banned words (e.g., i.e., etc., viz., utilise, initiate, prior to, basically, simply);
  - abbreviations inside :::say boxes (runs of 2+ capitals, and "mm Hg");
  - table rows whose cell count differs from the header; tables wider than 4 columns; @widths not summing to 100;
  - unclosed or nested ::: boxes; Q:/A: inside a box.
Exit status is 0 always; read the report.
"""
import re
import sys

BUDGET = {'long': (3300, 5500), 'short': (1100, 1700), 'fundus': (1100, 1700), 'task': (800, 1100),
          'chart': (800, 1100), 'toolkit': (2200, 3300), 'viva': (3000, 4500)}
KW_RANGE = {'long': (8, 15)}
BANNED = [r'\be\.g\.', r'\bi\.e\.', r'\betc\b\.?', r'\bviz\.', r'\butilis', r'\butiliz', r'\binitiat', r'\bprior to\b',
          r'\bbasically\b', r'\bsimply\b']
# capitals allowed inside say-it boxes (not abbreviations, or names)
SAY_OK = {'I', 'A', 'II', 'III', 'IV', 'VI', 'X', 'OK'}


def split_cards(text):
    cards, cur = [], None
    for i, line in enumerate(text.split('\n'), 1):
        if line.startswith('@card '):
            cur = {'id': line[6:].strip(), 'lines': []}
            cards.append(cur)
        if cur is not None:
            cur['lines'].append((i, line))
    return cards


def plain(s):
    s = re.sub(r'\*\*|\*', '', s)
    s = s.replace('<br>', ' ')
    return s


def lint(card):
    out = []
    lines = card['lines']
    kind = next((l[6:].strip() for _, l in lines if l.startswith('@kind ')), '?')
    body = [(n, l) for n, l in lines if not l.startswith('@')]
    words = sum(len(plain(l).replace('|', ' ').split()) for _, l in body if not re.match(r'^\|[-| ]+\|$', l.strip()))
    lo, hi = BUDGET.get(kind, (0, 10 ** 9))
    flag = '' if lo <= words <= hi * 1.1 else ('  << UNDER budget' if words < lo else '  << OVER budget (+10% allowed)')
    out.append(f'words {words} (budget {lo}–{hi}, {kind}){flag}')

    # boxes and Q/A
    box, box_start = None, 0
    q_open, q_count, say_text, answers = None, 0, [], []
    for n, l in body:
        s = l.strip()
        if s.startswith(':::'):
            name = s[3:].strip()
            if name == '':
                if box is None:
                    out.append(f'L{n}: closing ::: with no open box')
                box = None
            else:
                if box is not None:
                    out.append(f'L{n}: box :::{name} opened inside :::{box} (L{box_start}) — boxes do not nest')
                box, box_start = name, n
            continue
        if box == 'say':
            say_text.append((n, s))
        if s.startswith('Q:'):
            if box:
                out.append(f'L{n}: Q: inside :::{box} box')
            if q_open:
                out.append(f'L{q_open}: Q: without A:')
            q_open = n
            q_count += 1
        elif s.startswith('A:'):
            if not q_open:
                out.append(f'L{n}: A: without Q:')
            q_open = None
            answers.append(s[2:])
    if box:
        out.append(f'L{box_start}: :::{box} never closed')
    if q_open:
        out.append(f'L{q_open}: Q: without A:')
    out.append(f'viva pairs {q_count}')

    # keywords
    kw_line = next(((n, l) for n, l in body if 'Keywords the examiner listens for' in l), None)
    if not kw_line:
        out.append('NO "Keywords the examiner listens for" line')
    else:
        kws = [k.strip(' .') for k in plain(kw_line[1].split(':', 1)[1]).split('·') if k.strip(' .')]
        lo_k, hi_k = KW_RANGE.get(kind, (6, 10))
        if kind in ('toolkit', 'viva'):
            lo_k, hi_k = 6, 15
        if not lo_k <= len(kws) <= hi_k:
            out.append(f'keywords: {len(kws)} (want {lo_k}–{hi_k})')
        hay = ' '.join(plain(a) for a in answers) + ' ' + ' '.join(plain(t) for _, t in say_text)
        hay_l = hay.lower()
        missing = []
        for k in kws:
            core = re.sub(r'\s*\(.*?\)', '', k).strip().lower()
            if core and core not in hay_l:
                missing.append(k)
        if missing:
            out.append('keywords never used in a say-it box or an A: answer: ' + ' | '.join(missing))

    # abbreviations inside say-it
    for n, s in say_text:
        t = plain(s)
        caps = [w for w in re.findall(r"\b[A-Z][A-Z0-9:]{1,}\b", t) if w not in SAY_OK]
        if re.search(r'\bmm Hg\b', t):
            caps.append('mm Hg')
        if caps:
            out.append(f'L{n}: abbreviation in :::say — ' + ', '.join(sorted(set(caps))))

    # tables
    header_cells, widths_line = None, None
    for n, l in body:
        s = l.strip()
        if s.startswith('@widths'):
            continue
        if s.startswith('|'):
            cells = s.strip('|').split('|')
            if header_cells is None:
                header_cells = len(cells)
                if header_cells > 4:
                    out.append(f'L{n}: table has {header_cells} columns (max 4)')
            elif len(cells) != header_cells:
                out.append(f'L{n}: row has {len(cells)} cells, header has {header_cells}')
        else:
            header_cells = None
    for n, l in lines:
        if l.startswith('@widths'):
            nums = [int(x) for x in l.split()[1:] if x.isdigit()]
            if sum(nums) != 100:
                out.append(f'L{n}: @widths sum to {sum(nums)}')

    # sentences and banned words (outside tables and header lines)
    long_s = []
    for n, l in body:
        s = l.strip()
        if not s or s.startswith('|') or s.startswith(':::') or s.startswith('#'):
            if s.startswith('#'):
                pass
            else:
                continue
        t = plain(re.sub(r'^(Q:|A:|- |\d+\. |#+ )', '', s))
        for pat in BANNED:
            if re.search(pat, t, re.I):
                out.append(f'L{n}: banned word /{pat}/ — "{t[:70]}…"')
        for sent in re.split(r'(?<=[.;?!])\s+(?=[A-Z"“(])', t):
            if len(sent.split()) > 20:
                long_s.append((n, len(sent.split()), sent))
    for n, k, sent in long_s:
        out.append(f'L{n}: {k}-word sentence — "{sent[:90]}…"')
    # banned words inside tables too
    for n, l in body:
        if l.strip().startswith('|'):
            t = plain(l)
            for pat in BANNED:
                if re.search(pat, t, re.I):
                    out.append(f'L{n}: banned word in table /{pat}/')
    return out


def main(paths):
    for p in paths:
        text = open(p, encoding='utf-8').read()
        for c in split_cards(text):
            rep = lint(c)
            print(f'== {c["id"]} ({p})')
            for r in rep:
                print('  ' + r)
            print()


if __name__ == '__main__':
    main(sys.argv[1:])
