# 청어람케어 홈페이지 — 작업 브리핑 / 핸드오프

> **새 세션(재시작 후) 사용법:** 이 파일을 먼저 읽고, **21st.dev MCP**로 컴포넌트를 검색·삽입해 "스포티 v2"를 완성한다.
> 21st MCP는 `claude mcp add`로 등록됨 → **Claude Code 재시작 후에만 도구로 로드됨.**

---

## 1. 프로젝트 개요

- **위치:** `07.검사기데이터/cheongeoram-web/`
- **스택:** Next.js **16.2.10** (App Router, Turbopack) · React **19** · TypeScript · Tailwind **v4** · **Motion 12** (`motion/react`)
- **폰트:** Pretendard(한글, CSS import) — 스포티 v2에서 Outfit(라틴/숫자) 추가 예정
- **실행:** `npm run dev` (현재 3001 포트에서 구동 중일 수 있음) · `npm run build` 통과 확인됨
- **스크린샷:** 헤드리스 Edge — `msedge.exe --headless=new --window-size=1440,3200 --screenshot=out.png http://localhost:3001/`

### 파일 구조
```
src/app/       layout.tsx (SEO·ko), globals.css (디자인 토큰), page.tsx (섹션 조립)
src/components/ Nav Hero BeforeAfter Services Process Why Contact Footer
               icons.tsx(SVG, 이모지 금지) motion.tsx(Reveal/Stagger 헬퍼)
design-system/default/MASTER.md   ← ui-ux-pro-max 스킬이 생성한 디자인 시스템
```

---

## 2. 확인된 실제 사업자 정보 (네이버/당근/공공데이터, 2026-07-19)

| 항목 | 내용 |
|---|---|
| 연락처(일산본점) | **0507-1317-3113** |
| 일산본점 주소 | 경기 고양시 일산서구 중앙로 1449, 효원메이저 1002호 (건물위생관리업, 인허가 2026-04-06) |
| 파주 야당동 | 경기 파주시 경의로 1114, 에펠타워 동 4층 (건축물 일반 청소업) |
| 파주 운정3동 | 당근 동네업체 — 평점 **4.8** · 후기 **23** · 단골 **431** |
| 혜택 | 피톤치드 서비스, 후기 페이백 |
| 서비스 | 에어컨 분해세척 / 소파·매트리스·카펫 패브릭(건식→습식·스팀·항균) / 세탁기 / 주방후드 / 상가·사무실 위생관리 |
| 지역 | 파주(운정·야당) · 고양(일산) |
| 브랜드 콘셉트 | 청출어람(靑出於藍) = "새것보다 깨끗하게" |

⚠️ **설립 2026년** → "Since 2015", 누적 12,400건 등 **허위 수치 금지**. 실제 수치(당근 4.8/431)만 사용.
⚠️ 추가 공개정보는 거의 없음 — **없는 정보 창작 금지.**

---

## 3. 디자인 방향

### v1 (완료·게시됨) — "Trust & Authority"
- 팔레트: 네이비 `#14233B` + 아쿠아 `#00A8B5` + 쿨 오프화이트 `#F6F8FA`
- Before/After 드래그 캔버스 슬라이더, 서비스 그리드, 4단계 공정, 신뢰 지표
- Artifact 시안: https://claude.ai/code/artifact/a432451e-e1cb-4b7b-9762-bfbe3a62403b

### v2 (진행 목표) — **"스포티 / Bento"**  ← 사용자 요청
ui-ux-pro-max 스킬 재생성 결과 (dials: variance 8 / motion 9 / density 5):
- **스타일:** Bento Grids (모듈형 타일, 2xl 라운드, 다양한 span)
- **모션:** Complex — hover scale 1.02, spring 리빌, 카운트업, 마퀴, 페이지 전환
- **타입:** Outfit / Clash Display 계열 (bold·dynamic, 큰 키네틱 헤드라인)
- **컬러:** 스킬 원안은 vibrant rose(`#E11D48`)+blue(`#2563EB`)였으나 **핑크는 위생 브랜드와 상충 → 아쿠아 베이스 + 일렉트릭 블루 `#2F6BFF` + 애시드 라임 `#C6FF3D` 포인트**로 재해석 (보라/핑크 회피, 보수성은 사용자 확인 필요)
- **효과:** hover scale, soft shadow expansion, content reveal

---

## 4. 21st.dev MCP로 할 일 (재시작 후)

21st MCP 도구 로드 확인 → 아래 컴포넌트를 검색·삽입하여 Next.js(Motion)로 통합:

1. **Bento grid hero** — 헤드라인 타일 + Before/After 타일 + 스탯 타일 조합
2. **Animated counter / stat** — 4.8, 431, 100% 카운트업
3. **Marquee / logo·keyword ticker** — 서비스 키워드 무한 스크롤 스트립
4. **Before/After image slider** — (기존 캔버스 버전 대체 후보)
5. **Sticky / magnetic CTA button** — 전화 0507-1317-3113 유도
6. **Testimonial card** — 당근 후기(4.8) 표시용 (실제 후기 텍스트는 없으면 생략)

**통합 규칙:**
- 21st 컴포넌트는 대개 shadcn/Tailwind 기반 → Tailwind v4 환경에 맞게 조정
- 색/폰트는 위 v2 팔레트·Outfit로 치환
- ui-ux-pro-max **프리딜리버리 체크리스트 준수**: SVG 아이콘(이모지 금지), cursor-pointer, 포커스링, `prefers-reduced-motion`, 4.5:1 대비, 375/768/1024/1440 반응형
- 통합 후 `npm run build` 통과 + 스크린샷 재확인

---

## 5. 남은 TODO (v2)
- [x] Outfit 폰트 추가 + globals.css 스포티 토큰 교체
- [x] Counter·Marquee 등 키네틱 Motion 컴포넌트
- [x] Hero/Services 벤토 리디자인
- [x] 21st 컴포넌트 삽입·통합 (ibelick Motion Accordion → FAQ)
- [x] build·스크린샷 재검증 (build 통과, 히어로/전체 스크린샷 OK)
- [ ] (사용자 확인) 라임 포인트 컬러 톤 / 배포(Vercel)

### 5-1. 상세페이지 2종 — "프레시 위생" 디자인 (2026-07-19 재구성 완료)
사용자 피드백: "상세가 메인과 디자인이 똑같아 구분 안 됨 + 소파만 말고 묶어서" → **메인(스포티 벤토)과 완전히 다른 별도 디자인 언어 `.fresh`**(밝은 화이트+아쿠아/민트, 라운드 카드, 소프트 섀도우, 위생 체크배지, 버블 공정 스텝)로 재제작. 기존 `fabric-care`는 삭제.
- **라우트 2개(둘 다 build 통과·렌더 확인):**
  - `/services/home-care` — **홈 리빙 케어**: 에어컨 분해세척 · 소파 패브릭 · 매트리스·침대 · 카펫 (Before/After=에어컨 루버)
  - `/services/facility-care` — **설비·현장 위생**: 세탁기 분해세척 · 주방후드·렌지 · 상가·사무실 · 산업/현장 (Before/After=세탁조 드럼)
- **구조(전환 퍼널, 데이터 기반):** 히어로(플로팅 Before/After 카드+스탯칩) → 묶음 서비스 칩 → 신뢰스트립(4.8·23·431) → 서비스 쇼케이스(묶은 품목 카드) → 4단계 버블 공정 → 약속 밴드(아쿠아 그라데이션) → 견적 3티어 → FAQ(21st 아코디언) → 최종 CTA + **Sticky CTA 바**
- **핵심 파일:**
  - `components/fresh/freshData.tsx` — 두 그룹 데이터(`HOME_CARE`/`FACILITY_CARE`, `GROUPS` 맵). 콘텐츠 수정은 여기서.
  - `components/fresh/FreshDetail.tsx` — 데이터 기반 페이지 본문. **prop은 `slug` 문자열만**(서버→클라 함수 직렬화 불가 이슈 때문에 data 객체 대신 slug 넘기고 내부에서 `GROUPS[slug]` 조회).
  - `components/fresh/{FreshShell(Nav/Footer/StickyCTA),FreshBeforeAfter}.tsx`
  - `components/ui/Accordion.tsx` — 21st(@ibelick) Motion 아코디언 이식(재사용)
- **CSS:** globals.css 하단 `.fresh` 스코프 블록(FRESH & 위생). 메인 스포티 토큰과 완전 분리. 아이콘 다수 icons.tsx 추가.
- **홈 연결:** Services 6개 카드 → home-care/facility-care로 각각 "자세히 보기" 링크.
- ⚠️ **가격·후기 허구 금지** 유지: "사진으로 먼저 확인/무료 견적" 프레이밍만, 실제 당근 수치(4.8/23/431)만. 실제 단가 확보 시 `freshData`의 `tiers`에 반영.

## 6. 보안
- 21st API 키가 이전 대화에 노출됨 → **재발급 권장.**
