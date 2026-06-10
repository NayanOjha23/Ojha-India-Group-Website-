import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CornerFrameProps {
  children: ReactNode;
  className?: string;
}

export function CornerFrame({ children, className }: CornerFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Top-left */}
      <span className="pointer-events-none absolute left-0 top-0 z-10">
        <span className="absolute left-0 top-0 h-px w-5 bg-primary" />
        <span className="absolute left-0 top-0 h-5 w-px bg-primary" />
      </span>

      {/* Top-right */}
      <span className="pointer-events-none absolute right-0 top-0 z-10">
        <span className="absolute right-0 top-0 h-px w-5 bg-primary" />
        <span className="absolute right-0 top-0 h-5 w-px bg-primary" />
      </span>

      {/* Bottom-left */}
      <span className="pointer-events-none absolute bottom-0 left-0 z-10">
        <span className="absolute bottom-0 left-0 h-px w-5 bg-primary" />
        <span className="absolute bottom-0 left-0 h-5 w-px bg-primary" />
      </span>

      {/* Bottom-right */}
      <span className="pointer-events-none absolute bottom-0 right-0 z-10">
        <span className="absolute bottom-0 right-0 h-px w-5 bg-primary" />
        <span className="absolute bottom-0 right-0 h-5 w-px bg-primary" />
      </span>

      {children}
    </div>
  );
}
