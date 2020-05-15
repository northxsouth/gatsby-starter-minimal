const config = require('./config/SiteConfig');


module.exports = {
  siteMetadata: {
    pathPrefix: config.pathPrefix,
    siteTitle: config.siteMetaData.siteTitle,
    description: config.siteMetaData.description,
    siteUrl: config.baseUrl + config.pathPrefix,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        documentPaths: [
          './src/**/*.{js,ts,tsx}',
          // './.cache/fragments/*.js',
          './node_modules/gatsby-*/**/*.js',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteMetaData.siteTitle,
        short_name: config.siteMetaData.titleShort,
        description: config.siteMetaData.description,
        homepage_url: config.baseUrl,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: config.googleAnalytics,
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
  ],
};
