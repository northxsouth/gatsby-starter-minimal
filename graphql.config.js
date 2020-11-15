module.exports = {
  schema: './src/__generated__/gatsby-schema.graphql',
  documents: [
    './src/**/*.{ts,tsx}',
    './src/__generated__/gatsby-plugin-documents.graphql',
  ],
  extensions: {
    endpoints: {
      default: {
        url: 'http://localhost:8000/___graphql',
      },
    },
  },
};
