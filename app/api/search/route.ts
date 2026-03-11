import { NextResponse } from "next/server";
import { getSearchIndex } from "@/lib/articles";
import { getCaseSearchIndex } from "@/lib/cases";

export async function GET() {
  const articleIndex = getSearchIndex();
  const caseIndex = getCaseSearchIndex();

  const combined = [
    ...articleIndex.map((item) => ({ ...item, type: "article" as const })),
    ...caseIndex.map((item) => ({ ...item, type: "case" as const })),
  ];

  return NextResponse.json(combined);
}
