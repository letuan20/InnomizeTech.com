import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/images/logo.png';
import footerMap from '../../assets/images/footer-map.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
              <p>
                As a start-up company, our team is our highest priority and we
                welcome new talent in our team. Along with our young spirit, our
                aim is to create an ideal and open environment where each person
                is eager to work and encouraged by the creative ability of every
                member of our team. Come and see us!
              </p>

              <ul className="social-link">
                <li>
                  <Link
                    to="https://www.facebook.com/innomizetech/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/innomizetech/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/innomizetech/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="https://www.innomizetech.com/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>

                <li>
                  <Link to="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>Resources</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link to="/services">Our Services</Link>
                </li>
                <li>
                  <Link to="#sec-testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/services">Our Technologies</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  2A/64A Bach Dang Street, Ward 2, Tan Binh District Ho Chi Minh
                  City,
                  <br /> Vietnam
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+84 98 996 0578">+84 98 996 0578</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:info@innomizetech.com">
                    info@innomizetech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div
              style={{ textAlign: 'center' }}
              className="col-lg-12 col-md-12"
            >
              <p>
                Copyright @{currentYear} <strong>Innomize Co.,Ltd.</strong> All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
