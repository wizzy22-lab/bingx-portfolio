const PATTERNS = [
  {
    eyebrow: 'PATTERN 01',
    title: 'Performance is not strategy',
    body: "Users see APY but can't tell what bet the agent is making.",
  },
  {
    eyebrow: 'PATTERN 02',
    title: 'Time horizon is invisible',
    body: '"Aggressive" and "Conservative" labels mean nothing without a holding period.',
  },
  {
    eyebrow: 'PATTERN 03',
    title: 'Trust comes from explanation, not numbers',
    body: 'Users want to know why an agent did what it did, not just that it worked.',
  },
];

const QUOTES = [
  {
    quote: '"I just picked the one with the highest number. I didn\'t know what else to look at."',
    attribution: 'P02 · 28 · first-time crypto user',
  },
  {
    quote: '"The names sound like personalities, but the cards all read the same."',
    attribution: 'P04 · 33 · casual trader',
  },
  {
    quote: '"I\'d rather be told which one fits me than guess from twelve."',
    attribution: 'P05 · 41 · ex-stocks investor',
  },
];

const CLUSTERS = [
  {
    eyebrow: 'CLUSTER 01',
    title: 'Comparison is the bottleneck',
    body: "Users don't lack agents; they lack a way to compare them.",
  },
  {
    eyebrow: 'CLUSTER 02',
    title: 'Confidence is built before action',
    body: 'Trust forms during selection, not after activation.',
  },
  {
    eyebrow: 'CLUSTER 03',
    title: 'Numbers without context are noise',
    body: 'Returns and drawdown only become useful once a baseline is given.',
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

        {/* 05-1 Secondary Research */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.1 · Research · Secondary"
            title="What people say when no one's helping them choose."
            lede="Reddit, Discord, and YouTube comments from r/CryptoCurrency and BingX community threads (n ≈ 120 posts) surfaced three repeating shapes of complaint."
          />
          <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="Community comment samples"
            >
              <span className="ds-media-placeholder__label">Community Comments</span>
              <span className="ds-media-placeholder__meta">Reddit · Discord · YouTube</span>
            </div>
            <figcaption className="ds-media__caption">
              Sampled community comments — September to November.
            </figcaption>
          </figure>
          <div className="ds-impact-grid ds-impact-grid--3col-pattern">
            {PATTERNS.map((p) => (
              <article key={p.title} className="ds-insight ds-insight--dark">
                <p className="ds-insight__eyebrow">{p.eyebrow}</p>
                <h4 className="ds-insight__title">{p.title}</h4>
                <p className="ds-insight__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 05-2 Survey */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.2 · Research · Survey (n = 64)"
            title="Confidence drops before the trade even starts."
          />
          <div className="ds-stat-grid">
            <div className="ds-stat-grid__cell">
              <div className="ds-stat-grid__number">
                <span className="ds-stat-grid__number-value">68</span>
                <span className="ds-stat-grid__number-suffix">%</span>
              </div>
              <hr className="ds-stat-grid__divider" />
              <p className="ds-stat-grid__label">
                said they couldn't tell agents apart from the current list view
              </p>
            </div>
            <div className="ds-stat-grid__cell">
              <div className="ds-stat-grid__number">
                <span className="ds-stat-grid__number-value">72</span>
                <span className="ds-stat-grid__number-suffix">%</span>
              </div>
              <hr className="ds-stat-grid__divider" />
              <p className="ds-stat-grid__label">
                wanted a "help me choose" step before activating any agent
              </p>
            </div>
            <div className="ds-stat-grid__cell">
              <div className="ds-stat-grid__number">
                <span className="ds-stat-grid__number-value">54</span>
                <span className="ds-stat-grid__number-suffix">%</span>
              </div>
              <hr className="ds-stat-grid__divider" />
              <p className="ds-stat-grid__label">
                had abandoned a previous AI trading product mid-onboarding
              </p>
            </div>
          </div>
          <figure className="ds-media ds-media--full" style={{ marginTop: 'var(--space-12)' }}>
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="Confidence chart"
            >
              <span className="ds-media-placeholder__label">Confidence by Step</span>
              <span className="ds-media-placeholder__meta">Self-reported, 1–5 scale</span>
            </div>
            <figcaption className="ds-media__caption">
              Self-reported confidence by step, scaled 1–5.
            </figcaption>
          </figure>
        </div>

        {/* 05-3 Interview */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.3 · Research · Interview (n = 6)"
            title="In their own words."
          />
          <div className="ds-impact-grid ds-impact-grid--3col-pattern">
            {QUOTES.map((q) => (
              <blockquote key={q.attribution} className="ds-pull-quote">
                <p className="ds-pull-quote__quote">{q.quote}</p>
                <p className="ds-pull-quote__attribution">{q.attribution}</p>
              </blockquote>
            ))}
          </div>
        </div>

        {/* 05-4 Affinity Mapping */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.4 · Research · Affinity"
            title="Clustering 140+ observations into three themes."
            lede="Quotes and behaviors from secondary, survey, and interview data were grouped on a shared board. Three clusters emerged."
          />
          <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="Affinity mapping board"
            >
              <span className="ds-media-placeholder__label">Affinity Mapping Board</span>
              <span className="ds-media-placeholder__meta">140+ sticky notes · 3 clusters</span>
            </div>
            <figcaption className="ds-media__caption">
              Affinity board — sticky-note clustering from research synthesis.
            </figcaption>
          </figure>
          <div className="ds-impact-grid ds-impact-grid--3col-pattern">
            {CLUSTERS.map((c) => (
              <article key={c.title} className="ds-insight ds-insight--dark">
                <p className="ds-insight__eyebrow">{c.eyebrow}</p>
                <h4 className="ds-insight__title">{c.title}</h4>
                <p className="ds-insight__body">{c.body}</p>
              </article>
            ))}
          </div>
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
