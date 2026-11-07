# Design system

Shared by Legal, Historical and Truth Parallax. Only `lib/site-identity.ts` and the `--signal` token differ per site.

## Look
Light carved out of obsidian in dark mode, ink on paper in light mode. The theme follows the system setting, and the toggle stays. Hairlines carry structure: no drop shadows on surfaces, no colour fills behind text.

## Tokens (`app/globals.css`)
- `--background`, `--foreground`, `--muted-foreground`, `--border`: neutral ramp. Text pairs keep 7:1 contrast.
- `--signal`: the only accent, used for live marks, focus, links, globe markers. Legal is steel blue, Historical is verdigris, Truth is candle amber.

## Type
- Display: Instrument Serif, weight 400 only, tracking -0.02em. Hierarchy comes from size.
- Body: Google Sans Flex, with system fallbacks for CJK, Arabic and Devanagari.
- Data and labels: Geist Mono, for counts, dates, footer headings.

## Shape
Cards 8px. Pills only for search and the primary action. Lists are ruled rows, not cards.

## ASCII
- Hero (`components/ascii/ascii-hero.tsx`): baked by `tools/ascii-hero/generate.mjs`. A pulse leaves the point of contact.
- Background (`components/ascii/ascii-field.tsx`): fixed behind every page at 8 fps and low alpha, one pattern per site (strata, rings, columns). Masked out of the top of the home page and the text column elsewhere; hidden below `lg` outside the home page. Content lists sit on an opaque ground.
- Both honour `prefers-reduced-motion` by drawing one still frame.

## Footer
`components/footer.tsx` mirrors the footer on parallax.kr: company block, Services grid, then Products, Developers, Resources, Communities, Wiki, Policies, then a copyright rule. Keep the three sites' link lists identical except the site's own Wiki entry.

## Globe
`components/globe/stance-globe.tsx` draws land as a dot matrix on an orthographic canvas and fills countries by legal stance. Stance colours come from the data file and stay as they are. The globe and the country list drive each other.
