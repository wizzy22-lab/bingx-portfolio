import RevealHeading from '@/components/RevealHeading';

const FLOWS = [
  { label: '대화로 추천받기', steps: ['채팅 시작', 'AI와 대화', '전략 추천'] },
  { label: '직접 탐색하기', steps: ['투자 성향 확인', 'Master 추천', '전략 탐색·선택'] },
];

const MERGED = [
  '전략 상세 확인',
  '투자금과 자동화 범위 확인',
  '전략 실행',
  '진행 상황 확인',
  '종료·정산',
];

export default function InformationArchitecture() {
  return (
    <section id="information-architecture" className="section ia">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow ia__eyebrow">
          [ 08.4 — Information Architecture ]
        </p>
        <RevealHeading level="h2" className="ds-h2 ia__title">
          서로 다른 두 가지 탐색 방식을 하나의 실행 과정으로 연결했습니다
        </RevealHeading>

        <div className="ia__body">
          {/* Left: IA diagram image placeholder (Figma 634×357) */}
          {/* TODO(figma): 새 08.4는 두 진입 경로 유지 후 합류하는 IA — 단일 플로우 다이어그램이면 교체 필요 */}
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
            <p className="ia__para">사용자가 전략을 찾는 방식을 하나로 통일하지 않았습니다.</p>
            <p className="ia__para">
              AI와 대화하며 추천받고 싶은 사용자와, 자신의 투자 성향을 기준으로 직접 살펴보고
              싶은 사용자를 위해 두 가지 경로를 유지했습니다.
            </p>

            {FLOWS.map((flow) => (
              <div key={flow.label} className="ia__flow">
                <p className="ia__flow-label">{flow.label}</p>
                <ol className="ia__flow-steps">
                  {flow.steps.map((step) => (
                    <li key={step} className="ia__flow-step">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}

            <p className="ia__para">두 경로는 전략 선택 이후 하나로 합쳐집니다.</p>

            <div className="ia__flow">
              <ol className="ia__flow-steps">
                {MERGED.map((step) => (
                  <li key={step} className="ia__flow-step">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <p className="ia__para">
              채팅과 직접 탐색 중 어느 방식을 선택하더라도, 실행 전에는 AI가 하는 일과
              사용자의 개입 범위를 동일하게 확인하도록 구성했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
