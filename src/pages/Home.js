import React from 'react';
import ProfileSection from '../components/ProfileSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="z-10">
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </>
  );
};

export default Home;
