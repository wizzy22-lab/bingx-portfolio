import RevealHeading from '@/components/RevealHeading';

export default function Reflection() {
  return (
    <section id="reflection" className="section refl">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow refl__eyebrow">[ 11 — Reflection ]</p>
        <RevealHeading level="h2" className="ds-h2 refl__title">
          What I learned in this project
        </RevealHeading>

        <div className="refl__cards">
          <article className="refl__card">
            <h3 className="refl__card-title">
              01. In AI UX, what mattered most was not &ldquo;more automation,&rdquo; but a flow
              users could understand.
            </h3>
            <p className="refl__para">
              Users did not simply want AI to make decisions for them. They wanted to understand:
            </p>
            <ul className="refl__list">
              <li>what was currently happening</li>
              <li>who was making the decision</li>
              <li>and when they should intervene</li>
            </ul>
          </article>

          <article className="refl__card">
            <h3 className="refl__card-title">
              02. A sense of control came less from &ldquo;direct manipulation&rdquo; and more from
              &ldquo;feeling informed.&rdquo;
            </h3>
            <p className="refl__para">
              At first, we explored giving users more configuration options. However, the core
              experience of AI Master was not about designing strategies directly, but about
              choosing and delegating judgment to the AI.
            </p>
          </article>

          <article className="refl__card">
            <h3 className="refl__card-title">
              03. Trust in AI services was built not through features, but through how decision
              structures were explained.
            </h3>
            <p className="refl__para">
              Through this project, we learned that UX in AI services goes beyond improving
              usability. It is also about helping users understand and trust the decision-making
              flow, even in moments of uncertainty.
            </p>
          </article>
        </div>

        <p className="refl__closing">
          This project was part of a broader exploration into human trust, autonomy, and AI
          decision-making systems.
        </p>

        <div className="refl__cta">
          <a
            className="refl__link"
            href="https://medium.com/@hazzysw/bingx-ai-master-app-revamp-chapter-03-how-anxiety-becomes-structured-5db6fc9ba9a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full research documentation on Medium →
          </a>
        </div>
      </div>
    </section>
  );
}
