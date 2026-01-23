import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

type ButtonProps = {
  children: ReactNode;
  to?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-accent text-white hover:text-white shadow-glow hover:shadow-glow border border-accent/40",
  outline:
    "border text-foreground hover:border-accent/70 hover:text-accent",
  ghost: "text-muted hover:text-foreground",
};

export const Button = ({
  children,
  to,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <MotionLink
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        to={to}
        className={classes}
        onClick={onClick}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
