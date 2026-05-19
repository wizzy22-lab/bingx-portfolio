const FLOW = [
  {
    counter: '01',
    title: 'Too many options',
    body: 'Twelve+ agents shown at once, with no obvious ordering.',
  },
  {
    counter: '02',
    title: 'No comparison criteria',
    body: "Users couldn't articulate what should make one agent better than another for them.",
  },
  {
    counter: '03',
    title: 'Reliance on impressions',
    body: 'Surface details — chart color, name, position — became the de facto signal.',
  },
  {
    counter: '04',
    title: 'Decision fatigue',
    body: 'Comparing identical-looking cards turned a 30-second task into a five-minute spiral.',
  },
  {
    counter: '05',
    title: 'Drop-off',
    body: 'Many users abandoned the flow before activating a single agent.',
  },
];

export default function Problem() {
  return (
    <section className="section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="ds-eyebrow ds-eyebrow--accent-yellow">The Problem</p>
        <h2
          className="ds-display"
          style={{
            margin: 'var(--space-6) auto 0',
            maxWidth: '1100px',
          }}
        >
          Users could explore, but could not decide.
        </h2>
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-10) auto 0',
            maxWidth: '720px',
          }}
        >
          The product surfaced every available agent, but the experience stopped short of
          the moment that actually matters: making a confident choice. Drop-off clustered
          at the comparison step, not at discovery.
        </p>
        <hr
          className="ds-divider ds-divider--accent-yellow"
          style={{ margin: 'var(--space-16) auto 0', maxWidth: '120px' }}
        />
      </div>

      <div
        className="section-inner"
        style={{
          marginTop: 'var(--space-16)',
          display: 'grid',
          gap: 'var(--space-6)',
          maxWidth: '720px',
        }}
      >
        {FLOW.map((step) => (
          <article key={step.counter} className="ds-numbered-step">
            <div className="ds-numbered-step__content">
              <span className="ds-numbered-step__counter">{step.counter}</span>
              <hr className="ds-numbered-step__divider" />
              <h3 className="ds-numbered-step__title">{step.title}</h3>
              <p className="ds-numbered-step__body">{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
