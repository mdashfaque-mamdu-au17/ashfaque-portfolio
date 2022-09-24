import classNames from 'classnames';
import React from 'react';

const ProjectCard = ({ imageSrc, description, deployedLink, githubLink }) => {
  return (
    <article
      className={classNames(
        'w-[276px] xl:w-[381px] h-[300px] xl:h-[431px] hover:shadow-xl rounded-2xl overflow-hidden',
        'custom-box'
      )}
    >
      <div className="overflow-hidden">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          <img
            src={imageSrc}
            alt=""
            className="h-[165px] xl:h-[276px] hover:cursor-pointer hover:scale-125 hover:rounded-t-xl transition-transform ease-in duration-500 rounded-t-xl"
          />
        </a>
      </div>

      <div className=" h-[127px] xl:h-[147px] pt-5 lg:pt-8 px-3 flex flex-col justify-between pb-3">
        <div className="text-center">
          <p className="text-base leading-[23px] text-theme-gray-300">
            {description}
          </p>
        </div>
        <div className="flex justify-between ">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-theme-blue-600 leading-[26px] active:text-theme-red-600 hover:text-theme-red-600 hover:cursor-pointer hover:underline hover:underline-offset-4 transition-all duration-500"
          >
            View site
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-theme-blue-600 leading-[26px] active:text-theme-red-600  hover:text-theme-red-600 hover:cursor-pointer hover:underline hover:underline-offset-4 transition-all duration-500"
          >
            Source code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
