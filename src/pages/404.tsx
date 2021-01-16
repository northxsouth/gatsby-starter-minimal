import { PageProps } from 'gatsby';
import * as React from 'react';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="container">
        <div className="flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
          <div className="flex-1">
            <div className="text-5xl font-bold font-dark">404</div>
            <p className="text-2xl font-light leading-normal md:text-3xl">
              Sorry we couldn't find this page.{' '}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <a
              className="inline px-4 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700"
              href="/"
            >
              back to homepage
            </a>
          </div>
          <div className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-1/2 feather feather-alert-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
