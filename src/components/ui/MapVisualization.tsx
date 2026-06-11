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
  MAP_LOCATIONS,
  SUB_COMPANIES,
  INDUSTRY_COLORS,
  type MapLocation,
  type SubCompany,
} from "@/lib/constants";

const GEO_URL = "/india-states.json";

const INDUSTRIES = SUB_COMPANIES.map((c) => c.industry);

function companyFor(location: MapLocation): SubCompany {
  return SUB_COMPANIES.find((c) => c.id === location.companyId)!;
}

function statesFor(companyId: string): string[] {
  return Array.from(
    new Set(MAP_LOCATIONS.filter((l) => l.companyId === companyId).map((l) => l.state))
  );
}

function initialsFor(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// ─── Filter legend ───────────────────────────────────────────────────────────

function FilterLegend({
  activeFilters,
  onToggle,
}: {
  activeFilters: Set<SubCompany["industry"]>;
  onToggle: (industry: SubCompany["industry"]) => void;
}) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {INDUSTRIES.map((ind) => {
        const isActive = activeFilters.size === 0 || activeFilters.has(ind);
        return (
          <button
            key={ind}
            type="button"
            onClick={() => onToggle(ind)}
            className={cn(
              "flex items-center gap-1.5 rounded-sm border px-2 py-1 transition-colors",
              isActive
                ? "border-white/[0.10] bg-white/[0.04]"
                : "border-white/[0.04] opacity-40 hover:opacity-70"
            )}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: INDUSTRY_COLORS[ind] }}
            />
            <span className="font-sans text-[10px] text-muted">{ind}</span>
          </button>
        );
      })}
    </div>
  );
}

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
        Select a location on the map<br />to find the right company
      </p>
    </div>
  );
}

function SidebarActive({
  location,
  onDeselect,
}: {
  location: MapLocation;
  onDeselect: () => void;
}) {
  const router = useRouter();
  const company = companyFor(location);
  const color = INDUSTRY_COLORS[company.industry];
  const states = statesFor(company.id);

  return (
    <motion.div
      key={location.id}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex h-full flex-col gap-5 overflow-y-auto p-5"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span
          className="inline-flex w-fit items-center rounded-sm border px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest"
          style={{ borderColor: `${color}4D`, backgroundColor: `${color}1A`, color }}
        >
          {company.industry}
        </span>
        <span
          className="material-symbols-outlined shrink-0 text-[20px] text-muted"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
          aria-hidden="true"
        >
          my_location
        </span>
      </div>

      {/* Title + ID */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-sans text-2xl font-black uppercase leading-[1.05] tracking-tight text-white">
          {location.facilityType}
        </h3>
        <p className="font-sans text-sm text-muted">
          {location.city}, {location.state}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
          ID: {location.code}
        </p>
      </div>

      <div className="border-t border-white/[0.06]" />

      {/* Stats row */}
      <div className="grid grid-cols-2 divide-x divide-white/[0.06]">
        {company.stats.map((s, i) => (
          <div
            key={s.label}
            className={cn("flex flex-col gap-1.5", i === 0 ? "pr-4" : "pl-4")}
          >
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              {s.label}
            </span>
            <span className="font-sans text-2xl font-black leading-none text-white">
              {s.value}
            </span>
          </div>
        ))}
      </div>

      {/* Key infrastructure */}
      <div className="flex flex-col gap-1">
        <h4 className="border-b border-white/[0.06] pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          Key Infrastructure
        </h4>
        <div className="flex flex-col">
          {location.infrastructure.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center justify-between py-2.5",
                i < location.infrastructure.length - 1 && "border-b border-white/[0.04]"
              )}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ color, fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span className="font-sans text-sm text-slate-300">{item.label}</span>
              </div>
              <span className="font-sans text-sm font-bold text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Operated by */}
      <div className="flex flex-col gap-3">
        <h4 className="border-b border-white/[0.06] pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          Operated By
        </h4>
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border font-sans text-sm font-black"
            style={{ borderColor: `${color}4D`, backgroundColor: `${color}1A`, color }}
          >
            {initialsFor(company.name)}
          </div>
          <span className="font-sans text-sm font-bold text-white">{company.name}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {states.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-sans text-[10px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-col gap-2.5 pt-2">
        <button
          onClick={() => router.push(company.href)}
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-white py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-surface-dark transition-colors hover:bg-white/90"
        >
          {company.ctaLabel}
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            arrow_forward
          </span>
        </button>
        <button
          onClick={onDeselect}
          className="w-full rounded-sm border border-white/[0.10] bg-transparent py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white/20"
        >
          View All Locations
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface MapVisualizationProps {
  industries?: SubCompany["industry"][];
}

export function MapVisualization({ industries }: MapVisualizationProps = {}) {
  const [active, setActive] = useState<MapLocation | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<SubCompany["industry"]>>(
    new Set()
  );

  const locations = industries
    ? MAP_LOCATIONS.filter((l) => industries.includes(companyFor(l).industry))
    : MAP_LOCATIONS;

  const toggleFilter = (industry: SubCompany["industry"]) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.size === 0) {
        // Nothing filtered yet — clicking one isolates it
        INDUSTRIES.forEach((i) => i !== industry && next.add(i));
        return next;
      }
      if (next.has(industry)) {
        next.delete(industry);
      } else {
        next.add(industry);
      }
      // If everything ends up filtered out (or everything is back on), reset to "show all"
      if (next.size === 0 || next.size === INDUSTRIES.length) {
        return new Set();
      }
      return next;
    });
    setActive(null);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">

      {/* ── Map panel (8 cols) ──────────────────────────────────── */}
      <div
        className="relative min-h-[500px] overflow-hidden rounded-sm border border-white/[0.06] bg-surface-dark lg:col-span-8 lg:min-h-[600px]"
        style={{ boxShadow: "0 0 30px rgba(77, 123, 255, 0.1)" }}
      >
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

          {locations.map((location) => {
            const company = companyFor(location);
            const color = INDUSTRY_COLORS[company.industry];
            const isActive = active?.id === location.id;
            const isVisible =
              activeFilters.size === 0 || activeFilters.has(company.industry);

            const handleClick = () => setActive(isActive ? null : location);

            return (
              <Marker
                key={location.id}
                coordinates={location.coordinates}
                opacity={isVisible ? 1 : 0.15}
              >
                {/* Pulsing outer ring — no pointer events */}
                <circle
                  r={isActive ? 18 : 14}
                  fill={color}
                  fillOpacity={isActive ? 0.25 : 0.15}
                  pointerEvents="none"
                  style={{ animation: isVisible ? "pulse-ring 2s infinite" : "none" }}
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
                  pointerEvents={isVisible ? "all" : "none"}
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

        {/* Filter legend */}
        {!industries && (
          <div className="absolute bottom-4 right-4 rounded-sm border border-white/[0.06] bg-surface-darker/80 p-2 backdrop-blur-sm">
            <FilterLegend activeFilters={activeFilters} onToggle={toggleFilter} />
          </div>
        )}
      </div>

      {/* ── Sidebar (4 cols) ────────────────────────────────────── */}
      <div
        className="flex flex-col overflow-hidden rounded-sm border border-white/[0.06] bg-white/[0.02] lg:col-span-4"
        style={{ boxShadow: "0 0 30px rgba(77, 123, 255, 0.1)" }}
      >
        <AnimatePresence mode="wait">
          {active ? (
            <SidebarActive
              key={active.id}
              location={active}
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

              {/* Filter legend always visible in empty state */}
              {!industries && (
                <div className="mt-auto border-t border-white/[0.06] p-5">
                  <FilterLegend activeFilters={activeFilters} onToggle={toggleFilter} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
