import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Reeact — Maîtrisez votre e-réputation en ligne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(160deg, #1B3645 0%, #27475A 65%, #3A6378 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background watermark circle */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(255,122,58,0.06)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: "#FF7A3A",
            fontSize: 16,
            letterSpacing: "0.18em",
            marginBottom: 28,
            fontWeight: 700,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Plateforme e-réputation française
        </div>

        {/* Wordmark */}
        <div
          style={{
            color: "#F1ECE3",
            fontSize: 104,
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: 32,
            display: "flex",
          }}
        >
          Reeact
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#F1ECE3",
            fontSize: 30,
            opacity: 0.75,
            maxWidth: 640,
            lineHeight: 1.35,
            marginBottom: 52,
            display: "flex",
          }}
        >
          Maîtrisez votre réputation en ligne avant que ça parte.
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Surveillance 24h/24", "Analyse IA", "Interventions légales"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,122,58,0.15)",
                border: "1px solid rgba(255,122,58,0.45)",
                color: "#FF7A3A",
                padding: "10px 22px",
                borderRadius: 999,
                fontSize: 17,
                fontWeight: 600,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain badge */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            color: "#F1ECE3",
            opacity: 0.45,
            fontSize: 18,
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          reeact.io
        </div>
      </div>
    ),
    { ...size }
  );
}
