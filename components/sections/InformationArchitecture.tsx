import RevealHeading from '@/components/RevealHeading';

export default function InformationArchitecture() {
  return (
    <section id="information-architecture" className="section ia">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ia__eyebrow">
          [ 08.4 — Information architecture ]
        </p>
        <RevealHeading level="h2" className="ds-h2 ia__title">
          The information architecture was redesigned around the user&rsquo;s decision-making
          flow.
        </RevealHeading>

        <div className="ia__body">
          {/* Left: IA diagram image placeholder (Figma 634×357) */}
          <figure className="ia__panel">
            <div className="ia__placeholder" aria-hidden />
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
