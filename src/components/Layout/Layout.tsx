import React from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { SEO } from '../SEO';

interface ILayoutProps {
  location: Location;
  title?: string;
}

export const Layout: React.FC<ILayoutProps> = ({
  location,
  title,
  children,
}) => (
  <>
    <SEO pathName={location.pathname} title={title} />
    <Nav />
    <div className="flex-grow site-container">{children}</div>
    <Footer />
  </>
);
