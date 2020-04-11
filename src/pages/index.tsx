import React from 'react';
import { graphql } from 'gatsby';

import Container from '../components/container';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <SEO />
          <Container>
            <p>This is main content page</p>
          </Container>
        </Container>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
