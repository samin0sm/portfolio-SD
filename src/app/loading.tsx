import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "85vh",
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
          width: "96px",
          height: "96px",
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
            inset: "-8px",
            borderRadius: "50%",
            border: "3px solid transparent",
            borderTopColor: "var(--brand-accent)",
            borderRightColor: "var(--brand-primary)",
            borderBottomColor: "rgba(37, 99, 235, 0.2)",
            animation: "spin 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite",
            boxShadow: "0 0 25px var(--brand-glow)",
          }}
        />

        {/* Outer Ambient Glow */}
        <div
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            background: "radial-gradient(circle, var(--brand-glow) 0%, transparent 70%)",
            animation: "pulse-glow 2s ease-in-out infinite",
          }}
        />

        {/* Inner Portrait Frame */}
        <div
          style={{
            position: "relative",
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid var(--border-color)",
            boxShadow: "var(--shadow-md)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <img
            src="/assets/images/sazid-portrait.jpg"
            alt="Tanvir Anjum Sazid"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              transform: "scale(1.08)",
            }}
          />
        </div>
      </div>

      {/* Loading Titles */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: "0.25rem",
          }}
        >
          TANVIR ANJUM <span style={{ color: "var(--brand-accent)" }}>SAZID</span>
        </div>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            maxWidth: "320px",
            lineHeight: 1.5,
          }}
        >
          Initializing corporate portfolio &amp; verified credentials...
        </p>
      </div>

      {/* Progress Shimmer Bar */}
      <div
        style={{
          width: "180px",
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
            width: "45%",
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
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes shimmer-bar {
          0% { transform: translateX(-60%); }
          100% { transform: translateX(180%); }
        }
      `}</style>
    </div>
  );
}
