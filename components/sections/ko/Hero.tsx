const TAGS = ['AI 에이전트', '암호화폐 트레이딩', '의사결정 UX', '다크 모드', '모바일 퍼스트'];

const META = [
  { label: '역할', value: '프로덕트 디자이너 (리드 · 엔드-투-엔드)' },
  { label: '범위', value: '리서치 · IA · 비주얼 · 프로토타입 · 사용성 테스트' },
  { label: '기간', value: '8주 · 개인 케이스 스터디' },
  { label: '팀', value: '디자이너 1명 · PM 2명 리뷰' },
];

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="section-inner">
        <div className="hero">
          <div>
            <p className="ds-eyebrow ds-eyebrow--accent-yellow">
              케이스 스터디 · 암호화폐 트레이딩 UX
            </p>
            <h1 className="ds-display hero__title">BingX AI 마스터</h1>
            <p className="ds-body-lg hero__subtitle">
              AI 기반 암호화폐 트레이딩의 의사결정 구조 설계 — 처음 투자하는 사용자가 인상이
              아닌 확신으로 에이전트를 선택할 수 있도록.
            </p>
            <div className="hero__tags">
              {TAGS.map((tag) => (
                <span key={tag} className="ds-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className="ds-media-placeholder"
            data-aspect="3/2"
            role="img"
            aria-label="최종 UI 목업 — 선호도 설정, 에이전트 비교, 의사결정 플로우"
          >
            <span className="ds-media-placeholder__label">최종 UI 목업</span>
            <span className="ds-media-placeholder__meta">
              선호도 · 비교 · 의사결정 플로우
            </span>
          </div>
        </div>
        <div className="hero__meta">
          {META.map((row) => (
            <div key={row.label} className="hero__meta-row">
              <p className="ds-eyebrow">{row.label}</p>
              <p className="ds-body">{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
