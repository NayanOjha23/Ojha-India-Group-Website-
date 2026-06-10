import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection }       from "@/components/sections/HeroSection";
import { StatsBar }           from "@/components/sections/StatsBar";
import { SectionHeader }      from "@/components/sections/SectionHeader";
import { VerticalCard }       from "@/components/cards/VerticalCard";
import { NewsCard }           from "@/components/cards/NewsCard";
import { FadeInSection }      from "@/components/ui/FadeInSection";
import { CornerFrame }        from "@/components/ui/CornerFrame";
import { MapVisualization }   from "@/components/ui/MapVisualization";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Ojha Group — Architects of Reliability",
  description:
    "A multi-disciplinary conglomerate shaping the future of Warehousing, Managed Spaces, Real Estate, and Electronics since 1994.",
  openGraph: {
    title: "Ojha Group — Architects of Reliability",
    description:
      "A multi-disciplinary conglomerate shaping the future of Warehousing, Managed Spaces, Real Estate, and Electronics since 1993.",
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
  { number: 1, title: "Warehousing",     description: "Grade-A logistics infrastructure with multi-modal connectivity spanning India's key industrial corridors.",         image: "https://picsum.photos/seed/warehouse/600/750",  href: "/industries#warehousing"  },
  { number: 2, title: "Charter Spaces",  description: "Asset-backed managed offices delivering pricing stability and operational continuity for enterprise tenants.",        image: "https://picsum.photos/seed/charter/600/750",    href: "/industries#charter"      },
  { number: 3, title: "Real Estate",     description: "Premium Grade-A commercial and retail developments in India's most influential urban corridors.",                    image: "https://picsum.photos/seed/realestate/600/750", href: "/industries#real-estate"  },
  { number: 4, title: "Electronics",     description: "Precision electronics manufacturing and distribution, powering next-generation industrial and consumer solutions.",   image: "https://picsum.photos/seed/electronics/600/750",href: "/industries#electronics"  },
];

const CAPABILITIES = [
  {
    icon: "precision_manufacturing",
    title: "Maintenance",
    description: "Proactive infrastructure upkeep and 24/7 technical monitoring to prevent downtime across all managed assets.",
    link: { label: "Learn More", href: "/services#maintenance" },
  },
  {
    icon: "support_agent",
    title: "Support",
    description: "Dedicated account management and expert consultative support for all operations and client requirements.",
    link: { label: "Learn More", href: "/services#support" },
  },
  {
    icon: "engineering",
    title: "Engineering",
    description: "Custom precision engineering solutions designed for complex industrial requirements and large-scale projects.",
    link: { label: "Learn More", href: "/services#engineering" },
  },
  {
    icon: "payments",
    title: "Pricing",
    description: "Competitive asset-backed pricing models that maximise ROI for our stakeholders and long-term partners.",
    link: { label: "Learn More", href: "/services#pricing" },
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
        subtext="A multi-disciplinary conglomerate shaping the future of Warehousing, Managed Spaces, Real Estate, and Electronics since 1994."
        primaryBtn={{ label: "Explore Our Legacy", href: "/about" }}
        ghostBtn={{ label: "View Portfolio",       href: "/projects" }}
        backgroundImage="https://picsum.photos/seed/ojhahero/1600/900"
        showScrollIndicator
      />

      {/* 2 — Stats */}
      <StatsBar stats={STATS} />

      {/* 3 — Leadership Portrait & Vision */}
      <FadeInSection className="border-t border-white/[0.04] py-20" delay={0.05}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left — portrait + name */}
            <div className="flex flex-col items-start gap-5">
              <CornerFrame className="w-full max-w-[340px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image
                    src="https://picsum.photos/seed/rajeshojha/600/800"
                    alt="Mr. Rajesh Ojha"
                    fill
                    className="object-cover object-top grayscale"
                    sizes="(max-width: 1024px) 90vw, 340px"
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background-dark to-transparent" />
                  {/* Name plate overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-sans text-base font-black uppercase tracking-[0.08em] text-white">
                      Mr. Rajesh Ojha
                    </p>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Chairman &amp; Managing Director
                    </p>
                  </div>
                </div>
              </CornerFrame>
            </div>

            {/* Right — quote + mini timeline */}
            <div className="flex flex-col gap-10">
              {/* Eyebrow */}
              <div>
                <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Vision &amp; Legacy
                </p>
                <h2 className="font-sans text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
                  Defined by Integrity.
                  <br />
                  <span className="text-primary">Driven by Innovation.</span>
                </h2>
              </div>

              {/* Playfair quote block */}
              <blockquote className="relative border-l-2 border-primary/40 pl-6">
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 select-none text-[56px] leading-none text-primary/20"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;
                </span>
                <p
                  className="font-accent text-lg font-normal italic leading-relaxed text-white/90 sm:text-xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  We do not merely build infrastructure — we build the arteries
                  of commerce. Every facility, every space, every partnership is
                  a commitment to India's industrial future and the people who
                  power it.
                </p>
              </blockquote>

              {/* Mini horizontal timeline */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
                {[
                  { year: "1994", label: "Founding",              desc: "Established in Gurugram" },
                  { year: "2008", label: "Pan-India Expansion",   desc: "Multi-city footprint" },
                  { year: "2024", label: "Global Integrations",   desc: "Fortune 500 partnerships" },
                ].map((node, i, arr) => (
                  <div key={node.year} className="flex items-start sm:flex-1">
                    {/* Node + content */}
                    <div className="flex flex-col items-start gap-2 sm:items-center sm:text-center">
                      {/* Dot + connecting line (desktop) */}
                      <div className="flex w-full items-center">
                        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-2 ring-primary/30" />
                        {i < arr.length - 1 && (
                          <div className="hidden h-px flex-1 bg-primary/20 sm:block" />
                        )}
                      </div>
                      {/* Year + label */}
                      <div className="flex flex-col gap-0.5 sm:pr-4">
                        <span className="font-sans text-sm font-black text-primary">
                          {node.year}
                        </span>
                        <span className="font-sans text-[12px] font-semibold text-white">
                          {node.label}
                        </span>
                        <span className="font-sans text-[11px] text-muted">
                          {node.desc}
                        </span>
                      </div>
                    </div>
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
          <a
            href="/industries"
            className="shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary-glow transition-colors"
          >
            View All Divisions →
          </a>
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="flex flex-col gap-5 rounded-sm border border-white/[0.06] bg-surface-dark p-6 transition-colors hover:border-white/[0.12]">
                <span
                  className="material-symbols-outlined text-[56px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}
                  aria-hidden="true"
                >
                  {c.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans text-sm font-black uppercase tracking-[0.1em] text-white">
                    {c.title}
                  </h3>
                  <p className="font-sans text-[12px] leading-relaxed text-muted">
                    {c.description}
                  </p>
                </div>
                <a
                  href={c.link.href}
                  className="mt-auto font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-glow"
                >
                  {c.link.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 6 — National Connectivity */}
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

      {/* 7 — News & Insights */}
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
