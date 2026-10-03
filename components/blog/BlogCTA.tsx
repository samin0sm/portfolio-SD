import React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export const BlogCTA: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, var(--bg-card), var(--bg-tertiary))",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-xl)",
        padding: "3.5rem 2.5rem",
        textAlign: "center",
        maxWidth: "850px",
        margin: "4rem auto 0 auto",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <span className="section-tag" style={{ marginBottom: "1rem" }}>
        Connect Directly
      </span>
      <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "0.75rem" }}>
        Looking for Institutional Banking or Administrative Expertise?
      </h3>
      <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "580px", margin: "0 auto 2rem auto" }}>
        Let&apos;s discuss how high-precision document verification, customer care, and automated spreadsheets
        can elevate your team&apos;s performance.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/contact" className="btn btn-primary btn-lg">
          <span>Get in Touch</span>
          <ArrowRight size={18} />
        </Link>
        <a
          href="mailto:tanjum643@gmail.com"
          className="btn btn-secondary btn-lg"
        >
          <Mail size={18} />
          <span>Email Sazid Directly</span>
        </a>
      </div>
    </div>
  );
};

export default BlogCTA;
