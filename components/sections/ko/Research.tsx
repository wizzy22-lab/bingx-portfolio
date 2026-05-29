import RevealHeading from '@/components/RevealHeading';

const PATTERNS = [
  {
    eyebrow: '패턴 01',
    title: '성과는 전략이 아니다',
    body: '사용자는 APY는 보지만 그 에이전트가 어떤 베팅을 하고 있는지는 알 수 없다.',
  },
  {
    eyebrow: '패턴 02',
    title: '투자 기간이 보이지 않는다',
    body: '"공격적", "보수적" 라벨은 보유 기간 없이 아무것도 의미하지 않는다.',
  },
  {
    eyebrow: '패턴 03',
    title: '신뢰는 숫자가 아니라 설명에서 온다',
    body: '사용자는 결과가 좋았다는 사실보다, 왜 그렇게 행동했는지를 알고 싶어한다.',
  },
];

const QUOTES = [
  {
    quote: '"그냥 숫자가 제일 큰 걸 골랐어요. 다른 뭘 봐야 할지 몰랐거든요."',
    attribution: 'P02 · 28세 · 첫 암호화폐 사용자',
  },
  {
    quote: '"이름은 다들 개성 있어 보이는데, 카드는 다 똑같이 읽혀요."',
    attribution: 'P04 · 33세 · 가벼운 트레이더',
  },
  {
    quote: '"12개 중에서 추측하는 것보다, 저 같은 사람한테 맞는 걸 알려주면 좋겠어요."',
    attribution: 'P05 · 41세 · 전 주식 투자자',
  },
];

const CLUSTERS = [
  {
    eyebrow: '클러스터 01',
    title: '비교가 병목이다',
    body: '사용자에게 부족한 것은 에이전트가 아니라, 비교할 방법이다.',
  },
  {
    eyebrow: '클러스터 02',
    title: '확신은 행동 이전에 만들어진다',
    body: '신뢰는 활성화 이후가 아니라, 선택 과정에서 형성된다.',
  },
  {
    eyebrow: '클러스터 03',
    title: '맥락 없는 숫자는 노이즈다',
    body: '수익률과 MDD는 기준선이 주어질 때 비로소 쓸모 있어진다.',
  },
];

const CRITERIA = [
  {
    eyebrow: '평가 기준 01',
    text: '제품이 사용자의 옵션 비교를 돕는가?',
  },
  {
    eyebrow: '평가 기준 02',
    text: '단순한 데이터가 아니라 의사결정 구조를 제공하는가?',
  },
  {
    eyebrow: '평가 기준 03',
    text: '에이전트가 무엇을 했는지가 아니라, 왜 그렇게 행동했는지를 설명하는가?',
  },
];

const COMPARE_ROWS = [
  ['리스크 프로필 온보딩', '있음 — 다단계 설문', '없음'],
  ['에이전트 나란히 비교', '제한적 (포트폴리오 2개)', '미지원'],
  ['성과의 맥락화', 'S&P/지수와 벤치마킹', '단순 % 노출'],
  ['의사결정 근거 노출', '포트폴리오별 전략 문서', '지표 리스트만'],
];

const EMPATHY = [
  { label: 'THINK', body: '"이 중에서 진짜 나한테 돈을 벌어줄 게 뭘까?"', variant: '' },
  {
    label: 'FEEL',
    body: 'AI에 설레면서도, 잘못된 선택으로 손실을 볼까 봐 불안하다.',
    variant: ' ds-insight--yellow',
  },
  {
    label: 'SAY',
    body: '"저 같은 사람한테는 어떤 게 맞는지 그냥 알려주세요."',
    variant: ' ds-insight--dark',
  },
  {
    label: 'DO',
    body: '리스트를 세 번 스크롤하고, 상세 페이지 두 개를 열어보고, 결국 하나도 고르지 않는다.',
    variant: '',
  },
];

const JOURNEY_IMPLICATIONS = [
  '경험이 무너지는 지점은 끝이 아니라 "비교" 단계다.',
  '에이전트를 더 추가하는 것은 이탈을 완화하는 것이 아니라 더 깊게 만든다.',
  '리디자인은 "비교" 이전이 아니라, "비교" 안에 구조를 심어야 한다.',
];

function SubsectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header style={{ marginBottom: 'var(--space-12)' }}>
      <p className="ds-eyebrow ds-eyebrow--accent-blue">{eyebrow}</p>
      <RevealHeading
        level="h3"
        className="ds-h2"
        style={{ margin: 'var(--space-4) 0 0 0', maxWidth: '820px' }}
      >
        {title}
      </RevealHeading>
      {lede && (
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-6) 0 0 0',
            maxWidth: '720px',
          }}
        >
          {lede}
        </p>
      )}
    </header>
  );
}

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="section-inner">
        {/* 05-1 Secondary Research */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.1 · 리서치 · 2차 자료"
            title="아무도 도와주지 않을 때, 사람들이 하는 말."
            lede="r/CryptoCurrency와 BingX 커뮤니티 스레드 (Reddit, Discord, YouTube 댓글 약 120건)에서 반복적으로 등장하는 세 가지 불만 패턴이 드러났다."
          />
          <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
            <img
              className="ds-media-placeholder media-fill"
              data-aspect="16/9"
              src="/images/research/community-reactions.png"
              alt=""
              aria-hidden
            />
            <figcaption className="ds-media__caption">
              샘플 커뮤니티 댓글 — 9월부터 11월까지.
            </figcaption>
          </figure>
          <div className="ds-impact-grid ds-impact-grid--3col-pattern">
            {PATTERNS.map((p) => (
              <article key={p.title} className="ds-insight ds-insight--dark">
                <p className="ds-insight__eyebrow">{p.eyebrow}</p>
                <h4 className="ds-insight__title">{p.title}</h4>
                <p className="ds-insight__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 05-2 Survey */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.2 · 리서치 · 설문 (n = 64)"
            title="거래가 시작되기도 전에 자신감이 무너진다."
          />
          <div className="ds-stat-grid">
            <div className="ds-stat-grid__cell">
              <div className="ds-stat-grid__number">
                <span className="ds-stat-grid__number-value">68</span>
                <span className="ds-stat-grid__number-suffix">%</span>
              </div>
              <hr className="ds-stat-grid__divider" />
              <p className="ds-stat-grid__label">
                현재 리스트 화면에서는 에이전트를 구분하기 어렵다고 답함
              </p>
            </div>
            <div className="ds-stat-grid__cell">
              <div className="ds-stat-grid__number">
                <span className="ds-stat-grid__number-value">72</span>
                <span className="ds-stat-grid__number-suffix">%</span>
              </div>
              <hr className="ds-stat-grid__divider" />
              <p className="ds-stat-grid__label">
                활성화 전에 "선택을 도와주는" 단계를 원함
              </p>
            </div>
            <div className="ds-stat-grid__cell">
              <div className="ds-stat-grid__number">
                <span className="ds-stat-grid__number-value">54</span>
                <span className="ds-stat-grid__number-suffix">%</span>
              </div>
              <hr className="ds-stat-grid__divider" />
              <p className="ds-stat-grid__label">
                이전에 AI 트레이딩 제품의 온보딩 중간에 이탈한 경험이 있음
              </p>
            </div>
          </div>
          <figure className="ds-media ds-media--full" style={{ marginTop: 'var(--space-12)' }}>
            <img
              className="ds-media-placeholder media-fill"
              data-aspect="16/9"
              src="/images/research/survey.png"
              alt=""
              aria-hidden
            />
            <figcaption className="ds-media__caption">
              단계별 자가응답 확신도, 1–5 척도.
            </figcaption>
          </figure>
        </div>

        {/* 05-3 Interview */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.3 · 리서치 · 인터뷰 (n = 6)"
            title="사용자의 입에서 나온 말."
          />
          <div className="ds-impact-grid ds-impact-grid--3col-pattern">
            {QUOTES.map((q) => (
              <blockquote key={q.attribution} className="ds-pull-quote">
                <p className="ds-pull-quote__quote">{q.quote}</p>
                <p className="ds-pull-quote__attribution">{q.attribution}</p>
              </blockquote>
            ))}
          </div>
        </div>

        {/* 05-4 Affinity Mapping */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.4 · 리서치 · 친화도 매핑"
            title="140여 개 관찰을 세 가지 주제로 묶기."
            lede="2차·설문·인터뷰에서 모은 발화와 행동을 한 보드 위에서 그룹핑했다. 세 가지 클러스터가 드러났다."
          />
          <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
            <video
              className="ds-media-placeholder media-fill"
              data-aspect="16/9"
              src="/videos/team-affinity.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
            <figcaption className="ds-media__caption">
              친화도 보드 — 리서치 정리에서 도출한 스티키 노트 클러스터링.
            </figcaption>
          </figure>
          <div className="ds-impact-grid ds-impact-grid--3col-pattern">
            {CLUSTERS.map((c) => (
              <article key={c.title} className="ds-insight ds-insight--dark">
                <p className="ds-insight__eyebrow">{c.eyebrow}</p>
                <h4 className="ds-insight__title">{c.title}</h4>
                <p className="ds-insight__body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 05-5 Competitive Analysis */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.5 · 리서치 · 경쟁사 분석"
            title="AI 마스터가 지금 어디에 있고, 어디로 가야 하는가."
          />
          <ul className="ds-criteria-list">
            {CRITERIA.map((c) => (
              <li key={c.eyebrow} className="ds-criteria-list__item">
                <span className="ds-criteria-list__dot" aria-hidden="true" />
                <p className="ds-criteria-list__eyebrow">{c.eyebrow}</p>
                <p className="ds-criteria-list__text">{c.text}</p>
              </li>
            ))}
          </ul>
          <table className="compare-table" aria-label="경쟁사 비교">
            <thead>
              <tr>
                <th scope="col">기준</th>
                <th scope="col">일반 로보 어드바이저</th>
                <th scope="col">BingX AI 마스터 · 현재</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 05-6 Empathy Map */}
        <div style={{ marginBottom: 'var(--space-30)' }}>
          <SubsectionHeader
            eyebrow="05.6 · 리서치 · 공감 지도"
            title="에이전트를 처음 고르는 사용자의 머릿속."
          />
          <div className="ds-impact-grid ds-impact-grid--4col">
            {EMPATHY.map((q) => (
              <article key={q.label} className={`ds-insight${q.variant}`}>
                <p className="ds-insight__eyebrow">{q.label}</p>
                <p className="ds-insight__body" style={{ marginTop: 'var(--space-4)' }}>
                  {q.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* 05-7 Journey Map */}
        <div>
          <SubsectionHeader
            eyebrow="05.7 · 리서치 · 여정 지도"
            title="비교가 시작되어야 할 자리에서 확신이 떨어진다."
          />
          <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
            <img
              className="ds-media-placeholder media-fill"
              data-aspect="16/9"
              src="/images/define/user-journey.png"
              alt=""
              aria-hidden
            />
            <figcaption className="ds-media__caption">
              발견 → 탐색 → 비교 → 결정 → 활성화 단계별 감정 여정.
            </figcaption>
          </figure>
          <ul className="ds-research-finding__implication-list">
            {JOURNEY_IMPLICATIONS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
