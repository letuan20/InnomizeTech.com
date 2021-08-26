import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

// Functional components
const CaseStudies = () => {
 
  const data = useStaticQuery(graphql`
   query QueryCaseStudies {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/case-studies/"}}) {
      nodes {
        frontmatter {
          title
          path
          project
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 364, maxHeight: 275) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `);

  return (
    <section className="events-area">
      <div className="container">
        <div className="row">
          {data.allMarkdownRemark.nodes.map((service) => (
            <div
              key={service.frontmatter.path}
              className="col-lg-4 col-md-6 col-sm-6"
            >
              <div className="single-services-box">
                <Link to={`/case-studies/${service.frontmatter.path}`}>
                  <Img
                    fluid={service.frontmatter.thumbnail.childImageSharp.fluid}
                    alt="service"
                  />
                  <h3 className="box-link">{service.frontmatter.title}</h3>
                  <div className="red_line"></div>
                  <p className="box-description">
                    {service.frontmatter.project}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
