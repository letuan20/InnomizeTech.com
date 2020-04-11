import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: string;
}

class NotFoundPage extends React.Component<NotFoundPageProps, {}> {
  constructor(props: NotFoundPageProps, context: any) {
    super(props, context);
  }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <h1>Not Found</h1>
        <p>The page that you are looking could not be found.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
