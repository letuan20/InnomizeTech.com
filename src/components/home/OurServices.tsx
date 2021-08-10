import React from 'react';
import service1 from '../../assets/images/services/service1.png';
import service2 from '../../assets/images/services/service2.png';
import service3 from '../../assets/images/services/service3.png';
import service4 from '../../assets/images/services/service4.png';
import starIcon from '../../assets/images/star-icon.png';

import cloud from '../../assets/images/services/cloud.svg';
import cloudIntegrate from '../../assets/images/services/cloud-integrate.svg';
import cloudMigration from '../../assets/images/services/cloud-migration.svg';
import cloudOptimization from '../../assets/images/services/cloud-optimization.svg';
import devops from '../../assets/images/services/devops.svg';
import serverless from '../../assets/images/services/serverless.svg';

import web from '../../assets/images/services/web.svg';
import mobile from '../../assets/images/services/mobile.svg';
import optimizing from '../../assets/images/services/optimizing.svg';
import productMigration from '../../assets/images/services/product-migration.svg';
import uiux from '../../assets/images/services/uiux.svg';
import softwareIntegration from '../../assets/images/services/software-integration.svg';

import bringIdeas from '../../assets/images/services/bring-ideas.svg';
import cpuSetting from '../../assets/images/services/cpu-setting.svg';
import freeUp from '../../assets/images/services/free-up.svg';
import noRecruitmentCosts from '../../assets/images/services/no-recruitment-costs.svg';
import scalable from '../../assets/images/services/scalable.svg';
import wideRange from '../../assets/images/services/wide-range.svg';

import setting2 from '../../assets/images/services/setting-2.svg';
import category2 from '../../assets/images/services/category-2.svg';
import eCommerceIntegration from '../../assets/images/services/eCommerce-integration.svg';
import enterpriseIntegration from '../../assets/images/services/enterprise-integration.svg';

const OurServices = () => {
  return (
    <React.Fragment>
      {/* Service Left Image Style */}
      <div className="about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service1} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content" style={{ color: '#E5181E' }}>
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Cloud Computing</h2>
                  <p>
                    Our certified cloud architects/developers provide
                    cutting-edge designs to build cloud-based and hybrid
                    applications.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <img src={serverless} />
                      Serverless Arch
                    </li>
                    <li>
                      <img src={cloud} />
                      Cloud Consulting
                    </li>
                    <li>
                      <img src={cloudMigration} />
                      Cloud Migration
                    </li>
                    <li>
                      <img src={cloudOptimization} />
                      Cloud Optimization
                    </li>
                    <li>
                      <img src={cloudIntegrate} />
                      Cloud Integration
                    </li>
                    <li>
                      <img src={devops} />
                      DevSecOps
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Software Development</h2>
                  <p>
                    Full Software Development Life Cycle from requirement
                    analysis, design, coding, testing, deployment, maintenance
                    and supporting.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <img src={web} />
                      Web Development
                    </li>
                    <li>
                      <img src={mobile} />
                      Mobile Development
                    </li>
                    <li>
                      <img src={productMigration} />
                      Product Migration
                    </li>
                    <li>
                      <img src={optimizing} />
                      Platform Optimizing
                    </li>
                    <li>
                      <img src={uiux} />
                      UX/UI Design
                    </li>
                    <li>
                      <img src={softwareIntegration} />
                      Software Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service2} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}

      {/* Service Left Image Style */}
      <div className="about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service3} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Dedicated Development Team</h2>
                  <p>
                    We offer you specific teams for your specific needs. We
                    assign a customise skill set to each client so that the
                    project gets complete dedication and required attention.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <img src={cpuSetting} />
                      In-house control level resources
                    </li>
                    <li>
                      <img src={wideRange} />
                      Wide range of technology expertise
                    </li>
                    <li>
                      <img src={bringIdeas} />
                      Bring fresh ideas to you and your own in-house IT
                      department
                    </li>
                    <li>
                      <img src={freeUp} />
                      Free up your IT department to focus on critical tasks
                    </li>
                    <li>
                      <img src={noRecruitmentCosts} />
                      No recruitment costs
                    </li>
                    <li>
                      <img src={scalable} />
                      Scalable resources
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Enterprise Solutions </h2>
                  <p>
                    We work toward your business objectives, help you move fast
                    and in the right direction. Our highly skilled engineers are
                    ready to consult, customize, integrate your existing
                    enterprise systems.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <img src={setting2} />
                      Optimized Solutions: ERP, CRM, HRM
                    </li>
                    <li>
                      <img src={category2} alt="" />
                      Odoo Installation and Customization
                    </li>
                    <li>
                      <img src={enterpriseIntegration} />
                      Enterprise Integration
                    </li>
                    <li>
                      <img src={eCommerceIntegration} alt="" />
                      E-commerce Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service4} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}
    </React.Fragment>
  );
};

export default OurServices;
