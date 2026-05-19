import SectionHeader from '@/components/SectionHeader';

export default function SolutionDirection() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Solution Direction"
          title="From browse-everything to guide-one-decision."
          lede="Instead of asking users to compare twelve agents at once, the redesign breaks selection into three smaller, sequential decisions."
        />
        <div className="ds-before-after">
          <div className="ds-before-after__col ds-before-after__col--before">
            <p className="ds-before-after__eyebrow">Today</p>
            <p className="ds-before-after__text">
              Browse twelve agents. Hope one stands out.
            </p>
          </div>
          <div className="ds-before-after__arrow" aria-hidden="true" />
          <div className="ds-before-after__col ds-before-after__col--after">
            <p className="ds-before-after__eyebrow">Redesign</p>
            <p className="ds-before-after__text">
              Be guided through three filters that match agents to your situation, then
              compare the shortlist side-by-side.
            </p>
          </div>
        </div>
        <blockquote
          className="ds-pull-quote"
          style={{ marginTop: 'var(--space-16)' }}
        >
          <p className="ds-pull-quote__quote">
            Don't surface more agents. Surface a decision path.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
