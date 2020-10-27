import * as React from 'react';
import { Link } from '../Link';

interface INavLinkProps {
  to?: string;
}

const NavLink: React.FC<INavLinkProps> = ({ to = '#', children }) => {
  return (
    <Link
      to={to}
      className="px-1 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8 py-2 lg:py-0 hover:text-primary-600"
      activeClassName="text-primary-600"
    >
      {children}
    </Link>
  );
};

export { NavLink };
