"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CountUpValue } from "@/components/ui/CountUpValue";

interface MetricCardProps {
  value: string;
  unit?: string;
  label: string;
  className?: string;
  inView?: boolean;
  animateValue?: boolean;
  delay?: number;
}

export function MetricCard({
  value,
  unit,
  label,
  className,
  inView = false,
  animateValue = false,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      whileHover="hover"
      variants={{ hover: { y: -4 } }}
      initial={{ y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col items-start gap-1.5 overflow-hidden rounded-sm border border-white/[0.06] p-5",
        "backdrop-blur-[12px] transition-colors duration-300 hover:border-white/10",
        className
      )}
      style={{ backgroundColor: "rgba(21,26,42,0.6)" }}
    >
      {/* Glow orb — fades in on hover */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Oversized number */}
      <div className="relative flex items-baseline gap-0.5 leading-none">
        <span className="font-sans text-5xl font-black text-primary tabular-nums">
          {animateValue ? (
            <CountUpValue value={value} inView={inView} delay={delay} />
          ) : (
            value
          )}
        </span>
        {unit && (
          <span className="font-sans text-2xl font-black text-primary/70">
            {unit}
          </span>
        )}
      </div>

      {/* Label */}
      <span className="relative font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
    </motion.div>
  );
}
