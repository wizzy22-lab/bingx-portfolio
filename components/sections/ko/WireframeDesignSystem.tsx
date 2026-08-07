import RevealHeading from '@/components/RevealHeading';

export default function WireframeDesignSystem() {
  return (
    <section id="design" className="section wds">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow wds__eyebrow">
          [ 08.5 — Wireframe &amp; Design System ]
        </p>
        <RevealHeading level="h2" className="ds-h2 wds__title">
          핵심 흐름을 단순한 화면으로 먼저 검증하고, 하나의 시각 규칙으로 정리했습니다
        </RevealHeading>
        <p className="wds__intro">
          먼저 단순한 와이어프레임으로 정보의 순서와 화면 간 이동을 검토했습니다.
        </p>
        <p className="wds__intro">
          이후 현재 단계, 추천 근거, 전략 정보, 실행 전 안내가 모든 화면에서 같은 방식으로
          읽히도록 컴포넌트와 시각 규칙을 정리했습니다.
        </p>

        <div className="wds__panels">
          {/* Left: wireframe mockups (Figma Frame 121, 634×357) */}
          <figure className="wds__panel">
            <img
              className="wds__media media-fill"
              src="/images/ideation/wireframe.png"
              alt=""
              aria-hidden
            />
            <figcaption className="wds__caption">[ Wireframe — Key Decision Flow ]</figcaption>
          </figure>

          {/* Right: design system showcase (Figma Frame 120, 634×357) */}
          <figure className="wds__panel">
            <img
              className="wds__media media-fill"
              src="/images/ideation/design-system.png"
              alt=""
              aria-hidden
            />
            <figcaption className="wds__caption">
              [ Design System — Components &amp; Visual Rules ]
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
