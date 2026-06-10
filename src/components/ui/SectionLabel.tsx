import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionLabel({
  text,
  align = "left",
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary",
        align === "center" && "text-center",
        className
      )}
    >
      {text}
    </p>
  );
}
