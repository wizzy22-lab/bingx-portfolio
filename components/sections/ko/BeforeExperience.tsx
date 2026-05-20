const PROBLEMS = [
  {
    number: '01.',
    title: 'Too many Agents',
    quote: '너무 많은 AGENT를 한번에 비교해야했습니다.',
  },
  {
    number: '02.',
    title: 'Unclear AI Flow',
    quote: '왜 Agent와 대화를 해야하는지 이해하기 어려웠습니다.',
  },
  {
    number: '03.',
    title: 'Unfamiliar AI UX',
    quote: '새로운 AI AGENT 기반 투자 시스템을 이해하기 어려웠습니다.',
  },
  {
    number: '04.',
    title: 'Hard to compare strategies',
    quote: '전략 차이를 빠르게 이해하기 어려웠습니다.',
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
          유저들은 탐색해 보려 했지만
          <br />
          어떻게 시작해야할지 결정하지 못했습니다.
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
