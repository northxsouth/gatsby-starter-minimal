import React from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { SEO } from '../SEO';

interface LayoutProps {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <>
    <SEO title={title} />
    <Nav />
    <div className="flex-grow site-container">{children}</div>
    <Footer />
  </>
);
