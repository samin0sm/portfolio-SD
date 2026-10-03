"use client";

import React, { useState } from "react";
import { TestimonialItem } from "@/src/data/home";
import { Quote, Star } from "lucide-react";

export interface ReviewCarouselMobileProps {
  reviews: TestimonialItem[];
}

export const ReviewCarouselMobile: React.FC<ReviewCarouselMobileProps> = ({ reviews }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }
  };

  const current = reviews[currentIndex];
  if (!current) return null;

  return (
    <div
      className="review-card"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ userSelect: "none" }}
    >
      <Quote className="review-quote-icon" />

      <div style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "0.75rem" }}>
        {Array.from({ length: current.rating }).map((_, i) => (
          <Star key={i} size={16} fill="#eab308" color="#eab308" />
        ))}
      </div>

      <p className="review-quote-text" style={{ fontSize: "1rem" }}>
        “{current.content}”
      </p>

      <div className="review-author">
        <div className="review-avatar-pill">{current.initials}</div>
        <div className="review-author-name">{current.name}</div>
        <div className="review-author-role">
          {current.role} &bull; {current.organization}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.25rem" }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            style={{
              width: i === currentIndex ? "20px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: i === currentIndex ? "var(--brand-accent)" : "var(--border-color)",
              transition: "all 0.2s ease",
            }}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarouselMobile;
