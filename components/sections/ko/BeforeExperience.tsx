import SectionHeader from '@/components/SectionHeader';

const PROBLEMS = [
  {
    eyebrow: '문제 01',
    title: '차이가 보이지 않는다',
    body: '에이전트 카드들이 같은 지표를 같은 순서로 반복할 뿐, 각 에이전트의 차별점을 시각적으로 드러내지 못한다.',
  },
  {
    eyebrow: '문제 02',
    title: '판단 기준이 없다',
    body: '"좋은 선택"의 기준이 없으니, 사용자는 결국 가장 큰 숫자에 끌리게 된다.',
  },
  {
    eyebrow: '문제 03',
    title: '정보 과부하',
    body: '모든 카드가 수익률, MDD, 샤프, 거래 횟수를 동등하게, 한꺼번에 들이민다.',
  },
  {
    eyebrow: '문제 04',
    title: '인상 기반 선택',
    body: '비교가 무너지면 사용자는 이름·색상·목록 위치로 선택하게 된다.',
  },
];

export default function BeforeExperience() {
  return (
    <section id="problem" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="기존 경험"
          title="모든 에이전트는 보였다. 그러나 누구도 고를 수 없었다."
        />

        <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-16)' }}>
          <div
            className="ds-media-placeholder"
            data-aspect="16/9"
            role="img"
            aria-label="기존 BingX AI 마스터 에이전트 리스트 스크린샷"
          >
            <span className="ds-media-placeholder__label">기존 UI · 에이전트 리스트</span>
            <span className="ds-media-placeholder__meta">리디자인 전 캡처</span>
          </div>
          <figcaption className="ds-media__caption">
            기존 BingX AI 마스터 에이전트 리스트 — 리디자인 전 캡처.
          </figcaption>
        </figure>

        <div className="ds-impact-grid ds-impact-grid--4col">
          {PROBLEMS.map((p) => (
            <article key={p.title} className="ds-insight ds-insight--dark">
              <p className="ds-insight__eyebrow">{p.eyebrow}</p>
              <h3 className="ds-insight__title">{p.title}</h3>
              <p className="ds-insight__body">{p.body}</p>
            </article>
          ))}
        </div>

        <blockquote
          className="ds-pull-quote ds-pull-quote--dark"
          style={{ marginTop: 'var(--space-16)' }}
        >
          <p className="ds-pull-quote__quote">
            노출은 선택이 아니다. 더 많은 에이전트를 보여줘도 사용자는 하나를 고르지 못했다.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
