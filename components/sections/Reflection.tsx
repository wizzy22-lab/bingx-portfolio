import RevealHeading from '@/components/RevealHeading';

const LESSONS = [
  {
    title: '01. In AI UX, an understandable process mattered more than the amount of automation',
    paras: [
      'Users were not asking the AI to simply do more on their behalf.',
      'They wanted to know what the AI was doing with their money, in what order the trading proceeds, and when they could step in.',
    ],
  },
  {
    title: '02. A sense of control is not created by manual settings alone',
    paras: [
      'At first I assumed that giving users more settings would increase their sense of control.',
      'But in an AI service, letting users predict what the AI does and when they can intervene turned out to be just as much a form of control as the range of things they can operate themselves.',
    ],
  },
  {
    title: '03. Trust in AI was tied to how the decision process is explained, not to features',
    paras: [
      'Beyond which Master and strategy the AI recommended, we had to explain why it recommended them, what it handles automatically once trading begins, and when the user can stop it.',
      'Providing the right information at each uncertain moment was the precondition for a user handing money to the AI.',
    ],
  },
];

export default function Reflection() {
  return (
    <section id="reflection" className="section refl">
      <div className="section-inner">
        <p className="ds-eyebrow ds-eyebrow--accent-yellow refl__eyebrow">[ 11 — Reflection ]</p>
        <RevealHeading level="h2" className="ds-h2 refl__title">
          Letting people know what they handed over mattered more than having AI do more of it
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
          This research was exploratory: 22 survey respondents, 4 interviewees and 5 usability
          test participants. The interviews in particular had only two participants per group and
          included experience with comparable AI trading features, so I have not generalised the
          patterns found into characteristics of the market as a whole.
        </p>

        <p className="refl__closing">
          If this shipped, the first metric I would watch is the{' '}
          <span className="refl__hl">activation rate</span>.
        </p>

        <p className="refl__closing">
          Here, activation rate means the share of users who start setting their investment style
          and go on to select a Master and a strategy and complete their first strategy execution.
        </p>

        <p className="refl__closing">
          That metric would tell me whether clearer recommendation criteria and pre-execution
          explanation actually convert exploration into a first trade.
        </p>

        <div className="refl__cta">
          <a
            className="refl__link"
            href="https://medium.com/@hazzysw/bingx-ai-master-app-revamp-chapter-03-how-anxiety-becomes-structured-5db6fc9ba9a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full research documentation on Medium →
          </a>
        </div>
      </div>
    </section>
  );
}
