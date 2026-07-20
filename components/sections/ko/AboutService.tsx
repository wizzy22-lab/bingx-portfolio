import RevealHeading from '@/components/RevealHeading';

const CRITERIA = [
  {
    title: 'Master',
    body: '특정 투자 성향과 철학을 대표하는 AI 투자 도우미',
    icon: '/icons/about/investment-style.png',
  },
  {
    title: '전략',
    body: 'Master가 가진 구체적인 자동 매매 방식',
    icon: '/icons/about/trading-strategy.png',
  },
  {
    title: '투자금',
    body: '선택한 전략을 실행하기 위해 투입하는 최소 금액 이상의 자금',
    icon: '/icons/about/risk-tolerance.png',
  },
];

export default function AboutService() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow about__eyebrow">
          [ 01 — About Service ]
        </p>
        <RevealHeading level="h2" className="ds-h2 about__title">
          투자 거장의 전략을 선택해
          <br />
          AI에게 자동 거래를 맡기는 암호화폐 트레이딩 서비스
        </RevealHeading>
        <p className="about__lede">
          AI Master는 사용자가 선택한 전략에 따라 AI가 자동으로 거래하는 서비스입니다.
          <br />
          사용자는 AI와 대화하며 전략을 추천받거나, 관심 있는 Master를 직접 선택해 그 안의
          전략을 살펴볼 수 있습니다.
        </p>

        <p className="about__intro">
          서비스 안에는 서로 다른 투자 성향을 대표하는 7명의 Master가 있고, 각 Master는 다시
          여러 자동 매매 전략을 가지고 있습니다.
        </p>

        <div className="about__grid">
          {CRITERIA.map((c) => (
            <div key={c.title} className="about__criterion">
              <div className="about__icon">
                <img className="about__icon-img" src={c.icon} alt="" aria-hidden />
              </div>
              <article className="about__card">
                <h3 className="about__card-title">{c.title}</h3>
                <p className="about__card-body">{c.body}</p>
              </article>
            </div>
          ))}
        </div>

        <p className="about__closing">
          사용자가 Master와 전략을 고르고 정해진 최소 금액 이상을 투입하면, AI가 전략에 따라
          자동으로 매수와 매도를 진행합니다. 마지막에는 포지션을 종료해 거래 결과를
          확정합니다.
        </p>
        <p className="about__final">
          즉 사용자는 <span className="about__highlight">어떤 Master의 어떤 전략에 얼마를
          맡길지</span> 결정하고, 이후의 실제 거래는 AI가 수행합니다.
        </p>
      </div>
    </section>
  );
}
