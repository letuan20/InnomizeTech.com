import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Gallery from '../gallery/Gallery';

import icon1 from '../../assets/images/career/icon-1.svg';
import icon2 from '../../assets/images/career/icon-2.svg';
import icon3 from '../../assets/images/career/icon-3.svg';
import icon4 from '../../assets/images/career/icon-4.svg';
import icon5 from '../../assets/images/career/icon-8.svg';
import icon6 from '../../assets/images/career/icon-6.svg';
import icon7 from '../../assets/images/career/icon-5.svg';
import icon8 from '../../assets/images/career/icon-7.svg';

const CourseDetailsContent = () => {
  const careers = useStaticQuery(graphql`
    query QueryAllCareer {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/careers/" } }) {
        nodes {
          frontmatter {
            id
            title
            slug
            quantity
            date
          }
        }
      }
    }
  `);

  return (
    <div className="courses-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 culture">
            <div className="courses-details-desc">
              <h3>Our Culture</h3>
              <p>
                InnomizeTech is actively looking for some developers for a
                fast-growing and expanding in the next year. As a start-up
                company, our team is our highest priority and we welcome new
                talent in our team. Along with our young spirit, our aim is to
                create an ideal and open environment where each person is eager
                to work and encouraged by the creative ability of every member
                of our team.
              </p>
              <p>
                At Innomize Tech, we believe that people are our company’s
                greatest asset as we continuously innovate to create a
                supportive environment that will accommodate our employee’s
                personal and professional development – an environment that is
                designed to foster growth that benefits both our people and our
                clients’ success.
              </p>
              <p>
                As a start-up company, our team is our highest priority and we
                welcome new talent in our team. Along with our young spirit, our
                aim is to create an ideal and open environment where each person
                is eager to work and encouraged by the creative ability of every
                member of our team.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 benefits">
            <h3>Benefits</h3>
            <ul>
              <li>
                <img src={icon1} />
                Human development is first priority
              </li>
              <li>
                <img src={icon2} />
                Challenging and interesting work
              </li>
              <li>
                <img src={icon3} />
                Free and flexible workplace
              </li>
              <li>
                <img src={icon4} />
                Yearly company trips
              </li>
              <li>
                <img src={icon5} />
                13th salary and bonus
              </li>
              <li>
                <img src={icon6} />
                Salary review: twice / year
              </li>
              <li>
                <img src={icon7} />
                Paid for Overtime (Rarely required)
              </li>
              <li>
                <img src={icon8} />
                Career guidance and support
              </li>
            </ul>
          </div>
        </div>
        <Gallery />
        <div className="row">
          <div className="col-lg-8 col-md-12 culture">
            <div className="courses-details-desc">
              <h3>General Requirements</h3>
              <ul>
                <li>Bachelor’s Degree</li>
                <li>Interested in Web or Mobile development</li>
                <li>Good English skills (verbal & written)</li>
                <li>
                  Hard-working, willing to learn and adopt new knowledge &
                  skills
                </li>
                <li>Strong leadership skills and a good team player</li>
                <li>Familiar with agile practices such as Scrum or Kanban</li>
                <li>Be able to work in a team effectively</li>
                <li>Be albe to work independently</li>
                <li>Great communication skills</li>
                <li>Willing to roll your sleeves to do un-familiar work </li>
                <li>Have spirit of getting the work done</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    <div className="career-opportunities">
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 culture">
              <div className="courses-details-desc">
                <h3 style={{ marginBottom: '24px' }}>Current Opportunities</h3>

                {careers.allMarkdownRemark.nodes.map((career) => (
                  <div
                    key={career.frontmatter.id}
                    className="col-lg-6 col-sm-12 col-md-6 career"
                  >
                    <h3>{career.frontmatter.title}</h3>
                    <p>
                      Quantity: {career.frontmatter.quantity} |{' '}
                      {career.frontmatter.date}{' '}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
   
    </div>
    </div>
  );
};

export default CourseDetailsContent;
