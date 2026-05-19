import SectionHeader from '@/components/SectionHeader';

export default function IADesign() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="정보 구조"
          title="카탈로그가 아니라, 결정을 중심으로 플로우를 재구성."
          level="h1"
        />
        <div className="ds-before-after">
          <div className="ds-before-after__col ds-before-after__col--before">
            <p className="ds-before-after__eyebrow">As-Is</p>
            <p className="ds-before-after__text">
              평면 리스트 → 에이전트 상세 → 활성화. 선택이 상세 페이지 안에서 일어난다.
            </p>
          </div>
          <div className="ds-before-after__arrow" aria-hidden="true" />
          <div className="ds-before-after__col ds-before-after__col--after">
            <p className="ds-before-after__eyebrow">To-Be</p>
            <p className="ds-before-after__text">
              선호도 → 추천 후보 → 비교 → 활성화. 선택이 독립된 단계가 된다.
            </p>
          </div>
        </div>
        <blockquote
          className="ds-pull-quote ds-pull-quote--dark"
          style={{ marginTop: 'var(--space-16)' }}
        >
          <p className="ds-pull-quote__quote">
            IA는 화면이 사는 곳이 아니다. 결정이 사는 곳이다.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
