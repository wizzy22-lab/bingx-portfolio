import RevealHeading from '@/components/RevealHeading';

const STEPS = ['Master 추천', '전략 선택', '투자금 확인', '전략 실행'];

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
                사용자는 명확한 선택 기준 없이 7명의 Master와 그 안의 여러 전략을 직접 살펴봐야
                했습니다.
              </p>
              <p className="kf__para">
                무엇을 기준으로 골라야 할지 알 수 없어, 익숙한 인물이나 눈에 띄는 이미지에
                의존했습니다.
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
                서비스를 시작할 때 감수할 수 있는 위험 수준인{' '}
                <span className="kf__code">Risk Tolerance</span> 와 선호하는 투자 방식인{' '}
                <span className="kf__code">Strategy Style</span> 을 먼저 물었습니다.
              </p>
              <p className="kf__para">
                응답이 끝나면 여러 Master를 한꺼번에 보여주는 대신, 사용자의 투자 성향과 가장
                가까운 Master 1명을 먼저 추천했습니다. 사용자는 추천된 Master의 화면으로 바로
                이동해 그 Master가 가진 전략부터 살펴볼 수 있습니다.
              </p>
              <p className="kf__para">
                첫 선택지를 7명에서 1명으로 줄여 탐색 부담을 낮추고, 사용자가 자신의 투자 성향과
                연결된 기준을 가진 상태에서 전략을 살펴보도록 했습니다.
              </p>
              <p className="kf__para">
                탐색을 없앤 것이 아니라, 다른 Master와 전략을 비교할 수 있는 첫 번째 기준을 제공한
                것입니다.
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
                사용자는 자신이 지금 Master를 고르는 중인지, 전략을 선택하는 중인지, 실제 투자금을
                맡기는 단계인지 이해하기 어려웠습니다.
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
                화면 상단에 현재 위치와 다음 행동을 보여주는 단계 구조를 추가했습니다.
              </p>
              <ol className="ia__flow-steps kf__flow">
                {STEPS.map((step) => (
                  <li key={step} className="ia__flow-step">
                    {step}
                  </li>
                ))}
              </ol>
              <p className="kf__para">
                사용자는 자신이 지금 무엇을 결정하고 있는지 확인할 수 있고, 각 화면에서는{' '}
                <span className="kf__code">전략 살펴보기</span>,{' '}
                <span className="kf__code">투자금 확인하기</span>,{' '}
                <span className="kf__code">전략 시작하기</span> 처럼 다음 행동을 구체적으로
                안내받습니다.
              </p>
              <p className="kf__para">
                투자금을 입력하는 마지막 단계에서는 앞서 정의한 AI의 자동화 범위와 전략 종료 방식을
                다시 확인한 뒤 실행하도록 했습니다.
              </p>
              <p className="kf__para">
                이를 통해 사용자는 여러 화면을 눌러보지 않아도 현재 위치와 다음 행동을 파악할 수
                있습니다.
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
                AI Master는 AI와 대화하며 전략을 추천받는 기능을 제공했습니다. 하지만 기존
                화면에서는 채팅 아이콘의 형태와 위치, 대화가 시작되는 방식이 익숙한 메신저와 달라
                채팅이 전략 추천의 진입점이라는 사실이 바로 드러나지 않았습니다.
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
                채팅 아이콘의 형태와 위치, 대화가 열리는 방식을 사용자가 이미 익숙한 메신저와
                유사하게 변경했습니다.
              </p>
              <p className="kf__para">
                사용자는 새로운 조작 방식을 배울 필요 없이 채팅을 열고 AI와 바로 대화를 시작할 수
                있습니다.
              </p>
              <p className="kf__para">
                이를 통해 채팅을 단순한 문의 기능이 아니라, 관심 있는 시장과 투자 방식에 관해
                대화하며 전략을 추천받는 탐색 경로로 명확하게 보여줬습니다.
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
                기존 AI Master에서는 선택한 전략의 성과는 확인할 수 있었지만, 해당 전략이 거래하는
                코인의 실제 가격 차트는 연결되어 있지 않았습니다.
              </p>
              <p className="kf__para">
                전략의 성과를 실제 시장 움직임과 비교하려면 AI Master에서 나가 차트 목록에서 코인을
                다시 찾아야 했습니다. 화면을 이동하는 과정에서 전략을 살펴보던 맥락도 함께
                끊겼습니다.
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
                전략 성과 차트와 해당 코인의 실제 가격 차트를 같은 화면에 배치하고, 좌우로 넘겨
                확인할 수 있도록 구성했습니다.
              </p>
              <ul className="kf__list">
                <li>
                  <span className="kf__list-term">전략 성과 차트</span> — 해당 전략으로 투자금이
                  어떻게 변했는지
                </li>
                <li>
                  <span className="kf__list-term">코인 가격 차트</span> — 전략이 거래하는 코인의
                  실제 시장 가격이 어떻게 움직였는지
                </li>
              </ul>
              <p className="kf__para">
                사용자는 AI Master를 벗어나지 않고 전략의 성과와 실제 시장 움직임을 연이어 비교할 수
                있습니다.
              </p>
              <p className="kf__para">
                전략 정보 탐색부터 성과 확인까지 하나의 흐름 안에서 이어지도록 했습니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
