/* eslint-disable import/no-extraneous-dependencies */
import { PluginRef } from 'gatsby';
import dotenv from 'dotenv';
import type { PluginOptions as TypegenPluginOptions } from 'gatsby-plugin-typegen/types';

import pkg from '../package.json';

dotenv.config();

const { CONTEXT, DEPLOY_PRIME_URL, GATSBY_ACTIVE_ENV, NODE_ENV } = process.env;
export const BUILD_CONTEXT =
  GATSBY_ACTIVE_ENV || NODE_ENV || CONTEXT || 'development';

console.log('Using environment config', { BUILD_CONTEXT });

interface ManifestPluginOptions {
  name: string;
  short_name?: string;
  start_url: string;
  background_color: string;
  theme_color: string;
  display: string;
  description?: string;
  icon: string;
  icons?: {
    src: string;
    sizes: string;
    type: string;
  }[];
  include_favicon?: boolean;
  icon_options?: {
    purpose?: string;
  };
}

interface GoogleFontPluginOption {
  family: string;
  variable?: boolean;
  weights: string | string[];
}

interface GTagPluginOptions {
  trackingIds?: string[];
  gtagConfig?: GtagConfig;
  pluginConfig?: PluginConfig;
}

interface GtagConfig {
  optimize_id?: string;
  anonymize_ip?: boolean;
  cookie_expires?: number;
}

interface PluginConfig {
  head?: boolean;
  respectDNT?: boolean;
  exclude?: string[];
}

interface PreconnectDomain {
  domain: string;
  crossOrigin?: boolean | 'anonymous' | 'use-credentials';
}

interface PreconnectOptions {
  domains: PreconnectDomain[] | string[];
}
export type Plugin =
  | PluginRef
  | { resolve: 'gatsby-plugin-typegen'; options: TypegenPluginOptions }
  | { resolve: 'gatsby-plugin-manifest'; options: ManifestPluginOptions }
  | {
      resolve: '@northxsouth/gatsby-plugin-google-fonts';
      options: GoogleFontPluginOption;
    }
  | { resolve: 'gatsby-plugin-google-gtag'; options: GTagPluginOptions }
  | { resolve: 'gatsby-plugin-preconnect'; options: PreconnectOptions };

// BEGIN CONFIG HERE

// This is your domain usually. We will override it with URLs from your CI (netlify usually) for dev/testing if applicable.
const URL = 'https://gatsby-starter-minimal.netlify.app';
const DEFAULT_DEV_URL = 'http://localhost:8000';

const getBaseUrl = () => {
  if (BUILD_CONTEXT === 'production') {
    return URL;
  }
  if (DEPLOY_PRIME_URL) {
    return DEPLOY_PRIME_URL;
  }
  return DEFAULT_DEV_URL;
};

const pathPrefix = '/';

const baseUrl = getBaseUrl() + pathPrefix;

const social = {
  twitter: {
    username: 'northxsouth_co',
  },
  facebook: {
    username: 'northxsouth.co',
  },
  instagram: {
    username: 'northxsouth.co',
  },
};

const language = 'en';

const siteMetadata = {
  title: 'Gatsby Starter Minimal', // Site title.
  titleShort: 'Gatsby Starter', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  description: 'A minimal gatsby starter template', // Website description used for RSS feeds/meta description tag.
  pathPrefix,
  siteUrl: baseUrl,
  buildContext: BUILD_CONTEXT,
  version: pkg.version,
  social,
  language,
};

const gtagOptions: GTagPluginOptions = {
  trackingIds: [process.env.GTAG_ID],
  gtagConfig: {
    anonymize_ip: true,
  },
  pluginConfig: {
    head: true,
    respectDNT: true,
  },
};

const manifestOptions: ManifestPluginOptions = {
  name: siteMetadata.title,
  short_name: siteMetadata.titleShort,
  description: siteMetadata.description,
  start_url: pathPrefix,
  background_color: '#fff',
  theme_color: '#48695f',
  display: 'standalone',
  icon: 'src/assets/images/favicon.svg',
  icon_options: {
    purpose: 'maskable',
  },
};

const googleFonts: GoogleFontPluginOption[] = [
  {
    family: 'Work Sans',
    variable: true,
    weights: ['300..700'],
  },
];

const preconnectOptions: PreconnectOptions = {
  domains: ['https://fonts.googleapis.com'],
};

export {
  baseUrl,
  siteMetadata,
  pathPrefix,
  gtagOptions,
  social,
  manifestOptions,
  googleFonts,
  preconnectOptions,
};
