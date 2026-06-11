"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;          // Material Symbol name e.g. "build", "support_agent"
  title: string;
  description: string;
  link?: { label: string; href: string };
  variant?: "default" | "green";
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  link,
  variant = "default",
  className,
}: FeatureCardProps) {
  const isGreen = variant === "green";

  return (
    <motion.div
      whileHover="hover"
      variants={{ hover: { y: -4 } }}
      initial={{ y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-sm p-6",
        "border backdrop-blur-[12px] transition-colors duration-300",
        isGreen
          ? "border-emerald-500/15 hover:border-emerald-500/30"
          : "border-white/5 hover:border-white/10",
        className
      )}
      style={{
        backgroundColor: isGreen
          ? "rgba(16,42,28,0.55)"
          : "rgba(21,26,42,0.6)",
      }}
    >
      {/* Glow orb — fades in on hover */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl",
          isGreen ? "bg-emerald-500/10" : "bg-primary/10"
        )}
        aria-hidden="true"
      />

      {/* 4px left accent bar — slides in on hover */}
      <motion.div
        variants={{ hover: { opacity: 1, scaleY: 1 } }}
        initial={{ opacity: 0, scaleY: 0.4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[3px] rounded-l-sm",
          isGreen ? "bg-emerald-500" : "bg-primary"
        )}
      />

      {/* Icon circle */}
      <motion.div
        variants={{ hover: { scale: 1.08 } }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1",
          isGreen
            ? "bg-emerald-500/15 ring-emerald-500/25"
            : "bg-primary/15 ring-primary/25"
        )}
      >
        <span
          className={cn(
            "material-symbols-outlined text-[20px]",
            isGreen ? "text-emerald-400" : "text-primary"
          )}
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      </motion.div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-xs font-black uppercase tracking-[0.12em] text-white">
          {title}
        </h3>
        <p className="font-sans text-[13px] leading-relaxed text-muted">
          {description}
        </p>
      </div>

      {/* Optional link */}
      {link && (
        <Link
          href={link.href}
          className={cn(
            "mt-auto font-sans text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors",
            isGreen
              ? "text-emerald-400 hover:text-emerald-300"
              : "text-primary hover:text-primary-glow"
          )}
        >
          {link.label} →
        </Link>
      )}
    </motion.div>
  );
}
