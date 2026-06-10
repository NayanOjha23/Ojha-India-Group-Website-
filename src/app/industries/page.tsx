import type { Metadata } from "next";
import { HeroSection }   from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FeatureCard }   from "@/components/cards/FeatureCard";
import { FadeInSection } from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "Business Verticals",
  description:
    "Ojha Group operates across four core industries — Warehousing & Logistics, Charter Spaces, Real Estate, and Electronics — delivering excellence since 1994.",
  openGraph: {
    title: "Business Verticals | Ojha Group",
    description:
      "Four core industries delivering excellence since 1994.",
    images: [{ url: "/og/industries.jpg", width: 1200, height: 630 }],
  },
};

const DIVISIONS = [
  {
    id: "warehousing",
    eyebrow: "Division 01",
    title: "Warehousing & Logistics",
    description:
      "Grade-A multi-modal warehousing across 14+ facilities spanning 4.2M sq ft. Specialised storage solutions for dry, cold chain, wet, and hazardous cargo — all governed by a unified operational standard.",
    href: "/warehousing",
    features: [
      { icon: "warehouse",  title: "Grade-A Facilities",    description: "12m clear height, FM2 flooring, automated MHE across every node." },
      { icon: "thermostat", title: "Cold Chain",            description: "Multi-temp chambers with 24/7 power backup and pharma-grade compliance." },
      { icon: "sensors",    title: "SmartHub 3.0",          description: "Real-time inventory visibility and API-first client integration." },
      { icon: "verified",   title: "99% Uptime SLA",        description: "Guaranteed operational continuity with redundant infrastructure." },
    ],
  },
  {
    id: "charter",
    eyebrow: "Division 02",
    title: "Charter Spaces",
    description:
      "Premium asset-backed managed offices across 12+ locations. Unlike conventional leasing, our ownership model secures your space against hard real-estate assets, guaranteeing pricing stability and operational continuity.",
    href: "/charter-spaces",
    features: [
      { icon: "apartment",      title: "Private Offices",    description: "Fully serviced, prestigious addresses with uninterruptible uptime." },
      { icon: "meeting_room",   title: "Managed Suites",     description: "Dedicated floor open-plan spaces with brand interaction areas." },
      { icon: "hub",            title: "Hybrid Hubs",        description: "Hot-desking and flexible arrangements for agile teams." },
      { icon: "groups",         title: "500+ Enterprise Network", description: "Curated ecosystem for cross-vertical partnerships and growth." },
    ],
  },
  {
    id: "real-estate",
    eyebrow: "Division 03",
    title: "Real Estate",
    description:
      "Developing India's skyline with LEED-certified Grade-A office towers and high-footfall retail hubs. Every square foot developed under the Ojha standard of architectural excellence and regulatory compliance.",
    href: "/real-estate",
    features: [
      { icon: "domain",       title: "Grade-A Offices",     description: "LEED Gold certified towers with smart building integration." },
      { icon: "storefront",   title: "Retail Hubs",         description: "High-street locations with automated parking and concierge." },
      { icon: "gavel",        title: "RERA Compliant",       description: "Full regulatory compliance and ISO 9001:2015 certification." },
      { icon: "trending_up",  title: "$2.4B AUM",           description: "Assets under management across 28+ national footprint cities." },
    ],
  },
  {
    id: "electronics",
    eyebrow: "Division 04",
    title: "Electronics",
    description:
      "Advanced electronics manufacturing and distribution, launched in 2016 to strengthen the group's technology and innovation footprint. Precision engineering at industrial scale.",
    href: "/contact",
    features: [
      { icon: "precision_manufacturing", title: "Precision Engineering", description: "Custom solutions for complex industrial and commercial requirements." },
      { icon: "inventory_2",             title: "Distribution Network",  description: "Pan-India distribution leveraging our existing logistics infrastructure." },
      { icon: "engineering",             title: "R&D Integration",       description: "Innovation-first approach backed by group-wide technology resources." },
      { icon: "shield",                  title: "Quality Assurance",     description: "Rigorous QA protocols aligned with international standards." },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="Four Core Divisions"
        headline="Business"
        highlightedWord="Verticals."
        subtext="A diversified portfolio of industrial and commercial divisions, each operating at national scale under the unified Ojha standard of excellence."
        primaryBtn={{ label: "Explore Warehousing", href: "/warehousing" }}
        ghostBtn={{ label: "Partner With Us",       href: "/contact" }}
        backgroundImage="https://picsum.photos/seed/industrieshero/1600/900"
      />

      {/* 2 — Divisions */}
      {DIVISIONS.map((div, i) => (
        <FadeInSection
          key={div.id}
          id={div.id}
          className={
            i % 2 === 0
              ? "border-t border-white/[0.05] py-20"
              : "border-t border-white/[0.05] bg-surface-darker/40 py-20"
          }
          delay={0.05}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                eyebrow={div.eyebrow}
                title={div.title}
                subtitle={div.description}
              />
              <a
                href={div.href}
                className="shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-glow"
              >
                Explore Division →
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {div.features.map((f) => (
                <FeatureCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      ))}

      {/* 3 — CTA band */}
      <FadeInSection className="border-t border-white/[0.05] py-20" delay={0.1}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Enterprise Gateway
          </p>
          <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            Ready to Partner?
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
            Connect with our division heads for enterprise-grade solutions tailored to your operational requirements.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-glow"
            >
              Initiate Partnership →
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary-glow"
            >
              Our Legacy
            </a>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
