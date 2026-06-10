import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection }        from "@/components/sections/HeroSection";
import { SectionHeader }       from "@/components/sections/SectionHeader";
import { FeatureCard }         from "@/components/cards/FeatureCard";
import { MetricCard }          from "@/components/cards/MetricCard";
import { LeadershipQuote }     from "@/components/compound/LeadershipQuote";
import { MilestoneTimeline }   from "@/components/compound/MilestoneTimeline";
import { FadeInSection }       from "@/components/ui/FadeInSection";
import { CornerFrame }         from "@/components/ui/CornerFrame";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Our Legacy & Vision",
  description:
    "Since 1994, Ojha Group has been a cornerstone of India's infrastructure, evolving from a regional player to a diversified national conglomerate.",
  openGraph: {
    title: "Our Legacy & Vision | Ojha Group",
    description:
      "Since 1994, Ojha Group has been a cornerstone of India's infrastructure.",
    images: [{ url: "/og/about.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const MILESTONES = [
  {
    year: "1994",
    title: "Founding",
    description: "Established in Gurugram with a focus on industrial infrastructure and engineering excellence.",
  },
  {
    year: "2002",
    title: "First Warehouse",
    description: "Built India's first high-set commercial and residential infrastructure combining warehousing standards.",
  },
  {
    year: "2008",
    title: "Diversification",
    description: "Broadened into Charter Spaces and managed workspaces, establishing warehousing standards.",
  },
  {
    year: "2016",
    title: "Electronics",
    description: "Launched advanced electronics division, strengthening the group's technology and innovation footprint.",
  },
  {
    year: "2024",
    title: "National Expansion",
    description: "A pan-India presence established across 25 cities, serving global Fortune 500 clients.",
  },
];

const GROUP_METRICS = [
  { value: "$2.4", unit: "B",  label: "Assets Under Management" },
  { value: "12",   unit: "M+", label: "Total Square Footage"    },
  { value: "28",   unit: "+",  label: "National Footprint Cities"},
  { value: "5.5",  unit: "K+", label: "Diverse Workforce"       },
];

const SUSTAINABILITY = [
  {
    icon: "eco",
    title: "LEED Gold Standards",
    description: "100% LEED Gold planned for all upcoming logistics parks and commercial developments.",
  },
  {
    icon: "diversity_3",
    title: "Community Development",
    description: "Community development programs impacting over 50,000 lives annually across our operational regions.",
  },
  {
    icon: "psychiatry",
    title: "Carbon Neutrality",
    description: "Committed to achieving full carbon neutrality by 2040 through renewable integration and offset programmes.",
  },
];

const VALUES = [
  {
    icon: "verified",
    title: "Integrity",
    description: "Upholding the highest ethical standards to ensure transparency in every business practice.",
  },
  {
    icon: "workspace_premium",
    title: "Excellence",
    description: "Continuous pursuit of quality through innovation, setting new industry benchmarks daily.",
  },
  {
    icon: "shield",
    title: "Resilience",
    description: "Building enduring structures and systems that withstand the test of time and volatility.",
  },
  {
    icon: "handshake",
    title: "Partnership",
    description: "Collaborative growth with our stakeholders, treating every client as a long-term partner.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="Established 1994"
        headline="A Legacy of"
        highlightedWord="Stability."
        subtext="Since 1994, Ojha Group has been a cornerstone of India's infrastructure, evolving from a regional player to a diversified national conglomerate."
        primaryBtn={{ label: "View Our Portfolio", href: "/projects"  }}
        ghostBtn={{ label: "Corporate Vision",    href: "/about#vision" }}
        backgroundImage="https://picsum.photos/seed/ojhaabout/1600/900"
      />

      {/* 2 — Milestone Timeline */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Milestones"
          title="Engineering Our Vision"
          subtitle="Tracing the structural evolution of a national leader."
          className="mb-12"
        />
        <MilestoneTimeline milestones={MILESTONES} />
      </FadeInSection>

      {/* 3 — Leadership Quote */}
      <FadeInSection className="border-t border-white/[0.04] bg-surface-darker/40 py-24" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LeadershipQuote
            quote="Our leadership philosophy is rooted in building not just structures, but trust and lasting impact across the nation. We create ecosystems where businesses thrive, ensuring that every square foot we manage adds tangible value to India's growth story."
            personName="Arjun Ojha"
            personTitle="Chairman & Managing Director"
            personImage="https://picsum.photos/seed/arjunojha/400/500"
          />
        </div>
      </FadeInSection>

      {/* 4 — The Group Today */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" delay={0.1}>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Scale & Impact"
            title={
              <>
                The Group{" "}
                <span className="text-primary">Today</span>
              </>
            }
          />
          <p className="font-sans text-[13px] text-muted max-w-xs">
            Measuring our success through scale, impact, and the people we empower across the Indian subcontinent.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GROUP_METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </FadeInSection>

      {/* 5 — Values */}
      <FadeInSection className="border-t border-white/[0.04] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles that have guided every decision since our founding in 1994."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <FeatureCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 6 — Sustainability */}
      <FadeInSection className="border-t border-white/[0.04] py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left — image */}
            <CornerFrame className="w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src="https://picsum.photos/seed/ojhasustainability/800/600"
                  alt="Ojha Group sustainability initiatives"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay tint */}
                <div className="absolute inset-0 bg-emerald-950/30" />
                {/* Bottom badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-sm border border-emerald-500/30 bg-emerald-950/70 px-3 py-2 backdrop-blur-sm">
                  <span
                    className="material-symbols-outlined text-[16px] text-emerald-400"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                    aria-hidden="true"
                  >
                    energy_savings_leaf
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-300">
                    ESG Committed
                  </span>
                </div>
              </div>
            </CornerFrame>

            {/* Right — header + cards */}
            <div className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Future Impact"
                title={
                  <>
                    Sustainability &amp;{" "}
                    <span className="text-emerald-400">Responsibility</span>
                  </>
                }
                subtitle="Building India's infrastructure with a conscience — our commitment to environmental stewardship, community uplift, and a greener tomorrow."
              />
              <div className="flex flex-col gap-3">
                {SUSTAINABILITY.map((s) => (
                  <FeatureCard
                    key={s.title}
                    icon={s.icon}
                    title={s.title}
                    description={s.description}
                    variant="green"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeInSection>
    </>
  );
}
