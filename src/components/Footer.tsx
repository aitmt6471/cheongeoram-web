export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-in">
          <div>
            <div className="brand">
              <span className="mark"><span>靑</span></span>
              <span>청어람케어</span>
            </div>
            <p className="note">
              에어컨·소파·매트리스 전문 세척과 살균. 새것보다 깨끗한 우리 집을 위한
              파주·고양(일산) 홈케어 서비스.
            </p>
          </div>
          <div className="foot-cols">
            <div>
              <h4>서비스</h4>
              <a href="#services">에어컨 세척</a>
              <a href="#services">소파·패브릭</a>
              <a href="#services">매트리스</a>
              <a href="#services">상가·사무실</a>
            </div>
            <div>
              <h4>안내</h4>
              <a href="#process">세척 공정</a>
              <a href="#why">청어람 약속</a>
              <a href="#contact">예약·문의</a>
            </div>
            <div>
              <h4>고객센터</h4>
              <a href="tel:050713173113">0507-1317-3113</a>
              <a href="#contact">파주 · 고양(일산) 출장</a>
              <a href="#contact">평일·주말 상담 가능</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 청어람케어(靑於藍 Care). All rights reserved.</span>
          <span>일산본점 · 경기 고양시 일산서구 중앙로 1449, 효원메이저 1002호</span>
        </div>
      </div>
    </footer>
  );
}
