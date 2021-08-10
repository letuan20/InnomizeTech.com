import React from 'react';

const PageBanner = ({
  pageTitle,
  video,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <div className="page-title-area">
      <video
        style={{ objectFit: 'cover', width: '100%' }}
        height="350"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
