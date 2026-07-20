import HeroPanel, { type HeroCopy } from '@/components/HeroPanel';

const COPY: HeroCopy = {
  locale: 'en',
  subtitle: [
    'A redesign that makes picking the right Master and',
    'strategy easy, and shows that the AI runs it all',
    'from the first buy to closing the position.',
  ],
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
