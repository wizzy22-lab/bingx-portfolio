import RevealHeading from '@/components/RevealHeading';

const CARDS = [
  {
    eyebrow: '기존 경험',
    title: '최근 수익률 기준으로 정렬된, 구조 없는 에이전트 리스트.',
    body: '사용자는 스크롤은 할 수 있지만, 무엇을 보고 있는지 판단할 수 없다.',
  },
  {
    eyebrow: '간극',
    title: '플로우 안에 선택지를 좁혀주는 명시적 순간이 없다.',
    body: '제품은 선택을 탐색과 동일하게 다루지만, 두 과업은 같은 것이 아니다.',
  },
  {
    eyebrow: '결과',
    title: '탐색은 많고, 활성화는 적고, 이탈은 반복된다.',
    body: '사용자는 세션을 시작할 때보다 더 큰 불확실성을 안고 종료한다.',
  },
];

export default function Define() {
  return (
    <section id="define" className="section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="ds-eyebrow ds-eyebrow--accent-yellow">정의</p>
        <RevealHeading
          level="h2"
          className="ds-display"
          style={{ margin: 'var(--space-6) auto 0', maxWidth: '1100px' }}
        >
          문제는 AI에 대한 이해가 아니라, 의사결정 구조의 부재였다.
        </RevealHeading>
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-10) auto 0',
            maxWidth: '720px',
          }}
        >
          사용자에게 필요한 것은 용어 사전이나 튜토리얼이 아니다. 12개의 옵션을 자신에게 맞는 하나로 좁혀주는 — 순서였다.
        </p>
      </div>
      <div
        className="section-inner ds-impact-grid ds-impact-grid--3col-pattern"
        style={{ marginTop: 'var(--space-16)' }}
      >
        {CARDS.map((c) => (
          <article key={c.eyebrow} className="ds-insight ds-insight--dark">
            <p className="ds-insight__eyebrow">{c.eyebrow}</p>
            <h3 className="ds-insight__title">{c.title}</h3>
            <p className="ds-insight__body">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
