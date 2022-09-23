import React from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import { mostRecents } from './projectdata';
const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-[105px] max-w-7xl mx-auto">
      <div className="text-center">
        <Heading title="Projects" />
      </div>
      <div className="pt-[18px] text-center">
        <p className="text-base font-normal leading-[23px] text-theme-gray-300 lg:text-lg lg:leading-[26px]">
          Some of my projects includes:
        </p>
      </div>

      <div className="pt-[43px] lg:pt-[30px] flex flex-wrap gap-y-[69px] justify-center gap-4 px-8 xl:grid xl:grid-cols-3 xl:flex-none gap-x-[58px]">
        {mostRecents?.map((project, index) => {
          const { id, projectImage, description, deployedLink, githubLink } =
            project;
          return (
            <ProjectCard
              key={id}
              imageSrc={projectImage}
              description={description}
              deployedLink={deployedLink}
              githubLink={githubLink}
            />
          );
        })}
      </div>

      <div className="pt-6 text-center">
        <Link
          to="/projects"
          className="text-lg font-semibold text-theme-red-600 leading-[26px] active:text-theme-red-600 hover:text-theme-red-600 hover:cursor-pointer hover:underline hover:underline-offset-8  transition-all duration-500"
        >
          View all
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
