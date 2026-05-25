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

        {/* 06 Competitor Research (Figma 147:74) */}
        <div className="research-competitor">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-competitor__eyebrow">
            [ 06 — Competitor research]
          </p>
          <h2 className="ds-h2 research-competitor__title">
            Other Investment Services Guided
            <br />
            <span className="research-competitor__highlight">Decisions Step-by-Step</span>, but
            AI Master Did Not
          </h2>

          <div className="research-competitor__layout">
            <figure className="research-competitor__figure">
              <div className="research-competitor__img" aria-hidden />
              <figcaption className="research-competitor__caption">
                [Comparing Decision Frameworks Across Investment Platforms
                <br />
                Source : Carmignac · Robo-advisor · Fund Service Interfaces]
              </figcaption>
            </figure>

            <div className="research-competitor__copy">
              <p>
                Robo-advisors and fund platforms guided users step by step through investment
                preferences, option comparisons, and final decision-making flows. They were
                also designed around clear decision criteria such as expected returns, risk
                levels, and investment periods, helping users make choices with greater
                confidence.
              </p>
              <p>
                In contrast, AI Master presented strategies through investor personas, without
                clearly connecting comparison criteria to the recommendation flow. As a result,
                users relied more on impressions such as imagery and atmosphere rather than
                making logical strategy comparisons.
              </p>
              <p>
                However, once real money became involved, this unclear decision structure
                quickly turned into anxiety, causing many users to drop off before reaching the
                final decision stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
