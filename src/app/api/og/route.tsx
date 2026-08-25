import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "999px",
              padding: "8px 16px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
            <span
              style={{
                color: "#10b981",
                fontSize: "14px",
                fontFamily: "monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Available for Hire
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#f4f4f5",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Md Noman Faysal
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #34d399, #2dd4bf, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ridoy
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              fontWeight: 400,
              fontFamily: "monospace",
            }}
          >
            Full-Stack Web Developer
          </div>

          {/* Tech stack */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["Next.js", "React", "TypeScript", "Node.js", "MERN Stack", "GSAP"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    padding: "6px 14px",
                    color: "#d4d4d8",
                    fontSize: "14px",
                    fontFamily: "monospace",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* URL */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              color: "#52525b",
              fontSize: "16px",
              fontFamily: "monospace",
            }}
          >
            nfridoy.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
