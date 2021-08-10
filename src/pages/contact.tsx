import React from 'react';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import PageBanner from '../components/contact/ContactBanner';
import Footer from '../components/app/Footer';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <PageBanner
        pageTitle="Contact"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Contact"
      />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default Contact;
