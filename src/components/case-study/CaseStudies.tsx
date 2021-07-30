import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

// Functional components
const CaseStudies = () => {
  const data = useStaticQuery(graphql`
    query QueryServices {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___id }
      ) {
        nodes {
          frontmatter {
            id
            slug
            subtitle
            title
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
              key={service.frontmatter.id}
              className="col-lg-4 col-md-6 col-sm-6"
            >
              <div className="single-services-box">
                <Img
                  fluid={service.frontmatter.thumbnail.childImageSharp.fluid}
                  alt="service"
                />
                <h3 className="box-link">
                  <Link to="/">{service.frontmatter.title}</Link>
                </h3>
                <div className="red_line"></div>
                <p className="box-description">
                  {service.frontmatter.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
