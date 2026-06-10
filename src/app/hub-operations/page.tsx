import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection }   from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { PropertyCard }  from "@/components/cards/PropertyCard";
import { MetricCard }    from "@/components/cards/MetricCard";
import { EnquiryForm }   from "@/components/compound/EnquiryForm";
import { FadeInSection } from "@/components/ui/FadeInSection";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Regional Hub Operations",
  description:
    "Specialised warehousing solutions for West India's industrial heartlands. Delivering the global Ojha excellence through localised expertise.",
  openGraph: {
    title: "Regional Hub Operations | Ojha Group",
    description:
      "Specialised warehousing solutions for West India's industrial heartlands.",
    images: [{ url: "/og/hub-operations.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const REGIONS = [
  {
    icon: "warehouse",
    state: "Maharashtra",
    description: "High-density storage solutions focusing on e-commerce and automotive support.",
    cities: ["Bhiwandi", "Pune"],
  },
  {
    icon: "factory",
    state: "Gujarat",
    description: "Proximity to heavy industries with chemical handling zones.",
    cities: ["Anand", "Hazira"],
  },
  {
    icon: "medication",
    state: "Goa",
    description: "Pharmaceutical grade facilities designed for cold chain logistics.",
    cities: ["Verna"],
  },
  {
    icon: "anchor",
    state: "Coastal",
    description: "Optimised for rapid turnaround from southern entry points.",
    cities: ["Mangalore"],
  },
];

const FACILITIES = [
  {
    image: "https://picsum.photos/seed/drymulti/600/400",
    badge: { label: "800,000 SQFT", color: "green" as const },
    title: "Dry Multi-Store",
    features: ["12m Clear Height", "FM2 Flooring", "Automated MHE"],
    ctaLabel: "Details",
    href: "/hub-operations#dry",
  },
  {
    image: "https://picsum.photos/seed/coldchainwest/600/400",
    badge: { label: "AUTO-READY", color: "blue" as const },
    title: "Cold Chain Hub",
    features: ["Multi-temp Chambers", "24/7 Power Backup", "Pharma Grade"],
    ctaLabel: "Details",
    href: "/hub-operations#cold",
  },
  {
    image: "https://picsum.photos/seed/indchem/600/400",
    badge: { label: "PESO APPROVED", color: "amber" as const },
    title: "Ind. & Chemical",
    features: ["Fire Suppression", "Spill Containment", "HAZMAT Ready"],
    ctaLabel: "Details",
    href: "/hub-operations#chemical",
  },
];

const STANDARDS = [
  {
    icon: "emergency",
    title: "Zero-incident Code",
    description: "Rigorous safety training and automated hazard detection.",
  },
  {
    icon: "sensors",
    title: "SmartHub 3.0",
    description: "Real-time inventory visibility and API-first client integration.",
  },
];

const METRICS = [
  { value: "99.9", unit: "%",  label: "Accuracy"    },
  { value: "24/7", unit: "",   label: "Monitoring"  },
  { value: "15",   unit: "m",  label: "Turnaround"  },
  { value: "100",  unit: "%",  label: "Compliance"  },
];

const SERVICE_OPTIONS = [
  "General Dry Storage",
  "Cold Chain / Refrigerated",
  "Industrial & Chemical",
  "Build-to-Suit",
  "Multi-Region Contract",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HubOperationsPage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="West India Division"
        headline="Regional Depth."
        highlightedWord="Unified Standards."
        subtext="Specialised warehousing solutions for West India's industrial heartlands. Delivering the global Ojha excellence through localised expertise."
        primaryBtn={{ label: "View Regional Assets",  href: "/hub-operations#facilities" }}
        ghostBtn={{ label: "Download Region Specs",   href: "/hub-operations/brochure" }}
        backgroundImage="https://picsum.photos/seed/hubhero/1600/900"
      />

      {/* 2 — Regional Coverage */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Left-border accent heading style from screenshot */}
        <div className="border-l-[3px] border-primary pl-5 mb-10">
          <SectionHeader
            title="Regional Coverage"
            subtitle="Strategically located hubs across Maharashtra, Gujarat, and Goa ensuring seamless connectivity to major ports and industrial zones."
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REGIONS.map((r) => (
            <div
              key={r.state}
              className="flex flex-col gap-4 rounded-sm border border-white/[0.06] bg-surface-dark p-5 transition-colors hover:border-white/[0.12]"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary/15">
                <span
                  className="material-symbols-outlined text-[18px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                  aria-hidden="true"
                >
                  {r.icon}
                </span>
              </div>

              {/* State name + description */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans text-sm font-bold text-white">{r.state}</h3>
                <p className="font-sans text-[12px] leading-relaxed text-muted">{r.description}</p>
              </div>

              {/* City tags */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {r.cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-sm border border-white/10 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-muted/70"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* 3 — Facility Portfolio */}
      <FadeInSection
        id="facilities"
        className="border-t border-white/[0.05] bg-surface-darker/40 py-20"
        delay={0.1}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              title="Facility Portfolio"
              subtitle="Grade-A assets equipped with climate control, automated material handling, and integrated digital tracking."
            />
            <a
              href="/warehousing"
              className="shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-glow"
            >
              View All Properties →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f) => (
              <PropertyCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 4 — The Ojha Standard */}
      <FadeInSection className="border-t border-white/[0.05] py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left: heading + body + protocol list */}
            <div className="flex flex-col gap-7">
              <div>
                <h2 className="font-sans text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl">
                  The Ojha Standard:
                  <br />
                  <span className="text-primary">Unified Protocols.</span>
                </h2>
                <p className="mt-5 font-sans text-[13px] leading-relaxed text-muted max-w-md">
                  We don't just store; we steward. Our operations are governed by a
                  globally enforced quality matrix ensuring resilience, compliance,
                  and real-time visibility.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {STANDARDS.map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <span
                        className="material-symbols-outlined text-[14px] text-primary"
                        style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                        aria-hidden="true"
                      >
                        {s.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans text-[13px] font-bold text-white">{s.title}</p>
                      <p className="font-sans text-[12px] text-muted">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 2×2 MetricCard grid */}
            <div className="grid grid-cols-2 gap-4">
              {METRICS.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* 5 — Local Leadership + Direct Enquiry */}
      <FadeInSection className="border-t border-white/[0.05] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

            {/* Left: leadership */}
            <div className="flex flex-col gap-6">
              <SectionHeader
                title="Local Leadership"
                subtitle="Direct access to our West India team ensures rapid, decision-ready authority for your logistics challenges."
              />

              {/* Person card */}
              <div className="flex items-start gap-5 rounded-sm border border-white/[0.06] bg-surface-dark p-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <Image
                    src="https://picsum.photos/seed/vikramrathore/200/200"
                    alt="Vikram Rathore"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-sans text-sm font-black uppercase tracking-[0.08em] text-white">
                    Vikram Rathore
                  </p>
                  <p className="mt-0.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                    Operations Director, West
                  </p>
                </div>
              </div>

              {/* Regional HQ */}
              <div className="flex flex-col gap-2 rounded-sm border border-white/[0.06] bg-surface-dark p-5">
                <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-white">
                  Regional HQ
                </p>
                <p className="font-sans text-[12px] leading-relaxed text-muted">
                  Ojha Logistics West Tower<br />
                  Plot No. J8, MIDC Industrial Area<br />
                  Navi Mumbai, MH 400701
                </p>
                <a
                  href="tel:+912245678900"
                  className="mt-1 font-sans text-[12px] text-primary transition-colors hover:text-primary-glow"
                >
                  +91 22 4567 8900
                </a>
              </div>
            </div>

            {/* Right: enquiry form */}
            <div>
              <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Direct Enquiry
              </p>
              <EnquiryForm
                serviceOptions={SERVICE_OPTIONS}
                formspreeId="YOUR_FORMSPREE_ID"
                variant="underline"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
