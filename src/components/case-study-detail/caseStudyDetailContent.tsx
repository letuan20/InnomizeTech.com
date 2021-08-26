import React, { useState, useEffect } from 'react';

import iconFacebook from '../../assets/images/blog/facebook-icon.svg';
import iconTwitter from '../../assets/images/blog/twitter-icon.svg';
import iconLinkedIn from '../../assets/images/blog/linkedIn-icon.svg';

const CaseStudyDetailContent = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <section className="blog-detail-content">
      <div className="container">
        <div className="row">
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              paddingBottom: '12px',
              borderBottom: '1px solid var(--color-d9d9d9)',
            }}
          ></div>
          <div className="other-content related-blog">
            <h2>Related post</h2>
          </div>
          <div className="other-content follow-us">
            <h2>Follow us on</h2>
            <div>
              <button>
                <img src={iconFacebook} />
                Facebook
              </button>
              <button>
                <img src={iconLinkedIn} />
                LinkedIn
              </button>
              <button>
                <img src={iconTwitter} />
                Twitter
              </button>
            </div>
          </div>
          <div className="other-content">
            <h2>Recent Posts</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailContent;
