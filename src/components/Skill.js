import React from 'react';
import Polygon from '../assets/polygon.svg';

const Skill = ({ imageSrc, title }) => {
  return (
    <div className="w-[94px]">
      <div className="relative  w-[94px] h-[105px]">
        <div className=" w-[94px] h-[105px]">
          <img src={Polygon} alt="polygon" className="w-[94px] h-[105px]" />
        </div>

        <div className="absolute top-6 w-[68px] h-[68px] left-3">
          <img src={imageSrc} alt="" className="" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-base leading-[29px] text-black">{title}</p>
      </div>
    </div>
  );
};

export default Skill;
