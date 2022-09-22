import React from 'react';
import ProfileSection from '../components/ProfileSection';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
  return (
    <div className="z-10">
      <ProfileSection />
      <SkillsSection />
    </div>
  );
};

export default Home;
