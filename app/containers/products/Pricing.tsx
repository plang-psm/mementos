'use client';
import React from 'react';
import LinkButton from '@components/LinkButton';
import PricingList from '@components/PricingList';
import PricingData from '@data/PricingData';
import AddOnList from '@components/AddOnList';
import AddOnData from '@data/AddOnData';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Pricing = () => {
  const pricingRef = useRef(null);
  const isPricingRefInView = useInView(pricingRef, { once: true });
  const addonRef = useRef(null);
  const isAddonRefInView = useInView(addonRef, { once: true });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isPricingRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='pricing max-w-[1200px] mx-auto pb-12 md:pb-24 lg:pb-36'
        ref={pricingRef}
      >
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-12 md:pb-24 text-center'>
          The Perfect Prices <br />
          For The Perfect{' '}
          <span className='text-[#B4794D] font-wf text-5xl lg:text-7xl'>
            Memento
          </span>
        </h2>
        <div className='max-w-[1400px] mx-auto px-6 pb-12 md:pb-24 lg:pb-36 lg:px-0 flex flex-col gap-12 justify-center items-center md:gap-16 md:flex-row md:justify-between rounded-2xl'>
          {PricingData.map(
            ({ title, text, pricing, time, link, favorite }, index) => {
              return (
                <PricingList
                  key={index}
                  title={title}
                  text={text}
                  pricing={pricing}
                  time={time}
                  link={link}
                  favorite={favorite}
                />
              );
            }
          )}
        </div>
        <div className='w-full pb-12 md:pb-24 lg:pb-36 px-6 lg:px-0 text-center content-center'>
          <div className='px-4 py-12 bg-[#101720] text-white'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold pb-4'>
              Have A Special Accomodation?
            </h2>
            <p className='max-w-[900px] mx-auto md:text-lg tracking-wide pb-4'>
              Have a special request? Reach out to the team and we will work to
              meet your accommodation. Our mission is to ensure every event is
              as memorable as the last, and that includes meeting any special
              request we're capable of. We look forward to hearing from you!
            </p>
            <LinkButton
              style='py-2 px-6 mr-2 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
              href='mailto:Mementosbooth@gmail.com'
            >
              Contact Us
            </LinkButton>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: '50px' }}
          animate={isAddonRefInView ? { opacity: 1, y: '0' } : {}}
          transition={{ duration: 1 }}
          className='add-ons px-6 mx-auto md:pb-24'
          ref={addonRef}
        >
          <div className='flex items-center pb-12 md:pb-24 '>
            <hr className='flex-grow h-[2px] bg-gray-700' />
            <span className='text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase px-4 text-center'>
              Add ons
            </span>
            <hr className='flex-grow h-[2px] bg-gray-700' />
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {AddOnData.map(({ heading, desc }, index) => {
              return <AddOnList key={index} heading={heading} desc={desc} />;
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Pricing;
