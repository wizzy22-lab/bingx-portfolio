import RevealHeading from '@/components/RevealHeading';

const WORKED = [
  '5/5명이 핵심 과정을 끝까지 완료했습니다.',
  '투자 성향을 먼저 입력한 뒤 Master를 추천받는 순서를 이해했습니다.',
  '상단의 단계 표시를 통해 현재 위치와 다음 행동을 파악할 수 있었습니다.',
  '실행 전 화면에서 AI의 자동 매수·매도·포지션 종료 범위를 확인했습니다.',
  '전략 화면을 벗어나지 않고 전략 성과와 코인 가격을 확인할 수 있었습니다.',
];

const DIDNT = [
  '일부 기능 아이콘은 처음 보는 순간 의미가 분명하지 않았습니다.',
  '전략 상세 정보를 해석하기 위해 잠시 멈추는 행동이 관찰됐습니다.',
  '전문적인 투자 정보를 초급 사용자가 더 빠르게 이해하도록 설명 순서와 표현을 추가로 다듬을 필요가 있었습니다.',
];

export default function UserTest() {
  return (
    <section id="final" className="section ut">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ut__eyebrow">[ 10 — User Test ]</p>
        <RevealHeading level="h2" className="ds-h2 ut__title">
          참여자 5명 모두 핵심 과정을 완료했지만, 세부 전략과 일부 아이콘은 더 설명이
          필요했습니다
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
              리디자인 프로토타입을 이용해 투자 성향을 입력하고, Master를 추천받아 전략을
              선택한 뒤 실행 전 정보를 확인하는 핵심 과정을 테스트했습니다.
            </p>
            <p className="ut__para">
              사용성 테스트 참여자 5명 모두 전략 탐색부터 실행 확인까지의 과정을 완료했습니다.
            </p>
            <p className="ut__para">
              리디자인은 시스템의 전반적인 사용 편의성을 0점에서 100점 사이로 평가하는
              SUS(System Usability Scale · 시스템 사용성 척도)에서 평균 88점을
              기록했습니다(n=5).
            </p>
            <figure className="ut__figure">
              <img
                className="ut__media ut__media--wide media-fill"
                src="/images/user-test/sus-score.png"
                alt=""
                aria-hidden
              />
              <figcaption className="ut__caption">
                [ User Test Results — Task Completion &amp; SUS ]
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="ut__cards">
          <article className="ut__card">
            <h3 className="ut__card-title">확인된 점</h3>
            <ul className="ut__list">
              {WORKED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="ut__card ut__card--muted">
            <h3 className="ut__card-title">추가로 개선할 점</h3>
            <ul className="ut__list">
              {DIDNT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <p className="ut__closing">
          참여자가 5명인 탐색적 테스트이므로, SUS와 태스크 완료 결과는 제품 성과를 확정하는
          지표가 아니라 후속 개선 방향을 확인하는 참고값으로 해석했습니다.
        </p>
      </div>
    </section>
  );
}
