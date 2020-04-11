import React from 'react';

interface HTMLProps {
  htmlAttributes: any;
  headComponents: any[];
  bodyAttributes: any;
  preBodyComponents: any[];
  body: string;
  postBodyComponents: any[];
}

export default class HTML extends React.Component<HTMLProps, {}> {
  constructor(props: HTMLProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript>This site runs best with JavaScript enabled.</noscript>
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
