import React from "react";
import { OverviewTab } from "@/src/data/home";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface OverviewTabContentProps {
  tab: OverviewTab;
}

export const OverviewTabContent: React.FC<OverviewTabContentProps> = ({ tab }) => {
  return (
    <div className="tab-panel">
      <div className="tab-main-info">
        <span className="section-tag" style={{ marginBottom: "0.75rem" }}>
          {tab.badge}
        </span>
        <h3 className="tab-content-title">{tab.title}</h3>
        <p className="tab-content-desc">{tab.description}</p>

        <div className="tab-highlights">
          {tab.highlights.map((h, i) => (
            <div key={i} className="tab-highlight-item">
              <CheckCircle2 />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/services" className="btn btn-secondary btn-sm">
            <span>Explore Related Services</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="tab-metrics-box">
        <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
          Key Performance Indicators
        </h4>
        {tab.metrics.map((m, i) => (
          <div key={i} className="tab-metric-row">
            <span className="tab-metric-label">{m.label}</span>
            <span className="tab-metric-val">{m.value}</span>
          </div>
        ))}

        <div style={{ marginTop: "0.5rem" }}>
          <span style={{ fontSize: "0.775rem", color: "var(--text-muted)", fontWeight: 600, display: "block", marginBottom: "0.35rem" }}>
            Relevant Keywords:
          </span>
          <div className="tag-list">
            {tab.tags.map((tag, idx) => (
              <span key={idx} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTabContent;
