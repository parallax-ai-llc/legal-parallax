import { ImageResponse } from "next/og";
import { getCase, getAllCaseIds } from "@/lib/cases";

export const alt = "Legal Parallax";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ISR: Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

async function fetchWithTimeout(url: string, init: RequestInit = {}, timeoutMs = 3000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

export async function generateStaticParams() {
  const cases = getAllCaseIds();
  return cases.map((id) => ({ id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseData = await getCase(id);

  // Font load: best-effort only
  let fontData: ArrayBuffer | null = null;
  try {
    const fontCss = await fetchWithTimeout(
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } },
      3000
    ).then((res) => res.text());

    const fontUrl = fontCss.match(/src: url\(([^)]+)\)/)?.[1];
    if (fontUrl) {
      fontData = await fetchWithTimeout(fontUrl, {}, 3000).then((res) => res.arrayBuffer());
    }
  } catch {
    fontData = null;
  }

  const title = caseData?.meta.name || "Legal Case";
  const nationality = caseData?.meta.nationality || "";
  const date = caseData?.meta.date || "";
  const occupation = caseData?.meta.occupation?.join(", ") || "";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        padding: "60px 80px",
        fontFamily: fontData ? "Cormorant Garamond" : "serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div style={{ fontSize: "28px", color: "#666", letterSpacing: "0.1em" }}>
          LEGAL PARALLAX
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#888",
            padding: "8px 20px",
            border: "1px solid #333",
            borderRadius: "8px",
          }}
        >
          {nationality}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          {title.length > 80 ? title.slice(0, 80) + "..." : title}
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {occupation && <div style={{ fontSize: "28px", color: "#888" }}>{occupation}</div>}
        </div>
        {date && <div style={{ fontSize: "24px", color: "#555", marginTop: "16px" }}>{date}</div>}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "40px",
          borderTop: "1px solid #222",
        }}
      >
        <div style={{ fontSize: "20px", color: "#555" }}>Multiple Perspectives on Law</div>
        <div style={{ fontSize: "20px", color: "#555" }}>legal.parallax.kr</div>
      </div>
    </div>,
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Cormorant Garamond",
              data: fontData,
              style: "normal",
              weight: 700,
            },
          ]
        : [],
    }
  );
}
