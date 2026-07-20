import RevealHeading from '@/components/RevealHeading';

const LESSONS = [
  {
    title: '01. AI UX에서 중요했던 것은 자동화의 양보다 이해할 수 있는 과정이었습니다',
    paras: [
      '사용자는 AI가 단순히 더 많은 일을 대신해주기를 원한 것이 아니었습니다.',
      '자신의 돈으로 AI가 무엇을 하고 있는지, 거래는 어떤 순서로 진행되는지, 언제 자신이 개입할 수 있는지를 알고 싶어 했습니다.',
    ],
  },
  {
    title: '02. 통제감은 직접 설정하는 것만으로 만들어지지 않았습니다',
    paras: [
      '처음에는 사용자에게 더 많은 설정 권한을 주는 것이 통제감을 높인다고 생각했습니다.',
      '그러나 AI 서비스에서는 직접 조작할 수 있는 범위뿐 아니라, AI가 무엇을 하고 언제 사용자가 개입할 수 있는지를 예측하게 하는 것도 중요한 통제 방식이라는 점을 배웠습니다.',
    ],
  },
  {
    title: '03. AI에 대한 신뢰는 기능보다 결정 과정을 설명하는 방식과 연결되어 있었습니다',
    paras: [
      'AI가 어떤 Master와 전략을 추천했는지뿐 아니라, 왜 추천했는지, 거래가 시작되면 무엇을 자동으로 처리하는지, 사용자는 언제 중지할 수 있는지를 설명해야 했습니다.',
      '불확실한 순간마다 필요한 정보를 제공하는 것이 사용자가 AI에게 돈을 맡기기 위한 전제였습니다.',
    ],
  },
];

export default function Reflection() {
  return (
    <section id="reflection" className="section refl">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow refl__eyebrow">[ 11 — Reflection ]</p>
        <RevealHeading level="h2" className="ds-h2 refl__title">
          AI가 더 많이 대신하는 것보다, 무엇을 맡겼는지 알게 하는 일이 중요했습니다
        </RevealHeading>

        <div className="refl__cards">
          {LESSONS.map((lesson) => (
            <article key={lesson.title} className="refl__card">
              <h3 className="refl__card-title">{lesson.title}</h3>
              {lesson.paras.map((para, i) => (
                <p key={i} className="refl__para">
                  {para}
                </p>
              ))}
            </article>
          ))}
        </div>

        <p className="refl__closing">
          이번 리서치는 설문 22명, 인터뷰 4명, 사용성 테스트 5명을 대상으로 한 탐색적
          결과입니다. 특히 인터뷰는 집단별 참여자가 2명이고 유사한 AI 트레이딩 기능 경험도
          포함되어 있어, 발견된 패턴을 전체 시장의 특성으로 일반화하지 않았습니다.
        </p>

        <p className="refl__closing">
          실제로 출시된다면 가장 먼저 확인할 지표는{' '}
          <span className="refl__hl">활성화 전환율</span> 입니다.
        </p>

        <p className="refl__closing">
          여기서 활성화 전환율은 투자 성향 확인을 시작한 사용자 중, Master와 전략을 선택하고
          첫 전략 실행까지 완료한 사용자의 비율을 의미합니다.
        </p>

        <p className="refl__closing">
          이 지표를 통해 더 명확한 추천 기준과 실행 전 설명이 실제로 탐색을 첫 거래로
          연결하는지 확인하고자 합니다.
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
