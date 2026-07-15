import RevealHeading from '@/components/RevealHeading';

const TAGS = [
  'AI Agents',
  'Crypto Trading',
  'Decision UX',
  'Fintech',
  'Strategy Comparison',
  'Explainable AI',
];

const META = [
  { label: 'ROLE', value: 'Product Designer' },
  { label: 'SCOPE', value: 'Research · IA · Visual · Prototype · Usability Test' },
  { label: 'DURATION', value: '8 weeks' },
  { label: 'TEAM', value: '2 Designers' },
  { label: 'MY ROLE', value: '[위지 확인: 예 — Research design · IA · Onboarding & comparison flow UI]' },
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
              A project redesigned around a decision-focused flow, helping users compare
              and choose AI agents more clearly based on the investment philosophies of
              legendary investors.
            </p>
            <div className="hero__tags">
              {TAGS.map((tag) => (
                <span key={tag} className="ds-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <img
            className="ds-media-placeholder media-fill"
            data-aspect="4/3"
            src="/images/hero/hero-thumbnail.png"
            alt="Final UI mockup — preference setup, agent comparison, and decision flow"
          />
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
