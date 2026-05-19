import SectionHeader from '@/components/SectionHeader';

const AGENTS = [
  {
    eyebrow: '에이전트 01',
    title: '버핏 스타일',
    body: '가치 중심. 변동성 속에서도 포지션을 유지하며, 모멘텀이 아닌 확신에 베팅한다.',
  },
  {
    eyebrow: '에이전트 02',
    title: '공격형 트레이더',
    body: '고빈도. 타이트한 손절선과 빠른 회전으로 단기 변동을 포착한다.',
  },
  {
    eyebrow: '에이전트 03',
    title: '장기 투자자',
    body: '소음보다 인내. 몇 주에 걸쳐 포지션을 쌓고 일중 시그널은 무시한다.',
  },
];

export default function AboutService() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="서비스 소개"
          title="투자 철학 기반의 트레이딩 에이전트, 누구나 쓸 수 있게."
          lede="BingX AI 마스터는 암호화폐 거래를 AI 에이전트에게 위임할 수 있는 서비스입니다. 각 에이전트는 명확한 투자 철학을 중심으로 설계되었으며, 사용자는 지표를 조정하거나 스크립트를 짤 필요 없이 자신의 위험 성향과 투자 기간에 맞는 에이전트를 선택하면 됩니다."
        />
        <div
          className="ds-impact-grid ds-impact-grid--3col-pattern"
          style={{ marginTop: 'var(--space-12)' }}
        >
          {AGENTS.map((agent) => (
            <article key={agent.title} className="ds-insight">
              <p className="ds-insight__eyebrow">{agent.eyebrow}</p>
              <h3 className="ds-insight__title">{agent.title}</h3>
              <p className="ds-insight__body">{agent.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
