import React from 'react';
import { Link } from 'gatsby';
import project1 from '../../assets/images/projects/project1.jpg';
import project2 from '../../assets/images/projects/project2.jpg';
import project3 from '../../assets/images/projects/project3.jpg';
import project4 from '../../assets/images/projects/project4.jpg';
import project5 from '../../assets/images/projects/project5.jpg';
import project6 from '../../assets/images/projects/project6.jpg';

// Functional components
const CaseStudies = () => {
  return (
    <section className="events-area pt-70 pb-70">
      <div className="container">
        <div className="row">
          {/* Start Billing Management Platform */}
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-events-box bg-f1f8fb">
              <div className="image">
                <Link
                  to="/case-studies-details-billing-platform"
                  className="d-block"
                >
                  <img src={project1} alt="event" />
                </Link>
              </div>

              <div className="content">
                <h3>
                  <Link to="/case-studies-details-billing-platform">
                    Billing Management Platform
                  </Link>
                </h3>

                <p className="box-description">
                  The Billing Department of the client needs to generate,
                  manage, and collaborate with their Attorneys to review the
                  invoices before sending it to their clients. They generated
                  invoices as .pdf files and brought the invoice then sent it to
                  Attorneys to review.
                </p>
                <span>Platform Project</span>
              </div>
            </div>
          </div>
          {/* End Billing Management Platform */}

          {/* Start Permits Platform */}
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-events-box bg-f1f8fb">
              <div className="image">
                <Link to="/case-studies-details-permits" className="d-block">
                  <img src={project2} alt="event" />
                </Link>
              </div>

              <div className="content">
                <h3>
                  <Link to="/case-studies-details-permits">
                    Permits Platform
                  </Link>
                </h3>

                <p className="box-description">
                  InnomizeTech was selected as a trusted partner to build the
                  platform to allow our customer to help manage their clients’
                  permits. The platform needs to communicate with different
                  stakeholders including clients, companies, contractors, and
                  individual.
                </p>
                <span>Platform Project</span>
              </div>
            </div>
          </div>
          {/* End Permits Platform */}

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-events-box bg-f1f8fb">
              <div className="image">
                <Link
                  to="/case-studies-details-tutoring-platform"
                  className="d-block"
                >
                  <img src={project3} alt="event" />
                </Link>
              </div>

              <div className="content">
                <h3>
                  <Link to="/case-studies-details-tutoring-platform">
                    One-on-One Tutoring
                  </Link>
                </h3>

                <p className="box-description">
                  Online tutoring system at a single glance seems to be just
                  another traditional website. However, during the requirement
                  analysis phase with our customer, we discovered that there
                  would be further potential challenges that could seriously
                  cause an interruption of our customer’s services, which also
                  mean leading to the lack of trust from those who are using the
                  tutoring service.
                </p>
                <span>Web Project</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-events-box bg-f1f8fb">
              <div className="image">
                <Link
                  to="/case-studies-details-erp-platform"
                  className="d-block"
                >
                  <img src={project4} alt="event" />
                </Link>
              </div>

              <div className="content">
                <h3>
                  <Link to="/case-studies-details-erp-platform">
                    TOTTER - ODOO PROJECT
                  </Link>
                </h3>

                <p className="box-description">
                  Our customer has been in the Refurbished industry for years
                  and they want to build a management system that allows their
                  businesses operating on wholesale and retail e-commerce
                  channels.
                </p>
                <span>ERP Project</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-events-box bg-f1f8fb">
              <div className="image">
                <Link
                  to="/case-studies-details-elearning-platform"
                  className="d-block"
                >
                  <img src={project6} alt="event" />
                </Link>
              </div>

              <div className="content">
                <h3>
                  <Link to="/case-studies-details-elearning-platform">
                    AN E-LEARNING PLATFORM
                  </Link>
                </h3>

                <p className="box-description">
                  Our customer is a US-based firm with more than 15 years of
                  delivering educational solutions with a vision of helping
                  millions of students achieve STEM subjects as well as relavent
                  skill to reach their career goals.
                </p>
                <span>Web Project</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-events-box bg-f1f8fb">
              <div className="image">
                <Link to="/case-studies-details-prepaid" className="d-block">
                  <img src={project5} alt="event" />
                </Link>
              </div>

              <div className="content">
                <h3>
                  <Link to="/case-studies-details-prepaid">Prepaid Portal</Link>
                </h3>

                <p className="box-description">
                  The Customer, a retail company, came up with an idea to
                  release a service that would enable Sales associates to
                  activate prepaid accounts for mobile devices. The customer
                  planned to integrate with almost all wireless
                  telecommunications facilities-based service providers.
                </p>
                <span>Platform Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
