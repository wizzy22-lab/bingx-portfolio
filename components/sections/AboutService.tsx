import SectionHeader from '@/components/SectionHeader';

const AGENTS = [
  {
    eyebrow: 'AGENT 01',
    title: 'Buffett Style',
    body: 'Value-led. Holds positions through volatility and buys conviction over momentum.',
  },
  {
    eyebrow: 'AGENT 02',
    title: 'Aggressive Trader',
    body: 'High-frequency. Captures short-term swings with tight stop-losses and rapid rotation.',
  },
  {
    eyebrow: 'AGENT 03',
    title: 'Long-Term Investor',
    body: 'Patience over noise. Builds positions over weeks; ignores intraday signal.',
  },
];

export default function AboutService() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="About the Service"
          title="Philosophy-based trading agents, made approachable."
          lede="BingX AI Master lets users delegate crypto trades to AI agents — each one built around a distinct investment philosophy. Instead of tuning indicators or writing scripts, a user picks an agent whose mindset matches their own risk appetite and timeframe."
        />
        <div
          className="ds-impact-grid ds-impact-grid--3col-pattern"
          style={{ marginTop: 'var(--space-12)' }}
        >
          {AGENTS.map((agent) => (
            <article key={agent.title} className="ds-insight">
              <p className="ds-insight__eyebrow">{agent.eyebrow}</p>
              <h3 className="ds-insight__title">{agent.title}</h3>
              <p className="ds-insight__body">{agent.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
