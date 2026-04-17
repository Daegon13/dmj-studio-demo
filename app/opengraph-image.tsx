import { ImageResponse } from "next/og";
import { brand } from "@/src/data/brand";

export const alt = `Landing demo comercial de ${brand.name}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          color: "#f1f4f8",
          background:
            "radial-gradient(circle at 10% 0%, rgba(210, 220, 234, 0.35), transparent 40%), linear-gradient(140deg, #10151c 0%, #050608 62%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, textTransform: "uppercase", opacity: 0.7 }}>
          Demo comercial
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "88%" }}>
          <div style={{ display: "flex", fontSize: 70, lineHeight: 1.02, fontWeight: 700 }}>{brand.name}</div>
          <div style={{ display: "flex", fontSize: 34, lineHeight: 1.2, color: "#cfd9e4" }}>
            {brand.businessLine} premium orientada a reservas y cierre por WhatsApp
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(238, 242, 248, 0.24)",
            paddingTop: 22,
            fontSize: 24,
            color: "#b2bfce",
          }}
        >
          <div style={{ display: "flex" }}>{brand.zone}</div>
          <div style={{ display: "flex" }}>dmj-studio-demo.vercel.app</div>
        </div>
      </div>
    ),
    size,
  );
}
