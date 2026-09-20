import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
  as = "div",
}) {
  const reduce = useReducedMotion();
  const offset = {
    bottom: { y: 24 },
    top: { y: -24 },
    left: { x: -28 },
    right: { x: 28 },
  }[from];

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.65, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export const stagger = {
  hidden: { transition: { staggerChildren: 0.12, staggerDirection: -1 } },
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 0.65, 0.3, 1] },
  },
};
