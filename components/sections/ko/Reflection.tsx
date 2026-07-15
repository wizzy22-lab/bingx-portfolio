import RevealHeading from '@/components/RevealHeading';

const PARAGRAPHS = [
  '이 프로젝트에서 가장 어려웠던 것은 AI가 아니었다 — 12개의 선택지 앞에서 한 사람이 하나를 골라야 하는 순간이었다. 알고리즘은 얼마든지 많은 에이전트를 만들어낼 수 있다. 디자인의 일은, 사람이 그들 사이에서 선택할 방법을 만드는 것이다.',
  '리디자인의 모든 결정은 같은 방식으로 작동했다: 선택만 남을 때까지 화면에서 빼는 것. 12개의 지표 대신 세 가지 질문. 스크롤 대신 나란히 비교. 수익률 대신 추론.',
  '다음 AI 프로젝트로 가져갈 것: 모델의 출력을 디자인하지 말 것. 사람이 그것에 헌신하는 순간을 디자인할 것.',
  '만약 실제로 출시된다면 내가 지켜볼 지표는 활성화 전환율이다 — 더 명확한 의사결정 구조가 실제로 탐색을 첫 거래로 이어지게 하는지.',
];

const CLOSING = [
  '선택은 그 자체로 하나의 단계다. IA, 카피, 시각적 위계에서 그렇게 다뤄야 한다.',
  '기준선 없는 숫자는 데이터가 아니다 — 장식이다.',
  '신뢰는 가입 시점에 한 번 얻는 것이 아니라, 활성화 이후 모든 화면에서 다시 쌓는 것이다.',
];

export default function Reflection() {
  return (
    <section id="reflection" className="section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="ds-eyebrow ds-eyebrow--accent-yellow">회고</p>
        <RevealHeading
          level="h2"
          className="ds-display"
          style={{ margin: 'var(--space-6) auto 0', maxWidth: '1100px' }}
        >
          AI를 디자인하는 것은, 의사결정을 디자인하는 것이다.
        </RevealHeading>
        <hr
          className="ds-divider ds-divider--accent-yellow"
          style={{ margin: 'var(--space-16) auto 0', maxWidth: '120px' }}
        />
      </div>
      <div
        className="section-inner ds-research-finding"
        style={{ marginTop: 'var(--space-16)' }}
      >
        {PARAGRAPHS.map((p) => (
          <p key={p} className="ds-research-finding__paragraph">
            {p}
          </p>
        ))}
        <ul className="ds-research-finding__implication-list">
          {CLOSING.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
