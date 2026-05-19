import SectionHeader from '@/components/SectionHeader';

const INSIGHTS = [
  {
    eyebrow: '01 REDUCED VISUAL FATIGUE',
    title: 'Long sessions become tolerable.',
    body: 'Hours of green/red price data fatigue eyes on a light surface; dark surfaces hold attention longer.',
  },
  {
    eyebrow: '02 BETTER CONCENTRATION',
    title: 'Lower ambient luminance keeps focus on data.',
    body: 'UI chrome recedes. Charts and numbers carry the contrast budget.',
  },
  {
    eyebrow: '03 CLEARER SIGNAL HIERARCHY',
    title: 'Yellow and blue mark decision moments.',
    body: 'Accents appear only when the user is being asked to commit — never as decoration.',
  },
];

export default function VisualStrategy() {
  return (
    <section id="design" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Visual Strategy"
          title="We switched to dark mode because trading is read, not skimmed."
          level="h1"
        />
        <div className="ds-before-after">
          <div className="ds-before-after__col ds-before-after__col--before">
            <p className="ds-before-after__eyebrow">Light</p>
            <p className="ds-before-after__text">
              Original spec — light surface, high luminance, charts compete with chrome.
            </p>
          </div>
          <div className="ds-before-after__arrow" aria-hidden="true" />
          <div className="ds-before-after__col ds-before-after__col--after">
            <p className="ds-before-after__eyebrow">Dark</p>
            <p className="ds-before-after__text">
              Redesign — low-luminance surface, charts and numbers carry contrast.
            </p>
          </div>
        </div>
        <div
          className="ds-impact-grid ds-impact-grid--3col-pattern"
          style={{ marginTop: 'var(--space-16)' }}
        >
          {INSIGHTS.map((i) => (
            <article key={i.eyebrow} className="ds-insight ds-insight--dark">
              <p className="ds-insight__eyebrow">{i.eyebrow}</p>
              <h3 className="ds-insight__title">{i.title}</h3>
              <p className="ds-insight__body">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
