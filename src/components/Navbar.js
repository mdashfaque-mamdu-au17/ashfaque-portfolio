import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Setting from '../assets/gear-setting.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-30 pt-10 bg-white">
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
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#E84949' : '#000000',
            })}
            className="text-lg leading-[26px] font-normal"
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? '#E84949' : '#000000',
            })}
            className="text-lg leading-[26px] font-normal"
          >
            Projects
          </NavLink>

          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? '#E84949' : '#000000',
            })}
            className="text-lg leading-[26px] font-normal"
          >
            Contact me
          </NavLink>
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
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#E84949' : '#000000',
              })}
              className="text-lg leading-[26px] font-normal"
            >
              Skills
            </NavLink>

            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? '#E84949' : '#000000',
              })}
              className="text-lg leading-[26px] font-normal flex gap-2"
            >
              <img src={Setting} alt="" />
              Projects
            </NavLink>

            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? '#E84949' : '#000000',
              })}
              className="text-lg leading-[26px] font-normal"
            >
              Contact me
            </NavLink>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
