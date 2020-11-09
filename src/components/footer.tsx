import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-4 footer-info">
              <h3>Innomize</h3>
              <p>
                As a start-up company, our team is our highest priority and we
                welcome new talent in our team. Along with our young spirit, our
                aim is to create an ideal and open environment where each person
                is eager to work and encouraged by the creative ability of every
                member of our team.
              </p>
              <br />
              <p>Come and see us!</p>
            </div>

            <div className="col-lg-3 col-md-4 footer-links">
              <h4>Useful Links</h4>
              <div className="col-12 row">
                <ul className="col-6">
                  <li>
                    <a href="/#/">Home</a>
                  </li>
                  <li>
                    <a href="/#/services">Our Services</a>
                  </li>
                  <li>
                    <a href="https://blog.innomizetech.com/">Blog</a>
                  </li>
                </ul>
                <ul className="col-6 pl-2">
                  <li>
                    <a href="/#/career">Career</a>
                  </li>
                  <li>
                    <a href="#/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 footer-contact">
              <h4>Contact Us</h4>
              <p>
                2A/64A Bach Dang Street, Ward 2, Tan Binh District <br />
                Ho Chi Minh City, Vietnam
                <br />
                <strong>Phone:</strong>
                <a href="tel:+84 98 996 0578">+84 98 996 0578</a>
                <br />
                <strong>Email:</strong>
                <a href="mailto:info@innomizetech.com">info@innomizetech.com</a>
                <br />
              </p>

              <div className="social-links">
                <a href="https://twitter.com/innomizetech/" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/innomizetech/"
                  className="facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/innomizetech/"
                  className="linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          <strong>&copy; 2019 Innomize Co.,Ltd</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
