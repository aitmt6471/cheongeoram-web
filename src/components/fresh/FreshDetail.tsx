"use client";

import { Reveal, StaggerGroup, StaggerItem } from "../motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/Accordion";
import FreshBeforeAfter from "./FreshBeforeAfter";
import { FreshNav, FreshFooter, FreshStickyCTA } from "./FreshShell";
import { GUARANTEES, GROUPS } from "./freshData";
import {
  CheckIcon, StarIcon, SparkleIcon, ShieldIcon, PhoneIcon, ChatIcon, PinIcon,
  ChevronDownIcon, ArrowRightIcon,
} from "../icons";

const TEL = "tel:050713173113";
const CHAT = "https://www.daangn.com";

export default function FreshDetail({ slug }: { slug: string }) {
  const data = GROUPS[slug];
  const navLinks = [
    { href: "#services", text: "서비스" },
    { href: "#process", text: "케어 공정" },
    { href: "#price", text: "견적 안내" },
    { href: "#faq", text: "자주 묻는 질문" },
  ];

  return (
    <div className="fresh">
      <div className="fr-detail" id="top">
        <FreshNav label={data.navLabel} links={navLinks} />

        <main>
          {/* ── HERO ── */}
          <section className="fr-hero">
            <div className="fr-wrap">
              <div className="fr-hero-grid">
                <Reveal>
                  <span className="fr-eyebrow">{data.hero.eyebrow}</span>
                  <h1>
                    {data.hero.pre}
                    <br />
                    <span className="hl">{data.hero.hl}</span> <span className="aq">{data.hero.aq}</span>
                  </h1>
                  <p className="lead">{data.hero.lead}</p>
                  <div className="fr-badges">
                    {data.badges.map((b) => (
                      <span key={b.text} className={`fr-badge${b.aqua ? " aqua" : ""}`}>
                        <CheckIcon /> {b.text}
                      </span>
                    ))}
                  </div>
                  <div className="acts">
                    <a className="fr-btn fr-btn-primary" href="#contact">
                      무료 견적 받기 <ArrowRightIcon />
                    </a>
                    <a className="fr-btn fr-btn-ghost" href="#process">케어 공정 보기</a>
                  </div>
                </Reveal>

                <Reveal className="fr-hero-visual">
                  <div className="fr-hero-card">
                    <div className="ba">
                      <FreshBeforeAfter variant={data.baVariant} />
                    </div>
                  </div>
                  <div className="fr-hero-chip">
                    <span className="st"><SparkleIcon /></span>
                    <span>
                      <span className="v fr-num">{data.chipStat.v}</span>
                      <span className="l">{data.chipStat.l}</span>
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* 묶음 서비스 칩 */}
              <StaggerGroup className="fr-svc-strip">
                {data.services.map((s) => (
                  <StaggerItem key={s.name} className="fr-chip" hover={false}>
                    <span className="ic"><s.Icon /></span>
                    <span>
                      <b>{s.name}</b>
                      <span>{s.sub}</span>
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>

          {/* ── 신뢰 스트립 ── */}
          <section className="fr-sec" style={{ paddingTop: 56, paddingBottom: 0 }}>
            <div className="fr-wrap">
              <Reveal className="fr-trust">
                <div className="ti">
                  <span className="stars" aria-hidden>
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </span>
                  <div><div className="v fr-num">4.8</div><div className="l">당근 이웃 평점</div></div>
                </div>
                <span className="sep" />
                <div className="ti"><div><div className="v fr-num">23</div><div className="l">받은 후기</div></div></div>
                <span className="sep" />
                <div className="ti"><div><div className="v fr-num">431+</div><div className="l">단골 이웃</div></div></div>
                <span className="sep" />
                <div className="ti">
                  <span className="stars" aria-hidden><PinIcon /></span>
                  <div><div className="v" style={{ fontSize: "1.1rem" }}>파주 · 고양</div><div className="l">전 지역 방문</div></div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── 서비스 쇼케이스(묶음 상세) ── */}
          <section className="fr-sec" id="services">
            <div className="fr-wrap">
              <Reveal className="fr-head">
                <span className="fr-eyebrow">Services</span>
                <h2>이 페이지에서 한 번에</h2>
                <p>관련된 케어를 한 페이지에 모았습니다. 필요한 품목을 함께 예약하면 방문 한 번으로 끝납니다.</p>
              </Reveal>
              <StaggerGroup className="fr-svc-grid">
                {data.services.map((s) => (
                  <StaggerItem key={s.name} className="fr-svc-card">
                    <div className="ic"><s.Icon /></div>
                    <h3>{s.name}</h3>
                    <p className="desc">{s.desc}</p>
                    <ul>
                      {s.points.map((p) => (
                        <li key={p}><CheckIcon /> {p}</li>
                      ))}
                    </ul>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>

          {/* ── 공정 ── */}
          <section className="fr-sec tint" id="process">
            <div className="fr-wrap">
              <Reveal className="fr-head">
                <span className="fr-eyebrow">How we care</span>
                <h2>{data.problemsTitle}</h2>
                <p>{data.problemsSub}</p>
              </Reveal>
              <StaggerGroup className="fr-proc">
                {data.process.map((st, i) => (
                  <StaggerItem key={st.title} className="fr-step" hover={false}>
                    <div className="bub">
                      <st.Icon />
                      <span className="n fr-num">{i + 1}</span>
                    </div>
                    <h3>{st.title}</h3>
                    <p>{st.body}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>

          {/* ── 약속(보장) ── */}
          <section className="fr-sec" style={{ paddingBottom: 0 }}>
            <div className="fr-wrap">
              <Reveal className="fr-guar">
                <div className="top">
                  <span className="fr-eyebrow" style={{ color: "#fff" }}>Our promise</span>
                  <h2>청어람케어가 지키는 약속</h2>
                  <p>새것보다 깨끗하게(靑出於藍). 정직한 견적과 친환경 케어로 다시 찾는 단골을 만듭니다.</p>
                </div>
                <div className="fr-guar-grid">
                  {GUARANTEES.map((g) => (
                    <div className="fr-guar-card" key={g.title}>
                      <div className="ic"><g.Icon /></div>
                      <h3>{g.title}</h3>
                      <p>{g.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── 견적 ── */}
          <section className="fr-sec" id="price">
            <div className="fr-wrap">
              <Reveal className="fr-head">
                <span className="fr-eyebrow">Estimate</span>
                <h2>어떤 케어가 필요하세요?</h2>
                <p>상태와 규모에 따라 견적이 달라집니다. 사진 몇 장이면 대략적인 견적을 무료로 확인해 드립니다.</p>
              </Reveal>
              <StaggerGroup className="fr-price-grid">
                {data.tiers.map((t) => (
                  <StaggerItem key={t.title} className={`fr-pcard${t.pop ? " pop" : ""}`}>
                    {t.pop && <span className="flag">가장 많이 찾는</span>}
                    <div className="ic"><t.Icon /></div>
                    <h3>{t.title}</h3>
                    <p className="sub">{t.sub}</p>
                    <ul>
                      {t.items.map((it) => (
                        <li key={it}><CheckIcon /> {it}</li>
                      ))}
                    </ul>
                    <div className="prow">
                      <span className="from">방문 견적</span>
                      <span className="amt">사진으로 먼저 확인</span>
                    </div>
                    <a className={`fr-btn ${t.pop ? "fr-btn-primary" : "fr-btn-ghost"}`} href="#contact">
                      무료 견적 받기 <ArrowRightIcon />
                    </a>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <p className="fr-price-note">
                * 오염 상태·규모에 따라 견적이 조정될 수 있으며, 방문 시 최종 견적을 안내합니다.
              </p>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="fr-sec tint" id="faq">
            <div className="fr-wrap">
              <Reveal className="fr-head">
                <span className="fr-eyebrow">FAQ</span>
                <h2>자주 묻는 질문</h2>
              </Reveal>
              <Reveal className="fr-faq-wrap">
                <Accordion transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} defaultValue={0}>
                  {data.faqs.map((f, i) => (
                    <AccordionItem key={f.q} value={i} className="fr-faq-item">
                      <AccordionTrigger className="fr-faq-trig">
                        <span className="q">{f.q}</span>
                        <ChevronDownIcon className="chev" />
                      </AccordionTrigger>
                      <AccordionContent className="fr-faq-ans">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </section>

          {/* ── 최종 CTA ── */}
          <section className="fr-sec" id="contact" style={{ paddingBottom: 40 }}>
            <div className="fr-wrap">
              <Reveal className="fr-cta">
                <div className="in">
                  <span className="fr-eyebrow" style={{ color: "#fff" }}>Reservation</span>
                  <h2 style={{ marginTop: 16 }}>
                    {data.finalTitle[0]}
                    <br />
                    {data.finalTitle[1]}
                  </h2>
                  <p>{data.finalLead}</p>
                </div>
                <div className="fr-cta-acts">
                  <a className="fr-line" href={TEL}>
                    <span className="ic"><PhoneIcon /></span>
                    <span>
                      <span className="l">전화 상담 · 견적</span>
                      <br />
                      <span className="v fr-num">0507-1317-3113</span>
                    </span>
                  </a>
                  <a className="fr-line" href={CHAT} target="_blank" rel="noopener noreferrer">
                    <span className="ic"><ChatIcon /></span>
                    <span>
                      <span className="l">당근 · 채팅 상담</span>
                      <br />
                      <span className="v">청어람케어</span>
                    </span>
                  </a>
                  <div className="fr-line">
                    <span className="ic"><ShieldIcon /></span>
                    <span>
                      <span className="l">서비스 지역</span>
                      <br />
                      <span className="v" style={{ fontSize: "0.95rem", fontWeight: 700 }}>파주 · 고양(일산) 전 지역</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <FreshFooter />
        <FreshStickyCTA />
      </div>
    </div>
  );
}
