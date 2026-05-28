import RevealHeading from '@/components/RevealHeading';

export default function KeyFeatures() {
  return (
    <section id="key-features" className="section kf">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow kf__eyebrow">[ 09 — Key Features ]</p>

        {/* Feature 1 — Personalized Agents (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            Personalized Agents based on your preferences
          </RevealHeading>

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
              <img
                className="kf__screen media-fill"
                src="/images/key-features/feature-1-as-is.png"
                alt=""
                aria-hidden
              />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-1-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
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
          <RevealHeading level="h2" className="ds-h2 kf__title">
            Clear next action to explore strategies
          </RevealHeading>
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
              <video
                className="kf__screen media-fill"
                src="/videos/feature-2-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-2-as-is.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
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

        {/* Feature 3 — Familiar chat (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            Chat Feels Familiar and Easy to Use
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="kf__label">[ PROBLEM ]</p>
              <p className="kf__para">
                Users did not understand why they suddenly needed to interact with the AI, and
                perceived the AI interaction itself as unfamiliar and complicated.
              </p>
            </div>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <img
                className="kf__screen media-fill"
                src="/images/key-features/feature-3-as-is.png"
                alt=""
                aria-hidden
              />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-3-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — copy */}
            <div className="kf__copy">
              <h3 className="kf__lead">Change chat ICON design &amp; Location</h3>
              <p className="kf__para">
                Familiar messenger-style interaction patterns were applied, allowing users to
                interact with the AI naturally without needing to learn a new system.
              </p>
              <div className="kf__detail kf__detail--wide" aria-hidden />
            </div>
          </div>
        </article>

        {/* Feature 4 — Key information & performance flow (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            Key Information &amp; Performance Flow
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="kf__label">[ PROBLEM ]</p>
              <p className="kf__para">
                In the original AI Master experience, strategy comparison and performance review
                were separated, causing frequent screen switching and interruptions in the
                decision-making flow.
              </p>
              <p className="kf__para">
                Key information was also scattered, making strategy differences difficult to
                compare quickly.
              </p>
            </div>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-4-as-is.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-4-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — copy */}
            <div className="kf__copy">
              <h3 className="kf__lead">Prioritized Key Information for Strategy Comparison</h3>
              <h3 className="kf__lead">Performance &amp; Charts Within the Same Flow</h3>
              <p className="kf__para">
                As a result, users were able to compare strategies and review performance more
                smoothly and confidently without unnecessary navigation.
              </p>
              <div className="kf__detail kf__detail--lg" aria-hidden />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
