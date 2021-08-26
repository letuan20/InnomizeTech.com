import React, { useState, useEffect } from 'react';

const CaseStudyDetailContent = ({ data }) => {
  const { html } = data.markdownRemark;

  console.log(data.markdownRemark.frontmatter.devops)
  return (
    <section className="blog-detail-content">
      <div className="container">
        <div className="row">
          <div className="project-information">
            <div className="information">
              <div className="icon"></div>
              <h3>Project</h3>
              <p>{data.markdownRemark.frontmatter.project}</p>
            </div>
            <div className="information">
              <div className="icon"></div>
              <h3>Client</h3>
              <p>{data.markdownRemark.frontmatter.client}</p>
            </div>
            <div className="information">
              <div className="icon"></div>
              <h3>Location</h3>
              <p>{data.markdownRemark.frontmatter.location}</p>
            </div>
            <div className="information">
              <div className="icon"></div>
              <h3>Architecture</h3>
              <p>{data.markdownRemark.frontmatter.architecture}</p>
            </div>
          </div>
          <div className="project-technologies">
            <div className="technologies">
              <h3>Technologies</h3>
           
            </div>
            <div className="technologies">
              <h3>DevOps</h3>
              {/* {data.markdownRemark.frontmatter.devops.map((el)=>(
                <img src={el} />
              ))} */}
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              paddingBottom: '12px',
              borderBottom: '1px solid var(--color-d9d9d9)',
            }}
          ></div>
          <div className="other-content related-blog">
            <h2>Related case studies</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailContent;
