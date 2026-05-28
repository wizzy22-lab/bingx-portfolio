import RevealHeading from '@/components/RevealHeading';

const UNDERSTAND = [
  'who was currently making the decision',
  'why the AI was taking action',
  'and when they should step in',
];

const COMMUNICATE = [
  'the decision-making flow at each stage',
  'and the moments where user intervention was needed',
];

export default function Iteration() {
  return (
    <section id="iteration" className="section iteration">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow iteration__eyebrow">
          [ 08.2 — Iteration]
        </p>
        <RevealHeading level="h2" className="ds-h2 iteration__title">
          The moment users started manually adjusting strategies,
          <br />
          the core identity of AI Master began to lose clarity.
        </RevealHeading>

        <div className="iteration__body">
          {/* Left: solution-reframing diagram (Figma 634×476) */}
          <figure className="iteration__panel">
            <div className="iteration__img" aria-hidden />
            <figcaption className="iteration__caption">
              [ Comparing Decision Frameworks Across Investment Platforms
              <br />
              Source: Carmignac · Robo-advisor · Fund Service Interfaces ]
            </figcaption>
          </figure>

          {/* Right: reframing narrative */}
          <div className="iteration__text">
            <p className="iteration__para">
              During the early ideation phase, we explored allowing users to directly adjust
              detailed strategy settings to address the lack of user control. However, this
              approach weakened the core experience of AI Master — the idea that{' '}
              <span className="iteration__hl">
                &ldquo;the AI makes decisions on behalf of the user.&rdquo;
              </span>
            </p>

            <p className="iteration__label">Reframing Control &amp; Solution Iteration</p>

            <p className="iteration__para">
              After reviewing the research again, we found that users did not actually want to
              directly modify strategies themselves. Instead, they wanted to understand:
            </p>
            <ul className="iteration__list">
              {UNDERSTAND.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <p className="iteration__para">
              As a result, rather than increasing manual control settings, the solution was
              redesigned to more clearly communicate:
            </p>
            <ul className="iteration__list">
              {COMMUNICATE.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
