import AboutMeSection from '@/components/sections/about-me';
import ContactSection from '@/components/sections/contact';
import ExperienceSection from '@/components/sections/experiences';
import HeroSection from '@/components/sections/hero';
import SkillSection from '@/components/sections/skills';
import TestimonialsSection from '@/components/sections/testimonial';
import WorkSection from '@/components/sections/work';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
