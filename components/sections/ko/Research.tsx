import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';
import ScrambleNumber from '@/components/ScrambleNumber';

const REVIEWS = [
  {
    initial: '',
    name: 'prithvisimi',
    date: 'Jan 7',
    stars: 2,
    text: '사용법이 너무 어렵고 인터페이스가 좋지 않습니다.',
  },
  {
    initial: 'K',
    name: 'kushalkumbhakar8',
    date: 'Feb 2',
    stars: 1,
    text: '인터페이스가 복잡해 무엇을 해야 할지 이해하기 어렵습니다.',
  },
];

const SURVEY_STATS = [
  {
    value: '59.1',
    text: '전체 22명 중 13명은 거래소의 AI 기능을 한 번도 사용하지 않았습니다. 이 중 10명은 기능을 알고도 사용하지 않았고, 3명은 기능의 존재를 몰랐습니다.',
  },
  {
    value: '88.9',
    text: 'AI 기능을 실제로 사용해본 9명 중 8명은 가장 불편한 점으로 ‘설명 부족’을 선택했습니다.',
  },
  {
    value: '76.9',
    text: 'AI 기능 미사용자 13명 중 10명은 기능이 개선된다면 사용해볼 의향이 있다고 답했습니다.',
  },
];

const INSIGHT_GROUPS = [
  {
    variant: 'beginner',
    title: '초급 참여자',
    cards: [
      {
        title: '무엇을 봐야 할지 몰랐습니다',
        body: [
          [
            '초급 참여자들은 어떤 정보가 중요한지, 자신에게 어떤 기능과 전략이',
            '필요한지 판단하기 어려워했습니다.',
          ],
          [
            'AI Master에서도 무엇을 기준으로 Master와 전략을 골라야 하는지 알 수 없어',
            '여러 화면을 오가며 탐색했다고 말했습니다.',
          ],
        ],
      },
      {
        title: 'AI가 어디까지 대신하는지 몰랐습니다',
        body: [
          [
            'AI가 추천만 해주는지, 실제 매수와 매도도 진행하는지,',
            '전략은 언제 끝나는지 명확히 이해하기 어려워했습니다.',
          ],
          [
            '특히 실제 돈을 넣는 화면에 도달하면, 전략을 중지하는 방법과',
            '투자금이 정산되는 시점에 대한 의문이 커졌습니다.',
          ],
        ],
      },
    ],
  },
  {
    variant: 'advanced',
    title: '고급 참여자',
    cards: [
      {
        title: 'AI에게 맡길 필요를 느끼지 못했습니다',
        body: [
          [
            '고급 참여자들은 이미 자신만의 거래 원칙과 방식을 가지고 있었습니다.',
            '시장을 직접 해석하고 매수와 매도 시점을 판단하는 과정 자체를',
            '거래의 중요한 가치로 보고 있었습니다.',
          ],
        ],
      },
      {
        title: '검증되지 않은 시스템에 돈을 맡기기 어려웠습니다',
        body: [
          [
            '고급 참여자들은 체결 속도, 시스템 안정성, 거래 환경의 신뢰성을',
            '중요하게 생각했습니다.',
          ],
          [
            '이들에게 AI Master는 편리한 자동화 도구라기보다, 충분히 검증되지 않은 시스템에',
            '판단과 자금을 맡기는 위험으로 받아들여졌습니다.',
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
            커뮤니티와 앱 리뷰에서도
            <br />
            사용법을 이해하기 어렵다는 반응이 나타났습니다
          </RevealHeading>
          <p className="research-community__intro">
            Reddit, Google Reviews, App Store Reviews에서 AI 투자 기능과 인터페이스에 대한
            사용자 반응을 살펴봤습니다.
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
            리뷰에서 확인된 반응은 단순히 투자 전략이 어렵다는 문제에 그치지 않았습니다.
            <br />
            사용자는 서비스를 어디서 시작해야 하고, 어떤 순서로 이용해야 하는지도 이해하기
            어려워하고 있었습니다.
          </p>
        </div>

        {/* 03.2 Secondary Research — Survey (Figma 129:54) */}
        <div className="research-survey">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-survey__eyebrow">
            [ 03.2 — Secondary Research · Survey ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-survey__title">
            AI 기능 경험자 9명 중 8명이 ‘설명 부족’을
            <br />
            불편으로 꼽았습니다
          </RevealHeading>
          <p className="research-survey__intro">
            커뮤니티에서 확인한 혼란이 거래소 AI 기능의 사용 경험에서도 나타나는지 확인하기
            위해,
            <br />
            암호화폐 거래소 앱 사용자 22명에게 AI 기반 기능의 이용 경험을 물었습니다.
            <br />
            여기에는 전략 추천, 카피 트레이딩, 리스크 분석과 같은 기능이 포함됐습니다.
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
            설명 부족만이 AI 기능을 사용하지 않은 이유라고 단정할 수는 없습니다.
            <br />
            다만 AI가 무엇을 하고 결과를 어떻게 봐야 하는지 알기 어려운 점은, 사용을 망설이게
            하는 이유 중 하나로 보였습니다.
          </p>
          <p className="research-survey__closing">
            설문만으로는 사용자가 어떤 순간에 망설이고, 왜 거래를 시작하지 않는지 알 수
            없었습니다. 그래서 사용자를 직접 만나 구체적인 경험을 물었습니다.
          </p>
        </div>

        {/* 04 Primary Research — Interview (Figma 133:54) */}
        <div className="research-primary">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-primary__eyebrow">
            [ 04 — Primary Research · Interviews ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-primary__title">
            암호화폐 거래 경험이 다른 사용자 4명에게
            <br />
            AI 거래를 망설인 이유를 물었습니다
          </RevealHeading>
          <p className="research-primary__intro">
            암호화폐 거래 경험이 있는 사용자 4명을 인터뷰했습니다. 거래 경험 횟수에 따라 초급
            참여자 2명과
            <br />
            고급 참여자 2명으로 나누어, AI 거래를 받아들이는 방식과 망설이는 지점을
            비교했습니다.
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
            초급 참여자는 이해하기 어려워했고, 고급 참여자는
            <br />
            AI에게 맡길 필요를 느끼지 못했습니다
          </RevealHeading>
          <p className="research-analysis__intro">
            인터뷰에서 나온 말을 비슷한 내용끼리 묶어보니,
            <br />
            초급과 고급 참여자가 AI 거래를 망설이는 이유가 다르게 나타났습니다.
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
            이번 인터뷰에서 초급 참여자에게는 AI 거래에 대한 관심보다 이해 장벽이 더 크게
            나타났습니다. 반면 고급 참여자는 작동 방식을 이해하더라도 자동화 자체의 필요성을
            낮게 평가했습니다.
          </p>
          <p className="research-insight__closing research-insight__closing--lead">
            이에 이번 프로젝트에서는{' '}
            <span className="research-insight__highlight">
              이해 장벽을 화면과 정보 구조로 개선할 가능성이 더 크게 관찰된 초급 사용자
            </span>{' '}
            를 우선 타깃으로 설정했습니다.
          </p>
          <p className="research-insight__closing">
            다만 집단별 참여자가 2명인 탐색적 인터뷰이므로, 이는 시장 전체에 대한 결론이
            아니라 후속 검증이 필요한 디자인 가설로 다뤘습니다.
          </p>
        </div>

        {/* 06 Competitor Research (Figma 147:74) */}
        <div className="research-competitor">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-competitor__eyebrow">
            [ 06 — Competitor Research ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-competitor__title">
            다른 투자 서비스는 먼저 성향을 묻고, 같은 기준으로
            <br />
            상품을 비교하게 했습니다
          </RevealHeading>
          <p className="research-competitor__intro">
            로보어드바이저와 펀드 서비스는 몇 가지 질문을 통해 사용자의 투자 경험과 감수할 수
            있는 위험 수준을 먼저 파악했습니다.
          </p>
          <p className="research-competitor__intro">
            이후 기대 수익, 손실 위험, 투자 기간처럼 동일한 기준으로 상품을 비교하게 하여,
            처음 투자하는 사용자도 무엇을 보고 결정해야 하는지 이해할 수 있도록 안내했습니다.
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
                AI Master와 로보어드바이저는 제공하는 상품과 사용자가 다릅니다. 하지만 처음 온
                사용자에게 낯선 투자 옵션을 설명하고, 자신의 성향에 맞는 선택을 돕는다는
                점에서는 같은 문제를 풀고 있었습니다.
              </p>
              <p>
                반면 기존 AI Master는 여러 투자자 캐릭터와 전략을 먼저 제시했습니다. 사용자는
                자신의 투자 성향을 파악하거나 동일한 기준으로 전략을 비교하기 전에 Master의
                이미지와 인상부터 마주했습니다.
              </p>
              <p>
                그 결과 사용자는 어떤 전략이 자신과 가까운지 판단하기보다, 알고 있는 인물이나
                눈에 띄는 이미지에 의존해 탐색을 시작했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
