import RevealHeading from '@/components/RevealHeading';
import RevealOnView from '@/components/RevealOnView';

/* Each string is one rendered line — the slashes in the Figma copy are
   line-break markers and are never printed. */
const PROBLEMS = [
  {
    number: '01.',
    title: ['어디서부터 시작해야 할지 알 수 없었습니다'],
    lines: [
      '사용자는 7명의 Master와 여러 전략을 처음부터',
      '직접 살펴봐야 했습니다. 무엇을 기준으로 Master를 고르고,',
      '어떤 정보부터 확인해야 하는지 알려주는 출발점이 없었습니다.',
    ],
  },
  {
    number: '02.',
    title: ['전략 추천 이후의 과정이 명확하지 않았습니다'],
    lines: [
      '채팅 또는 Master 탐색을 통해 전략을 추천받더라도,',
      '왜 이 전략이 추천됐는지, AI가 어디까지 자동으로 거래하는지,',
      '다음에는 무엇을 해야 하는지 이해하기 어려웠습니다.',
      '특히 실제 투자금을 입력하는 단계에서도 전략 종료와 중지,',
      '투자금 정산 방식이 충분히 설명되지 않았습니다.',
    ],
  },
  {
    number: '03.',
    title: ['전략과 성과 정보를 한 번에 비교하기 어려웠습니다'],
    lines: [
      'Master마다 전략의 위험 수준과 성과 정보가',
      '흩어져 있어 차이를 빠르게 파악하기 어려웠습니다.',
      '해당 전략이 거래하는 코인의 실제 가격을 확인하려면',
      'AI Master에서 나가 별도의 차트 목록에서 다시 찾아야 했습니다.',
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
          사용자는 어디서 시작하고 무엇을 골라야 하는지,
          <br />
          AI가 어디까지 대신하는지 알기 어려웠습니다
        </RevealHeading>
        <p className="experience__lede">
          기존 화면에는 여러 Master와 전략, 채팅 추천, 거래 기능이 함께 제공됐습니다.
          <br />
          그러나 사용자가 무엇부터 확인하고 어떤 순서로 결정해야 하는지 알려주는 안내는
          충분하지 않았습니다.
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
                  <h3 className="experience__title-h3">
                    {p.title.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < p.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </header>
                <blockquote className="experience__quote">
                  {p.lines.map((line, i) => (
                    <span key={i}>{line}</span>
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
