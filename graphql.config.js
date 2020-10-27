const { schema, documents } = require('./.cache/graphql.config.json');

module.exports = {
  schema,
  documents,
  extensions: {
    endpoints: {
      default: {
        url: 'http://localhost:8000/___graphql',
      },
    },
  },
};
