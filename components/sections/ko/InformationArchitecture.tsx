import RevealHeading from '@/components/RevealHeading';

export default function InformationArchitecture() {
  return (
    <section id="information-architecture" className="section ia">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ia__eyebrow">
          [ 08.4 — Information architecture ]
        </p>
        <RevealHeading level="h2" className="ds-h2 ia__title">
          정보 구조를 사용자의 의사결정 흐름을 중심으로 다시 설계했습니다.
        </RevealHeading>

        <div className="ia__body">
          {/* Left: IA diagram image placeholder (Figma 634×357) */}
          <figure className="ia__panel">
            <img
              className="ia__placeholder media-fill"
              src="/images/ideation/ia.png"
              alt=""
              aria-hidden
            />
            <figcaption className="ia__caption">
              [ Decision Flow Information Architecture ]
            </figcaption>
          </figure>

          {/* Right: redesign rationale */}
          <div className="ia__text">
            <p className="ia__para">
              기존 IA에서는 전략과 기능이 뒤섞여 있어, 사용자가 현재의 흐름을 이해하기 어려웠습니다.
            </p>
            <p className="ia__para">
              이번 재설계에서는 의사결정 과정을 다음과 같이 재구성했습니다
            </p>
            <ul className="ia__list">
              <li>투자 성향 이해하기</li>
              <li>전략 비교하기</li>
              <li>최종 선택하기</li>
            </ul>
            <p className="ia__para">
              각 단계에서 필요한 정보와 기능을 명확하게 분리해, 탐색에서 실행까지의 경험이 더 자연스럽게
              이어지도록 했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
