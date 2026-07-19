"use client";

/*
 * Motion accordion — 21st.dev "@ibelick/accordion" (motion-primitives) 기반.
 * framer-motion → motion/react 로 교체, cn 의존성 제거하여 본 프로젝트에 이식.
 */
import { motion, AnimatePresence, MotionConfig, type Transition, type Variant } from "motion/react";
import React, { createContext, useContext, useState, type ReactNode, type Key } from "react";

type Ctx = {
  expandedValue: Key | null;
  toggleItem: (value: Key) => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

const AccordionContext = createContext<Ctx | undefined>(undefined);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("useAccordion must be used within an Accordion");
  return ctx;
}

export function Accordion({
  children,
  className,
  transition,
  variants,
  defaultValue = null,
}: {
  children: ReactNode;
  className?: string;
  transition?: Transition;
  variants?: { expanded: Variant; collapsed: Variant };
  defaultValue?: Key | null;
}) {
  const [expandedValue, setExpandedValue] = useState<Key | null>(defaultValue);
  const toggleItem = (value: Key) =>
    setExpandedValue((prev) => (prev === value ? null : value));

  return (
    <MotionConfig transition={transition}>
      <div className={className} aria-orientation="vertical">
        <AccordionContext.Provider value={{ expandedValue, toggleItem, variants }}>
          {children}
        </AccordionContext.Provider>
      </div>
    </MotionConfig>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: Key;
  children: ReactNode;
  className?: string;
}) {
  const { expandedValue } = useAccordion();
  const isExpanded = value === expandedValue;
  return (
    <div className={className} {...(isExpanded ? { "data-expanded": "" } : {})}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ value?: Key }>, { value })
          : child
      )}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) {
  const { toggleItem, expandedValue } = useAccordion();
  const value = (props as { value?: Key }).value;
  const isExpanded = value === expandedValue;
  return (
    <button
      type="button"
      onClick={() => value !== undefined && toggleItem(value)}
      aria-expanded={isExpanded}
      className={className}
      {...(isExpanded ? { "data-expanded": "" } : {})}
    >
      {children}
    </button>
  );
}

export function AccordionContent({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) {
  const { expandedValue, variants } = useAccordion();
  const value = (props as { value?: Key }).value;
  const isExpanded = value === expandedValue;

  const combined = {
    expanded: { height: "auto", opacity: 1, ...variants?.expanded },
    collapsed: { height: 0, opacity: 0, ...variants?.collapsed },
  };

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={combined}
          style={{ overflow: "hidden" }}
        >
          <div className={className}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
