import RevealHeading from '@/components/RevealHeading';

export default function Crazy8() {
  return (
    <section id="crazy8" className="section crazy8">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow crazy8__eyebrow">
          [ 08.3 — Crazy 8s ]
        </p>
        <RevealHeading level="h2" className="ds-h2 crazy8__title">
          여러 레이아웃 방향을 탐색하고 가장 명확한 의사결정 플로우를 선택했습니다.
        </RevealHeading>
        <p className="crazy8__intro">
          Crazy 8s를 통해 온보딩, 에이전트 추천, 전략 비교 플로우를 위한 다양한 인터랙션과 레이아웃
          방향을 빠르게 탐색했습니다.
          <br />
          팀 투표 세션을 거쳐, 사용자가 전략을 더 쉽게 비교하고 평가할 수 있도록 돕는 최종 구조를
          선택했습니다.
        </p>

        <div className="crazy8__panels">
          {/* Left: Crazy 8 sketch video (Figma Frame 118, 634×357) */}
          <figure className="crazy8__panel">
            <video
              className="crazy8__media crazy8__media--video crazy8__media--filled"
              src="/videos/crazy-8.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
            <figcaption className="crazy8__caption">
              [ Generating Multiple Interaction Ideas Through Crazy 8 ]
            </figcaption>
          </figure>

          {/* Right: team voting board image (Figma Frame 117, 634×357) */}
          <figure className="crazy8__panel">
            <img
              className="crazy8__media crazy8__media--image crazy8__media--filled"
              src="/images/ideation/crazy-8-vote.png"
              alt=""
              aria-hidden
            />
            <figcaption className="crazy8__caption">
              [ Exploring Multiple Layout Directions Through Crazy 8s and Team Voting ]
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
