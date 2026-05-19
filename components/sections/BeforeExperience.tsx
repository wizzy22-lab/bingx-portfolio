import SectionHeader from '@/components/SectionHeader';

const PROBLEMS = [
  {
    eyebrow: 'PROBLEM 01',
    title: 'Unclear differences',
    body: 'Agent cards repeat the same metrics in the same order — nothing visually signals what makes each one distinct.',
  },
  {
    eyebrow: 'PROBLEM 02',
    title: 'No decision criteria',
    body: 'Users have no framework for what "good" looks like, so they default to whichever number is biggest.',
  },
  {
    eyebrow: 'PROBLEM 03',
    title: 'Information overload',
    body: 'Every card pushes returns, drawdown, sharpe, and trade count — all weighted equally, all at once.',
  },
  {
    eyebrow: 'PROBLEM 04',
    title: 'Impression-based choice',
    body: 'When comparison fails, people pick by name, color, or position in the list.',
  },
];

export default function BeforeExperience() {
  return (
    <section id="problem" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Before · Current Experience"
          title="Users could see every agent. They still couldn't pick one."
        />

        <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-16)' }}>
          <div
            className="ds-media-placeholder"
            data-aspect="16/9"
            role="img"
            aria-label="Existing BingX AI Master agent list screenshot"
          >
            <span className="ds-media-placeholder__label">Existing UI · Agent List</span>
            <span className="ds-media-placeholder__meta">Captured before redesign</span>
          </div>
          <figcaption className="ds-media__caption">
            Existing BingX AI Master agent list — captured before redesign.
          </figcaption>
        </figure>

        <div className="ds-impact-grid ds-impact-grid--4col">
          {PROBLEMS.map((p) => (
            <article key={p.title} className="ds-insight ds-insight--dark">
              <p className="ds-insight__eyebrow">{p.eyebrow}</p>
              <h3 className="ds-insight__title">{p.title}</h3>
              <p className="ds-insight__body">{p.body}</p>
            </article>
          ))}
        </div>

        <blockquote
          className="ds-pull-quote ds-pull-quote--dark"
          style={{ marginTop: 'var(--space-16)' }}
        >
          <p className="ds-pull-quote__quote">
            Exposure is not selection. Showing more agents didn't help users choose one.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
