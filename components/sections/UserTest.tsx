import RevealHeading from '@/components/RevealHeading';

const WORKED = [
  'All 5 of 5 participants completed the core flow end to end.',
  'They understood the order — set your investment style first, then get a Master recommended.',
  'The step indicator at the top let them locate their position and next action.',
  'On the pre-execution screen they confirmed the scope of automated buying, selling and position exit.',
  'They checked strategy performance and coin price without leaving the strategy screen.',
];

const DIDNT = [
  'The meaning of some feature icons was not obvious on first sight.',
  'Participants paused to interpret the strategy detail information.',
  'The order and wording of explanations needs further work so beginners can absorb specialist investment information faster.',
];

export default function UserTest() {
  return (
    <section id="final" className="section ut">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ut__eyebrow">[ 10 — User Test ]</p>
        <RevealHeading level="h2" className="ds-h2 ut__title">
          All 5 participants completed the core flow, but strategy details and some icons needed
          more explanation
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
              Using the redesigned prototype, we tested the core flow: entering an investment
              style, getting a Master recommended, selecting a strategy, and reviewing the
              information shown before execution.
            </p>
            <p className="ut__para">
              All five usability test participants completed the flow from browsing strategies
              through to the execution confirmation.
            </p>
            <p className="ut__para">
              The redesign scored an average of 88 on the SUS (System Usability Scale), which
              rates overall ease of use from 0 to 100 (n=5).
            </p>
            <figure className="ut__figure">
              <img
                className="ut__media ut__media--wide media-fill"
                src="/images/user-test/sus-score.png"
                alt=""
                aria-hidden
              />
              <figcaption className="ut__caption">
                [ User Test Results — Task Completion &amp; SUS ]
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="ut__cards">
          <article className="ut__card">
            <h3 className="ut__card-title">What held up</h3>
            <ul className="ut__list">
              {WORKED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="ut__card ut__card--muted">
            <h3 className="ut__card-title">What to improve next</h3>
            <ul className="ut__list">
              {DIDNT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <p className="ut__closing">
          With five participants this was an exploratory test, so the SUS and task completion
          results are read as a reference for where to improve next, not as a settled measure of
          product performance.
        </p>
      </div>
    </section>
  );
}
