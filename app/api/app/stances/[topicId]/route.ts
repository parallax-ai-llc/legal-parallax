import { NextResponse } from "next/server";
import { APP_CACHE_HEADERS, buildTopic } from "@/lib/app-api";

// iOS app: one stance-map topic with every country's position.
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  const topic = buildTopic(topicId);
  if (!topic) {
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
  }
  return NextResponse.json(topic, { headers: APP_CACHE_HEADERS });
}
