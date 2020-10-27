import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Link } from '../Link';
import { NavLink } from './NavLink';
import { useResize } from '../../hooks';

export const Nav: React.FC = () => {
  const [isOpen, setNavOpen] = React.useState<boolean>(false);
  const handleResize = () => {
    return setNavOpen(false);
  };

  const toggleNav = () => setNavOpen(!isOpen);
  useHotkeys('esc', () => setNavOpen(false));
  useResize(handleResize);

  return (
    <div className="relative z-20 w-full h-24 pt-2 bg-white">
      <div className="container flex items-center justify-between h-full mx-auto px-5 xl:p-0">
        <Link to="/" className="relative flex items-center h-full font-black">
          <span className="text-2xl font-black">Starter</span>
        </Link>

        <div
          id="nav"
          className="absolute top-0 left-0 right-0 block w-full mt-20 border-b border-gray-200 sm:border-none sm:block sm:relative sm:mt-0 sm:w-auto"
        >
          <nav
            className={`navbar flex flex-col items-center py-3 bg-white border border-gray-100 sm:flex-row sm:bg-transparent sm:border-none sm:py-0 ease-in-out transition duration-300 delay-75 lg:visible shadow-lg md:shadow-none ${
              isOpen ? 'translate-x-0' : '-translate-x-full overflow invisible'
            }`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="#">
              <span className="relative inline-block px-3 py-1 text-base font-bold duration-200 bg-white text-primary border-2 border-primary rounded fold-bold hover:bg-primary-500 hover:text-white uppercase transition-colors ease-in-out">
                signup
              </span>
            </NavLink>
          </nav>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="btn btn-primary"
            onClick={toggleNav}
            type="button"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
