"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LeadershipQuoteProps {
  quote: string;
  personName: string;
  personTitle: string;
  personImage: string;
  className?: string;
}

export function LeadershipQuote({
  quote,
  personName,
  personTitle,
  personImage,
  className,
}: LeadershipQuoteProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center",
        className
      )}
    >
      {/* ── Left: quote ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        {/* Decorative opening mark */}
        <span
          aria-hidden="true"
          className="font-accent text-[96px] leading-none text-primary/20 select-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          &ldquo;
        </span>

        {/* Quote body — Playfair Display italic */}
        <blockquote
          className="font-accent text-xl font-normal italic leading-relaxed text-white sm:text-2xl lg:text-[1.6rem]"
          style={{ fontFamily: "var(--font-playfair)", marginTop: "-2.5rem" }}
        >
          {quote}
        </blockquote>

        {/* Blue accent rule */}
        <div className="h-px w-12 bg-primary" />

        {/* Person info */}
        <div className="flex items-center gap-4">
          {/* Circular photo */}
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/40">
            <Image
              src={personImage}
              alt={personName}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

          <div>
            <p className="font-sans text-sm font-bold text-white">{personName}</p>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {personTitle}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Right: larger photo ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative">
          {/* Photo frame */}
          <div className="relative h-[340px] w-[260px] overflow-hidden rounded-sm sm:h-[420px] sm:w-[320px]">
            <Image
              src={personImage}
              alt={personName}
              fill
              className="object-cover object-top grayscale"
              sizes="(max-width: 640px) 260px, 320px"
            />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background-dark to-transparent" />
          </div>

          {/* Name badge overlaid at bottom */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-sans text-xs font-black uppercase tracking-[0.1em] text-white">
              {personName}
            </p>
            <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.14em] text-muted">
              {personTitle}
            </p>
          </div>

          {/* Blue corner accent */}
          <div className="absolute -bottom-2 -left-2 h-10 w-[3px] bg-primary" />
          <div className="absolute -bottom-2 -left-2 h-[3px] w-10 bg-primary" />
        </div>
      </motion.div>
    </div>
  );
}
