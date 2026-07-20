import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

const PROBLEMS = [
  {
    number: '01.',
    title: 'Master를 눌러도 어떤 전략을 골라야 할지 알 수 없었습니다',
    paras: [
      '사용자는 호기심에 익숙하거나 관심 있는 Master를 선택했습니다. 하지만 Master 안에는 여러 전략이 나열되어 있었고, 위험 수준이나 투자 방식처럼 자신에게 맞는 전략을 판단할 기준은 충분히 설명되지 않았습니다.',
      '일부 사용자는 여러 전략을 눌러보다가 차이를 이해하지 못한 채 탐색을 중단했습니다.',
    ],
  },
  {
    number: '02.',
    title: '돈을 넣는 단계에서야 자동 거래의 범위를 고민하게 됐습니다',
    paras: [
      '전략을 선택하면 최소 투자 금액을 입력하는 화면으로 이어졌습니다. 그러나 AI가 매수와 매도뿐 아니라 최종 포지션 종료까지 자동으로 진행한다는 점이 앞선 과정에서 충분히 설명되지 않았습니다.',
    ],
  },
  {
    number: '03.',
    title: '시작한 뒤 투자금을 언제, 어떻게 회수하는지 알 수 없었습니다',
    paras: [
      '사용자는 전략이 언제 종료되는지, 직접 중지할 수 있는지, 종료 후 투자금은 어떻게 정산되는지 알기 어려웠습니다.',
      '실제 돈을 투입해야 하는 단계에서 이러한 질문에 답을 찾지 못하면, 서비스에 대한 호기심은 불안으로 바뀌고 실행 전에 이탈했습니다.',
    ],
  },
  {
    number: '04.',
    title: '전략 성과와 실제 시장 가격이 서로 다른 화면에 있었습니다',
    paras: [
      'AI Master 화면에서는 전략의 성과를 확인할 수 있었지만, 해당 전략이 거래하는 코인의 실제 가격 차트는 연결되어 있지 않았습니다.',
      '시장 가격을 확인하려면 AI Master에서 나가 차트 목록에서 코인을 다시 찾아야 했습니다. 이 과정에서 사용자의 탐색 흐름도 함께 끊겼습니다.',
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
          사용자는 무엇을 골라야 할지 몰랐고, 돈을 넣는 순간에도 이후에 무슨 일이 일어나는지
          알 수 없었습니다
        </RevealHeading>
        <p className="experience__lede">
          사용자는 AI와 대화해 전략을 추천받거나, Master 목록에서 관심 있는 인물을 직접
          선택해 서비스를 탐색할 수 있었습니다. 그러나 두 진입 방식 모두 실제 전략 실행까지
          이어지기 어려웠습니다.
        </p>

        <div className="experience__layout">
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
