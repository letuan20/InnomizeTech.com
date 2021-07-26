import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-map"></i>
              </div>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <h3>Our Address</h3>
              <p>
                2A/64A Bach Dang Street, Ward 2, Tan Binh District Ho Chi Minh
                City, Vietnam
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <div className="icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <h3>Contact</h3>
              <p>
                Mobile: <a href="tel:+84 98 996 0578">+84 98 996 0578</a>
              </p>
              <p>
                E-mail:{' '}
                <a href="mailto:info@innomizetech.com">info@innomizetech.com</a>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-time-five"></i>
              </div>
              <div className="icon">
                <i className="bx bx-time-five"></i>
              </div>
              <h3>Hours of Operation (GMT +7)</h3>
              <p>Monday - Friday: 08:30 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
