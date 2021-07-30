import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import PageBanner from '../components/common/PageBanner';
import Footer from '../components/app/Footer';
import TwoColumns from '../components/case-study/CaseStudies';
import StartProject from '../components/common/StartProject';

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
      />
      <TwoColumns />
      <StartProject />
      <Footer />
    </Layout>
  );
};

export default CaseStudies;
