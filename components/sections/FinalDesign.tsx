import SectionHeader from '@/components/SectionHeader';

const MOCKUPS = [
  {
    label: 'Main Flow',
    meta: 'End-to-end agent selection journey.',
    aspect: '16/9' as const,
  },
  {
    label: 'Comparison',
    meta: 'Three shortlisted agents, side-by-side.',
    aspect: '4/3' as const,
  },
  {
    label: 'Recommendation',
    meta: 'Personalized shortlist after preference intake.',
    aspect: '4/3' as const,
  },
  {
    label: 'Selection',
    meta: 'Decision confirmation with rationale recap.',
    aspect: '4/3' as const,
  },
  {
    label: 'Confirmation',
    meta: 'Post-activation dashboard with annotated trade log.',
    aspect: '4/3' as const,
  },
];

export default function FinalDesign() {
  return (
    <section id="final" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Final Design"
          title="The decision path, rendered."
          level="h1"
        />

        <figure className="ds-media ds-media--full" style={{ marginBottom: 'var(--space-12)' }}>
          <div
            className="ds-media-placeholder"
            data-aspect={MOCKUPS[0].aspect}
            role="img"
            aria-label={MOCKUPS[0].label}
          >
            <span className="ds-media-placeholder__label">{MOCKUPS[0].label}</span>
            <span className="ds-media-placeholder__meta">{MOCKUPS[0].meta}</span>
          </div>
          <figcaption className="ds-media__caption">{MOCKUPS[0].meta}</figcaption>
        </figure>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-8)',
          }}
          className="final-grid"
        >
          {MOCKUPS.slice(1).map((m) => (
            <figure key={m.label} className="ds-media">
              <div
                className="ds-media-placeholder"
                data-aspect={m.aspect}
                role="img"
                aria-label={m.label}
              >
                <span className="ds-media-placeholder__label">{m.label}</span>
                <span className="ds-media-placeholder__meta">{m.meta}</span>
              </div>
              <figcaption className="ds-media__caption">{m.meta}</figcaption>
            </figure>
          ))}
        </div>
        <style>{`
          @media (min-width: 768px) {
            .final-grid { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>
      </div>
    </section>
  );
}
