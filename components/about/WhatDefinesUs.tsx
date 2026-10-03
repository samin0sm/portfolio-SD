import React from "react";
import { whatDefinesUs } from "@/src/data/about";
import { CheckCircle2, Shield, MessageSquare, TrendingUp } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "check-circle":
      return <CheckCircle2 size={28} />;
    case "shield":
      return <Shield size={28} />;
    case "message-square":
      return <MessageSquare size={28} />;
    case "trending-up":
      return <TrendingUp size={28} />;
    default:
      return <CheckCircle2 size={28} />;
  }
};

export const WhatDefinesUs: React.FC = () => {
  return (
    <div className="services-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      {whatDefinesUs.map((item) => (
        <div key={item.id} className="stat-card" style={{ padding: "1.75rem" }}>
          <div style={{ color: "var(--brand-accent)", marginBottom: "1rem" }}>{getIcon(item.icon)}</div>
          <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h4>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WhatDefinesUs;
