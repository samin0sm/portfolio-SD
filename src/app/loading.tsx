import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        transition: "all var(--transition-normal)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.75rem",
        }}
      >
        {/* Outer Rotating Glowing Ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid var(--border-color)",
            borderTopColor: "var(--brand-accent)",
            borderRightColor: "var(--brand-primary)",
            animation: "spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
          }}
        />

        {/* Inner Pulsing Brand Dot / Emblem */}
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--brand-primary), var(--brand-accent))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "1.1rem",
            boxShadow: "0 0 20px var(--brand-glow)",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        >
          TAS
        </div>
      </div>

      {/* Loading Titles */}
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "0.4rem",
          color: "var(--text-primary)",
          letterSpacing: "-0.01em",
        }}
      >
        Loading Portfolio
      </h2>

      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          maxWidth: "320px",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Initializing verified credentials and corporate showcases...
      </p>

      {/* Progress Shimmer Bar */}
      <div
        style={{
          width: "160px",
          height: "4px",
          backgroundColor: "var(--bg-tertiary)",
          borderRadius: "var(--radius-full)",
          overflow: "hidden",
          marginTop: "1.5rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "50%",
            background: "linear-gradient(90deg, var(--brand-primary), var(--brand-accent))",
            borderRadius: "var(--radius-full)",
            animation: "shimmer-bar 1.5s ease-in-out infinite alternate",
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer-bar {
          0% { transform: translateX(-60%); }
          100% { transform: translateX(160%); }
        }
      `}</style>
    </div>
  );
}
