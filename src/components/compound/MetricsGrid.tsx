"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { MetricCard } from "@/components/cards/MetricCard";

interface Metric {
  value: string;
  unit?: string;
  label: string;
}

interface MetricsGridProps {
  metrics: Metric[];
  className?: string;
}

export function MetricsGrid({ metrics, className }: MetricsGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={cn("grid grid-cols-2 gap-4 lg:grid-cols-4", className)}>
      {metrics.map((m, i) => (
        <MetricCard key={m.label} {...m} inView={inView} animateValue delay={i * 0.08} />
      ))}
    </div>
  );
}
