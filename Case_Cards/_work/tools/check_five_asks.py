#!/usr/bin/env python3
"""Structural check of the candidate's five asks (MASTER_PROMPT_PRACTICALS_v4.md §12 check 2) on card sources.

Usage:  python3 check_five_asks.py Case_Cards/_work/card_sources/G1.md [more.md ...]

For each card it reports, by @kind:
  long   — negative-history table has "A 'yes' would point to" and "How to tell them apart"; every examination step
           (### Step n) has **Do:**, **Record:** and at least 2 Q:; the differential table's last column is "How to tell
           apart"; the investigations table has a "Significance" column; the manage section has Aim, ladder, drug table
           with "Mechanism" and "Contraindication", a laser/surgery table with "Advantages" and "Disadvantages";
           Opening and Closing say-it boxes.
  short  — focused-examination steps with Do / Record; differentials with "How to tell apart"; proceed table with
           "Significance"; a manage section.
  task / chart / toolkit / viva — the template headings are present.
It checks structure only; content is the examiner's and the fact-checker's job.
"""
import re
import sys

LONG_HEADINGS = ['## At a glance', '## History', '## Examination', '## Summary and complete diagnosis',
                 '## Differential diagnosis', '## How I will proceed', '## How I will manage', '## What you must know',
                 '## Viva questions', '## Examiner traps', '## Say-it script', '## Quick recall']
SHORT_HEADINGS = ['## The instruction you may get', '## Spot', '## Focused examination', '## Say-it description',
                  '## History to ask', '## Differentials', '## How I will proceed', '## How I will manage',
                  '## Must know', '## Viva questions', '## Quick recall']
TASK_HEADINGS = ['## Indications', '## Instrument check', '## Steps', '## How to record the result',
                 '## Normal values and interpretation', '## Common errors', '## Viva questions']
CHART_HEADINGS = ['## What it is', '## Reading order', '## Findings to name', '## Grading or classification',
                  '## What each finding leads to', '## Viva questions']
TOOLKIT_HEADINGS = ['## How to say a management plan', '## Drugs', '## Combinations', '## Lasers', '## Surgery',
                    '## Choosing between them', '## Viva questions']
VIVA_HEADINGS = ['## Why this card', '## Quick recall']


def section(text, start, end_prefix='\n## '):
    i = text.find(start)
    if i < 0:
        return ''
    j = text.find(end_prefix, i + len(start))
    return text[i:j if j > 0 else len(text)]


def tables(sec):
    out, cur = [], []
    for line in sec.split('\n'):
        if line.strip().startswith('|'):
            cur.append(line)
        elif cur:
            out.append(cur)
            cur = []
    if cur:
        out.append(cur)
    return [t[0] for t in out]  # header rows


def check(path):
    text = open(path, encoding='utf-8').read()
    kind = (re.search(r'^@kind (\w+)', text, re.M) or [None, '?'])[1]
    probs = []
    want = {'long': LONG_HEADINGS, 'short': SHORT_HEADINGS, 'task': TASK_HEADINGS, 'chart': CHART_HEADINGS,
            'toolkit': TOOLKIT_HEADINGS, 'viva': VIVA_HEADINGS}.get(kind, [])
    pos = -1
    for h in want:
        k = text.find(h)
        if k < 0:
            probs.append(f'missing heading "{h}"')
        elif k < pos:
            probs.append(f'heading out of order: "{h}"')
        else:
            pos = k
    if kind == 'long':
        neg = section(text, '### Negative history', '\n###')
        hdr = ' '.join(tables(neg))
        if 'point to' not in hdr or 'tell them apart' not in hdr:
            probs.append('negative-history table lacks "A yes would point to" / "How to tell them apart"')
        exam = section(text, '## Examination')
        steps = re.split(r'\n### (?=Step )', exam)[1:]
        if not steps:
            probs.append('no "### Step n" examination steps')
        for st in steps:
            name = st.split('\n', 1)[0][:40]
            body = st.split('\n### ', 1)[0]
            if '**Do:**' not in body or '**Record:**' not in body:
                probs.append(f'step "{name}" lacks Do / Record')
            if body.count('\nQ:') < 2:
                probs.append(f'step "{name}" has {body.count(chr(10) + "Q:")} viva Q (want 2–4)')
        dd = ' '.join(tables(section(text, '## Differential diagnosis')))
        if 'tell apart' not in dd.lower():
            probs.append('differential table lacks "How to tell apart"')
        if 'Exclude first' not in section(text, '## Differential diagnosis'):
            probs.append('no "Exclude first" line')
        inv = ' '.join(tables(section(text, '## How I will proceed')))
        if 'Significance' not in inv:
            probs.append('investigations table lacks "Significance"')
        man = section(text, '## How I will manage')
        for need in ['### Aim', '### The ladder', '### Drugs in this case', '### Laser and surgery in this case',
                     '### Follow-up and counselling']:
            if need not in man:
                probs.append(f'manage section lacks "{need}"')
        mt = ' '.join(tables(man))
        for need in ['Mechanism', 'Contraindication', 'Advantages', 'Disadvantages']:
            if need not in mt:
                probs.append(f'manage tables lack a "{need}" column')
        say = section(text, '## Say-it script')
        if '### Opening' not in say or '### Closing' not in say:
            probs.append('say-it script lacks Opening / Closing')
    if kind == 'short':
        fe = section(text, '## Focused examination')
        if '**Do:**' not in fe or '**Record:**' not in fe:
            probs.append('focused examination lacks Do / Record')
        if 'tell apart' not in ' '.join(tables(section(text, '## Differentials'))).lower():
            probs.append('differentials table lacks "How to tell apart"')
        if 'Significance' not in ' '.join(tables(section(text, '## How I will proceed'))):
            probs.append('proceed table lacks "Significance"')
    return kind, probs


if __name__ == '__main__':
    for p in sys.argv[1:]:
        kind, probs = check(p)
        print(f'{p.split("/")[-1]} [{kind}]: ' + ('PASS' if not probs else 'CHECK'))
        for x in probs:
            print('   - ' + x)
