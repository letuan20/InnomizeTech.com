import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/app/Layout';
import SEO from '../components/seo';
import Navbar from '../components/app/Navbar';
import BlogBanner from '../components/blog-detail/BlogBanner';
import BlogContent from '../components/blog-detail/BlogDetailContent';
import Footer from '../components/app/Footer';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <BlogBanner data={data} />
      <BlogContent data={data} />
      <Footer />
    </Layout>
  );
};

export default BlogPost;

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
        image
      }
      html
    }
  }
`;
