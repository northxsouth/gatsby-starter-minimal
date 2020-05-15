import React from 'react';
import { Nav } from '../Nav';

export const Layout: React.FC = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);
