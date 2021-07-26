import React from 'react';
import { Link } from 'gatsby';
import starIcon from '../../assets/images/star-icon.png';

const RecentProjects = () => {
  return (
    <section className="projects-area bg-color pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="project" /> Recent Projects
          </span>
          <h2>Check Some Of Our Recent Work</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <h3>
                <Link to="/case-studies-details-billing-platform">
                  Billing Management
                </Link>
              </h3>
              <p className="box-description">
                The Billing Department of the client needs to generate, manage,
                and collaborate with their Attorneys to review the invoices
                before sending it to their clients. They generated invoices as
                .pdf files and brought the invoice then sent it to Attorneys to
                review.
              </p>
              <Link
                to="/case-studies-details-billing-platform"
                className="read-more-btn"
              >
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <h3>
                <Link to="/case-studies-details-permits">Permits Platform</Link>
              </h3>
              <p className="box-description">
                InnomizeTech was selected as a trusted partner to build the
                platform to allow our customer to help manage their clients’
                permits. The platform needs to communicate with different
                stakeholders including clients, companies, contractors, and
                individual.
              </p>
              <Link
                to="/case-studies-details-permits"
                className="read-more-btn"
              >
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <h3>
                <Link to="/case-studies-details-tutoring-platform">
                  1-1 Tutoring Platform
                </Link>
              </h3>
              <p className="box-description">
                Online tutoring system at a single glance seems to be just
                another traditional website. However, during the requirement
                analysis phase with our customer, we discovered that there would
                be further potential challenges that could seriously cause an
                interruption of our customer’s services, which also mean leading
                to the lack of trust from those who are using the tutoring
                service.
              </p>
              <Link
                to="/case-studies-details-tutoring-platform"
                className="read-more-btn"
              >
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
