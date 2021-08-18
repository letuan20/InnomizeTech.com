import React from 'react';

import contact from '../../assets/images/innomize-map.jpg';

import arrow from '../../assets/images/icons/arrow.svg';


const ContactForm = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Get in Touch</span>
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

          <div className="col-lg-6 col-md-12 contact-form">
            <p>
              Tell us about your project and let’s explore our capabilities.
            </p>
            <form>
              <ul>
                <li>
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input type="text" />
                </li>
                <li>
                  <label>Company</label>
                  <input type="text" />
                </li>
                <li>
                  <label>Phone number</label>
                  <input type="text" />
                </li>
                <li>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input type="text" />
                </li>
                <li>
                  <label>Message</label>
                  <textarea></textarea>
                </li>
                <li style={{ position: 'relative' }}>
                  <label></label>
                  <select>
                    <option value="What did you hear about us">
                      What did you hear about us
                    </option>
                  </select>
                  <img src={arrow} />
                </li>
                <li>
                  <label></label>
                  <input type="submit" value="Submit" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
