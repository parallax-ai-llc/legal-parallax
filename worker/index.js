// Cloudflare Worker in front of the static export (wrangler.jsonc).
// It does what next-intl middleware did with localePrefix "as-needed":
// - "/en/..." redirects to "/..." (English has no prefix)
// - an unprefixed path uses the NEXT_LOCALE cookie, then Accept-Language; a
//   non-English match redirects to "/<locale>/...", English is served from /en/...
// - visiting a prefixed path remembers the locale in NEXT_LOCALE
// Static files (_next, api, anything with an extension) go straight to assets.

const LOCALES = ["en", "ko", "zh", "es", "fr", "de", "ja", "pt", "ar", "hi"];
const DEFAULT_LOCALE = "en";
const COOKIE = "NEXT_LOCALE";

function cookieLocale(request) {
  const match = (request.headers.get("Cookie") ?? "").match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
  return match && LOCALES.includes(match[1]) ? match[1] : null;
}

function acceptLanguageLocale(request) {
  const header = request.headers.get("Accept-Language") ?? "";
  const tags = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .filter((t) => t.tag && t.q > 0)
    .sort((a, b) => b.q - a.q);
  for (const { tag } of tags) {
    const base = tag.split("-")[0];
    if (LOCALES.includes(base)) return base;
  }
  return null;
}

function isStaticPath(pathname) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    /\.[a-z0-9]+$/i.test(pathname.split("/").pop() ?? "")
  );
}

// The static export writes these without an extension, so assets cannot guess the type.
function contentTypeFor(pathname) {
  if (pathname === "/api/search") return "application/json; charset=utf-8";
  if (/\/opengraph-image(-[a-z0-9]+)?$/i.test(pathname)) return "image/png";
  return null;
}

async function fromAssets(env, request) {
  const response = await env.ASSETS.fetch(request);
  const type = contentTypeFor(new URL(request.url).pathname);
  if (!type || !response.ok) return response;
  const res = new Response(response.body, response);
  res.headers.set("Content-Type", type);
  return res;
}

function withLocaleCookie(response, locale) {
  const res = new Response(response.body, response);
  res.headers.append("Set-Cookie", `${COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`);
  return res;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    if (isStaticPath(pathname)) return fromAssets(env, request);

    const first = pathname.split("/")[1];

    if (first === DEFAULT_LOCALE) {
      url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
      return withLocaleCookie(Response.redirect(url.toString(), 307), DEFAULT_LOCALE);
    }

    if (LOCALES.includes(first)) {
      return withLocaleCookie(await fromAssets(env, request), first);
    }

    const locale = cookieLocale(request) ?? acceptLanguageLocale(request) ?? DEFAULT_LOCALE;
    if (locale !== DEFAULT_LOCALE) {
      url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
      return Response.redirect(url.toString(), 307);
    }

    url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
    return fromAssets(env, new Request(url.toString(), request));
  },
};
