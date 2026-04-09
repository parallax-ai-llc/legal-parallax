import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export interface CaseMeta {
  id: string;
  name: string;
  date?: string;
  nationality?: string;
  occupation?: string[];
  image?: string;
  socialLinks?: {
    wikipedia?: string;
    twitter?: string;
    official?: string;
  };
  lastUpdated?: string;
  fallback?: boolean;
}

export interface Case {
  meta: CaseMeta;
  content: string;
  toc: TocItem[];
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

const contentBase = path.join(process.cwd(), "content/cases");

function getCasesDirectory(locale: string = "en"): string {
  return path.join(contentBase, locale);
}

function ensureDirectoryExists(dir: string) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch {
    // Read-only filesystem (e.g. Vercel)
  }
}

export function getAllCaseIds(locale: string = "en"): string[] {
  const dir = getCasesDirectory(locale);
  ensureDirectoryExists(dir);

  try {
    const fileNames = fs.readdirSync(dir);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch {
    // If locale directory doesn't exist, fall back to English
    if (locale !== "en") {
      return getAllCaseIds("en");
    }
    return [];
  }
}

export function getAllCases(locale: string = "en"): CaseMeta[] {
  // Always use English IDs as the master list
  const ids = getAllCaseIds("en");
  const localeDir = getCasesDirectory(locale);
  const enDir = getCasesDirectory("en");

  const cases = ids
    .map((id) => {
      try {
        // Try locale-specific file first, fall back to English
        let fullPath = path.join(localeDir, `${id}.md`);
        let fallback = false;

        if (locale !== "en" && !fs.existsSync(fullPath)) {
          fullPath = path.join(enDir, `${id}.md`);
          fallback = true;
        }

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          id,
          name: data.name || data.title || id,
          date: data.date,
          nationality: data.nationality,
          occupation: data.occupation,
          image: data.image,
          socialLinks: data.socialLinks,
          lastUpdated: data.lastUpdated,
          fallback,
        } as CaseMeta;
      } catch {
        return null;
      }
    })
    .filter((c): c is CaseMeta => c !== null);

  return cases.sort((a, b) => {
    if (!a.lastUpdated || !b.lastUpdated) return 0;
    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
  });
}

function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\[.*?\]\(.*?\)/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    toc.push({ id, text, level });
  }

  return toc;
}

export async function getCase(id: string, locale: string = "en"): Promise<Case | null> {
  const localeDir = getCasesDirectory(locale);
  const enDir = getCasesDirectory("en");

  try {
    let fullPath = path.join(localeDir, `${id}.md`);
    let fallback = false;

    if (locale !== "en" && !fs.existsSync(fullPath)) {
      fullPath = path.join(enDir, `${id}.md`);
      fallback = true;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const toc = extractToc(content);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content);

    let htmlContent = processedContent.toString();

    toc.forEach((item) => {
      const escapedText = item.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(
        `<h${item.level}>([^<]*${escapedText}[^<]*)</h${item.level}>`,
        "i"
      );
      htmlContent = htmlContent.replace(
        regex,
        `<h${item.level} id="${item.id}">$1</h${item.level}>`
      );
    });

    const meta: CaseMeta = {
      id,
      name: data.name || data.title || id,
      date: data.date,
      nationality: data.nationality,
      occupation: data.occupation,
      image: data.image,
      socialLinks: data.socialLinks,
      lastUpdated: data.lastUpdated,
      fallback,
    };

    return {
      meta,
      content: htmlContent,
      toc,
    };
  } catch {
    return null;
  }
}

export function getCaseSearchIndex(locale: string = "en"): CaseMeta[] {
  return getAllCases(locale);
}

export function getLocaleCoverage(): Record<string, number> {
  const locales = ["en", "ko", "zh", "es", "fr", "de", "ja", "pt", "ar", "hi"];
  const coverage: Record<string, number> = {};
  for (const locale of locales) {
    try {
      const dir = getCasesDirectory(locale);
      if (!fs.existsSync(dir)) {
        coverage[locale] = 0;
        continue;
      }
      coverage[locale] = fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".md")).length;
    } catch {
      coverage[locale] = 0;
    }
  }
  return coverage;
}
