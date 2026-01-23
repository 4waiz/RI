import { motion } from "framer-motion";
import type { Industry } from "../data/industries";

export const IndustryTile = ({ industry }: { industry: Industry }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group panel flex h-full flex-col gap-3 rounded-2xl p-4 transition"
    >
      <div className="relative h-28 overflow-hidden rounded-xl border">
        <img
          src={industry.image}
          alt={`${industry.name} manufacturing`}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 to-transparent" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-foreground">{industry.name}</h3>
        <p className="mt-1 text-xs text-muted line-clamp-2">{industry.description}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {industry.focus.map((item) => (
          <span
            key={item}
            className="rounded-full border px-2 py-0.5 text-[10px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
