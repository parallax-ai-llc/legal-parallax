"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SymbolHeroConfig {
  /** Tone plate, grayscale. 0 means "nothing here"; anything else is the form's tone. */
  src: string;
  label: string;
  /** Plate width / height. */
  aspect: number;
  /** Where the pulse leaves from, as fractions of the plate. */
  pulseOrigin: [number, number];
  /** Letters and shards flying off the form. */
  glyphs: string;
  /**
   * Part of the form that breaks apart into those letters. Omit to leave the form whole: the
   * letters then drift evenly outward from pulseOrigin.
   */
  dissolve?: { x: number; y: number; radius: number; angle: number };
}

const NOISE_SRC = "/hero/noise.png";
const FPS = 24;
const PULSE_SECONDS = 4.6;
const FADE_IN_SECONDS = 1.8;
const DISSOLVE_START = 1.4;
const DISSOLVE_SECONDS = 4;
const PARTICLES_DISSOLVE = 620;
const PARTICLES_DRIFT = 130;
const LETTER_SHARE = 0.38;

const smooth = (x: number) => {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
};

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function toGray(img: HTMLImageElement, w: number, h: number) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;
  const out = new Uint8Array(w * h);
  for (let i = 0; i < out.length; i++) out[i] = data[i * 4];
  return out;
}

/** 1-bit stamps for the flying letters. */
function buildStamps(glyphs: string, family: string) {
  const size = 13;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  ctx.font = `600 ${size - 1}px ${family}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  return [...glyphs].map((glyph) => {
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "#fff";
    ctx.fillText(glyph, size / 2, size / 2);
    const data = ctx.getImageData(0, 0, size, size).data;
    const points: number[] = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) if (data[(y * size + x) * 4 + 3] > 110) points.push(x - size / 2, y - size / 2);
    }
    return points;
  });
}

/**
 * Draws a tone plate as 1-bit stipple: every dot is on or off by comparing the plate's tone with
 * a blue-noise threshold. Moving light is only a change to that comparison, so the pulse and the
 * opening fade are the dots themselves appearing, not an overlay.
 */
export function SymbolHero({ config, className }: { config: SymbolHeroConfig; className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let cancelled = false;
    let raf = 0;
    let cleanup = () => {};

    Promise.all([loadImage(config.src), loadImage(NOISE_SRC)]).then(([plate, noiseImg]) => {
      if (cancelled) return;

      const noiseSize = noiseImg.naturalWidth;
      const noise = toGray(noiseImg, noiseSize, noiseSize);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      const start = performance.now();
      const stamps = buildStamps(config.glyphs, getComputedStyle(canvas).fontFamily || "monospace");

      let W = 0;
      let H = 0;
      let boxX = 0;
      let boxY = 0;
      let boxW = 0;
      let boxH = 0;
      let headerDots = 8;
      let tone = new Uint8Array(0);
      let image: ImageData | null = null;
      let pixels = new Uint32Array(0);
      let ink = 0xffffffff;
      let isDark = true;
      let visible = true;
      let last = 0;
      let emitters: number[] = [];
      const PARTICLES = config.dissolve ? PARTICLES_DISSOLVE : PARTICLES_DRIFT;
      const parts = {
        x: new Float32Array(PARTICLES),
        y: new Float32Array(PARTICLES),
        vx: new Float32Array(PARTICLES),
        vy: new Float32Array(PARTICLES),
        age: new Float32Array(PARTICLES),
        life: new Float32Array(PARTICLES),
        glyph: new Int16Array(PARTICLES),
      };

      const readTheme = () => {
        isDark = document.documentElement.classList.contains("dark");
        const probe = document.createElement("canvas").getContext("2d")!;
        probe.fillStyle = `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim()})`;
        probe.fillRect(0, 0, 1, 1);
        const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
        ink = (255 << 24) | (b << 16) | (g << 8) | r;
      };

      const spawn = (i: number, seedAge: boolean) => {
        const d = config.dissolve;
        const e = emitters.length ? Math.floor(Math.random() * (emitters.length / 2)) * 2 : -1;
        const x0 = e >= 0 ? emitters[e] : W / 2;
        const y0 = e >= 0 ? emitters[e + 1] : H / 2;
        let angle: number;
        if (d) {
          angle = d.angle + (Math.random() - 0.5) * 0.85;
        } else {
          const ox = boxX + config.pulseOrigin[0] * boxW;
          const oy = boxY + config.pulseOrigin[1] * boxH;
          angle = Math.atan2(y0 - oy, x0 - ox) + (Math.random() - 0.5) * 0.5;
        }
        // Most pieces linger near the break, a few fly far: a dense mass thinning into stragglers.
        const r = Math.random();
        const speed = d ? 34 + r * r * 150 : 16 + r * 22;
        parts.x[i] = x0;
        parts.y[i] = y0;
        parts.vx[i] = Math.cos(angle) * speed;
        parts.vy[i] = Math.sin(angle) * speed;
        parts.life[i] = d ? 0.9 + Math.random() * 2.4 : 3 + Math.random() * 4;
        parts.age[i] = seedAge ? Math.random() * parts.life[i] : 0;
        // Start already in flight, so a slow first few frames never show every piece at the source.
        parts.x[i] += parts.vx[i] * parts.age[i];
        parts.y[i] += parts.vy[i] * parts.age[i];
        parts.glyph[i] = !d || Math.random() < LETTER_SHARE ? Math.floor(Math.random() * stamps.length) : -1;
      };

      const layout = () => {
        const rect = canvas.parentElement!.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const dpr = window.devicePixelRatio || 1;
        // Whole device pixels per dot, so dots stay crisp: about 1.5 CSS px at any density.
        const device = Math.max(1, Math.round(1.5 * dpr));
        const cell = device / dpr;
        headerDots = Math.ceil(68 / cell);
        W = Math.ceil(rect.width / cell);
        H = Math.ceil(rect.height / cell);
        canvas.width = W;
        canvas.height = H;
        canvas.style.width = `${W * cell}px`;
        canvas.style.height = `${H * cell}px`;
        boxH = H;
        boxW = Math.round(boxH * config.aspect);
        if (boxW > W) {
          boxW = W;
          boxH = Math.round(boxW / config.aspect);
        }
        boxX = Math.round((W - boxW) / 2);
        boxY = Math.round((H - boxH) / 2);
        tone = toGray(plate, boxW, boxH);
        image = ctx.createImageData(W, H);
        pixels = new Uint32Array(image.data.buffer);

        emitters = [];
        const d = config.dissolve;
        for (let y = 0; y < boxH; y += 3) {
          for (let x = 0; x < boxW; x += 3) {
            if (tone[y * boxW + x] < 8) continue;
            if (d) {
              const dx = x / boxW - d.x;
              const dy = (y / boxH - d.y) / config.aspect;
              if (dx * dx + dy * dy > d.radius * d.radius) continue;
            } else if (Math.hypot(x / boxW - config.pulseOrigin[0], y / boxH - config.pulseOrigin[1]) < 0.44) {
              continue; // whole forms: letters leave from the outer edge, never over a symbol
            }
            emitters.push(x + boxX, y + boxY);
          }
        }
        for (let i = 0; i < PARTICLES; i++) spawn(i, true);
      };

      const draw = (now: number, dt: number) => {
        if (!image) return;
        const still = reduced.matches;
        const t = still ? 8 : (now - start) / 1000;
        const fade = still ? 1 : 0.16 + 0.84 * smooth(t / FADE_IN_SECONDS);
        const phase = (t % PULSE_SECONDS) / PULSE_SECONDS;
        const originX = config.pulseOrigin[0] * boxW;
        const originY = config.pulseOrigin[1] * boxH;
        const maxR = Math.hypot(boxW, boxH) * 0.72;
        const ringR = phase * maxR;
        const ringFall = 1 - phase;
        const ringW = maxR * 0.09;

        const d = config.dissolve;
        const progress = d && !still ? smooth((t - DISSOLVE_START) / DISSOLVE_SECONDS) : d ? 1 : 0;
        const dirX = d ? Math.cos(d.angle) : 0;
        const dirY = d ? Math.sin(d.angle) : 0;
        const zoneX = d ? d.x * boxW : 0;
        const zoneY = d ? d.y * boxH : 0;
        const zoneR = d ? d.radius * boxW : 1;

        pixels.fill(0);
        const mask = noiseSize - 1;
        for (let y = 0; y < boxH; y++) {
          const row = y * boxW;
          const out = (y + boxY) * W + boxX;
          const ny = (y & mask) * noiseSize;
          // Cropped statues dissolve into the page instead of ending on a hard line.
          const footFade = d ? Math.min(1, (boxH - y) / (boxH * 0.16)) : 1;
          for (let x = 0; x < boxW; x++) {
            const raw = tone[row + x];
            if (raw < 6) continue;
            let v = raw / 255;

            const dx = x - originX;
            const dy = y - originY;
            const off = (Math.sqrt(dx * dx + dy * dy) - ringR) / ringW;
            let light = fade * footFade;
            if (off > -2.4 && off < 2.4) light += Math.exp(-off * off) * 0.3 * ringFall;

            if (progress > 0) {
              const zx = x - zoneX;
              const zy = y - zoneY;
              const along = (zx * dirX + zy * dirY) / zoneR;
              if (zx * zx + zy * zy < zoneR * zoneR * 1.7) {
                // A wandering front broken up with fine grain, so the edge frays instead of stepping.
                const wander = Math.sin(x * 0.07 + Math.sin(y * 0.05) * 2.4) * 0.16 + Math.sin(y * 0.09 + Math.sin(x * 0.04) * 2) * 0.14;
                const grain = (noise[ny + (x & mask)] / 255 - 0.5) * 0.3;
                if (along * 0.5 + 0.5 + wander + grain > 1.12 - progress * 0.72) continue;
              }
            }

            if (!isDark) v = 0.1 + (1 - v) * 0.9; // ink on paper: shadows print, highlights stay bare
            if (v * light > noise[ny + (x & mask)] / 255) pixels[out + x] = ink;
          }
        }

        // Shards and letters.
        const active = still ? PARTICLES : Math.round(PARTICLES * (d ? progress : smooth((t - DISSOLVE_START) / 3)));
        for (let i = 0; i < active; i++) {
          parts.age[i] += dt;
          if (parts.age[i] > parts.life[i]) spawn(i, false);
          const k = 1 + parts.age[i] * 0.22;
          parts.x[i] += parts.vx[i] * dt * k;
          parts.y[i] += parts.vy[i] * dt * k;
          const x = parts.x[i] | 0;
          const y = parts.y[i] | 0;
          if (x < 8 || y < headerDots || x >= W - 8 || y >= H - 8) continue; // keep the page header legible
          const lifeLeft = 1 - parts.age[i] / parts.life[i];
          const g = parts.glyph[i];
          if (g >= 0) {
            const points = stamps[g];
            for (let p = 0; p < points.length; p += 2) {
              pixels[((y + points[p + 1]) | 0) * W + ((x + points[p]) | 0)] = ink;
            }
          } else {
            const len = 2 + (lifeLeft * 7) | 0;
            const speed = Math.hypot(parts.vx[i], parts.vy[i]) || 1;
            const ux = parts.vx[i] / speed;
            const uy = parts.vy[i] / speed;
            for (let s = 0; s < len; s++) pixels[((y - uy * s) | 0) * W + ((x - ux * s) | 0)] = ink;
          }
        }
        ctx.putImageData(image, 0, 0);
      };

      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        const elapsed = now - last;
        if (elapsed < 1000 / FPS) return;
        last = now;
        draw(now, Math.min(0.3, elapsed / 1000));
      };
      const play = () => {
        cancelAnimationFrame(raf);
        if (reduced.matches || !visible || document.hidden) {
          draw(performance.now(), 0);
          return;
        }
        last = performance.now();
        raf = requestAnimationFrame(loop);
      };

      const resize = new ResizeObserver(() => {
        layout();
        play();
      });
      resize.observe(canvas.parentElement!);
      const intersect = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        play();
      });
      intersect.observe(canvas);
      const theme = new MutationObserver(() => {
        readTheme();
        play();
      });
      theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      document.addEventListener("visibilitychange", play);
      reduced.addEventListener("change", play);

      readTheme();
      layout();
      play();

      cleanup = () => {
        resize.disconnect();
        intersect.disconnect();
        theme.disconnect();
        document.removeEventListener("visibilitychange", play);
        reduced.removeEventListener("change", play);
      };
    }).catch(() => {
      // The art is decorative: if a plate fails to load the page simply goes without it.
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, [config]);

  return (
    <div
      role="img"
      aria-label={config.label}
      className={cn("relative w-full select-none overflow-hidden", className)}
      style={{ height: "clamp(24rem, 50vw, 82svh)" }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 font-mono"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}
