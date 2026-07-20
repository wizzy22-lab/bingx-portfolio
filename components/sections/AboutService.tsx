import RevealHeading from '@/components/RevealHeading';

const CRITERIA = [
  {
    title: 'Master',
    body: 'An AI investing guide that represents a specific investment style and philosophy',
    icon: '/icons/about/investment-style.png',
  },
  {
    title: 'Strategy',
    body: 'The concrete automated trading method a Master offers',
    icon: '/icons/about/trading-strategy.png',
  },
  {
    title: 'Capital',
    body: 'The funds — at or above a set minimum — committed to run the chosen strategy',
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
          Commit money to a strategy you were recommended or picked yourself, and the AI trades
          it for you
        </RevealHeading>
        <p className="about__lede">
          AI Master is a service where AI trades automatically according to the strategy a user
          selects. Users can chat with the AI to get a strategy recommendation, or pick a Master
          they are interested in and browse the strategies inside it.
        </p>

        <p className="about__intro">
          The service holds seven Masters, each representing a different investment style, and
          every Master in turn holds several automated trading strategies.
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
          Once a user picks a Master and a strategy and commits at least the required minimum,
          the AI buys and sells automatically according to that strategy. Finally it closes the
          position, settling the outcome of the trade.
        </p>
        <p className="about__final">
          In other words, the user decides{' '}
          <span className="about__highlight">
            which strategy of which Master to commit how much to
          </span>
          , and the AI carries out the actual trading from there.
        </p>
      </div>
    </section>
  );
}
