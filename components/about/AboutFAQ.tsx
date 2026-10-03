"use client";

import React, { useState } from "react";
import { faqsData } from "@/src/data/about";
import { ChevronDown, HelpCircle } from "lucide-react";

export const AboutFAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {faqsData.map((faq) => {
        const isOpen = openFaqId === faq.id;
        return (
          <div
            key={faq.id}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              transition: "all var(--transition-fast)",
            }}
          >
            <button
              type="button"
              onClick={() => toggleFaq(faq.id)}
              style={{
                width: "100%",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "left",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text-primary)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <HelpCircle size={18} color="var(--brand-accent)" />
                <span>{faq.question}</span>
              </div>
              <ChevronDown
                size={18}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease",
                  color: "var(--text-muted)",
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "0 1.5rem 1.25rem 1.5rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "1rem",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutFAQ;
