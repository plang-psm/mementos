'use client';
import React from 'react';
import Image from 'next/image';
import Placeholder from '@/public/static/Placeholder.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Owner = () => {
  const ownerRef = useRef(null);
  const isOwnerRefInView = useInView(ownerRef, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isOwnerRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='story-section max-w-[1200px] px-6 py-12 md:py-24 tracking-[.15em] mx-auto'
        ref={ownerRef}
      >
        <div className='lg:flex lg:justify-between md:gap-10 mx-auto text-center lg:text-start'>
          <div className='title-desc w-full pb-4 max-w-[500px] lg:max-w-[600px] m-auto'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:leading-[4rem]'>
              The Person Behind The Moment
            </h2>
            <p className='desc md:text-xl tracking-wider'>
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
          <div className='image max-w-[500px] max-h-[500px] w-full h-full mx-auto lg:ml-auto lg:mr-0'>
            <Image
              src={Placeholder}
              width={500}
              height={500}
              alt='Placeholder image'
              className='object-contain  w-full h-full shadow-xl'
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Owner;
