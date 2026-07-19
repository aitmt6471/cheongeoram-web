/*
 * 공정 단계별 일러스트 썸네일 (온브랜드 SVG).
 * 실제 현장 사진이 준비되면 이 자리를 <img src="/process/01.jpg" .../> 로 교체하면 됩니다.
 * 색상은 디자인 토큰(var(--aqua) 등)을 써서 라이트/다크에 자동 대응.
 */
type Kind = "diagnose" | "disassemble" | "sanitize" | "assemble";

const box = {
  viewBox: "0 0 320 190",
  fill: "none",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

const S = {
  surface: "var(--surface)",
  ink: "var(--ink-soft)",
  aqua: "var(--aqua)",
  aquaDeep: "var(--aqua-deep)",
  lime: "var(--lime-deep)",
  wash: "var(--aqua-wash)",
};

function Diagnose() {
  return (
    <svg {...box} role="img" aria-label="진단·견적 일러스트">
      {/* clipboard */}
      <rect x="78" y="36" width="120" height="120" rx="12" fill={S.surface} stroke={S.ink} strokeWidth="3" />
      <rect x="118" y="28" width="40" height="18" rx="7" fill={S.aqua} />
      <path d="M96 70h60M96 88h72M96 106h48" stroke={S.ink} strokeWidth="4" strokeLinecap="round" />
      <path d="M96 70l6 6 10-12" stroke={S.lime} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* magnifier */}
      <circle cx="196" cy="120" r="30" fill={S.wash} stroke={S.aquaDeep} strokeWidth="5" />
      <path d="M218 142l20 20" stroke={S.aquaDeep} strokeWidth="7" strokeLinecap="round" />
      <path d="M186 120a10 10 0 0110-10" stroke={S.aqua} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function Disassemble() {
  return (
    <svg {...box} role="img" aria-label="완전 분해세척 일러스트">
      {/* main body */}
      <rect x="60" y="52" width="120" height="90" rx="12" fill={S.surface} stroke={S.ink} strokeWidth="3" />
      <path d="M74 74h92M74 92h92M74 110h92" stroke={S.ink} strokeWidth="4" strokeLinecap="round" />
      {/* detached panel */}
      <rect x="196" y="40" width="60" height="52" rx="10" fill={S.wash} stroke={S.aquaDeep} strokeWidth="3" />
      <path d="M208 78l40-40" stroke={S.aqua} strokeWidth="3" strokeDasharray="4 5" strokeLinecap="round" />
      {/* wrench */}
      <path d="M214 118a16 16 0 01-22 20l-22 22-12-12 22-22a16 16 0 0120-22l-10 10 6 6 6 6 12-8z"
        fill={S.aqua} stroke={S.aquaDeep} strokeWidth="2.5" strokeLinejoin="round" />
      {/* droplets */}
      <path d="M240 118c4 5 4 8 0 11a4 4 0 01-6-4c0-3 3-5 6-7z" fill={S.aquaDeep} />
    </svg>
  );
}

function Sanitize() {
  return (
    <svg {...box} role="img" aria-label="친환경 살균 일러스트">
      {/* spray bottle */}
      <path d="M118 78h34v70a10 10 0 01-10 10h-14a10 10 0 01-10-10z" fill={S.surface} stroke={S.ink} strokeWidth="3" />
      <rect x="122" y="90" width="26" height="26" rx="5" fill={S.wash} />
      <path d="M126 60h20v18h-20z" fill={S.surface} stroke={S.ink} strokeWidth="3" />
      <path d="M146 66h20l-8 8h-12z" fill={S.aqua} stroke={S.aquaDeep} strokeWidth="2.5" strokeLinejoin="round" />
      {/* spray + sparkles */}
      <g fill={S.aqua}>
        <circle cx="196" cy="64" r="5" />
        <circle cx="220" cy="80" r="4" />
        <circle cx="210" cy="52" r="3.5" />
      </g>
      <path d="M236 70l2.5 6.5L245 79l-6.5 2.5L236 88l-2.5-6.5L227 79l6.5-2.5z" fill={S.lime} />
      {/* leaf */}
      <path d="M244 128c-18 2-30-6-30-24 20 0 30 8 30 24z" fill={S.aqua} stroke={S.aquaDeep} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M244 104c-10 3-16 8-20 16" stroke={S.surface} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Assemble() {
  return (
    <svg {...box} role="img" aria-label="조립·점검 일러스트">
      {/* assembled unit */}
      <rect x="66" y="54" width="118" height="86" rx="12" fill={S.surface} stroke={S.ink} strokeWidth="3" />
      <rect x="80" y="70" width="90" height="18" rx="6" fill={S.wash} />
      <path d="M80 106h56M80 122h40" stroke={S.ink} strokeWidth="4" strokeLinecap="round" />
      {/* check badge */}
      <circle cx="204" cy="118" r="34" fill={S.aqua} stroke={S.surface} strokeWidth="5" />
      <path d="M188 118l11 11 21-24" stroke={S.surface} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M204 74l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill={S.lime} />
    </svg>
  );
}

const MAP: Record<Kind, () => React.JSX.Element> = {
  diagnose: Diagnose,
  disassemble: Disassemble,
  sanitize: Sanitize,
  assemble: Assemble,
};

export default function ProcessArt({ kind }: { kind: Kind }) {
  const Art = MAP[kind];
  return <div className="shot"><Art /></div>;
}
