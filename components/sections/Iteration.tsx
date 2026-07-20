import RevealHeading from '@/components/RevealHeading';

const WANTED = [
  'how far the AI handles things automatically',
  'when and in what way a strategy ends',
  'whether they can stop a strategy midway',
  'how the capital is settled after it ends',
];

export default function Iteration() {
  return (
    <section id="iteration" className="section iteration">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow iteration__eyebrow">
          [ 08.2 — Iteration ]
        </p>
        <RevealHeading level="h2" className="ds-h2 iteration__title">
          Letting users tune the strategy themselves dissolved the value of handing it to AI
        </RevealHeading>
        <p className="iteration__intro">
          Early on we explored letting users set the buy and sell conditions themselves, so they
          could control how their own money moves.
        </p>
        <p className="iteration__intro">
          But that approach put users back in the position of understanding and designing an
          investment strategy. In the end it also weakened AI Master&rsquo;s core value —
          &ldquo;the AI decides and trades on your behalf.&rdquo;
        </p>

        <div className="iteration__body">
          {/* Left: solution-reframing diagram (Figma 634×476) */}
          {/* TODO(figma): the reframe now lists four items (automation scope / how it ends /
              stopping / settlement) — check the diagram matches */}
          <figure className="iteration__panel">
            <img
              className="iteration__img media-fill"
              src="/images/ideation/solution-redefine-process.png"
              alt=""
              aria-hidden
            />
            <figcaption className="iteration__caption">
              [ Reframing Control — Redefining the Solution Direction Based on Research ]
            </figcaption>
          </figure>

          {/* Right: reframing narrative */}
          <div className="iteration__text">
            <p className="iteration__label">Redefining control</p>

            <p className="iteration__para">
              Going back through the interviews, what beginner participants wanted was not the
              authority to set every trading condition themselves.
            </p>
            <p className="iteration__para">They wanted to know:</p>
            <ul className="iteration__list">
              {WANTED.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <p className="iteration__para">
              So instead of adding more settings, the final execution screen explains up front
              that the AI buys, sells and closes the position automatically according to the
              strategy.
            </p>
            <p className="iteration__para">
              How to stop a strategy, and how capital is settled once it ends, are also
              confirmable before execution.
            </p>
            <p className="iteration__para">
              Without designing a trading strategy themselves, users can decide whether to
              execute while understanding what happens to their money and when they can step in.
            </p>

            <p className="iteration__para">
              In this project we redefined control not as the ability to operate everything
              manually, but as{' '}
              <span className="iteration__hl">
                the sense of being able to predict what the AI does and where you can intervene
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
