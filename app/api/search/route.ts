import { NextResponse } from "next/server";
import { getCaseSearchIndex } from "@/lib/cases";

export async function GET() {
  const caseIndex = getCaseSearchIndex();

  const combined = [
    ...caseIndex.map((item) => ({ ...item, type: "case" as const })),
  ];

  return NextResponse.json(combined);
}
