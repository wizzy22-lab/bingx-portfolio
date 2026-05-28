import Hero from '@/components/sections/Hero';
import AboutService from '@/components/sections/AboutService';
import BeforeExperience from '@/components/sections/BeforeExperience';
import Research from '@/components/sections/Research';
import Define from '@/components/sections/Define';
import FeatureCategorization from '@/components/sections/FeatureCategorization';
import Iteration from '@/components/sections/Iteration';
import Crazy8 from '@/components/sections/Crazy8';
import InformationArchitecture from '@/components/sections/InformationArchitecture';
import WireframeDesignSystem from '@/components/sections/WireframeDesignSystem';
import KeyFeatures from '@/components/sections/KeyFeatures';
import UserTest from '@/components/sections/UserTest';
import Reflection from '@/components/sections/Reflection';

function Rule() {
  return <hr className="section-rule" />;
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Rule />
      <AboutService />
      <Rule />
      <BeforeExperience />
      <Rule />
      <Research />
      <Rule />
      <Define />
      <Rule />
      <FeatureCategorization />
      <Rule />
      <Iteration />
      <Rule />
      <Crazy8 />
      <Rule />
      <InformationArchitecture />
      <Rule />
      <WireframeDesignSystem />
      <Rule />
      <KeyFeatures />
      <Rule />
      <UserTest />
      <Rule />
      <Reflection />
    </main>
  );
}
