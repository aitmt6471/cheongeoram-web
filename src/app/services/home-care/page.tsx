import type { Metadata } from "next";
import FreshDetail from "@/components/fresh/FreshDetail";

export const metadata: Metadata = {
  title: "에어컨·소파·매트리스·카펫 홈 케어 | 분해 살균 세척 — 청어람케어 (파주·고양)",
  description:
    "에어컨 분해세척, 소파·매트리스 패브릭 케어, 카펫·러그까지. 곰팡이·집먼지진드기를 분해·살균으로 속까지. 파주·고양(일산) 방문, 친환경 피톤치드 케어. 무료 견적 0507-1317-3113",
  keywords: [
    "에어컨청소", "에어컨분해세척", "매트리스청소", "소파청소", "카펫청소",
    "진드기제거", "일산청소업체", "파주청소", "출장세척", "청어람케어",
  ],
  alternates: { canonical: "/services/home-care" },
  openGraph: {
    title: "에어컨·소파·매트리스·카펫 홈 케어 — 속까지 깨끗하게 | 청어람케어",
    description: "곰팡이·진드기까지 분해·살균 전문 케어. 파주·고양(일산) 방문, 친환경 피톤치드. 사진으로 무료 견적.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function HomeCarePage() {
  return <FreshDetail slug="home-care" />;
}
