"use client";

import React, { useState } from "react";
import { BlogPost, blogPostsData } from "@/src/data/blog";
import { blogDetailsData, BlogDetail } from "@/src/data/blogDetails";
import BlogGrid from "./BlogGrid";
import { Search, X, Clock, Calendar, Quote, CheckCircle2 } from "lucide-react";

export const BlogClient: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(null);

  const categories = ["all", "Banking Operations", "Data & Productivity", "Documentation", "Customer Service"];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const activeArticle: BlogDetail | null = activeArticleSlug ? blogDetailsData[activeArticleSlug] || null : null;

  return (
    <div>
      {/* Search & Category Filter Bar */}
      <div className="blog-filter-bar">
        <div className="tabs-nav" style={{ margin: 0 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "all" ? "All Categories" : cat}
            </button>
          ))}
        </div>

        <div className="blog-search-wrapper">
          <Search
            size={16}
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)",
            }}
          />
          <input
            type="text"
            className="form-input"
            placeholder="Search articles by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: "36px" }}
          />
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <BlogGrid posts={filteredPosts} onOpenArticle={(slug) => setActiveArticleSlug(slug)} />
      ) : (
        <div
          className="stat-card"
          style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}
        >
          No insights or articles matched your search query. Try searching with different terms.
        </div>
      )}

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div
          className="modal-backdrop active"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveArticleSlug(null);
          }}
        >
          <div className="modal-dialog" role="dialog" aria-modal="true" style={{ maxWidth: "800px" }}>
            <div className="modal-header">
              <div>
                <span className="section-tag" style={{ margin: 0, padding: "0.2rem 0.6rem", fontSize: "0.75rem" }}>
                  {activeArticle.category}
                </span>
                <h3 className="modal-title" style={{ marginTop: "0.5rem" }}>
                  {activeArticle.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginTop: "0.35rem",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <Calendar size={14} /> {activeArticle.publishedAt}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <Clock size={14} /> {activeArticle.readTime}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveArticleSlug(null)}
                aria-label="Close article reader"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              {activeArticle.content.map((sec, idx) => (
                <div key={idx} style={{ marginBottom: "1.75rem" }}>
                  {sec.heading && (
                    <h4
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--brand-primary)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {sec.heading}
                    </h4>
                  )}
                  {sec.paragraphs &&
                    sec.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        style={{
                          fontSize: "0.925rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.7,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {p}
                      </p>
                    ))}

                  {sec.quote && (
                    <div
                      style={{
                        backgroundColor: "var(--brand-light)",
                        borderLeft: "4px solid var(--brand-accent)",
                        padding: "1rem 1.25rem",
                        margin: "1.25rem 0",
                        borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                        fontStyle: "italic",
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      “{sec.quote}”
                    </div>
                  )}

                  {sec.bullets && (
                    <ul style={{ paddingLeft: "1.25rem", listStyle: "disc", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      {sec.bullets.map((b, bi) => (
                        <li key={bi} style={{ marginBottom: "0.4rem" }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border-color)",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={activeArticle.author.avatar}
                  alt={activeArticle.author.name}
                  style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{activeArticle.author.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{activeArticle.author.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogClient;
