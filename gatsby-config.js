const path = require('path');
const config = require('./config/website');

const root = (...p) => path.join(__dirname, ...p);

const { NODE_ENV, URL = config.siteUrl } = process.env;

const siteUrl = config.siteUrl;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: [
      'innomizetech',
      'innomize tech',
      'innomize technology',
      'it consulting',
      'it outsourcing',
      'it outsourcing vietnam',
      'cloud development',
      'cloud development vietnam',
      'cloud computing firms vietnam',
      'outsource companies vietnam',
      'cloud computing',
      'cloud migration',
      'cloud integration',
      'serverless',
      'serverless computing',
      'on-premise to serverless',
      'CI/CD solution',
      'DevOps engineer',
      'product development',
      'web development',
      'mobile development',
    ],
    canonicalUrl: siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },

    'gatsby-plugin-sass',

    // Process images in markdowns for production uses
    // see https://www.gatsbyjs.org/packages/gatsby-remark-images/?=gatsby-remark-images
    {
      resolve: 'gatsby-remark-images',
      options: {
        backgroundColor: '#fafafa',
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 1035,
      },
    },

    // Loads the Twitter JavaScript for embedding tweets, timelines, share and follow buttons.
    // Lets you add tweets to markdown and in other places.
    'gatsby-plugin-twitter',

    // Provide support for using the css-in-js library Emotion including server side rendering.
    'gatsby-plugin-emotion',

    // This plugin intercepts all local links that have not been created in React using gatsby-link,
    // and replaces their behavior with that of the gatsby-link navigate.
    // This avoids the browser having to refresh the whole page when navigating
    // between local pages, preserving the Single Page Application (SPA) feel.
    'gatsby-plugin-catch-links',

    // Automatically shows the nprogress indicator when a page is delayed
    // in loading (which Gatsby considers as one second after clicking on a link).
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: 'tomato',
        showSpinner: false,
      },
    },

    // Parses Markdown files using Remark.
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    // Creates ImageSharp nodes from image types that are supported by the Sharp image
    // processing library and provides fields in their GraphQL types for processing
    // your images in a variety of ways including resizing, cropping, and creating responsive images.
    `gatsby-transformer-sharp`,

    // Wrapper of the Sharp image manipulation library for Gatsby plugins
    `gatsby-plugin-sharp`,

    // The web app manifest(part of the PWA specification) enabled by
    //this plugin allows users to add your site to their home screen on most mobile browsers
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Innomize Technology`,
        short_name: `InnomizeTech`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/InnomizeTech-symbol.png`,
      },
    },

    // Manage document head data with react-helmet
    // Provides drop-in support for server rendering data added with React Helmet.
    `gatsby-plugin-react-helmet`,

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-145406312-1`,
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NODE_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },

    // Generate sitemap files
    'gatsby-plugin-sitemap',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/md-files/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `careers`,
        path: `${__dirname}/src/md-files/careers/`,
      },
    },
  ],
};
