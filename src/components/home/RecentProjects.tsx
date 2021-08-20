import React from 'react';
import { Link } from 'gatsby';
import permits from '../../assets/images/projects/permits.jpg';
import tutoring from '../../assets/images/projects/1-1-tutoring.jpg';
import totter from '../../assets/images/projects/totter.jpg';
import redArrow from '../../assets/images/red-arrow.png';

const RecentProjects = () => {
  return (
    <section className="projects-area bg-color">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Recent Projects</span>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Link to="/case-studies-details-permits-platform">
              <div className="single-services-box">
                <img src={permits} width={364} height={275} />
                <h3 className="box-link">Permits Platform</h3>
                <div className="red_line"></div>
                <p className="box-description">Platform Project</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link to="/case-studies-details-tutoring-platform">
              <div className="single-services-box">
                <img src={tutoring} width={364} height={275} />
                <h3 className="box-link">1-1 Tutoring Platform</h3>
                <div className="red_line"></div>
                <p className="box-description">Web Project</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link to="/case-studies-details-totter">
              <div className="single-services-box">
                <img src={totter} width={364} height={275} />
                <h3 className="box-link">TOTTER - ODOO System</h3>
                <div className="red_line"></div>
                <p className="box-description">ERP Project</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <p className="see-all">
            See All Projects
            <img src={redArrow} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
