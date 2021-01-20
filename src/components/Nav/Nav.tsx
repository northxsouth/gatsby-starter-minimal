import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../Link';
import { NavLink } from './NavLink';
import { useResize } from '../../hooks';

export const Nav: React.FC = () => {
  const [isOpen, setNavOpen] = React.useState<boolean>(false);

  const data = useStaticQuery<GatsbyTypes.NavDataQuery>(graphql`
    query NavData {
      site {
        siteMetadata {
          titleShort
        }
      }
    }
  `);
  const handleResize = () => {
    return setNavOpen(false);
  };

  const toggleNav = () => setNavOpen(!isOpen);
  useHotkeys('esc', () => setNavOpen(false));
  useResize(handleResize);

  return (
    <nav className="z-10 w-full py-4 bg-white border-b border-gray-100 shadow-sm md:shadow-none md:bg-transparent md:border-none">
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto md:flex-row">
        <Link to="/" className="relative flex items-center mr-6">
          <span className="text-2xl">{data.site.siteMetadata.titleShort}</span>
        </Link>

        <div className="block md:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 text-gray-400 border border-gray-400 rounded hover:text-gray-300 hover:border-gray-300"
            onClick={toggleNav}
            type="button"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          id="nav-content"
          className={`flex-grow w-full pt-2 md:flex md:items-center md:w-auto md:pt-0 transition-all ease-in-out transform md:transform-none md:visible ${
            !isOpen && 'hidden'
          }`}
        >
          <div className="flex flex-col items-start justify-end flex-1 -mx-1 md:items-center md:flex-row">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
