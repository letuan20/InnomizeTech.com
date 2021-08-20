import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/images/Logo@2x.png';
import facebook from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/linkedin.png';
import twitter from '../../assets/images/twitter.png';

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
              <p className="introduce">
                As a start-up company, our team is our highest priority and we
                welcome new talent in our team. Along with our young spirit, our
                aim is to create an ideal and open environment where each person
                is eager to work and encouraged by the creative ability of every
                member of our team. Come and see us!
              </p>
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
                  2A/64A Bach Dang Street, Ward 2, Tan Binh District Ho Chi Minh
                  City,
                  <br /> Vietnam
                </li>
                <li>
                  <a href="tel:+84 98 996 0578">+84 98 996 0578</a>
                </li>
                <li>
                  <a href="mailto:info@innomizetech.com">
                    info@innomizetech.com
                  </a>
                </li>
              </ul>
              <ul className="social-link">
                <li>
                  <Link
                    to="https://www.facebook.com/innomizetech/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/innomizetech/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/innomizetech/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div
              className="col-lg-12 col-md-12"
              style={{ textAlign: 'center' }}
            >
              <p>
                Copyright @2021 <strong>Innomize Co.,Ltd.</strong> All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
