"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AdvantageCardProps {
  icon: string;        // Material Symbol name
  title: string;
  description: string;
  className?: string;
}

export function AdvantageCard({
  icon,
  title,
  description,
  className,
}: AdvantageCardProps) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group flex gap-4 overflow-hidden",
        // No border-radius on the left — sharp edge flush with accent bar
        "rounded-r-sm",
        // Glass body
        "border border-white/[0.06] border-l-0",
        "backdrop-blur-[12px]",
        "p-5 pr-6",
        // Left border: always-on 4px solid primary
        "border-l-[4px] border-l-primary",
        // Hover: border brightens via ring trick
        "transition-[border-color,background-color] duration-300",
        "hover:border-l-primary-glow hover:border-white/10",
        className
      )}
      style={{ backgroundColor: "rgba(21,26,42,0.6)" }}
    >
      {/* Icon box — small square, no border-radius */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/20">
        <span
          className="material-symbols-outlined text-[18px] text-primary transition-colors duration-300 group-hover:text-primary-glow"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-white">
          {title}
        </h3>
        <p className="font-sans text-[12px] leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
