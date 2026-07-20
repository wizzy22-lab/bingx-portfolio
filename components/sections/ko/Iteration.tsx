import RevealHeading from '@/components/RevealHeading';

const WANTED = [
  'AI가 어디까지 자동으로 처리하는지',
  '전략이 언제, 어떤 방식으로 종료되는지',
  '사용자가 중간에 전략을 멈출 수 있는지',
  '종료 후 투자금이 어떻게 정산되는지',
];

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
          초기에는 사용자가 매수와 매도 조건을 직접 설정하도록 해, 자신의 돈이 어떻게
          움직이는지 통제하게 하는 방향을 탐색했습니다.
        </p>
        <p className="iteration__intro">
          그러나 이 방식에서는 사용자가 다시 투자 전략을 이해하고 설계해야 했습니다. 결국
          &ldquo;AI가 사용자를 대신해 판단하고 거래한다&rdquo;는 AI Master의 핵심 가치도
          약해졌습니다.
        </p>

        <div className="iteration__body">
          {/* Left: solution-reframing diagram (Figma 634×476) */}
          {/* TODO(figma): 재정의 항목이 4개(자동화 범위 / 종료 방식 / 중지 / 정산)로 확정 — 그림의 항목과 일치하는지 확인 */}
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
            <p className="iteration__label">통제감의 재정의</p>

            <p className="iteration__para">
              인터뷰를 다시 검토해보니, 초급 참여자가 원한 것은 모든 거래 조건을 직접 설정하는
              권한이 아니었습니다.
            </p>
            <p className="iteration__para">사용자는 다음 내용을 알고 싶어 했습니다.</p>
            <ul className="iteration__list">
              {WANTED.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <p className="iteration__para">
              따라서 세부 설정을 늘리는 대신, 최종 실행 화면에서 AI가 전략에 따라 매수·매도와
              포지션 종료를 자동으로 진행한다는 점을 먼저 설명했습니다.
            </p>
            <p className="iteration__para">
              또한 전략을 중지하는 방법과 종료 후 투자금이 정산되는 방식도 실행 전에 확인할 수
              있도록 했습니다.
            </p>
            <p className="iteration__para">
              사용자는 직접 매매 전략을 설계하지 않더라도, 자신의 돈에 어떤 일이 일어나고 언제
              개입할 수 있는지를 이해한 상태에서 실행 여부를 결정할 수 있습니다.
            </p>

            <p className="iteration__para">
              이번 프로젝트에서 통제감은 모든 것을 직접 조작하는 능력이 아니라,{' '}
              <span className="iteration__hl">
                AI가 하는 일과 사용자가 개입할 수 있는 범위를 예측할 수 있다는 감각
              </span>
              으로 다시 정의했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
