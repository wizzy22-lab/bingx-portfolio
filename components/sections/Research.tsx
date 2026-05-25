const REVIEWS = [
  {
    initial: '',
    name: 'prithvisimi',
    date: 'Jan 7',
    stars: 2,
    text: 'use to difficult not good interface',
  },
  {
    initial: 'K',
    name: 'kushalkumbhakar8',
    date: 'Feb 2',
    stars: 1,
    text: "The interface feels too complex and hard to use. It's difficult to understand what to do.",
  },
];

const SURVEY_STATS = [
  {
    value: '43.5',
    text: 'Many users were not even aware that AI features existed in the service.',
  },
  {
    value: '70',
    text: 'Users expected AI to support decision-making rather than fully automate investment profits.',
  },
  {
    value: '76.9',
    text: 'Users showed willingness to use the service if the explanations were clearer.',
  },
];

const INSIGHT_GROUPS = [
  {
    variant: 'beginner',
    title: 'Beginner Users',
    cards: [
      {
        title: 'Information Overload · Structural Confusion',
        body: 'Beginner users struggled to quickly identify where important information and features were located. The complex structure and inconsistent flows were increasing navigation fatigue and leading users to drop off during the experience.',
      },
      {
        title: 'Limited Understanding of AI Features',
        body: "Beginner users struggled to understand how the AI generated recommendations and made decisions. As the reasoning behind the recommendations and the AI's responsibility boundaries became less clear, users increasingly felt that they had no control over the outcome.",
      },
    ],
  },
  {
    variant: 'advanced',
    title: 'Advanced Users',
    cards: [
      {
        title: 'Low Need for AI Automation',
        body: 'Advanced users already had their own trading principles and rhythms. They valued the process of reading the market and making decisions themselves, and often perceived AI automation as something that reduced their sense of engagement in trading.',
      },
      {
        title: 'Trust and Speed-Oriented Trading Environment',
        body: 'Advanced users were highly sensitive to factors such as execution speed, system stability, and the reliability of the trading environment. Because even small errors could directly impact financial outcomes, trust in the platform itself became a critical part of the trading experience.',
      },
    ],
  },
];

const CRITERIA = [
  {
    eyebrow: 'EVALUATION 01',
    text: 'Does the product help a user compare options?',
  },
  {
    eyebrow: 'EVALUATION 02',
    text: 'Does it offer a decision structure, not just data?',
  },
  {
    eyebrow: 'EVALUATION 03',
    text: 'Does it explain why an agent acted, not just what it did?',
  },
];

const COMPARE_ROWS = [
  ['Onboarding asks for risk profile', 'Yes — multi-step questionnaire', 'No'],
  ['Side-by-side agent comparison', 'Limited (2 portfolios)', 'Not supported'],
  ['Performance is contextualized', 'Benchmarked vs S&P/index', 'Raw % only'],
  ['Decision rationale exposed', 'Strategy doc per portfolio', 'Indicator list only'],
];

const EMPATHY = [
  { label: 'THINK', body: '"Which of these will actually make money for me?"', variant: '' },
  {
    label: 'FEEL',
    body: 'Excited about AI, anxious about losing money on the wrong choice.',
    variant: ' ds-insight--yellow',
  },
  {
    label: 'SAY',
    body: '"Just tell me which one is right for someone like me."',
    variant: ' ds-insight--dark',
  },
  {
    label: 'DO',
    body: 'Scrolls the list three times, opens two detail pages, picks neither.',
    variant: '',
  },
];

const JOURNEY_IMPLICATIONS = [
  'The compare step is where the experience breaks, not where it ends.',
  'Adding more agents would deepen the drop, not soften it.',
  'The redesign needs to insert a structure at "Compare," not before it.',
];

function SubsectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header style={{ marginBottom: 'var(--space-12)' }}>
      <p className="ds-eyebrow ds-eyebrow--accent-blue">{eyebrow}</p>
      <h3
        className="ds-h2"
        style={{ margin: 'var(--space-4) 0 0 0', maxWidth: '820px' }}
      >
        {title}
      </h3>
      {lede && (
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-6) 0 0 0',
            maxWidth: '720px',
          }}
        >
          {lede}
        </p>
      )}
    </header>
  );
}

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="section-inner">
        <header style={{ marginBottom: 'var(--space-20)' }}>
          <p className="ds-eyebrow ds-eyebrow--accent-yellow">Research</p>
          <h2 className="ds-h1" style={{ margin: 'var(--space-4) 0 0 0', maxWidth: '900px' }}>
            Listening before designing — secondary, primary, and competitive.
          </h2>
          <hr
            className="ds-divider ds-divider--accent-yellow"
            style={{ marginTop: 'var(--space-10)' }}
          />
        </header>

        {/* 03.1 Secondary Research — Community Source (Figma 124:54) */}
        <div className="research-community">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-community__eyebrow">
            [ 03.1 — secondary research - Community source]
          </p>
          <h2 className="ds-h2 research-community__title">
            Community Reactions Revealed Repeated Patterns of Confusion
          </h2>

          <div className="research-community__layout">
            <figure className="research-community__collage">
              <div className="research-community__collage-img" aria-hidden />
              <figcaption className="research-community__collage-caption">
                [Community Reactions - Reddit · Google Reviews · App Store Reviews]
              </figcaption>
            </figure>

            <div className="research-community__cards">
              {REVIEWS.map((r) => (
                <article key={r.name} className="review-card">
                  <header className="review-card__head">
                    <div className="review-card__avatar" aria-hidden>
                      {r.initial}
                    </div>
                    <div className="review-card__meta">
                      <span className="review-card__name">{r.name}</span>
                      <span className="review-card__date">{r.date}</span>
                    </div>
                  </header>
                  <div
                    className="review-card__stars"
                    role="img"
                    aria-label={`${r.stars} out of 5 stars`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={
                          n <= r.stars ? 'review-card__star is-filled' : 'review-card__star'
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="review-card__text">{r.text}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="research-community__closing">
            Users were struggling to understand how to use the service.
          </p>
        </div>

        {/* 03.2 Secondary Research — Survey (Figma 129:54) */}
        <div className="research-survey">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-survey__eyebrow">
            [ 03.2 — secondary research - Survey]
          </p>
          <p className="research-survey__intro">
            To verify whether these issues were consistently occurring across users, a survey
            was conducted.
          </p>

          <div className="research-survey__layout">
            <figure className="research-survey__collage">
              <div className="research-survey__collage-img" aria-hidden />
              <figcaption className="research-survey__collage-caption">
                [Survey Findings - User Perception of AI Trading Features]
              </figcaption>
            </figure>

            <div className="research-survey__stats">
              {SURVEY_STATS.map((s, i) => (
                <div key={s.value} className={`survey-stat survey-stat--${i + 1}`}>
                  <p className="survey-stat__number">
                    <span className="survey-stat__value">{s.value}</span>
                    <span className="survey-stat__suffix">%</span>
                  </p>
                  <p className="survey-stat__text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="research-survey__closing">
            Rather than rejecting AI itself, users were hesitating to use the feature because
            they did not fully understand its purpose, usage flow, or how to interpret the
            results.
          </p>
          <p className="research-survey__closing">
            However, the survey alone was not enough to clearly explain why these reactions
            were occurring. In particular, it was necessary to understand how users with
            different levels of trading experience perceived AI Master differently.
          </p>
        </div>

        {/* 04 Primary Research — Interview (Figma 133:54) */}
        <div className="research-primary">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-primary__eyebrow">
            [ 04 — Primary research - interview]
          </p>
          <p className="research-primary__intro">
            Interviews were conducted separately with beginner and advanced users.
          </p>
          <div className="research-duo research-duo--interview">
            <figure className="research-duo__figure">
              <div className="research-duo__img" aria-hidden />
              <figcaption className="research-duo__caption">[Beginner users - ]</figcaption>
            </figure>
            <figure className="research-duo__figure">
              <div className="research-duo__img" aria-hidden />
              <figcaption className="research-duo__caption">[Advance User - ]</figcaption>
            </figure>
          </div>
        </div>

        {/* 05 Analysis (Figma 133:54) */}
        <div className="research-analysis">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-analysis__eyebrow">
            [ 05 — Analysis]
          </p>
          <p className="research-analysis__intro">
            After analyzing the interviews, we found that although users expressed themselves
            differently, similar emotional and behavioral patterns repeatedly appeared. To
            better structure these patterns, we categorized user statements and grouped
            similar contexts together through a color-coding process.
          </p>
          <div className="research-duo research-duo--analysis">
            <figure className="research-duo__figure">
              <div className="research-duo__img" aria-hidden />
              <figcaption className="research-duo__caption">[Beginner users]</figcaption>
            </figure>
            <figure className="research-duo__figure">
              <div className="research-duo__img" aria-hidden />
              <figcaption className="research-duo__caption">[Advance User]</figcaption>
            </figure>
          </div>
          <p className="research-analysis__closing">
            Through color coding and affinity mapping of the interviews, we found that users
            perceived AI Master in completely different ways depending on their level of
            trading experience.
          </p>
        </div>

        {/* Insight Section (Figma 139:54) */}
        <div className="research-insight">
          <div className="research-insight__groups">
            {INSIGHT_GROUPS.map((g) => (
              <article key={g.title} className={`insight-group insight-group--${g.variant}`}>
                <h3 className="insight-group__title">{g.title}</h3>
                {g.cards.map((c) => (
                  <div key={c.title} className="insight-group__card">
                    <h4 className="insight-group__card-title">{c.title}</h4>
                    <p className="insight-group__card-body">{c.body}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-insight__eyebrow">
            insight
          </p>
          <p className="research-insight__closing">
            As a result, AI Master felt overly complex for beginner users, while failing to
            provide strong enough motivation for advanced users.
          </p>
          <p className="research-insight__closing">
            In particular, many advanced users simply did not want AI involvement, because they
            enjoyed the act of trading itself.
          </p>
          <p className="research-insight__closing research-insight__closing--lead">
            Therefore, this project focused on helping beginner users{' '}
            <span className="research-insight__highlight">
              more easily understand strategy trading and confidently enter the experience.
            </span>
          </p>
        </div>

        {/* 05-5 Competitive Analysis */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.5 · Research · Competitive"
            title="Where AI Master sits today, and where it could sit instead."
          />
          <ul className="ds-criteria-list">
            {CRITERIA.map((c) => (
              <li key={c.eyebrow} className="ds-criteria-list__item">
                <span className="ds-criteria-list__dot" aria-hidden="true" />
                <p className="ds-criteria-list__eyebrow">{c.eyebrow}</p>
                <p className="ds-criteria-list__text">{c.text}</p>
              </li>
            ))}
          </ul>
          <table className="compare-table" aria-label="Competitive comparison">
            <thead>
              <tr>
                <th scope="col">Criterion</th>
                <th scope="col">Typical Robo-Advisor</th>
                <th scope="col">BingX AI Master · Today</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 05-6 Empathy Map */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.6 · Research · Empathy Map"
            title="Inside the head of a first-time user choosing an agent."
          />
          <div className="ds-impact-grid ds-impact-grid--4col">
            {EMPATHY.map((q) => (
              <article key={q.label} className={`ds-insight${q.variant}`}>
                <p className="ds-insight__eyebrow">{q.label}</p>
                <p className="ds-insight__body" style={{ marginTop: 'var(--space-4)' }}>
                  {q.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* 05-7 Journey Map */}
        <div>
          <SubsectionHeader
            eyebrow="05.7 · Research · Journey"
            title="Confidence drops exactly where comparison should begin."
          />
          <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="User journey map"
            >
              <span className="ds-media-placeholder__label">Journey Map · Emotion Curve</span>
              <span className="ds-media-placeholder__meta">
                Discover → Browse → Compare → Decide → Activate
              </span>
            </div>
            <figcaption className="ds-media__caption">
              Emotional journey across Discover → Browse → Compare → Decide → Activate.
            </figcaption>
          </figure>
          <ul className="ds-research-finding__implication-list">
            {JOURNEY_IMPLICATIONS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
