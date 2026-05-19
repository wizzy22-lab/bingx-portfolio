import SectionHeader from '@/components/SectionHeader';

const WORKED = [
  '세 가지 질문 인테이크는 빠르게 느껴졌고, 장벽처럼 느껴지지 않았다.',
  '나란히 비교 화면에서, 테스터들이 "이제 알겠다"는 반응을 보였다.',
  'MDD를 평이한 언어로 설명한 것이 % 단독 표기보다 더 명확하게 읽혔다.',
];

const DIDNT = [
  '테스터 두 명은 포트폴리오 규모에 대한 네 번째 질문을 원했다.',
  '"전체 카탈로그 건너뛰기" 링크는 첫 패스에서 놓치기 쉬웠다.',
  '거래 로그 주석이 첫 읽기에서 법조문처럼 느껴졌다 — 카피 보완 필요.',
];

export default function UserTest() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="사용성 테스트 (n = 8)"
          title="시스템 사용성 척도(SUS)로 측정."
          level="h1"
        />

        <div
          className="ds-stat-standalone"
          style={{ margin: '0 auto var(--space-20) auto' }}
        >
          <div className="ds-stat-standalone__number">
            <span>88</span>
          </div>
          <hr className="ds-stat-standalone__divider" />
          <p className="ds-stat-standalone__label">SUS 점수</p>
          <p className="ds-stat-standalone__caption">
            상위 15% — SUS 기준으로 "Excellent" 등급.
          </p>
        </div>

        <div className="ds-need-pain-grid">
          <article className="ds-insight">
            <p className="ds-insight__eyebrow">잘된 점</p>
            <ul className="ds-numbered-step__list" style={{ marginTop: 'var(--space-6)' }}>
              {WORKED.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </article>
          <article className="ds-insight ds-insight--dark">
            <p className="ds-insight__eyebrow">아쉬운 점</p>
            <ul className="ds-numbered-step__list" style={{ marginTop: 'var(--space-6)' }}>
              {DIDNT.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
