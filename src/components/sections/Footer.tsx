"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  FOOTER_COLUMNS,
  FOOTER_BLURB,
  LEGAL_LINKS,
  SITE_NAME,
} from "@/lib/constants";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L2.012 2.25h6.946l4.262 5.636 5.024-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface-darker">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Col 1 — Brand + blurb */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/OIG Logo.png"
              alt={SITE_NAME}
              width={177}
              height={101}
              className="h-10 w-auto"
            />
          </Link>

          <p className="font-sans text-[13px] leading-relaxed text-muted">
            {FOOTER_BLURB}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            {[
              { href: "https://linkedin.com", icon: <LinkedInIcon />, label: "LinkedIn" },
              { href: "https://twitter.com",  icon: <TwitterIcon />,  label: "Twitter" },
              { href: "https://youtube.com",  icon: <YoutubeIcon />,  label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded border border-white/10 text-muted transition-colors hover:border-primary/50 hover:text-primary-glow"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Cols 2–3 — Link columns */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading} className="flex flex-col gap-4">
            <SectionLabel text={col.heading} />
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[13px] text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Col 4 — Newsletter */}
        <div className="flex flex-col gap-4">
          <SectionLabel text="Industrial Insights" />
          <p className="font-sans text-[13px] leading-relaxed text-muted">
            Join our newsletter for the latest market analysis and group updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2.5 mt-1"
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full rounded-sm border border-white/10 bg-surface-dark px-3 py-2.5 font-sans text-xs text-white placeholder:text-muted/60 outline-none focus:border-primary/50 transition-colors"
            />
            <button
              type="submit"
              className="w-full rounded-sm bg-primary py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-glow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="font-sans text-[11px] text-muted/70">
            © {year} {SITE_NAME}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] text-muted/70 uppercase tracking-[0.1em] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
