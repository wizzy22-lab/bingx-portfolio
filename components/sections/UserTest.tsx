import SectionHeader from '@/components/SectionHeader';

const WORKED = [
  'Three-question intake felt fast, not gated.',
  'Side-by-side comparison was the moment testers said "now I get it."',
  'Plain-language drawdown read more clearly than the percentage.',
];

const DIDNT = [
  'Two testers wanted a fourth question about portfolio size.',
  'The "skip to full catalog" link was missed on first pass.',
  'Trade-log annotations read as legalese on first read; needs a copy pass.',
];

export default function UserTest() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Usability Test (n = 8)"
          title="Measured against the System Usability Scale."
          level="h1"
        />

        <div
          className="ds-stat-standalone"
          style={{ margin: '0 auto var(--space-20) auto' }}
        >
          <div className="ds-stat-standalone__number">
            <span>88</span>
          </div>
          <hr className="ds-stat-standalone__divider" />
          <p className="ds-stat-standalone__label">SUS Score</p>
          <p className="ds-stat-standalone__caption">
            Above the 85th percentile — "excellent" on the SUS benchmark.
          </p>
        </div>

        <div className="ds-need-pain-grid">
          <article className="ds-insight">
            <p className="ds-insight__eyebrow">What Worked</p>
            <ul className="ds-numbered-step__list" style={{ marginTop: 'var(--space-6)' }}>
              {WORKED.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </article>
          <article className="ds-insight ds-insight--dark">
            <p className="ds-insight__eyebrow">What Didn't</p>
            <ul className="ds-numbered-step__list" style={{ marginTop: 'var(--space-6)' }}>
              {DIDNT.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
