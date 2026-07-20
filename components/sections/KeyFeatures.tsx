import RevealHeading from '@/components/RevealHeading';

const STEPS = ['Master recommended', 'Strategy selected', 'Amount confirmed', 'Strategy running'];

export default function KeyFeatures() {
  return (
    <section id="key-features" className="section kf">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow kf__eyebrow">[ 09 — Key Features ]</p>

        {/* Feature 1 — Personalized Agents (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            1. Personalized agent recommendation
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                Users had to work through seven Masters and the many strategies inside them with
                no clear basis for choosing.
              </p>
              <p className="kf__para">
                With no criteria to judge by, they fell back on names they recognised or images
                that stood out.
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
              <p className="kf__para">
                At the start of the service we ask two things first: the risk they can tolerate,{' '}
                <span className="kf__code">Risk Tolerance</span>, and the trading approach they
                prefer, <span className="kf__code">Strategy Style</span>.
              </p>
              <p className="kf__para">
                Once answered, instead of showing every Master at once, we recommend the single
                Master closest to their investment style. Users go straight to that
                Master&rsquo;s screen and start from the strategies it holds.
              </p>
              <p className="kf__para">
                Cutting the first choice from seven to one lowers the cost of exploring, and lets
                users look at strategies while already holding criteria tied to their own style.
              </p>
              <p className="kf__para">
                We did not remove exploration — we gave users a first yardstick for comparing
                other Masters and strategies against.
              </p>
            </div>
          </div>
        </article>

        {/* Feature 2 — Clear next action (to be ← as is, mirrored) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            2. Current step visibility
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                Users struggled to tell whether they were choosing a Master, selecting a
                strategy, or actually committing their money.
              </p>
            </div>

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

            {/* to be — copy */}
            <div className="kf__copy">
              <p className="kf__para">
                We added a step structure at the top of the screen showing the current position
                and the next action.
              </p>
              <ol className="ia__flow-steps kf__flow">
                {STEPS.map((step) => (
                  <li key={step} className="ia__flow-step">
                    {step}
                  </li>
                ))}
              </ol>
              <p className="kf__para">
                Users can see what they are deciding right now, and each screen names the next
                action concretely — <span className="kf__code">Browse strategies</span>,{' '}
                <span className="kf__code">Check the amount</span>,{' '}
                <span className="kf__code">Start the strategy</span>.
              </p>
              <p className="kf__para">
                On the final step, where the amount is entered, users re-confirm the AI&rsquo;s
                automation scope and how the strategy ends before executing.
              </p>
              <p className="kf__para">
                As a result, users can locate themselves and their next action without tapping
                through several screens.
              </p>
            </div>
          </div>
        </article>

        {/* Feature 3 — Familiar chat (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            3. Familiar chat interaction
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                AI Master offered strategy recommendations through conversation with the AI. But
                on the existing screens the shape and placement of the chat icon, and the way a
                conversation started, differed from familiar messengers — so it never read as the
                entry point for recommendations.
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
              <p className="kf__para">
                We changed the shape and placement of the chat icon, and the way a conversation
                opens, to match the messengers users already know.
              </p>
              <p className="kf__para">
                Users can open chat and start talking to the AI right away, without learning a
                new interaction pattern.
              </p>
              <p className="kf__para">
                That framed chat not as a support feature, but clearly as a path for exploring —
                talking about the markets and approaches you care about and getting a strategy
                recommended.
              </p>
            </div>
          </div>
        </article>

        {/* Feature 4 — Key information & performance flow (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            4. Comparison &amp; performance in one flow
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                In the original AI Master you could see a selected strategy&rsquo;s performance,
                but the actual price chart of the coin it traded was not connected to it.
              </p>
              <p className="kf__para">
                To compare performance against real market movement, users had to leave AI Master
                and find the coin again in the chart list. Moving between screens also broke the
                context they were building.
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
              <p className="kf__para">
                We placed the strategy performance chart and the coin&rsquo;s real price chart on
                the same screen, swipeable side to side.
              </p>
              <ul className="kf__list">
                <li>
                  <span className="kf__list-term">Strategy performance</span> — how the capital
                  moved under this strategy
                </li>
                <li>
                  <span className="kf__list-term">Coin price</span> — how the real market price
                  of the traded coin moved
                </li>
              </ul>
              <p className="kf__para">
                Users can compare a strategy&rsquo;s performance against real market movement
                back to back, without leaving AI Master.
              </p>
              <p className="kf__para">
                Browsing strategy information through to reviewing performance now runs in one
                continuous flow.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
