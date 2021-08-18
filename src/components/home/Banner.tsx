import React, {useState, useEffect } from 'react';
import ReactWOW from 'react-wow';
import { Link } from 'gatsby';
import bannerImg from '../../assets/images/banner-img1.png';

const Banner = () => {

  const [thePosition, setThePosition] = useState(true);

 useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        setThePosition(false);
      } else {
        setThePosition(true);
      }
    });
    /* tslint:disable:align */
  }, []);

  const scrollDown = () => {
    window.scroll({
      top: document.getElementById('seo-agency-banner')!.offsetHeight - document.getElementById('navbar')!.offsetHeight ,
      behavior: 'smooth',
    });
  };
  return (
    <div id="seo-agency-banner" className="seo-agency-banner">
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
           <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={65.75}
      viewBox="0 0 32 65.75"
      className={`hero-scroll ${thePosition ? '' : 'disable'}`}
      onClick={scrollDown}
    >
      <defs>
        <style>
          {
            ".prefix__b{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
          }
        </style>
      </defs>
      <g>
        <path fill="none" d="M0 0h32v32H0z" />
        <rect
          className="prefix__b"
          width={19}
          height={24}
          rx={5}
          transform="translate(6.5 4)"
        />
        <path className="prefix__b" d="M16 14V9" />
      </g>
      <path
        d="M23.5 36.5L16 44l-7.5-7.5"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        className="path"
      />
      <path
        d="M23.5 46.5L16 54l-7.5-7.5"
        stroke="#8c8c8c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        className="path"
      />
      <path
        d="M23.5 57.5L16 65l-7.5-7.5"
        stroke="#d9d9d9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        className="path"
      />
    </svg>
        </ReactWOW>
      </div>
    </div>
  );
};

export default Banner;
