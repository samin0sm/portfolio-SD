import React from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogClient from "@/components/blog/BlogClient";
import BlogCTA from "@/components/blog/BlogCTA";

export const metadata = {
  title: "Insights & Articles | Tanvir Anjum Sazid",
  description:
    "Practical guides and thought leadership on banking KYC compliance, Microsoft Excel data formulas, SOP authoring, and customer conflict resolution.",
};

export default function InsightsPage() {
  return (
    <div className="section" style={{ paddingTop: "calc(var(--nav-height) + 2.5rem)" }}>
      <div className="container">
        <BlogHero />
        <BlogClient />
        <BlogCTA />
      </div>
    </div>
  );
}
