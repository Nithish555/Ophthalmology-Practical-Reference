#!/usr/bin/env python3
"""
video_slides.py — group video frames (one every N seconds) into "slide segments" and draw contact sheets.

    ffmpeg -i session.mp4 -vf fps=1/10 -q:v 3 frames/f_%05d.jpg      # frame n is at (n-1)*10 s
    python3 video_slides.py frames/ out/ [--interval 10] [--extra extra/]

Frames that look the same (ignoring the corner where Zoom shows the speaker's webcam tile) are merged
into one segment. Writes:
    out/segments.csv   seg, view (people|share), start_s, end_s, start, end, frames, rep_frame, mean_luma, dark_fraction
    out/sheets/sheet_NN.jpg   numbered thumbnails of each segment's middle frame, for a quick visual pass

--extra DIR adds frames named x_<seconds>.jpg (e.g. taken at scene changes) so that slides shown for
less than one interval are not lost.
Only Pillow and numpy are needed.
"""
import argparse
import csv
import os
import re
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFont

SMALL = (160, 90)          # comparison size
PIX_DIFF = 28              # grey-level change that counts as "changed"
CHANGED_FRACTION = 0.025   # more than this share of changed pixels = a new segment


def hms(s):
    s = int(round(s))
    return f"{s // 3600}:{s // 60 % 60:02d}:{s % 60:02d}"


def load_small(path):
    """(grey, rgb) arrays at the comparison size."""
    rgb = np.asarray(Image.open(path).convert("RGB").resize(SMALL, Image.BILINEAR), dtype=np.int16)
    return rgb.mean(axis=2).astype(np.int16), rgb


def mask():
    m = np.ones(SMALL[::-1], dtype=bool)
    h, w = m.shape
    m[: int(h * 0.30), int(w * 0.72):] = False   # Zoom's floating speaker tile (top right)
    return m


def collect(frames_dir, interval, extra_dir):
    items = []
    for name in sorted(os.listdir(frames_dir)):
        m = re.match(r"f_(\d+)\.jpe?g$", name)
        if m:
            items.append(((int(m.group(1)) - 1) * interval, os.path.join(frames_dir, name)))
    if extra_dir and os.path.isdir(extra_dir):
        for name in os.listdir(extra_dir):
            m = re.match(r"x_(\d+(?:\.\d+)?)\.jpe?g$", name)
            if m:
                items.append((float(m.group(1)), os.path.join(extra_dir, name)))
    items.sort()
    return items


def is_people(a, rgb):
    """Zoom gallery view (a grid of webcam tiles: bright, richly textured, black frame round the grid)
    or speaker view (one full-frame webcam: no black, some skin tone). Shared slides are either mostly
    black or show large plain areas."""
    luma = a.mean()
    dark = (a < 20).mean()
    blocks = a.reshape(9, 10, 16, 10).swapaxes(1, 2).reshape(-1, 100)
    texture = (blocks.std(1) > 12).mean()
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    skin = ((r > 95) & (g > 40) & (b > 20) & (r > g) & (r > b) & ((r - g) > 15)).mean()
    gallery = (luma > 60 and 0.05 < dark < 0.45 and texture > 0.69) or (luma > 100 and texture > 0.9)
    speaker = luma > 90 and dark < 0.08 and skin > 0.05
    return gallery or speaker


def segment(items):
    keep = mask()
    segs = []
    cur = None
    prev = None
    prev_gallery = False
    for t, path in items:
        a, rgb = load_small(path)
        gallery = is_people(a, rgb)
        if prev is not None:
            changed = (np.abs(a - prev) > PIX_DIFF) & keep
            frac = changed.sum() / keep.sum()
        else:
            frac = 1.0
        # moving faces change every frame: a run of webcam (gallery or speaker) frames is one segment
        same = frac <= CHANGED_FRACTION or (gallery and prev_gallery)
        prev_gallery = gallery
        if cur is None or not same:
            cur = {"start": t, "end": t, "frames": [(t, path)], "luma": [], "dark": [], "gallery": gallery}
            segs.append(cur)
        else:
            cur["end"] = t
            cur["frames"].append((t, path))
        cur["luma"].append(float(a.mean()))
        cur["dark"].append(float((a < 20).mean()))
        prev = a
    return segs


def contact_sheets(segs, out_dir, cols=5, rows=6, thumb=(320, 180)):
    os.makedirs(out_dir, exist_ok=True)
    try:
        font = ImageFont.truetype("DejaVuSans-Bold.ttf", 18)
    except OSError:
        font = ImageFont.load_default()
    per = cols * rows
    sheets = []
    for k in range(0, len(segs), per):
        chunk = segs[k: k + per]
        sheet = Image.new("RGB", (cols * thumb[0], rows * (thumb[1] + 26)), "white")
        d = ImageDraw.Draw(sheet)
        for j, s in enumerate(chunk):
            x, y = (j % cols) * thumb[0], (j // cols) * (thumb[1] + 26)
            im = Image.open(s["rep"]).convert("RGB").resize(thumb, Image.BILINEAR)
            sheet.paste(im, (x, y + 26))
            tag = "  [people]" if s["gallery"] else ""
            d.text((x + 4, y + 3), f"#{s['seg']}  {hms(s['start'])}–{hms(s['end'])}{tag}", fill="black", font=font)
        path = os.path.join(out_dir, f"sheet_{k // per + 1:02d}.jpg")
        sheet.save(path, quality=80)
        sheets.append(path)
    return sheets


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("frames")
    ap.add_argument("out")
    ap.add_argument("--interval", type=float, default=10)
    ap.add_argument("--extra", default="")
    o = ap.parse_args()

    items = collect(o.frames, o.interval, o.extra)
    if not items:
        sys.exit("no frames found")
    segs = segment(items)
    os.makedirs(o.out, exist_ok=True)
    for i, s in enumerate(segs, 1):
        s["seg"] = i
        s["rep"] = s["frames"][len(s["frames"]) // 2][1]
    with open(os.path.join(o.out, "segments.csv"), "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["seg", "view", "start_s", "end_s", "start", "end", "frames", "rep_frame", "mean_luma", "dark_fraction"])
        for s in segs:
            w.writerow([s["seg"], "people" if s["gallery"] else "share", s["start"], s["end"], hms(s["start"]), hms(s["end"]), len(s["frames"]),
                        os.path.basename(s["rep"]), round(float(np.mean(s["luma"])), 1), round(float(np.mean(s["dark"])), 3)])
    sheets = contact_sheets(segs, os.path.join(o.out, "sheets"))
    print(f"{len(items)} frames → {len(segs)} segments → {len(sheets)} contact sheets in {o.out}")


if __name__ == "__main__":
    main()
