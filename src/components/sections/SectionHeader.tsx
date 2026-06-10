import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <SectionLabel text={eyebrow} align={align} />
      )}

      <h2
        className={cn(
          "font-sans font-black uppercase leading-[0.95] tracking-tight text-white",
          "text-3xl sm:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "font-sans text-sm font-light leading-relaxed text-muted",
            centered ? "max-w-xl" : "max-w-lg"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
