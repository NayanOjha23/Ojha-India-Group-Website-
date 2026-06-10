import type { Metadata } from "next";
import { HeroSection }   from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { PropertyCard }  from "@/components/cards/PropertyCard";
import { FeatureCard }   from "@/components/cards/FeatureCard";
import { ChecklistItem } from "@/components/ui/ChecklistItem";
import { EnquiryForm }   from "@/components/compound/EnquiryForm";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { MapVisualization } from "@/components/ui/MapVisualization";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Charter Spaces — Managed Offices",
  description:
    "Experience premium managed offices backed by the Ojha India Group asset ownership model. Where stability meets industrial-grade innovation.",
  openGraph: {
    title: "Charter Spaces — Managed Offices | Ojha Group",
    description:
      "Premium managed offices backed by the Ojha India Group asset ownership model.",
    images: [{ url: "/og/charter-spaces.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const WHY_CHOOSE = [
  {
    icon: "currency_rupee",
    title: "Pricing Stability",
    description: "Long-term leases and fixed-price billing model ensure unwavering stability. Lock in your long-term costs with confidence.",
  },
  {
    icon: "autorenew",
    title: "Operational Continuity",
    description: "Seamless operations guarantee in-house facility management and infrastructure control for third-party expat divisions.",
  },
  {
    icon: "apartment",
    title: "Asset-Backed Ownership",
    description: "Unlike traditional leasing, our ownership model means your space is secured against hard real-estate assets.",
  },
  {
    icon: "groups",
    title: "Community Network",
    description: "Access a curated ecosystem of 500+ enterprises across our managed spaces for partnerships and growth.",
  },
];

const WORKSPACES = [
  {
    image: "https://picsum.photos/seed/privateoffice/600/400",
    title: "Private Offices",
    features: ["Fully Serviced", "Prestigious Addresses", "Uninterruptible Uptime"],
    ctaLabel: "Learn More",
    href: "/charter-spaces#private",
  },
  {
    image: "https://picsum.photos/seed/managedsuite/600/400",
    badge: { label: "Most Popular", color: "blue" as const },
    title: "Managed Suites",
    features: ["Dedicated Floor Open-Plan", "Brand Interaction Space", "Private Meeting Rooms"],
    ctaLabel: "Learn More",
    href: "/charter-spaces#suites",
  },
  {
    image: "https://picsum.photos/seed/hybridhub/600/400",
    title: "Hybrid Hubs",
    features: ["Flexible Desk Arrangements", "Community Grants", "Hot Desking"],
    ctaLabel: "Learn More",
    href: "/charter-spaces#hybrid",
  },
];

const AMENITIES = [
  {
    icon: "wifi",
    title: "Redundant Internet",
    description: "Dual-fibre connections with enterprise-grade failover protection.",
  },
  {
    icon: "chair",
    title: "Ergonomic Design",
    description: "Premium workstations designed for long-term productivity and wellbeing.",
  },
  {
    icon: "security",
    title: "Advanced Security",
    description: "Biometrics, CCTV, and 24/7 professional security coordination.",
  },
  {
    icon: "meeting_room",
    title: "Smart Meeting Rooms",
    description: "VC-enabled conference suites with integrated presentation technology.",
  },
];

const STRATEGIC_NODES = [
  "Mumbai — BKC Hub. India's premier financial centre.",
  "Bengaluru — Tech Corridor. Global tech hub connectivity.",
  "Gurugram — Cyber City. Pan-national business district.",
];

const SERVICE_OPTIONS = [
  "Private Office (1–10 seats)",
  "Managed Suite (10–50 seats)",
  "Hybrid Hub / Hot-Desk",
  "Full-Floor Enterprise",
  "Custom Build-Out",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CharterSpacesPage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="A Charter Spaces by Ojha Group"
        headline="Workspaces Defined"
        highlightedWord="by Stability"
        subtext="Experience premium managed offices backed by the Ojha India Group asset ownership model. Where stability meets industrial-grade innovation."
        primaryBtn={{ label: "Explore Solutions",  href: "/charter-spaces#workspaces" }}
        ghostBtn={{ label: "View Locations →",     href: "/charter-spaces#nodes" }}
        backgroundImage="https://picsum.photos/seed/charterhero/1600/900"
      />

      {/* 2 — Asset-backed guarantee blurb */}
      <FadeInSection className="border-b border-white/[0.05] py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            The Asset-Backed Guarantee
          </p>
          <p className="font-sans text-base leading-relaxed text-muted sm:text-lg">
            Ojha India Group provides a modern, asset-backed framework ensuring
            long-term stability and operational excellence. Unlike traditional
            leasing, our ownership model guarantees{" "}
            <span className="text-primary font-medium">absolute consistency.</span>
          </p>
        </div>
      </FadeInSection>

      {/* 3 — Why Choose Charter Spaces */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" delay={0.1}>
        <SectionHeader
          title={
            <>
              Why Choose{" "}
              <span className="text-primary">Charter Spaces</span>
            </>
          }
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {WHY_CHOOSE.map((w) => (
            <FeatureCard key={w.title} icon={w.icon} title={w.title} description={w.description} />
          ))}
        </div>
      </FadeInSection>

      {/* 4 — Workspace Solutions */}
      <FadeInSection
        id="workspaces"
        className="border-t border-white/[0.05] bg-surface-darker/40 py-20"
        delay={0.1}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Our Portfolio"
              title="Workspace Solutions"
            />
            <a
              href="/charter-spaces#workspaces"
              className="shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-glow"
            >
              See All Floors →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKSPACES.map((w) => (
              <PropertyCard key={w.title} {...w} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 5 — Enterprise Amenities */}
      <FadeInSection className="border-t border-white/[0.05] py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industrial Standard"
            title="Enterprise Amenities"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {AMENITIES.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} description={a.description} className="rounded-none" />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 6 — Strategic Nodes */}
      <FadeInSection
        id="nodes"
        className="border-t border-white/[0.05] bg-surface-darker/40 py-20"
        delay={0.1}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left: heading + checklist */}
            <div className="flex flex-col gap-7">
              <div>
                <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Pan-India Footprint
                </p>
                <h2 className="font-sans text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl">
                  Strategic
                  <br />
                  <span className="text-primary">Nodes</span>
                </h2>
                <p className="mt-4 font-sans text-[13px] leading-relaxed text-muted max-w-md">
                  Our workspaces are situated in prime industrial and tech clusters,
                  offering unparalleled connectivity to global business hubs.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {STRATEGIC_NODES.map((node) => (
                  <ChecklistItem key={node}>{node}</ChecklistItem>
                ))}
              </ul>
            </div>

            {/* Right: expansion stats card */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 rounded-sm border border-white/[0.06] bg-surface-dark p-5">
                  <div className="flex items-baseline gap-0.5 leading-none">
                    <span className="font-sans text-4xl font-black text-primary">12</span>
                    <span className="font-sans text-xl font-black text-primary/60">+</span>
                  </div>
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Locations
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 rounded-sm border border-white/[0.06] bg-surface-dark p-5">
                  <div className="flex items-baseline gap-0.5 leading-none">
                    <span className="font-sans text-4xl font-black text-primary">1M</span>
                    <span className="font-sans text-xl font-black text-primary/60">+</span>
                  </div>
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Sq ft Managed
                  </span>
                </div>
              </div>
              {/* Expansion badge */}
              <div className="flex items-center gap-2 rounded-sm border border-primary/25 bg-primary/10 px-4 py-3">
                <span
                  className="material-symbols-outlined text-[18px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                  aria-hidden="true"
                >
                  trending_up
                </span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-primary-glow">
                  Expansion Mode — 4 new cities in 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* 7 — Network Connectivity */}
      <FadeInSection className="border-t border-white/[0.05] bg-surface-darker/60 py-16" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Workspace Network"
            title="Find a Location Near You"
            subtitle="Managed office locations connected via a unified enterprise network."
            className="mb-10"
          />
          <MapVisualization industries={["Charter Spaces"]} />
        </div>
      </FadeInSection>

      {/* 8 — Request a Proposal (EnquiryForm centred) */}
      <FadeInSection className="border-t border-white/[0.05] py-20" delay={0.1}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
              Faithfully Customised
            </p>
            <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white">
              Request a Proposal
            </h2>
            <p className="mt-2 font-sans text-sm text-muted">
              Tell us your space requirements and we'll craft a tailored solution within 24 hours.
            </p>
          </div>
          <EnquiryForm
            serviceOptions={SERVICE_OPTIONS}
            formspreeId="YOUR_FORMSPREE_ID"
          />
        </div>
      </FadeInSection>
    </>
  );
}
