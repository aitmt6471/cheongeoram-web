import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const AirconIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="2" y="4" width="20" height="9" rx="2" /><path d="M6 17v1M10 17v2M14 17v2M18 17v1" /></svg>
);
export const SofaIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 11v5a1 1 0 001 1h16a1 1 0 001-1v-5M4 11V8a2 2 0 012-2h12a2 2 0 012 2v3M5 17v2M19 17v2" /></svg>
);
export const BedIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="7" width="18" height="11" rx="2" /><path d="M3 12h18M7 18v2M17 18v2" /></svg>
);
export const WasherIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="4" y="2" width="16" height="20" rx="2" /><circle cx="12" cy="13" r="5" /><path d="M8 6h.01M11 6h.01" /></svg>
);
export const HoodIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 20V8l8-4 8 4v12M4 20h16M9 20v-5h6v5" /></svg>
);
export const BuildingIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" /></svg>
);
export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={2}><path d="M20 6L9 17l-5-5" /></svg>
);
export const StarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={2}><path d="M12 2l3 6 6 .9-4.5 4.3L18 20l-6-3-6 3 1.5-6.8L3 8.9 9 8z" /></svg>
);
export const ShieldIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={2}><path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" /><path d="M9 12l2 2 4-4" /></svg>
);
export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" /></svg>
);
export const ChatIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7-.2.7-.7 2.6-.8 3-.1.5.2.5.4.4.2-.1 2.6-1.8 3.7-2.5.7.1 1.4.2 2 .2 5.5 0 10-3.6 10-8S17.5 3 12 3z" /></svg>
);
export const PinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const ArrowsIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={2.2}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg>
);
export const ChevronDownIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={2.2}><path d="M6 9l6 6 6-6" /></svg>
);
export const ArrowRightIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const DropletIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3s6 6.4 6 10.5A6 6 0 016 13.5C6 9.4 12 3 12 3z" /></svg>
);
export const SteamIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M8 20c-1.5-1.5-1.5-3 0-4.5S9.5 12 8 10.5M12 20c-1.5-1.5-1.5-3 0-4.5S13.5 12 12 10.5M16 20c-1.5-1.5-1.5-3 0-4.5S17.5 12 16 10.5M5 8a4 4 0 014-4h6a4 4 0 010 8" /></svg>
);
export const SprayIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M9 8V4h4M9 4h-.5M14 6l2-1M14 9l2.5.4M14 12l2 1M9 8h3a3 3 0 013 3v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a3 3 0 013-3z" /></svg>
);
export const LeafIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M11 20A7 7 0 014 13c0-5 5-9 16-9 0 11-4 16-9 16zM4 20c4-8 8-10 13-11" /></svg>
);
export const AlertIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={2}><path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.4 3.9a2 2 0 00-3.4 0z" /></svg>
);
export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const BrushIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M9.5 14.5L4 20M14 4l6 6-7 3-2-2 3-7zM6 16a3 3 0 00-3 3 5 5 0 004-2z" /></svg>
);
export const SparkleIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" /></svg>
);
export const RugIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M3 15h18M8 5v14M16 5v14" /></svg>
);
export const FactoryIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 21V10l6 4V10l6 4V6l6 3v12H3zM7 21v-4M12 21v-4M17 21v-4" /></svg>
);
export const CalendarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01" /></svg>
);
export const SearchIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
);
