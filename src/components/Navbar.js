import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="lg:sticky lg:top-0 lg:z-30 lg:pt-10 lg:bg-white">
      {/* Mobile */}
      <section className="overscroll-none lg:hidden">
        <div className="mt-6 ml-8">
          <div
            className={classNames('menu-btn', menuOpen && 'open')}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </section>

      {/* mobile navbar */}
      <div
        className={classNames(
          menuOpen
            ? 'h-screen w-full transition-all duration-500 ease-in-out bg-white absolute top-[64px] left-0'
            : 'hidden transition-all duration-500 ease-in-out',
          'z-20 lg:hidden'
        )}
      >
        <div
          className={classNames(
            'flex flex-col items-center justify-center gap-8 py-12'
          )}
        >
          <HashLink
            to="/#skills"
            smooth
            className="text-lg leading-[26px] font-normal text-theme-red-600"
            onClick={() => handleClick()}
          >
            Skills
          </HashLink>

          <HashLink
            to="/#projects"
            smooth
            className="text-lg leading-[26px] font-normal text-theme-red-600"
            onClick={() => handleClick()}
          >
            Projects
          </HashLink>

          <HashLink
            to="/#contact-me"
            smooth
            className="text-lg leading-[26px] font-normal text-theme-red-600"
            onClick={() => handleClick()}
          >
            Contact me
          </HashLink>
        </div>
      </div>

      {/* web version */}
      <section className="sticky hidden h-10 px-8 mx-auto lg:block max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-4xl font-bold text-theme-navy-blue">
              ashfaque;
            </Link>
          </div>

          <div className="flex items-center gap-20">
            <HashLink
              to="/#skills"
              smooth
              className="text-lg leading-[26px] font-normal text-theme-red-600"
            >
              Skills
            </HashLink>

            <HashLink
              to="/#projects"
              smooth
              className="text-lg leading-[26px] font-normal text-theme-red-600"
            >
              Projects
            </HashLink>

            <HashLink
              to="/#contact-me"
              smooth
              className="text-lg leading-[26px] font-normal text-theme-red-600"
            >
              Contact me
            </HashLink>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
