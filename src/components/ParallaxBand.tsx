import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useParallax } from "../hooks/useParallax";

export const ParallaxBand = () => {
  const reduceMotion = usePrefersReducedMotion();
  const y = useParallax(-40, reduceMotion);

  return (
    <motion.div style={{ y }} className="relative overflow-hidden py-6">
      <div className="absolute inset-0 bg-steel/70" />
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 rivet-texture opacity-20" />
      <div className="content-container relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted">
        <span>24/7 Production Support</span>
        <span>Dedicated Program Managers</span>
        <span>Documented QA & Safety</span>
      </div>
    </motion.div>
  );
};
