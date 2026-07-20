import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

const PROBLEMS = [
  {
    number: '01.',
    title: 'There was no basis for choosing a Master',
    paras: [
      'Users had to work through seven Masters and the many strategies inside them without any clear criteria.',
      'Even when they picked a familiar or interesting Master, it was hard to judge whether a strategy’s risk level and trading approach suited them. Interview participants said they tapped through several strategies and then gave up without understanding the differences.',
    ],
  },
  {
    number: '02.',
    title: 'The current step and what happens after execution were unclear',
    paras: [
      'Users struggled to tell whether they were choosing a Master, selecting a strategy, or actually committing their money.',
      'Even after reaching the screen for entering the minimum investment, it was never fully explained whether the AI also closes the final position on top of buying and selling, when the strategy ends, or how the capital is settled.',
    ],
  },
  {
    number: '03.',
    title: 'Chat did not read as the starting point for recommendations',
    paras: [
      'AI Master offered a way to get strategy recommendations by chatting with the AI. But on the existing screens the shape and placement of the chat icon, and the way a conversation opened, differed from familiar messengers.',
      'Nothing on screen made it clear whether chat was a simple support feature or the main entry point for exploring and being recommended strategies.',
    ],
  },
  {
    number: '04.',
    title: 'Strategy performance and real coin prices lived on separate screens',
    paras: [
      'AI Master showed the performance of a selected strategy, but the actual price chart of the coin that strategy traded was not connected to it.',
      'To check the market price, users had to leave AI Master and find the coin again in the chart list. That detour also broke the flow of browsing strategies.',
    ],
  },
];

export default function BeforeExperience() {
  return (
    <section id="problem" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow experience__eyebrow">
          [ 02 — Current Experience ]
        </p>
        <RevealHeading level="h2" className="ds-h2 experience__title">
          It was hard to know what to choose, where you were, and what happens after you commit
          your money
        </RevealHeading>
        <p className="experience__lede">
          AI Master offered two ways in: getting a strategy recommendation through chat, or
          browsing the Master list directly.
        </p>
        <p className="experience__lede">
          But on the existing screens, neither entry point explained the criteria for judging a
          strategy or the trading process as a whole.
        </p>

        <div className="experience__layout">
          {/* TODO(figma): problem 03 is now about the chat entry point — the collage needs to
              include the chat icon / conversation screen for the claim to hold up */}
          <figure className="experience__analysis">
            <img
              className="experience__analysis-img media-fill"
              src="/images/current-experience/current-service-analysis.png"
              alt=""
              aria-hidden
            />
            <figcaption className="experience__analysis-caption">
              [ Current Experience Analysis — Existing AI Master Flow &amp; Interface Review ]
            </figcaption>
          </figure>

          <RevealOnView className="experience__cards">
            {PROBLEMS.map((p) => (
              <article key={p.number} className="experience__card">
                <header className="experience__head">
                  <span className="experience__number">{p.number}</span>
                  <h3 className="experience__title-h3">{p.title}</h3>
                </header>
                <blockquote className="experience__quote">
                  {p.paras.map((para, i) => (
                    <span key={i} className="experience__quote-intro">
                      {para}
                    </span>
                  ))}
                </blockquote>
              </article>
            ))}
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
