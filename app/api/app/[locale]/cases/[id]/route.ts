import { NextResponse } from "next/server";
import { APP_CACHE_HEADERS, readCaseMarkdown, resolveLocale } from "@/lib/app-api";

// iOS app: one comparison as frontmatter + raw Markdown (English fallback).
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; id: string }> }
) {
  const { locale, id } = await params;
  const resolved = resolveLocale(locale);
  const doc = resolved ? readCaseMarkdown(id, resolved) : null;
  if (!doc) {
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  }
  return NextResponse.json(doc, { headers: APP_CACHE_HEADERS });
}
