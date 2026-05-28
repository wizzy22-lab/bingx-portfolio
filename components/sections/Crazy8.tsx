import RevealHeading from '@/components/RevealHeading';

export default function Crazy8() {
  return (
    <section id="crazy8" className="section crazy8">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow crazy8__eyebrow">
          [ 08.3 — Crazy 8s ]
        </p>
        <RevealHeading level="h2" className="ds-h2 crazy8__title">
          We explored multiple layout directions and selected the clearest decision flow.
        </RevealHeading>
        <p className="crazy8__intro">
          Through Crazy 8s, we rapidly explored various interaction and layout directions for
          onboarding, agent recommendations, and strategy comparison flows.
          <br />
          After team voting sessions, we selected the final structure that best helped users
          compare and evaluate strategies more easily.
        </p>

        <div className="crazy8__panels">
          {/* Left: Crazy 8 sketch video (Figma Frame 118, 634×357) */}
          <figure className="crazy8__panel">
            <video
              className="crazy8__media crazy8__media--video crazy8__media--filled"
              src="/videos/crazy-8.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
            <figcaption className="crazy8__caption">
              [ Generating Multiple Interaction Ideas Through Crazy 8 ]
            </figcaption>
          </figure>

          {/* Right: team voting board image (Figma Frame 117, 634×357) */}
          <figure className="crazy8__panel">
            <img
              className="crazy8__media crazy8__media--image crazy8__media--filled"
              src="/images/ideation/crazy-8-vote.png"
              alt=""
              aria-hidden
            />
            <figcaption className="crazy8__caption">
              [ Exploring Multiple Layout Directions Through Crazy 8s and Team Voting ]
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
