"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VerticalCardProps {
  number: string | number;
  title: string;
  description?: string;
  image: string;
  href: string;
  className?: string;
}

export function VerticalCard({
  number,
  title,
  description,
  image,
  href,
  className,
}: VerticalCardProps) {
  // Zero-pad single digits: 1 → "01"
  const display =
    typeof number === "number"
      ? String(number).padStart(2, "0")
      : number;

  return (
    <motion.div
      whileHover="hover"
      className={cn("group relative overflow-hidden", className)}
    >
      <Link href={href} className="block aspect-[4/5] w-full">
        {/* Background image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Persistent dark base overlay */}
        <div className="absolute inset-0 bg-surface-darker/30" />

        {/* Bottom gradient — darkens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

        {/* Number watermark — top-left */}
        <span
          aria-hidden="true"
          className="absolute left-4 top-4 font-sans text-5xl font-black leading-none text-white/[0.12] select-none"
        >
          {display}
        </span>

        {/* Title — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Primary accent line, grows in on hover */}
          <motion.div
            variants={{
              hover: { scaleX: 1, opacity: 1 },
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="mb-2.5 h-[2px] w-10 bg-primary"
          />

          <h3 className="font-sans text-sm font-black uppercase tracking-[0.12em] text-white">
            {title}
          </h3>

          {/* Optional description — fades in on hover */}
          {description && (
            <motion.p
              variants={{ hover: { opacity: 1 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-1.5 font-sans text-[11px] leading-relaxed text-white/60 line-clamp-2"
            >
              {description}
            </motion.p>
          )}

          {/* "Explore →" reveal on hover */}
          <motion.p
            variants={{ hover: { opacity: 1, y: 0 } }}
            initial={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: description ? 0.05 : 0 }}
            className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-glow"
          >
            Explore →
          </motion.p>
        </div>
      </Link>
    </motion.div>
  );
}
