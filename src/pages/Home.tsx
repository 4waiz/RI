import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { SectionHeading } from "../components/SectionHeading";
import { CapabilityCard } from "../components/CapabilityCard";
import { IndustryTile } from "../components/IndustryTile";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { MetricCounter } from "../components/MetricCounter";
import { Timeline } from "../components/Timeline";
import { Accordion } from "../components/Accordion";
import { CTABanner } from "../components/CTABanner";
import { ParallaxBand } from "../components/ParallaxBand";
import { capabilities } from "../data/capabilities";
import { industries } from "../data/industries";
import { caseStudies } from "../data/caseStudies";
import { Reveal } from "../components/Reveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const timelineSteps = [
  {
    title: "Define",
    description:
      "Collaborate on DFM, tolerance stacks, and material selection to lock down a robust build plan.",
  },
  {
    title: "Prototype",
    description:
      "Rapid machining and fabrication with in-process metrology to validate critical dimensions.",
  },
  {
    title: "Industrialize",
    description:
      "Scale fixtures, tooling, and QA checkpoints for repeatable production performance.",
  },
  {
    title: "Deliver",
    description:
      "Serialized tracking, JIT logistics, and full documentation for every shipment.",
  },
];

const faqItems = [
  {
    question: "What tolerances can you hold?",
    answer:
      "Typical machining tolerances are +/-0.001 in, with critical features qualified down to +/-0.0005 in depending on material and geometry.",
  },
  {
    question: "Do you support short-run prototypes?",
    answer:
      "Yes. We maintain quick-turn CNC and fabrication cells dedicated to prototype and pilot builds with accelerated inspection.",
  },
  {
    question: "How do you manage quality documentation?",
    answer:
      "Every build is supported by inspection plans, material certifications, and serialized traceability aligned to ISO-style QA systems.",
  },
];

export const Home = () => {
  const reduceMotion = usePrefersReducedMotion();
  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.01 : 0.4 },
    },
  };

  return (
    <main className="text-foreground">
      <Hero />

      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Precision services engineered for uptime."
            description="From prototype validation to full-rate production, Rabana integrates machining, fabrication, and assembly with traceable QA."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.slice(0, 3).map((capability) => (
              <motion.div key={capability.id} variants={itemVariant}>
                <CapabilityCard capability={capability} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ParallaxBand />

      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Industries"
            title="Built for regulated, high-demand sectors."
            description="We support OEMs and operators who require durable components, full traceability, and reliable field service."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry) => (
              <motion.div key={industry.id} variants={itemVariant}>
                <IndustryTile industry={industry} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-panel/40">
        <div className="content-container">
          <SectionHeading
            eyebrow="Performance"
            title="Measured results across every build."
            description="We track the metrics that protect your schedule and keep your teams online."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MetricCounter value={98} suffix="%" label="On-time delivery" />
            <MetricCounter value={45} suffix="k" label="Parts shipped yearly" />
            <MetricCounter value={12} suffix="hr" label="Average response" />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  Process Timeline
                </p>
                <h3 className="mt-3 text-2xl">From intake to delivery.</h3>
                <p className="mt-3 text-sm text-white/70">
                  Our program managers coordinate every step with transparent
                  milestones and QA gates.
                </p>
              </div>
            </Reveal>
            <Timeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-container">
          <SectionHeading
            eyebrow="Case Studies"
            title="Recent programs powering critical systems."
            description="Eight featured builds across automotive, aerospace, energy, and heavy equipment sectors."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {caseStudies.slice(0, 6).map((study) => (
              <motion.div key={study.id} variants={itemVariant}>
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-tight bg-panel/50">
        <div className="content-container flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-white/60">
          <span>ISO 9001:2015 aligned</span>
          <span>AS9100-ready documentation</span>
          <span>ITAR compliant workflows</span>
          <span>OSHA 18001 safety audits</span>
        </div>
      </section>

      <section className="section">
        <div className="content-container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers from the engineering desk."
              description="Quick guidance on lead times, tolerances, and documentation standards."
            />
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      <section className="section">
        <div className="content-container">
          <CTABanner />
        </div>
      </section>
    </main>
  );
};
