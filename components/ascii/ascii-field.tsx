"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { SITE_ASCII } from "@/lib/site-identity";

const CELL_W = 11;
const CELL_H = 19;
const FPS = 8;
const THRESHOLD = 0.34;

/** One slow scalar field per service. Input is in cells, t in seconds; output is about -1.4..1.4. */
const FIELDS = {
  // Ruled strata, the rhythm of statute lines drifting past each other.
  strata: (x: number, y: number, t: number) =>
    Math.sin(y * 0.2 + Math.sin(x * 0.03 + t * 0.09) * 2.3 + t * 0.1) + 0.35 * Math.sin(x * 0.055 - t * 0.06),
  // Slow concentric rings, like growth lines or ripples moving through time.
  rings: (x: number, y: number, t: number) => {
    const a = Math.hypot(x - 28 - Math.sin(t * 0.05) * 16, (y - 8) * 1.7);
    const b = Math.hypot(x - 150 + Math.cos(t * 0.04) * 20, (y - 44) * 1.7);
    return Math.sin(a * 0.17 - t * 0.22) * 0.8 + Math.sin(b * 0.13 - t * 0.17) * 0.6;
  },
  // Rising columns of light.
  columns: (x: number, y: number, t: number) =>
    Math.sin(x * 0.17 + Math.sin(y * 0.028 + t * 0.07) * 1.5) * (0.72 + 0.62 * Math.sin(y * 0.075 + t * 0.26)),
} as const;

export type AsciiFieldPattern = keyof typeof FIELDS;

const HOME_MASK =
  "radial-gradient(ellipse 58% 42% at 50% 24%, transparent 42%, rgba(0,0,0,.55) 74%, #000 100%)";
const READING_MASK =
  "linear-gradient(90deg, #000 0, rgba(0,0,0,.5) 9%, transparent 21%, transparent 79%, rgba(0,0,0,.5) 91%, #000 100%)";

/**
 * Ambient background for every page. It stays low contrast, runs at a low frame rate, and is
 * masked away from where people read: the top of the home page, and the text column elsewhere.
 */
export function AsciiField() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const isHome = /^\/([a-z]{2}\/?)?$/.test(pathname ?? "/");

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    const { fieldGlyphs, fieldPattern } = SITE_ASCII;
    const field = FIELDS[fieldPattern];
    const glyphs = [...fieldGlyphs];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = performance.now();
    let dpr = 1;
    let cols = 0;
    let rows = 0;
    let atlas: HTMLCanvasElement | null = null;
    let atlasW = 0;
    let atlasH = 0;
    let isDark = true;
    let raf = 0;
    let last = 0;

    const buildAtlas = () => {
      const style = getComputedStyle(document.documentElement);
      isDark = document.documentElement.classList.contains("dark");
      atlasW = Math.ceil(CELL_W * dpr);
      atlasH = Math.ceil(CELL_H * dpr);
      atlas = document.createElement("canvas");
      atlas.width = atlasW * glyphs.length;
      atlas.height = atlasH;
      const a = atlas.getContext("2d");
      if (!a) return;
      a.font = `${12 * dpr}px ${getComputedStyle(canvas).fontFamily || "monospace"}`;
      a.textAlign = "center";
      a.textBaseline = "middle";
      a.fillStyle = `hsl(${style.getPropertyValue("--foreground").trim()})`;
      glyphs.forEach((glyph, i) => a.fillText(glyph, atlasW * i + atlasW / 2, atlasH / 2));
    };

    const layout = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      cols = Math.ceil(w / CELL_W);
      rows = Math.ceil(h / CELL_H);
      buildAtlas();
    };

    const draw = (now: number) => {
      if (!atlas) return;
      const t = reduced.matches ? 40 : (now - start) / 1000 + 40;
      // Ink on a light ground reads stronger than light on dark at the same alpha.
      const gain = isDark ? 1 : 0.74;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const v = field(x, y, t);
          if (v < THRESHOLD) continue;
          const hash = Math.abs(Math.sin(x * 127.1 + y * 311.7) * 43758.5453) % 1;
          if (hash < 0.3) continue; // break up the contours so they read as dust, not shapes
          const strength = Math.min(1, (v - THRESHOLD) / 0.9);
          const glyph = Math.min(glyphs.length - 1, Math.floor(strength * glyphs.length));
          ctx.globalAlpha = (0.05 + 0.15 * strength) * gain;
          ctx.drawImage(
            atlas,
            atlasW * glyph,
            0,
            atlasW,
            atlasH,
            Math.round(x * CELL_W * dpr),
            Math.round(y * CELL_H * dpr),
            atlasW,
            atlasH,
          );
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 1000 / FPS) return;
      last = now;
      draw(now);
    };
    const play = () => {
      cancelAnimationFrame(raf);
      if (reduced.matches || document.hidden) {
        draw(performance.now());
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    const onResize = () => {
      layout();
      play();
    };

    const theme = new MutationObserver(() => {
      buildAtlas();
      play();
    });
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", play);
    reduced.addEventListener("change", play);
    document.fonts?.ready.then(() => {
      buildAtlas();
      play();
    });

    layout();
    play();
    return () => {
      cancelAnimationFrame(raf);
      theme.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", play);
      reduced.removeEventListener("change", play);
    };
  }, []);

  const mask = isHome ? HOME_MASK : READING_MASK;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 h-screen w-screen font-mono ${
        isHome ? "" : "hidden lg:block"
      }`}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    />
  );
}
