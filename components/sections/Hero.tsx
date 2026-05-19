const TAGS = ['AI Agents', 'Crypto Trading', 'Decision UX', 'Dark Mode', 'Mobile First'];

const META = [
  { label: 'ROLE', value: 'Product Designer (Lead, end-to-end)' },
  { label: 'SCOPE', value: 'Research · IA · Visual · Prototype · Usability Test' },
  { label: 'DURATION', value: '8 weeks · Solo case study' },
  { label: 'TEAM', value: '1 Designer (independent) · Reviewed with 2 PMs' },
];

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="section-inner">
        <div className="hero">
          <div>
            <p className="ds-eyebrow ds-eyebrow--accent-yellow">
              Case Study · Crypto Trading UX
            </p>
            <h1 className="ds-display hero__title">BingX AI Master</h1>
            <p className="ds-body-lg hero__subtitle">
              Designing a decision structure for AI-driven crypto trading — so first-time
              investors can choose an agent with confidence, not impressions.
            </p>
            <div className="hero__tags">
              {TAGS.map((tag) => (
                <span key={tag} className="ds-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className="ds-media-placeholder"
            data-aspect="3/2"
            role="img"
            aria-label="Final UI mockup — preference setup, agent comparison, and decision flow"
          >
            <span className="ds-media-placeholder__label">Final UI Mockup</span>
            <span className="ds-media-placeholder__meta">
              Preference · Comparison · Decision flow
            </span>
          </div>
        </div>
        <div className="hero__meta">
          {META.map((row) => (
            <div key={row.label} className="hero__meta-row">
              <p className="ds-eyebrow">{row.label}</p>
              <p className="ds-body">{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
