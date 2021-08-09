import React from 'react';
import Layout from '../components/App/Layout';
import Navbar from '../components/App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import CareerContent from '../components/careers/CareerContent';
import ProjectStartArea from '../components/home/ProjectStartArea';

import video from '../assets/images/Videos/Career.mp4';

const Details = () => {
  return (
    <Layout>
      <Navbar />
      <PageBanner
        pageTitle="Career"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Career"
        video={video}
      />
      <CareerContent />
      <ProjectStartArea />

      <Footer />
    </Layout>
  );
};

export default Details;
