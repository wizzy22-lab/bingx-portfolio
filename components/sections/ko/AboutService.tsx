import RevealHeading from '@/components/RevealHeading';

const CRITERIA = [
  {
    title: '1.투자 성향',
    body: '안정적으로 투자  vs  높은 수익을 위해 더 도전적으로\n투자',
  },
  {
    title: '2.리스크 기준',
    body: '투자할 때 어느 정도의 위험까지 감수할 수 있는지에 대한 기준',
  },
  {
    title: '3.시장 해석 방식',
    body: '투자 정보를 어떤 기준으로 이해하고 판단하는지에 대한 방식',
  },
  {
    title: '4.매매 전략',
    body: '언제 사고, 언제 팔지 정하는 투자 방법',
  },
];

export default function AboutService() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow about__eyebrow">
          [ 01 — about Service ]
        </p>
        <RevealHeading level="h2" className="ds-h2 about__title">
          세계적인 투자 철학을 기반으로 움직이는 AI 투자 Agent 서비스.
        </RevealHeading>
        <p className="about__lede">
          AI Master는 유명 투자자들의 투자 철학과 전략 스타일을 기반으로, 각기 다른 AI
          Agent를 선택해 투자를 진행할 수 있는 AI 트레이딩 서비스입니다.
        </p>

        <p className="about__intro">각 Agent는</p>

        <div className="about__grid">
          {CRITERIA.map((c) => (
            <div key={c.title} className="about__criterion">
              <div className="about__icon" aria-hidden />
              <article className="about__card">
                <h3 className="about__card-title">{c.title}</h3>
                <p className="about__card-body">{c.body}</p>
              </article>
            </div>
          ))}
        </div>

        <p className="about__closing">
          각 에이전트는 서로 다른 방식으로 설계되어 있었고, 사용자는 자신의 투자 성향에
          가장 잘 맞는 MASTER를 선택해야 했습니다.
        </p>
        <p className="about__final">
          즉, 사용자는 어떤 <span className="about__highlight">투자 철학</span>을 따를
          것인지 선택해야 했습니다.
        </p>
      </div>
    </section>
  );
}
