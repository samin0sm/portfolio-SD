import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "550px" }}>
        <span className="section-tag" style={{ marginBottom: "1rem" }}>
          404 Error
        </span>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem", color: "var(--brand-primary)" }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "2rem" }}>
          The requested page or document record could not be located in Tanvir Anjum Sazid&apos;s corporate portfolio.
          Please return to the main overview.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Link href="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            <span>Return to Home</span>
          </Link>
          <Link href="/contact" className="btn btn-secondary btn-lg">
            <ArrowLeft size={18} />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
