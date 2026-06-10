"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { CountUpValue } from "@/components/ui/CountUpValue";
import { FadeInSection } from "@/components/ui/FadeInSection";

const PORTFOLIO_BARS = [30, 45, 60, 75, 95];

const REGIONS = [
  { label: "North", className: "bg-primary" },
  { label: "West", className: "bg-primary/70" },
  { label: "South", className: "bg-primary/40" },
];

export function InstitutionalExcellence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <FadeInSection className="border-t border-white/[0.04] py-20" delay={0.1}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* Left — heading, copy, KPI rows */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            <h2 className="font-sans text-4xl font-black uppercase leading-[1.05] tracking-tight text-white lg:text-5xl">
              Institutional
              <br />
              <span className="text-primary-glow">Excellence</span>
            </h2>
            <p className="font-sans text-sm leading-relaxed text-muted">
              Our data-driven approach allows for transparent scaling. We
              consistently outpace market benchmarks through strategic
              asset allocation.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="flex items-center justify-between rounded-sm border border-white/[0.06] bg-surface-dark/50 p-4"
              >
                <span className="font-sans text-sm font-bold uppercase text-white/80">
                  YoY Growth
                </span>
                <span className="font-sans text-sm font-black tabular-nums text-emerald-400">
                  <CountUpValue value="+18.5" inView={inView} delay={0.4} />%
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="flex items-center justify-between rounded-sm border border-white/[0.06] bg-surface-dark/50 p-4"
              >
                <span className="font-sans text-sm font-bold uppercase text-white/80">
                  Occupancy Rate
                </span>
                <span className="font-sans text-sm font-black tabular-nums text-primary">
                  <CountUpValue value="96.2" inView={inView} delay={0.5} />%
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right — charts */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">

            {/* Portfolio growth bar chart */}
            <div
              className="rounded-sm border border-white/[0.05] p-6 backdrop-blur-[12px]"
              style={{ backgroundColor: "rgba(21,26,42,0.6)" }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h4 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                  Portfolio Growth
                </h4>
                <span className="font-sans text-[11px] text-muted">2020 – 2024</span>
              </div>
              <div className="flex h-48 items-end gap-2 px-2">
                {PORTFOLIO_BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: "0%" }}
                    animate={inView ? { height: `${h}%` } : {}}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                    className={cn(
                      "w-full rounded-t-sm",
                      i === 4 ? "bg-primary" : i === 3 ? "bg-primary/60" : "bg-white/10"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* National capacity donut */}
            <div
              className="rounded-sm border border-white/[0.05] p-6 backdrop-blur-[12px]"
              style={{ backgroundColor: "rgba(21,26,42,0.6)" }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h4 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                  National Capacity
                </h4>
                <span className="font-sans text-[11px] text-muted">Regional Split</span>
              </div>
              <div className="relative flex h-48 items-center justify-center">
                <motion.div
                  initial={{ rotate: -135, opacity: 0, scale: 0.85 }}
                  animate={inView ? { rotate: 45, opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-32 w-32 rounded-full border-[12px] border-white/10"
                  style={{
                    borderTopColor: "#2559f4",
                    borderRightColor: "rgba(37,89,244,0.7)",
                    borderBottomColor: "rgba(37,89,244,0.4)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-sans text-2xl font-black tabular-nums text-white">
                    <CountUpValue value="10" inView={inView} delay={0.4} duration={1} />M
                  </span>
                  <span className="font-sans text-[10px] uppercase text-muted">Sq. Ft.</span>
                </div>
              </div>
              <div className="mt-2 flex justify-center gap-4">
                {REGIONS.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-1.5"
                  >
                    <span className={cn("h-2 w-2 rounded-full", r.className)} />
                    <span className="font-sans text-[10px] text-muted">{r.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
