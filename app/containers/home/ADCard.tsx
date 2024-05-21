'use client';
import ADList from '@components/ADList';
import AdData from '@data/AdData';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ADCard = () => {
  const adRef = useRef(null);
  const isAdRefInView = useInView(adRef, { once: true });
  return (
    <>
      <div className='bg-[#101720] text-white' ref={adRef}>
        <div className='header-transition max-w-[1400px] w-full flex flex-col items-center text-start justify-center md:mx-auto'>
          <div className='py-12 md:py-24 px-6'>
            <div className='unlimited-photos pb-0 md:mx-auto md:flex md:justify-between md:items-center md:gap-8'>
              <div className='content mx-auto w-full text-center'>
                <motion.h2
                  initial={{ opacity: 0, y: '50px' }}
                  animate={isAdRefInView ? { opacity: 1, y: '0' } : {}}
                  transition={{ duration: 1 }}
                  className='text-3xl md:text-5xl font-extrabold pb-6 uppercase'
                >
                  We've got every event covered
                </motion.h2>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: '50px' }}
              animate={isAdRefInView ? { opacity: 1, y: '0' } : {}}
              transition={{ duration: 1 }}
              className='ad-container mx-auto grid grid-cols-1 md:grid-cols-3 pt-8 gap-12 w-full h-full text-center'
            >
              {AdData.map(({ img, heading, desc }, index) => {
                return (
                  <ADList key={index} img={img} heading={heading} desc={desc} />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ADCard;
