import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import PageBanner from '../components/common/PageBanner';
import Footer from '../components/app/Footer';
import AboutUsContent from '../components/about-us/AboutUsContent';
import WhyChooseUs from '../components/about-us/WhyChooseUs';
import TeamMembers from '../components/common/TeamMember';
import Testimonials from '../components/common/Testimonials';
import SEO from '../components/seo';
import StartProject from '../components/common/StartProject';

import video from "../assets/images/Videos/About Us.mp4";

class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Navbar />
        <PageBanner
          pageTitle="About Us"
          homePageText="Home"
          homePageUrl="/"
          activePageText="About Us"
          video = {video}
        />
        <AboutUsContent />
        <WhyChooseUs />
        <TeamMembers />
        <Testimonials />
        <StartProject />
        <Footer />
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
