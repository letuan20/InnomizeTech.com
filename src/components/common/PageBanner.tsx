import React from 'react';
import banner from '../../assets/images/Banner.svg';

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <div className="page-title-area">
      <img src={banner} alt="banner" />
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
