/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem');
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await getPageData(graphql);

  data.blogPosts.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    actions.createPage({
      path: `/blog${slug}`,
      component: path.resolve('./src/templates/blogPost.tsx'),
      context: { slug: slug },
    });
  });
  data.casePosts.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    actions.createPage({
      path: `/case-studies${slug}`,
      component: path.resolve('./src/templates/caseStudy.tsx'),
      context: { slug: slug },
    });
  });
};


async function getPageData(graphql) {
  return await graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      casePosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/case-studies/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
}
