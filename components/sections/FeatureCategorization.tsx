import RevealHeading from '@/components/RevealHeading';

export default function FeatureCategorization() {
  return (
    <section id="ideation" className="section featcat">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow featcat__eyebrow">
          [ 08.1 — Feature Categorization &amp; Prioritization ]
        </p>
        <RevealHeading level="h2" className="ds-h2 featcat__title">
          We kept the ideas most directly connected to the problem
        </RevealHeading>
        <p className="featcat__intro">
          Rather than adding every feature we could, we decided to first solve the problem of
          users being unable to choose a strategy, and the problem of not understanding what
          happens after committing money.
        </p>
        <p className="featcat__intro">We sorted ideas against two criteria.</p>
        <ul className="featcat__criteria">
          <li>
            <span className="featcat__criteria-term">Understanding</span> — can users tell where
            to start, what to choose, and which step they are on?
          </li>
          <li>
            <span className="featcat__criteria-term">Trust</span> — can users tell what the AI
            does with their money, and when they can step in?
          </li>
        </ul>

        {/* TODO(figma): the axes are now 'understanding / trust' — check the diagram labels match */}
        <div className="featcat__panels">
          {/* Feature Categorization — AI Investment Decision System (Figma 634×634) */}
          <figure className="featcat__panel">
            <img
              className="featcat__img media-fill"
              src="/images/ideation/feature-categorization.png"
              alt=""
              aria-hidden
            />
            <figcaption className="featcat__caption">
              [ Feature Categorization — AI Investment Decision System ]
            </figcaption>
          </figure>

          {/* Feature Prioritization — 2×2 matrix (Figma 634×634) */}
          <figure className="featcat__panel">
            <img
              className="featcat__img media-fill"
              src="/images/ideation/feature-prioritization.png"
              alt=""
              aria-hidden
            />
            <figcaption className="featcat__caption">[ Feature Prioritization ]</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
