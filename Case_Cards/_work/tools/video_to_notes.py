#!/usr/bin/env python3
"""Turn a lecture video (YouTube link or local file) into slide frames + a timed transcript, ready for study notes.

Usage:
  python3 video_to_notes.py <youtube-url-or-video-file> <out_dir> [--subs file.vtt] [--every 15] [--scene 0.2]

What it does (all automatic):
  1. Download (if a URL): the video at <= 720p and every English caption track (manual first, auto as fallback), plus
     the info JSON (title, duration, chapters). Needs youtube.com and *.googlevideo.com allowed in the network policy.
  2. Frames: one frame at EVERY scene change (ffmpeg scene score > --scene) PLUS one every --every seconds as a safety
     net, so a slide shown briefly between two checks is not missed. Frames come from the video file itself, so no
     caption bar covers the slide. Near-identical consecutive frames (same slide, speaker moving) are dropped with a
     perceptual hash; runs of rapid changes (a live demo or video clip) keep a frame every 2 seconds.
  3. Transcript: parses the caption track (WebVTT), removes the rolling duplicate lines of auto-captions, and keeps
     the timing.
  4. Timeline: out_dir/timeline.md — for each kept frame, its time range, the image path and what was said while it
     was on screen; out_dir/transcript.txt — the clean transcript with [mm:ss] stamps; out_dir/frames/*.jpg.
"""
import argparse
import glob
import html
import json
import os
import re
import subprocess
import sys

from PIL import Image


def run(cmd, **kw):
    print('+', ' '.join(cmd), file=sys.stderr)
    return subprocess.run(cmd, check=True, text=True, **kw)


def download(url, out):
    os.makedirs(out, exist_ok=True)
    base = os.path.join(out, 'video')
    run([sys.executable, '-m', 'yt_dlp', '-f', 'bv*[height<=720][ext=mp4]+ba[ext=m4a]/b[height<=720]/b',
         '--merge-output-format', 'mp4', '--write-info-json', '--write-subs', '--write-auto-subs',
         '--sub-langs', 'en.*,en', '--sub-format', 'vtt', '-o', base + '.%(ext)s', url])
    vids = [p for p in glob.glob(base + '.*') if p.endswith(('.mp4', '.mkv', '.webm'))]
    subs = sorted(glob.glob(base + '*.vtt'), key=lambda p: ('auto' in p or '-orig' in p, p))
    return vids[0], (subs[0] if subs else None)


def ts(sec):
    sec = int(sec)
    return f'{sec // 3600}:{sec % 3600 // 60:02d}:{sec % 60:02d}' if sec >= 3600 else f'{sec // 60:02d}:{sec % 60:02d}'


def extract_frames(video, out, every, scene):
    fdir = os.path.join(out, 'frames_raw')
    os.makedirs(fdir, exist_ok=True)
    for f in glob.glob(os.path.join(fdir, '*.jpg')):
        os.remove(f)
    sel = f"select='gt(scene\\,{scene})+isnan(prev_selected_t)+gte(t-prev_selected_t\\,{every})',showinfo"
    p = subprocess.run(['ffmpeg', '-hide_banner', '-nostdin', '-i', video, '-vf', sel, '-vsync', 'vfr', '-q:v', '3',
                        os.path.join(fdir, '%06d.jpg')], text=True, capture_output=True)
    if p.returncode != 0:
        print(p.stderr[-2000:], file=sys.stderr)
        raise SystemExit('ffmpeg failed')
    times = [float(m) for m in re.findall(r'pts_time:([0-9.]+)', p.stderr)]
    files = sorted(glob.glob(os.path.join(fdir, '*.jpg')))
    return list(zip(files, times))


def dhash(path, size=16):
    im = Image.open(path).convert('L').resize((size + 1, size))
    px = list(im.getdata())
    bits = 0
    for r in range(size):
        for c in range(size):
            bits = (bits << 1) | (px[r * (size + 1) + c] > px[r * (size + 1) + c + 1])
    return bits


def dedupe(frames, out, min_bits=18, demo_gap=2.0):
    """Keep a frame when it differs from the last kept one; in a run of rapid changes keep one per demo_gap s."""
    fdir = os.path.join(out, 'frames')
    os.makedirs(fdir, exist_ok=True)
    for f in glob.glob(os.path.join(fdir, '*.jpg')):
        os.remove(f)
    kept, last_h, last_t = [], None, -1e9
    for path, t in frames:
        h = dhash(path)
        dist = 256 if last_h is None else bin(h ^ last_h).count('1')
        if dist >= min_bits and (t - last_t >= demo_gap or dist >= 60):
            name = os.path.join(fdir, f'{len(kept) + 1:04d}_{ts(t).replace(":", "-")}.jpg')
            Image.open(path).save(name, quality=88)
            kept.append((name, t))
            last_h, last_t = h, t
    return kept


def parse_vtt(path):
    cues, cur = [], None
    tre = re.compile(r'(\d+:)?(\d\d):(\d\d)\.(\d+)\s+-->\s+(\d+:)?(\d\d):(\d\d)\.(\d+)')
    for line in open(path, encoding='utf-8', errors='replace'):
        line = line.rstrip('\n')
        m = tre.search(line)
        if m:
            g = m.groups()
            start = int((g[0] or '0:')[:-1]) * 3600 + int(g[1]) * 60 + int(g[2]) + int(g[3]) / 1000
            cur = {'t': start, 'lines': []}
            cues.append(cur)
        elif cur is not None and line.strip() and not line.startswith(('WEBVTT', 'Kind:', 'Language:', 'NOTE')):
            text = html.unescape(re.sub(r'<[^>]+>', '', line)).strip()
            if text:
                cur['lines'].append(text)
    # auto-captions repeat the previous line at the start of each cue: keep only new lines
    segs, prev = [], set()
    for c in cues:
        new = [l for l in c['lines'] if l not in prev]
        prev = set(c['lines'])
        if new:
            segs.append((c['t'], ' '.join(new)))
    return segs


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('source')
    ap.add_argument('out')
    ap.add_argument('--subs')
    ap.add_argument('--every', type=float, default=15)
    ap.add_argument('--scene', type=float, default=0.2)
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)
    if re.match(r'https?://', a.source):
        video, subs = download(a.source, a.out)
    else:
        video, subs = a.source, None
    subs = a.subs or subs
    dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', video],
                               text=True, capture_output=True).stdout.strip() or 0)
    raw = extract_frames(video, a.out, a.every, a.scene)
    kept = dedupe(raw, a.out)
    segs = parse_vtt(subs) if subs else []
    with open(os.path.join(a.out, 'transcript.txt'), 'w') as f:
        for t, text in segs:
            f.write(f'[{ts(t)}] {text}\n')
    with open(os.path.join(a.out, 'timeline.md'), 'w') as f:
        f.write(f'# Timeline — {os.path.basename(video)} ({ts(dur)}); {len(raw)} candidate frames, {len(kept)} kept\n\n')
        for i, (path, t) in enumerate(kept):
            end = kept[i + 1][1] if i + 1 < len(kept) else dur
            said = ' '.join(text for st, text in segs if t <= st < end)
            f.write(f'## Frame {i + 1} · {ts(t)}–{ts(end)} · {os.path.relpath(path, a.out)}\n{said or "(no speech)"}\n\n')
    info = glob.glob(os.path.join(a.out, '*.info.json'))
    if info:
        j = json.load(open(info[0]))
        with open(os.path.join(a.out, 'chapters.txt'), 'w') as f:
            f.write(f"{j.get('title')} · {j.get('uploader')} · {ts(j.get('duration') or 0)}\n")
            for c in j.get('chapters') or []:
                f.write(f"[{ts(c['start_time'])}] {c['title']}\n")
    print(json.dumps({'video': video, 'subs': subs, 'duration': ts(dur), 'candidate_frames': len(raw),
                      'kept_frames': len(kept), 'caption_segments': len(segs)}))


if __name__ == '__main__':
    main()
