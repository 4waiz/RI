import { motion } from "framer-motion";
import {
  FiActivity,
  FiCpu,
  FiLayers,
  FiSettings,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import type { Capability } from "../data/capabilities";

const iconMap = {
  cnc: FiCpu,
  fabrication: FiSettings,
  assembly: FiLayers,
  prototype: FiActivity,
  maintenance: FiShield,
  logistics: FiTruck,
};

type CapabilityCardProps = {
  capability: Capability;
};

export const CapabilityCard = ({ capability }: CapabilityCardProps) => {
  const Icon = iconMap[capability.icon];

  return (
    <motion.div
      className="group panel relative flex h-full flex-col gap-3 rounded-2xl p-4 transition"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-base/70 text-accent transition duration-300 group-hover:rotate-6">
          <Icon className="text-lg" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted/60">
          {capability.id.replace("-", " ")}
        </span>
      </div>
      <div>
        <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
        <p className="mt-1.5 text-xs text-muted line-clamp-2">{capability.description}</p>
      </div>
      <ul className="mt-auto space-y-1 text-[10px] uppercase tracking-[0.15em] text-muted">
        {capability.highlights.slice(0, 3).map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
