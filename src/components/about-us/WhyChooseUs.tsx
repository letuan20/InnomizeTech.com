import React from 'react';
import starIcon from '../../assets/images/star-icon.png';
import howItWork from '../../assets/images/how-its-work.png';

const WhyChooseUs = () => {
  return (
    <section className="how-its-work-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="how-its-work-content">
              <span className="sub-title">
                <img src={starIcon} alt="banner" />
                People Love Us
              </span>
              <h2>Why Choose Us?</h2>
              <p>
                Our customers did not choose us by chance. They chose us by
                values
              </p>
              <div className="inner-box">
                <div className="single-item">
                  <div className="count-box">1</div>
                  <h3>Committed</h3>
                  <p>
                    Our team puts in the extra hours to deliver their work
                    efficiently, wasting no time, exceeding expectations; going
                    above and beyond and showing initiative to deliver quality
                    solutions.
                  </p>
                </div>
                <div className="single-item">
                  <div className="count-box">2</div>
                  <h3>Team Focused</h3>
                  <p>
                    We work hard, learn and share with each other. We always
                    focus on delivering and optimizing solutions efficiently and
                    effectively and on-time. Focusing on quality is part of our
                    culture.
                  </p>
                </div>
                <div className="single-item">
                  <div className="count-box">3</div>
                  <h3>Responsible</h3>
                  <p>
                    Our engineers take responsibility of leading our team
                    seriously, and proactively work with each developer to
                    ensure solutions are expertly designed, developed and
                    delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="how-its-work-image">
              <img src={howItWork} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
