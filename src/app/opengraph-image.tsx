import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Abenego Nyabicha | Cybersecurity & Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#080c14",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
          border: "2px solid #1e293b",
          fontFamily: "system-ui, sans-serif",
          color: "#f8fafc",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#0f172a",
              border: "1.5px solid #22d3ee",
              color: "#22d3ee",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            AN
          </div>
          <div
            style={{
              fontSize: "16px",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              color: "#22d3ee",
              textTransform: "uppercase",
            }}
          >
            Engineering Portfolio
          </div>
        </div>

        {/* Center Identity */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#f8fafc",
              lineHeight: 1.1,
            }}
          >
            Abenego Nyabicha
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#22d3ee",
              fontFamily: "monospace",
            }}
          >
            Cybersecurity &amp; Software Engineer
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              maxWidth: "900px",
              lineHeight: 1.4,
              marginTop: "8px",
            }}
          >
            Systems at the intersection of cybersecurity, software engineering, and data.
          </div>
        </div>

        {/* Bottom Credibility Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            paddingTop: "24px",
            borderTop: "1px solid #1e293b",
            fontSize: "16px",
            fontFamily: "monospace",
            color: "#64748b",
          }}
        >
          <span style={{ color: "#e2e8f0" }}>Cybersecurity</span>
          <span style={{ color: "#06b6d4" }}>·</span>
          <span style={{ color: "#e2e8f0" }}>Python</span>
          <span style={{ color: "#06b6d4" }}>·</span>
          <span style={{ color: "#e2e8f0" }}>Cloud</span>
          <span style={{ color: "#06b6d4" }}>·</span>
          <span style={{ color: "#e2e8f0" }}>DevSecOps</span>
          <span style={{ color: "#06b6d4" }}>·</span>
          <span style={{ color: "#e2e8f0" }}>Data &amp; AI</span>
          <span style={{ color: "#06b6d4" }}>·</span>
          <span style={{ color: "#22d3ee" }}>Dublin &amp; Nairobi</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
