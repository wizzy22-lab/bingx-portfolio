import RevealHeading from '@/components/RevealHeading';

const PROBLEMS = [
  {
    number: '01.',
    title: 'No Personalized Starting Point',
    intro: 'Users had to explore all strategies without a clear starting point based on their preferences.',
    bullets: [] as string[],
    outro: '',
  },
  {
    number: '02.',
    title: 'Unclear Recommendation Flow',
    intro: 'Users struggled to understand:',
    bullets: [
      'why strategies were recommended',
      'what the AI was doing',
      'what would happen next',
    ],
    outro: '',
  },
  {
    number: '03.',
    title: 'Hard to Compare Strategies',
    intro: 'Users found it difficult to quickly compare:',
    bullets: ['strategy differences', 'risk levels', 'key performance information'],
    outro: 'across multiple agents.',
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
          Users struggled to understand How the AI agents actually worked.
        </RevealHeading>
        <p className="experience__lede">
          Users were able to recognize the AI avatars through familiar investor imagery, but
          the service later introduced unfamiliar AI interaction patterns, making the overall
          experience difficult to understand.
        </p>

        <div className="experience__layout">
          <figure className="experience__analysis">
            <div className="experience__analysis-img" aria-hidden />
            <figcaption className="experience__analysis-caption">
              [ Current Experience Analysis -Existing AI Master Flow &amp; Interface Review ]
            </figcaption>
          </figure>

          <div className="experience__cards">
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
          </div>
        </div>

        <p className="experience__closing">
          As a result, users were choosing agents based more on impression than strategy, and
          were dropping off at the final execution stage because they did not fully understand
          how the AI worked.
        </p>
      </div>
    </section>
  );
}
