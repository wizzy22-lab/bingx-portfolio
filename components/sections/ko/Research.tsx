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
    value: '43.5',
    text: '많은 사용자가 서비스 안에 AI 기능이 있다는 사실조차 인지하지 못하고 있었다.',
  },
  {
    value: '70',
    text: '사용자들은 AI가 투자 수익을 완전히 자동화하기보다, 의사결정을 도와주기를 기대했다.',
  },
  {
    value: '76.9',
    text: '설명이 더 명확했다면 서비스를 사용할 의향이 있다고 응답했다.',
  },
];

const INSIGHT_GROUPS = [
  {
    variant: 'beginner',
    title: '초급 사용자',
    cards: [
      {
        title: '정보 과부하 · 구조적 혼란',
        body: '초급 사용자들은 중요한 정보와 기능이 어디에 있는지 빠르게 파악하는 데 어려움을 겪었다. 복잡한 구조와 일관되지 않은 흐름이 탐색 피로를 키웠고, 경험 도중에 이탈하게 만들었다.',
      },
      {
        title: 'AI 기능에 대한 제한적인 이해',
        body: '초급 사용자들은 AI가 어떻게 추천을 만들어내고 판단을 내리는지 이해하기 어려워했다. 추천의 근거와 AI의 책임 범위가 불분명해질수록, 사용자들은 결과를 스스로 통제할 수 없다고 느끼는 경우가 많아졌다.',
      },
    ],
  },
  {
    variant: 'advanced',
    title: '고급 사용자',
    cards: [
      {
        title: 'AI 자동화에 대한 낮은 필요성',
        body: '고급 사용자들은 이미 자신만의 거래 원칙과 리듬을 가지고 있었다. 시장을 읽고 스스로 판단을 내리는 과정 자체를 중요하게 여겼으며, AI 자동화를 거래에 대한 몰입감을 줄이는 요소로 받아들이는 경우가 많았다.',
      },
      {
        title: '신뢰와 속도 중심의 거래 환경',
        body: '고급 사용자들은 체결 속도, 시스템 안정성, 거래 환경의 신뢰성 같은 요소에 매우 민감했다. 작은 오류 하나도 곧바로 금전적 결과로 이어질 수 있기 때문에, 플랫폼 자체에 대한 신뢰가 거래 경험의 핵심 요소가 되었다.',
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
            [ 03.1 — 2차 리서치 · 커뮤니티 ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-community__title">
            커뮤니티 반응에서 혼란의 패턴이 반복적으로 드러났다
          </RevealHeading>

          <div className="research-community__layout">
            <figure className="research-community__collage">
              <img
                className="research-community__collage-img media-fill"
                src="/images/research/community-reactions.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-community__collage-caption">
                [커뮤니티 반응 - Reddit · Google Reviews · App Store Reviews]
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
            사용자들은 서비스를 어떻게 사용해야 하는지 이해하는 데 어려움을 겪고 있었다.
          </p>
        </div>

        {/* 03.2 Secondary Research — Survey (Figma 129:54) */}
        <div className="research-survey">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-survey__eyebrow">
            [ 03.2 — 2차 리서치 · 설문 ]
          </p>
          <p className="research-survey__intro">
            이러한 문제가 사용자 전반에서 일관되게 나타나는지 확인하기 위해 설문을 진행했다.
            [위지 확인: n=?]
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
                [설문 결과 - AI 트레이딩 기능에 대한 사용자 인식]
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
            사용자들은 AI 자체를 거부한 것이 아니라, 그 목적과 사용 흐름, 결과를 해석하는
            방법을 충분히 이해하지 못해 기능 사용을 망설이고 있었다.
          </p>
          <p className="research-survey__closing">
            그러나 설문만으로는 이러한 반응이 왜 나타나는지 명확하게 설명하기 어려웠다. 특히
            거래 경험 수준이 다른 사용자들이 AI Master를 어떻게 다르게 인식하는지 이해할
            필요가 있었다.
          </p>
        </div>

        {/* 04 Primary Research — Interview (Figma 133:54) */}
        <div className="research-primary">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-primary__eyebrow">
            [ 04 — 1차 리서치 · 인터뷰 ]
          </p>
          <p className="research-primary__intro">
            거래 경험에 따라 AI Master에 대한 인식이 어떻게 달라지는지 이해하기 위해 사용자
            4명(초급 2명, 고급 2명)을 인터뷰했다. 어떻게 에이전트를 선택했는지, AI가 무엇을
            해주길 기대했는지, 그리고 어디에서 망설였는지를 물었다.
          </p>
          <div className="research-duo research-duo--interview">
            <figure className="research-duo__figure">
              <img
                className="research-duo__img media-fill"
                src="/images/research/beginner-user.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-duo__caption">[ 인터뷰 — 초급 사용자 (n=2) · 원격 ]</figcaption>
            </figure>
            <figure className="research-duo__figure">
              <img
                className="research-duo__img media-fill"
                src="/images/research/advanced-user.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-duo__caption">[ 인터뷰 — 고급 사용자 (n=2) · 원격 ]</figcaption>
            </figure>
          </div>
        </div>

        {/* 05 Analysis (Figma 133:54) */}
        <div className="research-analysis">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-analysis__eyebrow">
            [ 05 — 분석 ]
          </p>
          <p className="research-analysis__intro">
            인터뷰를 분석한 결과, 사용자들은 서로 다르게 표현했지만 비슷한 감정적·행동적
            패턴이 반복적으로 나타났다. 이러한 패턴을 더 잘 구조화하기 위해, 사용자 발화를
            분류하고 컬러 코딩 과정을 통해 유사한 맥락끼리 묶었다.
          </p>
          <div className="research-duo research-duo--analysis">
            <figure className="research-duo__figure">
              <img
                className="research-duo__img media-fill"
                src="/images/research/color-coding.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-duo__caption">[ 컬러 코딩 — 사용자 발화 그룹핑 ]</figcaption>
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
              <figcaption className="research-duo__caption">[ 친화도 매핑 — 팀 세션 ]</figcaption>
            </figure>
          </div>
          <p className="research-analysis__closing">
            인터뷰에 대한 컬러 코딩과 친화도 매핑을 통해, 사용자들이 거래 경험 수준에 따라
            AI Master를 완전히 다른 방식으로 인식하고 있다는 것을 발견했다.
          </p>
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
                    <p className="insight-group__card-body">{c.body}</p>
                  </div>
                ))}
              </article>
            ))}
          </RevealOnView>

          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-insight__eyebrow">
            insight
          </p>
          <p className="research-insight__closing">
            그 결과, AI Master는 초급 사용자에게는 지나치게 복잡하게 느껴졌고, 고급
            사용자에게는 충분히 강한 동기를 제공하지 못했다.
          </p>
          <p className="research-insight__closing">
            특히 많은 고급 사용자들은 거래하는 행위 자체를 즐겼기 때문에, 애초에 AI의 개입을
            원하지 않았다.
          </p>
          <p className="research-insight__closing research-insight__closing--lead">
            따라서 이 프로젝트는 초급 사용자가{' '}
            <span className="research-insight__highlight">
              전략 거래를 더 쉽게 이해하고 자신 있게 경험에 진입하도록 돕는 데
            </span>{' '}
            초점을 맞췄다.
          </p>
        </div>

        {/* 06 Competitor Research (Figma 147:74) */}
        <div className="research-competitor">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-competitor__eyebrow">
            [ 06 — 경쟁사 리서치 ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-competitor__title">
            다른 투자 서비스들은 의사결정을
            <br />
            <span className="research-competitor__highlight">단계별로 안내했지만</span>, AI
            Master는 그렇지 않았다
          </RevealHeading>

          <div className="research-competitor__layout">
            <figure className="research-competitor__figure">
              <img
                className="research-competitor__img media-fill"
                src="/images/research/competitor-research.png"
                alt=""
                aria-hidden
              />
              <figcaption className="research-competitor__caption">
                [투자 플랫폼별 의사결정 프레임워크 비교
                <br />
                Source : Carmignac · Robo-advisor · Fund Service Interfaces]
              </figcaption>
            </figure>

            <div className="research-competitor__copy">
              <p>
                로보 어드바이저와 펀드 플랫폼은 투자 선호도, 옵션 비교, 최종 의사결정 흐름을
                단계별로 안내했다. 또한 기대 수익률, 리스크 수준, 투자 기간과 같은 명확한
                의사결정 기준을 중심으로 설계되어, 사용자가 더 확신을 가지고 선택할 수 있도록
                도왔다.
              </p>
              <p>
                반면 AI Master는 투자자 페르소나를 통해 전략을 제시했을 뿐, 비교 기준을 추천
                흐름과 명확하게 연결하지 못했다. 그 결과 사용자들은 논리적인 전략 비교보다는
                이미지나 분위기 같은 인상에 더 의존하게 되었다.
              </p>
              <p>
                그러나 실제 돈이 개입되는 순간, 이 불분명한 의사결정 구조는 빠르게 불안으로
                바뀌었고, 많은 사용자가 최종 결정 단계에 이르기 전에 이탈했다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
