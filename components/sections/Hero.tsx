import RevealHeading from '@/components/RevealHeading';

const TAGS = ['AI Agents', 'Crypto Trading', 'Decision UX'];

const META = [
  { label: 'ROLE', value: 'Product Designer' },
  { label: 'SCOPE', value: 'Research · IA · Visual · Prototype · Usability Test' },
  { label: 'DURATION', value: '8 weeks' },
  { label: 'TEAM', value: '2 Designer' },
];

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="section-inner">
        <div className="hero">
          <div>
            <RevealHeading level="h1" className="ds-display hero__title">
              BingX
              <br />
              AI Master
            </RevealHeading>
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
            data-aspect="4/3"
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
