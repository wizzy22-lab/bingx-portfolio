import RevealHeading from '@/components/RevealHeading';

export default function FeatureCategorization() {
  return (
    <section id="ideation" className="section featcat">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow featcat__eyebrow">
          [ 08.1 — Feature Categorization &amp; Prioritization ]
        </p>
        <RevealHeading level="h2" className="ds-h2 featcat__title">
          문제와 가장 직접적으로 연결된 아이디어부터 남겼습니다
        </RevealHeading>
        <p className="featcat__intro">
          가능한 기능을 모두 추가하기보다, 사용자가 전략을 고르지 못하는 문제와 돈을 맡긴 뒤의
          과정을 이해하지 못하는 문제를 먼저 해결하기로 했습니다.
        </p>
        <p className="featcat__intro">아이디어는 다음 두 가지 기준으로 정리했습니다.</p>
        <ul className="featcat__criteria">
          <li>
            <span className="featcat__criteria-term">이해</span> — 어디서 시작하고, 무엇을
            골라야 하며, 현재 어느 단계인지 알 수 있는가?
          </li>
          <li>
            <span className="featcat__criteria-term">신뢰</span> — AI가 내 돈으로 무엇을 하고,
            언제 내가 개입할 수 있는지 알 수 있는가?
          </li>
        </ul>

        {/* TODO(figma): 분류 축이 '이해 / 신뢰' 2기준으로 확정 — 다이어그램 축 레이블과 일치하는지 확인 */}
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
