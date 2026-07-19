import type { ComponentType, SVGProps } from "react";
import {
  AirconIcon, SofaIcon, BedIcon, RugIcon, WasherIcon, HoodIcon, BuildingIcon, FactoryIcon,
  SearchIcon, BrushIcon, DropletIcon, SprayIcon, SteamIcon, ShieldIcon, LeafIcon,
  CalendarIcon, StarIcon,
} from "../icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Svc = { Icon: Icon; name: string; sub: string; desc: string; points: string[] };
export type Step = { Icon: Icon; title: string; body: string };
export type Tier = { Icon: Icon; title: string; sub: string; items: string[]; pop?: boolean };
export type Faq = { q: string; a: string };

export type GroupData = {
  slug: string;
  navLabel: string;
  badges: { text: string; aqua?: boolean }[];
  hero: { eyebrow: string; pre: string; hlBefore: string; hl: string; aq: string; lead: string };
  baVariant: "aircon" | "fabric" | "washer" | "hood";
  chipStat: { v: string; l: string };
  services: Svc[];
  problemsTitle: string;
  problemsSub: string;
  process: Step[];
  tiers: Tier[];
  faqs: Faq[];
  finalTitle: [string, string];
  finalLead: string;
};

/* 공통 보장(약속) — 두 페이지 공용 */
export const GUARANTEES: Step[] = [
  { Icon: ShieldIcon, title: "전문 장비 · 완전분해", body: "표면만 닦지 않습니다. 분해가 필요한 품목은 끝까지 분해해 속부터 세척합니다." },
  { Icon: LeafIcon, title: "친환경 살균 · 피톤치드", body: "아이·반려동물이 있어도 안심할 수 있는 친환경 세제와 항균 마감으로 케어합니다." },
  { Icon: StarIcon, title: "정직한 방문 견적", body: "사진으로 먼저 확인하고 방문 시 최종 견적을 안내합니다. 없는 비용을 붙이지 않습니다." },
];

/* ── 그룹 A: 홈 리빙 케어 ── */
export const HOME_CARE: GroupData = {
  slug: "home-care",
  navLabel: "홈 리빙 케어",
  badges: [
    { text: "전문 장비 완전분해", aqua: true },
    { text: "친환경 살균" },
    { text: "정직한 방문견적", aqua: true },
    { text: "당근 평점 4.8" },
  ],
  hero: {
    eyebrow: "Home Living Care",
    pre: "우리 집 공기와 잠자리,",
    hlBefore: "",
    hl: "속까지",
    aq: "깨끗하게",
    lead: "에어컨·소파·매트리스·카펫 속 곰팡이와 집먼지진드기까지. 분해·살균 전문 케어로 새것 같은 우리 집을 되찾아 드립니다.",
  },
  baVariant: "aircon",
  chipStat: { v: "4.8 / 5.0", l: "당근 이웃 평점" },
  services: [
    { Icon: AirconIcon, name: "에어컨 분해세척", sub: "벽걸이·스탠드·시스템·천장형", desc: "열교환기까지 완전 분해해 냉방 안쪽에 낀 곰팡이·세균·냄새를 뿌리째 제거합니다.", points: ["완전분해", "곰팡이 제거", "항균 마감"] },
    { Icon: SofaIcon, name: "소파 패브릭 케어", sub: "가죽 · 천 · 리클라이너", desc: "건식 흡입 후 습식·스팀 살균으로 속에 밴 얼룩·땀·진드기를 케어합니다.", points: ["건식→습식", "스팀 살균", "탈취"] },
    { Icon: BedIcon, name: "매트리스 · 침대", sub: "싱글 · 슈퍼싱글 · 퀸 · 킹", desc: "매일 자는 매트리스 속 집먼지진드기와 각질·땀을 흡입 세척과 고온 스팀으로 잡습니다.", points: ["진드기 살균", "사이즈별", "수면 위생"] },
    { Icon: RugIcon, name: "카펫 · 러그", sub: "거실 러그 · 대형 카펫", desc: "깊이 박힌 먼지·모래를 딥 흡입하고, 섬유 손상 없는 습식 세척으로 얼룩·냄새를 제거합니다.", points: ["딥 흡입", "습식 세척", "완전 건조"] },
  ],
  problemsTitle: "겉은 멀쩡해 보여도, 속은 다릅니다",
  problemsSub: "매일 쓰는 가전과 가구일수록, 눈에 보이지 않는 곳에 오염이 쌓입니다.",
  process: [
    { Icon: SearchIcon, title: "방문 진단", body: "상태를 점검하고 오염 정도와 필요한 공정을 안내합니다." },
    { Icon: BrushIcon, title: "분해 · 건식", body: "필요한 품목은 완전 분해 후 먼지·이물질을 먼저 흡입 제거합니다." },
    { Icon: DropletIcon, title: "세척 · 스팀 살균", body: "전용 세제와 고온 스팀으로 속에 밴 오염과 진드기·세균을 잡습니다." },
    { Icon: SprayIcon, title: "항균 · 마감", body: "친환경 항균·피톤치드 처리 후 건조·조립까지 마무리합니다." },
  ],
  tiers: [
    { Icon: AirconIcon, title: "에어컨 세척", sub: "벽걸이 · 스탠드 · 시스템", items: ["완전 분해 세척", "열교환기·송풍팬 케어", "곰팡이·냄새 제거", "항균 마감"] },
    { Icon: BedIcon, title: "소파 · 매트리스", sub: "패브릭 · 가죽 · 사이즈별", items: ["건식 흡입 + 습식 딥클린", "고온 스팀 진드기 살균", "얼룩·변색 케어", "피톤치드 마감"], pop: true },
    { Icon: RugIcon, title: "카펫 · 러그", sub: "거실 러그 · 대형 카펫", items: ["먼지·모래 딥 흡입", "습식 세척", "얼룩·냄새 제거", "완전 건조"] },
  ],
  faqs: [
    { q: "여러 품목을 한 번에 맡길 수 있나요?", a: "네, 에어컨·소파·매트리스·카펫을 함께 예약하시면 한 번의 방문으로 진행합니다. 품목이 많을수록 방문 일정을 효율적으로 잡아 드립니다." },
    { q: "작업은 얼마나 걸리나요?", a: "품목과 오염 상태에 따라 다르지만 1점 기준 대략 1시간 내외입니다. 여러 품목은 방문 전 예상 소요 시간을 함께 안내해 드립니다." },
    { q: "세척 후 바로 사용할 수 있나요?", a: "습식·스팀 케어 후에는 송풍 건조를 진행합니다. 계절·통풍에 따라 건조 시간이 달라지며, 당일 사용을 원하시면 미리 말씀해 주세요." },
    { q: "아이·반려동물이 있어도 안전한가요?", a: "친환경 세제와 피톤치드 마감을 사용하고 잔여 세제를 스팀·흡입으로 회수합니다. 민감한 가족이 있다면 미리 알려주세요." },
    { q: "출장 지역은 어디까지 되나요?", a: "파주(운정·야당)와 고양(일산) 전 지역으로 방문합니다. 인접 지역은 전화로 문의해 주시면 안내해 드립니다." },
  ],
  finalTitle: ["오늘 예약하고", "새것 같은 우리 집을"],
  finalLead: "사진 몇 장이면 견적 확인 완료. 전화·채팅 어느 쪽이든 편하게 문의 주세요. 파주·고양(일산) 전 지역 방문합니다.",
};

/* ── 그룹 B: 설비 · 현장 위생 ── */
export const FACILITY_CARE: GroupData = {
  slug: "facility-care",
  navLabel: "설비·현장 위생",
  badges: [
    { text: "완전분해 세척", aqua: true },
    { text: "기름때·세균 제거" },
    { text: "규모별 맞춤견적", aqua: true },
    { text: "정기 관리 가능" },
  ],
  hero: {
    eyebrow: "Facility & Site Hygiene",
    pre: "세탁기부터 주방·현장까지,",
    hlBefore: "",
    hl: "보이지 않는 곳",
    aq: "위생 관리",
    lead: "세탁기 속 곰팡이, 굳은 주방 기름때, 상가·현장의 위생까지. 분해 세척과 정기 관리로 위생을 책임집니다.",
  },
  baVariant: "washer",
  chipStat: { v: "431+", l: "관리 이웃" },
  services: [
    { Icon: WasherIcon, name: "세탁기 분해세척", sub: "통돌이 · 드럼", desc: "통을 완전 분해해 눈에 보이지 않는 세탁조 뒷면의 곰팡이·세제 찌꺼기·세균을 제거합니다.", points: ["완전분해", "곰팡이 제거", "세균 살균"] },
    { Icon: HoodIcon, name: "주방후드 · 렌지", sub: "후드 · 가스·인덕션", desc: "굳은 기름때를 분해 세척해 흡입력과 위생을 함께 회복합니다.", points: ["기름때 분해", "흡입력 회복", "위생 마감"] },
    { Icon: BuildingIcon, name: "상가 · 사무실", sub: "입주 전후 · 정기 관리", desc: "입주 전후 청소부터 정기 위생 관리까지. 공간 규모에 맞춘 맞춤 케어로 진행합니다.", points: ["입주 청소", "정기 관리", "맞춤 견적"] },
    { Icon: FactoryIcon, name: "산업 · 현장 위생", sub: "현장 · 설비 규모별", desc: "현장·설비 규모에 맞춘 위생 관리. 점검 후 필요한 범위를 맞춤 견적으로 안내합니다.", points: ["현장 점검", "규모별", "맞춤 견적"] },
  ],
  problemsTitle: "안 보이는 곳일수록, 위생이 중요합니다",
  problemsSub: "세탁조 뒷면·후드 안쪽·현장 구석은 육안으로 확인되지 않아 오염이 방치되기 쉽습니다.",
  process: [
    { Icon: SearchIcon, title: "현장 점검", body: "설비·공간 상태를 점검하고 필요한 범위와 견적을 안내합니다." },
    { Icon: BrushIcon, title: "분해 · 제거", body: "세탁조·후드 등은 완전 분해하고 굳은 오염을 먼저 걷어냅니다." },
    { Icon: SteamIcon, title: "세척 · 살균", body: "전용 세제·고온 세척으로 기름때·곰팡이·세균을 제거합니다." },
    { Icon: CalendarIcon, title: "마감 · 정기 관리", body: "위생 마감 후, 원하시면 정기 관리 일정으로 이어서 관리합니다." },
  ],
  tiers: [
    { Icon: WasherIcon, title: "세탁기 세척", sub: "통돌이 · 드럼", items: ["세탁조 완전 분해", "곰팡이·찌꺼기 제거", "세균 살균", "조립·작동 확인"] },
    { Icon: HoodIcon, title: "주방후드 · 렌지", sub: "후드 · 가스·인덕션", items: ["굳은 기름때 분해", "필터·팬 세척", "흡입력 회복", "위생 마감"], pop: true },
    { Icon: BuildingIcon, title: "상가 · 현장", sub: "입주 전후 · 정기 · 산업", items: ["현장 점검", "규모별 위생 관리", "입주 전후 청소", "정기 관리 옵션"] },
  ],
  faqs: [
    { q: "세탁기는 왜 분해까지 해야 하나요?", a: "세탁조 뒷면은 세탁만으로는 닿지 않아 곰팡이와 세제 찌꺼기가 쌓입니다. 통을 완전 분해해야 눈에 보이지 않는 오염까지 제거할 수 있습니다." },
    { q: "상가·사무실 정기 관리도 되나요?", a: "네, 입주 전후 청소부터 주기적인 위생 관리까지 가능합니다. 공간 규모와 원하는 주기에 맞춰 맞춤 견적을 안내해 드립니다." },
    { q: "산업·현장은 어떤 기준으로 견적을 내나요?", a: "현장 점검 후 설비·공간 규모와 필요한 위생 범위를 확인해 맞춤 견적을 드립니다. 사진·현장 정보를 먼저 주시면 대략적인 안내가 가능합니다." },
    { q: "영업 시간에 방해되지 않게 가능한가요?", a: "상가·사무실은 영업 전후 시간대 방문을 조율할 수 있습니다. 예약 시 편한 시간대를 말씀해 주세요." },
    { q: "출장 지역은 어디까지 되나요?", a: "파주(운정·야당)와 고양(일산) 전 지역으로 방문합니다. 인접 지역·현장은 전화로 문의해 주시면 안내해 드립니다." },
  ],
  finalTitle: ["현장 점검부터", "정기 위생 관리까지"],
  finalLead: "설비·공간 사진이나 현장 정보를 보내주시면 맞춤 견적을 안내합니다. 전화·채팅으로 편하게 문의 주세요.",
};

export const GROUPS: Record<string, GroupData> = {
  "home-care": HOME_CARE,
  "facility-care": FACILITY_CARE,
};
