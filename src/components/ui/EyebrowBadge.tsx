"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EyebrowBadgeProps {
  label: string;
  className?: string;
}

export function EyebrowBadge({ label, className }: EyebrowBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1",
        "border-primary/40 bg-primary/10",
        className
      )}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-primary-glow"
          animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
      </span>

      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-glow">
        {label}
      </span>
    </div>
  );
}
