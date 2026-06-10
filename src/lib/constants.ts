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

export interface MapCompanyStat { label: string; value: string }

export interface SubCompany {
  id: string;
  name: string;
  industry: "Warehousing" | "Charter Spaces" | "Real Estate";
  href: string;
  ctaLabel: string;
  stats: MapCompanyStat[];
}

export interface MapLocation {
  id: string;
  companyId: string;
  city: string;
  state: string;
  coordinates: [number, number];
  facilityType: string;
  highlight: string;
}

export const INDUSTRY_COLORS: Record<SubCompany["industry"], string> = {
  "Warehousing":    "#2559f4",
  "Charter Spaces": "#f59e0b",
  "Real Estate":    "#10b981",
};

export const SUB_COMPANIES: SubCompany[] = [
  {
    id: "ojha-logistics",
    name: "Ojha Logistics",
    industry: "Warehousing",
    href: "/hub-operations",
    ctaLabel: "View Regional Operations",
    stats: [
      { label: "Sq. Ft. Total", value: "6.0M" },
      { label: "Active Hubs",   value: "19"   },
    ],
  },
  {
    id: "charter-spaces",
    name: "Charter Spaces",
    industry: "Charter Spaces",
    href: "/charter-spaces",
    ctaLabel: "Explore Workspaces",
    stats: [
      { label: "Managed Offices",  value: "12+" },
      { label: "Sq. Ft. Managed",  value: "1M+" },
    ],
  },
  {
    id: "ojha-real-estate",
    name: "Ojha Real Estate",
    industry: "Real Estate",
    href: "/real-estate",
    ctaLabel: "View Portfolio",
    stats: [
      { label: "Grade-A Assets", value: "6"   },
      { label: "Occupancy",      value: "96%" },
    ],
  },
];

export const MAP_LOCATIONS: MapLocation[] = [
  // Ojha Logistics — Warehousing
  {
    id: "logistics-bhiwandi",
    companyId: "ojha-logistics",
    city: "Bhiwandi",
    state: "Maharashtra",
    coordinates: [73.0631, 19.3002],
    facilityType: "Multi-User Distribution Hub",
    highlight: "800,000 sq ft dry storage with temperature-controlled bays",
  },
  {
    id: "logistics-pune",
    companyId: "ojha-logistics",
    city: "Pune",
    state: "Maharashtra",
    coordinates: [73.8567, 18.5204],
    facilityType: "Industrial & Logistics Park",
    highlight: "Strategic access to the Pune–Mumbai expressway corridor",
  },
  {
    id: "logistics-anand",
    companyId: "ojha-logistics",
    city: "Anand",
    state: "Gujarat",
    coordinates: [72.9289, 22.5645],
    facilityType: "Cold Chain & FMCG Hub",
    highlight: "Dedicated cold storage for dairy and perishable goods",
  },
  {
    id: "logistics-hazira",
    companyId: "ojha-logistics",
    city: "Hazira",
    state: "Gujarat",
    coordinates: [72.6500, 21.1167],
    facilityType: "Port-Linked Warehousing",
    highlight: "Bonded storage near Hazira port for import/export cargo",
  },
  {
    id: "logistics-verna",
    companyId: "ojha-logistics",
    city: "Verna",
    state: "Goa",
    coordinates: [73.9400, 15.3667],
    facilityType: "Industrial Estate Facility",
    highlight: "Multi-client warehousing within Verna Industrial Estate",
  },
  {
    id: "logistics-mangalore",
    companyId: "ojha-logistics",
    city: "Mangalore",
    state: "Karnataka",
    coordinates: [74.8560, 12.9141],
    facilityType: "Coastal Distribution Center",
    highlight: "Serves the South Indian coastal logistics network",
  },

  // Charter Spaces
  {
    id: "charter-mumbai",
    companyId: "charter-spaces",
    city: "Mumbai (BKC)",
    state: "Maharashtra",
    coordinates: [72.8656, 19.0660],
    facilityType: "Managed Office Campus",
    highlight: "Premium workspace in Mumbai's financial district",
  },
  {
    id: "charter-bengaluru",
    companyId: "charter-spaces",
    city: "Bengaluru",
    state: "Karnataka",
    coordinates: [77.5946, 12.9716],
    facilityType: "Tech Corridor Campus",
    highlight: "Flexible suites for technology and startup tenants",
  },
  {
    id: "charter-gurugram",
    companyId: "charter-spaces",
    city: "Gurugram",
    state: "Haryana",
    coordinates: [77.0266, 28.4595],
    facilityType: "Cyber City Hub",
    highlight: "Enterprise-grade managed offices near Cyber City",
  },

  // Ojha Real Estate
  {
    id: "realestate-gurugram",
    companyId: "ojha-real-estate",
    city: "Gurugram",
    state: "Haryana",
    coordinates: [77.0450, 28.4450],
    facilityType: "The Ojha Nexus",
    highlight: "21-storey Grade-A commercial tower in Cyber City",
  },
  {
    id: "realestate-mumbai",
    companyId: "ojha-real-estate",
    city: "Mumbai (BKC)",
    state: "Maharashtra",
    coordinates: [72.8800, 19.0600],
    facilityType: "Zenith Plaza",
    highlight: "LEED Gold commercial tower in the BKC financial district",
  },
  {
    id: "realestate-bengaluru",
    companyId: "ojha-real-estate",
    city: "Bengaluru",
    state: "Karnataka",
    coordinates: [77.6100, 12.9550],
    facilityType: "Southern Portfolio",
    highlight: "6 Grade-A office and mixed-use assets across the city",
  },
];
