import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import ProcessArt from "./ProcessArt";

const steps = [
  { num: "01", title: "진단 · 견적", desc: "오염도와 소재를 현장에서 확인하고 투명한 비용을 먼저 안내합니다.", art: "diagnose" as const },
  { num: "02", title: "완전 분해세척", desc: "부품을 분해해 손이 닿지 않던 내부까지 전문 장비로 세척합니다.", art: "disassemble" as const },
  { num: "03", title: "친환경 살균", desc: "인증 약제와 스팀으로 곰팡이·세균·진드기를 제거하고 피톤치드로 마감합니다.", art: "sanitize" as const },
  { num: "04", title: "조립 · 점검", desc: "재조립 후 작동을 확인하고, 세척 전후를 함께 확인해 드립니다.", art: "assemble" as const },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Process</span>
          <h2>모든 세척은 네 단계를 거칩니다</h2>
          <p>눈에 보이는 결과만큼 과정도 투명하게. 방문부터 마무리 점검까지 표준 공정으로 진행합니다.</p>
        </Reveal>
        <StaggerGroup className="proc-grid">
          {steps.map((s) => (
            <StaggerItem key={s.num} className="step">
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ProcessArt kind={s.art} />
              <div className="bar" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
