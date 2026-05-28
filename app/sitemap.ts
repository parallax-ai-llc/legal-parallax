import { MetadataRoute } from "next";
import { getAllCaseIds } from "@/lib/cases";
import { routing } from "@/i18n/routing";

const baseUrl = "https://historical.parallax.kr";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

// localePrefix is 'as-needed': the default locale (en) has no prefix, others are /{locale}/...
function localizedUrl(locale: string, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${baseUrl}${prefix}${path}`;
}

// hreflang alternates so search engines map each translation of a page together.
function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localizedUrl(locale, path);
  }
  languages["x-default"] = localizedUrl(routing.defaultLocale, path);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
    { path: "", changeFrequency: "daily", priority: 1 },
    { path: "/maps/legal-parallax", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contribute", changeFrequency: "monthly", priority: 0.5 },
    { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  ];

  const casePages: { path: string; changeFrequency: ChangeFrequency; priority: number }[] =
    getAllCaseIds().map((id) => ({
      path: `/c/${id}`,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  // One entry per page, keyed on the default-locale URL, with hreflang alternates
  // pointing at every translation. This is the recommended layout for multilingual sites.
  return [...staticPages, ...casePages].map(({ path, changeFrequency, priority }) => ({
    url: localizedUrl(routing.defaultLocale, path),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: languageAlternates(path) },
  }));
}
