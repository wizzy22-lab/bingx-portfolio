import RevealHeading from '@/components/RevealHeading';

export default function FeatureCategorization() {
  return (
    <section id="ideation" className="section featcat">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow featcat__eyebrow">
          [ 08.1 — Feature Categorization &amp; Prioritization ]
        </p>
        <RevealHeading level="h2" className="ds-h2 featcat__title">
          핵심 문제와 가장 직접적으로 연결된
          <br />
          기능 플로우부터 먼저 정리했습니다.
        </RevealHeading>
        <p className="featcat__intro">
          HMW 질문을 바탕으로 사용자의 혼란과 불안을 줄이는 데 필요한 기능을 도출했습니다. 이후 기능의
          중요도와 사용자 플로우를 기준으로 우선순위를 정해, 아이데이션에 필요한 핵심 화면을 먼저 정의할
          수 있었습니다.
        </p>

        <div className="featcat__panels">
          {/* Feature Categorization — AI Investment Decision System (Figma 634×634) */}
          <figure className="featcat__panel">
            <img
              className="featcat__img media-fill"
              src="/images/ideation/feature-categorization.png"
              alt=""
              aria-hidden
            />
            <figcaption className="featcat__caption">
              [ Feature Categorization — AI Investment Decision System ]
            </figcaption>
          </figure>

          {/* Feature Prioritization — 2×2 matrix (Figma 634×634) */}
          <figure className="featcat__panel">
            <img
              className="featcat__img media-fill"
              src="/images/ideation/feature-prioritization.png"
              alt=""
              aria-hidden
            />
            <figcaption className="featcat__caption">[ Feature Prioritization ]</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
