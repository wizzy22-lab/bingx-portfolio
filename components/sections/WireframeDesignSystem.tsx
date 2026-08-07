import RevealHeading from '@/components/RevealHeading';

export default function WireframeDesignSystem() {
  return (
    <section id="design" className="section wds">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow wds__eyebrow">
          [ 08.5 — Wireframe &amp; Design System ]
        </p>
        <RevealHeading level="h2" className="ds-h2 wds__title">
          We validated the core flow as plain screens first, then settled it into one visual
          system
        </RevealHeading>
        <p className="wds__intro">
          We first reviewed the order of information and the movement between screens as simple
          wireframes.
        </p>
        <p className="wds__intro">
          Then we organised components and visual rules so that the current step, the reason for
          a recommendation, strategy information and the pre-execution notice all read the same
          way on every screen.
        </p>

        <div className="wds__panels">
          {/* Left: wireframe mockups (Figma Frame 121, 634×357) */}
          <figure className="wds__panel">
            <img
              className="wds__media media-fill"
              src="/images/ideation/wireframe.png"
              alt=""
              aria-hidden
            />
            <figcaption className="wds__caption">[ Wireframe — Key Decision Flow ]</figcaption>
          </figure>

          {/* Right: design system showcase (Figma Frame 120, 634×357) */}
          <figure className="wds__panel">
            <img
              className="wds__media media-fill"
              src="/images/ideation/design-system.png"
              alt=""
              aria-hidden
            />
            <figcaption className="wds__caption">
              [ Design System — Components &amp; Visual Rules ]
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
