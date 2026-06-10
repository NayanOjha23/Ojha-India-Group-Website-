import { cn } from "@/lib/utils";

interface SpecRowProps {
  label: string;
  value: string;
  className?: string;
}

export function SpecRow({ label, value, className }: SpecRowProps) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-4 border-b border-white/[0.06] py-4",
        "first:border-t first:border-t-white/[0.06]",
        className
      )}
    >
      <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
        {label}
      </span>
      {/* Dot leader */}
      <span className="flex-1 border-b border-dashed border-white/[0.08]" aria-hidden="true" />
      <span className="font-sans text-[13px] font-bold tabular-nums text-primary shrink-0">
        {value}
      </span>
    </div>
  );
}
