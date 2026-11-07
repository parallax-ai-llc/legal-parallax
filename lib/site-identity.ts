import type { AsciiFieldPattern } from "@/components/ascii/ascii-field";
import type { SymbolHeroConfig } from "@/components/ascii/symbol-hero";

/** What differs between the Parallax wiki sites' art. Everything else is shared. */
export const SITE_ASCII: {
  fieldPattern: AsciiFieldPattern;
  fieldGlyphs: string;
} = {
  fieldPattern: "strata",
  fieldGlyphs: ".·:-§",
};

export const SITE_HERO: SymbolHeroConfig = {
  src: "/hero/justice.webp",
  label: "Lady Justice, blindfolded and holding up her scales, drawn in fine white dots",
  aspect: 1.015,
  pulseOrigin: [0.45, 0.24],
  glyphs: "lawjusticerightdutyfactproof§",
  dissolve: { x: 0.31, y: 0.23, radius: 0.07, angle: 3.04 },
};
