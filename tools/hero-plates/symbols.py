"""Eight religious symbols carved in the same cracked stone as the statues, set in a ring.

A ring on purpose: equal size, equal weight, no first and no last. Writes plates/symbols_tone.png.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy import ndimage as ndi
from skimage.draw import line_aa

from noise_tile import blue_noise

SIZE = 1000
SYM = "C:/Windows/Fonts/seguisym.ttf"
NIR = "C:/Windows/Fonts/Nirmala.ttc"
SYMBOLS = [
    ("\u271d", SYM),  # Christianity
    ("\u2721", SYM),  # Judaism
    ("\u262a", SYM),  # Islam
    ("\u0950", NIR),  # Hinduism
    ("\u2638", SYM),  # Buddhism
    ("\u262c", SYM),  # Sikhism
    ("\u262f", SYM),  # Taoism
    ("\u26e9", SYM),  # Shinto
]
TARGET = 236
RADIUS = 346
THICKEN = 6  # font strokes are too thin to read as carved stone

mask = Image.new("L", (SIZE, SIZE), 0)
for i, (ch, path) in enumerate(SYMBOLS):
    font = ImageFont.truetype(path, 400)
    probe = Image.new("L", (800, 800), 0)
    ImageDraw.Draw(probe).text((400, 400), ch, fill=255, font=font, anchor="mm")
    probe = probe.crop(probe.getbbox())
    k = TARGET / max(probe.size)
    probe = probe.resize((round(probe.width * k), round(probe.height * k)), Image.LANCZOS)
    ang = -np.pi / 2 + (i + 0.5) * 2 * np.pi / len(SYMBOLS)
    cx, cy = SIZE / 2 + RADIUS * np.cos(ang), SIZE / 2 + RADIUS * np.sin(ang)
    mask.paste(255, (round(cx - probe.width / 2), round(cy - probe.height / 2)), probe)

m = np.asarray(mask).astype(np.float32) / 255
inside = ndi.distance_transform_edt(m <= 0.5) <= THICKEN
m = inside.astype(np.float32)
dist = ndi.distance_transform_edt(inside)

# Height: a chiselled bevel that plateaus, with stone grain, lit from the upper left.
height = np.minimum(dist, 13) / 13
height = ndi.gaussian_filter(height ** 0.75, 1.4)
rng = np.random.default_rng(9)
grain = ndi.gaussian_filter(rng.random(m.shape), 7) * 3.4 + ndi.gaussian_filter(rng.random(m.shape), 1.6) * 0.8
surface = height * 16 + grain * 5
gy, gx = np.gradient(surface)
n = np.dstack([-gx, -gy, np.ones_like(gx)])
n /= np.linalg.norm(n, axis=2, keepdims=True)
light = np.array([-0.5, -0.62, 0.6])
light /= np.linalg.norm(light)
g = np.clip((n * light).sum(axis=2), 0, 1)
g = np.clip((g - 0.1) / 0.75, 0, 1) ** 0.9

# Same rim and cracks as the statues.
g = np.maximum(g, np.clip(1 - dist / 2.6, 0, 1) * 0.96 * (dist > 0))
crack = np.zeros_like(g)
ys, xs = np.where(dist > 7)
def walk(x, y, ang, steps, depth):
    for _ in range(steps):
        ang += rng.normal(0, 0.55)
        ln = rng.uniform(4, 11)
        nx, ny = x + np.cos(ang) * ln, y + np.sin(ang) * ln
        if not (0 <= int(ny) < SIZE and 0 <= int(nx) < SIZE) or not inside[int(ny), int(nx)]:
            return
        rr, cc, val = line_aa(int(y), int(x), int(ny), int(nx))
        keep = (rr >= 0) & (rr < SIZE) & (cc >= 0) & (cc < SIZE)
        crack[rr[keep], cc[keep]] = np.maximum(crack[rr[keep], cc[keep]], val[keep])
        x, y = nx, ny
        if depth < 2 and rng.random() < 0.2:
            walk(x, y, ang + rng.choice([-1, 1]) * rng.uniform(0.7, 1.4), int(steps * 0.6), depth + 1)
for _ in range(44):
    i = rng.integers(len(xs))
    walk(float(xs[i]), float(ys[i]), rng.uniform(0, 2 * np.pi), int(rng.integers(8, 20)), 0)
crack = ndi.gaussian_filter(crack, 0.55)
g = np.where(inside, np.clip(g + np.roll(crack, (1, 1), axis=(0, 1)) * 0.45, 0, 1) * (1 - np.clip(crack * 1.9, 0, 1)), 0)

tone = np.where(inside, g * 253 + 1.5, 0).astype(np.uint8)
Image.fromarray(tone, "L").save("plates/symbols_tone.png", optimize=True)

dots_h = int(720 / 1.5)
small = np.asarray(Image.fromarray(tone, "L").resize((dots_h, dots_h), Image.LANCZOS)).astype(np.float32) / 255
tile = blue_noise()
t = tile[np.arange(dots_h)[:, None] % 128, np.arange(dots_h)[None, :] % 128]
dots = (small > t) & (small > 0.03)
Image.fromarray((np.kron(dots, np.ones((2, 2), bool)) * 243).astype(np.uint8), "L").save("plates/symbols_stipple.png", optimize=True)
print("symbols ok")
