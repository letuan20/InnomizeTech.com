import React from 'react';

import Container from './container';
import SEO from './seo';
import Layout from './layout';
import Link from './link';

const Blog = ({ data: { allMdx }, pageContext: { pagination } }) => {
  const { page, nextPagePath, previousPagePath } = pagination;

  const posts = page
    .map((id) =>
      allMdx.edges.find(
        (edge) =>
          edge.node.id === id &&
          edge.node.parent.sourceInstanceName !== 'pages',
      ),
    )
    .filter((post) => post !== undefined);

  return (
    <Layout>
      <SEO />
      <Container>
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <h2>
              <Link
                aria-label={`View ${post.frontmatter.title} article`}
                to={post.fields.slug}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <div>{post.excerpt}</div>
          </div>
        ))}
        <br />
        <br />
        <div css={{ display: 'flex', justifyContent: 'space-around' }}>
          {previousPagePath ? (
            <Link to={previousPagePath} aria-label="View previous page">
              ← Previous Page
            </Link>
          ) : (
            <div />
          )}
          {nextPagePath ? (
            <Link to={nextPagePath} aria-label="View next page">
              Next Page →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default Blog;
