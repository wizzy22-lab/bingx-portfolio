export default function WireframeDesignSystem() {
  return (
    <section id="wireframe-design-system" className="section wds">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow wds__eyebrow">
          [ 08.5 — Wireframe &amp; design system ]
        </p>

        <div className="wds__panels">
          {/* Left: wireframe mockups (Figma Frame 121, 634×357) */}
          <figure className="wds__panel">
            <div className="wds__media" aria-hidden />
            <figcaption className="wds__caption">[ Wireframe ]</figcaption>
          </figure>

          {/* Right: design system showcase (Figma Frame 120, 634×357) */}
          <figure className="wds__panel">
            <div className="wds__media" aria-hidden />
            <figcaption className="wds__caption">[ Design System ]</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
