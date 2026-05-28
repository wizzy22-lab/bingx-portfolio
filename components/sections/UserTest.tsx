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
    <section id="user-test" className="section ut">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ut__eyebrow">[ 10 — User Test ]</p>
        <h2 className="ds-h2 ut__title">
          Users Could Navigate the Decision Flow
          <br />
          More Clearly Than Before
        </h2>

        <div className="ut__top">
          {/* Left: usability test visual (Figma 634×476) */}
          <div className="ut__media ut__media--tall" aria-hidden />

          {/* Right: summary + supporting visual (Figma 634×159) */}
          <div className="ut__summary">
            <p className="ut__para">
              Usability testing showed that most users were able to complete the flow from
              strategy exploration to execution without major difficulties.
            </p>
            <p className="ut__para">
              In particular, the step-by-step structure and flow guidance helped beginner users
              better understand their current status and next actions.
            </p>
            <div className="ut__media ut__media--wide" aria-hidden />
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
