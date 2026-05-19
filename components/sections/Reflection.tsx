const PARAGRAPHS = [
  "The hardest part of this project wasn't the AI — it was the moment a person looks at twelve options and has to pick one. Algorithms can generate any number of agents; the design job is to give people a way to choose between them.",
  'Every decision in the redesign worked the same way: subtract from the screen until only the choice remained. Three questions instead of twelve metrics. Side-by-side instead of scroll. Reasoning instead of returns.',
  "What I'd carry into the next AI project: don't design the model's output. Design the moment a person commits to it.",
];

const CLOSING = [
  'Selection is its own step. Treat it that way in IA, copy, and visual hierarchy.',
  "Numbers without baselines aren't data — they're decoration.",
  'Trust is rebuilt on every screen after activation, not earned once at signup.',
];

export default function Reflection() {
  return (
    <section id="reflection" className="section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="ds-eyebrow ds-eyebrow--accent-yellow">Reflection</p>
        <h2
          className="ds-display"
          style={{ margin: 'var(--space-6) auto 0', maxWidth: '1100px' }}
        >
          Designing AI is designing decisions.
        </h2>
        <hr
          className="ds-divider ds-divider--accent-yellow"
          style={{ margin: 'var(--space-16) auto 0', maxWidth: '120px' }}
        />
      </div>
      <div
        className="section-inner ds-research-finding"
        style={{ marginTop: 'var(--space-16)' }}
      >
        {PARAGRAPHS.map((p) => (
          <p key={p} className="ds-research-finding__paragraph">
            {p}
          </p>
        ))}
        <ul className="ds-research-finding__implication-list">
          {CLOSING.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
