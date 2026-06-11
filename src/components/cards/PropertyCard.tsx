"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  image: string;
  badge?: { label: string; color?: "blue" | "green" | "amber" };
  title: string;
  features: string[];
  ctaLabel?: string;
  href?: string;
  className?: string;
  details?: {
    description: string;
    specs: { label: string; value: string }[];
    amenities: string[];
  };
}

const badgeColors = {
  blue:  "bg-primary/20 text-primary-glow border-primary/30",
  green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export function PropertyCard({
  image,
  badge,
  title,
  features,
  ctaLabel = "Details",
  href,
  className,
  details,
}: PropertyCardProps) {
  const badgeStyle = badgeColors[badge?.color ?? "blue"];

  return (
    <motion.div
      whileHover="hover"
      tabIndex={details ? 0 : undefined}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-sm",
        "border border-white/[0.06] bg-surface-dark",
        "transition-colors duration-300 hover:border-white/10 focus-within:outline-none",
        className
      )}
    >
      {/* ── Image (top ~60%) ─────────────────────────────── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient scrim at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent" />

        {/* Status badge */}
        {badge && (
          <span
            className={cn(
              "absolute right-3 top-3",
              "inline-flex items-center rounded-sm border px-2 py-0.5",
              "font-sans text-[9px] font-bold uppercase tracking-[0.18em]",
              badgeStyle
            )}
          >
            {badge.label}
          </span>
        )}
      </div>

      {/* ── Body ─────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title */}
        <h3 className="font-sans text-sm font-black uppercase tracking-[0.1em] text-white">
          {title}
        </h3>

        {/* Feature bullets */}
        <ul className="flex flex-col gap-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              {/* Blue dash bullet */}
              <span
                className="mt-[5px] h-[6px] w-[6px] shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="font-sans text-[12px] leading-snug text-muted">
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* Separator */}
        {href && (
          <div className="mt-auto pt-3 border-t border-white/[0.06]">
            <Link
              href={href}
              className="inline-flex items-center gap-1 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-glow"
            >
              {ctaLabel}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}
      </div>

      {/* ── Hover detail panel ───────────────────────────── */}
      {details && (
        <div
          className={cn(
            "invisible absolute inset-0 z-10 flex translate-y-1 flex-col justify-between gap-3 overflow-hidden rounded-sm p-5 opacity-0",
            "border border-primary/20 bg-surface-dark/95 backdrop-blur-[12px]",
            "transition-all duration-300",
            "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
            "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
          )}
        >
          <div className="flex flex-col gap-2">
            <h3 className="font-sans text-sm font-black uppercase tracking-[0.1em] text-white">
              {title}
            </h3>
            <p className="font-sans text-[12px] leading-relaxed text-muted">
              {details.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
            {details.specs.map((s) => (
              <div key={s.label}>
                <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-muted/70">
                  {s.label}
                </p>
                <p className="font-sans text-[12px] font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {details.amenities.map((a) => (
              <span
                key={a}
                className="rounded-sm border border-white/10 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/70"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
