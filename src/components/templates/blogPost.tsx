import React from "react"
import { graphql } from "gatsby"

import Layout from '../app/Layout';
import SEO from '../seo';
import Navbar from '../app/Navbar';
import BlogBanner from '../blog-detail/BlogBanner';
import BlogContent from '../blog-detail/BlogDetailContent';
import Footer from '../app/Footer';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <BlogBanner data = {data} />
      <BlogContent data = {data} />
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
        hashtags
        position
        date
        title
        author
        image {
          childImageSharp {
            fluid {
                  ...GatsbyImageSharpFluid
                }
          }
        }
      }
      html
    }
  }
`