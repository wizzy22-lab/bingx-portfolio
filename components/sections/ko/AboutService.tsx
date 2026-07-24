import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

const CRITERIA = [
  {
    title: 'Master',
    body: ['특정 투자 성향과 철학을 대표하는', 'AI투자 도우미'],
  },
  {
    title: '전략',
    body: ['Master가 가진 구체적인', '자동 매매 방식'],
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

        {/* Figma order: the two term cards reveal first, then the process flow below them. */}
        <RevealOnView className="about__sequence">
          <div className="about__grid">
            {CRITERIA.map((c) => (
              <article key={c.title} className="about__card">
                <h3 className="about__card-title">{c.title}</h3>
                <p className="about__card-body">
                  {c.body.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < c.body.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>

          <div className="about__flow">
            <p className="about__flow-step">
              사용자가 Master와 전략을 고르고 정해진 최소 금액 이상을 투입하면,
            </p>
            <p className="about__flow-step about__flow-step--result">
              AI가 전략에 따라 자동으로 매수와 매도를 진행합니다
            </p>
          </div>
        </RevealOnView>

        <p className="about__final">
          즉 사용자는{' '}
          <span className="about__highlight">어떤 Master의 어떤 전략에 얼마를 맡길지</span>{' '}
          결정하고, 이후의 <span className="about__highlight">실제 거래는 AI</span>가
          수행합니다.
        </p>
      </div>
    </section>
  );
}
