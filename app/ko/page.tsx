import Hero from '@/components/sections/ko/Hero';
import AboutService from '@/components/sections/ko/AboutService';
import BeforeExperience from '@/components/sections/ko/BeforeExperience';
import Research from '@/components/sections/ko/Research';
import Define from '@/components/sections/ko/Define';
import FeatureCategorization from '@/components/sections/ko/FeatureCategorization';
import Iteration from '@/components/sections/ko/Iteration';
import Crazy8 from '@/components/sections/ko/Crazy8';
import InformationArchitecture from '@/components/sections/ko/InformationArchitecture';
import WireframeDesignSystem from '@/components/sections/ko/WireframeDesignSystem';
import KeyFeatures from '@/components/sections/ko/KeyFeatures';
import UserTest from '@/components/sections/ko/UserTest';
import Reflection from '@/components/sections/ko/Reflection';

export default function HomeKo() {
  return (
    <main className="ds-kr" lang="ko">
      <Hero />
      <AboutService />
      <BeforeExperience />
      <Research />
      <Define />
      <FeatureCategorization />
      <Iteration />
      <Crazy8 />
      <InformationArchitecture />
      <WireframeDesignSystem />
      <KeyFeatures />
      <UserTest />
      <Reflection />
    </main>
  );
}
