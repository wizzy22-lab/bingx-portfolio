const STORY_STEPS = [
  {
    counter: '01',
    caption: 'Understand',
    title: 'Understand preferences',
    body: 'User answers three short questions about risk, horizon, and involvement.',
  },
  {
    counter: '02',
    caption: 'Compare',
    title: 'Compare strategies',
    body: 'A shortlist of three agents is generated; the user sees them side-by-side with explanations.',
  },
  {
    counter: '03',
    caption: 'Choose',
    title: 'Choose an agent',
    body: 'User activates a single agent with a clear summary of what they just chose and why.',
  },
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

export default function Ideation() {
  return (
    <section id="ideation" className="section">
      <div className="section-inner">
        <header style={{ marginBottom: 'var(--space-20)' }}>
          <p className="ds-eyebrow ds-eyebrow--accent-yellow">Ideation</p>
          <h2 className="ds-h1" style={{ margin: 'var(--space-4) 0 0 0', maxWidth: '900px' }}>
            From thirty ideas to one tightly scoped MVP.
          </h2>
          <hr
            className="ds-divider ds-divider--accent-yellow"
            style={{ marginTop: 'var(--space-10)' }}
          />
        </header>

        {/* 08-1 */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="08.1 · Ideation · Categorization"
            title="Grouping 30+ feature ideas into four jobs."
          />
          <figure className="ds-media ds-media--full">
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="Feature categorization board"
            >
              <span className="ds-media-placeholder__label">Feature Categorization Board</span>
              <span className="ds-media-placeholder__meta">Learn · Compare · Decide · Review</span>
            </div>
            <figcaption className="ds-media__caption">
              Ideas were grouped by the user job they served: Learn, Compare, Decide, Review.
            </figcaption>
          </figure>
        </div>

        {/* 08-2 */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="08.2 · Ideation · User Story"
            title='From "show me everything" to "help me choose."'
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-6)',
            }}
            className="user-story-grid"
          >
            {STORY_STEPS.map((s) => (
              <article key={s.counter} className="ds-numbered-step ds-numbered-step--cream">
                <div className="ds-numbered-step__content">
                  <span className="ds-numbered-step__counter">{s.counter}</span>
                  <p className="ds-numbered-step__caption">{s.caption}</p>
                  <hr className="ds-numbered-step__divider" />
                  <h4 className="ds-numbered-step__title">{s.title}</h4>
                  <p className="ds-numbered-step__body">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
          <style>{`
            @media (min-width: 768px) {
              .user-story-grid { grid-template-columns: repeat(3, 1fr); }
            }
          `}</style>
        </div>

        {/* 08-3 */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="08.3 · Ideation · Prioritization"
            title="Impact × Effort decided the MVP scope."
            lede="Twelve candidate features were plotted on a 2×2. Anything in the high-impact / low-effort quadrant became Phase 1. The recommendation step and side-by-side compare landed there together."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-12)',
              alignItems: 'center',
            }}
            className="prioritization-grid"
          >
            <div className="matrix-2x2" aria-hidden="true">
              <div>High Impact · Low Effort</div>
              <div>High Impact · High Effort</div>
              <div>Low Impact · Low Effort</div>
              <div>Low Impact · High Effort</div>
            </div>
            <p className="ds-body-lg" style={{ color: 'var(--text-secondary)' }}>
              <span className="ds-implication-arrow">→</span>
              Personalized recommendation + comparison view ship together, or neither
              ships.
            </p>
          </div>
          <style>{`
            @media (min-width: 768px) {
              .prioritization-grid { grid-template-columns: 1fr 1fr; }
            }
          `}</style>
        </div>

        {/* 08-4 */}
        <div>
          <SubsectionHeader
            eyebrow="08.4 · Ideation · Crazy 8s"
            title="Eight directions for the comparison view in eight minutes."
          />
          <figure className="ds-media ds-media--full">
            <div
              className="ds-media-placeholder"
              data-aspect="16/9"
              role="img"
              aria-label="Crazy 8s sketch grid"
            >
              <span className="ds-media-placeholder__label">Crazy 8s Sketch Grid</span>
              <span className="ds-media-placeholder__meta">8 rapid alternatives · 3 carried forward</span>
            </div>
            <figcaption className="ds-media__caption">
              Sketch grid — eight rapid alternatives, three carried forward to wireframes.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
