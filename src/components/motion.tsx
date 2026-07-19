"use client";

import { motion, type Variants } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

// 기본 페이드업 — 진입 시 1회 (prefers-reduced-motion은 Motion이 자동 존중)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// 그리드 스태거 (MASTER 모션: Stagger List, back.out 느낌)
const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.4, 0.64, 1] },
  },
};

type DivProps = { children: ReactNode; className?: string; id?: string; style?: CSSProperties };

export function Reveal({ children, className, id, style }: DivProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className, id, style }: DivProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div className={className} variants={staggerItem} whileHover={hover ? { y: -4 } : undefined}>
      {children}
    </motion.div>
  );
}
