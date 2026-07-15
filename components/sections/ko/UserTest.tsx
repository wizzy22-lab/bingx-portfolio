import RevealHeading from '@/components/RevealHeading';

const WORKED = [
  '단계별 흐름이 이해하기 더 쉬워졌다',
  '전략 비교가 더 명확하고 구조적으로 느껴졌다',
  '현재 상태와 다음 행동에 대한 이해가 향상되었다',
  '불필요한 화면 전환이 줄어들었다',
  '전반적인 탐색 흐름이 더 안정적으로 느껴졌다',
];

const DIDNT = [
  '일부 아이콘은 즉각적으로 직관적이지 않았다',
  '사용자들이 전략 상세 영역을 해석하느라 잠시 멈추는 경우가 있었다',
];

export default function UserTest() {
  return (
    <section id="final" className="section ut">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ut__eyebrow">[ 10 — 사용자 테스트 ]</p>
        <RevealHeading level="h2" className="ds-h2 ut__title">
          사용자들은 의사결정 흐름을
          <br />
          이전보다 더 명확하게 탐색할 수 있었다
        </RevealHeading>

        <div className="ut__top">
          {/* Left: usability test visual (Figma 634×476) */}
          <img
            className="ut__media ut__media--tall media-fill"
            src="/images/user-test/user-test.jpg"
            alt=""
            aria-hidden
          />

          {/* Right: summary + supporting visual (Figma 634×159) */}
          <div className="ut__summary">
            <p className="ut__para">
              리디자인은 SUS 88점(n=5)을 기록했다 — 상위 15%, &ldquo;Excellent&rdquo; 등급이다.
            </p>
            <p className="ut__para">
              사용성 테스트 결과, 참가자 5명 전원(100%)이 전략 탐색부터 실행까지
              큰 어려움 없이 플로우를 완료했다.
            </p>
            <p className="ut__para">
              특히 단계별 구조와 흐름 안내는 초급 사용자가 현재 상태와 다음 행동을 더 잘
              이해하도록 도왔다.
            </p>
            <img
              className="ut__media ut__media--wide media-fill"
              src="/images/user-test/sus-score.png"
              alt=""
              aria-hidden
            />
          </div>
        </div>

        <div className="ut__cards">
          <article className="ut__card">
            <h3 className="ut__card-title">잘된 점</h3>
            <ul className="ut__list">
              {WORKED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="ut__card ut__card--muted">
            <h3 className="ut__card-title">아쉬운 점</h3>
            <ul className="ut__list">
              {DIDNT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
