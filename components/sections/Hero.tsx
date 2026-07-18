import HeroPanel, { type HeroCopy } from '@/components/HeroPanel';

const COPY: HeroCopy = {
  locale: 'en',
  subtitle:
    'A project redesigned around a decision-focused flow, helping users compare and choose AI agents more clearly based on the investment philosophies of legendary investors.',
  tags: [
    'AI Agents',
    'Crypto Trading',
    'Decision UX',
    'Fintech',
    'Strategy Comparison',
    'Explainable AI',
  ],
  risk: {
    label: 'Risk Tolerance',
    options: ['Intuitive Type', 'Bold Type', 'Strategic Type', 'Long-term Type'],
    selected: 1,
  },
  strategy: {
    label: 'Strategy style',
    options: ['Aggressive', 'Moderate', 'Conservative'],
    selected: 0,
  },
  meta: [
    { label: 'ROLE', lines: ['Product Designer', 'Full scope — Research → Usability test'] },
    { label: 'SCOPE', lines: ['Research · IA · Visual · Prototype · Usability Test'] },
    { label: 'DURATION', lines: ['8 weeks'] },
    { label: 'TEAM', lines: ['2 Designers'] },
  ],
  videoLabel: 'Onboarding flow — setting up your AI Master, ending on the recommended King Elon Mars agent',
};

export default function Hero() {
  return <HeroPanel {...COPY} />;
}
