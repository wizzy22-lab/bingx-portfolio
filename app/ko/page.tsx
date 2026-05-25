import Hero from '@/components/sections/ko/Hero';
import AboutService from '@/components/sections/ko/AboutService';
import BeforeExperience from '@/components/sections/ko/BeforeExperience';
import Research from '@/components/sections/ko/Research';
import Define from '@/components/sections/ko/Define';
import SolutionDirection from '@/components/sections/ko/SolutionDirection';
import Ideation from '@/components/sections/ko/Ideation';
import VisualStrategy from '@/components/sections/ko/VisualStrategy';
import IADesign from '@/components/sections/ko/IADesign';
import KeyFeatures from '@/components/sections/ko/KeyFeatures';
import FinalDesign from '@/components/sections/ko/FinalDesign';
import UserTest from '@/components/sections/ko/UserTest';
import Reflection from '@/components/sections/ko/Reflection';

function Rule() {
  return <hr className="section-rule" />;
}

export default function HomeKo() {
  return (
    <main className="ds-kr" lang="ko">
      <Hero />
      <Rule />
      <AboutService />
      <Rule />
      <BeforeExperience />
      <Rule />
      <Research />
      <Rule />
      <Define />
      <SolutionDirection />
      <Rule />
      <Ideation />
      <Rule />
      <VisualStrategy />
      <IADesign />
      <KeyFeatures />
      <Rule />
      <FinalDesign />
      <UserTest />
      <Rule />
      <Reflection />
    </main>
  );
}
