import React from "react";
import { BlogPost } from "@/src/data/blog";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface BlogCardProps {
  post: BlogPost;
  onOpenArticle?: (slug: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onOpenArticle }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <span className="section-tag" style={{ margin: 0, padding: "0.2rem 0.6rem", fontSize: "0.75rem" }}>
          {post.category}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
          <Clock size={13} />
          <span>{post.readTime}</span>
        </div>
      </div>

      <h3 className="project-card-title" style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
        {post.title}
      </h3>

      <p className="project-card-desc">{post.excerpt}</p>

      <div className="project-skills" style={{ marginBottom: "1.25rem" }}>
        {post.tags.map((tag, idx) => (
          <span key={idx} className="project-skill-pill">
            #{tag}
          </span>
        ))}
      </div>

      <div className="project-card-footer">
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          <Calendar size={14} />
          <span>{post.publishedAt}</span>
        </div>

        {onOpenArticle ? (
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onOpenArticle(post.slug)}
          >
            <span>Read Article</span>
            <ArrowRight size={14} />
          </button>
        ) : (
          <Link href={`/insights?slug=${post.slug}`} className="btn btn-secondary btn-sm">
            <span>Read Article</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
