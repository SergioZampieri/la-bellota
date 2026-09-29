"use client";

import { MotionConfig, motion, type Variants } from "motion/react";

// reducedMotion="user": with the OS "reduce motion" setting on, transforms are
// skipped and only opacity fades remain.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

type RevealProps = {
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

// Fades a block up the first time it scrolls into view.
export function Reveal({ className, delay = 0, children }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Same, but its StaggerItem children arrive one after another.
export function Stagger({
  className,
  step = 0.1,
  children,
}: {
  className?: string;
  step?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={{ visible: { transition: { staggerChildren: step } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
