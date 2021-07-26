import React from 'react';
import { Link } from 'gatsby';
import starIcon from '../../assets/images/star-icon.png';

const OurSolutions = () => {
  return (
    <section className="solutions-area pb-70 pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="star" />
            Our Core Values
          </span>
          {/* <h2>We Different From Others Should Choose Us</h2> */}
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
          <div className="col-lg-4 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-rocket"></i>
              </div>
              <h3>
                <Link style={{ color: '#f29620' }} to="#">
                  Committed
                </Link>
              </h3>
              <p>
                Our team puts in the extra hours to deliver their work
                efficiently, wasting no time, exceeding expectations; going
                above and beyond and showing initiative to deliver quality
                solutions.
              </p>

              {/* <Link to="/service-details" className="view-details-btn">
                                View Details
                            </Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-laptop"></i>
              </div>

              <h3>
                <Link style={{ color: '#f29620' }} to="#">
                  Team Focused
                </Link>
              </h3>

              <p>
                We work hard, learn and share with each other. We always focus
                on delivering and optimizing solutions efficiently and
                effectively and on-time. Focusing on quality is part of our
                culture.
              </p>

              {/* <Link to="/service-details" className="view-details-btn">
                                View Details
                            </Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-money"></i>
              </div>

              <h3>
                <Link style={{ color: '#f29620' }} to="#">
                  Responsible
                </Link>
              </h3>

              <p>
                Our engineers take responsibility of leading our team seriously,
                and proactively work with each developer to ensure solutions are
                expertly designed, developed and delivered.
              </p>

              {/* <Link to="/service-details" className="view-details-btn">
                                View Details
                            </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
