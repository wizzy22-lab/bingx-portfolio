import SectionHeader from '@/components/SectionHeader';

export default function IADesign() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Information Architecture"
          title="Restructuring the flow around the decision, not the catalog."
          level="h1"
        />
        <div className="ds-before-after">
          <div className="ds-before-after__col ds-before-after__col--before">
            <p className="ds-before-after__eyebrow">As-Is</p>
            <p className="ds-before-after__text">
              Flat list → agent detail → activate. Selection happens inside detail pages.
            </p>
          </div>
          <div className="ds-before-after__arrow" aria-hidden="true" />
          <div className="ds-before-after__col ds-before-after__col--after">
            <p className="ds-before-after__eyebrow">To-Be</p>
            <p className="ds-before-after__text">
              Preferences → shortlist → compare → activate. Selection is its own step.
            </p>
          </div>
        </div>
        <blockquote
          className="ds-pull-quote ds-pull-quote--dark"
          style={{ marginTop: 'var(--space-16)' }}
        >
          <p className="ds-pull-quote__quote">
            IA isn't where the screens live. It's where the decisions live.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
