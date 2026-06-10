"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { cn } from "@/lib/utils";
import {
  MAP_COMPANIES,
  INDUSTRY_COLORS,
  type MapCompany,
} from "@/lib/constants";

const GEO_URL = "/india-states.json";

const INDUSTRIES = [
  "Warehousing",
  "Charter Spaces",
  "Real Estate",
  "Electronics",
] as const;

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function SidebarEmpty() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-12 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
        <span
          className="material-symbols-outlined text-[22px] text-muted"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
          aria-hidden="true"
        >
          location_on
        </span>
      </div>
      <p className="font-sans text-[13px] leading-relaxed text-muted">
        Select a location on the map<br />to view details
      </p>
    </div>
  );
}

function SidebarActive({
  company,
  onDeselect,
}: {
  company: MapCompany;
  onDeselect: () => void;
}) {
  const router = useRouter();
  const color = INDUSTRY_COLORS[company.industry];

  return (
    <motion.div
      key={company.id}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex h-full flex-col gap-5 p-5"
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span
          className="inline-flex w-fit rounded-sm border px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-widest"
          style={{ borderColor: `${color}33`, color }}
        >
          {company.regionTag}
        </span>
        <h3 className="font-sans text-2xl font-black uppercase leading-[0.95] tracking-tighter text-white">
          {company.name}
        </h3>
        <p className="font-sans text-sm text-muted">{company.city}</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2">
        {company.stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 rounded-sm border border-white/[0.06] p-3"
          >
            <span className="font-sans text-xl font-bold text-white">{s.value}</span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-muted">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Details list */}
      <div className="flex flex-col">
        {company.details.map((d, i) => (
          <div
            key={d.label}
            className={cn(
              "flex items-center justify-between py-2",
              i < company.details.length - 1 && "border-b border-white/[0.06]"
            )}
          >
            <span className="font-sans text-sm text-slate-300">{d.label}</span>
            <span className="font-sans text-sm font-bold" style={{ color }}>
              {d.value}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-col gap-2.5">
        <button
          onClick={() => router.push(company.href)}
          className="w-full rounded-sm bg-white py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-surface-dark transition-colors hover:bg-white/90"
        >
          {company.ctaLabel}
        </button>
        <button
          onClick={onDeselect}
          className="w-full rounded-sm border border-white/[0.10] bg-transparent py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white/20"
        >
          View All Locations
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.06] pt-4">
        {INDUSTRIES.map((ind) => (
          <div key={ind} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: INDUSTRY_COLORS[ind] }}
            />
            <span className="font-sans text-[10px] text-muted">{ind}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function MapVisualization() {
  const [active, setActive] = useState<MapCompany | null>(null);

  return (
    <div className="grid min-h-[600px] grid-cols-1 gap-0 overflow-hidden rounded-sm border border-white/[0.06] bg-surface-dark lg:grid-cols-12">

      {/* ── Map panel (8 cols) ──────────────────────────────────── */}
      <div className="relative min-h-[500px] lg:col-span-8">
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#2559f4 1px, transparent 1px), linear-gradient(90deg, #2559f4 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [80, 22], scale: 1050 }}
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  tabIndex={-1}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {...({ pointerEvents: "none" } as any)}
                  style={{
                    default: {
                      fill: "transparent",
                      stroke: "#2559f4",
                      strokeWidth: 0.8,
                      strokeOpacity: 0.6,
                      outline: "none",
                    },
                    hover: {
                      fill: "transparent",
                      stroke: "#2559f4",
                      strokeWidth: 0.8,
                      strokeOpacity: 0.6,
                      outline: "none",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {MAP_COMPANIES.map((company) => {
            const color = INDUSTRY_COLORS[company.industry];
            const isActive = active?.id === company.id;

            const handleClick = () => setActive(isActive ? null : company);

            return (
              <Marker
                key={company.id}
                coordinates={company.coordinates}
              >
                {/* Pulsing outer ring — no pointer events */}
                <circle
                  r={isActive ? 18 : 14}
                  fill={color}
                  fillOpacity={isActive ? 0.25 : 0.15}
                  pointerEvents="none"
                  style={{ animation: "pulse-ring 2s infinite" }}
                />
                {/* Inner dot — no pointer events */}
                <circle
                  r={isActive ? 7 : 5}
                  fill={color}
                  stroke={isActive ? "white" : "none"}
                  strokeWidth={isActive ? 1.5 : 0}
                  pointerEvents="none"
                />
                {/* Hit area — topmost, transparent, full pointer events */}
                <circle
                  r={22}
                  fill="transparent"
                  pointerEvents="all"
                  cursor="pointer"
                  onClick={handleClick}
                />
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Pulse keyframe injected inline */}
        <style>{`
          @keyframes pulse-ring {
            0%   { transform: scale(1);   opacity: 0.6; }
            50%  { transform: scale(1.35); opacity: 0.2; }
            100% { transform: scale(1);   opacity: 0.6; }
          }
        `}</style>

        {/* Network Online badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-sm border border-white/[0.06] bg-surface-darker/80 px-3 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-400">
            Network Online
          </span>
        </div>
      </div>

      {/* ── Sidebar (4 cols) ────────────────────────────────────── */}
      <div className="flex flex-col border-t border-white/[0.06] lg:col-span-4 lg:border-l lg:border-t-0">
        <AnimatePresence mode="wait">
          {active ? (
            <SidebarActive
              key={active.id}
              company={active}
              onDeselect={() => setActive(null)}
            />
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col"
            >
              <SidebarEmpty />

              {/* Legend always visible in empty state */}
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.06] p-5">
                {INDUSTRIES.map((ind) => (
                  <div key={ind} className="flex items-center gap-1.5">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: INDUSTRY_COLORS[ind] }}
                    />
                    <span className="font-sans text-[10px] text-muted">{ind}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
