import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Cube from '../assets/cube.svg';
import Ashfaque from '../assets/ashfaque.jpg';
import Circle from '../assets/circles.svg';
import Esclipse from '../assets/esclipse.svg';
import ZigZag from '../assets/zigzags.svg';
import Plus from '../assets/plus.svg';
import Cube2 from '../assets/cube2.svg';
import Circle2 from '../assets/circles2.svg';
import Esclipse2 from '../assets/esclipse2.svg';
import ZigZag2 from '../assets/zigzags2.svg';
import Plus2 from '../assets/plus2.svg';

const ProfileSection = () => {
  return (
    <section className="pt-8 mx-auto md:flex md:justify-between max-w-7xl md:pt-[72px] md:items-center">
      <div className="flex justify-center md:order-2">
        <div className="w-[257px] h-[294px] lg:w-[411px] lg:h-[497px]  relative ">
          <div className="w-[204px] h-[238px] lg:w-[343px] lg:h-[389px] absolute right-3 lg:right-6 lg:bottom-[53px] bottom-[22px]">
            <img
              src={Ashfaque}
              alt=""
              className="w-[204px] h-[238px] lg:w-[343px] lg:h-[389px] object-cover"
            />
          </div>

          <div className="absolute right-0">
            <img src={Cube} alt="cube" className="lg:hidden" />
            <img src={Cube2} alt="cube" className="hidden lg:block" />
          </div>

          <div className=" z-10 absolute -right-2.5 -bottom-4 lg:bottom-0 lg:right-0">
            <img src={Circle} alt="circles" className="lg:hidden" />
            <img src={Circle2} alt="circle" className="hidden lg:block" />
          </div>

          <div className=" absolute bottom-0 left-[22px] lg:bottom-4">
            <img src={Esclipse} alt="esclipse" className="lg:hidden" />
            <img src={Esclipse2} alt="esclipse" className="hidden lg:block" />
          </div>

          <div className="absolute left-0 top-6 lg:top-9">
            <img src={ZigZag} alt="zig-zags" className="lg:hidden" />
            <img src={ZigZag2} alt="zig-zags" className="hidden lg:block" />
          </div>

          <div className="absolute top-0 left-[103px] lg:left-[132px]">
            <img src={Plus} alt="plus" className="lg:hidden" />
            <img src={Plus2} alt="plus" className="hidden lg:block" />
          </div>
        </div>
      </div>
      <div className="px-8 pt-12 md:max-w-[553px]">
        <div className="text-center md:text-left">
          <h1 className="text-[32px] leading-[47px] font-semibold text-theme-navy-blue lg:tracking-[0.18px] ">
            Hi! Ashfaque
          </h1>
        </div>

        <div className="pt-4 text-left">
          <p className="text-lg font-normal leading-[28px] text-theme-gray-400 md:text-black md:opacity-80 md:leading-[26px]">
            I am a Frontend developer and here is my portfolio website Here
            you'll learn about my journey as a Frontend developer
          </p>
        </div>

        <div className="flex justify-center pt-5 md:justify-start">
          <HashLink to="#contact-me" smooth className="text-white">
            <button className="w-[114px] h-[46px] bg-theme-red-600 rounded text-lg leading-[26px] flex items-center justify-center shadow-custom-shadow">
              Hire me
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
