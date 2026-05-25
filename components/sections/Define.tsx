export default function Define() {
  return (
    <>
    <section id="define" className="section">
      <div className="section-inner">
        {/* 07.1 Empathy Map (Figma 149:1121) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.1 — Define - Empathy map]
          </p>
          <h2 className="ds-h2 define-sub__title">
            Users Relied on Impressions
            <br />
            Rather Than Clear Understanding
          </h2>
          <figure className="define-sub__figure">
            <div className="define-sub__img" aria-hidden />
            <figcaption className="define-sub__caption">[empathy mapping]</figcaption>
          </figure>
          <p className="define-sub__closing">
            Users were not clearly understanding the differences between strategies. Instead,
            they perceived agents through impression-based cues such as{' '}
            <span className="define-sub__hl">&ldquo;aggressive&rdquo;</span> or{' '}
            <span className="define-sub__hl">&ldquo;stable.&rdquo;</span> Because there were no
            clear comparison criteria, many users relied on image and atmosphere when making
            decisions. As they reached the actual execution stage, users often experienced{' '}
            <span className="define-sub__hl">hesitation</span> and{' '}
            <span className="define-sub__hl">uncertainty</span>.
          </p>
        </div>

        {/* 07.2 User Journey (Figma 151:84) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.2 — Define - User journey]
          </p>
          <h2 className="ds-h2 define-sub__title">
            Users were experiencing even greater
            <br />
            confusion and uncertainty after execution.
          </h2>
          <figure className="define-sub__figure">
            <div className="define-sub__img" aria-hidden />
            <figcaption className="define-sub__caption">[user journey]</figcaption>
          </figure>
          <p className="define-sub__closing">
            Beginner users entered the service expecting the AI to manage everything from entry
            to exit automatically. However, after execution, users struggled to understand{' '}
            <span className="define-sub__hl define-sub__hl--bold">
              what the AI was currently doing, which parts were fully automated, and what
              decisions still required user involvement.
            </span>
          </p>
        </div>
      </div>
    </section>

      <aside className="problem-statement">
        <div className="problem-statement__inner">
          <p className="problem-statement__label">Problem statement</p>
          <p className="problem-statement__body">
            Beginner users expected AI to make trading easier to start. However, AI Master was
            demanding users to understand complex strategies and automation before trust and
            understanding had been fully established.
          </p>
        </div>
      </aside>
    </>
  );
}
