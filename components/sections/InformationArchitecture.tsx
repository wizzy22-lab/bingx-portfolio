const STAGES = [
  { head: 'Onboarding', items: ['Identity (KYC)', 'Risk tendency test', 'Investment style test'] },
  { head: 'Agent choice', items: ['AI Recommendation', 'Marketplace (Options)', 'Agent Performance'] },
  { head: 'Strategy choice', items: ['Strategy Options', 'Backtesting data', 'Risk parameters'] },
  { head: 'Invest', items: ['Asset allocation info', 'Setting amount', 'Review & Execute'] },
  { head: 'Management', items: ['Dashboard', 'Portfolio', 'Auto Rebalancing'] },
];

export default function InformationArchitecture() {
  return (
    <section id="information-architecture" className="section ia">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ia__eyebrow">
          [ 08.4 — Information architecture ]
        </p>
        <h2 className="ds-h2 ia__title">
          The information architecture was redesigned around the user&rsquo;s decision-making
          flow.
        </h2>

        <div className="ia__body">
          {/* Left: Decision Flow IA diagram (Figma 160:1928, 634×357) */}
          <figure className="ia__panel">
            <div className="ia__diagram">
              <p className="ia__diagram-title">
                Decision Flow
                <br />
                Information Architecture
              </p>
              <div className="ia__columns">
                {STAGES.map((stage) => (
                  <div className="ia__column" key={stage.head}>
                    <div className="ia__node ia__node--head">{stage.head}</div>
                    {stage.items.map((item) => (
                      <div className="ia__node" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <figcaption className="ia__caption">
              [ Decision Flow Information Architecture ]
            </figcaption>
          </figure>

          {/* Right: redesign rationale */}
          <div className="ia__text">
            <p className="ia__para">
              In the original IA, strategies and features were mixed together, making it
              difficult for users to understand the current flow.
            </p>
            <p className="ia__para">
              In this redesign, the decision-making process was restructured into
            </p>
            <ul className="ia__list">
              <li>understanding investment tendencies</li>
              <li>comparing strategies</li>
              <li>making a final choice</li>
            </ul>
            <p className="ia__para">
              The information and features needed at each stage were clearly separated, allowing
              the experience to flow more naturally from exploration to execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
