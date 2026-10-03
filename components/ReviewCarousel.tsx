"use client";

import React, { useState } from "react";
import { TestimonialItem } from "@/src/data/home";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export interface ReviewCarouselProps {
  reviews: TestimonialItem[];
}

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  if (!current) return null;

  return (
    <div className="review-carousel-wrapper">
      <div className="review-card">
        <Quote className="review-quote-icon" />

        <div style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "1rem" }}>
          {Array.from({ length: current.rating }).map((_, i) => (
            <Star key={i} size={18} fill="#eab308" color="#eab308" />
          ))}
        </div>

        <p className="review-quote-text">“{current.content}”</p>

        <div className="review-author">
          <div className="review-avatar-pill">{current.initials}</div>
          <div className="review-author-name">{current.name}</div>
          <div className="review-author-role">
            {current.role} &bull; {current.organization}
          </div>
          <span style={{ fontSize: "0.775rem", color: "var(--brand-accent)", marginTop: "0.25rem" }}>
            {current.relationship}
          </span>
        </div>

        <div className="review-controls">
          <button
            type="button"
            className="review-arrow-btn"
            onClick={prevReview}
            aria-label="Previous recommendation"
          >
            <ChevronLeft size={20} />
          </button>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
            {currentIndex + 1} / {reviews.length}
          </span>
          <button
            type="button"
            className="review-arrow-btn"
            onClick={nextReview}
            aria-label="Next recommendation"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
