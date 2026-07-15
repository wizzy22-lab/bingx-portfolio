import RevealHeading from '@/components/RevealHeading';

export default function Reflection() {
  return (
    <section id="reflection" className="section refl">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow refl__eyebrow">[ 11 — Reflection ]</p>
        <RevealHeading level="h2" className="ds-h2 refl__title">
          이 프로젝트에서 배운 것
        </RevealHeading>

        <div className="refl__cards">
          <article className="refl__card">
            <h3 className="refl__card-title">
              01. AI UX에서 가장 중요했던 것은 &ldquo;더 많은 자동화&rdquo;가 아니라, 사용자가
              이해할 수 있는 흐름이었다.
            </h3>
            <p className="refl__para">
              사용자는 단순히 AI가 대신 결정을 내려주기를 원한 것이 아니었다. 그들은 다음을 이해하고
              싶어 했다:
            </p>
            <ul className="refl__list">
              <li>지금 무슨 일이 일어나고 있는지</li>
              <li>누가 결정을 내리고 있는지</li>
              <li>그리고 언제 개입해야 하는지</li>
            </ul>
          </article>

          <article className="refl__card">
            <h3 className="refl__card-title">
              02. 통제감은 &ldquo;직접 조작&rdquo;보다 &ldquo;충분히 알고 있다는 느낌&rdquo;에서 더
              크게 왔다.
            </h3>
            <p className="refl__para">
              처음에는 사용자에게 더 많은 설정 옵션을 주는 방향을 탐색했다. 하지만 AI Master의 핵심
              경험은 전략을 직접 설계하는 것이 아니라, AI에게 판단을 맡기고 선택하는 데 있었다.
            </p>
          </article>

          <article className="refl__card">
            <h3 className="refl__card-title">
              03. AI 서비스에 대한 신뢰는 기능이 아니라, 의사결정 구조를 어떻게 설명하는가에서
              만들어졌다.
            </h3>
            <p className="refl__para">
              이 프로젝트를 통해, AI 서비스의 UX는 단순히 사용성을 개선하는 것을 넘어선다는 것을
              배웠다. 불확실한 순간에도 사용자가 의사결정 흐름을 이해하고 신뢰하도록 돕는 일이기도
              하다.
            </p>
          </article>
        </div>

        <p className="refl__closing">
          만약 실제로 출시된다면 내가 지켜볼 지표는 활성화 전환율이다 — 더 명확한 의사결정 구조가
          실제로 탐색을 첫 거래로 이어지게 하는지.
        </p>

        <p className="refl__closing">
          이 프로젝트는 인간의 신뢰, 자율성, 그리고 AI 의사결정 시스템에 대한 더 넓은 탐구의
          일부였다.
        </p>

        <div className="refl__cta">
          <a
            className="refl__link"
            href="https://medium.com/@hazzysw/bingx-ai-master-app-revamp-chapter-03-how-anxiety-becomes-structured-5db6fc9ba9a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium에서 전체 리서치 문서 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}
