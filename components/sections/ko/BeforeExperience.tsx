import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

const PROBLEMS = [
  {
    number: '01.',
    title: '무엇을 기준으로 Master를 골라야 할지 알 수 없었습니다',
    paras: [
      '사용자는 명확한 기준 없이 7명의 Master와 그 안의 여러 전략을 직접 살펴봐야 했습니다.',
      '익숙하거나 관심 있는 Master를 선택하더라도, 여러 전략의 위험 수준과 투자 방식이 자신에게 적합한지 판단하기 어려웠습니다. 인터뷰 참여자들은 여러 전략을 눌러보다가 차이를 이해하지 못한 채 탐색을 중단했다고 말했습니다.',
    ],
  },
  {
    number: '02.',
    title: '현재 위치와 실행 이후의 과정을 알기 어려웠습니다',
    paras: [
      '사용자는 지금 Master를 고르는 중인지, 전략을 선택하는 중인지, 실제 투자금을 맡기는 단계인지 파악하기 어려웠습니다.',
      '전략을 선택해 최소 투자 금액을 입력하는 화면에 도달해도 AI가 매수와 매도뿐 아니라 최종 포지션 종료까지 자동으로 진행하는지, 전략은 언제 끝나는지, 투자금은 어떻게 정산되는지 충분히 설명되지 않았습니다.',
    ],
  },
  {
    number: '03.',
    title: '채팅이 전략 추천의 시작점으로 보이지 않았습니다',
    paras: [
      'AI Master는 AI와 대화하며 전략을 추천받는 기능을 제공했습니다. 그러나 기존 화면에서는 채팅 아이콘의 형태와 위치, 대화가 열리는 방식이 익숙한 메신저와 달랐습니다.',
      '채팅이 단순한 문의 기능인지, 전략을 탐색하고 추천받는 주요 진입 방식인지 그 역할이 화면에서 명확하게 드러나지 않았습니다.',
    ],
  },
  {
    number: '04.',
    title: '전략 성과와 실제 코인 가격이 서로 다른 화면에 있었습니다',
    paras: [
      'AI Master에서는 선택한 전략의 성과를 확인할 수 있었지만, 해당 전략이 거래하는 코인의 실제 가격 차트는 연결되어 있지 않았습니다.',
      '시장 가격을 확인하려면 AI Master에서 나가 차트 목록에서 코인을 다시 찾아야 했습니다. 이 과정에서 전략을 살펴보던 흐름도 함께 끊겼습니다.',
    ],
  },
];

export default function BeforeExperience() {
  return (
    <section id="problem" className="section">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow experience__eyebrow">
          [ 02 — Current Experience ]
        </p>
        <RevealHeading level="h2" className="ds-h2 experience__title">
          무엇을 골라야 할지, 지금 어디에 있는지, 돈을 맡긴 뒤 무슨 일이 일어나는지 알기
          어려웠습니다
        </RevealHeading>
        <p className="experience__lede">
          AI Master는 채팅으로 전략을 추천받거나 Master 목록을 직접 탐색하는 두 가지 진입
          방식을 제공했습니다.
        </p>
        <p className="experience__lede">
          그러나 기존 화면에서는 어떤 방식으로 시작하더라도 전략을 판단할 기준과 전체 거래
          과정이 충분히 설명되지 않았습니다.
        </p>

        <div className="experience__layout">
          {/* TODO(figma): 새 02-03이 채팅 진입점 문제로 바뀜 — 콜라주에 채팅 아이콘/대화 화면이 포함돼야 근거가 됨 */}
          <figure className="experience__analysis">
            <img
              className="experience__analysis-img media-fill"
              src="/images/current-experience/current-service-analysis.png"
              alt=""
              aria-hidden
            />
            <figcaption className="experience__analysis-caption">
              [ Current Experience Analysis — Existing AI Master Flow &amp; Interface Review ]
            </figcaption>
          </figure>

          <RevealOnView className="experience__cards">
            {PROBLEMS.map((p) => (
              <article key={p.number} className="experience__card">
                <header className="experience__head">
                  <span className="experience__number">{p.number}</span>
                  <h3 className="experience__title-h3">{p.title}</h3>
                </header>
                <blockquote className="experience__quote">
                  {p.paras.map((para, i) => (
                    <span key={i} className="experience__quote-intro">
                      {para}
                    </span>
                  ))}
                </blockquote>
              </article>
            ))}
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
