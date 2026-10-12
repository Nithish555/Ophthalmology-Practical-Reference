#!/usr/bin/env python3
"""
prep_figures.py — cut the clinical images for the cards out of video frames.

    python3 prep_figures.py figures.csv frames/ out_dir/

figures.csv columns (header row required):
    name     output file name without extension, e.g. c1_re_disc
    frame    source frame file name in frames/, e.g. f_00060.jpg
    crop     x0 y0 x1 y1 in pixels of the 1280×720 frame (the part to keep)
    blur     optional; boxes "x0 y0 x1 y1; x0 y0 x1 y1" (frame pixels) to blur hard — patient names,
             hospital numbers, dates, faces outside the eye region
    note     free text, ignored

Every output is a JPEG (quality 85), at most 1280 px wide. The Zoom speaker tile and any other
webcam picture must be left outside the crop box or covered by a blur box.
"""
import csv
import os
import sys

from PIL import Image, ImageFilter


def boxes(text):
    out = []
    for part in (text or "").split(";"):
        nums = [int(round(float(v))) for v in part.replace(",", " ").split()]
        if len(nums) == 4:
            out.append(tuple(nums))
        elif nums:
            raise ValueError(f"bad box {part!r}")
    return out


def main():
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    manifest, frames, out_dir = sys.argv[1:]
    os.makedirs(out_dir, exist_ok=True)
    n = 0
    with open(manifest, newline="") as f:
        for row in csv.DictReader(f):
            if not row.get("name"):
                continue
            im = Image.open(os.path.join(frames, row["frame"].strip())).convert("RGB")
            for b in boxes(row.get("blur", "")):
                region = im.crop(b).filter(ImageFilter.GaussianBlur(14)).filter(ImageFilter.GaussianBlur(14))
                im.paste(region, b[:2])
            crop = boxes(row["crop"])
            if crop:
                im = im.crop(crop[0])
            if im.width > 1280:
                im = im.resize((1280, round(im.height * 1280 / im.width)), Image.LANCZOS)
            im.save(os.path.join(out_dir, row["name"].strip() + ".jpg"), quality=85, optimize=True)
            n += 1
    print(f"{n} figures written to {out_dir}")


if __name__ == "__main__":
    main()
