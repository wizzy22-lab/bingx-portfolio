import RevealHeading from '@/components/RevealHeading';

const FLOWS = [
  { label: 'Get a recommendation by chatting', steps: ['Open chat', 'Talk to the AI', 'Strategy recommended'] },
  { label: 'Browse it yourself', steps: ['Set investment style', 'Master recommended', 'Browse & pick a strategy'] },
];

const MERGED = [
  'Review strategy details',
  'Confirm capital & automation scope',
  'Execute strategy',
  'Track progress',
  'Exit & settle',
];

export default function InformationArchitecture() {
  return (
    <section id="information-architecture" className="section ia">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ia__eyebrow">
          [ 08.4 — Information Architecture ]
        </p>
        <RevealHeading level="h2" className="ds-h2 ia__title">
          Two different ways of exploring, connected into one path to execution
        </RevealHeading>

        <div className="ia__body">
          {/* Left: IA diagram image placeholder (Figma 634×357) */}
          {/* TODO(figma): 08.4 now keeps two entry paths that merge — replace if the diagram
              still shows a single flow */}
          <figure className="ia__panel">
            <img
              className="ia__placeholder media-fill"
              src="/images/ideation/ia.png"
              alt=""
              aria-hidden
            />
            <figcaption className="ia__caption">
              [ Decision Flow Information Architecture ]
            </figcaption>
          </figure>

          {/* Right: redesign rationale */}
          <div className="ia__text">
            <p className="ia__para">
              We did not force the way users find a strategy into a single path.
            </p>
            <p className="ia__para">
              We kept both — one for users who want a recommendation through conversation with
              the AI, and one for users who want to browse against their own investment style.
            </p>

            {FLOWS.map((flow) => (
              <div key={flow.label} className="ia__flow">
                <p className="ia__flow-label">{flow.label}</p>
                <ol className="ia__flow-steps">
                  {flow.steps.map((step) => (
                    <li key={step} className="ia__flow-step">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}

            <p className="ia__para">The two paths merge after a strategy is selected.</p>

            <div className="ia__flow">
              <ol className="ia__flow-steps">
                {MERGED.map((step) => (
                  <li key={step} className="ia__flow-step">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <p className="ia__para">
              Whichever way a user comes in — chat or direct browsing — they confirm what the AI
              does and where they can intervene in exactly the same way before execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
