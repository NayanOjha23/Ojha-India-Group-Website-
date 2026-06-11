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
    label: "Commercial Spaces",
    href: "/commercial-spaces",
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
      { label: "Commercial Spaces", href: "/industries#commercial-spaces" },
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
  industry: "Warehousing" | "Charter Spaces" | "Commercial Spaces";
  href: string;
  ctaLabel: string;
  stats: MapCompanyStat[];
}

export interface MapInfrastructureItem {
  icon: string;
  label: string;
  value: string;
}

export interface MapLocation {
  id: string;
  companyId: string;
  code: string;
  city: string;
  state: string;
  coordinates: [number, number];
  facilityType: string;
  highlight: string;
  infrastructure: MapInfrastructureItem[];
}

export const INDUSTRY_COLORS: Record<SubCompany["industry"], string> = {
  "Warehousing":    "#2559f4",
  "Charter Spaces": "#f59e0b",
  "Commercial Spaces": "#10b981",
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
    id: "ojha-cold-chain",
    name: "Ojha Cold Chain",
    industry: "Warehousing",
    href: "/contact",
    ctaLabel: "Enquire",
    stats: [
      { label: "Sq. Ft. Total", value: "1.4M" },
      { label: "Active Hubs",   value: "7"    },
    ],
  },
  {
    id: "ojha-industrial-parks",
    name: "Ojha Industrial Parks",
    industry: "Warehousing",
    href: "/contact",
    ctaLabel: "Enquire",
    stats: [
      { label: "Sq. Ft. Total", value: "2.2M" },
      { label: "Active Hubs",   value: "6"    },
    ],
  },
  {
    id: "ojha-port-logistics",
    name: "Ojha Port Logistics",
    industry: "Warehousing",
    href: "/contact",
    ctaLabel: "Enquire",
    stats: [
      { label: "Sq. Ft. Total", value: "1.1M" },
      { label: "Active Hubs",   value: "4"    },
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
    id: "ojha-commercial-spaces",
    name: "Ojha Commercial Spaces",
    industry: "Commercial Spaces",
    href: "/commercial-spaces",
    ctaLabel: "View Portfolio",
    stats: [
      { label: "Grade-A Assets", value: "6"   },
      { label: "Occupancy",      value: "96%" },
    ],
  },
  {
    id: "ojha-residential",
    name: "Ojha Residential",
    industry: "Commercial Spaces",
    href: "/contact",
    ctaLabel: "Enquire",
    stats: [
      { label: "Communities", value: "4"   },
      { label: "Occupancy",   value: "92%" },
    ],
  },
  {
    id: "ojha-retail",
    name: "Ojha Retail Spaces",
    industry: "Commercial Spaces",
    href: "/contact",
    ctaLabel: "Enquire",
    stats: [
      { label: "Retail Centers", value: "3"   },
      { label: "Occupancy",      value: "89%" },
    ],
  },
];

export const MAP_LOCATIONS: MapLocation[] = [
  // Ojha Logistics — Warehousing
  {
    id: "logistics-bhiwandi",
    companyId: "ojha-logistics",
    code: "WH-BHI-01",
    city: "Bhiwandi",
    state: "Maharashtra",
    coordinates: [73.0631, 19.3002],
    facilityType: "Multi-User Distribution Hub",
    highlight: "800,000 sq ft dry storage with temperature-controlled bays",
    infrastructure: [
      { icon: "warehouse",      label: "Dry Storage",      value: "800,000 sq ft" },
      { icon: "ac_unit",        label: "Cold Storage",     value: "50,000 sq ft"  },
      { icon: "local_shipping", label: "Cross-dock Bays",  value: "12"            },
    ],
  },
  {
    id: "logistics-pune",
    companyId: "ojha-logistics",
    code: "WH-PUN-02",
    city: "Pune",
    state: "Maharashtra",
    coordinates: [73.8567, 18.5204],
    facilityType: "Industrial & Logistics Park",
    highlight: "Strategic access to the Pune–Mumbai expressway corridor",
    infrastructure: [
      { icon: "warehouse",      label: "Dry Storage",   value: "450,000 sq ft" },
      { icon: "crop_free",      label: "Open Yard",     value: "120,000 sq ft" },
      { icon: "local_shipping", label: "Loading Docks", value: "18"            },
    ],
  },
  {
    id: "logistics-anand",
    companyId: "ojha-logistics",
    code: "WH-AND-03",
    city: "Anand",
    state: "Gujarat",
    coordinates: [72.9289, 22.5645],
    facilityType: "Cold Chain & FMCG Hub",
    highlight: "Dedicated cold storage for dairy and perishable goods",
    infrastructure: [
      { icon: "ac_unit",     label: "Cold Storage",         value: "220,000 sq ft" },
      { icon: "warehouse",   label: "Dry Storage",          value: "80,000 sq ft"  },
      { icon: "thermostat",  label: "Temp-Controlled Bays", value: "16"            },
    ],
  },
  {
    id: "logistics-hazira",
    companyId: "ojha-logistics",
    code: "WH-HAZ-04",
    city: "Hazira",
    state: "Gujarat",
    coordinates: [72.6500, 21.1167],
    facilityType: "Port-Linked Warehousing",
    highlight: "Bonded storage near Hazira port for import/export cargo",
    infrastructure: [
      { icon: "inventory_2",    label: "Bonded Storage", value: "300,000 sq ft" },
      { icon: "warehouse",      label: "Dry Storage",    value: "150,000 sq ft" },
      { icon: "local_shipping", label: "Container Yard", value: "60,000 sq ft"  },
    ],
  },
  {
    id: "logistics-verna",
    companyId: "ojha-logistics",
    code: "WH-VRN-05",
    city: "Verna",
    state: "Goa",
    coordinates: [73.9400, 15.3667],
    facilityType: "Industrial Estate Facility",
    highlight: "Multi-client warehousing within Verna Industrial Estate",
    infrastructure: [
      { icon: "warehouse", label: "Dry Storage",       value: "180,000 sq ft" },
      { icon: "groups",    label: "Multi-Client Bays", value: "08"            },
      { icon: "crop_free", label: "Open Yard",         value: "40,000 sq ft"  },
    ],
  },
  {
    id: "logistics-mangalore",
    companyId: "ojha-logistics",
    code: "WH-MNG-06",
    city: "Mangalore",
    state: "Karnataka",
    coordinates: [74.8560, 12.9141],
    facilityType: "Coastal Distribution Center",
    highlight: "Serves the South Indian coastal logistics network",
    infrastructure: [
      { icon: "warehouse",      label: "Dry Storage",     value: "140,000 sq ft" },
      { icon: "ac_unit",        label: "Cold Storage",    value: "30,000 sq ft"  },
      { icon: "local_shipping", label: "Cross-dock Bays", value: "06"            },
    ],
  },

  // Charter Spaces
  {
    id: "charter-mumbai",
    companyId: "charter-spaces",
    code: "CS-MUM-01",
    city: "Mumbai (BKC)",
    state: "Maharashtra",
    coordinates: [72.8656, 19.0660],
    facilityType: "Managed Office Campus",
    highlight: "Premium workspace in Mumbai's financial district",
    infrastructure: [
      { icon: "meeting_room", label: "Private Offices", value: "18" },
      { icon: "groups",       label: "Managed Suites",  value: "10" },
      { icon: "forum",        label: "Meeting Rooms",   value: "06" },
    ],
  },
  {
    id: "charter-bengaluru",
    companyId: "charter-spaces",
    code: "CS-BLR-02",
    city: "Bengaluru",
    state: "Karnataka",
    coordinates: [77.5946, 12.9716],
    facilityType: "Tech Corridor Campus",
    highlight: "Flexible suites for technology and startup tenants",
    infrastructure: [
      { icon: "meeting_room", label: "Private Offices", value: "14"  },
      { icon: "desk",         label: "Hot Desks",       value: "120" },
      { icon: "hub",          label: "Hybrid Hubs",     value: "04"  },
    ],
  },
  {
    id: "charter-gurugram",
    companyId: "charter-spaces",
    code: "CS-GGN-03",
    city: "Gurugram",
    state: "Haryana",
    coordinates: [77.0266, 28.4595],
    facilityType: "Cyber City Hub",
    highlight: "Enterprise-grade managed offices near Cyber City",
    infrastructure: [
      { icon: "meeting_room", label: "Private Offices", value: "16" },
      { icon: "groups",       label: "Managed Suites",  value: "12" },
      { icon: "forum",        label: "Conference Rooms", value: "08" },
    ],
  },

  // Ojha Commercial Spaces
  {
    id: "commercialspaces-gurugram",
    companyId: "ojha-commercial-spaces",
    code: "RE-GGN-01",
    city: "Gurugram",
    state: "Haryana",
    coordinates: [77.0450, 28.4450],
    facilityType: "The Ojha Nexus",
    highlight: "21-storey Grade-A commercial tower in Cyber City",
    infrastructure: [
      { icon: "apartment",     label: "Office Floors", value: "18"  },
      { icon: "store",         label: "Retail Units",  value: "06"  },
      { icon: "local_parking", label: "Parking Bays",  value: "400" },
    ],
  },
  {
    id: "commercialspaces-mumbai",
    companyId: "ojha-commercial-spaces",
    code: "RE-MUM-02",
    city: "Mumbai (BKC)",
    state: "Maharashtra",
    coordinates: [72.8800, 19.0600],
    facilityType: "Zenith Plaza",
    highlight: "LEED Gold commercial tower in the BKC financial district",
    infrastructure: [
      { icon: "apartment",     label: "Office Floors", value: "22"  },
      { icon: "store",         label: "Retail Units",  value: "04"  },
      { icon: "local_parking", label: "Parking Bays",  value: "350" },
    ],
  },
  {
    id: "commercialspaces-bengaluru",
    companyId: "ojha-commercial-spaces",
    code: "RE-BLR-03",
    city: "Bengaluru",
    state: "Karnataka",
    coordinates: [77.6100, 12.9550],
    facilityType: "Southern Portfolio",
    highlight: "6 Grade-A office and mixed-use assets across the city",
    infrastructure: [
      { icon: "apartment", label: "Office Spaces", value: "04" },
      { icon: "store",     label: "Retail Hubs",   value: "01" },
      { icon: "domain",    label: "Mixed-Use",     value: "01" },
    ],
  },

  // Ojha Cold Chain
  {
    id: "coldchain-nagpur",
    companyId: "ojha-cold-chain",
    code: "CC-NAG-01",
    city: "Nagpur",
    state: "Maharashtra",
    coordinates: [79.0882, 21.1458],
    facilityType: "Cold Chain & Pharma Hub",
    highlight: "Central India's largest pharma-grade cold storage hub",
    infrastructure: [
      { icon: "ac_unit",    label: "Cold Storage",         value: "180,000 sq ft" },
      { icon: "medication", label: "Pharma-Grade Bays",    value: "10"            },
      { icon: "thermostat", label: "Temp-Controlled Bays", value: "14"            },
    ],
  },
  {
    id: "coldchain-lucknow",
    companyId: "ojha-cold-chain",
    code: "CC-LKO-02",
    city: "Lucknow",
    state: "Uttar Pradesh",
    coordinates: [80.9462, 26.8467],
    facilityType: "Cold Storage & FMCG Hub",
    highlight: "Serving North India's FMCG and dairy distribution network",
    infrastructure: [
      { icon: "ac_unit",        label: "Cold Storage",    value: "150,000 sq ft" },
      { icon: "warehouse",      label: "Dry Storage",     value: "60,000 sq ft"  },
      { icon: "local_shipping", label: "Cross-dock Bays", value: "10"            },
    ],
  },

  // Ojha Industrial Parks
  {
    id: "industrialparks-chennai",
    companyId: "ojha-industrial-parks",
    code: "IP-CHE-01",
    city: "Chennai",
    state: "Tamil Nadu",
    coordinates: [80.2707, 13.0827],
    facilityType: "Industrial & Logistics Park",
    highlight: "Auto-component and electronics manufacturing corridor access",
    infrastructure: [
      { icon: "factory",        label: "Built-up Area",   value: "650,000 sq ft" },
      { icon: "groups",         label: "Multi-Client Bays", value: "14"          },
      { icon: "local_shipping", label: "Loading Docks",   value: "22"            },
    ],
  },
  {
    id: "industrialparks-hyderabad",
    companyId: "ojha-industrial-parks",
    code: "IP-HYD-02",
    city: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4867, 17.3850],
    facilityType: "Build-to-Suit Industrial Estate",
    highlight: "Custom-engineered facilities for pharma and electronics manufacturers",
    infrastructure: [
      { icon: "engineering", label: "Built-up Area",   value: "500,000 sq ft" },
      { icon: "bolt",        label: "Power Capacity",  value: "5 MVA"         },
      { icon: "crop_free",   label: "Expansion Land",  value: "30 acres"      },
    ],
  },

  // Ojha Port Logistics
  {
    id: "portlogistics-mundra",
    companyId: "ojha-port-logistics",
    code: "PL-MUN-01",
    city: "Mundra",
    state: "Gujarat",
    coordinates: [69.7220, 22.8394],
    facilityType: "Port-Linked Container Freight Station",
    highlight: "Direct linkage to India's largest private port for import/export cargo",
    infrastructure: [
      { icon: "inventory_2",   label: "Bonded Storage",        value: "250,000 sq ft" },
      { icon: "directions_boat", label: "Container Yard",      value: "100,000 sq ft" },
      { icon: "local_shipping", label: "Customs-Cleared Bays", value: "08"            },
    ],
  },
  {
    id: "portlogistics-vizag",
    companyId: "ojha-port-logistics",
    code: "PL-VIZ-02",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    coordinates: [83.2185, 17.6868],
    facilityType: "Port-Linked Warehousing",
    highlight: "East coast gateway for export-oriented industrial cargo",
    infrastructure: [
      { icon: "inventory_2",     label: "Bonded Storage", value: "180,000 sq ft" },
      { icon: "warehouse",       label: "Dry Storage",    value: "90,000 sq ft"  },
      { icon: "directions_boat", label: "Container Yard", value: "40,000 sq ft"  },
    ],
  },

  // Ojha Residential
  {
    id: "residential-indore",
    companyId: "ojha-residential",
    code: "RES-IND-01",
    city: "Indore",
    state: "Madhya Pradesh",
    coordinates: [75.8577, 22.7196],
    facilityType: "Residential Township",
    highlight: "Integrated township with schools, retail, and green spaces",
    infrastructure: [
      { icon: "apartment", label: "Residential Units",    value: "1,200" },
      { icon: "park",      label: "Green Cover",          value: "35%"   },
      { icon: "groups",    label: "Community Amenities",  value: "12"    },
    ],
  },
  {
    id: "residential-jaipur",
    companyId: "ojha-residential",
    code: "RES-JAI-02",
    city: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.7873, 26.9124],
    facilityType: "Residential Community",
    highlight: "Premium villa and apartment community in a growing suburb",
    infrastructure: [
      { icon: "apartment", label: "Residential Units", value: "850" },
      { icon: "villa",     label: "Villa Plots",       value: "120" },
      { icon: "park",      label: "Green Cover",       value: "40%" },
    ],
  },

  // Ojha Retail Spaces
  {
    id: "retail-ahmedabad",
    companyId: "ojha-retail",
    code: "RET-AMD-01",
    city: "Ahmedabad",
    state: "Gujarat",
    coordinates: [72.5714, 23.0225],
    facilityType: "Retail & High-Street Mall",
    highlight: "Flagship high-street retail destination in West India",
    infrastructure: [
      { icon: "storefront",    label: "Retail Area",     value: "320,000 sq ft" },
      { icon: "local_parking", label: "Parking Capacity", value: "800 cars"     },
      { icon: "groups",        label: "Anchor Tenants",  value: "06"            },
    ],
  },
];
