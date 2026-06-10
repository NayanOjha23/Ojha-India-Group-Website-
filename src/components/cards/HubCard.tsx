import { cn } from "@/lib/utils";

interface HubCardProps {
  name: string;
  city: string;
  phone: string;
  direction: "up" | "down" | "left" | "right";
  className?: string;
}

const ARROW_PATHS: Record<HubCardProps["direction"], string> = {
  up:    "M12 19V5M5 12l7-7 7 7",
  down:  "M12 5v14M5 12l7 7 7-7",
  left:  "M19 12H5M12 5l-7 7 7 7",
  right: "M5 12h14M12 5l7 7-7 7",
};

export function HubCard({ name, city, phone, direction, className }: HubCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-2 rounded-sm border border-white/[0.06] p-5",
        "bg-surface-dark transition-colors duration-200 hover:border-white/[0.12]",
        className
      )}
    >
      {/* Directional arrow — top-right */}
      <div className="absolute right-4 top-4 text-muted/50">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={ARROW_PATHS[direction]} />
        </svg>
      </div>

      {/* Hub name */}
      <h3 className="font-sans text-sm font-bold text-white pr-6">
        {name}
      </h3>

      {/* City + phone */}
      <p className="font-sans text-[13px] text-muted">{city}</p>
      <p className="font-sans text-[13px] text-muted">{phone}</p>
    </div>
  );
}
