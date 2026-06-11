import type { Metadata } from "next";
import { HeroSection }   from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { PropertyCard }  from "@/components/cards/PropertyCard";
import { FeatureCard }   from "@/components/cards/FeatureCard";
import { EnquiryForm }   from "@/components/compound/EnquiryForm";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { MapVisualization } from "@/components/ui/MapVisualization";
import { cn } from "@/lib/utils";

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
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Private Offices",
    features: ["Fully Serviced", "Prestigious Addresses", "Uninterruptible Uptime"],
    details: {
      description: "Lockable, fully-furnished private suites for teams of 1-10, with 24/7 access and prestigious business addresses across our network.",
      specs: [
        { label: "Seating Capacity", value: "1 – 10 Seats" },
        { label: "Lease Term", value: "From 3 Months" },
        { label: "Furnishing", value: "Fully Furnished" },
        { label: "Access", value: "24/7 Keycard" },
      ],
      amenities: ["Reception Service", "Mail Handling", "Daily Housekeeping", "Visitor Parking"],
    },
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: { label: "Most Popular", color: "blue" as const },
    title: "Managed Suites",
    features: ["Dedicated Floor Open-Plan", "Brand Interaction Space", "Private Meeting Rooms"],
    details: {
      description: "Dedicated full-floor suites with private meeting rooms and branded interaction spaces — built for growing teams of 10-50.",
      specs: [
        { label: "Seating Capacity", value: "10 – 50 Seats" },
        { label: "Floor Plan", value: "Dedicated Floor" },
        { label: "Meeting Rooms", value: "2 Private Rooms" },
        { label: "Branding", value: "Custom Signage" },
      ],
      amenities: ["Dedicated IT Support", "Pantry & Café", "Event Space Access", "Reserved Parking"],
    },
  },
  {
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hybrid Hubs",
    features: ["Flexible Desk Arrangements", "Community Grants", "Hot Desking"],
    details: {
      description: "Flexible hot-desking and community-driven workspace for startups and remote teams, with access to a network of 500+ enterprises.",
      specs: [
        { label: "Desk Options", value: "Hot & Fixed Desks" },
        { label: "Access Hours", value: "24/7 Entry" },
        { label: "Membership", value: "Monthly / Annual" },
        { label: "Community", value: "500+ Members" },
      ],
      amenities: ["Hot Desks", "Lounge Access", "Networking Events", "Print & Scan"],
    },
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
  { city: "Mumbai", hub: "BKC Hub", description: "India's premier financial centre." },
  { city: "Bengaluru", hub: "Tech Corridor", description: "Global tech hub connectivity." },
  { city: "Gurugram", hub: "Cyber City", description: "Pan-national business district." },
];

const GUARANTEE_STATS = [
  { value: "100", unit: "%", label: "Asset-Owned Portfolio" },
  { value: "0", unit: undefined, label: "Landlord Dependency" },
  { value: "24/7", unit: undefined, label: "In-House Facility Mgmt." },
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
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* 2 — Asset-backed guarantee */}
      <FadeInSection className="border-b border-white/[0.05] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-sm border border-white/[0.06] backdrop-blur-[12px]"
            style={{ backgroundColor: "rgba(21,26,42,0.6)" }}
          >
            <div className="flex flex-col items-center gap-5 p-8 text-center sm:p-12 lg:p-14">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                The Asset-Backed Guarantee
              </p>
              <h2 className="max-w-3xl font-sans text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Own the Ground You <span className="text-primary">Operate On.</span>
              </h2>
              <p className="max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
                Ojha India Group provides a modern, asset-backed framework ensuring
                long-term stability and operational excellence. Unlike traditional
                leasing, our ownership model guarantees{" "}
                <span className="text-primary font-medium">absolute consistency.</span>
              </p>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-1 border-t border-white/[0.06] sm:grid-cols-3">
              {GUARANTEE_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    "flex flex-col items-center gap-1.5 px-6 py-8 text-center",
                    i > 0 && "border-t border-white/[0.06] sm:border-t-0 sm:border-l"
                  )}
                >
                  <div className="flex items-baseline gap-0.5 leading-none">
                    <span className="font-sans text-4xl font-black text-primary sm:text-5xl">
                      {s.value}
                    </span>
                    {s.unit && (
                      <span className="font-sans text-xl font-black text-primary/70">
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORKSPACES.map((w) => (
              <PropertyCard key={w.title} {...w} />
            ))}

            {/* Custom workspace CTA card */}
            <div className="group relative flex flex-col overflow-hidden rounded-sm border border-primary/20 bg-surface-dark transition-colors duration-300 hover:border-primary/40">
              <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-surface-dark to-surface-dark">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
                  aria-hidden="true"
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                  <span
                    className="material-symbols-outlined text-[28px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 28" }}
                    aria-hidden="true"
                  >
                    design_services
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="font-sans text-sm font-black uppercase tracking-[0.1em] text-white">
                  Custom Workspace
                </h3>
                <p className="font-sans text-[12px] leading-relaxed text-muted">
                  Have a unique brief? Share your headcount, layout and amenity
                  requirements and our design team will build a bespoke space
                  around them.
                </p>
                <div className="mt-auto pt-3 border-t border-white/[0.06]">
                  <a
                    href="/charter-spaces#proposal"
                    className="inline-flex items-center gap-1 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-glow"
                  >
                    Submit Requirements
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AMENITIES.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} description={a.description} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 6 — Network Connectivity */}
      <FadeInSection id="nodes" className="border-t border-white/[0.05] bg-surface-darker/60 py-16" delay={0.1}>
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

      {/* 7 — Strategic Nodes */}
      <FadeInSection
        className="border-t border-white/[0.05] bg-surface-darker/40 py-20"
        delay={0.1}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left: heading + location cards */}
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
              <div className="flex flex-col gap-3">
                {STRATEGIC_NODES.map((node) => (
                  <div
                    key={node.city}
                    className="flex items-start gap-4 rounded-sm border border-white/[0.06] bg-surface-dark p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25">
                      <span
                        className="material-symbols-outlined text-[18px] text-primary"
                        style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                        aria-hidden="true"
                      >
                        location_on
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-sm font-black uppercase tracking-[0.08em] text-white">
                          {node.city}
                        </span>
                        <span className="rounded-sm border border-primary/25 bg-primary/10 px-2 py-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-primary-glow">
                          {node.hub}
                        </span>
                      </div>
                      <p className="font-sans text-[12px] leading-relaxed text-muted">
                        {node.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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

      {/* 8 — Request a Proposal (EnquiryForm centred) */}
      <FadeInSection id="proposal" className="border-t border-white/[0.05] py-20" delay={0.1}>
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
