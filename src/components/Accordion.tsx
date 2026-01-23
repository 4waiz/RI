import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [active, setActive] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = active === index;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-white/10 bg-panel/70"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              onClick={() => setActive(isOpen ? null : index)}
            >
              <span className="text-sm font-semibold">{item.question}</span>
              <FiChevronDown
                className={`transition ${isOpen ? "rotate-180 text-accent" : "text-white/60"}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
                  className="overflow-hidden px-6"
                >
                  <p className="pb-4 text-sm text-white/70">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
