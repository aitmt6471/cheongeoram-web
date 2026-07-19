import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import { CheckIcon, StarIcon, ShieldIcon } from "./icons";

const promises = [
  { Icon: CheckIcon, title: "정직한 견적", desc: "작업 전 확정 견적. 진행 중 추가 비용을 임의로 청구하지 않습니다." },
  { Icon: StarIcon, title: "동네가 검증한 신뢰", desc: "당근 평점 4.8, 단골 431명. 후기로 증명된 꼼꼼한 시공." },
  { Icon: ShieldIcon, title: "친환경 살균 마감", desc: "인증 약제와 피톤치드로 마감. 아이·반려동물이 있어도 안심." },
];

export default function Why() {
  return (
    <section className="section" id="why" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="why">
          <div className="top">
            <span className="eyebrow" style={{ color: "var(--lime)" }}>Our Promise</span>
            <h2>청어람이 지키는 세 가지 약속</h2>
            <p>단순한 청소가 아니라, 가족의 건강을 다루는 일이라고 생각합니다.</p>
          </div>
          <StaggerGroup className="why-grid">
            {promises.map((p) => (
              <StaggerItem key={p.title} className="why-card">
                <h3><p.Icon />{p.title}</h3>
                <p>{p.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
