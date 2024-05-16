'use client';
import React from 'react';
import FAQ from '@components/FAQ';
import FaqData from '@data/FaqData';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FAQSection = () => {
  const faqRef = useRef(null);
  const isFaqRefInView = useInView(faqRef, { once: true });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isFaqRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='faq mx-auto h-full py-12 md:pb-36 px-6 bg-gray-100'
        ref={faqRef}
      >
        <div className='max-w-[1200px] w-full mx-auto'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[40%] md:p-8 lg:p-24 text-3xl md:text-4xl'>
              Lets clarify <br />A Few Things
            </div>
            <div className='w-full md:w-[60%]'>
              {FaqData.map(({ question, answer }, index) => {
                return <FAQ question={question} answer={answer} key={index} />;
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FAQSection;
