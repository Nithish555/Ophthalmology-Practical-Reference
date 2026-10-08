#!/usr/bin/env python3
"""Draw the gonioscopy cross diagram used by build_cards.js.

Usage:  python3 gonio_png.py SPEC.json OUT.png

SPEC.json: {"RE": {"S": "III SS", "T": "...", "I": "...", "N": "..."},
            "LE": {"S": "...", "T": "...", "I": "...", "N": "..."}}

Two crosses side by side, titled "Right eye" and "Left eye". Each cross is an X;
the four triangles between its arms hold the quadrant text: superior at the top,
inferior at the bottom. As seen facing the patient, the RIGHT eye has temporal on
the left and nasal on the right; the LEFT eye has nasal on the left and temporal on
the right. A small grey S / I / N / T marker sits at the outer end of each quadrant.
All quadrant texts share one font size: the largest at which every text fits its
triangle (a text may wrap onto two lines).
"""
import json
import sys

from PIL import Image, ImageDraw, ImageFont

W, H = 1400, 600            # pixels; embedded ~11 cm wide (about 320 dpi in print)
PANEL = W // 2
CY = 335                    # centre of each cross
ARM = 225                   # half-length of each diagonal arm (its x and y extent)
NAVY = (31, 56, 100)
INK = (25, 25, 25)
GREY = (140, 140, 140)
MARKER_AT = 0.9 * ARM       # distance of the S/I/N/T marker from the centre
OUTER = MARKER_AT - 32      # quadrant text stays inside this distance (clear of the marker)
PAD = 12                    # clearance between text and the arms
SIZES = (46, 43, 40, 37, 34, 31, 28, 25, 22)

BOLD_FONTS = [
    "/usr/share/fonts/truetype/crosextra/Carlito-Bold.ttf",
    "C:/Windows/Fonts/calibrib.ttf",
    "/Library/Fonts/Microsoft/Calibri Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]
REGULAR_FONTS = [
    "/usr/share/fonts/truetype/crosextra/Carlito-Regular.ttf",
    "C:/Windows/Fonts/calibri.ttf",
    "/Library/Fonts/Microsoft/Calibri.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]
_cache = {}


def font(size, bold=True):
    key = (size, bold)
    if key not in _cache:
        for path in BOLD_FONTS if bold else REGULAR_FONTS:
            try:
                _cache[key] = ImageFont.truetype(path, size)
                break
            except OSError:
                continue
        else:
            _cache[key] = ImageFont.load_default(size=size)
    return _cache[key]


def layouts(text):
    """The text on one line, then split once at each space (most balanced split first)."""
    yield [text]
    words = text.split(" ")
    order = sorted(range(1, len(words)),
                   key=lambda i: abs(len(" ".join(words[:i])) - len(" ".join(words[i:]))))
    for i in order:
        yield [" ".join(words[:i]), " ".join(words[i:])]


def block_size(draw, lines, fnt):
    gap = int(fnt.size * 0.15)
    w = max(draw.textlength(ln, font=fnt) for ln in lines)
    h = fnt.size * len(lines) + gap * (len(lines) - 1)
    return w, h, gap


def fit(draw, text, vertical, size):
    """Lines and centre distance for text in a triangle, or None if it cannot fit at this size.

    vertical=True: superior/inferior triangle; at distance d from the centre its free
    half-width is d. vertical=False: temporal/nasal triangle; its free half-height is d.
    """
    fnt = font(size)
    for lines in layouts(text):
        w, h, gap = block_size(draw, lines, fnt)
        along, across = (h, w) if vertical else (w, h)   # extent along / across the triangle axis
        c_min = across / 2 + PAD + along / 2               # inner edge must be wide enough
        c_max = OUTER - along / 2                          # outer edge clear of the marker
        if c_min <= c_max:
            c = min(max(0.55 * ARM, c_min), c_max)
            return lines, fnt, gap, c
    return None


def draw_block(draw, x, y, lines, fnt, gap):
    total = fnt.size * len(lines) + gap * (len(lines) - 1)
    top = y - total / 2
    for ln in lines:
        draw.text((x, top + fnt.size / 2), ln, font=fnt, fill=INK, anchor="mm")
        top += fnt.size + gap


def main():
    if len(sys.argv) != 3:
        sys.exit("usage: gonio_png.py SPEC.json OUT.png")
    with open(sys.argv[1], encoding="utf-8") as fh:
        spec = json.load(fh)

    img = Image.new("RGB", (W, H), "white")
    draw = ImageDraw.Draw(img)

    # Facing the patient: right eye temporal on the left; left eye nasal on the left.
    eyes = [(0, "Right eye", spec.get("RE") or {}, "T", "N"),
            (PANEL, "Left eye", spec.get("LE") or {}, "N", "T")]

    # every (eye, quadrant) text with where it goes: (dx, dy) unit direction from the centre
    items = []
    for x0, _title, quads, left, right in eyes:
        cx = x0 + PANEL / 2
        for q, (ux, uy) in (("S", (0, -1)), ("I", (0, 1)), (left, (-1, 0)), (right, (1, 0))):
            text = " ".join(str(quads.get(q) or "").split())
            if text:
                items.append((cx, ux, uy, text))

    # one shared size: the largest at which every text fits
    chosen = None
    for size in SIZES:
        fits = [fit(draw, text, uy != 0, size) for (_cx, _ux, uy, text) in items]
        if all(fits):
            chosen = fits
            break
    if chosen is None:  # last resort: smallest size, place at the default distance
        chosen = []
        for (_cx, _ux, uy, text) in items:
            fnt = font(SIZES[-1])
            lines = list(layouts(text))[-1]
            chosen.append((lines, fnt, int(fnt.size * 0.15), 0.6 * ARM))

    for x0, title, _quads, left, right in eyes:
        cx = x0 + PANEL / 2
        draw.text((cx, 52), title, font=font(46), fill=NAVY, anchor="mm")
        for (ax, ay), (bx, by) in (((-1, -1), (1, 1)), ((-1, 1), (1, -1))):
            draw.line([(cx + ax * ARM, CY + ay * ARM), (cx + bx * ARM, CY + by * ARM)],
                      fill=NAVY, width=6)
        mk = font(28, bold=False)
        for label, (ux, uy) in (("S", (0, -1)), ("I", (0, 1)), (left, (-1, 0)), (right, (1, 0))):
            draw.text((cx + ux * MARKER_AT, CY + uy * MARKER_AT), label, font=mk, fill=GREY, anchor="mm")

    for (cx, ux, uy, _text), (lines, fnt, gap, c) in zip(items, chosen):
        draw_block(draw, cx + ux * c, CY + uy * c, lines, fnt, gap)

    draw.line([(PANEL, 110), (PANEL, H - 40)], fill=(215, 222, 232), width=2)
    img.save(sys.argv[2], dpi=(320, 320))


if __name__ == "__main__":
    main()
