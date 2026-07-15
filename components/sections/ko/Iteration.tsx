import RevealHeading from '@/components/RevealHeading';

const UNDERSTAND = [
  '지금 누가 결정을 내리고 있는지',
  'AI가 왜 그렇게 행동하고 있는지',
  '그리고 언제 개입해야 하는지',
];

const COMMUNICATE = [
  '각 단계에서의 의사결정 흐름',
  '그리고 사용자의 개입이 필요한 순간',
];

export default function Iteration() {
  return (
    <section id="iteration" className="section iteration">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow iteration__eyebrow">
          [ 08.2 — Iteration ]
        </p>
        <RevealHeading level="h2" className="ds-h2 iteration__title">
          사용자가 직접 전략을 조정하기 시작한 순간,
          <br />
          AI Master의 핵심 정체성이 흐려지기 시작했습니다.
        </RevealHeading>

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
              초기 아이데이션 단계에서는 사용자 통제감의 부족을 해결하기 위해 사용자가 세부 전략 설정을
              직접 조정하도록 하는 방향을 탐색했습니다. 그러나 이 접근은{' '}
              <span className="iteration__hl">
                &ldquo;AI가 사용자를 대신해 결정을 내린다&rdquo;
              </span>
              는 AI Master의 핵심 경험을 오히려 약화시켰습니다.
            </p>

            <p className="iteration__label">Reframing Control &amp; Solution Iteration</p>

            <p className="iteration__para">
              리서치를 다시 검토한 결과, 사용자는 사실 전략을 직접 수정하고 싶어 하지 않았습니다. 대신
              사용자가 원한 것은 다음을 이해하는 것이었습니다:
            </p>
            <ul className="iteration__list">
              {UNDERSTAND.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <p className="iteration__para">
              그 결과, 수동 조작 설정을 늘리는 대신 다음을 더 명확하게 전달하는 방향으로 솔루션을
              재설계했습니다:
            </p>
            <ul className="iteration__list">
              {COMMUNICATE.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <p className="iteration__para">
              <span className="iteration__hl">
                통제감은 다시 정의되었습니다: 전략을 직접 조정하는 것이 아니라, 지금 누가 결정하고 있는지를
                알고 언제 개입할지 아는 것.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
