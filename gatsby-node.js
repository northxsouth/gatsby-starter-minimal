// const each = require('lodash/each')
const path = require("path");
// const PostTemplate = path.resolve('./src/templates/index.js')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
//               edges {
//                 node {
//                   id
//                   name: sourceInstanceName
//                   path: absolutePath
//                   remark: childMarkdownRemark {
//                     id
//                     frontmatter {
//                       layout
//                       path
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(({ errors, data }) => {
//         if (errors) {
//           console.log(errors)
//           reject(errors)
//         }

//         // Create blog posts & pages.
//         const items = data.allFile.edges
//         const posts = items.filter(({ node }) => /posts/.test(node.name))
//         each(posts, ({ node }) => {
//           if (!node.remark) return
//           const { path } = node.remark.frontmatter
//           createPage({
//             path,
//             component: PostTemplate,
//           })
//         })

//         const pages = items.filter(({ node }) => /page/.test(node.name))
//         each(pages, ({ node }) => {
//           if (!node.remark) return
//           const { name } = path.parse(node.path)
//           const PageTemplate = path.resolve(node.path)
//           createPage({
//             path: name,
//             component: PageTemplate,
//           })
//         })
//       })
//     )
//   })
// }

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve("src"), "node_modules"]
    }
  });

  // No sourcemaps in production
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};
