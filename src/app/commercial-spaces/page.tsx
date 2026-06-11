import type { Metadata } from "next";
import { HeroSection }    from "@/components/sections/HeroSection";
import { SectionHeader }  from "@/components/sections/SectionHeader";
import { PropertyCard }   from "@/components/cards/PropertyCard";
import { AdvantageCard }  from "@/components/cards/AdvantageCard";
import { LogoStrip }      from "@/components/sections/LogoStrip";
import { MapVisualization } from "@/components/ui/MapVisualization";
import { ChecklistItem }  from "@/components/ui/ChecklistItem";
import { EnquiryForm }    from "@/components/compound/EnquiryForm";
import { ContactInfo, InfoCard } from "@/components/compound/ContactInfo";
import { FadeInSection }  from "@/components/ui/FadeInSection";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Premium Commercial Spaces",
  description:
    "Developing India's skyline with Grade-A office spaces and high-traffic retail developments across the nation's most influential urban corridors.",
  openGraph: {
    title: "Premium Commercial Spaces | Ojha Group",
    description:
      "Grade-A office spaces and high-traffic retail developments across India's most influential urban corridors.",
    images: [{ url: "/og/commercial-spaces.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const PORTFOLIO = [
  {
    image: "https://picsum.photos/seed/gradeaoffice/600/400",
    badge: { label: "Available", color: "green" as const },
    title: "Grade-A Offices",
    features: ["LEED Gold Certified", "Smart Building Integration", "High-Speed Elevators"],
    ctaLabel: "View Space",
    href: "/commercial-spaces#offices",
  },
  {
    image: "https://picsum.photos/seed/retailhub/600/400",
    badge: { label: "High Demand", color: "amber" as const },
    title: "Retail Hubs",
    features: ["High-Street Advantage", "High-Footfall Zones", "Automated Parking"],
    ctaLabel: "View Space",
    href: "/commercial-spaces#retail",
  },
  {
    image: "https://picsum.photos/seed/mixeduse/600/400",
    badge: { label: "Pre-Launch", color: "blue" as const },
    title: "Mixed-Use",
    features: ["Integrated Living", "Premium Amenities", "24/7 Concierge"],
    ctaLabel: "View Space",
    href: "/commercial-spaces#mixed-use",
  },
];

const ADVANTAGES = [
  {
    icon: "apartment",
    title: "Market-Leading Rental Structures",
    description: "Offering competitive leasing models with flexible lock-in periods and scalable rental agreements designed for enterprise growth.",
  },
  {
    icon: "security",
    title: "Advanced Security Systems",
    description: "360° security protocols including biometric access, AI surveillance, and 24/7 rapid-response teams for total asset protection.",
  },
  {
    icon: "hub",
    title: "Strategic Multi-Modal Connectivity",
    description: "Locations selected for proximity to metro lines, expressways, and airports ensuring seamless commutes for employees and clients.",
  },
];

const KEY_PROJECTS = [
  {
    image: "https://picsum.photos/seed/ojhanexus/800/500",
    badge: { label: "Occupied", color: "green" as const },
    title: "The Ojha Nexus",
    features: [
      "Cyber City, Gurugram — 21 Firs",
      "A flexible, 21-storey commercial tower",
      "Fortune 500 tenants, large-floor plates",
    ],
    ctaLabel: "View Project",
    href: "/commercial-spaces/ojha-nexus",
  },
  {
    image: "https://picsum.photos/seed/zenithplaza/800/500",
    badge: { label: "Available", color: "blue" as const },
    title: "Zenith Plaza",
    features: [
      "BKC, Mumbai — Commercial",
      "India's financial district Grade-A tower",
      "LEED certified, premium anchor floors",
    ],
    ctaLabel: "View Project",
    href: "/commercial-spaces/zenith-plaza",
  },
];

const TENANTS = [
  "Goldman Sachs", "Microsoft", "Deloitte", "HDFC Bank",
  "Amazon", "Tata Consultancy", "Infosys", "Reliance",
];

const COMPLIANCE_CHECKLIST = [
  "National Building Code (NBC) Adherence",
  "Structural Load Clearance (SLC)",
  "Fire Safety Standards",
  "Structural Stability Certification",
];

const SERVICE_OPTIONS = [
  "Grade-A Office Space",
  "Retail / High-Street",
  "Mixed-Use Development",
  "Build-to-Suit Corporate Campus",
  "Investment Inquiry",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CommercialSpacesPage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="Premium Infrastructure Development"
        headline="Strategic Assets."
        highlightedWord="Prime Horizons."
        subtext="Developing India's skyline with Grade-A office spaces and high-traffic retail developments across the nation's most influential urban corridors."
        primaryBtn={{ label: "View Portfolio",    href: "/commercial-spaces#portfolio" }}
        ghostBtn={{ label: "Corporate Vision",    href: "/about#vision" }}
        backgroundImage="https://picsum.photos/seed/commercialspaceshero/1600/900"
      />

      {/* 2 — Asset Portfolio */}
      <FadeInSection id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHeader
            eyebrow="Core Competencies"
            title="Asset Portfolio"
          />
          <p className="font-sans text-[13px] leading-relaxed text-muted lg:text-right">
            Our diverse portfolio represents the pinnacle of architectural excellence
            and commercial viability in major Indian metros.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <PropertyCard key={p.title} {...p} />
          ))}
        </div>
      </FadeInSection>

      {/* 3 — Competitive Advantages */}
      <FadeInSection className="border-t border-white/[0.05] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Ojha Group"
            title="Competitive Advantages"
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a) => (
              <AdvantageCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* 4 — Key Projects */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" delay={0.1}>
        <SectionHeader
          eyebrow="Landmarks"
          title="Key Projects"
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {KEY_PROJECTS.map((p) => (
            <PropertyCard key={p.title} {...p} />
          ))}
        </div>
      </FadeInSection>

      {/* 5 — Network Connectivity */}
      <FadeInSection className="border-y border-white/[0.05] bg-surface-darker/60 py-16" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Geographic Footprint"
            title="Our Property Network"
            subtitle="Grade-A commercial assets strategically located across India's key business districts."
            className="mb-10"
          />
          <MapVisualization industries={["Commercial Spaces"]} />
        </div>
      </FadeInSection>

      {/* 6 — Logo Strip */}
      <LogoStrip eyebrow="Trusted by Global Leaders" logos={TENANTS} />

      {/* 7 — Governance */}
      <FadeInSection className="py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Policy & Control
          </p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: governance copy + badges */}
            <div className="flex flex-col gap-6">
              <h2 className="font-sans text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
                Built on Trust{" "}
                <span className="text-primary">&</span> Transparency
              </h2>
              <p className="font-sans text-[13px] leading-relaxed text-muted max-w-md">
                At Ojha Group, we adhere to the highest standards of corporate
                governance and regulatory compliance. Every square foot we develop
                is a testament to our commitment to legal integrity and safety.
              </p>
              {/* Compliance badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "gavel",      label: "RERA Compliant" },
                  { icon: "verified",   label: "ISO 9001:2015"  },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="inline-flex items-center gap-2 rounded-sm border border-primary/25 bg-primary/10 px-3 py-1.5"
                  >
                    <span
                      className="material-symbols-outlined text-[14px] text-primary"
                      style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                      aria-hidden="true"
                    >
                      {b.icon}
                    </span>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-primary-glow">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: compliance checklist */}
            <div className="rounded-sm border border-white/[0.06] bg-surface-dark p-6">
              <p className="mb-5 font-sans text-[11px] font-black uppercase tracking-[0.16em] text-white">
                Compliance Checklist
              </p>
              <ul className="flex flex-col gap-3">
                {COMPLIANCE_CHECKLIST.map((item) => (
                  <ChecklistItem key={item}>{item}</ChecklistItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* 8 — Enquiry + Contact */}
      <FadeInSection className="border-t border-white/[0.05] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
              Leasing & Partnership
            </p>
            <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white">
              Secure Your Future Space
            </h2>
            <p className="mt-2 font-sans text-sm text-muted max-w-lg">
              Join India's leading corporations in our award-winning Grade-A
              developments. Flexible leasing solutions tailored to your company's
              scale and ambition.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
            <EnquiryForm
              serviceOptions={SERVICE_OPTIONS}
              formspreeId="YOUR_FORMSPREE_ID"
            />
            <div className="flex flex-col gap-5">
              <ContactInfo
                heading="Global Headquarters"
                address="Ojha Tower, Financial District, Cyber City, Phase II, Gurugram, Haryana, 122002"
                phone="+91 124 456 7890"
                fax="+91 124 456 7899"
                email="leasing@ojhagroup.in"
                emailLabel="Institutional Partnerships"
                extraCards={[
                  <InfoCard
                    key="response"
                    icon="timer"
                    title="24-Hour Response Guarantee"
                    description="All verified enterprise inquiries receive a response within 24 business hours."
                  />,
                ]}
              />
              {/* HQ address card */}
              <div className="rounded-sm border border-white/[0.06] bg-surface-dark p-5">
                <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-white mb-3">
                  Headquarters
                </p>
                <p className="font-sans text-[12px] leading-relaxed text-muted">
                  Ojha Tower, Plot Floor, Financial District,<br />
                  Cyber City, Phase II, Gurugram 122002
                </p>
                <div className="mt-3 flex flex-col gap-1">
                  <a href="tel:+911800OJHAGROUP" className="font-sans text-[12px] text-primary hover:text-primary-glow transition-colors">
                    +1-800-OJHA-GROUP
                  </a>
                  <a href="mailto:leasing@ojhagroup.in" className="font-sans text-[12px] text-primary hover:text-primary-glow transition-colors">
                    leasing@ojhagroup.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
