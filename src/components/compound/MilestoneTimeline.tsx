"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface MilestoneTimelineProps {
  milestones: Milestone[];
  className?: string;
}

const iconStyle = { fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" };

export function MilestoneTimeline({ milestones, className }: MilestoneTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {/* ── Mobile / tablet — vertical timeline ───────────────── */}
      <div className="relative flex flex-col gap-8 lg:hidden">
        {/* Connecting line */}
        <div className="absolute bottom-3 left-5 top-3 w-px bg-white/[0.08]" aria-hidden="true">
          <motion.div
            className="w-full bg-primary/40 origin-top"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </div>

        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 + i * 0.12 }}
            whileHover={{ x: 4 }}
            className="group relative flex items-start gap-4 rounded-sm border border-transparent p-2 transition-colors duration-300 hover:border-white/[0.06]"
            style={{ backgroundColor: "transparent" }}
          >
            {/* Icon circle */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[20px] text-primary" style={iconStyle} aria-hidden="true">
                {m.icon}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 pt-1.5">
              <span className="font-sans text-sm font-black text-primary">{m.year}</span>
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

      {/* ── Desktop — horizontal timeline ─────────────────────── */}
      <div className="relative hidden lg:block">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-5 h-px bg-white/[0.08]" aria-hidden="true">
          <motion.div
            className="h-full bg-primary/40 origin-left"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </div>

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
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center px-2"
            >
              {/* Icon circle — sits on the connecting line */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-105">
                {/* Pulse ring on first reveal */}
                <motion.div
                  className="absolute h-full w-full rounded-full bg-primary/30"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={inView ? { scale: [1, 1.6, 1.6], opacity: [1, 0, 0] } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                />
                <span className="material-symbols-outlined relative text-[20px] text-primary" style={iconStyle} aria-hidden="true">
                  {m.icon}
                </span>
              </div>

              {/* Hover card */}
              <div
                className={cn(
                  "mt-4 flex flex-col items-center gap-1.5 rounded-sm border border-transparent p-3 text-center",
                  "transition-colors duration-300 group-hover:border-white/[0.06]"
                )}
                style={{ backgroundColor: "transparent" }}
              >
                <span className="font-sans text-sm font-black text-primary">{m.year}</span>
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
