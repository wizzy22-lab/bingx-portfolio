import RevealHeading from '@/components/RevealHeading';

export default function FeatureCategorization() {
  return (
    <section id="feature-categorization" className="section featcat">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow featcat__eyebrow">
          [ 08.1 — Feature categorization &amp; prioritization]
        </p>
        <RevealHeading level="h2" className="ds-h2 featcat__title">
          We first organized the feature flows
          <br />
          most directly connected to the core problems.
        </RevealHeading>
        <p className="featcat__intro">
          Based on the HMW questions, we identified the features needed to reduce user confusion
          and anxiety. We then prioritized them based on feature importance and user flow,
          allowing us to define the core screens required for ideation first.
        </p>

        <div className="featcat__panels">
          {/* Feature Categorization — AI Investment Decision System (Figma 634×634) */}
          <figure className="featcat__panel">
            <div className="featcat__img" aria-hidden />
            <figcaption className="featcat__caption">
              [ Feature Categorization — AI Investment Decision System ]
            </figcaption>
          </figure>

          {/* Feature Prioritization — 2×2 matrix (Figma 634×634) */}
          <figure className="featcat__panel">
            <div className="featcat__img" aria-hidden />
            <figcaption className="featcat__caption">[ Feature Prioritization ]</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
