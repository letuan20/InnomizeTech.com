import React from 'react';
import { graphql } from 'gatsby';

import Container from '../../components/container';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

class Services extends React.Component {
  render() {
    return (
      <Layout>
        <SEO></SEO>
        <Container>
          <p>This is main content of the services page</p>
        </Container>
      </Layout>
    );
  }
}

export default Services;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
