import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import PageBanner from '../components/common/PageBanner';
import Footer from '../components/app/Footer';
import AboutUsContent from '../components/about-us/AboutUsContent';
import WhyChooseUs from '../components/about-us/WhyChooseUs';
import Partner from '../components/common/Partner';
import TeamMembers from '../components/common/TeamMember';
import Testimonials from '../components/common/Testimonials';
import SEO from '../components/seo';

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
        />
        <AboutUsContent />
        <WhyChooseUs />
        <TeamMembers />
        <Testimonials />
        <Partner />
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
