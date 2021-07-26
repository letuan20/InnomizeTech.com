import React from 'react';

import starIcon from '../../assets/images/star-icon.png';
import contact from '../../assets/images/innomize-map.png';

const ContactForm = () => {
  return (
    <section className="contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="contact" />
            Get in Touch
          </span>
          <h2>Ready to Get Started?</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact-image">
              <img src={contact} alt="contact" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12  d-flex align-items-center">
            <a href="mailto:info@innomizetech.com" className="default-btn">
              <i className="flaticon-book"></i> Get In Touch <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
