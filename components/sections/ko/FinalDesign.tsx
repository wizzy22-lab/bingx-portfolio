import SectionHeader from '@/components/SectionHeader';

const MOCKUPS = [
  {
    label: '메인 플로우',
    meta: '에이전트 선택의 엔드-투-엔드 여정.',
    aspect: '16/9' as const,
  },
  {
    label: '비교',
    meta: '추천된 세 명의 에이전트를 나란히 비교.',
    aspect: '4/3' as const,
  },
  {
    label: '추천',
    meta: '선호도 입력 후 제공되는 개인화 추천 후보.',
    aspect: '4/3' as const,
  },
  {
    label: '선택',
    meta: '근거 요약과 함께 확인되는 결정.',
    aspect: '4/3' as const,
  },
  {
    label: '확인',
    meta: '주석된 거래 로그가 포함된 활성화 직후 대시보드.',
    aspect: '4/3' as const,
  },
];

export default function FinalDesign() {
  return (
    <section id="final" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="최종 디자인"
          title="결정의 경로, 화면으로 구현하다."
          level="h1"
        />

        <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
          <div
            className="ds-media-placeholder"
            data-aspect={MOCKUPS[0].aspect}
            role="img"
            aria-label={MOCKUPS[0].label}
          >
            <span className="ds-media-placeholder__label">{MOCKUPS[0].label}</span>
            <span className="ds-media-placeholder__meta">{MOCKUPS[0].meta}</span>
          </div>
          <figcaption className="ds-media__caption">{MOCKUPS[0].meta}</figcaption>
        </figure>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-8)',
          }}
          className="final-grid"
        >
          {MOCKUPS.slice(1).map((m) => (
            <figure key={m.label} className="ds-media">
              <div
                className="ds-media-placeholder"
                data-aspect={m.aspect}
                role="img"
                aria-label={m.label}
              >
                <span className="ds-media-placeholder__label">{m.label}</span>
                <span className="ds-media-placeholder__meta">{m.meta}</span>
              </div>
              <figcaption className="ds-media__caption">{m.meta}</figcaption>
            </figure>
          ))}
        </div>
        <style>{`
          @media (min-width: 768px) {
            .final-grid { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>
      </div>
    </section>
  );
}
