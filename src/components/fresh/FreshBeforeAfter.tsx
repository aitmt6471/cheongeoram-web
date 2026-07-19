"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as RPointerEvent } from "react";
import { ArrowsIcon } from "../icons";

const W = 800;
const H = 560;

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
const rnd = (a: number, b: number) => a + Math.random() * (b - a);

/* 에어컨 루버 */
function drawAircon(ctx: CanvasRenderingContext2D, clean: boolean) {
  const g = ctx.createLinearGradient(0, 0, 0, H);
  if (clean) { g.addColorStop(0, "#eaf7f8"); g.addColorStop(1, "#cfe8ea"); }
  else { g.addColorStop(0, "#c9c3b2"); g.addColorStop(1, "#a99f86"); }
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = clean ? "#f7fdfd" : "#e7e1d2";
  roundRect(ctx, 30, 26, W - 60, H - 52, 24); ctx.fill();
  const top = 74, slatH = 26, gap = 12, x = 62, w = W - 124;
  for (let i = 0; i < 12; i++) {
    const y = top + i * (slatH + gap);
    const sg = ctx.createLinearGradient(0, y, 0, y + slatH);
    if (clean) { sg.addColorStop(0, "#ffffff"); sg.addColorStop(1, "#dff1f2"); }
    else { sg.addColorStop(0, "#d8d1bd"); sg.addColorStop(1, "#b3a98d"); }
    ctx.fillStyle = sg; roundRect(ctx, x, y, w, slatH, 7); ctx.fill();
  }
  if (!clean) {
    for (let s = 0; s < 150; s++) {
      ctx.beginPath(); ctx.arc(rnd(60, W - 60), rnd(60, H - 60), rnd(2, 8), 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.55 ? `rgba(40,55,30,${rnd(0.12, 0.4)})` : `rgba(90,70,40,${rnd(0.08, 0.3)})`;
      ctx.fill();
    }
    ctx.fillStyle = "rgba(150,125,70,.16)"; ctx.fillRect(0, 0, W, H);
  } else sheen(ctx);
}

/* 매트리스/패브릭 퀼팅 */
function drawFabric(ctx: CanvasRenderingContext2D, clean: boolean) {
  const g = ctx.createLinearGradient(0, 0, 0, H);
  if (clean) { g.addColorStop(0, "#fbfdfe"); g.addColorStop(1, "#eaf4f6"); }
  else { g.addColorStop(0, "#e6ddc9"); g.addColorStop(1, "#d2c6ac"); }
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = clean ? "rgba(120,160,170,.28)" : "rgba(120,105,70,.35)"; ctx.lineWidth = 2;
  const cell = 92;
  for (let x = -H; x < W + H; x += cell) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + H, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, H); ctx.lineTo(x + H, 0); ctx.stroke();
  }
  if (!clean) {
    for (let s = 0; s < 5; s++) {
      const cx = rnd(120, W - 120), cy = rnd(110, H - 110), r = rnd(34, 74);
      const st = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
      st.addColorStop(0, `rgba(96,64,32,${rnd(0.28, 0.42)})`); st.addColorStop(1, "rgba(120,90,55,0)");
      ctx.fillStyle = st; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    }
    for (let d = 0; d < 380; d++) {
      ctx.beginPath(); ctx.arc(rnd(30, W - 30), rnd(30, H - 30), rnd(0.6, 2.4), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(70,55,30,${rnd(0.1, 0.3)})`; ctx.fill();
    }
    ctx.fillStyle = "rgba(150,120,60,.14)"; ctx.fillRect(0, 0, W, H);
  } else sheen(ctx);
}

/* 세탁조 드럼 */
function drawWasher(ctx: CanvasRenderingContext2D, clean: boolean) {
  const g = ctx.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, H * 0.7);
  if (clean) { g.addColorStop(0, "#f4fbfc"); g.addColorStop(1, "#d3e9ec"); }
  else { g.addColorStop(0, "#cfc9b6"); g.addColorStop(1, "#9e968a"); }
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, R = H * 0.42;
  // 드럼 외곽
  ctx.fillStyle = clean ? "#e7f5f6" : "#c3bba6";
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = clean ? "#bfe0e3" : "#8f866f"; ctx.lineWidth = 10;
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
  // 드럼 타공 홀
  for (let ring = 1; ring <= 5; ring++) {
    const rr = (R - 26) * (ring / 5.4);
    const holes = 8 + ring * 6;
    for (let i = 0; i < holes; i++) {
      const a = (i / holes) * Math.PI * 2 + ring * 0.3;
      const hx = cx + Math.cos(a) * rr, hy = cy + Math.sin(a) * rr;
      ctx.beginPath(); ctx.arc(hx, hy, 6, 0, Math.PI * 2);
      ctx.fillStyle = clean ? "#bfe0e3" : "#7c745d"; ctx.fill();
      if (!clean) { ctx.beginPath(); ctx.arc(hx + rnd(-3, 3), hy + rnd(-3, 3), rnd(3, 7), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(35,45,25,${rnd(0.25, 0.5)})`; ctx.fill(); }
    }
  }
  if (!clean) {
    for (let s = 0; s < 90; s++) {
      ctx.beginPath(); ctx.arc(cx + rnd(-R, R) * 0.9, cy + rnd(-R, R) * 0.9, rnd(4, 13), 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.5 ? `rgba(30,45,20,${rnd(0.12, 0.35)})` : `rgba(80,60,30,${rnd(0.1, 0.3)})`;
      ctx.fill();
    }
  } else sheen(ctx);
}

function sheen(ctx: CanvasRenderingContext2D) {
  for (let p = 0; p < 22; p++) {
    const px = rnd(60, W - 60), py = rnd(60, H - 60), ps = rnd(3, 7);
    ctx.save(); ctx.translate(px, py); ctx.globalAlpha = rnd(0.4, 0.9); ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    for (let k = 0; k < 4; k++) { ctx.lineTo(0, -ps); ctx.lineTo(ps * 0.28, -ps * 0.28); ctx.rotate(Math.PI / 2); }
    ctx.fill(); ctx.restore();
  }
  const sh = ctx.createLinearGradient(0, 0, W, H);
  sh.addColorStop(0, "rgba(255,255,255,.28)"); sh.addColorStop(0.5, "rgba(255,255,255,0)");
  ctx.fillStyle = sh; ctx.fillRect(0, 0, W, H);
}

const DRAW: Record<string, (c: CanvasRenderingContext2D, clean: boolean) => void> = {
  aircon: drawAircon, fabric: drawFabric, washer: drawWasher, hood: drawFabric,
};

const TAGS: Record<string, [string, string]> = {
  aircon: ["Before · 곰팡이·먼지", "After · 분해 살균"],
  fabric: ["Before · 진드기·얼룩", "After · 살균 케어"],
  washer: ["Before · 세탁조 곰팡이", "After · 분해 세척"],
  hood: ["Before · 굳은 기름때", "After · 분해 세척"],
};

export default function FreshBeforeAfter({ variant = "aircon" }: { variant?: string }) {
  const beforeRef = useRef<HTMLCanvasElement>(null);
  const afterRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);
  const [hintOn, setHintOn] = useState(true);

  useEffect(() => {
    const draw = DRAW[variant] ?? drawAircon;
    const bc = beforeRef.current?.getContext("2d");
    const ac = afterRef.current?.getContext("2d");
    if (bc) draw(bc, false);
    if (ac) draw(ac, true);
  }, [variant]);

  const clamp = (n: number) => Math.max(2, Math.min(98, n));
  const fromClientX = (clientX: number) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  };
  const onDown = (e: RPointerEvent) => {
    setDragging(true); setHintOn(false);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    fromClientX(e.clientX);
  };
  const onMove = (e: RPointerEvent) => { if (dragging) fromClientX(e.clientX); };
  const onUp = () => setDragging(false);
  const [tagB, tagA] = TAGS[variant] ?? TAGS.aircon;

  return (
    <div
      ref={boxRef}
      className="ba"
      style={{ "--pos": `${pos}%` } as CSSProperties}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
    >
      <canvas ref={beforeRef} className="before-c" width={W} height={H} />
      <canvas ref={afterRef} className="after-c" width={W} height={H} />
      <span className="tag before">{tagB}</span>
      <span className="tag after">{tagA}</span>
      <div className="divider" />
      <div
        className="knob"
        role="slider"
        aria-label="세척 전후 비교"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { setPos((p) => clamp(p - 4)); e.preventDefault(); }
          if (e.key === "ArrowRight") { setPos((p) => clamp(p + 4)); e.preventDefault(); }
        }}
      >
        <ArrowsIcon />
      </div>
      <div className="hint" style={{ opacity: hintOn ? 1 : 0 }}>
        ← 좌우로 드래그해 비교해 보세요 →
      </div>
    </div>
  );
}
