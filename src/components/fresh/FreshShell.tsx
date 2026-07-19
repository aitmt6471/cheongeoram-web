"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, ChatIcon } from "../icons";

const TEL = "tel:050713173113";
const CHAT = "https://www.daangn.com";

export function FreshNav({ label, links }: { label: string; links: { href: string; text: string }[] }) {
  return (
    <header className="fr-nav">
      <div className="fr-nav-in">
        <a className="fr-brand" href="/" aria-label="청어람케어 홈">
          <span className="mk">靑</span>
          <span>
            청어람케어
            <small>{label}</small>
          </span>
        </a>
        <nav className="fr-nav-links" aria-label="상세 메뉴">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.text}</a>
          ))}
        </nav>
        <a className="fr-btn fr-btn-primary" href="#contact">무료 견적 받기</a>
      </div>
    </header>
  );
}

export function FreshFooter() {
  return (
    <footer className="fr-foot">
      <div className="fr-foot-in">
        <div>
          <div className="fr-brand">
            <span className="mk">靑</span>
            <span>청어람케어</span>
          </div>
          <p className="note">
            에어컨·소파·매트리스부터 세탁기·주방·현장 위생까지. 새것보다 깨끗하게(靑出於藍),
            파주·고양(일산) 홈·시설 케어 서비스.
          </p>
        </div>
        <div className="fr-foot-cols">
          <div>
            <h4>홈 리빙 케어</h4>
            <a href="/services/home-care">에어컨 분해세척</a>
            <a href="/services/home-care">소파·매트리스</a>
            <a href="/services/home-care">카펫·러그</a>
          </div>
          <div>
            <h4>설비·현장</h4>
            <a href="/services/facility-care">세탁기 세척</a>
            <a href="/services/facility-care">주방후드·렌지</a>
            <a href="/services/facility-care">상가·산업 현장</a>
          </div>
          <div>
            <h4>고객센터</h4>
            <a href={TEL}>0507-1317-3113</a>
            <a href="/">파주 · 고양(일산) 출장</a>
            <a href={CHAT} target="_blank" rel="noopener noreferrer">당근 · 채팅 문의</a>
          </div>
        </div>
      </div>
      <div className="fr-foot-bottom">
        <span>© 2026 청어람케어(靑於藍 Care). All rights reserved.</span>
        <span>일산본점 · 경기 고양시 일산서구 중앙로 1449, 효원메이저 1002호</span>
      </div>
    </footer>
  );
}

export function FreshStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom = window.innerHeight + y > document.body.scrollHeight - 640;
      setShow(y > 620 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`fr-sticky${show ? " show" : ""}`} aria-hidden={!show}>
      <div className="fr-sticky-in">
        <div className="txt">
          <div className="l">사진 몇 장이면 견적 확인 · 파주·고양 출장</div>
          <div className="v">지금 <em>무료 견적</em> 받기</div>
        </div>
        <div className="acts">
          <a className="fr-btn fr-btn-white" href={CHAT} target="_blank" rel="noopener noreferrer" aria-label="채팅 상담">
            <ChatIcon /><span className="lbl">채팅상담</span>
          </a>
          <a className="fr-btn fr-btn-primary" href={TEL} aria-label="전화 문의">
            <PhoneIcon /><span className="lbl">전화문의</span>
          </a>
        </div>
      </div>
    </div>
  );
}
