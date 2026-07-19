"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "motion/react";

// ── 카운트업 숫자 (뷰 진입 시 1회) ──
export function Counter({
  to,
  decimals = 0,
  suffix = "",
  duration = 1100,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let startTs = 0;
    const tick = (t: number) => {
      if (!startTs) startTs = t;
      const p = Math.min((t - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix && <small>{suffix}</small>}
    </span>
  );
}

// ── 무한 마퀴 스트립 ──
export function Marquee({ items }: { items: ReactNode[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
