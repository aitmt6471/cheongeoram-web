import { Reveal } from "./motion";
import { PhoneIcon, ChatIcon, PinIcon } from "./icons";

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="cta-box">
          <div className="in">
            <span className="eyebrow" style={{ color: "var(--lime)" }}>Reservation</span>
            <h2 style={{ marginTop: 16 }}>
              지금 무료 견적을
              <br />
              받아보세요
            </h2>
            <p>
              사진 몇 장이면 대략적인 견적 확인이 가능합니다. 전화·카카오 어느 쪽이든
              편하게 문의 주세요. 파주·고양(일산) 전 지역 출장 가능.
            </p>
          </div>
          <div className="cta-actions">
            <a className="contact-line" href="tel:050713173113">
              <span className="ic"><PhoneIcon /></span>
              <span>
                <span className="l">전화 상담</span>
                <br />
                <span className="v num">0507-1317-3113</span>
              </span>
            </a>
            <a className="contact-line" href="https://www.daangn.com" target="_blank" rel="noopener noreferrer">
              <span className="ic"><ChatIcon /></span>
              <span>
                <span className="l">당근 · 카카오 채널 문의</span>
                <br />
                <span className="v">청어람케어</span>
              </span>
            </a>
            <div className="contact-line">
              <span className="ic"><PinIcon /></span>
              <span>
                <span className="l">일산본점</span>
                <br />
                <span className="v" style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                  고양시 일산서구 중앙로 1449, 효원메이저 1002호
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
