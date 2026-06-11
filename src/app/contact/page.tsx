import type { Metadata } from "next";
import { HeroSection }    from "@/components/sections/HeroSection";
import { SectionHeader }  from "@/components/sections/SectionHeader";
import { HubCard }        from "@/components/cards/HubCard";
import { EnquiryForm }    from "@/components/compound/EnquiryForm";
import { ContactInfo, InfoCard } from "@/components/compound/ContactInfo";
import { FadeInSection }  from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "Partner With Us | Ojha Group",
  description: "Connect with Ojha Group. Reach our global headquarters or regional hubs across India for enterprise partnerships and inquiries.",
  openGraph: {
    title: "Partner With Us | Ojha Group",
    description: "Connect with Ojha Group for enterprise partnerships.",
    images: [{ url: "/og/contact.jpg", width: 1200, height: 630 }],
  },
};

const SERVICE_OPTIONS = [
  "Warehousing & Logistics",
  "Charter Spaces / Managed Office",
  "Commercial Spaces / Leasing",
  "Electronics",
  "General Partnership",
];

const HUBS = [
  { name: "North Hub",  city: "New Delhi, India",   phone: "+91 11 2233 4455", direction: "up"    as const },
  { name: "South Hub",  city: "Bengaluru, India",   phone: "+91 80 2233 4455", direction: "down"  as const },
  { name: "East Hub",   city: "Kolkata, India",     phone: "+91 33 2233 4455", direction: "right" as const },
  { name: "West Hub",   city: "Mumbai, India",      phone: "+91 22 2233 4455", direction: "left"  as const },
];

export default function ContactPage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge="Enterprise Gateway"
        headline="Partner"
        highlightedWord="With Us."
        subtext="Connecting global enterprises with world-class infrastructure. Initiate your partnership with Ojha Group today."
        primaryBtn={{ label: "Submit Enquiry",    href: "#enquiry" }}
        ghostBtn={{ label: "View Global Map",     href: "#hubs" }}
        backgroundImage="https://picsum.photos/seed/contacthero/1600/900"
      />

      {/* 2 — Enquiry + Contact */}
      <FadeInSection id="enquiry" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
            <EnquiryForm
              serviceOptions={SERVICE_OPTIONS}
              formspreeId="YOUR_FORMSPREE_ID"
            />
            <ContactInfo
              heading="Global Headquarters"
              address="Ojha Tower, Financial District, Cyber City, Phase II, Gurugram, Haryana, 122002"
              phone="+91 124 456 7890"
              fax="+91 124 456 7899"
              email="partnerships@ojhagroup.in"
              emailLabel="Institutional Partnerships"
              extraCards={[
                <InfoCard
                  key="response"
                  icon="timer"
                  title="24-Hour Response Guarantee"
                  description="Our corporate team is committed to efficiency. All verified enterprise inquiries receive a response within 24 business hours."
                />,
              ]}
            />
          </div>
        </div>
      </FadeInSection>

      {/* 3 — Regional Hubs */}
      <FadeInSection
        id="hubs"
        className="border-t border-white/[0.05] py-20"
        delay={0.1}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <SectionHeader title="Regional Hubs" />
            <a
              href="#"
              className="shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-glow"
            >
              View Global Map ↗
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HUBS.map((hub) => (
              <HubCard key={hub.name} {...hub} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
