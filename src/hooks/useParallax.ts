import { useScroll, useTransform } from "framer-motion";

export const useParallax = (distance: number, disabled?: boolean) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, distance]);
  return disabled ? 0 : y;
};
