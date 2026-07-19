import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "청어람케어 — 새것보다 깨끗하게 | 에어컨·소파·매트리스 전문세척",
  description:
    "파주·고양(일산) 청어람케어. 에어컨 분해세척, 소파·매트리스·카펫 패브릭 케어, 세탁기·주방후드·상가 위생관리. 친환경 살균으로 새것보다 깨끗하게. 문의 0507-1317-3113",
  keywords: ["청어람케어", "에어컨청소", "소파청소", "매트리스청소", "일산청소업체", "파주청소", "출장세척"],
  openGraph: {
    title: "청어람케어 — 새것보다 깨끗하게",
    description: "에어컨·소파·매트리스 전문 세척과 친환경 살균. 파주·고양(일산) 홈케어 서비스.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1526",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
