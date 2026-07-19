import type { Metadata } from "next";
import FreshDetail from "@/components/fresh/FreshDetail";

export const metadata: Metadata = {
  title: "세탁기·주방후드·상가/산업 현장 위생 | 분해 세척 — 청어람케어 (파주·고양)",
  description:
    "세탁기 분해세척, 주방후드·렌지 기름때 제거, 상가·사무실·산업 현장 위생관리. 보이지 않는 곳까지 분해·살균. 파주·고양(일산) 방문, 정기 관리 가능. 무료 견적 0507-1317-3113",
  keywords: [
    "세탁기청소", "세탁기분해세척", "주방후드청소", "렌지후드청소", "상가청소",
    "사무실청소", "입주청소", "산업현장위생", "일산청소업체", "청어람케어",
  ],
  alternates: { canonical: "/services/facility-care" },
  openGraph: {
    title: "세탁기·주방후드·상가/산업 현장 위생 — 보이지 않는 곳까지 | 청어람케어",
    description: "세탁조 곰팡이·주방 기름때·현장 위생까지 분해 세척. 파주·고양(일산) 방문, 정기 관리 가능. 무료 견적.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function FacilityCarePage() {
  return <FreshDetail slug="facility-care" />;
}
