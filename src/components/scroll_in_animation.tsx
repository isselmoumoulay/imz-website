"use client";

import { delay, motion, easeIn } from "framer-motion";

export function ScrollInAnimation({
  children,
  type = "fade",
  delay = 0,
  duration = 1.2,
}: {
  children: React.ReactNode;
  type?: "fade" | "scale" | "left" | "right" | "rotate" | "bot";
  delay?: number;
  duration?: number;
}) {
  let start = {};
  let end = {};
  let transition: {} = {
    ease: "easeInOut",
    duration: duration,
    delay: delay,
    staggerChildren: 0.5,
  };
  if (type === "fade") {
    start = { opacity: 0, y: 100 };
    end = { opacity: 1, y: 0 };
  } else if (type === "scale") {
    start = { opacity: 0, scale: 1.2 };
    end = { opacity: 1, scale: 1 };
    transition = {
      ...transition,
      duration: 1,
    };
  } else if (type === "left" || type === "right") {
    start = { opacity: 0, x: type === "left" ? -100 : 100 };
    end = { opacity: 1, x: 0 };
  } else if (type === "bot") {
    start = { opacity: 0, y: 200 };
    end = { opacity: 1, y: 0 };
  } else if (type === "rotate") {
    start = { opacity: 0, rotateY: 90 };
    end = { opacity: 1, rotateY: 0 };
    transition = {
      ...transition,
      delay: delay ?? 0.1,
    };
  }
  return (
    <motion.div
      initial={start}
      whileInView={end}
      transition={transition}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}
