"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as RPointerEvent } from "react";
import { ArrowsIcon } from "./icons";

const W = 800;
const H = 670;

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// 에어컨 루버 표면을 캔버스로 렌더 — clean=세척후 / dirty=세척전
function drawPanel(ctx: CanvasRenderingContext2D, clean: boolean) {
  const rnd = (a: number, b: number) => a + Math.random() * (b - a);

  const g = ctx.createLinearGradient(0, 0, 0, H);
  if (clean) { g.addColorStop(0, "#eaf7f8"); g.addColorStop(1, "#cfe8ea"); }
  else { g.addColorStop(0, "#c9c3b2"); g.addColorStop(1, "#a99f86"); }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = clean ? "#f7fdfd" : "#e7e1d2";
  roundRect(ctx, 34, 34, W - 68, H - 68, 26);
  ctx.fill();

  const top = 88, slatH = 30, gap = 14, x = 70, w = W - 140;
  for (let i = 0; i < 12; i++) {
    const y = top + i * (slatH + gap);
    const sg = ctx.createLinearGradient(0, y, 0, y + slatH);
    if (clean) { sg.addColorStop(0, "#ffffff"); sg.addColorStop(1, "#dff1f2"); }
    else { sg.addColorStop(0, "#d8d1bd"); sg.addColorStop(1, "#b3a98d"); }
    ctx.fillStyle = sg;
    roundRect(ctx, x, y, w, slatH, 8);
    ctx.fill();
    ctx.strokeStyle = clean ? "rgba(0,120,130,.10)" : "rgba(60,50,30,.28)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 6, y + slatH - 3);
    ctx.lineTo(x + w - 6, y + slatH - 3);
    ctx.stroke();
  }

  if (!clean) {
    for (let s = 0; s < 160; s++) {
      const gx = rnd(60, W - 60), gy = rnd(80, H - 70), r = rnd(2, 9);
      ctx.beginPath();
      ctx.arc(gx, gy, r, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.55 ? `rgba(40,55,30,${rnd(0.12, 0.4)})` : `rgba(90,70,40,${rnd(0.08, 0.3)})`;
      ctx.fill();
    }
    for (let m = 0; m < 26; m++) {
      ctx.beginPath();
      ctx.arc(rnd(70, W - 70), rnd(90, H - 90), rnd(6, 16), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(28,38,22,${rnd(0.15, 0.32)})`;
      ctx.fill();
    }
    ctx.fillStyle = "rgba(150,125,70,.16)";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(70,55,35,.18)";
    ctx.lineWidth = 2;
    for (let d = 0; d < 14; d++) {
      const dx = rnd(80, W - 80);
      ctx.beginPath();
      ctx.moveTo(dx, 90);
      ctx.lineTo(dx + rnd(-10, 10), H - 90);
      ctx.stroke();
    }
  } else {
    for (let p = 0; p < 26; p++) {
      const px = rnd(70, W - 70), py = rnd(90, H - 90), ps = rnd(3, 7);
      ctx.save();
      ctx.translate(px, py);
      ctx.globalAlpha = rnd(0.4, 0.9);
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      for (let k = 0; k < 4; k++) {
        ctx.lineTo(0, -ps);
        ctx.lineTo(ps * 0.28, -ps * 0.28);
        ctx.rotate(Math.PI / 2);
      }
      ctx.fill();
      ctx.restore();
    }
    const sh = ctx.createLinearGradient(0, 0, W, H);
    sh.addColorStop(0, "rgba(255,255,255,.25)");
    sh.addColorStop(0.5, "rgba(255,255,255,0)");
    ctx.fillStyle = sh;
    ctx.fillRect(0, 0, W, H);
  }
}

export default function BeforeAfter() {
  const beforeRef = useRef<HTMLCanvasElement>(null);
  const afterRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(55);
  const [dragging, setDragging] = useState(false);
  const [hintOn, setHintOn] = useState(true);

  useEffect(() => {
    const bc = beforeRef.current?.getContext("2d");
    const ac = afterRef.current?.getContext("2d");
    if (bc) drawPanel(bc, false);
    if (ac) drawPanel(ac, true);
  }, []);

  const clamp = (n: number) => Math.max(2, Math.min(98, n));
  const fromClientX = (clientX: number) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const onDown = (e: RPointerEvent) => {
    setDragging(true);
    setHintOn(false);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    fromClientX(e.clientX);
  };
  const onMove = (e: RPointerEvent) => { if (dragging) fromClientX(e.clientX); };
  const onUp = () => setDragging(false);

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
      <span className="tag before">Before · 세척 전</span>
      <span className="tag after">After · 세척 후</span>
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
