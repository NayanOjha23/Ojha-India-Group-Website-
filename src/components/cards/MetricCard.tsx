import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  unit?: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, unit, label, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-1.5 rounded-sm border border-white/[0.06] p-5",
        "backdrop-blur-[12px]",
        className
      )}
      style={{ backgroundColor: "rgba(21,26,42,0.6)" }}
    >
      {/* Oversized number */}
      <div className="flex items-baseline gap-0.5 leading-none">
        <span className="font-sans text-5xl font-black text-primary">
          {value}
        </span>
        {unit && (
          <span className="font-sans text-2xl font-black text-primary/70">
            {unit}
          </span>
        )}
      </div>

      {/* Label */}
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
    </div>
  );
}
