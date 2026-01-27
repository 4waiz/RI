import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "../data/caseStudies";
import { industries } from "../data/industries";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { SectionHeading } from "../components/SectionHeading";

const filters = [
  { id: "all", label: "All" },
  ...industries.map((industry) => ({ id: industry.id, label: industry.name })),
];

export const Projects = () => {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return caseStudies;
    return caseStudies.filter((study) => study.industry === active);
  }, [active]);

  return (
    <main>
      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Projects"
            title="Case studies engineered for real-world demands."
            description="Filter by industry to explore recent programs and production outcomes."
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActive(filter.id)}
                className={`relative rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
                  active === filter.id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {active === filter.id && (
                  <motion.span
                    layoutId="filter-chip"
                    className="absolute inset-0 rounded-full bg-accent/20"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              layout
              className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((study) => (
                <motion.div key={study.id} layout>
                  <CaseStudyCard study={study} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};
