const CARDS = [
  {
    eyebrow: 'EXISTING EXPERIENCE',
    title: 'An unstructured agent list ranked by recent return.',
    body: 'Users can scroll but cannot reason about what they are seeing.',
  },
  {
    eyebrow: 'GAP',
    title: 'No moment in the flow that explicitly helps the user narrow choices.',
    body: "The product treats selection as discovery — but they're not the same job.",
  },
  {
    eyebrow: 'RESULT',
    title: 'High exploration, low activation, repeated abandonment.',
    body: 'Users finish the session more uncertain than when they started.',
  },
];

export default function Define() {
  return (
    <section id="define" className="section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="ds-eyebrow ds-eyebrow--accent-yellow">Define</p>
        <h2
          className="ds-display"
          style={{ margin: 'var(--space-6) auto 0', maxWidth: '1100px' }}
        >
          The problem wasn't understanding AI. It was the absence of a decision structure.
        </h2>
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-10) auto 0',
            maxWidth: '720px',
          }}
        >
          Users didn't need a glossary or a tutorial. They needed a sequence — a way to
          narrow twelve options into one that fits.
        </p>
      </div>
      <div
        className="section-inner ds-impact-grid ds-impact-grid--3col-pattern"
        style={{ marginTop: 'var(--space-16)' }}
      >
        {CARDS.map((c) => (
          <article key={c.eyebrow} className="ds-insight ds-insight--dark">
            <p className="ds-insight__eyebrow">{c.eyebrow}</p>
            <h3 className="ds-insight__title">{c.title}</h3>
            <p className="ds-insight__body">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
