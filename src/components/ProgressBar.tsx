import { motion } from "framer-motion";

type ProgressBarProps = {
  progress: number;
  visible: boolean;
};

export const ProgressBar = ({ progress, visible }: ProgressBarProps) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-1 w-full bg-transparent transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <motion.div
        className="h-full bg-accent shadow-glow"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </div>
  );
};
