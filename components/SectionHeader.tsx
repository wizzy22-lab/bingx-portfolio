import RevealHeading from '@/components/RevealHeading';

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  level?: 'h1' | 'h2';
};

export default function SectionHeader({
  eyebrow,
  title,
  lede,
  level = 'h2',
}: Props) {
  return (
    <header style={{ marginBottom: 'var(--space-16)' }}>
      <p className="ds-eyebrow ds-eyebrow--accent-yellow">{eyebrow}</p>
      <RevealHeading
        level={level}
        className={level === 'h1' ? 'ds-h1' : 'ds-h2'}
        style={{ margin: 'var(--space-4) 0 0 0', maxWidth: '900px' }}
      >
        {title}
      </RevealHeading>
      {lede && (
        <p
          className="ds-body-lg"
          style={{
            color: 'var(--text-secondary)',
            margin: 'var(--space-6) 0 0 0',
            maxWidth: '720px',
          }}
        >
          {lede}
        </p>
      )}
      <hr
        className="ds-divider ds-divider--accent-yellow"
        style={{ marginTop: 'var(--space-10)' }}
      />
    </header>
  );
}
