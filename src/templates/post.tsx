import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import get from 'lodash/get';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

interface PostPageProps {
  data: {
    site: string;
    mdx: any;
  };
}

export default function PostPage(props: PostPageProps) {
  return <Post {...props} />;
}

function Post({ data: { site, mdx } }: PostPageProps) {
  const { title, description } = mdx.fields;

  return (
    <Layout site={site} frontmatter={mdx.fields} headerLink={'/blog'}>
      <SEO
        frontmatter={mdx.fields}
        metaImage={get(mdx, 'fields.banner.childImageSharp.fluid.src')}
        isBlogPost
      />
      <article>
        <Container>
          <h1>
            {title}
            <hr />
            {description ? <Markdown>{description}</Markdown> : null}
            <MDXRenderer {...mdx}>{mdx.body}</MDXRenderer>
          </h1>
        </Container>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        keywords
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
        description
        plainTextDescription
        author
        banner {
          ...bannerImage720
        }
        bannerCredit
        slug
        keywords
      }
      body
    }
  }
`;
