import React from 'react';
import { graphql } from 'gatsby';

import Container from '../components/container';
import Layout from '../components/layout';
import SEO from '../components/seo';

class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO></SEO>
        <Container>
          <p>This is main content of the about page</p>
        </Container>
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
