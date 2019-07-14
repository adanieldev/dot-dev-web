import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import postStyles from "./index.module.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home"/>
      <p>I'm Daniel, a software engineer.</p>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <div className={postStyles.post}>
            <Link to={edge.node.fields.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.excerpt}</p>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}
export default IndexPage
