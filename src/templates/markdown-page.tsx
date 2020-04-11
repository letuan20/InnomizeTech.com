import React from 'react';
import Container from '../components/container';
import SEO from '../components/seo';
import Layout from '../components/layout';
import theme from '../../config/theme';

interface MarkdownPageProps extends React.ReactPropTypes {
  children?: any;
  pageContext: {
    frontmatter: any;
  };
}

function MarkdownPage({
  children,
  pageContext: { frontmatter },
}: MarkdownPageProps) {
  return (
    <div>
      <SEO />
      <Layout
        pageTitle={frontmatter.title}
        frontmatter={frontmatter}
        headerColor={theme.colors.white}
      >
        <Container>{children}</Container>
      </Layout>
    </div>
  );
}

export default MarkdownPage;
