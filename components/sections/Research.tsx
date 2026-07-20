import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';
import ScrambleNumber from '@/components/ScrambleNumber';

const REVIEWS = [
  {
    initial: '',
    name: 'prithvisimi',
    date: 'Jan 7',
    stars: 2,
    text: 'use to difficult not good interface',
  },
  {
    initial: 'K',
    name: 'kushalkumbhakar8',
    date: 'Feb 2',
    stars: 1,
    text: "The interface feels too complex and hard to use. It's difficult to understand what to do.",
  },
];

const SURVEY_STATS = [
  {
    value: '59.1',
    text: '13 of the 22 respondents had never used an exchange’s AI features. Ten knew about them and chose not to; three did not know they existed.',
  },
  {
    value: '88.9',
    text: 'Of the 9 respondents who had actually used AI features, 8 named “not enough explanation” as their biggest pain point.',
  },
  {
    value: '76.9',
    text: '10 of the 13 non-users said they would be willing to try the features if they were improved.',
  },
];

const INSIGHT_GROUPS = [
  {
    variant: 'beginner',
    title: 'Beginner participants',
    cards: [
      {
        title: 'They did not know what to look at',
        body: [
          [
            'Beginner participants found it hard to judge which information',
            'mattered, and which features and strategies they actually needed.',
          ],
          [
            'In AI Master too, they had no criteria for choosing a Master or a',
            'strategy, so they moved back and forth across several screens.',
          ],
        ],
      },
      {
        title: 'They did not know how far the AI goes',
        body: [
          [
            'It was unclear whether the AI only recommends, whether it also',
            'buys and sells, and when a strategy ends.',
          ],
          [
            'The doubts grew sharpest on the screen where real money is',
            'committed: how to stop a strategy, and when capital is settled.',
          ],
        ],
      },
    ],
  },
  {
    variant: 'advanced',
    title: 'Advanced participants',
    cards: [
      {
        title: 'They saw no need to hand things over to AI',
        body: [
          [
            'Advanced participants already had their own trading principles',
            'and methods. They treated reading the market and judging entry',
            'and exit points as a core part of what makes trading worthwhile.',
          ],
        ],
      },
      {
        title: 'They would not trust an unproven system',
        body: [
          [
            'Advanced participants cared about execution speed, system',
            'stability, and the reliability of the trading environment.',
          ],
          [
            'To them AI Master read less as a convenient automation tool than',
            'as the risk of handing judgment and capital to an unproven system.',
          ],
        ],
      },
    ],
  },
];

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="section-inner">
        {/* 03.1 Secondary Research — Community Source (Figma 124:54) */}
        <div className="research-community">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-community__eyebrow">
            [ 03.1 — Secondary Research · Community ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-community__title">
            Communities and app reviews alike
            <br />
            said the service was hard to figure out
          </RevealHeading>
          <p className="research-community__intro">
            I looked at how users talked about AI investing on Reddit, Google Reviews and the
            App Store.
          </p>

          <div className="research-community__layout">
            <figure className="research-community__collage">
              <img
                className="research-community__collage-img media-fill"
                src="/images/research/community-reactions.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-community__collage-caption">
                [ Community Reactions — Reddit · Google Reviews · App Store Reviews ]
              </figcaption>
            </figure>

            <RevealOnView className="research-community__cards">
              {REVIEWS.map((r) => (
                <article key={r.name} className="review-card">
                  <header className="review-card__head">
                    <div className="review-card__avatar" aria-hidden>
                      {r.initial}
                    </div>
                    <div className="review-card__meta">
                      <span className="review-card__name">{r.name}</span>
                      <span className="review-card__date">{r.date}</span>
                    </div>
                  </header>
                  <div
                    className="review-card__stars"
                    role="img"
                    aria-label={`${r.stars} out of 5 stars`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={
                          n <= r.stars ? 'review-card__star is-filled' : 'review-card__star'
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="review-card__text">{r.text}</p>
                </article>
              ))}
            </RevealOnView>
          </div>

          <p className="research-community__closing">
            The reactions in these reviews went beyond &ldquo;investment strategies are hard.&rdquo;
            <br />
            Users also struggled to understand where to start in the service, and in what order
            to use it.
          </p>
        </div>

        {/* 03.2 Secondary Research — Survey (Figma 129:54) */}
        <div className="research-survey">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-survey__eyebrow">
            [ 03.2 — Secondary Research · Survey ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-survey__title">
            8 of 9 who had used AI features named
            <br />
            &ldquo;not enough explanation&rdquo; as the pain point
          </RevealHeading>
          <p className="research-survey__intro">
            To see whether the confusion found in the community also showed up in actual use,
            <br />
            I asked 22 crypto exchange app users about their experience with AI-based features.
            <br />
            That included strategy recommendations, copy trading and risk analysis.
          </p>

          <div className="research-survey__layout">
            <figure className="research-survey__collage">
              <img
                className="research-survey__collage-img media-fill"
                src="/images/research/survey.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-survey__collage-caption">
                [ Survey Findings — User Perception of AI Trading Features ]
              </figcaption>
            </figure>

            <RevealOnView className="research-survey__stats">
              {SURVEY_STATS.map((s, i) => (
                <div key={s.value} className={`survey-stat survey-stat--${i + 1}`}>
                  <p className="survey-stat__number">
                    <ScrambleNumber
                      className="survey-stat__value"
                      value={s.value}
                      delay={800 + i * 100}
                      duration={1200}
                    />
                    <span className="survey-stat__suffix">%</span>
                  </p>
                  <p className="survey-stat__text">{s.text}</p>
                </div>
              ))}
            </RevealOnView>
          </div>

          <p className="research-survey__closing">
            Missing explanation alone cannot account for why people do not use AI features.
            <br />
            But not knowing what the AI does, or how to read its results, looked like one of the
            things holding them back.
          </p>
          <p className="research-survey__closing">
            The survey could not tell me at which moment users hesitate, or why they never start
            trading. So I met users directly and asked about their concrete experience.
          </p>
        </div>

        {/* 04 Primary Research — Interview (Figma 133:54) */}
        <div className="research-primary">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-primary__eyebrow">
            [ 04 — Primary Research · Interviews ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-primary__title">
            I asked four users of differing experience
            <br />
            why they hesitated over AI trading
          </RevealHeading>
          <p className="research-primary__intro">
            I interviewed four users with crypto trading experience, split by how much
            <br />
            they had traded: two beginners and two advanced. I compared how each group
            <br />
            took to AI trading and where they hesitated.
          </p>
          <div className="research-duo research-duo--interview">
            <figure className="research-duo__figure">
              <img
                className="research-duo__img media-fill"
                src="/images/research/beginner-user.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-duo__caption">[ Interview — Beginner Users (n=2) · Remote ]</figcaption>
            </figure>
            <figure className="research-duo__figure">
              <img
                className="research-duo__img media-fill"
                src="/images/research/advanced-user.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-duo__caption">[ Interview — Advanced Users (n=2) · Remote ]</figcaption>
            </figure>
          </div>
        </div>

        {/* 05 Analysis (Figma 133:54) */}
        <div className="research-analysis">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-analysis__eyebrow">
            [ 05 — Analysis ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-analysis__title">
            Beginners struggled to understand it;
            <br />
            advanced users saw no need for AI
          </RevealHeading>
          <p className="research-analysis__intro">
            Grouping what came up in the interviews by similarity showed that
            <br />
            beginner and advanced participants hesitated for different reasons.
          </p>
          <div className="research-duo research-duo--analysis">
            <figure className="research-duo__figure">
              <img
                className="research-duo__img media-fill"
                src="/images/research/color-coding.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-duo__caption">[ Color Coding — Grouping User Statements ]</figcaption>
            </figure>
            <figure className="research-duo__figure">
              <video
                className="research-duo__img media-fill"
                src="/videos/team-affinity.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
              <figcaption className="research-duo__caption">[ Affinity Mapping — Team Session ]</figcaption>
            </figure>
          </div>
        </div>

        {/* Insight Section (Figma 139:54) */}
        <div className="research-insight">
          <RevealOnView className="research-insight__groups">
            {INSIGHT_GROUPS.map((g) => (
              <article key={g.title} className={`insight-group insight-group--${g.variant}`}>
                <h3 className="insight-group__title">{g.title}</h3>
                {g.cards.map((c) => (
                  <div key={c.title} className="insight-group__card">
                    <h4 className="insight-group__card-title">{c.title}</h4>
                    {c.body.map((para, i) => (
                      <p key={i} className="insight-group__card-body">
                        {para.map((line, j) => (
                          <span key={j}>
                            {line}
                            {j < para.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                ))}
              </article>
            ))}
          </RevealOnView>

          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-insight__eyebrow">
            insight
          </p>
          <p className="research-insight__closing">
            Beginners were interested in AI trading but struggled with how to use it.
            <br />
            Advanced users understood it and still saw little need for it.
          </p>
          <p className="research-insight__closing research-insight__closing--lead">
            So we made{' '}
            <span className="research-insight__highlight">
              beginner users, whose problem clearer explanation should shrink,
            </span>{' '}
            the primary target.
          </p>
        </div>

        {/* 06 Competitor Research (Figma 147:74) */}
        <div className="research-competitor">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-competitor__eyebrow">
            [ 06 — Competitor Research ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-competitor__title">
            Other services ask about your style first,
            <br />
            then compare products on the same criteria
          </RevealHeading>
          <p className="research-competitor__intro">
            Robo-advisors and fund services start with a handful of questions to establish a
            user&rsquo;s investing experience and the level of risk they can tolerate.
          </p>
          <p className="research-competitor__intro">
            They then let users compare products on identical criteria — expected return, downside
            risk, investment horizon — so that even a first-time investor understands what to look
            at before deciding.
          </p>

          <div className="research-competitor__layout">
            <figure className="research-competitor__figure">
              <img
                className="research-competitor__img media-fill"
                src="/images/research/competitor-research.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-competitor__caption">
                [ Comparing Decision Frameworks Across Investment Platforms
                <br />
                Carmignac · Robo-advisor · Fund Service Interfaces ]
              </figcaption>
            </figure>

            <div className="research-competitor__copy">
              <p>
                AI Master and robo-advisors serve different products and different users. But in
                explaining unfamiliar investment options to a first-time visitor and helping them
                choose something that fits their style, they are solving the same problem.
              </p>
              <p>
                The existing AI Master, by contrast, led with investor characters and strategies.
                Users met a Master&rsquo;s image and persona before they had established their own
                investment style or compared strategies on shared criteria.
              </p>
              <p>
                As a result, rather than judging which strategy was closest to them, users started
                exploring based on names they recognised or images that stood out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
