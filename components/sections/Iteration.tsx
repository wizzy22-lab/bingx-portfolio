import RevealHeading from '@/components/RevealHeading';

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
          The first idea for building trust was to let users set the buy and sell conditions
          themselves. We thought that if they could decide how their own money moves, their
          anxiety would ease.
        </p>
        <p className="iteration__intro">
          But that approach put users back in the position of understanding and designing an
          investment strategy. In the end it also weakened AI Master&rsquo;s core value — the AI
          deciding and trading on the user&rsquo;s behalf.
        </p>

        <div className="iteration__body">
          {/* Left: solution-reframing diagram (Figma 634×476) */}
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
            <p className="iteration__para">
              What beginner participants wanted was not more setup authority, but to know the
              AI&rsquo;s judgment and when they could step in. So instead of manual settings, we
              shifted toward showing who decides at each step and when the user can intervene.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
