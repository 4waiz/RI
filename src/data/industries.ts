export type Industry = {
  id: string;
  name: string;
  description: string;
  focus: string[];
  image: string;
};

export const industries: Industry[] = [
  {
    id: "automotive",
    name: "Automotive",
    description:
      "High-volume precision components built for durability, safety compliance, and repeatable cycle times.",
    focus: ["Powertrain", "Chassis", "EV systems"],
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
  },
  {
    id: "aerospace",
    name: "Aerospace",
    description:
      "Tight-tolerance machined parts and assemblies with documented QA and full material traceability.",
    focus: ["Structural", "Flight systems", "Ground support"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: "energy",
    name: "Energy",
    description:
      "Components engineered for extreme environments, including turbines, pumps, and pressure equipment.",
    focus: ["Renewables", "Oil & gas", "Power generation"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
  },
  {
    id: "construction",
    name: "Construction",
    description:
      "Heavy-duty assemblies and fabricated structures designed for on-site reliability and fast field replacement.",
    focus: ["Heavy equipment", "Structural steel", "Infrastructure"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description:
      "Durable systems and assemblies that withstand vibration, dust, and seasonal operating demands.",
    focus: ["Harvesting", "Irrigation", "Material handling"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
  },
  {
    id: "defense",
    name: "Defense",
    description:
      "Mission-critical components with strict compliance, security protocols, and full documentation traceability.",
    focus: ["Ground vehicles", "Naval systems", "Support equipment"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
];
