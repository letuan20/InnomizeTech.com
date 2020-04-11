import React from 'react';
import GatsbyLink from 'gatsby-link';

interface LinkProps {
  children?: any;
  to: string;
  other?: any;
}

const Link = ({ children, to, ...other }: LinkProps) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;
