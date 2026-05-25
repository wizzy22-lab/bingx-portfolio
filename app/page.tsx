import Hero from '@/components/sections/Hero';
import AboutService from '@/components/sections/AboutService';
import BeforeExperience from '@/components/sections/BeforeExperience';
import Research from '@/components/sections/Research';
import Define from '@/components/sections/Define';
import FeatureCategorization from '@/components/sections/FeatureCategorization';
import Iteration from '@/components/sections/Iteration';
import SolutionDirection from '@/components/sections/SolutionDirection';
import Ideation from '@/components/sections/Ideation';
import VisualStrategy from '@/components/sections/VisualStrategy';
import IADesign from '@/components/sections/IADesign';
import KeyFeatures from '@/components/sections/KeyFeatures';
import FinalDesign from '@/components/sections/FinalDesign';
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
