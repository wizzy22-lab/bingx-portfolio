import RevealHeading from '@/components/RevealHeading';

const PATHS = [
  'Chatting with the AI to get a strategy recommendation',
  'Picking a Master they were interested in and browsing its strategies directly',
];

const HMW = [
  ['How might we help beginner users choose a Master based on their own investment style?'],
  ['How might we help users understand the current step and how far the AI automates on their behalf?'],
  ["How might we help users check the AI's recommendation in a familiar way and continue the conversation?"],
  ['How might we let users compare strategy performance against real coin prices without leaving the screen?'],
];

export default function Define() {
  return (
    <>
    <section id="define" className="section">
      <div className="section-inner">
        {/* 07.1 Empathy Map (Figma 149:1121) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.1 — Define · Empathy Map ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            Users needed criteria for judging a strategy more than they needed a
            Master&rsquo;s image
          </RevealHeading>
          <p className="define-sub__intro">
            I pulled what users said and did across the interviews and community research into a
            single empathy map.
          </p>
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/empathy-map.png"
              alt=""
              aria-hidden
            />
            <figcaption className="define-sub__caption">
              [ Empathy Mapping — Based on Interview &amp; Community Findings ]
            </figcaption>
          </figure>
          <p className="define-sub__closing">
            Without clearly understanding the differences between strategies, users took in
            Masters through impressions like{' '}
            <span className="define-sub__hl">&lsquo;aggressive&rsquo;</span> or{' '}
            <span className="define-sub__hl">&lsquo;stable&rsquo;</span>.
          </p>
          <p className="define-sub__closing">
            But at the point of committing real money, an image or an impression was not enough
            to decide on. They needed{' '}
            <span className="define-sub__hl define-sub__hl--bold">
              criteria that connected a strategy to their own situation
            </span>{' '}
            — the risk they could tolerate, the trading approach they preferred.
          </p>
        </div>

        {/* 07.2 User Journey (Figma 151:84) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.2 — Define · User Journey ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            There were two paths through the service, and uncertainty spiked on both right
            before execution
          </RevealHeading>
          <p className="define-sub__intro">
            Users could explore strategies in two ways.
          </p>
          <ol className="define-sub__list">
            {PATHS.map((path, i) => (
              <li key={i} className="define-sub__list-item">
                <span className="define-sub__list-num">{String(i + 1).padStart(2, '0')}.</span>
                <span>{path}</span>
              </li>
            ))}
          </ol>
          {/* TODO(figma): 07.2 now describes two paths (chat / direct browse) merging at
              strategy selection — replace if the journey map still shows a single linear flow */}
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/user-journey.png"
              alt=""
              aria-hidden
            />
            <figcaption className="define-sub__caption">
              [ User Journey — Entry to Strategy Execution and Exit ]
            </figcaption>
          </figure>
          <p className="define-sub__closing">
            On the chat path, neither the fact that chat was the starting point for
            recommendations nor how to hold the conversation was made clear.
          </p>
          <p className="define-sub__closing">
            On the direct path, it was hard to judge which of the many Masters and strategies to
            choose.
          </p>
          <p className="define-sub__closing">
            Both paths met at the step of selecting a strategy and entering an amount. At that
            point users could not tell{' '}
            <span className="define-sub__hl define-sub__hl--bold">
              how far the AI trades automatically, when the strategy ends, or how the capital is
              settled
            </span>
            .
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
            [ 07.3 — Define · HMW ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-hmw__title">
            From picking a Master and a strategy to committing funds and checking performance,
            <br />
            I framed it as four questions
          </RevealHeading>
          <ol className="define-hmw__grid">
            {HMW.map((q, i) => (
              <li key={i} className="define-hmw__card">
                <span className="define-hmw__num">{String(i + 1).padStart(2, '0')}.</span>
                <p className="define-hmw__q">
                  {q.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < q.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
