import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import {
  AirconIcon, SofaIcon, BedIcon, WasherIcon, HoodIcon, BuildingIcon, PhoneIcon,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

type Svc = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  tag: string;
  span: string; // 벤토 타일 크기 클래스
  href?: string; // 상세페이지 링크가 있으면 "자세히 보기"
};

const services: Svc[] = [
  { Icon: AirconIcon, title: "에어컨 분해세척", desc: "벽걸이·스탠드·시스템·천장형. 열교환기까지 완전 분해해 곰팡이와 냄새를 뿌리째 제거합니다.", tag: "자세히 보기 →", span: "feature", href: "/services/home-care" },
  { Icon: SofaIcon, title: "소파 · 패브릭", desc: "가죽·천 소파, 리클라이너. 건식 제거 후 스팀·항균 단계로 진드기와 얼룩을 케어합니다.", tag: "자세히 보기 →", span: "wide", href: "/services/home-care" },
  { Icon: BedIcon, title: "매트리스 · 침대", desc: "땀·각질·집먼지진드기를 흡입 세척과 살균으로. 수면 위생을 새로.", tag: "자세히 보기 →", span: "", href: "/services/home-care" },
  { Icon: WasherIcon, title: "세탁기 분해세척", desc: "통돌이·드럼 완전 분해로 세탁조 뒷면 곰팡이·세균까지 제거합니다.", tag: "자세히 보기 →", span: "", href: "/services/facility-care" },
  { Icon: HoodIcon, title: "주방후드 · 렌지", desc: "굳은 기름때 분해 세척으로 흡입력과 위생을 함께 회복.", tag: "자세히 보기 →", span: "", href: "/services/facility-care" },
  { Icon: BuildingIcon, title: "상가 · 산업 현장", desc: "입주 전후 청소부터 정기 위생관리까지. 규모별 맞춤 견적으로 진행합니다.", tag: "자세히 보기 →", span: "wide", href: "/services/facility-care" },
];

export default function Services() {
  return (
    <section className="section svc" id="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Services</span>
          <h2>집안 곳곳, 전문 장비로 완전 세척</h2>
          <p>품목마다 다른 오염, 다른 소재. 청어람케어는 항목별 전용 공정과 장비로 세척합니다.</p>
        </Reveal>

        <StaggerGroup className="svc-bento">
          {services.map((s) => (
            <StaggerItem key={s.title} className={`scard ${s.span}`.trim()}>
              <div className="ic"><s.Icon /></div>
              <h3>{s.title}</h3>
              <p className="desc">{s.desc}</p>
              {s.href ? (
                <a className="tag2" href={s.href}>{s.tag}</a>
              ) : (
                <span className="tag2">{s.tag}</span>
              )}
            </StaggerItem>
          ))}

          <StaggerItem className="scard cta-tile">
            <div className="ic"><PhoneIcon /></div>
            <h3>우리 집은 얼마?</h3>
            <p className="desc">사진 몇 장이면 대략 견적이 나옵니다. 부담 없이 문의하세요.</p>
            <a className="tag2" href="tel:050713173113">무료 견적 0507-1317-3113 →</a>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
