import RevealHeading from '@/components/RevealHeading';

const WORKED = [
  'The step-by-step flow became easier to understand',
  'Strategy comparison felt clearer and more structured',
  'Understanding of the current state and next action improved',
  'Unnecessary screen transitions were reduced',
  'Overall navigation flow felt more stable',
];

const DIDNT = [
  'Some icons were not immediately intuitive',
  'Users occasionally paused to interpret strategy detail sections',
];

export default function UserTest() {
  return (
    <section id="final" className="section ut">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ut__eyebrow">[ 10 — User Test ]</p>
        <RevealHeading level="h2" className="ds-h2 ut__title">
          Users could navigate the decision flow
          <br />
          more clearly than before
        </RevealHeading>

        <div className="ut__top">
          {/* Left: usability test visual (Figma 634×476) */}
          <img
            className="ut__media ut__media--tall media-fill"
            src="/images/user-test/user-test.jpg"
            alt=""
            aria-hidden
          />

          {/* Right: summary + supporting visual (Figma 634×159) */}
          <div className="ut__summary">
            <p className="ut__para">
              The redesign scored SUS 88 (n=5) — top 15%, an &ldquo;Excellent&rdquo; grade.
            </p>
            <p className="ut__para">
              Usability testing showed that all 5 participants (100%) completed the flow from
              strategy exploration to execution without major difficulties.
            </p>
            <p className="ut__para">
              In particular, the step-by-step structure and flow guidance helped beginner users
              better understand their current status and next actions.
            </p>
            <img
              className="ut__media ut__media--wide media-fill"
              src="/images/user-test/sus-score.png"
              alt=""
              aria-hidden
            />
          </div>
        </div>

        <div className="ut__cards">
          <article className="ut__card">
            <h3 className="ut__card-title">What worked</h3>
            <ul className="ut__list">
              {WORKED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="ut__card ut__card--muted">
            <h3 className="ut__card-title">What didn&rsquo;t work</h3>
            <ul className="ut__list">
              {DIDNT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
