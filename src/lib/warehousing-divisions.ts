export interface DivisionRegion {
  icon: string;
  area: string;
  description: string;
  cities: string[];
}

export interface DivisionFacility {
  image: string;
  badge: { label: string; color: "blue" | "green" | "amber" };
  title: string;
  features: string[];
  details: {
    description: string;
    specs: { label: string; value: string }[];
    amenities: string[];
  };
}

export interface DivisionStandard {
  icon: string;
  title: string;
  description: string;
}

export interface DivisionMetric {
  value: string;
  unit: string;
  label: string;
}

export interface WarehousingDivisionData {
  slug: string;
  companyId: string;
  metadata: {
    title: string;
    description: string;
    ogImage: string;
  };
  hero: {
    badge: string;
    headline: string;
    highlightedWord: string;
    subtext: string;
    backgroundImage: string;
  };
  coverage: {
    title: string;
    subtitle: string;
    gridClassName: string;
    regions: DivisionRegion[];
  };
  facilities: {
    subtitle: string;
    items: DivisionFacility[];
  };
  standard: {
    heading: string;
    highlight: string;
    body: string;
    items: DivisionStandard[];
    metrics: DivisionMetric[];
  };
  leadership: {
    subtitle: string;
    person: { name: string; title: string; imageSeed: string };
    hq: { name: string; addressLines: string[]; phone: string };
    serviceOptions: string[];
  };
}

export const WAREHOUSING_DIVISIONS: WarehousingDivisionData[] = [
  {
    slug: "logistics",
    companyId: "ojha-logistics",
    metadata: {
      title: "Regional Hub Operations",
      description:
        "Specialised warehousing solutions for West India's industrial heartlands. Delivering the global Ojha excellence through localised expertise.",
      ogImage: "/og/warehousing-logistics.jpg",
    },
    hero: {
      badge: "West India Division",
      headline: "Regional Depth.",
      highlightedWord: "Unified Standards.",
      subtext:
        "Specialised warehousing solutions for West India's industrial heartlands. Delivering the global Ojha excellence through localised expertise.",
      backgroundImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    coverage: {
      title: "Regional Coverage",
      subtitle:
        "Strategically located hubs across Maharashtra, Gujarat, and Goa ensuring seamless connectivity to major ports and industrial zones.",
      gridClassName: "sm:grid-cols-2 lg:grid-cols-4",
      regions: [
        {
          icon: "warehouse",
          area: "Maharashtra",
          description: "High-density storage solutions focusing on e-commerce and automotive support.",
          cities: ["Bhiwandi", "Pune"],
        },
        {
          icon: "factory",
          area: "Gujarat",
          description: "Proximity to heavy industries with chemical handling zones.",
          cities: ["Anand", "Hazira"],
        },
        {
          icon: "medication",
          area: "Goa",
          description: "Pharmaceutical grade facilities designed for cold chain logistics.",
          cities: ["Verna"],
        },
        {
          icon: "anchor",
          area: "Coastal",
          description: "Optimised for rapid turnaround from southern entry points.",
          cities: ["Mangalore"],
        },
      ],
    },
    facilities: {
      subtitle:
        "Grade-A assets equipped with climate control, automated material handling, and integrated digital tracking.",
      items: [
        {
          image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=3309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "800,000 SQFT", color: "green" },
          title: "Dry Multi-Store",
          features: ["12m Clear Height", "FM2 Flooring", "Automated MHE"],
          details: {
            description:
              "A flagship multi-client facility in Bhiwandi's industrial corridor, purpose-built for high-volume e-commerce fulfilment and automotive parts distribution with rack-ready bays.",
            specs: [
              { label: "Floor Plate", value: "800,000 Sq.Ft." },
              { label: "Clear Height", value: "12m" },
              { label: "Loading Docks", value: "48" },
              { label: "Floor Load", value: "5 T/m²" },
            ],
            amenities: ["Automated MHE", "FM2 Epoxy Flooring", "ESFR Sprinklers", "24/7 CCTV"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "AUTO-READY", color: "blue" },
          title: "Cold Chain Hub",
          features: ["Multi-temp Chambers", "24/7 Power Backup", "Pharma Grade"],
          details: {
            description:
              "Multi-temperature facility serving Goa's pharmaceutical exporters, with chambers ranging from deep-freeze to ambient and dedicated power redundancy for uninterrupted cold storage.",
            specs: [
              { label: "Capacity", value: "180,000 Sq.Ft." },
              { label: "Temp Range", value: "-25°C to +25°C" },
              { label: "Chambers", value: "6" },
              { label: "Power Backup", value: "100%" },
            ],
            amenities: ["WHO-GMP Compliant", "24/7 Monitoring", "Reefer Dock Bays", "Validated Mapping"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1622030411594-c282a63aa1bc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "PESO APPROVED", color: "amber" },
          title: "Ind. & Chemical",
          features: ["Fire Suppression", "Spill Containment", "HAZMAT Ready"],
          details: {
            description:
              "PESO-licensed facility near Hazira's chemical belt, engineered for hazardous and flammable goods with segregated storage zones and full spill-containment infrastructure.",
            specs: [
              { label: "Capacity", value: "320,000 Sq.Ft." },
              { label: "Storage Zones", value: "5 Segregated" },
              { label: "Containment", value: "Bunded Bays" },
              { label: "Fire Rating", value: "2-Hour" },
            ],
            amenities: ["PESO Licensed", "Spill Containment", "HAZMAT Trained Staff", "Foam Suppression"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1557761469-f29c6e201784?q=80&w=3249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "450,000 SQFT", color: "blue" },
          title: "E-Commerce Fulfilment Center",
          features: ["Automated Sortation", "Pune Tech Corridor", "Last-Mile Ready"],
          details: {
            description:
              "High-throughput fulfilment centre in Pune's tech corridor, engineered for e-commerce sortation and rapid last-mile dispatch across West India.",
            specs: [
              { label: "Floor Plate", value: "450,000 Sq.Ft." },
              { label: "Sortation Capacity", value: "25,000 Units/Day" },
              { label: "Pick Stations", value: "120" },
              { label: "Dock Doors", value: "36" },
            ],
            amenities: ["Automated Sortation", "Pick-to-Light System", "Last-Mile Integration", "24/7 Operations"],
          },
        },
      ],
    },
    standard: {
      heading: "The Ojha Standard:",
      highlight: "Unified Protocols.",
      body:
        "We don't just store; we steward. Our operations are governed by a globally enforced quality matrix ensuring resilience, compliance, and real-time visibility.",
      items: [
        {
          icon: "emergency",
          title: "Zero-incident Code",
          description: "Rigorous safety training and automated hazard detection.",
        },
        {
          icon: "sensors",
          title: "SmartHub 3.0",
          description: "Real-time inventory visibility and API-first client integration.",
        },
      ],
      metrics: [
        { value: "99.9", unit: "%", label: "Accuracy" },
        { value: "24/7", unit: "", label: "Monitoring" },
        { value: "15", unit: "m", label: "Turnaround" },
        { value: "100", unit: "%", label: "Compliance" },
      ],
    },
    leadership: {
      subtitle:
        "Direct access to our West India team ensures rapid, decision-ready authority for your logistics challenges.",
      person: { name: "Vikram Rathore", title: "Operations Director, West", imageSeed: "vikramrathore" },
      hq: {
        name: "Regional HQ",
        addressLines: ["Ojha Logistics West Tower", "Plot No. J8, MIDC Industrial Area", "Navi Mumbai, MH 400701"],
        phone: "+91 22 4567 8900",
      },
      serviceOptions: [
        "General Dry Storage",
        "Cold Chain / Refrigerated",
        "Industrial & Chemical",
        "Build-to-Suit",
        "Multi-Region Contract",
      ],
    },
  },

  {
    slug: "cold-chain",
    companyId: "ojha-cold-chain",
    metadata: {
      title: "Cold Chain Network Operations",
      description:
        "Pharma-grade and FMCG cold chain infrastructure spanning Central and North India. Delivering the global Ojha excellence through unbroken cold chains.",
      ogImage: "/og/warehousing-cold-chain.jpg",
    },
    hero: {
      badge: "Cold Chain Division",
      headline: "Temperature Precision.",
      highlightedWord: "Pan-India Reach.",
      subtext:
        "Pharma-grade and FMCG cold chain infrastructure spanning Central and North India. Delivering the global Ojha excellence through unbroken cold chains.",
      backgroundImage: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    coverage: {
      title: "Cold Chain Network",
      subtitle:
        "Strategically located cold storage hubs across Maharashtra and Uttar Pradesh ensuring unbroken temperature control from origin to destination.",
      gridClassName: "sm:grid-cols-2 lg:grid-cols-2",
      regions: [
        {
          icon: "medication",
          area: "Maharashtra",
          description: "Central India's largest pharma-grade cold storage hub, anchoring the country's pharmaceutical distribution corridor.",
          cities: ["Nagpur"],
        },
        {
          icon: "ac_unit",
          area: "Uttar Pradesh",
          description: "Cold storage and FMCG distribution network serving North India's dairy and perishables trade.",
          cities: ["Lucknow"],
        },
      ],
    },
    facilities: {
      subtitle:
        "Pharma-grade and FMCG cold storage assets equipped with multi-temp chambers, automated monitoring, and rapid cross-dock turnaround.",
      items: [
        {
          image: "https://images.unsplash.com/photo-1694885169342-909981fb408a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "180,000 SQFT", color: "green" },
          title: "Pharma Cold Storage",
          features: ["-25°C to +25°C Range", "WHO-GMP Compliant", "24/7 Power Backup"],
          details: {
            description:
              "Nagpur's largest pharma-grade cold store, validated for vaccine and biologics distribution with mapped temperature zones and continuous monitoring across the facility.",
            specs: [
              { label: "Capacity", value: "180,000 Sq.Ft." },
              { label: "Temp Range", value: "-25°C to +25°C" },
              { label: "Chambers", value: "8" },
              { label: "Validation", value: "GxP Mapped" },
            ],
            amenities: ["WHO-GMP Compliant", "24/7 Power Backup", "Temperature Mapping", "Vaccine Ready"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=3309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "FMCG READY", color: "blue" },
          title: "FMCG & Dairy Hub",
          features: ["Multi-Temp Chambers", "Cross-Dock Bays", "Automated Sorting"],
          details: {
            description:
              "High-throughput distribution centre for North India's dairy and packaged-foods brands, combining multi-temp chambers with automated sortation for rapid replenishment cycles.",
            specs: [
              { label: "Capacity", value: "150,000 Sq.Ft." },
              { label: "Temp Zones", value: "4 Multi-Temp" },
              { label: "Cross-Dock Bays", value: "12" },
              { label: "Throughput", value: "500T/day" },
            ],
            amenities: ["Automated Sorting", "Cross-Dock Bays", "Dairy Certified", "Real-Time Tracking"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "RAPID TURNAROUND", color: "amber" },
          title: "Cross-Dock Distribution",
          features: ["10 Cross-dock Bays", "Reefer Truck Fleet", "Real-Time Tracking"],
          details: {
            description:
              "Reefer-fleet-backed cross-dock facility enabling same-day transfer between cold storage and last-mile distribution across Central India's perishables network.",
            specs: [
              { label: "Cross-dock Bays", value: "10" },
              { label: "Reefer Fleet", value: "45 Vehicles" },
              { label: "Avg. Dwell Time", value: "< 4 Hrs" },
              { label: "Coverage", value: "Pan-Central India" },
            ],
            amenities: ["Reefer Truck Fleet", "Real-Time Tracking", "Same-Day Transfer", "GPS Monitored"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1622030411594-c282a63aa1bc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "FROZEN READY", color: "amber" },
          title: "Frozen Foods Hub",
          features: ["-30°C Deep Freeze", "Meat & Seafood Grade", "Automated Racking"],
          details: {
            description:
              "Deep-freeze distribution hub for frozen meat, seafood, and ready-to-eat brands, with automated high-density racking and dedicated blast-freezing tunnels.",
            specs: [
              { label: "Capacity", value: "120,000 Sq.Ft." },
              { label: "Temp Range", value: "-30°C to -18°C" },
              { label: "Blast Freezers", value: "4" },
              { label: "Racking", value: "Automated High-Density" },
            ],
            amenities: ["Blast Freezing", "Automated Racking", "FSSAI Certified", "24/7 Power Backup"],
          },
        },
      ],
    },
    standard: {
      heading: "The Ojha Standard:",
      highlight: "Unbroken Cold Chains.",
      body:
        "We don't just store; we preserve. Our cold chain operations are governed by a globally enforced temperature integrity matrix ensuring compliance, traceability, and zero spoilage.",
      items: [
        {
          icon: "thermostat",
          title: "Cold Chain Integrity",
          description: "Continuous temperature monitoring with automated alerts ensures zero cold-chain breaks from dock to delivery.",
        },
        {
          icon: "medication",
          title: "WHO-GMP Compliance",
          description: "Pharma-grade storage protocols audited to WHO Good Manufacturing Practice and Schedule M standards.",
        },
      ],
      metrics: [
        { value: "-25", unit: "°C", label: "Min. Temperature" },
        { value: "99.8", unit: "%", label: "Cold Chain Uptime" },
        { value: "24/7", unit: "", label: "Temp Monitoring" },
        { value: "100", unit: "%", label: "GMP Compliant" },
      ],
    },
    leadership: {
      subtitle:
        "Direct access to our Cold Chain operations team ensures rapid, decision-ready authority for your temperature-sensitive logistics.",
      person: { name: "Dr. Ananya Deshmukh", title: "Director, Cold Chain Operations", imageSeed: "ananyadeshmukh" },
      hq: {
        name: "Regional HQ",
        addressLines: ["Ojha Cold Chain Hub", "MIDC Hingna Road", "Nagpur, MH 440016"],
        phone: "+91 712 456 7800",
      },
      serviceOptions: [
        "Pharma Cold Storage",
        "FMCG & Dairy Distribution",
        "Reefer Transportation",
        "Multi-Temp Warehousing",
        "Custom Cold Chain Contract",
      ],
    },
  },

  {
    slug: "industrial-parks",
    companyId: "ojha-industrial-parks",
    metadata: {
      title: "Industrial Parks Operations",
      description:
        "Build-to-suit industrial estates across South India's manufacturing corridors. Delivering the global Ojha excellence through custom-engineered infrastructure.",
      ogImage: "/og/warehousing-industrial-parks.jpg",
    },
    hero: {
      badge: "Industrial Parks Division",
      headline: "Built to Spec.",
      highlightedWord: "Engineered to Scale.",
      subtext:
        "Build-to-suit industrial estates across South India's manufacturing corridors. Delivering the global Ojha excellence through custom-engineered infrastructure.",
      backgroundImage: "https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?q=80&w=4066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    coverage: {
      title: "Industrial Park Network",
      subtitle:
        "Strategically located industrial estates across Tamil Nadu and Telangana ensuring proximity to manufacturing corridors and expansion-ready land.",
      gridClassName: "sm:grid-cols-2 lg:grid-cols-2",
      regions: [
        {
          icon: "factory",
          area: "Tamil Nadu",
          description: "Auto-component and electronics manufacturing corridor access with high-capacity multi-client bays.",
          cities: ["Chennai"],
        },
        {
          icon: "engineering",
          area: "Telangana",
          description: "Custom-engineered, build-to-suit estates for pharma and electronics manufacturers with expansion-ready land.",
          cities: ["Hyderabad"],
        },
      ],
    },
    facilities: {
      subtitle:
        "Build-to-suit industrial estates equipped with high-capacity power, expansion-ready land, and multi-client bays.",
      items: [
        {
          image: "https://images.unsplash.com/photo-1557761469-f29c6e201784?q=80&w=3249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "650,000 SQFT", color: "green" },
          title: "Multi-Client Industrial Bay",
          features: ["14 Multi-Client Bays", "22 Loading Docks", "Auto Component Access"],
          details: {
            description:
              "Chennai's premier multi-client industrial estate, hosting auto-component and electronics manufacturers with dedicated bays and direct corridor access.",
            specs: [
              { label: "Floor Plate", value: "650,000 Sq.Ft." },
              { label: "Loading Docks", value: "22" },
              { label: "Bays", value: "14 Multi-Client" },
              { label: "Power", value: "2 MVA" },
            ],
            amenities: ["Auto Component Access", "24/7 Security", "Dedicated Substation", "Truck Marshalling Yard"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1694885169342-909981fb408a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "BTS READY", color: "blue" },
          title: "Build-to-Suit Estate",
          features: ["5 MVA Power Capacity", "30 Acres Expansion Land", "Custom Engineering"],
          details: {
            description:
              "Expansion-ready land parcel in Hyderabad engineered for custom manufacturing layouts, with high-capacity power infrastructure and flexible build timelines.",
            specs: [
              { label: "Land Bank", value: "30 Acres" },
              { label: "Power Capacity", value: "5 MVA" },
              { label: "Build Timeline", value: "9-12 Months" },
              { label: "Floor Load", value: "Custom" },
            ],
            amenities: ["Custom Engineering", "5 MVA Substation", "Effluent Treatment Ready", "Expansion Land"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=3309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "PESO APPROVED", color: "amber" },
          title: "Manufacturing Park",
          features: ["Heavy Power Infrastructure", "Dedicated Effluent Treatment", "24/7 Security"],
          details: {
            description:
              "Heavy-industry manufacturing park with dedicated effluent treatment and round-the-clock security, purpose-built for process and assembly operations.",
            specs: [
              { label: "Floor Plate", value: "500,000 Sq.Ft." },
              { label: "Power Infrastructure", value: "Heavy-Duty" },
              { label: "ETP Capacity", value: "200 KLD" },
              { label: "Security", value: "24/7" },
            ],
            amenities: ["Heavy Power Infrastructure", "Effluent Treatment Plant", "PESO Approved", "24/7 Security"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "450,000 SQFT", color: "green" },
          title: "Logistics & Distribution Annex",
          features: ["Adjacent to Manufacturing Park", "High-Bay Racking", "Multi-Modal Access"],
          details: {
            description:
              "Dedicated warehousing annex co-located with our Chennai industrial park, offering finished-goods storage and direct dispatch for on-site manufacturers.",
            specs: [
              { label: "Floor Plate", value: "450,000 Sq.Ft." },
              { label: "Clear Height", value: "14m" },
              { label: "Dock Doors", value: "30" },
              { label: "Racking", value: "High-Bay" },
            ],
            amenities: ["High-Bay Racking", "Multi-Modal Access", "On-Site Customs Desk", "24/7 Security"],
          },
        },
      ],
    },
    standard: {
      heading: "The Ojha Standard:",
      highlight: "Engineered for Growth.",
      body:
        "We don't just lease land; we build futures. Our industrial parks are governed by a globally enforced engineering matrix ensuring power reliability, expansion readiness, and regulatory compliance.",
      items: [
        {
          icon: "engineering",
          title: "Custom Engineering",
          description: "Build-to-suit facilities engineered to exact tenant specifications, from clear height to power load.",
        },
        {
          icon: "bolt",
          title: "Power Redundancy",
          description: "High-capacity grid connections with diesel backup ensure uninterrupted manufacturing operations.",
        },
      ],
      metrics: [
        { value: "1.15M", unit: "Sq.Ft.", label: "Built-up Area" },
        { value: "5", unit: "MVA", label: "Power Capacity" },
        { value: "30", unit: "Acres", label: "Expansion Land" },
        { value: "100", unit: "%", label: "PESO Approved" },
      ],
    },
    leadership: {
      subtitle:
        "Direct access to our Industrial Parks team ensures rapid, decision-ready authority for your build-to-suit requirements.",
      person: { name: "Rajeev Menon", title: "Director, Industrial Parks", imageSeed: "rajeevmenon" },
      hq: {
        name: "Regional HQ",
        addressLines: ["Ojha Industrial Park", "SIPCOT Industrial Estate", "Chennai, TN 600058"],
        phone: "+91 44 4567 8800",
      },
      serviceOptions: [
        "Build-to-Suit Industrial Unit",
        "Multi-Client Industrial Bay",
        "Manufacturing Park Lease",
        "Power-Intensive Facility",
        "Multi-Region Contract",
      ],
    },
  },

  {
    slug: "port-logistics",
    companyId: "ojha-port-logistics",
    metadata: {
      title: "Port Logistics Operations",
      description:
        "Bonded, port-linked warehousing across India's western and eastern coastlines. Delivering the global Ojha excellence through seamless customs and cargo operations.",
      ogImage: "/og/warehousing-port-logistics.jpg",
    },
    hero: {
      badge: "Port Logistics Division",
      headline: "Gateway Operations.",
      highlightedWord: "Customs Cleared.",
      subtext:
        "Bonded, port-linked warehousing across India's western and eastern coastlines. Delivering the global Ojha excellence through seamless customs and cargo operations.",
      backgroundImage: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    coverage: {
      title: "Port Network",
      subtitle:
        "Strategically located bonded facilities across Gujarat and Andhra Pradesh ensuring direct linkage to India's major ports.",
      gridClassName: "sm:grid-cols-2 lg:grid-cols-2",
      regions: [
        {
          icon: "directions_boat",
          area: "Gujarat",
          description: "Direct linkage to India's largest private port for import/export cargo, with bonded storage and customs-cleared bays.",
          cities: ["Mundra"],
        },
        {
          icon: "anchor",
          area: "Andhra Pradesh",
          description: "East coast gateway for export-oriented industrial cargo, with bonded and dry storage facilities.",
          cities: ["Visakhapatnam"],
        },
      ],
    },
    facilities: {
      subtitle:
        "Bonded, port-linked facilities equipped with customs-cleared bays, container yards, and 24/7 cargo operations.",
      items: [
        {
          image: "https://images.unsplash.com/photo-1622030411594-c282a63aa1bc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "250,000 SQFT", color: "green" },
          title: "Bonded Warehouse",
          features: ["Customs Bonded Storage", "8 Customs-Cleared Bays", "Direct Port Linkage"],
          details: {
            description:
              "Customs-bonded facility located minutes from Mundra Port, offering direct linkage for import cargo with on-site customs clearance desks.",
            specs: [
              { label: "Capacity", value: "250,000 Sq.Ft." },
              { label: "Customs Bays", value: "8" },
              { label: "Port Distance", value: "3 km" },
              { label: "Bonded License", value: "Category 'A'" },
            ],
            amenities: ["Customs Bonded Storage", "Direct Port Linkage", "On-Site CHA Desk", "24/7 Cargo Ops"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1557761469-f29c6e201784?q=80&w=3249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "CFS CERTIFIED", color: "blue" },
          title: "Container Freight Station",
          features: ["100,000 Sq Ft Container Yard", "De-Stuffing & Stuffing", "EXIM Documentation"],
          details: {
            description:
              "CFS-certified yard handling de-stuffing, stuffing, and EXIM documentation for containerised cargo moving through Mundra and Visakhapatnam.",
            specs: [
              { label: "Container Yard", value: "100,000 Sq.Ft." },
              { label: "De-Stuff/Stuff Bays", value: "12" },
              { label: "EXIM Docs", value: "On-Site" },
              { label: "Capacity", value: "2,000 TEU/Month" },
            ],
            amenities: ["CFS Certified", "EXIM Documentation", "Container Yard", "Customs Linked"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1694885169342-909981fb408a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "EXPORT READY", color: "amber" },
          title: "Export Distribution Hub",
          features: ["Dry & Bonded Storage", "Reefer Container Plugs", "24/7 Customs Desk"],
          details: {
            description:
              "Combined dry and bonded storage hub on the east coast, with reefer plug points and a 24/7 customs desk supporting export-oriented manufacturers.",
            specs: [
              { label: "Capacity", value: "180,000 Sq.Ft." },
              { label: "Reefer Plugs", value: "24" },
              { label: "Customs Desk", value: "24/7" },
              { label: "Storage Type", value: "Dry & Bonded" },
            ],
            amenities: ["Reefer Container Plugs", "24/7 Customs Desk", "Export Documentation", "Dry & Bonded Storage"],
          },
        },
        {
          image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=3309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          badge: { label: "ICD LINKED", color: "blue" },
          title: "Inland Container Depot",
          features: ["Rail-Linked ICD", "Empty Container Yard", "Customs Examination"],
          details: {
            description:
              "Rail-connected inland container depot bridging inland manufacturing hubs with Mundra and Visakhapatnam ports, with dedicated empty container yards and customs examination bays.",
            specs: [
              { label: "Container Yard", value: "120,000 Sq.Ft." },
              { label: "Rail Sidings", value: "2" },
              { label: "Examination Bays", value: "4" },
              { label: "Capacity", value: "1,500 TEU/Month" },
            ],
            amenities: ["Rail-Linked ICD", "Empty Container Yard", "Customs Examination", "24/7 Cargo Ops"],
          },
        },
      ],
    },
    standard: {
      heading: "The Ojha Standard:",
      highlight: "Cleared for Departure.",
      body:
        "We don't just store cargo; we move it. Our port operations are governed by a globally enforced customs and compliance matrix ensuring rapid clearance, real-time visibility, and zero demurrage.",
      items: [
        {
          icon: "gavel",
          title: "Customs Compliance",
          description: "On-site customs desks and licensed CHA partners ensure rapid clearance for import/export cargo.",
        },
        {
          icon: "directions_boat",
          title: "24/7 Port Linkage",
          description: "Round-the-clock container movement synchronised with vessel schedules at India's major ports.",
        },
      ],
      metrics: [
        { value: "430K", unit: "Sq.Ft.", label: "Bonded Storage" },
        { value: "140K", unit: "Sq.Ft.", label: "Container Yard" },
        { value: "08", unit: "", label: "Customs-Cleared Bays" },
        { value: "24/7", unit: "", label: "Port Linkage" },
      ],
    },
    leadership: {
      subtitle:
        "Direct access to our Port Operations team ensures rapid, decision-ready authority for your import/export logistics.",
      person: { name: "Karan Thakkar", title: "Director, Port Operations", imageSeed: "karanthakkar" },
      hq: {
        name: "Regional HQ",
        addressLines: ["Ojha Port Logistics Centre", "Mundra SEZ", "Kutch, GJ 370421"],
        phone: "+91 28 3456 7800",
      },
      serviceOptions: [
        "Bonded Warehousing",
        "Container Freight Station",
        "Export-Import Documentation",
        "Reefer Container Storage",
        "Multi-Region Contract",
      ],
    },
  },
];

export function getWarehousingDivision(slug: string): WarehousingDivisionData | undefined {
  return WAREHOUSING_DIVISIONS.find((d) => d.slug === slug);
}
