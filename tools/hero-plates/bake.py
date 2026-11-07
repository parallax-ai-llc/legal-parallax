"""Cut a statue out of a photo and turn it into a tone plate: marble tones on black, rim light, cracks.

python bake.py <in.jpg> <out_prefix> [--crop l,t,r,b] [--height 1000] [--cracks n] [--seed s] [--bronze]
Writes <out_prefix>_tone.png (L: 0 = nothing) and <out_prefix>_stipple.png (1-bit preview, 2px dot).
"""
import argparse
from pathlib import Path

import numpy as np
from PIL import Image
from rembg import new_session, remove
from scipy import ndimage as ndi
from skimage import exposure
from skimage.draw import line_aa

ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("out")
ap.add_argument("--crop", default="0,0,1,1")
ap.add_argument("--height", type=int, default=1000)
ap.add_argument("--cracks", type=int, default=9)
ap.add_argument("--seed", type=int, default=7)
ap.add_argument("--bronze", action="store_true")
ap.add_argument("--gamma", type=float, default=None)
ap.add_argument("--clip", type=float, default=None)
ap.add_argument("--dot", type=float, default=2)
ap.add_argument("--model", default="isnet-general-use")
a = ap.parse_args()

cache = Path(a.out + "_cut.png")
if cache.exists():
    cut = Image.open(cache).convert("RGBA")
else:
    cut = remove(Image.open(a.src).convert("RGB"), session=new_session(a.model), alpha_matting=False)
    cut.save(cache)

w, h = cut.size
l, t, r, b = [float(x) for x in a.crop.split(",")]
cut = cut.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
scale = a.height / cut.size[1]
cut = cut.resize((round(cut.size[0] * scale), a.height), Image.LANCZOS)
rgba = np.asarray(cut).astype(np.float32) / 255
alpha = rgba[..., 3]
alpha = np.clip((alpha - 0.35) / 0.3, 0, 1)
inside = alpha > 0.5
gray = rgba[..., 0] * 0.3 + rgba[..., 1] * 0.59 + rgba[..., 2] * 0.11

# Tone: normalise inside the statue only, pull out local form, then push to chalky marble.
lo, hi = np.percentile(gray[inside], [1.5, 99.5])
g = np.clip((gray - lo) / (hi - lo), 0, 1)
g = exposure.equalize_adapthist(g, kernel_size=max(g.shape) // 6, clip_limit=a.clip if a.clip is not None else (0.018 if not a.bronze else 0.03))
blur = ndi.gaussian_filter(g, 2.2)
g = np.clip(g + (g - blur) * 1.8, 0, 1)
g = g ** (a.gamma if a.gamma is not None else (0.62 if a.bronze else 0.82))
g = np.clip((g - 0.1) / 0.84, 0, 1)

# Rim light: a hard white contour where the form meets the black.
dist = ndi.distance_transform_edt(inside)
rim = np.clip(1 - dist / 3.2, 0, 1)
g = np.maximum(g, rim * 0.96 * (dist > 0))

# Cracks: wandering branching lines, black with a lit lip on one side.
rng = np.random.default_rng(a.seed)
crack = np.zeros_like(g)
ys, xs = np.where(dist > 14)
def walk(x, y, ang, steps, depth):
    for _ in range(steps):
        ang += rng.normal(0, 0.55)
        ln = rng.uniform(5, 15)
        nx, ny = x + np.cos(ang) * ln, y + np.sin(ang) * ln
        if not (0 <= int(ny) < g.shape[0] and 0 <= int(nx) < g.shape[1]) or not inside[int(ny), int(nx)]:
            return
        rr, cc, val = line_aa(int(y), int(x), int(ny), int(nx))
        keep = (rr >= 0) & (rr < g.shape[0]) & (cc >= 0) & (cc < g.shape[1])
        crack[rr[keep], cc[keep]] = np.maximum(crack[rr[keep], cc[keep]], val[keep])
        x, y = nx, ny
        if depth < 2 and rng.random() < 0.2:
            walk(x, y, ang + rng.choice([-1, 1]) * rng.uniform(0.7, 1.4), int(steps * 0.55), depth + 1)
for _ in range(a.cracks):
    i = rng.integers(len(xs))
    walk(float(xs[i]), float(ys[i]), rng.uniform(0, 2 * np.pi), int(rng.integers(12, 30)), 0)
crack = ndi.gaussian_filter(crack, 0.55)
lip = np.roll(crack, (1, 1), axis=(0, 1))
g = np.where(inside, np.clip(g + lip * 0.45, 0, 1) * (1 - np.clip(crack * 1.9, 0, 1)), 0)

# 0 is reserved for "no statue here", so light mode can tell a shadow from the empty page.
tone = np.where(alpha > 0.5, g * 253 + 1.5, 0).astype(np.uint8)
Image.fromarray(tone, "L").save(a.out + "_tone.png", optimize=True)

# 1-bit preview as the page will draw it, at its real displayed size.
from noise_tile import blue_noise
disp_h = 720
dots_h = int(disp_h / a.dot)
pv = Image.fromarray(tone, "L").resize((round(tone.shape[1] * dots_h / tone.shape[0]), dots_h), Image.LANCZOS)
small = np.asarray(pv).astype(np.float32) / 255
tile = blue_noise()
n = tile[np.arange(small.shape[0])[:, None] % tile.shape[0], np.arange(small.shape[1])[None, :] % tile.shape[1]]
dots = (small > n) & (small > 0.03)
k = 2  # shown at 2x so a viewer does not smear the dots
big = np.kron(dots, np.ones((k, k), bool))
Image.fromarray((big * 243).astype(np.uint8), "L").save(a.out + "_stipple.png", optimize=True)
print(a.out, tone.shape, f"{inside.mean():.2f} covered")
