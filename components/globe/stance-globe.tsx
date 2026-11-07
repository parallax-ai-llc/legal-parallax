"use client";

import * as React from "react";
import { geoArea, geoCentroid, geoContains, geoEquirectangular, geoGraticule10, geoOrthographic, geoPath } from "d3-geo";
import type { ExtendedFeature, GeoPermissibleObjects } from "d3-geo";
import { feature, mesh } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { numericToAlpha3 } from "@/lib/legal-stances";

const ATLAS_110M = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const ATLAS_50M = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const RAD = Math.PI / 180;
const MIN_ZOOM = 0.85;
const MAX_ZOOM = 12;
const OPEN_VIEW = { lon: 10, lat: 22, zoom: 1.04 };
const DOT_COUNT = 64000;
const DETAIL_ZOOM = 2.2;
const SPIN_DEG_PER_SEC = 3.2;
const FLY_MS = 1100;
const FADE_MS = 420;

interface Country {
  alpha3: string | undefined;
  shape: ExtendedFeature;
}

interface Atlas {
  countries: Country[];
  land: GeoPermissibleObjects;
  borders: GeoPermissibleObjects;
}

interface StanceGlobeProps {
  /** alpha-3 to fill colour. Countries not listed show as plain land. */
  colors: Record<string, string>;
  selected: string | null;
  onSelect: (alpha3: string | null) => void;
  /** Legend hover: everything except this colour steps back. */
  focusColor?: string | null;
  /** Text for the hover tooltip, or null for a country with no entry. */
  describe: (alpha3: string | undefined, fallbackName: string) => { title: string; detail: string };
  labels: { zoomIn: string; zoomOut: string; reset: string };
  className?: string;
}

function parseAtlas(topology: Topology): Atlas {
  const objects = topology.objects.countries as GeometryCollection;
  const collection = feature(topology, objects) as unknown as { features: ExtendedFeature[] };
  return {
    countries: collection.features.map((shape) => ({
      shape,
      alpha3: shape.id === undefined ? undefined : numericToAlpha3(String(shape.id).padStart(3, "0")),
    })),
    land: collection as unknown as GeoPermissibleObjects,
    borders: mesh(topology, objects, (a, b) => a !== b) as unknown as GeoPermissibleObjects,
  };
}

/** Rasterise land once, then keep the fibonacci-sphere points that fall on it. */
function bakeLandDots(land: GeoPermissibleObjects) {
  const w = 2048;
  const h = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return new Float32Array(0);
  const projection = geoEquirectangular().scale(w / (2 * Math.PI)).translate([w / 2, h / 2]);
  ctx.beginPath();
  geoPath(projection, ctx)(land);
  ctx.fill();
  const alpha = ctx.getImageData(0, 0, w, h).data;

  const out: number[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < DOT_COUNT; i++) {
    const y = 1 - (i / (DOT_COUNT - 1)) * 2;
    const lat = Math.asin(y);
    const lon = ((golden * i) % (Math.PI * 2)) - Math.PI;
    const px = Math.min(w - 1, Math.floor(((lon / Math.PI + 1) / 2) * w));
    const py = Math.min(h - 1, Math.floor((0.5 - lat / Math.PI) * h));
    if (alpha[(py * w + px) * 4 + 3] > 128) {
      out.push(Math.cos(lat), Math.sin(lat), Math.cos(lon), Math.sin(lon));
    }
  }
  return new Float32Array(out);
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function StanceGlobe({ colors, selected, onSelect, focusColor = null, describe, labels, className }: StanceGlobeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const [hover, setHover] = React.useState<{ title: string; detail: string } | null>(null);
  const [loadError, setLoadError] = React.useState(false);
  const [atlasAttempt, setAtlasAttempt] = React.useState(0);

  // Everything the render loop reads lives here, so React renders never interrupt the camera.
  const world = React.useRef({
    lon: OPEN_VIEW.lon,
    lat: OPEN_VIEW.lat,
    zoom: 0.9,
    velLon: 0,
    velLat: 0,
    dragging: false,
    spinUntil: 0,
    fly: null as null | { from: [number, number, number]; to: [number, number, number]; start: number; ms: number },
    dots: new Float32Array(0),
    coarse: null as Atlas | null,
    fine: null as Atlas | null,
    fineRequested: false,
    colors,
    colorsChangedAt: 0,
    selected: null as string | null,
    hovered: null as Country | null,
    focusColor: null as string | null,
    palette: { fg: "#fff", isDark: true },
    width: 0,
    height: 0,
    dpr: 1,
    pointer: { x: 0, y: 0 },
  });
  const onSelectRef = React.useRef(onSelect);
  const describeRef = React.useRef(describe);
  React.useEffect(() => {
    onSelectRef.current = onSelect;
    describeRef.current = describe;
  });

  const flyTo = React.useCallback((lon: number, lat: number, zoom: number, ms = FLY_MS) => {
    const w = world.current;
    const dLon = ((lon - w.lon + 540) % 360) - 180; // always the short way round
    const target: [number, number, number] = [w.lon + dLon, clamp(lat, -80, 80), clamp(zoom, MIN_ZOOM, MAX_ZOOM)];
    w.velLon = 0;
    w.velLat = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [w.lon, w.lat, w.zoom] = target;
      w.fly = null;
      return;
    }
    w.fly = { from: [w.lon, w.lat, w.zoom], to: target, start: performance.now(), ms };
  }, []);

  // ---- props into the loop ---------------------------------------------------
  React.useEffect(() => {
    const w = world.current;
    if (w.colors !== colors) {
      w.colors = colors;
      w.colorsChangedAt = performance.now();
    }
    w.focusColor = focusColor;
  }, [colors, focusColor]);

  React.useEffect(() => {
    const w = world.current;
    w.selected = selected;
    if (!selected) return;
    w.spinUntil = Number.POSITIVE_INFINITY;
    const country = w.coarse?.countries.find((c) => c.alpha3 === selected);
    if (country) {
      const [lon, lat] = geoCentroid(country.shape);
      // Small countries get close; large ones stay small enough to keep the planet's curve.
      flyTo(lon, lat, clamp(0.75 / Math.sqrt(geoArea(country.shape)), 1.25, 3.4));
    }
  }, [selected, flyTo]);

  // ---- atlas -----------------------------------------------------------------
  React.useEffect(() => {
    let cancelled = false;
    setLoadError(false);
    fetch(ATLAS_110M)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((topology: Topology) => {
        if (cancelled) return;
        const atlas = parseAtlas(topology);
        world.current.coarse = atlas;
        world.current.dots = bakeLandDots(atlas.land);
        world.current.colorsChangedAt = performance.now();
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [atlasAttempt]);

  // ---- render + input --------------------------------------------------------
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !container || !ctx) return;
    const w = world.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const graticule = geoGraticule10();
    const sphere = { type: "Sphere" } as GeoPermissibleObjects;
    const projection = geoOrthographic().clipAngle(90).precision(0.6);
    const path = geoPath(projection, ctx);

    const readPalette = () => {
      const style = getComputedStyle(document.documentElement);
      w.palette = {
        fg: `hsl(${style.getPropertyValue("--foreground").trim()})`,
        isDark: document.documentElement.classList.contains("dark"),
      };
    };
    readPalette();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w.width = rect.width;
      w.height = rect.height;
      w.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * w.dpr);
      canvas.height = Math.round(rect.height * w.dpr);
    };
    const radiusFor = (zoom: number) => Math.min(w.width, w.height) * 0.45 * zoom;

    const countryAt = (x: number, y: number): Country | null => {
      const atlas = w.coarse;
      if (!atlas) return null;
      if (Math.hypot(x - w.width / 2, y - w.height / 2) > radiusFor(w.zoom)) return null;
      const point = projection.invert?.([x, y]);
      if (!point) return null;
      return atlas.countries.find((c) => geoContains(c.shape, point)) ?? null;
    };

    let raf = 0;
    let last = performance.now();
    let lastPaint = 0;
    let visible = true;

    const draw = (now: number) => {
      const { width, height, dpr, palette, zoom } = w;
      if (!width) return;
      const R = radiusFor(zoom);
      const cx = width / 2;
      const cy = height / 2;
      const moving = w.dragging || !!w.fly || Math.abs(w.velLon) + Math.abs(w.velLat) > 0.01;
      projection.rotate([-w.lon, -w.lat]).scale(R).translate([cx, cy]);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const lit = ctx.createRadialGradient(cx - R * 0.42, cy - R * 0.5, R * 0.1, cx, cy, R * 1.02);
      if (palette.isDark) {
        lit.addColorStop(0, "#1b1b1b");
        lit.addColorStop(0.72, "#0e0e0e");
        lit.addColorStop(1, "#070707");
      } else {
        lit.addColorStop(0, "#fbfaf6");
        lit.addColorStop(0.72, "#ecebe5");
        lit.addColorStop(1, "#d9d7cf");
      }
      ctx.beginPath();
      path(sphere);
      ctx.fillStyle = lit;
      ctx.fill();

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = palette.fg;
      ctx.globalAlpha = palette.isDark ? 0.07 : 0.1;
      ctx.beginPath();
      path(graticule);
      ctx.stroke();

      // Land as a dot matrix. It carries every country with no entry; the far side shows through.
      const dots = w.dots;
      const cosC = Math.cos(w.lat * RAD);
      const sinC = Math.sin(w.lat * RAD);
      const cosL = Math.cos(w.lon * RAD);
      const sinL = Math.sin(w.lon * RAD);
      const size = clamp(1.05 + Math.sqrt(zoom) * 0.42, 1.2, 3.2);
      const showBack = zoom < 1.6;
      const buckets: number[][] = [[], [], []];
      for (let i = 0; i < dots.length; i += 4) {
        const cosPhi = dots[i];
        const sinPhi = dots[i + 1];
        const cosLam = dots[i + 2] * cosL + dots[i + 3] * sinL;
        const sinLam = dots[i + 3] * cosL - dots[i + 2] * sinL;
        const z0 = cosPhi * cosLam;
        const z = z0 * cosC + sinPhi * sinC;
        if (z < 0 && !showBack) continue;
        const x = cx + R * cosPhi * sinLam;
        const y = cy - R * (sinPhi * cosC - z0 * sinC);
        if (x < -4 || y < -4 || x > width + 4 || y > height + 4) continue;
        buckets[z < 0 ? 0 : z < 0.5 ? 1 : 2].push(x, y);
      }
      const dotAlpha = palette.isDark ? [0.07, 0.3, 0.46] : [0.07, 0.3, 0.46];
      ctx.fillStyle = palette.fg;
      buckets.forEach((points, b) => {
        ctx.globalAlpha = dotAlpha[b];
        const s = b === 0 ? size * 0.7 : size;
        for (let i = 0; i < points.length; i += 2) ctx.fillRect(points[i], points[i + 1], s, s);
      });

      // Stance fills, one path per colour so a topic switch stays cheap.
      const atlas = !moving && zoom >= DETAIL_ZOOM && w.fine ? w.fine : w.coarse;
      if (atlas) {
        const fade = reduced.matches ? 1 : clamp((now - w.colorsChangedAt) / FADE_MS, 0, 1);
        const byColor = new Map<string, Country[]>();
        for (const country of atlas.countries) {
          const color = country.alpha3 ? w.colors[country.alpha3] : undefined;
          if (!color) continue;
          const list = byColor.get(color);
          if (list) list.push(country);
          else byColor.set(color, [country]);
        }
        byColor.forEach((list, color) => {
          const stepped = w.focusColor && w.focusColor !== color;
          ctx.globalAlpha = (stepped ? 0.14 : 0.92) * fade;
          ctx.fillStyle = color;
          ctx.beginPath();
          for (const country of list) path(country.shape);
          ctx.fill();
        });

        ctx.globalAlpha = palette.isDark ? 0.4 : 0.5;
        ctx.strokeStyle = palette.isDark ? "#0b0b0b" : "#f7f7f5";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        path(atlas.borders);
        ctx.stroke();

        const ring = (country: Country | null | undefined, width: number) => {
          if (!country) return;
          ctx.globalAlpha = 1;
          ctx.strokeStyle = palette.fg;
          ctx.lineWidth = width;
          ctx.beginPath();
          path(country.shape);
          ctx.stroke();
        };
        if (w.hovered && w.hovered.alpha3 !== w.selected) ring(w.hovered, 1);
        ring(w.selected ? atlas.countries.find((c) => c.alpha3 === w.selected) : null, 1.75);
      }
      ctx.globalAlpha = 1;

      if (tooltipRef.current) {
        const tx = clamp(w.pointer.x, 90, width - 90);
        tooltipRef.current.style.transform = `translate(${tx}px, ${w.pointer.y - 14}px) translate(-50%, -100%)`;
      }
    };

    const step = (now: number) => {
      raf = requestAnimationFrame(step);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      let animating = now - w.colorsChangedAt < FADE_MS + 50;

      if (w.fly) {
        animating = true;
        const k = clamp((now - w.fly.start) / w.fly.ms, 0, 1);
        const e = easeInOut(k);
        w.lon = w.fly.from[0] + (w.fly.to[0] - w.fly.from[0]) * e;
        w.lat = w.fly.from[1] + (w.fly.to[1] - w.fly.from[1]) * e;
        const hop = Math.abs(w.fly.to[0] - w.fly.from[0]) / 180;
        w.zoom = (w.fly.from[2] + (w.fly.to[2] - w.fly.from[2]) * e) * (1 - Math.min(0.5, Math.sin(k * Math.PI) * hop * 0.6));
        if (k >= 1) w.fly = null;
      } else if (!w.dragging) {
        if (Math.abs(w.velLon) + Math.abs(w.velLat) > 0.01) {
          animating = true;
          w.lon += w.velLon * dt * 60;
          w.lat = clamp(w.lat + w.velLat * dt * 60, -80, 80);
          const friction = Math.pow(0.93, dt * 60);
          w.velLon *= friction;
          w.velLat *= friction;
        } else if (!reduced.matches && now > w.spinUntil && !w.selected && !w.hovered) {
          animating = true;
          w.lon += SPIN_DEG_PER_SEC * dt;
        }
      }

      if (w.zoom >= DETAIL_ZOOM && !w.fineRequested) {
        w.fineRequested = true;
        fetch(ATLAS_50M)
          .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
          .then((t: Topology) => {
            w.fine = parseAtlas(t);
          })
          .catch(() => {
            w.fineRequested = false;
          });
      }

      if (animating || w.dragging || now - lastPaint > 1000 / 20) {
        lastPaint = now;
        draw(now);
      }
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (visible && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };

    // ---- input ---------------------------------------------------------------
    const pointers = new Map<number, { x: number; y: number }>();
    let pinchDist = 0;
    let pinchZoom = 1;
    let moved = 0;
    const local = (e: PointerEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const pauseSpin = () => {
      if (w.spinUntil !== Number.POSITIVE_INFINITY) w.spinUntil = performance.now() + 9000;
    };
    const setHovered = (country: Country | null) => {
      if (country === w.hovered) return;
      w.hovered = country;
      const name = (country?.shape.properties as { name?: string } | null)?.name ?? "";
      setHover(country ? describeRef.current(country.alpha3, name) : null);
      canvas.style.cursor = country ? "pointer" : "grab";
    };

    const onDown = (e: PointerEvent) => {
      canvas.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      moved = 0;
      w.fly = null;
      w.dragging = true;
      w.velLon = 0;
      w.velLat = 0;
      pauseSpin();
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
        pinchZoom = w.zoom;
      }
    };
    const onMove = (e: PointerEvent) => {
      const p = pointers.get(e.pointerId);
      if (!p) {
        if (e.pointerType === "mouse") {
          w.pointer = local(e);
          setHovered(countryAt(w.pointer.x, w.pointer.y));
        }
        return;
      }
      if (pointers.size >= 2) {
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const [a, b] = [...pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchDist > 0) w.zoom = clamp((pinchZoom * dist) / pinchDist, MIN_ZOOM, MAX_ZOOM);
        moved += 10;
        return;
      }
      const dx = e.clientX - p.x;
      const dy = e.clientY - p.y;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      moved += Math.abs(dx) + Math.abs(dy);
      if (moved > 4) {
        setHovered(null);
        const k = (1 / radiusFor(w.zoom)) * (180 / Math.PI);
        w.lon -= dx * k;
        w.lat = clamp(w.lat + dy * k, -80, 80);
        w.velLon = -dx * k;
        w.velLat = dy * k;
        canvas.style.cursor = "grabbing";
      }
    };
    const onUp = (e: PointerEvent) => {
      const tap = moved <= 4 && pointers.size === 1;
      pointers.delete(e.pointerId);
      if (pointers.size > 0) return;
      w.dragging = false;
      canvas.style.cursor = w.hovered ? "pointer" : "grab";
      if (tap) {
        const { x, y } = local(e);
        const hit = countryAt(x, y);
        onSelectRef.current(hit?.alpha3 && w.colors[hit.alpha3] ? hit.alpha3 : null);
      }
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      w.fly = null;
      pauseSpin();
      w.zoom = clamp(w.zoom * Math.exp(-e.deltaY * 0.0016), MIN_ZOOM, MAX_ZOOM);
    };
    const onLeave = () => setHovered(null);

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    resizeObserver.observe(canvas);
    const intersect = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    intersect.observe(container);
    const theme = new MutationObserver(readPalette);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    document.addEventListener("visibilitychange", start);

    resize();
    start();
    flyTo(OPEN_VIEW.lon, OPEN_VIEW.lat, OPEN_VIEW.zoom, 1400);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("wheel", onWheel);
      resizeObserver.disconnect();
      intersect.disconnect();
      theme.disconnect();
      document.removeEventListener("visibilitychange", start);
    };
  }, [flyTo]);

  const zoomBy = (factor: number) => {
    const w = world.current;
    flyTo(w.lon, w.lat, clamp(w.zoom * factor, MIN_ZOOM, MAX_ZOOM), 360);
  };
  const reset = () => {
    world.current.spinUntil = 0;
    onSelect(null);
    flyTo(OPEN_VIEW.lon, OPEN_VIEW.lat, OPEN_VIEW.zoom);
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    const w = world.current;
    const stepDeg = 12 / w.zoom;
    const moves: Record<string, () => void> = {
      ArrowLeft: () => flyTo(w.lon - stepDeg, w.lat, w.zoom, 240),
      ArrowRight: () => flyTo(w.lon + stepDeg, w.lat, w.zoom, 240),
      ArrowUp: () => flyTo(w.lon, w.lat + stepDeg, w.zoom, 240),
      ArrowDown: () => flyTo(w.lon, w.lat - stepDeg, w.zoom, 240),
      "+": () => zoomBy(1.5),
      "=": () => zoomBy(1.5),
      "-": () => zoomBy(1 / 1.5),
      "0": reset,
      Escape: () => onSelect(null),
    };
    const move = moves[e.key];
    if (move) {
      e.preventDefault();
      w.spinUntil = performance.now() + 9000;
      move();
    }
  };

  const controlClass =
    "inline-flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground";

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        tabIndex={0}
        role="application"
        aria-label="Globe colored by each country's legal stance. Use arrow keys to rotate, plus and minus to zoom. Every country is also listed beside the globe."
        onKeyDown={onKeyDown}
        className="absolute inset-0 h-full w-full cursor-grab touch-none rounded-lg"
      />

      <div
        ref={tooltipRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 max-w-[16rem] rounded border border-border bg-popover px-2.5 py-1.5 text-xs",
          hover ? "" : "invisible"
        )}
      >
        <p className="truncate text-popover-foreground">{hover?.title}</p>
        <p className="truncate text-muted-foreground">{hover?.detail}</p>
      </div>

      {loadError && (
        <div className="absolute inset-x-0 top-4 flex justify-center px-4">
          <p className="flex items-center gap-3 rounded-lg border border-border bg-popover px-4 py-2 text-sm">
            The world map could not load. The country list still works.
            <button
              type="button"
              onClick={() => setAtlasAttempt((n) => n + 1)}
              className="font-medium underline underline-offset-4"
            >
              Retry
            </button>
          </p>
        </div>
      )}

      <div className="absolute end-3 top-3 flex flex-col divide-y divide-border rounded-lg border border-border bg-popover">
        <button type="button" onClick={() => zoomBy(1.6)} aria-label={labels.zoomIn} className={controlClass}>
          <Plus className="size-4" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => zoomBy(1 / 1.6)} aria-label={labels.zoomOut} className={controlClass}>
          <Minus className="size-4" aria-hidden="true" />
        </button>
        <button type="button" onClick={reset} aria-label={labels.reset} className={controlClass}>
          <RotateCcw className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
