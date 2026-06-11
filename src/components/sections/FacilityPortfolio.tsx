"use client";

import { useEffect, useRef, useState } from "react";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { cn } from "@/lib/utils";
import type { DivisionFacility } from "@/lib/warehousing-divisions";

interface FacilityPortfolioProps {
  items: DivisionFacility[];
}

const SPOTLIGHT_COUNT = 3;
const CARD_WIDTH = 30; // % of track width
const PEEK = 5; // % of track width visible as a blurred peek on each edge
const AUTO_SCROLL_MS = 5000;

export function FacilityPortfolio({ items }: FacilityPortfolioProps) {
  const isCarousel = items.length > SPOTLIGHT_COUNT;
  const maxIndex = Math.max(0, items.length - SPOTLIGHT_COUNT);
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!isCarousel) return;
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((i) => (i + 1) % (maxIndex + 1));
    }, AUTO_SCROLL_MS);
    return () => clearInterval(interval);
  }, [isCarousel, maxIndex]);

  if (!isCarousel) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <PropertyCard key={f.title} {...f} />
        ))}
      </div>
    );
  }

  const goTo = (index: number) => {
    const span = maxIndex + 1;
    setActiveIndex(((index % span) + span) % span);
  };

  return (
    <div
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(calc(${PEEK}% - ${activeIndex * CARD_WIDTH}%))` }}
        >
          {items.map((f, i) => {
            const isSpotlight = i >= activeIndex && i < activeIndex + SPOTLIGHT_COUNT;
            return (
              <div key={f.title} className="shrink-0 px-2.5" style={{ width: `${CARD_WIDTH}%` }}>
                <div
                  className={cn(
                    "transition-all duration-700 ease-out",
                    isSpotlight
                      ? "scale-100 opacity-100 blur-none"
                      : "scale-[0.96] opacity-40 blur-[2px]"
                  )}
                >
                  <PropertyCard {...f} className="h-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous facilities"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.06] bg-surface-dark text-white transition-colors hover:border-primary/30 hover:text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-white/20"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
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
