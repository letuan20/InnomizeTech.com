import React from 'react';

import icon1 from '../../assets/images/blog/icon-1.svg';
import icon2 from '../../assets/images/blog/icon-2.svg';
import icon3 from '../../assets/images/blog/icon-3.svg';

import moment from 'moment';

const BlogBanner = ({ data }) => {
  return (
    <div className="blog-banner-area" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="page-title-content">
          <h2>{data.markdownRemark.frontmatter.title}</h2>
        </div>
        <div className="page-content">
          <ul>
            <li>
              <img src={icon1} />
              <p>{moment(data.markdownRemark.frontmatter.date).format('ll')}</p>
            </li>
            <li>
              <img src={icon2} />
              <p>{data.markdownRemark.frontmatter.author}</p>
            </li>
            <li>
              <img src={icon3} />
              <p>General</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
