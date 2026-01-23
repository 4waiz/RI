export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  capabilities: string[];
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    slug: "ev-drive-housing",
    title: "EV Drive Unit Housing",
    industry: "automotive",
    summary:
      "Lightweight aluminum housing for a next-gen electric drive unit with strict noise and vibration constraints.",
    challenge:
      "Customer needed a rigid casting replacement with tighter flatness and a 6-week launch window.",
    solution:
      "Rabana re-engineered the part as a billet CNC assembly, added in-process probing, and validated the stack-up with CMM.",
    results: [
      "32% weight reduction",
      "+/-0.0007 in flatness",
      "98.6% on-time delivery",
    ],
    capabilities: ["CNC machining", "Assembly", "QA"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop",
  },
  {
    id: "cs-02",
    slug: "aero-actuator-bracket",
    title: "Aero Actuator Bracket",
    industry: "aerospace",
    summary:
      "Precision bracket with critical bores for flight-control actuation.",
    challenge:
      "Required full material traceability, low runout bores, and zero foreign object debris risk.",
    solution:
      "Established a dedicated cell with serialized tracking, deburring process, and 100% inspection.",
    results: [
      "Cpk 1.67 on critical bore",
      "100% lot traceability",
      "45% cycle time reduction",
    ],
    capabilities: ["CNC machining", "QA", "Logistics"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
  },
  {
    id: "cs-03",
    slug: "turbine-nozzle-ring",
    title: "Turbine Nozzle Ring",
    industry: "energy",
    summary:
      "High-temperature nozzle ring for gas turbine retrofit program.",
    challenge:
      "Legacy supplier lead times exceeded 20 weeks, halting planned outages.",
    solution:
      "Implemented a dual-source fabrication plan and built a rapid prototype to validate fit-up.",
    results: [
      "Lead time cut to 8 weeks",
      "Zero rework on first build",
      "$380K outage savings",
    ],
    capabilities: ["Fabrication", "Prototyping", "Logistics"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
  },
  {
    id: "cs-04",
    slug: "bridge-girder-assembly",
    title: "Bridge Girder Assembly",
    industry: "construction",
    summary:
      "Large-format welded assemblies for a rapid infrastructure rebuild.",
    challenge:
      "High-load structural requirements with aggressive field installation timeline.",
    solution:
      "Produced pre-kitted subassemblies with certified weld procedures and mobile QA verification.",
    results: [
      "14-day schedule recovery",
      "AWS D1.1 certified",
      "Zero field fit-up issues",
    ],
    capabilities: ["Fabrication", "Assembly", "QA"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
  },
  {
    id: "cs-05",
    slug: "precision-pump-shaft",
    title: "Precision Pump Shaft",
    industry: "energy",
    summary:
      "Critical shaft replacement for offshore pumping system.",
    challenge:
      "Existing units showed premature wear and unplanned downtime.",
    solution:
      "Reverse engineered the shaft, upgraded alloy selection, and added surface finishing.",
    results: [
      "3x service life",
      "+/-0.0005 in runout",
      "24-hour emergency delivery",
    ],
    capabilities: ["Maintenance", "CNC machining", "QA"],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=800&fit=crop",
  },
  {
    id: "cs-06",
    slug: "autonomous-farm-chassis",
    title: "Autonomous Farm Chassis",
    industry: "agriculture",
    summary:
      "Fabricated chassis for autonomous agricultural equipment.",
    challenge:
      "Required vibration isolation and fast field serviceability.",
    solution:
      "Modularized frame sections with quick-release fasteners and sealed electrical routing.",
    results: [
      "22% faster service",
      "Improved vibration damping",
      "Pilot run in 10 weeks",
    ],
    capabilities: ["Fabrication", "Assembly", "Prototyping"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=800&fit=crop",
  },
  {
    id: "cs-07",
    slug: "hydraulic-manifold",
    title: "Hydraulic Manifold",
    industry: "construction",
    summary:
      "Multi-port hydraulic manifold for heavy equipment fleet.",
    challenge:
      "Field leaks and inconsistent port alignment from prior vendor.",
    solution:
      "Redesigned porting geometry, added pressure testing, and instituted SPC on critical ports.",
    results: [
      "Leak rate reduced to 0%",
      "Cpk 1.45 across ports",
      "19% cost reduction",
    ],
    capabilities: ["CNC machining", "QA", "Maintenance"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop",
  },
  {
    id: "cs-08",
    slug: "battery-rack-system",
    title: "Battery Rack System",
    industry: "automotive",
    summary:
      "High-density battery rack assemblies for commercial EV fleets.",
    challenge:
      "Needed repeatable assembly with thermal expansion control and rapid kitting.",
    solution:
      "Designed jig-assisted assembly, introduced torque traceability, and consolidated suppliers.",
    results: [
      "30% faster assembly",
      "Torque traceability 100%",
      "15% inventory reduction",
    ],
    capabilities: ["Assembly", "Logistics", "QA"],
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=800&fit=crop",
  },
];
