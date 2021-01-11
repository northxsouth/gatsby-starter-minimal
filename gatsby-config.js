const { generateConfig } = require('gatsby-plugin-ts-config');

const flags = {
  FAST_REFRESH: true,
  PRESERVE_FILE_DOWNLOAD_CACHE: true,
  PRESERVE_WEBPACK_CACHE: true,
  DEV_SSR: true,
};

module.exports = { flags, ...generateConfig() };
