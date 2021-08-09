import React from 'react';

import phone from '../../assets/images/icons/Phone.svg';
import location from '../../assets/images/icons/Location.svg';
import clock from '../../assets/images/icons/Clock.svg';

const ContactInfo = () => {
  return (
    <div className="contact-info-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="contact-info-box">           
              <div className="icon">
                <img src={location} />
              </div>
              <div className="text">
                <h3>Our Address</h3>
                <p>
                2A/64A Bach Dang Street, Ward 2, Tan Binh District, HCMC, Vietnam
                </p>
              </div>        
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="contact-info-box">            
              <div className="icon">
                <img src={phone} />
              </div>
              <div className="text">
                <h3>Contact</h3>
                <p>
                  Mobile: +84 98 996 0578
                </p>
                <p>
                  E-mail:{' '}
                  <a href="mailto:info@innomizetech.com">info@innomizetech.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="contact-info-box">           
              <div className="icon">
                <img src={clock} />
              </div>
              <div className="text">
                <h3>Hours of Operation (GMT +7)</h3>
                <p>Monday - Friday: 08:30 - 18:00</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
