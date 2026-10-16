import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllCases, type CaseMeta } from "@/lib/cases";
import { getAllTopics, getCountryName, getTopic } from "@/lib/legal-stances";
import { locales } from "@/i18n/config";

// Read-only JSON for the Parallax iOS app (/api/app/*).
// The app renders Markdown natively, so these endpoints return raw Markdown
// instead of the HTML the web pages use. Nothing here changes web behavior.

const contentBase = path.join(process.cwd(), "content/cases");

const CASE_ID = /^[a-z0-9][a-z0-9-]*$/i;

export const APP_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
};

export function resolveLocale(value: string): string | null {
  return (locales as readonly string[]).includes(value) ? value : null;
}

export interface AppCaseCard {
  id: string;
  name: string;
  date?: string;
  nationality?: string;
  occupation?: string[];
  lastUpdated?: string;
  fallback?: boolean;
}

function toCard(c: CaseMeta): AppCaseCard {
  return {
    id: c.id,
    name: c.name,
    date: c.date,
    nationality: c.nationality,
    occupation: c.occupation,
    lastUpdated: c.lastUpdated,
    fallback: c.fallback,
  };
}

/** Raw Markdown body + frontmatter for one case in a locale (English fallback). */
export function readCaseMarkdown(
  id: string,
  locale: string
): { meta: AppCaseCard; markdown: string } | null {
  if (!CASE_ID.test(id) || id.length > 200) return null;
  const candidates =
    locale === "en"
      ? [{ file: path.join(contentBase, "en", `${id}.md`), fallback: false }]
      : [
          { file: path.join(contentBase, locale, `${id}.md`), fallback: false },
          { file: path.join(contentBase, "en", `${id}.md`), fallback: true },
        ];
  for (const candidate of candidates) {
    try {
      const raw = fs.readFileSync(candidate.file, "utf8");
      const { data, content } = matter(raw);
      return {
        meta: {
          id,
          name: data.name || data.title || id,
          date: data.date,
          nationality: data.nationality,
          occupation: data.occupation,
          lastUpdated: data.lastUpdated,
          fallback: candidate.fallback,
        },
        markdown: content.trim(),
      };
    } catch {
      // try the next candidate
    }
  }
  return null;
}

function firstParagraph(markdown: string, heading: string): string {
  const section = markdown.split(new RegExp(`^##\\s+(?:${heading})\\s*$`, "m"))[1] ?? markdown;
  return (
    section
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p.length > 0 && !p.startsWith("#") && !p.startsWith("|")) ?? ""
  );
}

/** The first Markdown table in the document (the comparative table). */
function firstTable(markdown: string): string {
  const lines = markdown.split("\n");
  const start = lines.findIndex((l) => l.trim().startsWith("|"));
  if (start < 0) return "";
  const table: string[] = [];
  for (let i = start; i < lines.length && lines[i].trim().startsWith("|"); i++) {
    table.push(lines[i]);
  }
  return table.join("\n");
}

// Tags every comparison carries; they say nothing about the field.
const GENERIC_TAGS = new Set(["Comparative Law", "Legal Analysis", "Legal Comparison", "Comparative Analysis"]);

function dayNumber(): number {
  return Math.floor(Date.now() / 86_400_000);
}

/** Every case with `fields` = English field tags (the ids buildOverview().fields uses). */
export function buildCaseList(locale: string) {
  const englishTags = new Map(
    getAllCases("en").map((c) => [c.id, (c.occupation ?? []).filter((t) => !GENERIC_TAGS.has(t))])
  );
  return getAllCases(locale).map((c) => ({ ...toCard(c), fields: englishTags.get(c.id) ?? [] }));
}

export function buildOverview(locale: string) {
  const english = getAllCases("en");
  const localized = locale === "en" ? english : getAllCases(locale);
  const localizedById = new Map(localized.map((c) => [c.id, c]));

  // Fields: English tag is the stable id, the localized tag at the same position is the label.
  const fields = new Map<string, { id: string; label: string; count: number }>();
  for (const c of english) {
    const local = localizedById.get(c.id);
    const tags = c.occupation ?? [];
    tags.forEach((tag, index) => {
      if (GENERIC_TAGS.has(tag)) return;
      const label =
        local && !local.fallback && local.occupation && local.occupation.length === tags.length
          ? local.occupation[index]
          : tag;
      const entry = fields.get(tag) ?? { id: tag, label, count: 0 };
      entry.count += 1;
      fields.set(tag, entry);
    });
  }

  // Today's comparison rotates through cases that back a stance-map topic first.
  const topics = getAllTopics();
  const topicCaseIds = topics.map((t) => t.caseId).filter((id) => localizedById.has(id));
  const pool = topicCaseIds.length > 0 ? topicCaseIds : english.map((c) => c.id);
  const pickId = pool.length > 0 ? pool[dayNumber() % pool.length] : null;
  const featuredDoc = pickId ? readCaseMarkdown(pickId, locale) : null;

  return {
    total: english.length,
    locales: locales.length,
    featured: featuredDoc
      ? {
          ...featuredDoc.meta,
          summary: firstParagraph(featuredDoc.markdown, "Summary|요약|Zusammenfassung|概要|摘要|Resumen|Résumé|Resumo|ملخص|सारांश"),
          table: firstTable(featuredDoc.markdown),
        }
      : null,
    recent: localized.slice(0, 10).map(toCard),
    fields: [...fields.values()].sort((a, b) => b.count - a.count).slice(0, 12),
    topics: topics.map((t) => ({
      id: t.id,
      name: t.name,
      description: t.description,
      caseId: t.caseId,
      scale: t.scale,
      focus: ["KOR", "USA", "DEU", "FRA", "GBR"]
        .filter((code) => t.countries[code])
        .map((code) => ({ code, name: getCountryName(code), ...t.countries[code] })),
      distribution: t.scale.map((level) => ({
        value: level.value,
        count: Object.values(t.countries).filter((c) => c.stance === level.value).length,
      })),
      countryCount: Object.keys(t.countries).length,
    })),
  };
}

export function buildTopic(topicId: string) {
  const topic = getTopic(topicId);
  if (!topic) return null;
  return {
    id: topic.id,
    name: topic.name,
    description: topic.description,
    caseId: topic.caseId,
    scale: topic.scale,
    countries: Object.entries(topic.countries)
      .map(([code, stance]) => ({ code, name: getCountryName(code), ...stance }))
      .sort((a, b) => a.stance - b.stance || a.name.localeCompare(b.name)),
  };
}
