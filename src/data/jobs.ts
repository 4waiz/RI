export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  requirements: string[];
};

export const jobs: Job[] = [
  {
    id: "manufacturing-engineer",
    title: "Manufacturing Engineer",
    location: "Cleveland, OH",
    type: "Full-time",
    summary:
      "Own process development, fixture design, and production optimization across multi-axis CNC cells.",
    requirements: [
      "5+ years in precision machining",
      "Experience with SPC and PFMEA",
      "CAD/CAM proficiency",
    ],
  },
  {
    id: "qa-inspector",
    title: "Quality Assurance Inspector",
    location: "Cleveland, OH",
    type: "Full-time",
    summary:
      "Perform first-article, in-process, and final inspections using CMM and optical metrology.",
    requirements: [
      "GD&T fluency",
      "CMM programming experience",
      "ISO-style documentation",
    ],
  },
  {
    id: "welding-specialist",
    title: "Welding Specialist",
    location: "Pittsburgh, PA",
    type: "Full-time",
    summary:
      "Execute structural welds on large fabrications and support certified procedure updates.",
    requirements: [
      "AWS D1.1 certification",
      "5+ years fabrication experience",
      "Blueprint reading",
    ],
  },
  {
    id: "supply-chain-lead",
    title: "Supply Chain Lead",
    location: "Remote / Hybrid",
    type: "Full-time",
    summary:
      "Manage supplier performance, lead times, and inbound logistics for critical programs.",
    requirements: [
      "Vendor management experience",
      "ERP and MRP systems",
      "Negotiation skills",
    ],
  },
  {
    id: "field-service-tech",
    title: "Field Service Technician",
    location: "Midwest Region",
    type: "Full-time",
    summary:
      "Provide on-site maintenance, diagnostics, and repair for customer-installed systems.",
    requirements: [
      "Mechanical troubleshooting",
      "Travel readiness (50%)",
      "Safety-first mindset",
    ],
  },
  {
    id: "production-coordinator",
    title: "Production Coordinator",
    location: "Cleveland, OH",
    type: "Full-time",
    summary:
      "Coordinate scheduling, kitting, and work-order flow to meet on-time delivery targets.",
    requirements: [
      "Experience with production scheduling",
      "Clear communication",
      "Lean manufacturing exposure",
    ],
  },
];
