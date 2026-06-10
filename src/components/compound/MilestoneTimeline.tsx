"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface MilestoneTimelineProps {
  milestones: Milestone[];
  className?: string;
}

export function MilestoneTimeline({ milestones, className }: MilestoneTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={cn("w-full overflow-x-auto", className)}>
      {/* Scroll container — allows horizontal scroll on small screens */}
      <div className="relative min-w-[640px] pb-4">

        {/* ── Connecting line ────────────────────────────────── */}
        <div className="absolute left-0 right-0 top-[52px] h-px bg-white/[0.08]" aria-hidden="true">
          {/* Animated fill */}
          <motion.div
            className="h-full bg-primary/40 origin-left"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </div>

        {/* ── Milestones row ─────────────────────────────────── */}
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}
        >
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 + i * 0.12 }}
              className="flex flex-col items-center gap-0 px-3"
            >
              {/* Year — above the dot */}
              <span className="font-sans text-sm font-black text-primary mb-3">
                {m.year}
              </span>

              {/* Dot */}
              <div className="relative flex h-[9px] w-[9px] shrink-0 items-center justify-center">
                {/* Outer ring pulse on first load */}
                <motion.div
                  className="absolute h-full w-full rounded-full bg-primary/30"
                  initial={{ scale: 1 }}
                  animate={inView ? { scale: [1, 2, 1], opacity: [1, 0, 0] } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                />
                <div className="h-[9px] w-[9px] rounded-full bg-primary ring-2 ring-primary/30" />
              </div>

              {/* Title + description — below the dot */}
              <div className="mt-4 flex flex-col gap-1.5 text-center">
                <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-white">
                  {m.title}
                </h4>
                <p className="font-sans text-[12px] leading-relaxed text-muted">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
