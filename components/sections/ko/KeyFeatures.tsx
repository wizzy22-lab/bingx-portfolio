import RevealHeading from '@/components/RevealHeading';

export default function KeyFeatures() {
  return (
    <section id="key-features" className="section kf">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow kf__eyebrow">[ 09 — Key Features ]</p>

        {/* Feature 1 — Personalized Agents (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            1. 개인화된 에이전트 추천
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                사용자는 명확한 비교 기준 없이 모든 에이전트를 한 번에 살펴봐야 했습니다.
              </p>
              <p className="kf__para">
                그 결과, 실제 전략의 차이보다 이미지와 분위기에 의존해 결정을 내리고 있었습니다.
              </p>
            </div>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <img
                className="kf__screen media-fill"
                src="/images/key-features/feature-1-as-is.png"
                alt=""
                aria-hidden
              />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-1-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — copy */}
            <div className="kf__copy">
              <p className="kf__para">
                개인화된 온보딩 플로우를 추가했습니다. 먼저 사용자의 투자 성향을 파악한 뒤 가장 관련성
                높은 에이전트만 추천하도록 경험을 재설계했습니다.
              </p>
              <p className="kf__para">
                이를 통해 불필요한 탐색을 줄이고, 사용자가 전략을 더 쉽게 비교하고 선택하기 시작할 수
                있도록 도왔습니다.
              </p>
            </div>
          </div>
        </article>

        {/* Feature 2 — Clear next action (to be ← as is, mirrored) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            2. 현재 단계 가시성
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                사용자는 자신이 지금 어느 단계에 있는지, 그리고 다음에 무엇을 해야 하는지 이해하는 데
                어려움을 겪고 있었습니다.
              </p>
            </div>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-2-as-is.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-2-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — copy */}
            <div className="kf__copy">
              <p className="kf__para">
                현재 단계와 다음 행동을 전달하는 명확한 단계 구조를 도입해, 사용자가 흐름을 놓치지 않고
                전략 탐색을 이어갈 수 있도록 했습니다.
              </p>
            </div>
          </div>
        </article>

        {/* Feature 3 — Familiar chat (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            3. 익숙한 채팅 인터랙션
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                사용자는 왜 갑자기 AI와 상호작용해야 하는지 이해하지 못했고, AI와의 인터랙션 자체를
                낯설고 복잡하게 느꼈습니다.
              </p>
            </div>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <img
                className="kf__screen media-fill"
                src="/images/key-features/feature-3-as-is.png"
                alt=""
                aria-hidden
              />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-3-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — copy */}
            <div className="kf__copy">
              <p className="kf__para">
                채팅 아이콘의 디자인과 위치를 변경했습니다. 익숙한 메신저 스타일의 인터랙션 패턴을
                적용해, 사용자가 새로운 시스템을 배울 필요 없이 AI와 자연스럽게 상호작용할 수 있도록
                했습니다.
              </p>
            </div>
          </div>
        </article>

        {/* Feature 4 — Key information & performance flow (as is → to be) */}
        <article className="kf__feature">
          <RevealHeading level="h2" className="ds-h2 kf__title">
            4. 비교와 성과를 하나의 플로우로
          </RevealHeading>

          <div className="kf__compare">
            {/* as is — copy */}
            <div className="kf__copy">
              <p className="ds-eyebrow kf__problem">[ PROBLEM ]</p>
              <p className="kf__para">
                기존 AI Master 경험에서는 전략 비교와 성과 확인이 분리되어 있어, 화면을 자주 전환하게
                되고 의사결정 흐름이 끊겼습니다.
              </p>
              <p className="kf__para">
                핵심 정보 또한 흩어져 있어, 전략의 차이를 빠르게 비교하기 어려웠습니다.
              </p>
            </div>

            {/* as is — phone (Figma 240×519) */}
            <figure className="kf__phone kf__phone--asis">
              <span className="kf__pill">as is</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-4-as-is.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — phone (Figma 300×649) */}
            <figure className="kf__phone kf__phone--tobe">
              <span className="kf__pill kf__pill--accent">to be</span>
              <video
                className="kf__screen media-fill"
                src="/videos/feature-4-to-be.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </figure>

            {/* to be — copy */}
            <div className="kf__copy">
              <p className="kf__para">
                전략 비교에 필요한 핵심 정보를 우선적으로 배치하고, 성과와 차트를 같은 플로우 안으로
                가져왔습니다. 그 결과 사용자는 불필요한 화면 이동 없이 전략을 비교하고 성과를 더
                매끄럽고 확신 있게 확인할 수 있었습니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
