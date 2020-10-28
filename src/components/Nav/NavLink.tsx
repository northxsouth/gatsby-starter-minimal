import * as React from 'react';
import { Link } from '../Link';

interface INavLinkProps {
  to?: string;
}

const NavLink: React.FC<INavLinkProps> = ({ to = '#', children }) => {
  return (
    <Link
      to={to}
      className="px-1 py-2 mr-0 mr-4 text-base font-medium sm:mb-0 lg:py-0 hover:text-primary-600 lg:mr-8 last:mr-0"
      activeClassName="text-primary-600"
    >
      {children}
    </Link>
  );
};

export { NavLink };
