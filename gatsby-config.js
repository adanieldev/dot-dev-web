/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Daniel Alvarez DEV",
    author: "Daniel Alvarez",
    description: "My space to talk about software development.",
    social: {
      twitter: "adanieldev",
      facebook: "adanieldev",
      github: "adanieldev",
      youtube: "adanieldev",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
  ],
}
