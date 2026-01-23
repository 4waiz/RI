import { useReducedMotion } from "framer-motion";

export const usePrefersReducedMotion = () => useReducedMotion() ?? false;
