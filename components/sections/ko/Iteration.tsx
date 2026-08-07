import RevealHeading from '@/components/RevealHeading';

export default function Iteration() {
  return (
    <section id="iteration" className="section iteration">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow iteration__eyebrow">
          [ 08.2 — Iteration ]
        </p>
        <RevealHeading level="h2" className="ds-h2 iteration__title">
          사용자가 직접 전략을 조정하게 하자, AI에게 맡긴다는 가치가 사라졌습니다
        </RevealHeading>
        <p className="iteration__intro">
          신뢰를 높이기 위한 첫 번째 아이디어는 사용자가 매수와 매도 조건을 직접 설정하게
          하는 것이었습니다. 자신의 돈이 어떻게 움직일지 직접 정할 수 있다면 불안도 줄어들
          것이라고 생각했습니다.
        </p>
        <p className="iteration__intro">
          그러나 이 방식에서는 사용자가 다시 투자 전략을 이해하고 설계해야 했습니다. 결국
          AI가 사용자를 대신해 판단하고 거래한다는 AI Master의 핵심 가치도 약해졌습니다.
        </p>

        <div className="iteration__body">
          {/* Left: solution-reframing diagram (Figma 634×476) */}
          <figure className="iteration__panel">
            <img
              className="iteration__img media-fill"
              src="/images/ideation/solution-redefine-process.png"
              alt=""
              aria-hidden
            />
            <figcaption className="iteration__caption">
              [ Reframing Control — Redefining the Solution Direction Based on Research ]
            </figcaption>
          </figure>

          {/* Right: reframing narrative */}
          <div className="iteration__text">
            <p className="iteration__para">
              초급 참여자가 원한 것은 더 많은 설정 권한이 아니라, AI의 판단과 자신의 개입
              시점을 아는 것이었습니다. 따라서 수동 설정 대신 각 단계의 결정 주체와 개입
              시점을 보여주는 방향으로 전환했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
