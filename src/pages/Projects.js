import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../components/projectdata';
const Projects = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <nav className="sticky top-0 z-30 px-8 pt-6 mx-auto bg-white lg:pt-10 max-w-7xl">
        <div>
          <Link
            to="/"
            className="text-xl font-bold lg:text-4xl text-theme-navy-blue"
          >
            ashfaque
          </Link>
        </div>
      </nav>

      <div>
        <section className="mx-auto max-w-7xl pt-8 md:pt-[72px] pb-8">
          <div className="z-10 pt-[43px] lg:pt-[30px] flex flex-wrap gap-y-[69px] justify-center gap-4 px-8 xl:grid xl:grid-cols-3 xl:flex-none gap-x-[58px]">
            {allProjects?.map((project, index) => {
              const {
                id,
                projectImage,
                description,
                deployedLink,
                githubLink,
              } = project;
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
        </section>
      </div>
    </>
  );
};

export default Projects;
