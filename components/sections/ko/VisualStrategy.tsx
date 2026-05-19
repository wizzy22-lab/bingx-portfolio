import SectionHeader from '@/components/SectionHeader';

const INSIGHTS = [
  {
    eyebrow: '01 시각 피로 감소',
    title: '긴 세션을 견딜 만하게.',
    body: '몇 시간 동안 보는 초록·빨강 시세 데이터는 밝은 표면에서 눈을 빠르게 지치게 한다. 어두운 표면은 집중을 더 오래 유지시킨다.',
  },
  {
    eyebrow: '02 더 깊은 집중',
    title: '낮은 주변 휘도가 데이터에 시선을 잡아둔다.',
    body: 'UI 크롬은 물러난다. 대비 예산은 차트와 숫자가 가져간다.',
  },
  {
    eyebrow: '03 더 명확한 시그널 위계',
    title: '노랑과 파랑이 결정의 순간을 표시한다.',
    body: '강조색은 사용자가 결정을 요청받는 순간에만 등장한다 — 절대 장식으로 쓰지 않는다.',
  },
];

export default function VisualStrategy() {
  return (
    <section id="design" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="비주얼 전략"
          title="다크 모드로 전환한 이유 — 트레이딩은 훑는 것이 아니라, 읽는 것이다."
          level="h1"
        />
        <div className="ds-before-after">
          <div className="ds-before-after__col ds-before-after__col--before">
            <p className="ds-before-after__eyebrow">라이트</p>
            <p className="ds-before-after__text">
              기존 스펙 — 밝은 표면, 높은 휘도, 차트가 크롬과 경쟁한다.
            </p>
          </div>
          <div className="ds-before-after__arrow" aria-hidden="true" />
          <div className="ds-before-after__col ds-before-after__col--after">
            <p className="ds-before-after__eyebrow">다크</p>
            <p className="ds-before-after__text">
              리디자인 — 낮은 휘도 표면, 차트와 숫자가 대비를 가져간다.
            </p>
          </div>
        </div>
        <div
          className="ds-impact-grid ds-impact-grid--3col-pattern"
          style={{ marginTop: 'var(--space-16)' }}
        >
          {INSIGHTS.map((i) => (
            <article key={i.eyebrow} className="ds-insight ds-insight--dark">
              <p className="ds-insight__eyebrow">{i.eyebrow}</p>
              <h3 className="ds-insight__title">{i.title}</h3>
              <p className="ds-insight__body">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
