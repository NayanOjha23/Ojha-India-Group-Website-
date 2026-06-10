"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
  unit?: string;
  description?: string;
}

interface StatsBarProps {
  stats: Stat[];
  className?: string;
}

export function StatsBar({ stats, className }: StatsBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={cn(
        "border-y border-white/[0.06] bg-surface-darker/60 py-8",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={cn(
                "flex flex-col gap-1.5 px-6 py-2",
                // Right border on all but last in each row
                "border-r border-white/[0.06] last:border-r-0",
                // Remove right border on 2nd item on mobile (2-col grid)
                i % 2 === 1 && "lg:border-r border-r-0"
              )}
            >
              {/* Small-caps label */}
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </span>

              {/* Value + unit */}
              <div className="flex items-baseline gap-0.5">
                <span className="font-sans text-3xl font-black leading-none tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-sans text-lg font-bold text-primary sm:text-xl">
                    {stat.unit}
                  </span>
                )}
              </div>

              {/* Optional descriptor */}
              {stat.description && (
                <span className="font-sans text-[11px] text-muted/70">
                  {stat.description}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
