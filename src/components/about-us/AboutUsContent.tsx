import React from 'react';
import bannerImg from '../../assets/images/banner-img1.png';
import icon1 from '../../assets/images/about/Experinc.svg';
import icon2 from '../../assets/images/about/Clouding.svg';
import icon3 from '../../assets/images/about/Satisfaction.svg';
import icon4 from '../../assets/images/about/Senior Engineers.svg';

const AboutUsContent = () => {
  return (
    <section className="about-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src={bannerImg} alt="banner" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content" style={{ paddingLeft: '40px' }}>
              <div className="content">
                <h2>Your Business Success Starts With Us</h2>
                <p>
                  We are an offshore software development and IT consulting
                  company based in Vietnam
                </p>

                <ul className="features-list">
                  <li>
                    <img src={icon1} alt="banner" />
                    <h3>15 Years</h3>
                    <p>Experiences</p>
                  </li>
                  <li>
                    <img src={icon2} alt="banner" />
                    <h3>15+ Years</h3>
                    <p>Cloud Computing</p>
                  </li>
                  <li>
                    <img src={icon3} alt="banner" />
                    <h3>100%</h3>
                    <p>Satisfaction rate</p>
                  </li>
                  <li>
                    <img src={icon4} alt="banner" />
                    <h3>80%</h3>
                    <p>Senior Engineers</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
