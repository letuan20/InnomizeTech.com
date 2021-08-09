import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/App/Layout';
import Navbar from '../components/App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import TwoColumns from '../components/case-study/CaseStudies';
import StartProject from '../components/Common/StartProject';

import video from "../assets/images/Videos/Case studies.mp4";

// Functional component
const CaseStudies = () => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <PageBanner
        pageTitle="Case Studies"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Case Studies"
        video= {video}
      />
      <TwoColumns />
      <StartProject />
      <Footer />
    </Layout>
  );
};

export default CaseStudies;
