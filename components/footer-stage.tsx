"use client";

import * as React from "react";

const STAGE = "#0a0a0a";
const DOT_GAP = 13;
const WAVELENGTH = 104;
const FPS = 30;

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};

function fitCanvas(canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { w: rect.width, h: rect.height, ctx };
}

function useAnimationFrames(
  ref: React.RefObject<HTMLElement | null>,
  draw: (seconds: number) => void,
  resize: () => void,
) {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = performance.now();
    let raf = 0;
    let last = 0;
    let visible = false;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (now - last < 1000 / FPS) return;
      last = now;
      draw((now - start) / 1000);
    };
    const play = () => {
      cancelAnimationFrame(raf);
      if (reduced.matches || !visible || document.hidden) {
        draw(0);
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    const onResize = new ResizeObserver(() => {
      resize();
      play();
    });
    onResize.observe(el);
    const onView = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      play();
    });
    onView.observe(el);
    document.addEventListener("visibilitychange", play);
    return () => {
      cancelAnimationFrame(raf);
      onResize.disconnect();
      onView.disconnect();
      document.removeEventListener("visibilitychange", play);
    };
  }, [ref, draw, resize]);
}

/**
 * The dark stage at the top of the footer: a dot grid lit by two wave sources that slide together
 * as you scroll, so the interference pattern changes with position, then a closing line.
 */
function InterferenceStage({ line1, line2, cta, href }: { line1: string; line2: string; cta: string; href: string }) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const size = React.useRef<ReturnType<typeof fitCanvas> | null>(null);

  const resize = React.useCallback(() => {
    if (canvasRef.current) size.current = fitCanvas(canvasRef.current);
  }, []);

  const draw = React.useCallback((t: number) => {
    const wrap = wrapRef.current;
    const s = size.current;
    if (!wrap || !s) return;
    const { w, h, ctx } = s;

    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const travel = rect.height - vh;
    // Pinned on large screens: progress is the pinned scroll. Otherwise: how far it has entered.
    const p = travel > 1 ? clamp01(-rect.top / travel) : clamp01((vh - rect.top) / (rect.height + vh * 0.2));
    wrap.style.setProperty("--stage-p", p.toFixed(4));

    const spread = 0.4 * (1 - smooth(p * 0.92));
    const ax = w * (0.5 - spread);
    const bx = w * (0.5 + spread);
    const cy = h / 2;
    const k = (Math.PI * 2) / WAVELENGTH;
    const drift = t * 0.9;
    const dim = 1 - 0.5 * smooth((p - 0.5) * 2); // the pattern steps back when the line arrives

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#fff";
    for (let y = DOT_GAP / 2; y < h; y += DOT_GAP) {
      for (let x = DOT_GAP / 2; x < w; x += DOT_GAP) {
        const da = Math.hypot(x - ax, y - cy);
        const db = Math.hypot(x - bx, y - cy);
        const wave = (Math.cos(k * da - drift) + Math.cos(k * db - drift)) / 2;
        const b = Math.pow(Math.max(0, wave), 3);
        const r = 0.65 + 1.05 * b;
        ctx.globalAlpha = (0.13 + 0.87 * b) * dim;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
    }

    // Markers at each source; a third appears where they will meet.
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1;
    const marker = (x: number, y: number, r: number, a: number) => {
      ctx.globalAlpha = a;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
    };
    const fadeOut = 1 - smooth((p - 0.55) * 3);
    marker(ax, cy, 5, 0.75 * fadeOut);
    marker(bx, cy, 5, 0.75 * fadeOut);
    const center = smooth(p * 6) * fadeOut;
    marker(w / 2, cy, 5, center);
    marker(w / 2, cy, 19 + Math.sin(t * 1.6) * 1.5, center * 0.5);
    ctx.globalAlpha = center;
    ctx.beginPath();
    ctx.arc(w / 2, cy, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }, []);

  useAnimationFrames(wrapRef, draw, resize);

  React.useEffect(() => {
    const onScroll = () => draw(performance.now() / 1000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [draw]);

  return (
    <div
      ref={wrapRef}
      className="relative h-[72svh] min-h-[480px] lg:h-svh lg:motion-safe:h-[150svh]"
      style={{ backgroundColor: STAGE }}
    >
      <div className="relative h-full overflow-hidden lg:sticky lg:top-0 lg:h-svh">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <div
            className="flex w-full max-w-[1100px] flex-col items-center gap-8 text-center motion-reduce:!translate-y-0 motion-reduce:!opacity-100"
            style={{
              opacity: "calc((var(--stage-p, 0) - 0.62) * 3.2)",
              transform: "translateY(calc((1 - var(--stage-p, 0)) * 28px))",
            }}
          >
            <h2 className="m-0 max-w-full text-balance font-serif text-[clamp(44px,7.4vw,112px)] font-normal leading-[1.12] tracking-[-0.02em] text-white">
              <span className="block">{line1}</span>
              <em className="-my-[0.1em] inline-block max-w-full bg-[linear-gradient(115deg,#9A9A9A_0%,#EDEDED_22%,#BDBDBD_40%,#FFFFFF_56%,#A6A6A6_76%,#E2E2E2_100%)] bg-clip-text px-[0.1em] pb-[0.2em] pt-[0.14em] leading-[1.3] text-transparent">
                {line2}
              </em>
            </h2>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-[linear-gradient(115deg,#9A9A9A_0%,#EDEDED_22%,#BDBDBD_40%,#FFFFFF_56%,#A6A6A6_76%,#E2E2E2_100%)] px-7 font-semibold text-[#0A0A0A] no-underline transition-opacity hover:opacity-85"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A torn halftone edge where the dark stage breaks up into the footer's own surface. */
function HalftoneEdge() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const size = React.useRef<ReturnType<typeof fitCanvas> | null>(null);

  const resize = React.useCallback(() => {
    if (canvasRef.current) size.current = fitCanvas(canvasRef.current);
  }, []);

  const draw = React.useCallback((t: number) => {
    const s = size.current;
    if (!s) return;
    const { w, h, ctx } = s;
    const root = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains("dark");
    const surface = `hsl(${root.getPropertyValue("--background").trim()})`;
    const ink = `hsl(${root.getPropertyValue("--foreground").trim()})`;
    const cell = 8;

    ctx.clearRect(0, 0, w, h);
    if (isDark) {
      // Two near-blacks would hide the edge, so here it is drawn in light that fades out.
      const fill = ctx.createLinearGradient(0, 0, 0, h);
      fill.addColorStop(0, STAGE);
      fill.addColorStop(1, surface);
      ctx.fillStyle = fill;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.fillStyle = isDark ? ink : surface;

    for (let row = 0, y = cell / 2; y < h + cell; y += cell, row++) {
      const stagger = row % 2 ? cell / 2 : 0;
      for (let x = stagger; x < w + cell; x += cell) {
        const horizon =
          0.56 +
          Math.sin(x * 0.0065 + t * 0.14) * 0.13 +
          Math.sin(x * 0.021 - t * 0.21) * 0.08 +
          Math.sin(x * 0.067 + t * 0.09) * 0.045;
        const scatter = Math.abs(Math.sin(x * 12.9898 + row * 78.233) * 43758.5453) % 1;
        const depth = (y / h - horizon) / 0.34 + (scatter - 0.5) * 0.85;
        const cover = smooth(depth + 0.62);
        if (cover <= 0.02) continue;
        if (isDark) {
          const fadeOut = 1 - smooth((y / h - 0.45) / 0.55);
          if (fadeOut <= 0) continue;
          ctx.globalAlpha = fadeOut * 0.85;
          ctx.beginPath();
          ctx.arc(x, y, cell * 0.42 * cover, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, cell * 0.82 * cover, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!isDark) ctx.fillRect(0, h - 2, w, 2);
  }, []);

  useAnimationFrames(canvasRef, draw, resize);

  return (
    <div aria-hidden="true" className="relative -mt-px h-36 lg:h-64" style={{ backgroundColor: STAGE }}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

export function FooterStage(props: { line1: string; line2: string; cta: string; href: string }) {
  return (
    <>
      <InterferenceStage {...props} />
      <HalftoneEdge />
    </>
  );
}
