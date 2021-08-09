import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/App/Layout';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import PageBanner from '../components/Common/PageBanner';
import StartProject from '../components/Common/StartProject';
import ServiceDetailsContent from '../components/service/ServiceDetailContent';

import video from "../assets/images/Videos/Our Services.mp4";

const Details = () => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <PageBanner
        pageTitle="Technologies & Business Domains"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Service Details"
        video= {video}
      />
      <ServiceDetailsContent />
      <StartProject />
      <Footer />
    </Layout>
  );
};

export default Details;
