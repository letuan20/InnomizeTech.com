import React from 'react';
import ReactWOW from 'react-wow';
import { Link } from 'gatsby';
import bannerImg from '../../assets/images/banner-img1.png';
import scrollIcon from '../../assets/images/icons/scrolldown-icon.png';

const Banner = () => {

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight - document.getElementById('navbar')!.offsetHeight + 40,
      behavior: 'smooth',
    });
  };
  return (
    <div className="seo-agency-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="main-banner-content">
              <ReactWOW delay=".1s" animation="fadeInLeft">
                <h1>
                  We provide{' '}
                  <span style={{ color: '#E5181E' }}>
                    optimized IT solutions
                  </span>{' '}
                  for your business!
                </h1>
              </ReactWOW>

              <ReactWOW delay=".1s" animation="fadeInLeft">
                <p>
                  We are experts in Cloud computing, Web Development, Mobile
                  Development, DevOps, and Automation Testing that help you meet
                  your business needs.
                </p>
              </ReactWOW>

              <ReactWOW delay=".1s" animation="fadeInRight">
                <div className="btn-box">
                  <Link to="/services" className="default-btn">
                    Our Services <span></span>
                  </Link>
                </div>
              </ReactWOW>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <ReactWOW delay=".1s" animation="fadeInUp">
              <div className="main-banner-image" >
                <img src={bannerImg} alt="banner" />
              </div>
            </ReactWOW>
          </div>
        </div>
        <ReactWOW delay=".3s" animation="fadeInDown"
        >
          <img
                      src={scrollIcon}
                      onClick={scrollDown}
                      alt="scroll"
                      className="hero-scroll"
                    />
        </ReactWOW>
      </div>
    </div>
  );
};

export default Banner;
