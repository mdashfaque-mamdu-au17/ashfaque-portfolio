import React from 'react';
import Whatsapp from '../assets/whatsapp.svg';
import LinkedIn from '../assets/linkedin.svg';
import Gmail from '../assets/gmail.svg';
import Github from '../assets/github.svg';

const Footer = () => {
  return (
    <div className="mt-[113px] h-[250px] sm:h-[200px] bg-theme-purple-800">
      <div className="h-full mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-col justify-between h-full sm:flex-row sm:items-center sm:h-[116px] sm:px-8 w-full">
          <div className="pl-[28px]  sm:flex sm:flex-col sm:justify-start">
            <div className="pt-[46px] sm:pt-0">
              <p className="text-lg sm:text-xl leading-[26px] text-white">
                My social Media links:
              </p>
            </div>
            <div className="flex gap-[60px] pt-3">
              <a
                href="https://www.linkedin.com/in/md-ashfaque-mamdu-b61510211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="linkedin" />
              </a>

              <a
                href="https://wa.me/918971138435"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Whatsapp} alt="whatsapp" />
              </a>

              <a href="mailto:ashfaquemamdu666@gmail.com">
                <img src={Gmail} alt="gmail" />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[22px] pb-4 sm:pb-5 sm:flex-none sm:self-end sm:pr-8">
            <a
              href="https://github.com/mdashfaque-mamdu-au17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="" />
            </a>

            <p className="text-white text-lg leading-[26x]">
              @{' '}
              <a
                href="https://github.com/mdashfaque-mamdu-au17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-blue-700 hover:underline hover:underline-offset-2"
              >
                ashfaque
              </a>{' '}
              on Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
