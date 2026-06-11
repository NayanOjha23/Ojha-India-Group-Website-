import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { HeroSection }   from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FacilityPortfolio } from "@/components/sections/FacilityPortfolio";
import { MetricCard }    from "@/components/cards/MetricCard";
import { EnquiryForm }   from "@/components/compound/EnquiryForm";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { WAREHOUSING_DIVISIONS, getWarehousingDivision } from "@/lib/warehousing-divisions";

interface PageProps {
  params: Promise<{ division: string }>;
}

// ─── Static params + metadata ──────────────────────────────────────────────

export function generateStaticParams() {
  return WAREHOUSING_DIVISIONS.map((d) => ({ division: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { division: slug } = await params;
  const division = getWarehousingDivision(slug);
  if (!division) return {};

  return {
    title: division.metadata.title,
    description: division.metadata.description,
    openGraph: {
      title: `${division.metadata.title} | Ojha Group`,
      description: division.metadata.description,
      images: [{ url: division.metadata.ogImage, width: 1200, height: 630 }],
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function WarehousingDivisionPage({ params }: PageProps) {
  const { division: slug } = await params;
  const division = getWarehousingDivision(slug);
  if (!division) notFound();

  const { hero, coverage, facilities, standard, leadership } = division;

  return (
    <>
      {/* 1 — Hero */}
      <HeroSection
        badge={hero.badge}
        headline={hero.headline}
        highlightedWord={hero.highlightedWord}
        subtext={hero.subtext}
        primaryBtn={{ label: "View Facilities",       href: `/warehousing/${slug}#facilities` }}
        ghostBtn={{ label: "Download Division Specs", href: `/warehousing/${slug}/brochure` }}
        backgroundImage={hero.backgroundImage}
      />

      {/* 2 — Regional Coverage */}
      <FadeInSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Left-border accent heading style from screenshot */}
        <div className="border-l-[3px] border-primary pl-5 mb-10">
          <SectionHeader
            title={coverage.title}
            subtitle={coverage.subtitle}
          />
        </div>

        <div className={`grid grid-cols-1 gap-4 ${coverage.gridClassName}`}>
          {coverage.regions.map((r) => (
            <div
              key={r.area}
              className="flex flex-col gap-4 rounded-sm border border-white/[0.06] bg-surface-dark p-5 transition-colors hover:border-white/[0.12]"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary/15">
                <span
                  className="material-symbols-outlined text-[18px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                  aria-hidden="true"
                >
                  {r.icon}
                </span>
              </div>

              {/* Area name + description */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans text-sm font-bold text-white">{r.area}</h3>
                <p className="font-sans text-[12px] leading-relaxed text-muted">{r.description}</p>
              </div>

              {/* City tags */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {r.cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-sm border border-white/10 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-muted/70"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* 3 — Facility Portfolio */}
      <FadeInSection
        id="facilities"
        className="border-t border-white/[0.05] bg-surface-darker/40 py-20"
        delay={0.1}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader
              title="Facility Portfolio"
              subtitle={facilities.subtitle}
            />
          </div>
          <FacilityPortfolio items={facilities.items} />
        </div>
      </FadeInSection>

      {/* 4 — The Ojha Standard */}
      <FadeInSection className="border-t border-white/[0.05] py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left: heading + body + protocol list */}
            <div className="flex flex-col gap-7">
              <div>
                <h2 className="font-sans text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl">
                  {standard.heading}
                  <br />
                  <span className="text-primary">{standard.highlight}</span>
                </h2>
                <p className="mt-5 font-sans text-[13px] leading-relaxed text-muted max-w-md">
                  {standard.body}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {standard.items.map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <span
                        className="material-symbols-outlined text-[14px] text-primary"
                        style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                        aria-hidden="true"
                      >
                        {s.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans text-[13px] font-bold text-white">{s.title}</p>
                      <p className="font-sans text-[12px] text-muted">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 2×2 MetricCard grid */}
            <div className="grid grid-cols-2 gap-4">
              {standard.metrics.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* 5 — Local Leadership + Direct Enquiry */}
      <FadeInSection className="border-t border-white/[0.05] bg-surface-darker/40 py-20" delay={0.1}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

            {/* Left: leadership */}
            <div className="flex flex-col gap-6">
              <SectionHeader
                title="Local Leadership"
                subtitle={leadership.subtitle}
              />

              {/* Person card */}
              <div className="flex items-start gap-5 rounded-sm border border-white/[0.06] bg-surface-dark p-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <Image
                    src={`https://picsum.photos/seed/${leadership.person.imageSeed}/200/200`}
                    alt={leadership.person.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-sans text-sm font-black uppercase tracking-[0.08em] text-white">
                    {leadership.person.name}
                  </p>
                  <p className="mt-0.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                    {leadership.person.title}
                  </p>
                </div>
              </div>

              {/* Regional HQ */}
              <div className="flex flex-col gap-2 rounded-sm border border-white/[0.06] bg-surface-dark p-5">
                <p className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-white">
                  {leadership.hq.name}
                </p>
                <p className="font-sans text-[12px] leading-relaxed text-muted">
                  {leadership.hq.addressLines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < leadership.hq.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <a
                  href={`tel:${leadership.hq.phone.replace(/\s+/g, "")}`}
                  className="mt-1 font-sans text-[12px] text-primary transition-colors hover:text-primary-glow"
                >
                  {leadership.hq.phone}
                </a>
              </div>
            </div>

            {/* Right: enquiry form */}
            <div>
              <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Direct Enquiry
              </p>
              <EnquiryForm
                serviceOptions={leadership.serviceOptions}
                formspreeId="YOUR_FORMSPREE_ID"
                variant="underline"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
