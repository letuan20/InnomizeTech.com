import React from 'react';
import { Link } from 'gatsby';
import permits from '../../assets/images/projects/permits.jpg';
import tutoring from '../../assets/images/projects/1-1-tutoring.jpg';
import totter from '../../assets/images/projects/totter.jpg';

const RecentProjects = () => {
  return (
    <section className="projects-area bg-color pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Recent Projects</span>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <img src={permits} width={364} height={275} />
              <h3 className="box-link">
                <Link to="/case-studies-details-permits-platform">
                  Permits Platform
                </Link>
              </h3>
              <div className="red_line"></div>
              <p className="box-description">Platform Project</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <img src={tutoring} width={364} height={275} />
              <h3 className="box-link">
                <Link to="/case-studies-details-tutoring-platform">
                  1-1 Tutoring Platform
                </Link>
              </h3>
              <div className="red_line"></div>
              <p className="box-description">Web Project</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <img src={totter} width={364} height={275} />
              <h3 className="box-link">
                <Link to="/case-studies-details-totter">
                  TOTTER - ODOO System
                </Link>
              </h3>
              <div className="red_line"></div>
              <p className="box-description">ERP Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
