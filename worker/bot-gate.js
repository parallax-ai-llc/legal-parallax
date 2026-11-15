// Bot gate for page requests (kept identical in historical-, legal- and truth-parallax).
//
// Why: in 2026-11 most GA "users" here were headless scrapers that ignore robots.txt and
// disguise their User-Agent: ~10k/2 weeks from Singapore (old Chrome builds, fixed 1280x1200),
// ~1.6k from Ashburn (AWS, unparseable UA, 1280x1600) that walked every truth chapter page,
// plus ~500 from China. None of them clicked, searched or stayed. Real readers arrive from
// home and mobile networks, so page requests from cloud/hosting networks are refused unless
// they come from a crawler we want (search engines, AI search, link previews) on that
// crawler's own network.
//
// Only page requests reach this gate (wrangler.jsonc run_worker_first skips /_next/*).
// robots.txt, sitemaps and files with an extension always pass.

// Cloud and hosting networks (AS numbers). Edit with care: a real person on one of these
// (a cloud desktop, a VPN exit) gets the 403 page below.
const HOSTING_ASNS = new Set([
  16509, 14618, // Amazon AWS
  396982, // Google Cloud
  8075, // Microsoft Azure (Bingbot, OpenAI and LinkedIn are let through by user agent below)
  45102, 37963, // Alibaba Cloud
  132203, 45090, // Tencent Cloud
  136907, 55990, // Huawei Cloud
  396986, 138699, // ByteDance
  24940, 213230, // Hetzner
  16276, // OVH
  14061, // DigitalOcean
  63949, // Linode / Akamai Connected Cloud
  20473, // Vultr
  51167, // Contabo
  31898, // Oracle Cloud
  12876, // Scaleway
  60781, 28753, // Leaseweb
  9009, // M247
]);

// Crawlers we want, with the networks they really crawl from. A matching user agent on any
// other hosting network is treated as a disguise and refused.
const GOOD_CRAWLERS = [
  { ua: /Googlebot|Google-InspectionTool|GoogleOther|Storebot-Google|AdsBot-Google|Mediapartners-Google|APIs-Google|FeedFetcher-Google/i, asns: [15169, 396982] },
  { ua: /bingbot|BingPreview|msnbot|adidxbot/i, asns: [8075] },
  { ua: /OAI-SearchBot|ChatGPT-User|GPTBot/i, asns: [8075] },
  { ua: /LinkedInBot/i, asns: [8075] },
  { ua: /Applebot/i, asns: [714, 6185] },
  { ua: /DuckDuckBot|DuckAssistBot/i, asns: [8075, 16509, 14618] },
  // Link previews in chat apps run on public clouds.
  { ua: /Slackbot|Discordbot|WhatsApp|TelegramBot|Twitterbot|facebookexternalhit|Embedly|redditbot|kakaotalk-scrap|Yeti/i, asns: null },
];

// Tools and crawlers that are never welcome, whatever network they come from.
const BAD_UA =
  /HeadlessChrome|PhantomJS|Puppeteer|Playwright|Selenium|python-requests|python-urllib|aiohttp|httpx|Scrapy|Go-http-client|curl\/|Wget|libwww-perl|Java\/|okhttp|axios|node-fetch|undici|Bytespider|ShapBot|AhrefsBot|SemrushBot|MJ12bot|DotBot|BLEXBot|DataForSeoBot|PetalBot|ZoominfoBot|MegaIndex|CCBot|Amazonbot|meta-externalagent/i;

function isPassThroughPath(pathname) {
  return (
    pathname === "/robots.txt" ||
    pathname.startsWith("/sitemap") ||
    /\.[a-z0-9]+$/i.test(pathname.split("/").pop() ?? "")
  );
}

/** Returns the reason a request is refused, or null when it may go on. */
export function botGateReason(request) {
  const { pathname } = new URL(request.url);
  if (isPassThroughPath(pathname)) return null;

  const ua = request.headers.get("User-Agent") ?? "";
  if (!ua.trim()) return "empty-ua";
  if (BAD_UA.test(ua)) return "bad-ua";

  const asn = Number(request.cf?.asn ?? 0);
  const crawler = GOOD_CRAWLERS.find((c) => c.ua.test(ua));
  if (crawler) {
    if (!crawler.asns || crawler.asns.includes(asn) || !HOSTING_ASNS.has(asn)) return null;
    return "crawler-off-network";
  }
  if (HOSTING_ASNS.has(asn)) return "hosting-network";
  return null;
}

const BLOCKED_BODY = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access blocked</title></head><body style="font-family:system-ui,sans-serif;max-width:32rem;margin:15vh auto;padding:0 1rem;line-height:1.6;color:#1c1c1e"><h1 style="font-size:1.25rem">Automated access is blocked</h1><p>This request looks automated, so it was not served. If you are a person reading this, please turn off your VPN or cloud proxy and try again, or contact hello@parallax.kr.</p></body></html>`;

/** 403 response for a refused request. Logs the reason, network and user agent (never the IP). */
export function botGateResponse(request, reason) {
  console.log(
    JSON.stringify({
      botGate: reason,
      asn: request.cf?.asn ?? null,
      asOrg: request.cf?.asOrganization ?? null,
      country: request.cf?.country ?? null,
      path: new URL(request.url).pathname,
      ua: request.headers.get("User-Agent") ?? "",
    }),
  );
  return new Response(BLOCKED_BODY, {
    status: 403,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
