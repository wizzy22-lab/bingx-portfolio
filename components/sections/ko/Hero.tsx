import RevealHeading from '@/components/RevealHeading';

const TAGS = ['AI 에이전트', '암호화폐 트레이딩', '의사결정 UX'];

const META = [
  { label: '역할', value: '프로덕트 디자이너' },
  { label: '범위', value: '리서치 · IA · 비주얼 · 프로토타입 · 사용성 테스트' },
  { label: '기간', value: '8주' },
  { label: '팀', value: '디자이너 2명' },
];

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="section-inner">
        <div className="hero">
          <div>
            <RevealHeading level="h1" className="ds-display hero__title">
              BingX
              <br />
              AI Master
            </RevealHeading>
            <p className="ds-body-lg hero__subtitle">
              세계적인 투자거장들의 철학을 기반으로 한 AI Agent를 사용자가 더 명확하게
              비교하고 선택할 수 있도록 의사결정 흐름 중심으로 재설계한 프로젝트
            </p>
            <div className="hero__tags">
              {TAGS.map((tag) => (
                <span key={tag} className="ds-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <img
            className="ds-media-placeholder media-fill"
            data-aspect="4/3"
            src="/images/hero/hero-thumbnail.png"
            alt="최종 UI 목업 — 선호도 설정, 에이전트 비교, 의사결정 플로우"
          />
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
