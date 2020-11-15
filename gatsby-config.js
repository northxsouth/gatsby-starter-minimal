/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { siteMetadata, manifestOptions, googleAnalytics, pathPrefix, googleFonts } = require('./config/SiteConfig');

module.exports = {
  siteMetadata,
  pathPrefix,
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/types/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          'src/__generated__/gatsby-schema.graphql': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
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
      options: manifestOptions,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: googleAnalytics,
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
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: googleFonts,
      },
    },
  ],
};
