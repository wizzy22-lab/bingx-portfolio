import SectionHeader from '@/components/SectionHeader';

type Feature = {
  number: string;
  title: string;
  body: string;
  list: string[];
  outcome: string;
  mediaLabel: string;
  mediaMeta: string;
  mediaRight: boolean;
};

const FEATURES: Feature[] = [
  {
    number: 'FEATURE 01',
    title: 'Three questions, three agents that fit.',
    body: 'Before the catalog opens, users answer a short preference set — risk tolerance, holding horizon, involvement. The system returns a ranked shortlist of three agents with a one-line rationale each.',
    list: [
      'Three-question intake — under 30 seconds.',
      'Each shortlisted agent shows the matching reason.',
      'Users can skip and see the full catalog at any time.',
    ],
    outcome: 'Selection time dropped from a five-minute scroll to a guided minute.',
    mediaLabel: 'Personalized Recommendation',
    mediaMeta: 'Risk · Horizon · Involvement → 3 agents',
    mediaRight: true,
  },
  {
    number: 'FEATURE 02',
    title: 'Discover, Compare, and Decide as three distinct screens.',
    body: 'The flow splits what was previously one infinite list into three intentional moments — each with its own affordances and its own success state.',
    list: [
      'Discover surfaces relevant agents only.',
      'Compare puts up to three agents side-by-side.',
      'Decide confirms what the user just chose and why.',
    ],
    outcome: 'Drop-off shifted off the comparison step entirely in testing.',
    mediaLabel: 'Step-by-Step Decision Flow',
    mediaMeta: 'Discover → Compare → Decide',
    mediaRight: false,
  },
  {
    number: 'FEATURE 03',
    title: 'Strategy first, numbers second.',
    body: "Comparison cards lead with the agent's stance — its philosophy, holding period, and risk posture — before any performance number appears. Numbers are contextualised with a one-line read.",
    list: [
      'Stance, horizon, and risk shown above the fold.',
      'Returns shown with a baseline ("vs flat-hold BTC").',
      'Drawdown explained in plain language.',
    ],
    outcome: 'Users could explain their choice in one sentence afterwards.',
    mediaLabel: 'Strategy Comparison',
    mediaMeta: 'Side-by-side · 3 agents · contextual numbers',
    mediaRight: true,
  },
  {
    number: 'FEATURE 04',
    title: 'Performance you can reason about, not just stare at.',
    body: "After activation, each agent's dashboard surfaces not just P/L but the reasoning behind recent trades — entry rationale, exit trigger, and what changed.",
    list: [
      'Last three trades, annotated.',
      'Strategy adherence score.',
      'Plain-language summary of the week.',
    ],
    outcome: 'Trust was rebuilt during use, not just at signup.',
    mediaLabel: 'Embedded Performance Review',
    mediaMeta: 'Trades · adherence · weekly summary',
    mediaRight: false,
  },
];

export default function KeyFeatures() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Key Features"
          title="Four moves that turn the catalog into a decision path."
          level="h1"
        />
        <div style={{ display: 'grid', gap: 'var(--space-20)' }}>
          {FEATURES.map((f) => (
            <article
              key={f.number}
              className={`ds-split-feature ds-split-feature--dark ds-split-feature--60-40 ds-split-feature--${
                f.mediaRight ? 'media-right' : 'media-left'
              }`}
            >
              <div className="ds-split-feature__content">
                <p className="ds-eyebrow ds-eyebrow--accent-yellow">{f.number}</p>
                <h3 className="ds-h2" style={{ marginTop: 'var(--space-4)' }}>
                  {f.title}
                </h3>
                <p className="ds-body" style={{ marginTop: 'var(--space-6)' }}>
                  {f.body}
                </p>
                <ul className="ds-split-feature__list">
                  {f.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="ds-split-feature__outcome">
                  <p className="ds-body-lg">
                    <span className="ds-implication-arrow">→</span>
                    {f.outcome}
                  </p>
                </div>
              </div>
              <div className="ds-split-feature__media">
                <div
                  className="ds-media-placeholder"
                  data-aspect="4/3"
                  role="img"
                  aria-label={f.mediaLabel}
                  style={{ width: '100%', height: '100%' }}
                >
                  <span className="ds-media-placeholder__label">{f.mediaLabel}</span>
                  <span className="ds-media-placeholder__meta">{f.mediaMeta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
