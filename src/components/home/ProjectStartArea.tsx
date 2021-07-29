import React from 'react';
import { Link } from 'gatsby';

const ProjectStartArea = () => {
  return (
    <div className="project-start-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className="project-start-content">
              <h2>We Like to Start Your Project With Us</h2>
              <Link to="/contact" className="default-btn">
                Contact Us
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStartArea;
