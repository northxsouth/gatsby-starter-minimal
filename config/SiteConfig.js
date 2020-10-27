/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config();
const package = require('../package.json');

const { CONTEXT, DEPLOY_PRIME_URL, GATSBY_ACTIVE_ENV, NODE_ENV } = process.env;

const BUILD_CONTEXT = GATSBY_ACTIVE_ENV || NODE_ENV || CONTEXT || 'development';

console.log('Using environment config', { BUILD_CONTEXT });

// BEGIN CONFIG HERE

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

const siteMetadata = {
  title: 'Gatsby Starter - Tailwind & TS', // Site title.
  titleShort: 'Tailwind & TS Starter', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  description: 'Starter gatsby application', // Website description used for RSS feeds/meta description tag.
  pathPrefix,
  siteUrl: baseUrl,
  buildContext: BUILD_CONTEXT,
  version: package.version,
  social,
};

const googleAnalytics = {
  trackingId: process.env.GOOGLE_ANALYTICS_ID,
  anonymize: true,
  respectDNT: true,
};

const manifestOptions = {
  name: siteMetadata.siteTitle,
  short_name: siteMetadata.titleShort,
  description: siteMetadata.description,
  homepage_url: baseUrl,
  start_url: pathPrefix,
  background_color: '#fff',
  theme_color: '#48695f',
};

module.exports = {
  baseUrl,
  siteMetadata,
  pathPrefix,
  googleAnalytics,
  social,
  manifestOptions,
};
