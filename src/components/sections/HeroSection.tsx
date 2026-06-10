"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  badge: string;
  headline: string;
  highlightedWord: string;
  subtext: string;
  primaryBtn: { label: string; href: string };
  ghostBtn: { label: string; href: string };
  backgroundImage: string;
  showScrollIndicator?: boolean;
}

// Stagger container
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1 },
};

export function HeroSection({
  badge,
  headline,
  highlightedWord,
  subtext,
  primaryBtn,
  ghostBtn,
  backgroundImage,
  showScrollIndicator = false,
}: HeroSectionProps) {
  // Split headline so the highlighted word is coloured inline.
  // The headline should NOT contain the highlightedWord — it's appended
  // as a second visual line. If it does appear inside headline we render
  // headline as-is and skip duplication.
  const headlineContainsHighlight = headline
    .toLowerCase()
    .includes(highlightedWord.toLowerCase());

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">

      {/* ── Background image ─────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />

      {/* ── Gradient overlay ─────────────────────────────────── */}
      {/* Left column: near-opaque surface-darker; right: faint primary tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(17,19,24,0.97) 0%, rgba(17,19,24,0.88) 42%, rgba(37,89,244,0.18) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Blueprint grid overlay (subtle) ──────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
            <EyebrowBadge label={badge} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-6 font-sans font-black uppercase leading-[0.92] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            {headlineContainsHighlight ? (
              // Inline: replace the word in place
              (() => {
                const idx = headline
                  .toLowerCase()
                  .indexOf(highlightedWord.toLowerCase());
                const before = headline.slice(0, idx);
                const match  = headline.slice(idx, idx + highlightedWord.length);
                const after  = headline.slice(idx + highlightedWord.length);
                return (
                  <>
                    {before}
                    <span className="text-primary">{match}</span>
                    {after}
                  </>
                );
              })()
            ) : (
              // Two-line: headline / highlightedWord on separate lines
              <>
                {headline}
                <br />
                <span className="text-primary">{highlightedWord}</span>
              </>
            )}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-6 font-sans text-base font-light leading-relaxed text-muted max-w-lg"
          >
            {subtext}
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            {/* Primary */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href={primaryBtn.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-sm px-5 py-2.5",
                  "font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white",
                  "bg-primary hover:bg-primary-glow transition-colors duration-200",
                  "shadow-[0_0_24px_rgba(37,89,244,0.4)] hover:shadow-[0_0_32px_rgba(77,123,255,0.55)]"
                )}
              >
                {primaryBtn.label}
                <ArrowRight />
              </Link>
            </motion.div>

            {/* Ghost */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href={ghostBtn.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-sm px-5 py-2.5",
                  "font-sans text-xs font-semibold uppercase tracking-[0.14em]",
                  "border border-white/20 text-foreground bg-transparent",
                  "hover:border-primary/60 hover:text-primary-glow transition-colors duration-200"
                )}
              >
                {ghostBtn.label}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* ── Bottom fade ──────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #0b0f19 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7h9M8 4l3.5 3L8 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
