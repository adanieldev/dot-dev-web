const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/post.js`)

  const result = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `,
  )
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post) => {
    createPage({
      component: postTemplate,
      path: post.node.fields.slug,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: value,
    })
  }
}