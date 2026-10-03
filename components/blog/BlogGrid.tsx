import React from "react";
import { BlogPost } from "@/src/data/blog";
import BlogCard from "./BlogCard";

export interface BlogGridProps {
  posts: BlogPost[];
  onOpenArticle?: (slug: string) => void;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, onOpenArticle }) => {
  return (
    <div className="projects-grid">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onOpenArticle={onOpenArticle} />
      ))}
    </div>
  );
};

export default BlogGrid;
