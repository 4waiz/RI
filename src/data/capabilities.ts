export type Capability = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: "cnc" | "fabrication" | "assembly" | "prototype" | "maintenance" | "logistics";
};

export const capabilities: Capability[] = [
  {
    id: "cnc-machining",
    title: "CNC Machining",
    description:
      "High-precision milling and turning with repeatable tolerances down to +/-0.0008 in. Multi-axis setups and in-process probing ensure traceable accuracy.",
    highlights: [
      "3 to 5-axis milling",
      "Live tooling lathes",
      "In-process metrology",
    ],
    icon: "cnc",
  },
  {
    id: "fabrication",
    title: "Fabrication",
    description:
      "Robust metal fabrication with certified welding, laser cutting, and formed assemblies engineered for durability and weight efficiency.",
    highlights: [
      "Laser + plasma cutting",
      "AWS D1.1 welders",
      "Stress-relieved builds",
    ],
    icon: "fabrication",
  },
  {
    id: "assembly",
    title: "Assembly & Integration",
    description:
      "Electro-mechanical assembly with torque traceability, kitting, and controlled build environments to reduce field failures.",
    highlights: [
      "Torque-verified assembly",
      "Serialized tracking",
      "Functional testing",
    ],
    icon: "assembly",
  },
  {
    id: "prototyping",
    title: "Rapid Prototyping",
    description:
      "Accelerated design-to-part workflows including DFM reviews, quick-turn machining, and prototype-to-production readiness.",
    highlights: [
      "24-72 hour turnarounds",
      "DFM feedback",
      "Pilot builds",
    ],
    icon: "prototype",
  },
  {
    id: "maintenance",
    title: "Maintenance & Repair",
    description:
      "Field-ready maintenance for critical assets, including reverse engineering, part refurbishment, and preventive service plans.",
    highlights: [
      "Reverse engineering",
      "Component refurbishment",
      "Service agreements",
    ],
    icon: "maintenance",
  },
  {
    id: "logistics",
    title: "Logistics & Supply",
    description:
      "Managed supply chains, vendor consolidation, and just-in-time delivery programs to stabilize your production schedules.",
    highlights: [
      "Vendor-managed inventory",
      "JIT delivery",
      "Global sourcing",
    ],
    icon: "logistics",
  },
];

