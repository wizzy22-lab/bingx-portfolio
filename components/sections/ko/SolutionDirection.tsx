import SectionHeader from '@/components/SectionHeader';

export default function SolutionDirection() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="솔루션 방향"
          title="모든 것을 탐색하기에서, 하나의 결정을 안내하기로."
          lede="12개의 에이전트를 한 번에 비교하라고 요구하는 대신, 리디자인은 선택을 세 개의 작은 순차적 결정으로 분해한다."
        />
        <div className="ds-before-after">
          <div className="ds-before-after__col ds-before-after__col--before">
            <p className="ds-before-after__eyebrow">현재</p>
            <p className="ds-before-after__text">
              12개의 에이전트를 둘러본다. 그중 하나가 눈에 띄기를 바란다.
            </p>
          </div>
          <div className="ds-before-after__arrow" aria-hidden="true" />
          <div className="ds-before-after__col ds-before-after__col--after">
            <p className="ds-before-after__eyebrow">리디자인</p>
            <p className="ds-before-after__text">
              세 가지 필터를 따라가며 자신의 상황에 맞는 에이전트를 좁히고, 추려진 후보를 나란히 비교한다.
            </p>
          </div>
        </div>
        <blockquote
          className="ds-pull-quote"
          style={{ marginTop: 'var(--space-16)' }}
        >
          <p className="ds-pull-quote__quote">
            더 많은 에이전트가 아니라, 의사결정의 경로를 드러낼 것.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
