import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { Button } from "./Button";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useParallax } from "../hooks/useParallax";

const headlineLines = [
  "Precision manufacturing",
  "for mission-critical",
  "industrial systems.",
];

const specs = [
  { label: "Tolerance", value: "+/-0.0008 in" },
  { label: "Lead time", value: "2-6 weeks" },
  { label: "On-time", value: "98.6%" },
  { label: "Traceability", value: "Full lot" },
];

export const Hero = () => {
  const reduceMotion = usePrefersReducedMotion();
  const gridY = useParallax(-60, reduceMotion);
  const stagger = reduceMotion ? 0 : 0.14;
  const lineDuration = reduceMotion ? 0.01 : 0.6;

  return (
    <section className="relative overflow-hidden">
      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-30"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base" />
      <div className="content-container relative z-10 grid gap-8 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: stagger } },
            }}
            className="text-3xl md:text-4xl lg:text-5xl"
          >
            {headlineLines.map((line) => (
              <motion.span
                key={line}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: lineDuration },
                  },
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-4 max-w-xl text-sm text-muted">
            Rabana Industries delivers precision machining, fabrication, and
            integrated assembly for manufacturers who demand zero-defect
            performance. From prototype to full-rate production, we engineer
            repeatability into every build.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/contact#quote">
              Request a Quote <FiArrowUpRight />
            </Button>
            <Button to="/projects" variant="outline">
              View Case Studies
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.4,
                  delay: reduceMotion ? 0 : 0.3 + index * 0.08,
                }}
                className="flex items-center gap-2 rounded-full border bg-panel/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]"
              >
                <FiCheckCircle className="text-accent" />
                <span className="text-muted">{spec.label}</span>
                <span className="text-foreground">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 top-8 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="panel relative overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  System Overview
                </p>
                <span className="text-xs text-muted">Rev 04</span>
              </div>
              <svg
                viewBox="0 0 420 260"
                className="h-40 w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20"
                  y="20"
                  width="380"
                  height="220"
                  rx="18"
                  stroke="rgba(58,169,255,0.6)"
                  strokeWidth="2"
                />
                <rect
                  x="60"
                  y="60"
                  width="140"
                  height="140"
                  rx="14"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <rect
                  x="230"
                  y="60"
                  width="130"
                  height="60"
                  rx="12"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <rect
                  x="230"
                  y="140"
                  width="130"
                  height="60"
                  rx="12"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="130"
                  cy="130"
                  r="36"
                  stroke="rgba(58,169,255,0.8)"
                  strokeWidth="3"
                />
                <path
                  d="M130 94 L130 166"
                  stroke="rgba(58,169,255,0.6)"
                  strokeWidth="2"
                />
                <path
                  d="M94 130 L166 130"
                  stroke="rgba(58,169,255,0.6)"
                  strokeWidth="2"
                />
              </svg>
              <div className="grid grid-cols-2 gap-3 text-[11px] text-muted">
                <div>
                  <p className="text-foreground/80">Automated CNC Cell</p>
                  <p>Live tooling + robotic handling</p>
                </div>
                <div>
                  <p className="text-foreground/80">QA Protocol</p>
                  <p>Inline CMM + SPC monitoring</p>
                </div>
                <div>
                  <p className="text-foreground/80">Assembly Line</p>
                  <p>Torque-traced integration</p>
                </div>
                <div>
                  <p className="text-foreground/80">Shipping</p>
                  <p>JIT logistics, global coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

