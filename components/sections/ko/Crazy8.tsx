import RevealHeading from '@/components/RevealHeading';

export default function Crazy8() {
  return (
    <section id="crazy8" className="section crazy8">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow crazy8__eyebrow">
          [ 08.3 — Crazy 8s ]
        </p>
        <RevealHeading level="h2" className="ds-h2 crazy8__title">
          한 화면에서 비교되고, 다음 행동이 보이는 안을 선택했습니다
        </RevealHeading>
        <p className="crazy8__intro">
          8분 동안 8개의 아이디어를 빠르게 그리는 Crazy 8s 방식으로 온보딩, Master 추천, 전략
          선택, 실행 확인 화면의 여러 구조를 탐색했습니다.
          <br />
          비교에 필요한 정보가 한 화면에서 읽히는지, 사용자가 다음에 해야 할 행동이 분명하게
          보이는지를 중심으로 각 아이디어를 검토했습니다.
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
              [ Generating Multiple Interaction Ideas Through Crazy 8s ]
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
              [ Exploring Multiple Layout Directions Through Crazy 8s ]
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
