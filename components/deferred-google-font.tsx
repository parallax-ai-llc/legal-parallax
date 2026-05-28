"use client";

import * as React from "react";

// "Google Sans Flex" is served from the Google Fonts CDN but is not part of the
// next/font/google catalog, so it can't be self-hosted via next/font. To keep it
// off the critical render path we load the stylesheet with media="print" (which
// the browser fetches at low priority and does NOT render-block), then flip it to
// media="all" on mount. A <noscript> fallback keeps the font for non-JS clients.
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&display=swap";

export function DeferredGoogleFont() {
  const linkRef = React.useRef<HTMLLinkElement>(null);

  // useEffect (not onLoad) so the swap is reliable even if the stylesheet finished
  // downloading before hydration.
  React.useEffect(() => {
    if (linkRef.current) {
      linkRef.current.media = "all";
    }
  }, []);

  return (
    <>
      <link rel="preload" as="style" href={FONT_HREF} />
      <link ref={linkRef} rel="stylesheet" href={FONT_HREF} media="print" />
      <noscript>
        <link rel="stylesheet" href={FONT_HREF} />
      </noscript>
    </>
  );
}
