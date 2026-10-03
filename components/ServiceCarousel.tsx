"use client";

import React, { useState } from "react";
import { ServiceItem } from "@/src/data/service";
import ServiceCard from "./ServiceCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ServiceCarouselProps {
  services: ServiceItem[];
}

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, services.length - 3) : Math.max(0, prev - 1)));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= services.length - 3 ? 0 : prev + 1));
  };

  const visibleServices = services.slice(startIndex, startIndex + 3);

  return (
    <div className="service-carousel-container">
      <div className="services-grid">
        {(visibleServices.length > 0 ? visibleServices : services.slice(0, 3)).map((srv) => (
          <ServiceCard key={srv.id} service={srv} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
        <button
          type="button"
          className="review-arrow-btn"
          onClick={prevSlide}
          aria-label="Previous services slide"
        >
          <ChevronLeft size={20} />
        </button>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
          {startIndex + 1} - {Math.min(startIndex + 3, services.length)} of {services.length}
        </span>
        <button
          type="button"
          className="review-arrow-btn"
          onClick={nextSlide}
          aria-label="Next services slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCarousel;
