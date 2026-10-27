import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// Static export served as Cloudflare Workers static assets (wrangler.jsonc).
// Cases only change on deploy, so every page is prerendered for every locale;
// worker/index.js does the locale routing that middleware.ts used to do, and
// response headers live in public/_headers.
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,

  // No image optimizer in a static export: images load from Wikimedia as-is.
  images: {
    unoptimized: true,
  },

  // 정적 최적화
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default withNextIntl(nextConfig);
