#!/usr/bin/env python3
"""Report the page range and page count of each card in a PDF built by build_cards.js.

Usage:  python3 page_map.py FILE.pdf [--tsv]

Each card starts on a new page with a navy header bar whose first line is
"<card id>  <title>" in 14 pt white bold, and whose second line is the badge.
A page with 14 pt white text is the first page of a card; the card runs until the
page before the next card (or the end of the file). Pages before the first card
(the cover and contents) are reported separately.

"Used" is the card's length in pages: full pages plus how far down its last page
the text reaches (so 6.2 = six full pages and a fifth of a seventh). The type comes
from the badge ("… · Long case"); cards longer than CARD_SPEC §4 allows are flagged
(v4: long ≤ 10 pages including the extra short-case page and the +10% allowance, short and fundus ≤ 3.3,
task and chart ≤ 2.2, toolkit ≤ 6.6, viva sheet ≤ 8.8).

Needs PyMuPDF (pip install pymupdf); without it, falls back to poppler's pdftotext
(page counts only, no "used" figure).
"""
import re
import subprocess
import sys

MARGIN_PT = 850 / 20          # top and bottom page margins of build_cards.js (850 twips)
LIMIT = {"long": 11, "short": 3.3, "fundus": 3.3, "task": 2.2, "chart": 2.2, "toolkit": 6.6, "viva": 8.8}


def kind_from_badge(badge):
    last = badge.split(" · ")[-1].strip().lower() if badge else ""
    for word in ("long", "short", "task", "chart", "fundus", "toolkit"):
        if last.startswith(word):
            return word
    if last.startswith("viva"):
        return "viva"
    return ""


def scan_pymupdf(path):
    import pymupdf
    doc = pymupdf.open(path)
    starts, fill = [], []
    for pno, page in enumerate(doc, start=1):
        top, bottom = MARGIN_PT, page.rect.height - MARGIN_PT
        body = [b[3] for b in page.get_text("blocks") if b[3] <= bottom + 1]
        fill.append(max(0.0, min(1.0, (max(body) - top) / (bottom - top))) if body else 0.0)
        title, badge = [], []
        for block in page.get_text("dict")["blocks"]:
            for ln in block.get("lines", []):
                spans = [s for s in ln["spans"] if s["text"].strip()]
                if not spans:
                    continue
                white = [s["color"] == 0xFFFFFF for s in spans]
                if all(white) and all(13 <= s["size"] <= 15 for s in spans):
                    title.append("".join(s["text"] for s in ln["spans"]))
                elif title and any(white) and all(8.5 <= s["size"] <= 10.5 for s in spans):
                    badge.append("".join(s["text"] for s in ln["spans"]))   # white text, gold ★
        if title:
            starts.append((pno, " ".join(title), " ".join(badge)))
    return len(doc), starts, fill


def scan_pdftotext(path):
    info = subprocess.run(["pdfinfo", path], capture_output=True, text=True, check=True).stdout
    pages = int(re.search(r"^Pages:\s+(\d+)", info, re.M).group(1))
    starts = []
    for p in range(1, pages + 1):
        txt = subprocess.run(["pdftotext", "-f", str(p), "-l", str(p), "-layout", path, "-"],
                             capture_output=True, text=True, check=True).stdout
        lines = [l.strip() for l in txt.splitlines() if l.strip()]
        if lines and re.match(r"^[A-Z]{0,3}\d{1,3}[a-z]?\s{2,}\S", lines[0]):   # "G1  Title…"
            starts.append((p, lines[0], lines[1] if len(lines) > 1 else ""))
    return pages, starts, None


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if len(args) != 1:
        sys.exit("usage: page_map.py FILE.pdf [--tsv]")
    path = args[0]
    try:
        total, starts, fill = scan_pymupdf(path)
    except ImportError:
        total, starts, fill = scan_pdftotext(path)

    rows = []
    for k, (first, title, badge) in enumerate(starts):
        last = starts[k + 1][0] - 1 if k + 1 < len(starts) else total
        cid, _, name = " ".join(title.split()).partition(" ")
        kind = kind_from_badge(" ".join(badge.split()))
        count = last - first + 1
        used = (count - 1 + fill[last - 1]) if fill else None
        limit = LIMIT.get(kind)
        flag = f"over {limit:g}" if limit is not None and used is not None and used > limit + 0.005 else ""
        rows.append((cid, name.strip(), kind, first, last, count, used, flag))

    if "--tsv" in sys.argv:
        print("card\ttitle\ttype\tfirst\tlast\tpages\tused")
        for cid, name, kind, first, last, count, used, _ in rows:
            print(f"{cid}\t{name}\t{kind}\t{first}\t{last}\t{count}\t{'' if used is None else f'{used:.1f}'}")
        return

    print(f"{path}: {total} pages, {len(rows)} cards")
    if rows and rows[0][3] > 1:
        print(f"  cover and contents: page{'s 1–' + str(rows[0][3] - 1) if rows[0][3] > 2 else ' 1'}")
    if not rows:
        print("  no header bars found (is this a build_cards.js PDF?)")
        return
    w = max(len(r[0]) for r in rows)
    print(f"  {'card':<{w}}  {'pages':<7}  count  used  {'type':<6} {'':<8} title")
    for cid, name, kind, first, last, count, used, flag in rows:
        span = f"{first}–{last}" if last > first else f"{first}"
        u = "  ?" if used is None else f"{used:4.1f}"
        print(f"  {cid:<{w}}  {span:<7}  {count:>5}  {u}  {kind or '?':<6} {flag:<8} {name}")


if __name__ == "__main__":
    main()
