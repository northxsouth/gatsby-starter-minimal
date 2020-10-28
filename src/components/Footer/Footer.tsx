import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { useSiteMetadata, useSocialQuery } from '../../hooks';
import { Link } from '../Link';
import { FooterDataQuery } from '../../../graphql-types';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  const data: FooterDataQuery = useStaticQuery(graphql`
    query FooterData {
      siteBuildMetadata {
        buildYear: buildTime(formatString: "Y")
      }
    }
  `);

  const { title, description } = useSiteMetadata();
  const { twitter, facebook, instagram } = useSocialQuery();

  const {
    siteBuildMetadata: { buildYear },
  } = data;
  return (
    <footer className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap px-4 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 mx-auto text-center md:w-64 md:mx-0 md:text-left">
          <Link
            className="inline-flex items-center justify-center font-medium text-left text-gray-900 md:justify-start"
            to="/"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-full p-2 text-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="ml-3 text-xl leading-none">{title}</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  First Link
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  Second Link
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  Third Link
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  First Link
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  Second Link
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  Third Link
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" to="/">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap justify-center xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap md:justify-start">
              <input
                className="w-40 px-4 py-2 mr-1 text-base bg-gray-100 border border-gray-400 rounded sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 focus:outline-none focus:border-primary-500"
                placeholder="you@youremail.com"
                type="text"
              />
              <button
                className="inline-flex flex-shrink-0 px-6 py-2 text-white uppercase border-0 rounded lg:mt-2 xl:mt-0 bg-primary-500 focus:outline-none hover:bg-primary-600"
                type="submit"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-sm text-center text-gray-500 md:text-left">
              Subscribe to our weekly newsletter!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container flex flex-col flex-wrap px-4 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            © {buildYear} {title} —
            <Link
              to={`https://twitter.com/${twitter.username}`}
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              {twitter.username}
            </Link>
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link
              className="text-gray-500"
              to={`https://facebook.com/${facebook.username}`}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link
              className="ml-3 text-gray-500"
              to={`https://twitter.com/${twitter.username}`}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link
              className="ml-3 text-gray-500"
              to={`https://instagram.com/${instagram.username}`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
