import React from 'react';
import { Link } from 'gatsby';
import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';

const OurSolutions = () => {
  return (
    <section className="solutions-area pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Our Core Values</span>
          <p>
            Founded in 2018, our mission is to create awesome products that will
            make your everyday life easier. Our experienced engineering and
            development team are committed, passionate, and continually
            challenge themselves on the advancements and changes of the
            technologies we utilize to deliver the most up-to-date and
            innovative solutions.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="single-solutions-box">
              <div className="icon">
                <img width="188" height="188" src={icon1} alt="icon1" />
              </div>
              <h3>
                <Link style={{ color: '#E5181E' }} to="#">
                  Committed
                </Link>
              </h3>
              <p>
                Our team puts in the extra hours to deliver their work
                efficiently, wasting no time, exceeding expectations; going
                above and beyond and showing initiative to deliver quality
                solutions.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-12">
            <div className="single-solutions-box">
              <div className="icon">
                <img width="188" height="188" src={icon2} alt="icon2" />
              </div>

              <h3>
                <Link style={{ color: '#E5181E' }} to="#">
                  Team Focused
                </Link>
              </h3>

              <p>
                We work hard, learn and share with each other. We always focus
                on delivering and optimizing solutions efficiently and
                effectively and on-time. Focusing on quality is part of our
                culture.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-12">
            <div className="single-solutions-box">
              <div className="icon">
                <img width="188" height="188" src={icon3} alt="icon3" />
              </div>

              <h3>
                <Link style={{ color: '#E5181E' }} to="#">
                  Responsible
                </Link>
              </h3>

              <p>
                Our engineers take responsibility of leading our team seriously,
                and proactively work with each developer to ensure solutions are
                expertly designed, developed and delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
