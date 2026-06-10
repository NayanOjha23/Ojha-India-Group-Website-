import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
  heading?: string;
  address: string;
  phone: string;
  fax?: string;
  email: string;
  emailLabel?: string;
  extraCards?: ReactNode[];
  className?: string;
}

function MSIcon({ name }: { name: string }) {
  return (
    <span
      className="material-symbols-outlined text-[18px] text-primary"
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

interface IconRowProps {
  icon: string;
  children: ReactNode;
}

function IconRow({ icon, children }: IconRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-primary/15">
        <MSIcon name={icon} />
      </div>
      <div className="font-sans text-[13px] leading-snug text-muted">{children}</div>
    </div>
  );
}

export function ContactInfo({
  heading = "Global Headquarters",
  address,
  phone,
  fax,
  email,
  emailLabel = "Institutional Partnerships",
  extraCards,
  className,
}: ContactInfoProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Main info card */}
      <div className="rounded-sm border border-white/[0.06] bg-surface-dark p-6">
        {/* Heading */}
        <h2 className="mb-5 font-sans text-xs font-black uppercase tracking-[0.18em] text-white">
          {heading}
        </h2>

        <div className="flex flex-col gap-4">
          {/* Address */}
          <IconRow icon="location_on">
            {/* Split on comma for multi-line */}
            {address.split(",").map((line, i) => (
              <span key={i} className="block">
                {line.trim()}
              </span>
            ))}
          </IconRow>

          {/* Phone */}
          <IconRow icon="call">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hover:text-white transition-colors"
            >
              {phone}
            </a>
          </IconRow>

          {/* Fax (optional) */}
          {fax && (
            <IconRow icon="print">
              <span>{fax}</span>
            </IconRow>
          )}

          {/* Email */}
          <div className="mt-1 border-t border-white/[0.06] pt-4">
            <p className="mb-1.5 font-sans text-[11px] font-semibold text-white/70">
              {emailLabel}
            </p>
            <div className="flex items-center gap-2">
              <MSIcon name="mail" />
              <a
                href={`mailto:${email}`}
                className="font-sans text-[13px] text-primary transition-colors hover:text-primary-glow"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Extra info cards (e.g. "24-hour response guarantee") */}
      {extraCards?.map((card, i) => (
        <div
          key={i}
          className="rounded-sm border border-white/[0.06] bg-surface-dark p-5"
        >
          {card}
        </div>
      ))}
    </div>
  );
}

/* ── Helper: InfoCard ────────────────────────────────────────
   Pre-built card for use inside extraCards[].
   Usage:
     extraCards={[
       <InfoCard icon="timer" title="24-Hour Response Guarantee"
         description="All enterprise enquiries receive a response within 24 business hours." />
     ]}
────────────────────────────────────────────────────────────── */
interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

export function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25">
        <span
          className="material-symbols-outlined text-[20px] text-primary"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-sans text-[13px] font-bold text-white">{title}</p>
        <p className="font-sans text-[12px] leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
