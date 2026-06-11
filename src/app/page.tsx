import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection }       from "@/components/sections/HeroSection";
import { StatsBar }           from "@/components/sections/StatsBar";
import { SectionHeader }      from "@/components/sections/SectionHeader";
import { VerticalCard }       from "@/components/cards/VerticalCard";
import { NewsCard }           from "@/components/cards/NewsCard";
import { FadeInSection }      from "@/components/ui/FadeInSection";
import { MapVisualization }   from "@/components/ui/MapVisualization";
import { FeatureCard }        from "@/components/cards/FeatureCard";
import { InstitutionalExcellence } from "@/components/sections/InstitutionalExcellence";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Ojha Group — Architects of Reliability",
  description:
    "A multi-disciplinary conglomerate shaping the future of Warehousing, Managed Spaces, Commercial Spaces, and Electronics since 1994.",
  openGraph: {
    title: "Ojha Group — Architects of Reliability",
    description:
      "A multi-disciplinary conglomerate shaping the future of Warehousing, Managed Spaces, Commercial Spaces, and Electronics since 1993.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { label: "Experience",     value: "30",   unit: "+",  description: "Years of Excellence"   },
  { label: "Valuation",      value: "$500", unit: "M+", description: "Asset-Backed Value"    },
  { label: "Infrastructure", value: "10",   unit: "M+", description: "Square Feet Managed"   },
  { label: "Network",        value: "25",   unit: "+",  description: "Cities Nationwide"     },
];

const VERTICALS = [
  { number: 1, title: "Warehousing",     description: "Grade-A logistics infrastructure with multi-modal connectivity spanning India's key industrial corridors.",         image: "https://images.unsplash.com/photo-1672552226380-486fe900b322?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  href: "/warehousing"  },
  { number: 2, title: "Charter Spaces",  description: "Asset-backed managed offices delivering pricing stability and operational continuity for enterprise tenants.",        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    href: "/charter-spaces"      },
  { number: 3, title: "Commercial Spaces",     description: "Premium Grade-A commercial and retail developments in India's most influential urban corridors.",                    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=3996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/commercial-spaces"  },
  { number: 4, title: "Electronics",     description: "Precision electronics manufacturing and distribution, powering next-generation industrial and consumer solutions.",   image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",href: "/contact"  },
];

const CAPABILITIES = [
  {
    icon: "precision_manufacturing",
    title: "Maintenance",
    description: "Proactive infrastructure upkeep and 24/7 technical monitoring to prevent downtime across all managed assets.",
  },
  {
    icon: "support_agent",
    title: "Support",
    description: "Dedicated account management and expert consultative support for all operations and client requirements.",
  },
  {
    icon: "engineering",
    title: "Engineering",
    description: "Custom precision engineering solutions designed for complex industrial requirements and large-scale projects.",
  },
  {
    icon: "payments",
    title: "Pricing",
    description: "Competitive asset-backed pricing models that maximise ROI for our stakeholders and long-term partners.",
  },
];

const NEWS = [
  {
    category: "Financial",
    date: "Jul 12, 2025",
    headline: "Q3 2025 Financial Results & Operational Update",
    description: "Revenue grew 18% YoY driven by warehousing expansion and strong Charter Spaces occupancy across our Tier-1 city portfolio.",
    href: "/news/q3-2025-results",
  },
  {
    category: "Sustainability",
    date: "Jun 28, 2025",
    headline: "Solar Integration Milestone: 60MW Installed Capacity Across Logistics Parks",
    description: "Our renewable energy programme now powers over 40% of total facility consumption, cutting Scope 2 emissions by 32,000 tCO₂e annually.",
    href: "/news/solar-milestone",
  },
  {
    category: "Logistics",
    date: "Aug 10, 2025",
    headline: "The Future of Urban Last-Mile Logistics in India",
    description: "How micro-fulfilment centres and AI-driven routing are reshaping delivery economics for India's next 500 million consumers.",
    href: "/news/urban-logistics",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="Signifying Excellence"
        headline="Architects of"
        highlightedWord="Reliability"
        subtext="A multi-disciplinary conglomerate shaping the future of Warehousing, Managed Spaces, Commercial Spaces, and Electronics since 1994."
        primaryBtn={{ label: "Explore Our Legacy", href: "/about" }}
        ghostBtn={{ label: "View Portfolio",       href: "/projects" }}
        backgroundImage="https://images.unsplash.com/photo-1462396240927-52058a6a84ec?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        showScrollIndicator
      />

      {/* 2 — Stats */}
      <StatsBar stats={STATS} />

      {/* 3 — Leadership Portrait & Vision */}
      <FadeInSection className="border-t border-white/[0.04] py-20" delay={0.05}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">

            {/* Left — portrait */}
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/rajeshojha/600/800"
                  alt="Mr. Rajesh Ojha"
                  fill
                  className="object-cover object-top grayscale contrast-125"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80" />
                {/* Name plate overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-sans text-xl font-black uppercase tracking-[0.08em] text-white">
                    Mr. Rajesh Ojha
                  </p>
                  <p className="mt-1 font-sans text-sm font-bold uppercase tracking-[0.14em] text-primary">
                    Chairman &amp; Managing Director
                  </p>
                </div>
              </div>
              {/* Decorative corner accents */}
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 border-l-2 border-t-2 border-primary/30"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 border-b-2 border-r-2 border-primary/30"
                aria-hidden="true"
              />
            </div>

            {/* Right — quote + milestones */}
            <div className="flex flex-col gap-8 lg:col-span-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                <span className="h-px w-16 bg-primary" aria-hidden="true" />
                <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Vision &amp; Legacy
                </span>
              </div>

              <h2 className="font-sans text-4xl font-black uppercase leading-[1.05] tracking-tight text-white lg:text-5xl">
                Defined by Integrity.
                <br />
                Driven by <span className="text-muted">Innovation.</span>
              </h2>

              {/* Playfair quote block */}
              <div className="relative pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 select-none font-accent text-6xl leading-none text-white/10"
                >
                  &ldquo;
                </span>
                <p className="font-accent text-xl italic leading-relaxed text-white/80 lg:text-2xl">
                  We do not merely build infrastructure — we build the arteries
                  of commerce. Every facility, every space, every partnership is
                  a commitment to India's industrial future and the people who
                  power it.
                </p>
              </div>

              {/* Milestones */}
              <div className="grid grid-cols-3 gap-8 border-t border-white/[0.05] pt-8">
                {[
                  { year: "1994", label: "Founding",            desc: "Established in Gurugram" },
                  { year: "2008", label: "Pan-India Expansion", desc: "Multi-city footprint" },
                  { year: "2024", label: "Global Integrations", desc: "Fortune 500 partnerships" },
                ].map((m) => (
                  <div key={m.year} className="flex flex-col gap-1">
                    <span className="font-sans text-2xl font-black text-white sm:text-3xl">
                      {m.year}
                    </span>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-white">
                      {m.label}
                    </span>
                    <span className="font-sans text-[11px] text-muted">
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeInSection>

      {/* 4 — Business Verticals */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            title="Business Verticals"
            subtitle="Comprehensive industrial and commercial solutions tailored for modern commerce, leveraging decades of operational expertise."
          />
          
        </div>
        <div className="grid grid-cols-2 gap-px lg:grid-cols-4">
          {VERTICALS.map((v) => (
            <VerticalCard key={v.title} {...v} />
          ))}
        </div>
      </FadeInSection>

      {/* 5 — Strategic Capabilities */}
      <FadeInSection className="border-t border-white/[0.04] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Strengths"
            title="Strategic Capabilities"
            subtitle="Four pillars of operational excellence ensuring long-term reliability for our partners."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <FeatureCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 6 — Institutional Excellence */}
      <InstitutionalExcellence />

      {/* 7 — National Connectivity */}
      <FadeInSection className="border-t border-white/[0.04] py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader
              eyebrow="Our Footprint"
              title="National Connectivity"
              subtitle="Strategic presence across India's key industrial and commercial hubs."
            />
          </div>
          <MapVisualization />
        </div>
      </FadeInSection>

      {/* 8 — News & Insights */}
      <FadeInSection className="border-t border-white/[0.04] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <SectionHeader
              eyebrow="Latest"
              title="News & Insights"
            />
            <a
              href="/news"
              className="shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary-glow transition-colors"
            >
              See All →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((n) => (
              <NewsCard key={n.href} {...n} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
