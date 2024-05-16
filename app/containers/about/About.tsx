'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);
  const isAboutRefInView = useInView(aboutRef, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isAboutRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='about-section py-12 lg:py-28 bg-gradient-to-br from-[#C89A77] via-[#8F553F] to-[#8f563fd9]'
        ref={aboutRef}
      >
        <div className='max-w-[1200px] md:flex md:justify-between gap-10 m-auto px-6 text-white'>
          <div className='title md:w-[25%]'>
            <h2 className='font-bold pb-4 text-center text-3xl md:text-4xl lg:text-5xl'>
              About Us
            </h2>
          </div>
          <div className='desc md:w-[75%] max-w-[800px]'>
            <p className='md:text-xl tracking-wider'>
              Welcome to Mementos Photobooth, where every snapshot tells a
              story. Nestled in the vibrant heart of Los Angeles, our
              Latina-owned company is dedicated to capturing the magic of life's
              most precious moments. Founded by a passionate entrepreneur with a
              love for photography and a deep appreciation for our diverse
              community, Mementos Photobooth is more than just a rental service
              – it's a celebration of culture, connection, and cherished
              memories.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
