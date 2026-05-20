const PROBLEMS = [
  {
    number: '01.',
    title: 'Too many Agents',
    quote: 'I had to compare too many Agents at once.',
  },
  {
    number: '02.',
    title: 'Unclear AI Flow',
    quote: "It wasn't obvious why I had to chat with an Agent.",
  },
  {
    number: '03.',
    title: 'Unfamiliar AI UX',
    quote: 'An AI-Agent-based investing system was hard to grasp.',
  },
  {
    number: '04.',
    title: 'Hard to compare strategies',
    quote: "Strategy differences weren't quick to understand.",
  },
];

export default function BeforeExperience() {
  return (
    <section id="problem" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow experience__eyebrow">
          [ 02 — Current Experience ]
        </p>
        <h2 className="ds-h2 experience__title">
          Users tried to explore,
          <br />
          but couldn&apos;t decide how to begin.
        </h2>

        <div className="experience__grid">
          {PROBLEMS.map((p) => (
            <article key={p.number} className="experience__card">
              <header className="experience__head">
                <span className="experience__number">{p.number}</span>
                <h3 className="experience__title-h3">{p.title}</h3>
              </header>
              <blockquote className="experience__quote">{p.quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
