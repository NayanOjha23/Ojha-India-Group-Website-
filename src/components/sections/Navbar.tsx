"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, INDUSTRIES_DROPDOWN, SITE_NAME } from "@/lib/constants";

function OjhaLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="4" fill="#2559f4" />
        <polygon points="14,6 24,22 4,22" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <line x1="14" y1="6" x2="14" y2="22" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <line x1="4" y1="22" x2="24" y2="22" stroke="white" strokeWidth="1.2" opacity="0.5" />
      </svg>
      <span className="font-sans text-sm font-semibold tracking-[0.06em] text-white uppercase">
        {SITE_NAME}
      </span>
    </Link>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={cn("transition-transform duration-200", open && "rotate-180")}
    >
      <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DropdownPanel({ pathname, onSelect }: { pathname: string; onSelect?: () => void }) {
  return (
    <div className="flex flex-col py-2">
      {INDUSTRIES_DROPDOWN.map((item) => {
        const active = pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/";
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onSelect}
            className={cn(
              "group relative flex items-start gap-3 px-4 py-3 transition-colors duration-150",
              "hover:bg-white/[0.04]",
              active && "bg-white/[0.03]"
            )}
          >
            {/* Active left accent */}
            <span
              className={cn(
                "absolute inset-y-0 left-0 w-[3px] rounded-r-full bg-primary transition-opacity duration-150",
                active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
              )}
            />

            {/* Icon */}
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/20">
              <span
                className="material-symbols-outlined text-[16px] text-primary"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                aria-hidden="true"
              >
                {item.icon}
              </span>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-0.5">
              <span className={cn(
                "font-sans text-[13px] font-semibold leading-snug transition-colors",
                active ? "text-white" : "text-white/80 group-hover:text-white"
              )}>
                {item.label}
              </span>
              <span className="font-sans text-[11px] leading-snug text-muted">
                {item.description}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const industriesActive = INDUSTRIES_DROPDOWN.some(
    (item) => pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/"
  ) || pathname === "/industries";

  function handleMouseEnter() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setDropdownOpen(true);
  }

  function handleMouseLeave() {
    leaveTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-surface-darker">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <OjhaLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Home */}
          <Link
            href="/"
            className={cn(
              "font-sans text-[13px] font-medium tracking-wide transition-colors duration-150",
              pathname === "/" ? "text-white" : "text-muted hover:text-white"
            )}
          >
            Home
          </Link>

          {/* Industries dropdown trigger */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={cn(
                "flex items-center gap-1.5 font-sans text-[13px] font-medium tracking-wide transition-colors duration-150",
                industriesActive || dropdownOpen ? "text-white" : "text-muted hover:text-white"
              )}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown open={dropdownOpen} />
            </button>

            {/* Dropdown panel */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  key="industries-dropdown"
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className={cn(
                    "absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2",
                    "w-72 overflow-hidden rounded-lg",
                    "border border-white/[0.06] bg-[#111318]",
                    "shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                  )}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Top connector bridge (invisible gap filler) */}
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  <DropdownPanel pathname={pathname} onSelect={() => setDropdownOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About + Contact */}
          {NAV_LINKS.filter((l) => l.href !== "/").map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[13px] font-medium tracking-wide transition-colors duration-150",
                  active ? "text-white" : "text-muted hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button variant="primary" className="py-2 px-4 text-[11px]">
              Partner Login
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={cn("block h-px w-5 bg-white origin-center transition-transform duration-200", mobileOpen && "translate-y-[7px] rotate-45")} />
            <span className={cn("block h-px w-5 bg-white transition-opacity duration-150", mobileOpen && "opacity-0")} />
            <span className={cn("block h-px w-5 bg-white origin-center transition-transform duration-200", mobileOpen && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-surface-darker md:hidden"
          >
            <nav className="flex flex-col px-4 pb-5 pt-3 gap-1">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "py-2.5 font-sans text-sm font-medium tracking-wide transition-colors",
                  pathname === "/" ? "text-white" : "text-muted hover:text-white"
                )}
              >
                Home
              </Link>

              {/* Industries accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                  className={cn(
                    "flex w-full items-center justify-between py-2.5 font-sans text-sm font-medium tracking-wide transition-colors",
                    industriesActive || mobileIndustriesOpen ? "text-white" : "text-muted"
                  )}
                >
                  Industries
                  <ChevronDown open={mobileIndustriesOpen} />
                </button>

                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      key="mobile-industries"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mb-1 ml-3 flex flex-col gap-0.5 border-l-2 border-primary/30 pl-3">
                        {INDUSTRIES_DROPDOWN.map((item) => {
                          const active = pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/";
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }}
                              className={cn(
                                "flex items-center gap-2.5 rounded-sm py-2 px-2 transition-colors",
                                active ? "text-white" : "text-muted hover:text-white"
                              )}
                            >
                              <span
                                className="material-symbols-outlined text-[14px] text-primary shrink-0"
                                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
                                aria-hidden="true"
                              >
                                {item.icon}
                              </span>
                              <span className="font-sans text-[13px]">{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About + Contact */}
              {NAV_LINKS.filter((l) => l.href !== "/").map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "py-2.5 font-sans text-sm font-medium tracking-wide transition-colors",
                      active ? "text-white" : "text-muted hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3">
                <Button variant="primary" className="w-full justify-center">
                  Partner Login
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
