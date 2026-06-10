import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChecklistItemProps {
  children: ReactNode;
  className?: string;
}

export function ChecklistItem({ children, className }: ChecklistItemProps) {
  return (
    <li className={cn("flex items-start gap-3", className)}>
      {/* Blue circle check */}
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 5.5l2 2 4-4"
            stroke="#2559f4"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="font-sans text-[13px] leading-snug text-muted">
        {children}
      </span>
    </li>
  );
}
