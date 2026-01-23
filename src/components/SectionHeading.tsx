import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  const reduceMotion = useReducedMotion();
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-2 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.35em] text-accent/80">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-sm md:text-base text-white/70">
          {description}
        </p>
      )}
    </motion.div>
  );
};
