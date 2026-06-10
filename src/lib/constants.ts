export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface IndustryItem {
  label: string;
  href: string;
  icon: string;
  description: string;
}

export const INDUSTRIES_DROPDOWN: IndustryItem[] = [
  {
    label: "Warehousing & Logistics",
    href: "/warehousing",
    icon: "warehouse",
    description: "Grade-A industrial facilities across 14+ nodes",
  },
  {
    label: "Charter Spaces",
    href: "/charter-spaces",
    icon: "apartment",
    description: "Asset-backed managed offices, pan-India",
  },
  {
    label: "Real Estate",
    href: "/real-estate",
    icon: "domain",
    description: "Grade-A commercial & retail developments",
  },
  {
    label: "Electronics",
    href: "/industries#electronics",
    icon: "precision_manufacturing",
    description: "Advanced manufacturing & distribution",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home",              href: "/" },
      { label: "About Us",          href: "/about" },
      { label: "Business Verticals",href: "/industries" },
      { label: "Strengths",         href: "/services" },
      { label: "Network Map",       href: "/contact#network" },
    ],
  },
  {
    heading: "Divisions",
    links: [
      { label: "Warehousing",    href: "/industries#warehousing" },
      { label: "Charter Spaces", href: "/industries#charter" },
      { label: "Real Estate",    href: "/industries#real-estate" },
      { label: "Electronics",    href: "/industries#electronics" },
    ],
  },
];

export const SITE_NAME    = "Ojha Group";
export const SITE_TAGLINE = "Engineering the Future";

export const FOOTER_BLURB =
  "Pioneers in industrial infrastructure and strategic asset management since 1994. Building value for the future of India.";

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export interface MapCompanyStat   { label: string; value: string }
export interface MapCompanyDetail { label: string; value: string }

export interface MapCompany {
  id: string;
  industry: "Warehousing" | "Charter Spaces" | "Real Estate" | "Electronics";
  name: string;
  regionTag: string;
  region: string;
  city: string;
  href: string;
  coordinates: [number, number];
  stats: MapCompanyStat[];
  details: MapCompanyDetail[];
  ctaLabel: string;
}

export const INDUSTRY_COLORS: Record<MapCompany["industry"], string> = {
  "Warehousing":    "#2559f4",
  "Charter Spaces": "#f59e0b",
  "Real Estate":    "#10b981",
  "Electronics":    "#a855f7",
};

export const MAP_COMPANIES: MapCompany[] = [
  {
    id: "ojha-logistics-west",
    industry: "Warehousing",
    name: "Ojha Logistics West",
    regionTag: "Region 01",
    region: "Western Corridor",
    city: "Mumbai, Maharashtra",
    href: "/hub-operations",
    coordinates: [72.8777, 19.0760],
    stats: [
      { label: "Sq. Ft. Total", value: "4.2M" },
      { label: "Active Hubs",   value: "14"   },
    ],
    details: [
      { label: "Multi-user Hubs",         value: "08" },
      { label: "Cold Chain Units",         value: "04" },
      { label: "Hazardous Containment",    value: "02" },
    ],
    ctaLabel: "View Regional Operations",
  },
  {
    id: "charter-spaces-delhi",
    industry: "Charter Spaces",
    name: "Charter Spaces North",
    regionTag: "Region 02",
    region: "Northern Hub",
    city: "New Delhi",
    href: "/charter-spaces",
    coordinates: [77.2090, 28.6139],
    stats: [
      { label: "Managed Offices", value: "12+" },
      { label: "Cities",          value: "3"   },
    ],
    details: [
      { label: "Private Offices", value: "40" },
      { label: "Managed Suites",  value: "18" },
      { label: "Hybrid Hubs",     value: "06" },
    ],
    ctaLabel: "Explore Workspaces",
  },
  {
    id: "ojha-real-estate-south",
    industry: "Real Estate",
    name: "Ojha Real Estate South",
    regionTag: "Region 03",
    region: "Southern Corridor",
    city: "Bengaluru, Karnataka",
    href: "/real-estate",
    coordinates: [77.5946, 12.9716],
    stats: [
      { label: "Grade-A Assets", value: "6"   },
      { label: "Occupancy",      value: "96%" },
    ],
    details: [
      { label: "Office Spaces", value: "04" },
      { label: "Retail Hubs",   value: "01" },
      { label: "Mixed-Use",     value: "01" },
    ],
    ctaLabel: "View Portfolio",
  },
  {
    id: "ojha-warehousing-east",
    industry: "Warehousing",
    name: "Ojha Logistics East",
    regionTag: "Region 04",
    region: "Eastern Corridor",
    city: "Kolkata, West Bengal",
    href: "/hub-operations",
    coordinates: [88.3639, 22.5726],
    stats: [
      { label: "Sq. Ft. Total", value: "1.8M" },
      { label: "Active Hubs",   value: "5"    },
    ],
    details: [
      { label: "Multi-user Hubs",      value: "03" },
      { label: "Cold Chain Units",      value: "01" },
      { label: "Hazardous Containment", value: "01" },
    ],
    ctaLabel: "View Regional Operations",
  },
];
