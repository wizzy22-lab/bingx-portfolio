import RevealHeading from '@/components/RevealHeading';

const HMW = [
  '어떻게 하면 초보 사용자가 현재 단계와 전체 트레이딩 흐름을 쉽게 이해하도록 도울 수 있을까?',
  '어떻게 하면 초보 사용자가 AI 기능의 작동 방식을 명확히 이해한 채로 트레이딩을 시작하도록 도울 수 있을까?',
  '어떻게 하면 사용자가 전략과 AI 추천을 더 명확하게 비교하도록 도울 수 있을까?',
  '어떻게 하면 AI 기능을 제공하면서도 사용자가 통제감을 유지하도록 도울 수 있을까?',
];

export default function Define() {
  return (
    <>
    <section id="define" className="section">
      <div className="section-inner">
        {/* 07.1 Empathy Map (Figma 149:1121) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.1 — 정의 · 공감 지도 ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            사용자는 명확한 이해가 아니라
            <br />
            인상에 의존하고 있었다
          </RevealHeading>
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/empathy-map.png"
              alt=""
              aria-hidden
            />
            <figcaption className="define-sub__caption">[empathy mapping]</figcaption>
          </figure>
          <p className="define-sub__closing">
            사용자는 전략 간의 차이를 명확하게 이해하지 못했다. 대신{' '}
            <span className="define-sub__hl">&ldquo;공격적&rdquo;</span> 이나{' '}
            <span className="define-sub__hl">&ldquo;안정적&rdquo;</span> 같은 인상 기반의
            단서로 에이전트를 인식했다. 명확한 비교 기준이 없었기 때문에, 많은 사용자가
            의사결정을 내릴 때 이미지와 분위기에 의존했다. 실제 실행 단계에 이르면 사용자는
            종종 <span className="define-sub__hl">망설임</span> 과{' '}
            <span className="define-sub__hl">불확실성</span> 을 경험했다.
          </p>
        </div>

        {/* 07.2 User Journey (Figma 151:84) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.2 — 정의 · 사용자 여정 ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            사용자는 실행 이후에 오히려 더 큰
            <br />
            혼란과 불확실성을 겪고 있었다.
          </RevealHeading>
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/user-journey.png"
              alt=""
              aria-hidden
            />
            <figcaption className="define-sub__caption">[user journey]</figcaption>
          </figure>
          <p className="define-sub__closing">
            초보 사용자는 진입부터 청산까지 AI가 모든 것을 자동으로 관리해 줄 것이라
            기대하며 서비스에 들어왔다. 그러나 실행 이후, 사용자는{' '}
            <span className="define-sub__hl define-sub__hl--bold">
              AI가 지금 무엇을 하고 있는지, 어떤 부분이 완전히 자동화되어 있는지, 그리고
              어떤 결정에 여전히 사용자의 개입이 필요한지
            </span>{' '}
            를 이해하기 어려워했다.
          </p>
        </div>
      </div>
    </section>

      <aside className="problem-statement">
        <div className="problem-statement__inner">
          <p className="problem-statement__label">Problem statement</p>
          <p className="problem-statement__body">
            초보 사용자는 AI가 트레이딩을 더 쉽게 시작하도록 도와줄 것이라 기대했다.
            그러나 AI Master는 신뢰와 이해가 충분히 형성되기도 전에, 사용자에게 복잡한
            전략과 자동화를 먼저 이해할 것을 요구하고 있었다.
          </p>
        </div>
      </aside>

      {/* 07.3 HMW — How Might We question cards (Figma 159:74) */}
      <section id="define-hmw" className="section define-hmw">
        <div className="section-inner">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-hmw__eyebrow">
            [ 07.3 — 정의 · HMW ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-hmw__title">
            초보 사용자의 혼란, 의사결정의 어려움,
            <br />
            그리고 불안을 줄이기 위한 핵심 질문
          </RevealHeading>
          <p className="define-hmw__intro">
            문제 정의를 통해, 우리는 초보 사용자가 AI를 더 쉽게 이해하고 신뢰할 수 있기를
            기대한다는 것을 확인했다. 이후 사용자 스토리 기반 접근으로 사용자 피드백을
            재구성했고, 이는 프로젝트 방향과 가장 밀접하게 연결된 네 가지 핵심 질문으로
            이어졌다.
          </p>
          <ol className="define-hmw__grid">
            {HMW.map((q, i) => (
              <li key={i} className="define-hmw__card">
                <span className="define-hmw__num">{String(i + 1).padStart(2, '0')}.</span>
                <p className="define-hmw__q">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
