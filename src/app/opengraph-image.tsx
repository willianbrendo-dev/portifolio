import { ImageResponse } from "next/og";

export const alt = "Willian Brendo — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#171918",
        color: "#f1efe8",
        padding: "64px 72px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2 }}>
        <span>WB / SOFTWARE ENGINEERING</span>
        <span style={{ color: "#7091ff" }}>PORTFOLIO / 2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ color: "#7091ff", fontSize: 28 }}>Full-Stack Software Engineer</span>
        <strong style={{ fontSize: 76, lineHeight: 1, letterSpacing: -3 }}>Willian Brendo</strong>
        <span style={{ fontSize: 34, color: "#b9bbb5" }}>Produtos web, SaaS e automações.</span>
      </div>
      <div style={{ display: "flex", gap: 24, fontSize: 20, color: "#8d908a" }}>
        <span>TypeScript</span><span>React</span><span>Next.js</span><span>PostgreSQL</span><span>Python</span>
      </div>
    </div>,
    size,
  );
}
