import { cn } from "@/lib/utils";

interface LogoStripProps {
  eyebrow?: string;
  logos: string[];          // company name strings (swap for <Image> once assets exist)
  className?: string;
}

export function LogoStrip({
  eyebrow = "Trusted by Global Leaders",
  logos,
  className,
}: LogoStripProps) {
  return (
    <div className={cn("border-y border-white/[0.05] py-10", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-7 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-muted/50">
            {eyebrow}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <span
              key={name}
              className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-muted/30 transition-colors duration-200 hover:text-muted/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
