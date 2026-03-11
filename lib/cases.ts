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

const casesDirectory = path.join(process.cwd(), "content/cases");

function ensureDirectoryExists() {
  if (!fs.existsSync(casesDirectory)) {
    fs.mkdirSync(casesDirectory, { recursive: true });
  }
}

export function getAllCaseIds(): string[] {
  ensureDirectoryExists();

  try {
    const fileNames = fs.readdirSync(casesDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export function getAllCases(): CaseMeta[] {
  const ids = getAllCaseIds();
  const cases = ids
    .map((id) => {
      try {
        const fullPath = path.join(casesDirectory, `${id}.md`);
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

export async function getCase(id: string): Promise<Case | null> {
  ensureDirectoryExists();

  try {
    const fullPath = path.join(casesDirectory, `${id}.md`);
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

export function getCaseSearchIndex(): CaseMeta[] {
  return getAllCases();
}
