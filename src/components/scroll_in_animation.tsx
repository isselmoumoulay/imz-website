"use client";

import { motion, type Variants } from "framer-motion";

// Smooth, modern easing curve (ease-out-expo-ish)
const EASE = [0.22, 1, 0.36, 1] as const;

export function ScrollInAnimation({
  children,
  type = "fade",
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: React.ReactNode;
  type?: "fade" | "scale" | "left" | "right" | "rotate" | "bot";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  let start: Record<string, number> = { opacity: 0, y: 24 };
  let end: Record<string, number> = { opacity: 1, y: 0 };

  switch (type) {
    case "fade":
    case "bot":
      start = { opacity: 0, y: 28 };
      end = { opacity: 1, y: 0 };
      break;
    case "scale":
      start = { opacity: 0, scale: 0.96, y: 16 };
      end = { opacity: 1, scale: 1, y: 0 };
      break;
    case "left":
      start = { opacity: 0, x: -40 };
      end = { opacity: 1, x: 0 };
      break;
    case "right":
      start = { opacity: 0, x: 40 };
      end = { opacity: 1, x: 0 };
      break;
    case "rotate":
      start = { opacity: 0, y: 20, scale: 0.97 };
      end = { opacity: 1, y: 0, scale: 1 };
      break;
  }

  return (
    <motion.div
      className={className}
      initial={start}
      whileInView={end}
      transition={{ ease: EASE, duration, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

// Container + item variants for elegant staggered reveals
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: EASE, duration: 0.6 },
  },
};
