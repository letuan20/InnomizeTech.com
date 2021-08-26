import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/app/Layout';
import SEO from '../components/seo';
import Navbar from '../components/app/Navbar';
import CaseStudyDetailBanner from '../components/case-study-detail/CaseStudyDetailBanner';
import CaseStudyDetailContent from '../components/case-study-detail/caseStudyDetailContent';
import Footer from '../components/app/Footer';

const CaseStudy = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <CaseStudyDetailBanner pageTitle={data.markdownRemark.frontmatter.title} />
      <CaseStudyDetailContent data={data} />
      <Footer />
    </Layout>
  );
};

export default CaseStudy;


export const CaseStudyPostTemplateQuery = graphql`
  query CaseStudyPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        technologies
        project
        location
        devops
        client
        architecture
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        featuredImage
        path
        title
      }
      html
    }
  }
`;