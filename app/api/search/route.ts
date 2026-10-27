import { NextResponse } from "next/server";
import { getCaseSearchIndex } from "@/lib/cases";

// Content only changes on deploy: built once at export time and served as a static file.
export const dynamic = "force-static";

export async function GET() {
  const caseIndex = getCaseSearchIndex();

  const combined = [
    ...caseIndex.map((item) => ({ ...item, type: "case" as const })),
  ];

  return NextResponse.json(combined);
}
