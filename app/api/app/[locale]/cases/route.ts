import { NextResponse } from "next/server";
import { APP_CACHE_HEADERS, buildCaseList, resolveLocale } from "@/lib/app-api";

// iOS app: every comparison (metadata only) for browsing and on-device search.
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolved = resolveLocale(locale);
  if (!resolved) {
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  }
  return NextResponse.json({ cases: buildCaseList(resolved) }, { headers: APP_CACHE_HEADERS });
}
