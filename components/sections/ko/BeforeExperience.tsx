import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

const PROBLEMS = [
  {
    number: '01.',
    title: 'No Personalized Starting Point',
    intro: '유저는 자신의 성향에 맞는 명확한 시작점 없이 모든 전략을 탐색해야 했습니다.',
    bullets: [] as string[],
    outro: '',
  },
  {
    number: '02.',
    title: 'Unclear Recommendation Flow',
    intro: '유저는 다음을 이해하기 어려웠습니다:',
    bullets: ['왜 전략이 추천되는지', 'AI가 무엇을 하고 있는지', '다음에 무엇이 일어날지'],
    outro: '',
  },
  {
    number: '03.',
    title: 'Hard to Compare Strategies',
    intro: '유저는 다음을 빠르게 비교하기 어려웠습니다:',
    bullets: ['전략 차이', '리스크 수준', '핵심 성과 정보'],
    outro: '여러 에이전트에 걸쳐서.',
  },
];

export default function BeforeExperience() {
  return (
    <section id="problem" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow experience__eyebrow">
          [ 02 — Current Experience ]
        </p>
        <RevealHeading level="h2" className="ds-h2 experience__title">
          유저들은 AI 에이전트가 실제로 어떻게 작동하는지 이해하기 어려워했습니다.
        </RevealHeading>
        <p className="experience__lede">
          유저들은 익숙한 투자자 이미지를 통해 AI 아바타를 인식할 수 있었지만, 이후 낯선 AI
          인터랙션 패턴이 도입되면서 전체 경험을 이해하기 어려웠습니다.
        </p>

        <div className="experience__layout">
          <figure className="experience__analysis">
            <img
              className="experience__analysis-img media-fill"
              src="/images/current-experience/current-service-analysis.png"
              alt=""
              aria-hidden
            />
            <figcaption className="experience__analysis-caption">
              [ Current Experience Analysis -Existing AI Master Flow &amp; Interface Review ]
            </figcaption>
          </figure>

          <RevealOnView className="experience__cards">
            {PROBLEMS.map((p) => (
              <article key={p.number} className="experience__card">
                <header className="experience__head">
                  <span className="experience__number">{p.number}</span>
                  <h3 className="experience__title-h3">{p.title}</h3>
                </header>
                <blockquote className="experience__quote">
                  <span className="experience__quote-intro">{p.intro}</span>
                  {p.bullets.length > 0 && (
                    <ul className="experience__quote-list">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {p.outro && <span className="experience__quote-outro">{p.outro}</span>}
                </blockquote>
              </article>
            ))}
          </RevealOnView>
        </div>

        <p className="experience__closing">
          그 결과 유저들은 전략보다 인상에 의존해 에이전트를 선택했고, AI가 어떻게 작동하는지
          충분히 이해하지 못해 최종 실행 단계에서 이탈했습니다.
        </p>
      </div>
    </section>
  );
}
