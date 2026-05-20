const CRITERIA = [
  {
    title: '01. Investment Style',
    body: 'Conservative investing\nVS\nAggressive investing for higher returns',
  },
  {
    title: '02. Risk Threshold',
    body: 'The level of risk one is willing\nto accept when investing',
  },
  {
    title: '03. Market Interpretation',
    body: 'How investment information is\nunderstood and judged',
  },
  {
    title: '04. Trading Strategy',
    body: 'The method of deciding\nwhen to buy and when to sell',
  },
];

export default function AboutService() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow about__eyebrow">
          [ 01 — About Service ]
        </p>
        <h2 className="ds-h2 about__title">
          An AI investment agent service
          <br />
          built on world-class trading philosophies
        </h2>
        <p className="ds-body about__lede">
          AI Master is an AI trading service that lets users choose between different AI
          Agents — each grounded in the investment philosophy and strategy of renowned
          investors.
        </p>

        <p className="ds-body about__intro">Each Agent is</p>

        <div className="about__grid">
          {CRITERIA.map((c) => (
            <div key={c.title} className="about__criterion">
              <div className="about__icon" aria-hidden />
              <article className="about__card">
                <h3 className="about__card-title">{c.title}</h3>
                <p className="about__card-body">{c.body}</p>
              </article>
            </div>
          ))}
        </div>

        <p className="ds-body about__closing">
          designed differently across these dimensions —
          <br />
          users had to choose a MASTER that matched their own investment style
        </p>
        <p className="about__final">
          In other words, users had to choose which investment philosophy to follow.
        </p>
      </div>
    </section>
  );
}
