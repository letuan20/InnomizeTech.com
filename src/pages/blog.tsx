import React from 'react';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';

import ProjectStartArea from '../components/home/ProjectStartArea';
import OurBlog from '../components/home/OurBlog';

import video from '../assets/images/Videos/Blog.mp4';

const Blog = () => {
  return (
    <Layout>
      <Navbar />
      <PageBanner
        pageTitle="Blog"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Blog"
        video={video}
      />
      <OurBlog />
      <ProjectStartArea />

      <Footer />
    </Layout>
  );
};

export default Blog;
