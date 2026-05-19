const FLOW = [
  {
    counter: '01',
    title: '선택지가 너무 많다',
    body: '12개 이상의 에이전트가 뚜렷한 순서 없이 한꺼번에 노출된다.',
  },
  {
    counter: '02',
    title: '비교 기준의 부재',
    body: '사용자는 어떤 에이전트가 자신에게 더 나은지 설명할 수 없다.',
  },
  {
    counter: '03',
    title: '인상에 의존',
    body: '차트 색·이름·순서 같은 표면적 단서가 실질적 시그널이 되어버린다.',
  },
  {
    counter: '04',
    title: '의사결정 피로',
    body: '비슷해 보이는 카드를 비교하다 30초짜리 과업이 5분간의 미로가 된다.',
  },
  {
    counter: '05',
    title: '이탈',
    body: '많은 사용자가 단 하나의 에이전트도 활성화하지 못한 채 떠난다.',
  },
];

export default function Problem() {
  return (
    <section className="section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="ds-eyebrow ds-eyebrow--accent-yellow">문제</p>
        <h2
          className="ds-display"
          style={{
            margin: 'var(--space-6) auto 0',
            maxWidth: '1100px',
          }}
        >
          탐색은 가능했지만, 결정은 불가능했다.
        </h2>
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-10) auto 0',
            maxWidth: '720px',
          }}
        >
          제품은 가능한 모든 에이전트를 노출했지만, 정작 중요한 순간 — 확신을 가지고 선택하는 — 직전에 멈춰 있었다. 이탈은 탐색이 아니라 비교 단계에서 집중됐다.
        </p>
        <hr
          className="ds-divider ds-divider--accent-yellow"
          style={{ margin: 'var(--space-16) auto 0', maxWidth: '120px' }}
        />
      </div>

      <div
        className="section-inner"
        style={{
          marginTop: 'var(--space-16)',
          display: 'grid',
          gap: 'var(--space-6)',
          maxWidth: '720px',
        }}
      >
        {FLOW.map((step) => (
          <article key={step.counter} className="ds-numbered-step">
            <div className="ds-numbered-step__content">
              <span className="ds-numbered-step__counter">{step.counter}</span>
              <hr className="ds-numbered-step__divider" />
              <h3 className="ds-numbered-step__title">{step.title}</h3>
              <p className="ds-numbered-step__body">{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
