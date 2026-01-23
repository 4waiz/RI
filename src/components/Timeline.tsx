import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type TimelineStep = {
  title: string;
  description: string;
};

type TimelineProps = {
  steps: TimelineStep[];
};

export const Timeline = ({ steps }: TimelineProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = reduceMotion ? 1 : useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
      <motion.div
        className="absolute left-4 top-0 h-full w-px origin-top bg-accent"
        style={{ scaleY }}
      />
      <div className="space-y-10">
        {steps.map((step, index) => (
          <div key={step.title} className="relative pl-12">
            <div className="absolute left-2 top-1 h-4 w-4 rounded-full border border-accent/60 bg-base" />
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Step {index + 1}
            </p>
            <h3 className="mt-2 text-xl">{step.title}</h3>
            <p className="mt-2 text-sm text-white/70">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
