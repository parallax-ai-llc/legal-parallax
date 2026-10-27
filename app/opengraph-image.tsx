import { ImageResponse } from "next/og";
import { getOgFont } from "@/lib/og-font";

export const dynamic = "force-static";
export const alt = "Legal Parallax";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await getOgFont();

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        fontFamily: font.name,
      }}
    >
      <div
        style={{
          fontSize: "80px",
          fontWeight: "bold",
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        Legal Parallax
      </div>
      <div
        style={{
          fontSize: "32px",
          color: "#888",
        }}
      >
        Every perspective creates a parallax
      </div>
    </div>,
    {
      ...size,
      fonts: [font],
    }
  );
}
