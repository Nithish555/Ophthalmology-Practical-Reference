# Video notes — how set 08 was made

Source: "Ophthalmology PG Long case Live – Survival tips explained", Cochin Ophthalmic Club, recorded live on Zoom
and streamed on YouTube in March 2021 (youtube.com/watch?v=e3X1W9wrC_A, 4 h 05 min). The output is
`Case_Cards/08_Long_Case_Survival_Video_Guide.docx` / `.pdf`, built from `card_sources/V*.md`.

What is in this folder:
- `figures.csv` — every embedded image: which video frame it comes from, the crop box, and any blur boxes (patient
  names on camera labels, the speaker's webcam tile). `prep_figures.py` turns it into `slides/`.
- `slides/` — the cropped images the cards embed. Patient faces are cropped to the eyes and names are blurred.

Not kept in the repo (rebuild them if needed): the video itself, the 1,475 frames, the transcript and the per-slide
working notes.

To rebuild from the video:
1. `ffmpeg -i session.mp4 -vf fps=1/10 -q:v 3 frames/f_%05d.jpg` — one frame every 10 s; because the fps filter rounds to the nearest 10 s, frame n shows the picture at about (n−1)×10 + 5 s.
2. `python3 ../tools/video_slides.py frames/ seg/` — merges identical frames into slide segments, tags webcam
   (gallery or speaker) views, and draws contact sheets. Add `--extra DIR` with `x_<seconds>.jpg` frames taken at
   scene changes to catch slides shown for less than 10 s.
3. `python3 ../tools/prep_figures.py figures.csv allframes/ slides/` — cuts the figures (`allframes/` holds both the `f_` and the `x_` frames).
4. Build (from `Case_Cards/_work/tools/`):

        node build_cards.js --subject "Long-case survival (video)" \
          --file-title "08 · Long-case survival guide — Cochin Ophthalmic Club live" \
          --cover-title "Long-case survival guide — video notes" \
          --cover-subtitle "From the Cochin Ophthalmic Club live mock long-case examination · for the M.S. Ophthalmology practical, 16 October 2026" \
          --cover-note "…" --cover-key "Video case · Guide" --contents-col "Time in video" \
          --out ../../08_Long_Case_Survival_Video_Guide.docx \
          ../card_sources/V0.md ../card_sources/V2.md … ../card_sources/V8.md ../card_sources/V10.md \
          ../card_sources/VV.md ../card_sources/VS.md ../card_sources/VQ.md
        soffice -env:UserInstallation=file:///tmp/lo_cards_profile --headless --convert-to pdf \
          --outdir ../.. ../../08_Long_Case_Survival_Video_Guide.docx

Writing rules used for set 08: the speakers' teaching is written in our own words. "(added)" marks a model answer
or fact that the session did not state in full; it was completed from standard texts. Times are hh:mm:ss in the video.
