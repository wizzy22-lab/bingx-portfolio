import HeroPanel, { type HeroCopy } from '@/components/HeroPanel';

const COPY: HeroCopy = {
  locale: 'ko',
  subtitle:
    '세계적인 투자거장들의 철학을 기반으로 한 AI Agent를 사용자가 더 명확하게 비교하고 선택할 수 있도록 의사결정 흐름 중심으로 재설계한 프로젝트',
  tags: [
    'AI 에이전트',
    '암호화폐 트레이딩',
    '의사결정 UX',
    '핀테크',
    '전략 비교',
    '설명 가능한 AI',
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
    { label: '역할', lines: ['프로덕트 디자이너', '전 과정 — 리서치 → 사용성 테스트'] },
    { label: '범위', lines: ['리서치 · IA · 비주얼 · 프로토타입 · 사용성 테스트'] },
    { label: '기간', lines: ['8주'] },
    { label: '팀', lines: ['디자이너 2명'] },
  ],
  videoLabel: '온보딩 플로우 — AI Master 설정 과정과 추천 결과인 King Elon Mars 에이전트',
};

export default function Hero() {
  return <HeroPanel {...COPY} />;
}
