/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({actions, graphql}) => {
  const {createPage} = actions

  const writingTemplate = path.resolve(`src/templates/writing.js`)

  const {data, errors} = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path,
      component: writingTemplate,
      context: {} // additional data can be passed via context
    })
  })
}
