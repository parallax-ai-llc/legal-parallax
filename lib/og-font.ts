import { readFile } from "node:fs/promises";
import path from "node:path";

export interface OgFont {
  name: string;
  data: ArrayBuffer | Buffer;
  style: "normal";
  weight: 700;
}

async function fetchWithTimeout(url: string, init: RequestInit = {}, timeoutMs = 3000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

async function loadOgFont(): Promise<OgFont> {
  try {
    const fontCss = await fetchWithTimeout(
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } },
    ).then((res) => res.text());
    const fontUrl = fontCss.match(/src: url\(([^)]+)\)/)?.[1];
    if (fontUrl) {
      const data = await fetchWithTimeout(fontUrl).then((res) => res.arrayBuffer());
      return { name: "Cormorant Garamond", data, style: "normal", weight: 700 };
    }
  } catch {
    // fall through to the bundled font
  }
  // Satori needs at least one font; the bundled Google Sans Flex never needs the network.
  const data = await readFile(path.join(process.cwd(), "app/fonts/google-sans-flex-700.ttf"));
  return { name: "Google Sans Flex", data, style: "normal", weight: 700 };
}

// OG images are rendered at build time (static export), one per case and locale.
// Load the font once per build worker instead of once per image.
let fontPromise: Promise<OgFont> | null = null;

export function getOgFont(): Promise<OgFont> {
  fontPromise ??= loadOgFont();
  return fontPromise;
}
