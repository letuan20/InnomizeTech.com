import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import Footer from '../components/app/Footer';
import PageBanner from '../components/common/PageBanner';
import StartProject from '../components/common/StartProject';
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
