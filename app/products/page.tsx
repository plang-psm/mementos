import React from 'react';
import CTA from '@components/CTA';
import Header from '@app/containers/products/Header';
import Features from '@app/containers/products/Features';
import Pricing from '@app/containers/products/Pricing';
import FAQSection from '@app/containers/products/FAQSection';

const products = () => {
  return (
    <>
      <Header />
      <div className='call to action pb-12 md:pb-36'>
        <CTA />
      </div>
      <Features />
      <Pricing />
      <FAQSection />
    </>
  );
};

export default products;
