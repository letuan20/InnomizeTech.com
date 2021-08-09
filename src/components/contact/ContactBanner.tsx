import React from 'react';

import banner from '../../assets/images/main-banner/contact-banner.jpg';

const ContactBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <div className="page-title-area">
      <img src={banner} style={{ height: '350px' }} />
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
