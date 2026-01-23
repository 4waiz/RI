import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MetricCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export const MetricCounter = ({ value, suffix = "", label }: MetricCounterProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reduceMotion, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-panel/70 p-6">
      <p className="text-3xl font-semibold text-white">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
        {label}
      </p>
    </div>
  );
};
