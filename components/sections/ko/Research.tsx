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
        body: '초급 참여자들은 어떤 정보가 중요한지, 자신에게 어떤 기능과 전략이 필요한지 판단하기 어려워했습니다. AI Master에서도 무엇을 기준으로 Master와 전략을 골라야 하는지 알 수 없어 여러 화면을 오가며 탐색했다고 말했습니다.',
      },
      {
        title: 'AI가 어디까지 대신하는지 몰랐습니다',
        body: 'AI가 추천만 해주는지, 실제 매수와 매도도 진행하는지, 전략은 언제 끝나는지 명확히 이해하기 어려워했습니다. 특히 실제 돈을 넣는 화면에 도달하면, 전략을 중지하는 방법과 투자금이 정산되는 시점에 대한 의문이 커졌습니다.',
      },
    ],
  },
  {
    variant: 'advanced',
    title: '고급 참여자',
    cards: [
      {
        title: 'AI에게 맡길 필요를 느끼지 못했습니다',
        body: '고급 참여자들은 이미 자신만의 거래 원칙과 방식을 가지고 있었습니다. 시장을 직접 해석하고 매수와 매도 시점을 판단하는 과정 자체를 거래의 중요한 가치로 보고 있었습니다.',
      },
      {
        title: '검증되지 않은 시스템에 돈을 맡기기 어려웠습니다',
        body: '고급 참여자들은 체결 속도, 시스템 안정성, 거래 환경의 신뢰성을 중요하게 생각했습니다. 이들에게 AI Master는 편리한 자동화 도구라기보다 충분히 검증되지 않은 시스템에 판단과 자금을 맡기는 위험으로 받아들여졌습니다.',
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
            앱 리뷰에서도 “어떻게 사용해야 할지 모르겠다”는 반응이 나타났습니다
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
            리뷰에서 확인된 반응은 단순히 투자 전략이 어렵다는 문제에 그치지 않았습니다.
            사용자는 서비스를 어디서 시작해야 하고, 어떤 순서로 이용해야 하는지도 이해하기
            어려워하고 있었습니다.
          </p>
        </div>

        {/* 03.2 Secondary Research — Survey (Figma 129:54) */}
        <div className="research-survey">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-survey__eyebrow">
            [ 03.2 — 2차 리서치 · 설문 ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-survey__title">
            AI 기능 경험자 9명 중 8명이 ‘설명 부족’을 불편으로 꼽았습니다
          </RevealHeading>
          <p className="research-survey__intro">
            커뮤니티에서 확인한 혼란이 거래소 AI 기능의 사용 경험에서도 나타나는지 확인하기
            위해, 암호화폐 거래소 앱 사용자 22명에게 AI 기반 기능의 이용 경험을 물었습니다.
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
            이 결과만으로 설명 부족이 미사용의 유일한 원인이라고 단정할 수는 없습니다. 다만 이
            표본에서는 AI 기능의 목적과 작동 방식, 결과를 해석하는 방법에 대한 설명이 사용을
            가로막는 장벽 중 하나일 가능성이 나타났습니다.
          </p>
          <p className="research-survey__closing">
            설문만으로는 사용자가 어떤 순간에 망설이고, 왜 거래를 시작하지 않는지 알 수
            없었습니다. 그래서 사용자를 직접 만나 구체적인 경험을 물었습니다.
          </p>
        </div>

        {/* 04 Primary Research — Interview (Figma 133:54) */}
        <div className="research-primary">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow research-primary__eyebrow">
            [ 04 — 1차 리서치 · 인터뷰 ]
          </p>
          <RevealHeading level="h2" className="ds-h2 research-primary__title">
            초급·고급 사용자에게 AI 거래를 망설인 이유를 물었습니다
          </RevealHeading>
          <p className="research-primary__intro">
            암호화폐 거래 경험이 적은 초급 사용자 2명과, 자신의 거래 원칙을 세워 직접 거래하는
            고급 사용자 2명을 인터뷰했습니다. AI Master 또는 유사한 AI 트레이딩 기능을 이용한
            경험, 에이전트와 전략을 고른 기준, AI가 무엇을 해주길 기대했는지, 어디에서 거래를
            망설였는지를 물었습니다.
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
