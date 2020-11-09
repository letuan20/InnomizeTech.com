import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import { MDXProvider } from '@mdx-js/react';

import '../styles/style.scss';

import config from '../../config/website';
import theme from '../../config/theme';
import Header from './header';
import Footer from './footer';
import mdxComponents from './mdx';

interface LayoutProps {
  site?: string;
  headerLink?: string;
  pageTitle?: string;
  headerColor?: string;
  data?: any;
  frontmatter?: any;
  children?: any;
}

const Layout = ({ data, frontmatter, children }: LayoutProps) => {
  const {
    site: {
      siteMetadata: { description: siteDescription, keywords: siteKeywords },
    },
  } = data;

  const {
    keywords = siteKeywords,
    description = siteDescription,
    title = config.siteTitle,
  } = frontmatter || {};

  return (
    <ThemeProvider theme={theme}>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join() },
        ]}
      >
        <html lang="en" />
        <script src="https://js.tito.io/v1" async />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <div>
        <div>
          <Header></Header>
          <div>
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default function LayoutWithSiteData(props: LayoutProps) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              author {
                name
              }
              keywords
            }
          }
        }
      `}
      render={(data) => <Layout data={data} {...props} />}
    />
  );
}
