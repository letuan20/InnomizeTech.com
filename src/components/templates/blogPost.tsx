import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../app/Layout';
import SEO from '../seo';
import Navbar from '../app/Navbar';
import Footer from '../app/Footer';

const BlogPost = ({ data }) => {
 
  return (
    <Layout>
      <SEO />
      <Navbar />
      <div>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <Img
          fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
        />
        <div> {data.markdownRemark.frontmatter.description}</div>
      </div>
      <Footer />
    </Layout>
   
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`