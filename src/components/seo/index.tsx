import path from 'path';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import SchemaOrg from './schema-org';

import config from '../../../config/website';
import defaultMetaImage from '../../../static/images/metaImage.png';

interface SEOProps {
  siteMetadata?: any;
  isBlogPost?: boolean;
  postData: {
    childMarkdownRemark: {
      frontmatter?: any;
      excerpt?: any;
    };
  };
  metaImage?: string;
  frontmatter?: any;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  datePublished?: string;
}

const defaultProps: SEOProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
};

const SEO = ({
  siteMetadata: seo,
  postData,
  metaImage,
  isBlogPost,
  frontmatter: postMeta = postData.childMarkdownRemark.frontmatter || {},
  title = postMeta.title || config.siteTitle,
  description = postMeta.plainTextDescription ||
    postMeta.description ||
    seo.description,
  image = `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  url = postMeta.slug
    ? `${seo.canonicalUrl}${path.sep}${postMeta.slug}`
    : seo.canonicalUrl,
  datePublished = isBlogPost ? postMeta.datePublished : false,
}: SEOProps) => {
  return (
    <div>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </div>
  );
};

const SEOWithQuery = (props: SEOProps) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          author {
            name
          }
          organization {
            name
            url
            logo
          }
          social {
            twitter
            fbAppID
          }
        }
      }
    }
  `);
  return <SEO siteMetadata={siteMetadata} {...props} />;
};

SEOWithQuery.defaultProps = defaultProps;

export default SEOWithQuery;
