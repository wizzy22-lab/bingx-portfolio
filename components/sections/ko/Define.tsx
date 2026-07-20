import RevealHeading from '@/components/RevealHeading';

const PATHS = [
  'AI와 대화하며 전략을 추천받는 경로',
  '관심 있는 Master를 직접 선택해 전략을 탐색하는 경로',
];

const HMW = [
  '어떻게 하면 초급 사용자가 자신의 투자 성향을 기준으로 Master를 선택하도록 도울 수 있을까?',
  '어떻게 하면 사용자가 현재 단계와 다음 행동, AI가 자동으로 처리하는 범위를 이해하도록 도울 수 있을까?',
  '어떻게 하면 새로운 조작 방식을 배우지 않고도 AI와 대화를 시작해 전략을 추천받도록 도울 수 있을까?',
  '어떻게 하면 전략 성과와 실제 코인 가격을 화면을 벗어나지 않고 비교하도록 도울 수 있을까?',
];

export default function Define() {
  return (
    <>
    <section id="define" className="section">
      <div className="section-inner">
        {/* 07.1 Empathy Map (Figma 149:1121) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.1 — Define · Empathy Map ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            사용자에게는 Master의 이미지보다 전략을 판단할 기준이 필요했습니다
          </RevealHeading>
          <p className="define-sub__intro">
            인터뷰와 커뮤니티 리서치에서 확인한 사용자의 말과 행동을 한 장의 공감 지도로
            정리했습니다.
          </p>
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/empathy-map.png"
              alt=""
              aria-hidden
            />
            <figcaption className="define-sub__caption">
              [ Empathy Mapping — Based on Interview &amp; Community Findings ]
            </figcaption>
          </figure>
          <p className="define-sub__closing">
            사용자들은 전략 간 차이를 명확하게 이해하지 못한 채{' '}
            <span className="define-sub__hl">&lsquo;공격적이다&rsquo;</span>,{' '}
            <span className="define-sub__hl">&lsquo;안정적이다&rsquo;</span> 와 같은 인상으로
            Master를 받아들이고 있었습니다.
          </p>
          <p className="define-sub__closing">
            하지만 실제 돈을 넣는 단계에서는 이미지나 인상만으로 결정할 수 없었습니다. 감수할
            수 있는 위험 수준과 선호하는 투자 방식처럼,{' '}
            <span className="define-sub__hl define-sub__hl--bold">
              자신의 상황과 연결해 전략을 판단할 기준
            </span>{' '}
            이 필요했습니다.
          </p>
        </div>

        {/* 07.2 User Journey (Figma 151:84) */}
        <div className="define-sub">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-sub__eyebrow">
            [ 07.2 — Define · User Journey ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-sub__title">
            두 가지 탐색 경로가 있었지만, 모두 실행 전에 불확실성이 커졌습니다
          </RevealHeading>
          <p className="define-sub__intro">
            사용자는 두 가지 방식으로 전략을 탐색할 수 있었습니다.
          </p>
          <ol className="define-sub__list">
            {PATHS.map((path, i) => (
              <li key={i} className="define-sub__list-item">
                <span className="define-sub__list-num">{String(i + 1).padStart(2, '0')}.</span>
                <span>{path}</span>
              </li>
            ))}
          </ol>
          {/* TODO(figma): 새 07.2는 채팅/직접 탐색 두 경로가 전략 선택에서 합류하는 구조 — 저니맵이 단선 흐름이면 교체 필요 */}
          <figure className="define-sub__figure">
            <img
              className="define-sub__img media-fill"
              src="/images/define/user-journey.png"
              alt=""
              aria-hidden
            />
            <figcaption className="define-sub__caption">
              [ User Journey — Entry to Strategy Execution and Exit ]
            </figcaption>
          </figure>
          <p className="define-sub__closing">
            채팅 경로에서는 채팅이 전략 추천의 시작점이라는 사실과 대화 방법이 명확하게
            드러나지 않았습니다.
          </p>
          <p className="define-sub__closing">
            직접 탐색하는 경로에서는 여러 Master와 전략 중 무엇을 골라야 하는지 판단하기
            어려웠습니다.
          </p>
          <p className="define-sub__closing">
            두 경로는 모두 전략을 선택하고 투자금을 입력하는 단계에서 만났습니다. 이때
            사용자는{' '}
            <span className="define-sub__hl define-sub__hl--bold">
              AI가 어디까지 자동으로 거래하는지, 전략은 언제 끝나는지, 투자금은 어떻게
              정산되는지
            </span>{' '}
            알기 어려웠습니다.
          </p>
        </div>
      </div>
    </section>

      <aside className="problem-statement">
        <div className="problem-statement__inner">
          <p className="problem-statement__label">Problem statement</p>
          <p className="problem-statement__body">
            초급 사용자는 AI가 트레이딩을 더 쉽게 시작하도록 도와줄 것이라 기대했습니다.
            그러나 AI Master는 신뢰와 이해가 충분히 형성되기도 전에, 사용자에게 복잡한
            전략과 자동화를 먼저 이해할 것을 요구하고 있었습니다.
          </p>
        </div>
      </aside>

      {/* 07.3 HMW — How Might We question cards (Figma 159:74) */}
      <section id="define-hmw" className="section define-hmw">
        <div className="section-inner">
          <p className="ds-eyebrow ds-eyebrow--accent-yellow define-hmw__eyebrow">
            [ 07.3 — Define · HMW ]
          </p>
          <RevealHeading level="h2" className="ds-h2 define-hmw__title">
            사용자가 알고 싶은 것은 어디서 시작하고, 무엇을 고르고, 돈을 맡긴 뒤 무슨 일이
            일어나는지였습니다
          </RevealHeading>
          <p className="define-hmw__intro">
            앞에서 발견한 문제를 실제 화면에서 해결해야 할 질문으로 바꿨습니다.
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
