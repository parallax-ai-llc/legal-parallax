import { ImageResponse } from "next/og";
import { getCase, getAllCaseIds } from "@/lib/cases";
import { getOgFont } from "@/lib/og-font";
import { routing } from "@/i18n/routing";

export const alt = "Legal Parallax";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered at build time for every case (static export).
export const dynamicParams = false;

// Metadata image routes do not inherit the [locale] layout's params, so list both.
export async function generateStaticParams() {
  const cases = getAllCaseIds();
  return routing.locales.flatMap((locale) => cases.map((id) => ({ locale, id })));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseData = await getCase(id);

  const font = await getOgFont();

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
        fontFamily: font.name,
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
      fonts: [font],
    }
  );
}
