"use client";

import { useRef } from "react";
import { PropertyCard } from "@/components/cards/PropertyCard";
import type { DivisionFacility } from "@/lib/warehousing-divisions";

interface FacilityPortfolioProps {
  items: DivisionFacility[];
}

export function FacilityPortfolio({ items }: FacilityPortfolioProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  if (items.length <= 3) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <PropertyCard key={f.title} {...f} />
        ))}
      </div>
    );
  }

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const amount = card ? card.offsetWidth + 20 : track.clientWidth * 0.85;
    track.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((f) => (
          <div
            key={f.title}
            data-carousel-card
            className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[32%]"
          >
            <PropertyCard {...f} className="h-full" />
          </div>
        ))}
      </div>

      {/* Carousel nav */}
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous facilities"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.06] bg-surface-dark text-white transition-colors hover:border-primary/30 hover:text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next facilities"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.06] bg-surface-dark text-white transition-colors hover:border-primary/30 hover:text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
