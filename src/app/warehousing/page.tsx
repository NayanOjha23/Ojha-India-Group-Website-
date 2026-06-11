import type { Metadata } from "next";
import { HeroSection }    from "@/components/sections/HeroSection";
import { SectionHeader }  from "@/components/sections/SectionHeader";
import { PropertyCard }   from "@/components/cards/PropertyCard";
import { FeatureCard }    from "@/components/cards/FeatureCard";
import { MetricCard }     from "@/components/cards/MetricCard";
import { EnquiryForm }    from "@/components/compound/EnquiryForm";
import { ContactInfo, InfoCard } from "@/components/compound/ContactInfo";
import { FadeInSection }    from "@/components/ui/FadeInSection";
import { MapVisualization } from "@/components/ui/MapVisualization";
import { cn } from "@/lib/utils";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Warehousing & Logistics",
  description:
    "30+ years of operational excellence in Grade-A warehousing, multi-modal connectivity, and specialised storage solutions across India.",
  openGraph: {
    title: "Warehousing & Logistics | Ojha Group",
    description:
      "30+ years of operational excellence in Grade-A warehousing and specialised storage solutions.",
    images: [{ url: "/og/warehousing.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const FRAMEWORK_PILLARS = [
  {
    icon: "verified",
    title: "Unified Standard",
    description: "All properties operate under a single rigorous architectural standard enabling predictable yields.",
  },
  {
    icon: "hub",
    title: "Protocol Apps",
    description: "Real-time compliance tracking connecting all warehouse nodes to central operations.",
  },
  {
    icon: "layers",
    title: "Shared Stack",
    description: "Unified digital inventory management spanning the entire Ojha warehousing network.",
  },
  {
    icon: "database",
    title: "Data Zone",
    description: "Edge data centres within each facility for low-latency, real-time operational visibility.",
  },
];

const STORAGE_SOLUTIONS = [
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: { label: "General Warehousing", color: "blue" as const },
    title: "Ojha Logistics",
    features: ["6.0M Sq. Ft. Total", "19 Active Hubs", "Multi-modal distribution network"],
    ctaLabel: "View Hubs",
    href: "/hub-operations",
  },
  {
    image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    badge: { label: "Cold Chain", color: "blue" as const },
    title: "Ojha Cold Chain",
    features: ["1.4M Sq. Ft. Total", "7 Active Hubs", "Pharma & FMCG temperature control"],
    ctaLabel: "Enquire",
    href: "/contact",
  },
  {
    image: "https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?q=80&w=4066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: { label: "Industrial Parks", color: "blue" as const },
    title: "Ojha Industrial Parks",
    features: ["2.2M Sq. Ft. Total", "6 Active Hubs", "Build-to-suit industrial estates"],
    ctaLabel: "Enquire",
    href: "/contact",
  },
  {
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    badge: { label: "Port Logistics", color: "blue" as const },
    title: "Ojha Port Logistics",
    features: ["1.1M Sq. Ft. Total", "4 Active Hubs", "Bonded, port-linked cargo handling"],
    ctaLabel: "Enquire",
    href: "/contact",
  },
];

const SPECS = [
  { value: "10.7M",   unit: "Sq. Ft.", label: "Total Network Footprint"      },
  { value: "36",      unit: "Hubs",    label: "Active Hubs Nationwide"       },
  { value: "4",       unit: "Div.",    label: "Warehousing Divisions"        },
  { value: "8",       unit: "States",  label: "States Covered"               },
  { value: "630K",    unit: "Sq. Ft.", label: "Cold Storage Capacity"        },
  { value: "NFPA 13", unit: "",        label: "Fire Suppression Compliant"   },
];

const SERVICE_OPTIONS = [
  "General Dry Storage",
  "Cold Chain / Refrigerated",
  "Wet & Liquid Storage",
  "Hazardous Materials",
  "Custom Build-to-Suit",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function WarehousingPage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="Grade-A Infrastructure"
        headline="Mission-Critical"
        highlightedWord="Infrastructure"
        subtext="30+ years of operational excellence in Grade-A warehousing, multi-modal connectivity, and specialised storage solutions."
        primaryBtn={{ label: "View Facilities",    href: "/warehousing#solutions" }}
        ghostBtn={{ label: "Download Brochure",    href: "/warehousing/brochure" }}
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* 2 — Standardized Framework text block */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left: headline + body */}
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Operational Framework
            </p>
            <h2
              className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl"
            >
              Standardized Framework.
              <br />
              Inter-Regional Flow.
            </h2>
            <p className="font-sans text-[14px] leading-relaxed text-muted max-w-md">
              We unify diverse regional operations under a single, rigorous
              architectural standard, ensuring seamless data exchange and
              operational consistency across the nation.
            </p>
          </div>

          {/* Right: 2×2 pillar grid */}
          <div className="grid grid-cols-2 gap-4">
            {FRAMEWORK_PILLARS.map((p) => (
              <FeatureCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 3 — National Network map */}
      <FadeInSection className="border-y border-white/[0.05] bg-surface-darker/60 py-16" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Geographic Dominance"
            title="Our National Network"
            subtitle="Strategic infrastructure hubs spanning the subcontinent, connected by a unified tech-integrated stack."
            className="mb-10"
          />
          <MapVisualization industries={["Warehousing"]} />
        </div>
      </FadeInSection>

      {/* 4 — Storage Solutions */}
      <FadeInSection id="solutions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" delay={0.1}>
        <SectionHeader
          eyebrow="Our Facilities"
          title="Our Warehousing Divisions"
          subtitle="Four specialised divisions delivering Grade-A storage, cold chain, industrial, and port-linked logistics across India."
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STORAGE_SOLUTIONS.map((s) => (
            <PropertyCard key={s.title} {...s} />
          ))}
        </div>
      </FadeInSection>

      {/* 5 — Technical Specifications */}
      <FadeInSection className="border-t border-white/[0.05] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-stretch">
            {/* Left: spec table */}
            <div>
              <SectionHeader
                title="Technical Specifications"
                subtitle="Aggregated capabilities across our 4 warehousing divisions, engineered to international structural standards."
                className="mb-8"
              />
              <div className="grid grid-cols-2 gap-4">
                {SPECS.map((s) => (
                  <MetricCard key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* Right: custom engineering CTA card */}
            <div
              className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-sm border border-white/[0.06] p-7 backdrop-blur-[12px] transition-colors duration-300 hover:border-primary/30 lg:mt-2"
              style={{ backgroundColor: "rgba(21,26,42,0.6)" }}
            >
              {/* Decorative glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25">
                  <span
                    className="material-symbols-outlined text-[22px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
                    aria-hidden="true"
                  >
                    engineering
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-base font-black uppercase tracking-[0.08em] text-white">
                    Custom Engineering?
                  </h3>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-muted">
                    We deliver Build-to-Suit (BTS) solutions tailored to precise
                    operational workflows and specialised handling requirements.
                  </p>
                </div>
              </div>

              {/* Quick facts */}
              <div className="relative flex flex-col">
                {[
                  { icon: "schedule", label: "Avg. Delivery", value: "6–9 Months" },
                  { icon: "straighten", label: "Min. Footprint", value: "50,000 Sq. Ft." },
                  { icon: "verified", label: "Compliance", value: "Built to Spec" },
                ].map((fact, i, arr) => (
                  <div
                    key={fact.label}
                    className={cn(
                      "flex items-center justify-between py-2.5",
                      i < arr.length - 1 && "border-b border-white/[0.04]"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="material-symbols-outlined text-[18px] text-primary"
                        style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 18" }}
                        aria-hidden="true"
                      >
                        {fact.icon}
                      </span>
                      <span className="font-sans text-[13px] text-slate-300">{fact.label}</span>
                    </div>
                    <span className="font-sans text-[13px] font-bold text-white">{fact.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="relative mt-auto inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-glow"
              >
                Enquire Now →
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* 6 — Enquiry + Contact */}
      <FadeInSection className="border-t border-white/[0.05] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25">
              <span
                className="material-symbols-outlined text-[22px] text-primary"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
                aria-hidden="true"
              >
                forum
              </span>
            </div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Enterprise Enquiry
            </p>
            <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white">
              Start a Conversation
            </h2>
            <p className="font-sans text-sm text-muted max-w-md">
              Strategic logistics consultation for mission-critical operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
            <div className="rounded-sm border border-white/[0.06] bg-surface-dark p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3 border-b border-white/[0.06] pb-5">
                <span
                  className="material-symbols-outlined text-[20px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
                  aria-hidden="true"
                >
                  send
                </span>
                <div>
                  <h3 className="font-sans text-sm font-black uppercase tracking-[0.12em] text-white">
                    Send a Message
                  </h3>
                  <p className="font-sans text-[11px] text-muted">
                    Fields marked <span className="text-primary">*</span> are mandatory.
                  </p>
                </div>
              </div>
              <EnquiryForm
                serviceOptions={SERVICE_OPTIONS}
                formspreeId="YOUR_FORMSPREE_ID"
                variant="underline"
              />
            </div>
            <ContactInfo
              heading="Operations Contact"
              address="Ojha Logistics Tower, Sector 58, Gurugram, Haryana, 122011"
              phone="+91 124 456 7890"
              fax="+91 124 456 7899"
              email="warehousing@ojhagroup.in"
              emailLabel="Warehousing Enquiries"
              extraCards={[
                <InfoCard
                  key="response"
                  icon="timer"
                  title="24-Hour Response Guarantee"
                  description="All enterprise enquiries receive a dedicated response within 24 business hours."
                />,
              ]}
            />
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
