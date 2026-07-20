import HeroPanel, { type HeroCopy } from '@/components/HeroPanel';

const COPY: HeroCopy = {
  locale: 'ko',
  subtitle:
    '어떤 AI 전략에 돈을 맡겨야 할지 막막한 사용자를 위해, 투자 성향에 맞는 Master를 먼저 추천하고 전략 선택부터 자동 매수·매도·포지션 종료까지의 과정을 이해할 수 있도록 재설계한 프로젝트',
  tags: [
    'AI 에이전트',
    '암호화폐 트레이딩',
    '의사결정 UX',
    '핀테크',
    '전략 추천',
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
    { label: '역할', lines: ['프로덕트 디자이너', '리서치부터 최종 디자인과 검증까지 전 과정 참여'] },
    { label: '범위', lines: ['리서치 · 정보 구조 · 비주얼 디자인 · 프로토타입 · 사용성 테스트'] },
    { label: '기간', lines: ['8주'] },
    { label: '팀', lines: ['디자이너 2명'] },
  ],
  videoLabel: '온보딩 플로우 — AI Master 설정 과정과 추천 결과인 King Elon Mars 에이전트',
};

export default function Hero() {
  return <HeroPanel {...COPY} />;
}
