/* eslint-disable global-require */

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: activeEnv === 'development' ? `.env.development` : '.env',
});

const baseUrl =
  process.env.CONTEXT === 'production'
    ? process.env.BASE_URL || 'https://naughty-leavitt-12b136.netlify.app'
    : process.env.DEPLOY_PRIME_URL ||
      process.env.BASE_URL ||
      'https://naughty-leavitt-12b136.netlify.app';

console.log(`Using environment config: '${activeEnv}'`);

const siteMetaData = {
  siteTitle: 'Gatsby Starter - Tailwind & TS', // Site title.
  titleShort: 'Tailwind & TS Starter', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  description: 'Starter gatsby application', // Website description used for RSS feeds/meta description tag.
};

module.exports = {
  baseUrl,
  siteMetaData,
  pathPrefix: '/',
  backgroundColor: '#fff',
  themeColor: '#48695f',
  googleAnalytics: {
    trackingId: 'UA-',
    anonymize: true,
    respectDNT: true,
  },
};
