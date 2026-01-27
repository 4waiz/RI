import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowUpRight, FiCheckCircle, FiActivity } from "react-icons/fi";
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

const systemModules = [
  {
    id: "cnc",
    title: "Automated CNC Cell",
    description: "Live tooling + robotic handling",
    baseMetric: 94,
    unit: "%",
    metricLabel: "Utilization",
  },
  {
    id: "qa",
    title: "QA Protocol",
    description: "Inline CMM + SPC monitoring",
    baseMetric: 99.2,
    unit: "%",
    metricLabel: "Pass Rate",
  },
  {
    id: "assembly",
    title: "Assembly Line",
    description: "Torque-traced integration",
    baseMetric: 847,
    unit: "/hr",
    metricLabel: "Throughput",
  },
  {
    id: "shipping",
    title: "Shipping",
    description: "JIT logistics, global coverage",
    baseMetric: 12,
    unit: "min",
    metricLabel: "Avg Cycle",
  },
];

export const Hero = () => {
  const reduceMotion = usePrefersReducedMotion();
  const gridY = useParallax(-60, reduceMotion);
  const stagger = reduceMotion ? 0 : 0.14;
  const lineDuration = reduceMotion ? 0.01 : 0.6;

  const [liveMetrics, setLiveMetrics] = useState(
    systemModules.map((m) => m.baseMetric)
  );
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setLiveMetrics((prev) =>
        prev.map((val, i) => {
          const variance = systemModules[i].baseMetric * 0.02;
          const delta = (Math.random() - 0.5) * variance;
          return Math.round((val + delta) * 10) / 10;
        })
      );
      setPulseKey((k) => k + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: 0.2 }}
            className="panel relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                    System Overview
                  </p>
                  <motion.div
                    key={pulseKey}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="h-2 w-2 rounded-full bg-green-500"
                  />
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted">Rev 04 • Live</span>
              </div>

              <svg
                viewBox="0 0 420 260"
                className="h-40 w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(58,169,255,0)" />
                    <stop offset="50%" stopColor="rgba(58,169,255,1)" />
                    <stop offset="100%" stopColor="rgba(58,169,255,0)" />
                  </linearGradient>
                </defs>

                {/* Outer frame with animated dash */}
                <motion.rect
                  x="20"
                  y="20"
                  width="380"
                  height="220"
                  rx="18"
                  stroke="rgba(58,169,255,0.6)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: reduceMotion ? 0 : -24 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* CNC Cell box */}
                <motion.rect
                  x="60"
                  y="60"
                  width="140"
                  height="140"
                  rx="14"
                  stroke={activeModule === "cnc" ? "rgba(58,169,255,0.8)" : "rgba(255,255,255,0.3)"}
                  strokeWidth={activeModule === "cnc" ? 3 : 2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 1, delay: 0.3 }}
                />

                {/* QA box */}
                <motion.rect
                  x="230"
                  y="60"
                  width="130"
                  height="60"
                  rx="12"
                  stroke={activeModule === "qa" ? "rgba(58,169,255,0.8)" : "rgba(255,255,255,0.3)"}
                  strokeWidth={activeModule === "qa" ? 3 : 2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.5 }}
                />

                {/* Assembly/Shipping box */}
                <motion.rect
                  x="230"
                  y="140"
                  width="130"
                  height="60"
                  rx="12"
                  stroke={activeModule === "assembly" || activeModule === "shipping" ? "rgba(58,169,255,0.8)" : "rgba(255,255,255,0.3)"}
                  strokeWidth={activeModule === "assembly" || activeModule === "shipping" ? 3 : 2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.7 }}
                />

                {/* Connection lines with flow animation */}
                <motion.path
                  d="M200 90 L230 90"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: 1 }}
                />
                <motion.path
                  d="M200 170 L230 170"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: 1.2 }}
                />

                {/* Data flow particles */}
                {!reduceMotion && (
                  <>
                    <motion.circle
                      r="3"
                      fill="rgba(58,169,255,0.9)"
                      initial={{ cx: 200, cy: 90, opacity: 0 }}
                      animate={{ cx: 230, cy: 90, opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                    />
                    <motion.circle
                      r="3"
                      fill="rgba(58,169,255,0.9)"
                      initial={{ cx: 200, cy: 170, opacity: 0 }}
                      animate={{ cx: 230, cy: 170, opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                    />
                  </>
                )}

                {/* Targeting circle with pulse */}
                <motion.circle
                  cx="130"
                  cy="130"
                  r="36"
                  stroke="rgba(58,169,255,0.8)"
                  strokeWidth="3"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.6, delay: 0.4 }}
                />
                {!reduceMotion && (
                  <motion.circle
                    cx="130"
                    cy="130"
                    r="36"
                    stroke="rgba(58,169,255,0.4)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Rotating crosshairs */}
                <motion.g
                  style={{ transformOrigin: "130px 130px" }}
                  animate={{ rotate: reduceMotion ? 0 : 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
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
                </motion.g>

                {/* Center dot */}
                <motion.circle
                  cx="130"
                  cy="130"
                  r="4"
                  fill="rgba(58,169,255,1)"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Status labels in SVG */}
                <text x="295" y="95" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">
                  QA
                </text>
                <text x="295" y="175" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">
                  OUT
                </text>
              </svg>

              <div className="grid grid-cols-2 gap-3 text-[11px] text-muted">
                {systemModules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    className="group cursor-pointer rounded-lg p-2 transition-colors hover:bg-white/5"
                    onMouseEnter={() => setActiveModule(module.id)}
                    onMouseLeave={() => setActiveModule(null)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-foreground/80 transition-colors group-hover:text-accent">
                        {module.title}
                      </p>
                      <motion.div
                        className="flex items-center gap-1 text-accent"
                        key={`${module.id}-${pulseKey}`}
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiActivity className="h-3 w-3" />
                        <span className="font-mono text-[10px]">
                          {liveMetrics[index]}{module.unit}
                        </span>
                      </motion.div>
                    </div>
                    <p className="mt-0.5">{module.description}</p>
                    <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full bg-accent/60"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((liveMetrics[index] / module.baseMetric) * 80, 100)}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p className="mt-1 text-[9px] text-muted/60">{module.metricLabel}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

