import BeforeAfter from "./BeforeAfter";
import { StaggerGroup, StaggerItem, TapLink } from "./motion";
import { Counter, Marquee } from "./Kinetic";
import { PhoneIcon } from "./icons";

const marqueeItems = [
  "에어컨 분해세척", "소파·패브릭", "매트리스 살균", "카펫·러그",
  "세탁기 청소", "주방후드", "상가·사무실", "친환경 피톤치드",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <StaggerGroup className="bento">
          <StaggerItem className="tile tile-head" hover={false}>
            <div>
              <span className="pill aqua">파주 · 고양(일산) 홈케어</span>
              <h1 style={{ marginTop: 22 }}>
                보이지 않는 곳까지,
                <br />
                <span className="hl">새것보다</span> <span className="blue">깨끗하게.</span>
              </h1>
              <p className="lead">
                에어컨 속 곰팡이, 소파에 밴 진드기까지. 완전 분해 세척과 친환경 살균으로
                우리 집 공기를 되돌려 드립니다.
              </p>
            </div>
            <div>
              <div className="cta">
                <TapLink className="btn btn-primary" href="tel:050713173113">
                  전화 상담 0507-1317-3113
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </TapLink>
                <TapLink className="btn btn-ghost" href="#services">서비스 보기</TapLink>
              </div>
              <p className="hanja">
                <span className="ch">靑出於藍</span>
                <span>청출어람 — <b>쪽빛보다 더 푸르게.</b></span>
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="tile tile-ba" hover={false}>
            <BeforeAfter />
          </StaggerItem>

          <StaggerItem className="tile tile-stat">
            <span className="k">당근 동네평점</span>
            <span className="v num"><Counter to={4.8} decimals={1} /></span>
          </StaggerItem>

          <StaggerItem className="tile tile-stat dark">
            <span className="k">단골 고객</span>
            <span className="v num"><Counter to={431} suffix="+" /></span>
          </StaggerItem>

          <StaggerItem className="tile tile-stat blue">
            <span className="k">친환경 살균</span>
            <span className="v num"><Counter to={100} suffix="%" /></span>
          </StaggerItem>

          <StaggerItem className="tile tile-cta">
            <span className="k">지금 바로</span>
            <div>
              <div className="p">무료 견적</div>
              <a href="tel:050713173113">
                <PhoneIcon width={16} height={16} /> 0507-1317-3113
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <Marquee items={marqueeItems} />
    </section>
  );
}
