const CRITERIA = [
  {
    title: '1.Investment style',
    body: 'Invest conservatively for stability  vs  invest more aggressively\nfor higher returns.',
  },
  {
    title: '2.Risk Toterance',
    body: 'A measure of how much risk  you are willing to take when investing.',
  },
  {
    title: '3.Market interpretation',
    body: 'The way users understand and evaluate investment information when making decisions.',
  },
  {
    title: '4.Trading Strategy',
    body: 'An investment approach that determines  when to buy and when to sell.',
  },
];

export default function AboutService() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow about__eyebrow">
          [ 01 — about Service ]
        </p>
        <h2 className="ds-h2 about__title">
          An <span className="about__highlight">AI investment agent service</span>,<br />
          powered by world-renowned investment philosophies.
        </h2>
        <p className="about__lede">
          AI Master is an AI trading service where users can choose between different AI
          agents based on the investment philosophies and strategy styles of well-known
          investors.
        </p>

        <p className="about__intro">Each Agents</p>

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

        <p className="about__closing">
          Each agent was designed with different approaches,  and users had to choose the
          MASTER  that best matched their investment style.
        </p>
        <p className="about__final">
          In other words, users had to decide which{' '}
          <span className="about__highlight">investment philosophy</span> they wanted to
          follow.
        </p>
      </div>
    </section>
  );
}
