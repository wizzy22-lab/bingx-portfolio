import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

const CRITERIA = [
  {
    title: 'Master',
    body: ['An AI investing guide representing', 'a specific style and philosophy'],
  },
  {
    title: 'Strategy',
    body: ['The concrete automated trading', 'method a Master offers'],
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
          A crypto trading service where you pick a legendary investor&rsquo;s strategy
          <br />
          and hand the trading over to AI
        </RevealHeading>
        <p className="about__lede">
          AI Master is a service where AI trades automatically according to the strategy a user
          selects.
          <br />
          Users can chat with the AI to get a strategy recommendation, or pick a Master they are
          interested in and browse the strategies inside it.
        </p>

        <p className="about__intro">
          The service holds seven Masters, each representing a different investment style, and
          every Master in turn holds several automated trading strategies.
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
              Once a user picks a Master and a strategy
              <br />
              and commits at least the required minimum,
            </p>
            <p className="about__flow-step about__flow-step--result">
              the AI buys and sells automatically according to that strategy.
            </p>
          </div>
        </RevealOnView>

        <p className="about__final">
          In other words, the user decides{' '}
          <span className="about__highlight">
            which strategy of which Master to commit how much to
          </span>
          , and <span className="about__highlight">the AI</span> carries out the actual trading
          from there.
        </p>
      </div>
    </section>
  );
}
