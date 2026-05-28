import RevealHeading from '@/components/RevealHeading';

const HMW = [
  'How might we help beginner users easily understand the current step and the overall trading flow?',
  'How might we help beginner users start trading with a clear understanding of how the AI features work?',
  'How might we help users compare strategies and AI recommendations more clearly?',
  'How might we provide AI features while still helping users maintain a sense of control?',
];

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
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            Users Relied on Impressions
            <br />
            Rather Than Clear Understanding
          </RevealHeading>
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/empathy-map.png"
              alt=""
              aria-hidden
            />
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
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            Users were experiencing even greater
            <br />
            confusion and uncertainty after execution.
          </RevealHeading>
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/user-journey.png"
              alt=""
              aria-hidden
            />
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

      {/* 07.3 HMW — How Might We question cards (Figma 159:74) */}
      <section id="define-hmw" className="section define-hmw">
        <div className="section-inner">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-hmw__eyebrow">
            [ 07.3 — Define - HMW]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-hmw__title">
            Key Questions for Reducing Beginner Users&rsquo;
            <br />
            Confusion, Decision Difficulty, and Anxiety
          </RevealHeading>
          <p className="define-hmw__intro">
            Through the problem statement, we identified that beginner users expected AI to feel
            easier to understand and trust. We then reorganized user feedback through a user
            story-based approach, which led to four key questions most closely connected to the
            project direction.
          </p>
          <ol className="define-hmw__grid">
            {HMW.map((q, i) => (
              <li key={i} className="define-hmw__card">
                <span className="define-hmw__num">{String(i + 1).padStart(2, '0')}.</span>
                <p className="define-hmw__q">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
