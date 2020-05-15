import React from 'react';
import { Link } from 'gatsby';

export const Nav = () => (
  <nav className="flex items-center justify-between flex-wrap bg-primary-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link to="/" className="font-semibold text-xl tracking-tight">
        Tailwind Gatsby Starter
      </Link>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-primary-200 border-primary-400 hover:text-white hover:border-white">
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
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-primary-200 hover:text-white mr-4"
        >
          About
        </Link>
      </div>
    </div>
  </nav>
);
