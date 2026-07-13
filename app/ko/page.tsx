import Hero from '@/components/sections/ko/Hero';
import AboutService from '@/components/sections/ko/AboutService';
import BeforeExperience from '@/components/sections/ko/BeforeExperience';
import Research from '@/components/sections/ko/Research';
import Define from '@/components/sections/ko/Define';
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
      <UserTest />
      <Reflection />
    </main>
  );
}
