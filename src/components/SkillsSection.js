import React from 'react';
import Heading from './Heading';
import SkillDwg2 from '../assets/skills2.svg';
import SkillDwg from '../assets/skill-drawing.svg';
import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import Javascript from '../assets/javascript.svg';
import ReactJS from '../assets/download.svg';
import Tailwind from '../assets/tailwindcss.png';

import Skill from './Skill';
const SkillsSection = () => {
  return (
    <section id="skills" className="pt-[105px] max-w-7xl mx-auto">
      <div className="text-center">
        <Heading title="Skills" />
      </div>

      <div className="md:flex md:justify-between">
        <div className="flex justify-center pt-[18px] md:order-2 md:self-end">
          <img src={SkillDwg} alt="man" className="lg:hidden" />
          <img src={SkillDwg2} alt="man" className="hidden lg:block" />
        </div>

        <div>
          <div className="px-8 pt-[43px] md:pt-[30px]">
            <h6 className="text-lg leading-[26px] text-theme-gray-300">
              I have a vast experience in the following web technologies
            </h6>
          </div>

          <div className="grid grid-cols-2 gap-x-[82px] sm:grid-cols-5 sm:gap-x-4 lg:gap-x-10 gap-y-[58px] px-8 mx-auto  pt-8">
            <div>
              <Skill imageSrc={Html} title="HTML 5" />
            </div>
            <div className="place-self-end sm:place-self-start">
              <Skill imageSrc={Css} title="CSS3" />
            </div>
            <div>
              <Skill imageSrc={Javascript} title="JavaScript" />
            </div>
            <div className="place-self-end sm:place-self-start">
              <Skill imageSrc={ReactJS} title="React.js" />
            </div>
            <div>
              <Skill imageSrc={Tailwind} title="Tailwind" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
