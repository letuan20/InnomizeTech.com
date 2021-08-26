import React from 'react';

import banner from '../../assets/images/projects/case-studies-detail.svg';

const CaseStudyDetailBanner = ({
  pageTitle
}) => {
  return (
    <div
      className="page-title-area contact-banner"
      style={{ paddingBottom: 0 }}
    >
      <img src={banner} style={{ height: '350px', objectFit: 'cover' }} />
      <div className="container">
        <div className="page-title-content">
          <h2 style={{ color: '#262626' }}>{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailBanner;
