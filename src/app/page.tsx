import AboutMeSection from '@/components/sections/about-me';
import ExperienceSection from '@/components/sections/experiences';
import HeroSection from '@/components/sections/hero';
import SkillSection from '@/components/sections/skills';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillSection />
      <ExperienceSection />
    </>
  );
}
