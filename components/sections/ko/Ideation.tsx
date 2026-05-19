const STORY_STEPS = [
  {
    counter: '01',
    caption: '이해',
    title: '선호도를 이해한다',
    body: '리스크, 투자 기간, 관여도에 대한 세 가지 짧은 질문에 답한다.',
  },
  {
    counter: '02',
    caption: '비교',
    title: '전략을 비교한다',
    body: '추천된 세 명의 에이전트가 나란히 보여지며, 각 선정 이유가 함께 제시된다.',
  },
  {
    counter: '03',
    caption: '선택',
    title: '에이전트를 고른다',
    body: '하나의 에이전트를 활성화한다. 무엇을, 왜 선택했는지가 명확히 요약된다.',
  },
];

function SubsectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header style={{ marginBottom: 'var(--space-12)' }}>
      <p className="ds-eyebrow ds-eyebrow--accent-blue">{eyebrow}</p>
      <h3
        className="ds-h2"
        style={{ margin: 'var(--space-4) 0 0 0', maxWidth: '820px' }}
      >
        {title}
      </h3>
      {lede && (
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-6) 0 0 0',
            maxWidth: '720px',
          }}
        >
          {lede}
        </p>
      )}
    </header>
  );
}

export default function Ideation() {
  return (
    <section id="ideation" className="section">
      <div className="section-inner">
        <header style={{ marginBottom: 'var(--space-20)' }}>
          <p className="ds-eyebrow ds-eyebrow--accent-yellow">아이데이션</p>
          <h2 className="ds-h1" style={{ margin: 'var(--space-4) 0 0 0', maxWidth: '900px' }}>
            30개의 아이디어에서, 한 줄로 좁힌 MVP까지.
          </h2>
          <hr
            className="ds-divider ds-divider--accent-yellow"
            style={{ marginTop: 'var(--space-10)' }}
          />
        </header>

        {/* 08-1 */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="08.1 · 아이데이션 · 카테고리화"
            title="30여 개의 기능 아이디어를 네 가지 과업으로 묶기."
          />
          <figure className="ds-media ds-media--full">
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="기능 카테고리화 보드"
            >
              <span className="ds-media-placeholder__label">기능 카테고리화 보드</span>
              <span className="ds-media-placeholder__meta">학습 · 비교 · 결정 · 검토</span>
            </div>
            <figcaption className="ds-media__caption">
              아이디어를 사용자가 해결하려는 과업 기준으로 묶었다: 학습, 비교, 결정, 검토.
            </figcaption>
          </figure>
        </div>

        {/* 08-2 */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="08.2 · 아이데이션 · 사용자 스토리"
            title='"전부 보여줘"에서 "골라줘"로.'
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-6)',
            }}
            className="user-story-grid"
          >
            {STORY_STEPS.map((s) => (
              <article key={s.counter} className="ds-numbered-step ds-numbered-step--cream">
                <div className="ds-numbered-step__content">
                  <span className="ds-numbered-step__counter">{s.counter}</span>
                  <p className="ds-numbered-step__caption">{s.caption}</p>
                  <hr className="ds-numbered-step__divider" />
                  <h4 className="ds-numbered-step__title">{s.title}</h4>
                  <p className="ds-numbered-step__body">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
          <style>{`
            @media (min-width: 768px) {
              .user-story-grid { grid-template-columns: repeat(3, 1fr); }
            }
          `}</style>
        </div>

        {/* 08-3 */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="08.3 · 아이데이션 · 우선순위"
            title="임팩트 × 공수로 MVP 범위를 결정."
            lede="12개의 후보 기능을 2×2 매트릭스에 배치했다. 임팩트 높음 / 공수 낮음 사분면에 들어간 것이 1차 범위가 됐다. 추천 단계와 나란히 비교가 함께 그 자리에 떨어졌다."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-12)',
              alignItems: 'center',
            }}
            className="prioritization-grid"
          >
            <div className="matrix-2x2" aria-hidden="true">
              <div>임팩트 높음 · 공수 낮음</div>
              <div>임팩트 높음 · 공수 높음</div>
              <div>임팩트 낮음 · 공수 낮음</div>
              <div>임팩트 낮음 · 공수 높음</div>
            </div>
            <p className="ds-body-lg" style={{ color: 'var(--text-secondary)' }}>
              <span className="ds-implication-arrow">→</span>
              개인화된 추천 + 비교 화면은 함께 출시되거나, 둘 다 출시되지 않는다.
            </p>
          </div>
          <style>{`
            @media (min-width: 768px) {
              .prioritization-grid { grid-template-columns: 1fr 1fr; }
            }
          `}</style>
        </div>

        {/* 08-4 */}
        <div>
          <SubsectionHeader
            eyebrow="08.4 · 아이데이션 · Crazy 8s"
            title="8분 안에, 비교 화면에 대한 8가지 방향."
          />
          <figure className="ds-media ds-media--full">
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="Crazy 8s 스케치 그리드"
            >
              <span className="ds-media-placeholder__label">Crazy 8s 스케치 그리드</span>
              <span className="ds-media-placeholder__meta">빠른 대안 8개 · 3개 진전</span>
            </div>
            <figcaption className="ds-media__caption">
              스케치 그리드 — 8개의 빠른 대안 중 3개를 와이어프레임으로 발전시켰다.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
