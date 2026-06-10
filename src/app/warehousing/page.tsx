import type { Metadata } from "next";
import { HeroSection }    from "@/components/sections/HeroSection";
import { SectionHeader }  from "@/components/sections/SectionHeader";
import { PropertyCard }   from "@/components/cards/PropertyCard";
import { FeatureCard }    from "@/components/cards/FeatureCard";
import { SpecRow }        from "@/components/ui/SpecRow";
import { EnquiryForm }    from "@/components/compound/EnquiryForm";
import { ContactInfo, InfoCard } from "@/components/compound/ContactInfo";
import { FadeInSection }    from "@/components/ui/FadeInSection";
import { MapVisualization } from "@/components/ui/MapVisualization";

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
    image: "https://picsum.photos/seed/drystorage/600/400",
    badge: { label: "Available", color: "green" as const },
    title: "Dry Storage",
    features: ["12m Clear Height", "FM2 Flooring", "Automated MHE"],
    ctaLabel: "Details",
    href: "/warehousing#dry",
  },
  {
    image: "https://picsum.photos/seed/coldchain/600/400",
    badge: { label: "Available", color: "green" as const },
    title: "Cold Chain Hub",
    features: ["Multi-temp Chambers", "24/7 Power Backup", "Pharma Grade"],
    ctaLabel: "Details",
    href: "/warehousing#cold",
  },
  {
    image: "https://picsum.photos/seed/wetstorage/600/400",
    badge: { label: "Key-West", color: "blue" as const },
    title: "Wet Storage",
    features: ["Liquid-safe Flooring", "Drainage Infrastructure", "Spill Containment"],
    ctaLabel: "Details",
    href: "/warehousing#wet",
  },
  {
    image: "https://picsum.photos/seed/hazardous/600/400",
    badge: { label: "Fully Built", color: "amber" as const },
    title: "Hazardous",
    features: ["Fire Suppression", "HAZMAT Ready", "Blast-rated Walls"],
    ctaLabel: "Details",
    href: "/warehousing#hazardous",
  },
];

const SPECS = [
  { label: "Floor Load Capacity",   value: "10 Tons / sqm"      },
  { label: "Clear Gable Height",    value: "12 Metres"           },
  { label: "Loading Docks",         value: "1 per 100 sqft"      },
  { label: "Power Supply",          value: "33 KVA dedicated"    },
  { label: "Fire Suppression",      value: "NFPA 13 Compliant"   },
  { label: "Operating Temperature", value: "-25°C to +35°C"      },
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
          title="Storage Solutions"
          subtitle="Engineered for versatility. We provide specialised environments for every industrial asset class."
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
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
            {/* Left: spec table */}
            <div>
              <SectionHeader
                title="Technical Specifications"
                subtitle="Grade-A facilities engineered for maximum velocity and throughput, meeting international structural standards."
                className="mb-8"
              />
              <div>
                {SPECS.map((s) => (
                  <SpecRow key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            </div>

            {/* Right: custom engineering CTA card */}
            <div className="flex flex-col gap-5 rounded-sm border border-white/[0.06] bg-surface-dark p-7 lg:mt-2">
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
              <a
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-glow"
              >
                Enquire Now →
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* 6 — Enquiry + Contact */}
      <FadeInSection className="border-t border-white/[0.05] py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
              Enterprise Enquiry
            </p>
            <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white">
              Start a Conversation
            </h2>
            <p className="mt-2 font-sans text-sm text-muted">
              Strategic logistics consultation for mission-critical operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
            <EnquiryForm
              serviceOptions={SERVICE_OPTIONS}
              formspreeId="YOUR_FORMSPREE_ID"
              variant="underline"
            />
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
