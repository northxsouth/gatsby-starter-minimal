/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { GatsbyConfig } from 'gatsby';
import {
  siteMetadata,
  manifestOptions,
  googleAnalytics,
  pathPrefix,
  googleFonts,
} from './config/SiteConfig';

const config: GatsbyConfig = {
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
      resolve: 'gatsby-plugin-manifest',
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
        postCssPlugins: [require('tailwindcss')()],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: '@northxsouth/gatsby-plugin-google-fonts',
      options: {
        fonts: googleFonts,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-preload-fonts',
  ],
};

export default config;
