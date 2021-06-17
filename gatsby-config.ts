/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import {
  siteMetadata,
  manifestOptions,
  gtagOptions,
  pathPrefix,
  googleFonts,
  preconnectOptions,
  BUILD_CONTEXT,
  Plugin,
} from './config/SiteConfig';

const plugins: Plugin[] = [
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
    resolve: 'gatsby-plugin-google-gtag',
    options: gtagOptions,
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
        'tailwindcss',
        BUILD_CONTEXT !== 'development' && 'postcss-preset-env',
      ],
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
  {
    resolve: 'gatsby-plugin-image',
  },
  {
    resolve: 'gatsby-plugin-preconnect',
    options: preconnectOptions,
  },
];

const config = {
  siteMetadata,
  pathPrefix,
  plugins,
};

export default config;
