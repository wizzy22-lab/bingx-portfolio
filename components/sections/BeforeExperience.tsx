import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

/* Each string is one rendered line, mirroring the Figma line breaks. */
const PROBLEMS = [
  {
    number: '01.',
    title: ['There was no starting point'],
    lines: [
      'Users had to work through seven Masters and their',
      'many strategies from scratch. Nothing told them',
      'what to judge a Master by, or what to read first.',
    ],
  },
  {
    number: '02.',
    title: ['What follows a recommendation was unclear'],
    lines: [
      'Even once a strategy was recommended — by chat or',
      'by browsing Masters — it was hard to tell why, how',
      'far the AI trades alone, or what to do next.',
      'Even when entering real money, how a strategy ends,',
      'how to stop it and how capital settles went unsaid.',
    ],
  },
  {
    number: '03.',
    title: ['Strategy and performance could not be', 'compared together'],
    lines: [
      'Each Master scattered its strategies’ risk levels',
      'and performance, so differences were slow to read.',
      'And to see the real price of the coin a strategy',
      'traded, users had to leave AI Master entirely.',
    ],
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
          It was unclear where to start, what to choose,
          <br />
          and how far the AI takes over
        </RevealHeading>
        <p className="experience__lede">
          The existing screens offered many Masters and strategies, chat recommendations and
          trading features all at once.
          <br />
          But nothing guided users on what to check first, or in what order to decide.
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
              [ Current Experience Analysis — Existing AI Master Flow &amp; Interface Review ]
            </figcaption>
          </figure>

          <RevealOnView className="experience__cards">
            {PROBLEMS.map((p) => (
              <article key={p.number} className="experience__card">
                <header className="experience__head">
                  <span className="experience__number">{p.number}</span>
                  <h3 className="experience__title-h3">
                    {p.title.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < p.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </header>
                <blockquote className="experience__quote">
                  {p.lines.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </blockquote>
              </article>
            ))}
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
