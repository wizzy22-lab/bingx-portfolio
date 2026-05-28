export default function KeyFeatures() {
  return (
    <section id="key-features" className="section kf">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow kf__eyebrow">[ 09 — Key Features ]</p>

        {/* Feature 1 — Personalized Agents (as is → to be) */}
        <article className="kf__feature">
          <h2 className="ds-h2 kf__title">Personalized Agents based on your preferences</h2>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="kf__para">
                Users had to explore all agents at once without clear comparison criteria.
              </p>
              <p className="kf__para">
                As a result, they were making decisions based more on image and atmosphere than on
                actual strategy differences.
              </p>
            </div>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <div className="kf__screen" aria-hidden />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <div className="kf__screen" aria-hidden />
            </figure>

            {/* to be — copy */}
            <div className="kf__copy">
              <h3 className="kf__lead">Added a personalized onboarding flow.</h3>
              <p className="kf__para">
                The experience was redesigned to first identify the user&rsquo;s investment
                tendencies and then recommend only the most relevant agents.
              </p>
              <p className="kf__para">
                This reduced unnecessary exploration and helped users begin comparing and selecting
                strategies more easily.
              </p>
            </div>
          </div>
        </article>

        {/* Feature 2 — Clear next action (to be ← as is, mirrored) */}
        <article className="kf__feature">
          <h2 className="ds-h2 kf__title">Clear next action to explore strategies</h2>
          <div className="kf__bar" aria-hidden />

          <div className="kf__compare">
            {/* to be — copy */}
            <div className="kf__copy">
              <h3 className="kf__lead">Current Step Visibility</h3>
              <p className="kf__para">
                A structure was added to clearly communicate the current stage and next action,
                helping users continue exploring strategies without losing track of the flow.
              </p>
            </div>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <div className="kf__screen" aria-hidden />
            </figure>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <div className="kf__screen" aria-hidden />
            </figure>

            {/* as is — copy */}
            <div className="kf__copy">
              <p className="kf__label">[ PROBLEM ]</p>
              <p className="kf__para">
                Users were struggling to understand which stage they were currently in and what
                they were supposed to do next.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
