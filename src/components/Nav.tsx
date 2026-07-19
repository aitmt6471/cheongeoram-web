export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label="청어람케어 홈">
          <span className="mark"><span>靑</span></span>
          <span>
            청어람케어
            <small>에어컨 · 소파 · 매트리스 전문세척</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="주요 메뉴">
          <a href="#services">서비스</a>
          <a href="#process">세척공정</a>
          <a href="#why">청어람 약속</a>
          <a href="#contact">예약·문의</a>
        </nav>
        <a className="btn btn-primary" href="#contact">무료 견적 받기</a>
      </div>
    </header>
  );
}
