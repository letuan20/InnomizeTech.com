import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Blog from '../components/blog';

/**
 * The blog page that displays list of posts
 * @param props
 */
function BlogPage(props: any) {
  return <Blog {...props} />;
}

export default function BlogPageWithData(props: any) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
              frontmatter: { published: { ne: false }, unlisted: { ne: true } }
              fileAbsolutePath: { regex: "//content/blog//" }
            }
          ) {
            edges {
              node {
                excerpt(pruneLength: 300)
                id
                fields {
                  title
                  slug
                  date
                }
                parent {
                  ... on File {
                    sourceInstanceName
                  }
                }
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  banner {
                    ...bannerImage640
                  }
                  slug
                  keywords
                }
              }
            }
          }
        }
      `}
      render={data => <BlogPage data={data} {...props} />}
    />
  );
}
