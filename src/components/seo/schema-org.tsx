import React from 'react';
import Helmet from 'react-helmet';

interface SchemaProps {
  author: any;
  canonicalUrl: string;
  defaultTitle: string;
  datePublished: string;
  description: string;
  image: string;
  isBlogPost?: boolean;
  organization: any;
  title: string;
  url: string;
}

export default React.memo<SchemaProps>(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        url,
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        name: title,
        alternateName: defaultTitle,
      },
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  image,
                  '@id': url,
                  name: title,
                },
              },
            ],
          },
          {
            url,
            description,
            datePublished,
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            author: {
              '@type': 'Person',
              name: author.name,
            },
            publisher: {
              '@type': 'Organization',
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': canonicalUrl,
            },
          },
        ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  },
);
