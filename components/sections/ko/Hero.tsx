import HeroPanel, { type HeroCopy } from '@/components/HeroPanel';

const COPY: HeroCopy = {
  locale: 'ko',
  subtitle: [
    '자신에게 맞는 Master와 전략을 쉽게 고르고, AI가 매수부터',
    '포지션 종료까지 자동으로 처리한다는 점을 이해한 뒤 투자를',
    '맡기도록 재설계한 프로젝트',
  ],
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
