import { NextResponse } from "next/server";
import { APP_CACHE_HEADERS, buildOverview, resolveLocale } from "@/lib/app-api";

// iOS app: first screen data (count, today's comparison, recent, fields, stance topics).
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolved = resolveLocale(locale);
  if (!resolved) {
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  }
  return NextResponse.json(buildOverview(resolved), { headers: APP_CACHE_HEADERS });
}
