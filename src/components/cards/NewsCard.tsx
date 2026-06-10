import Link from "next/link";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  category: string;
  date: string;
  headline: string;
  description?: string;
  href: string;
  className?: string;
}

// Deterministic colour from category string so the same category
// always gets the same colour across renders.
function categoryColor(cat: string): string {
  const s = cat.toLowerCase();
  if (s.includes("financ") || s.includes("invest")) return "bg-amber-500/15 text-amber-400 border-amber-500/30";
  if (s.includes("solar") || s.includes("sustain") || s.includes("green")) return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
  if (s.includes("logis") || s.includes("urban") || s.includes("infra")) return "bg-violet-500/15 text-violet-400 border-violet-500/30";
  // default: primary blue
  return "bg-primary/15 text-primary-glow border-primary/25";
}

export function NewsCard({ category, date, headline, description, href, className }: NewsCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-3 rounded-sm border border-white/[0.06] p-5",
        "bg-surface-dark transition-colors duration-200 hover:border-white/[0.12]",
        className
      )}
    >
      {/* Category pill + date row */}
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center rounded-sm border px-2 py-0.5",
            "font-sans text-[9px] font-bold uppercase tracking-[0.18em]",
            categoryColor(category)
          )}
        >
          {category}
        </span>
        <time
          className="font-sans text-[11px] text-muted/60 shrink-0"
          dateTime={date}
        >
          {date}
        </time>
      </div>

      {/* Headline — 2-line clamp */}
      <h3 className="font-sans text-[14px] font-semibold leading-snug text-white line-clamp-2">
        {headline}
      </h3>

      {/* Optional description */}
      {description && (
        <p className="font-sans text-[12px] leading-relaxed text-muted line-clamp-2">
          {description}
        </p>
      )}

      {/* Read link */}
      <Link
        href={href}
        className="mt-auto font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-primary-glow"
      >
        Read →
      </Link>
    </article>
  );
}
