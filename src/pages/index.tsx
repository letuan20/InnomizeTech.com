import React from 'react';
import { graphql } from 'gatsby';

import Container from '../components/container';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Testimonials from '../components/testimonials';
import MdClock from 'react-ionicons/lib/MdClock';
import MdRadioButtonOn from 'react-ionicons/lib/MdRadioButtonOn';
import MdWalk from 'react-ionicons/lib/MdWalk';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <SEO />
          <Intro />
          <main id="main">
            <section id="about">
              <div className="container">
                <div>
                  <p>
                    Founded in 2018, our mission is to{' '}
                    <span className="brand-secondary">
                      create awesome products that will make your everyday life
                      easier
                    </span>
                    . Our experienced engineering and development team are
                    committed, passionate, and continually challenge themselves
                    on the advancements and changes of the technologies we
                    utilize to deliver the most up-to-date and innovative
                    solutions.
                  </p>
                </div>
                <div className="row about-container">
                  <div className="col-lg-4 content order-lg-1 order-2">
                    <div className="icon-box wow fadeInUp">
                      <div className="icon">
                        <MdClock fontSize={24} beat={true}></MdClock>
                      </div>
                      <h4 className="title">
                        <a href="">Committed</a>
                      </h4>
                      <p className="description">
                        Our team puts in the extra hours to deliver their work
                        efficiently, wasting no time, exceeding expectations;
                        going above and beyond and showing initiative to deliver
                        quality solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 content order-lg-1 order-2">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon">
                        <MdRadioButtonOn
                          fontSize={24}
                          beat={true}
                        ></MdRadioButtonOn>
                      </div>
                      <h4 className="title">
                        <a href="">Team Focused</a>
                      </h4>
                      <p className="description">
                        We work hard, learn and share with each other, always
                        focused on delivering solutions efficiently and on-time.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 content order-lg-1 order-2">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <MdWalk fontSize={24} beat={true}></MdWalk>
                      </div>
                      <h4 className="title">
                        <a href="">Responsible</a>
                      </h4>
                      <p className="description">
                        Our engineers take their responsibility of leading our
                        team seriously, and proactively work side-by-side with
                        each developer to ensure solutions are expertly
                        designed, developed and delivered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Testimonials />
            {/* <Team />
            <Technologies /> */}
          </main>
        </Container>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
