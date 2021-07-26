import React from 'react';
import { Link } from 'gatsby';
import starIcon from '../../assets/images/star-icon.png';
import blog1 from '../../assets/images/blog/post-1.png';
import blog2 from '../../assets/images/blog/post-2.png';
import blog3 from '../../assets/images/blog/post-3.jpg';
import hoangle from '../../assets/images/hoangle.jpeg';

const OurBlog = () => {
  return (
    <section className="blog-area pt-100 pb-70 bg-fffbf5">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="blog" />
            Our Blog
          </span>
          <h2>Latest Valuable Insights</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link to="/blog-details">
                  <img src={blog1} alt="blog" />
                </Link>
              </div>

              <div className="post-content">
                <ul className="post-meta d-flex justify-content-between align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src={hoangle}
                        className="rounded-circle"
                        alt="blog"
                      />
                      <span>Hoang Le</span>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> April 30, 2020
                  </li>
                </ul>
                <h3>
                  <Link to="https://medium.com/innomizetech/building-serverless-web-crawler-with-puppeteer-on-aws-fargate-1202c8a66ec4?source=collection_home---4------0-----------------------">
                    Building serverless web crawler with Puppeteer on AWS
                    Fargate
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link to="/blog-details">
                  <img src={blog2} alt="blog" />
                </Link>
              </div>

              <div className="post-content">
                <ul className="post-meta d-flex justify-content-between align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src={hoangle}
                        className="rounded-circle"
                        alt="blog"
                      />
                      <span>Hoang Le</span>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> April 28, 2020
                  </li>
                </ul>
                <h3>
                  <Link to="https://medium.com/innomizetech/top-reasons-why-we-use-aws-cdk-over-cloudformation-6dd55b59b1dd?source=collection_home---4------1-----------------------">
                    Top reasons why AWS CDK over CloudFormation
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="single-blog-post">
              <div className="post-image">
                <Link to="/blog-details">
                  <img src={blog3} alt="blog" />
                </Link>
              </div>

              <div className="post-content">
                <ul className="post-meta d-flex justify-content-between align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src={hoangle}
                        className="rounded-circle"
                        alt="blog"
                      />
                      <span>Hoang Le</span>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> April 29, 2020
                  </li>
                </ul>
                <h3>
                  <Link to="https://medium.com/innomizetech/continuous-delivery-deploying-a-node-js-app-to-aws-ec2-using-ansible-39bdab26f02a?source=collection_home---4------0-----------------------">
                    Continuous Delivery — Deploying a Node.js app to AWS EC2
                    using Ansible
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
