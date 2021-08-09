import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/App/Layout';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import PageBanner from '../components/Common/PageBanner';
import StartProject from '../components/Common/StartProject';
import OurServices from '../components/home/OurServices';

import video from "../assets/images/Videos/Our Services.mp4";

const Services = () => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <PageBanner
        pageTitle="Services"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services"
        video= {video}
      />
      <OurServices />
      <StartProject />
      <Footer />
    </Layout>
  );
};

export default Services;
