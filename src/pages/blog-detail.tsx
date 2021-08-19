import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';
import AboutUsContent from '../components/about-us/AboutUsContent';
import WhyChooseUs from '../components/about-us/WhyChooseUs';
import TeamMembers from '../components/Common/TeamMember';
import Testimonials from '../components/Common/Testimonials';
import SEO from '../components/seo';
import StartProject from '../components/Common/StartProject';

import BlogPost from '../components/templates/blogPost';
import video from '../assets/images/Videos/About Us.mp4';

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
          video={video}
        />
     
        <StartProject />
        <Footer />
      </Layout>
    );
  }
}

export default About;
