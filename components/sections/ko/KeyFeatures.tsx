import SectionHeader from '@/components/SectionHeader';

type Feature = {
  number: string;
  title: string;
  body: string;
  list: string[];
  outcome: string;
  mediaLabel: string;
  mediaMeta: string;
  mediaRight: boolean;
};

const FEATURES: Feature[] = [
  {
    number: '기능 01',
    title: '세 가지 질문, 그에 맞는 세 명의 에이전트.',
    body: '카탈로그를 열기 전에, 사용자는 짧은 선호도 — 리스크 성향, 보유 기간, 관여도 — 를 입력한다. 시스템은 순위화된 세 명의 에이전트 추천 후보를 각 한 줄짜리 매칭 이유와 함께 제시한다.',
    list: [
      '세 가지 질문 — 30초 이내.',
      '추천된 각 에이전트마다 매칭 이유가 표시된다.',
      '언제든지 건너뛰고 전체 카탈로그를 볼 수 있다.',
    ],
    outcome: '선택 시간이 5분짜리 스크롤에서, 안내된 1분으로 줄었다.',
    mediaLabel: '개인화 추천',
    mediaMeta: '리스크 · 기간 · 관여도 → 3명의 에이전트',
    mediaRight: true,
  },
  {
    number: '기능 02',
    title: '발견·비교·결정을 세 개의 별도 화면으로.',
    body: '이전에는 하나의 무한 리스트였던 것을, 각자 자체적인 어포던스와 성공 상태를 가진 세 개의 의도적 순간으로 분리했다.',
    list: [
      '발견 화면은 관련 있는 에이전트만 노출한다.',
      '비교 화면은 최대 3명의 에이전트를 나란히 배치한다.',
      '결정 화면은 무엇을, 왜 선택했는지 확인시켜준다.',
    ],
    outcome: '테스트에서 이탈이 비교 단계에서 완전히 사라졌다.',
    mediaLabel: '단계별 의사결정 플로우',
    mediaMeta: '발견 → 비교 → 결정',
    mediaRight: false,
  },
  {
    number: '기능 03',
    title: '전략이 먼저, 숫자는 그다음.',
    body: '비교 카드는 어떤 성과 숫자보다 먼저, 에이전트의 입장 — 철학, 보유 기간, 리스크 자세 — 를 먼저 보여준다. 숫자는 한 줄짜리 해석과 함께 맥락화된다.',
    list: [
      '입장, 기간, 리스크가 스크롤 없이 보인다.',
      '수익률은 기준선과 함께 표시된다 ("BTC 단순 보유 대비").',
      'MDD는 평이한 언어로 설명된다.',
    ],
    outcome: '사용자가 자신의 선택을 한 문장으로 설명할 수 있게 됐다.',
    mediaLabel: '전략 비교',
    mediaMeta: '나란히 · 에이전트 3명 · 맥락화된 숫자',
    mediaRight: true,
  },
  {
    number: '기능 04',
    title: '바라만 보는 성과가 아니라, 추론할 수 있는 성과.',
    body: '활성화 이후, 각 에이전트의 대시보드는 P/L뿐 아니라 — 진입 근거, 청산 트리거, 무엇이 바뀌었는지 — 최근 거래의 사고 과정을 함께 노출한다.',
    list: [
      '최근 3건의 거래에 주석.',
      '전략 일관성 점수.',
      '주간 요약을 평이한 언어로.',
    ],
    outcome: '신뢰가 가입 시점이 아니라, 사용 중에 다시 쌓였다.',
    mediaLabel: '내장된 성과 리뷰',
    mediaMeta: '거래 · 일관성 · 주간 요약',
    mediaRight: false,
  },
];

export default function KeyFeatures() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="핵심 기능"
          title="카탈로그를 의사결정 경로로 바꾸는 네 가지 움직임."
          level="h1"
        />
        <div style={{ display: 'grid', gap: 'var(--space-20)' }}>
          {FEATURES.map((f) => (
            <article
              key={f.number}
              className={`ds-split-feature ds-split-feature--dark ds-split-feature--60-40 ds-split-feature--${
                f.mediaRight ? 'media-right' : 'media-left'
              }`}
            >
              <div className="ds-split-feature__content">
                <p className="ds-eyebrow ds-eyebrow--accent-yellow">{f.number}</p>
                <h3 className="ds-h2" style={{ marginTop: 'var(--space-4)' }}>
                  {f.title}
                </h3>
                <p className="ds-body" style={{ marginTop: 'var(--space-6)' }}>
                  {f.body}
                </p>
                <ul className="ds-split-feature__list">
                  {f.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="ds-split-feature__outcome">
                  <p className="ds-body-lg">
                    <span className="ds-implication-arrow">→</span>
                    {f.outcome}
                  </p>
                </div>
              </div>
              <div className="ds-split-feature__media">
                <div
                  className="ds-media-placeholder"
                  data-aspect="4/3"
                  role="img"
                  aria-label={f.mediaLabel}
                  style={{ width: '100%', height: '100%' }}
                >
                  <span className="ds-media-placeholder__label">{f.mediaLabel}</span>
                  <span className="ds-media-placeholder__meta">{f.mediaMeta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
