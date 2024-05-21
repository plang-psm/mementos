'use client';
import React from 'react';
import Image from 'next/image';
import Collage from '@public/static/Collage.png';
import Checkmark from '@public/static/Checkmark.svg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const featRef = useRef(null);
  const isFeatRefInView = useInView(featRef, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isFeatRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='feature-container max-w-[1200px] tracking-[.15em] mx-auto pb-12 md:pb-36'
        ref={featRef}
      >
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='whats-included w-full px-6 order-2'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-bold '>
              Whats <br /> Included
            </h2>
            <div className='body py-6 w-full'>
              <ul className='flex flex-col'>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    Instant Photo Sharing
                  </div>
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    Custom Photo Templates
                  </div>
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    GIFs and Boomerangs
                  </div>
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    High Quality Photos
                  </div>
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    Basic Backdrop
                  </div>
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    Tap to Start
                  </div>
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    Custom Props
                  </div>
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <div className='flex gap-1'>
                    <Image
                      src={Checkmark}
                      width={0}
                      height={0}
                      alt='checkmark icon'
                      className='w-[20px] h-auto'
                    />
                    Gallery Access 24hrs after event
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='image w-full h-full order-2'>
            <Image
              src={Collage}
              width={1000}
              height={1000}
              alt='Collage of images'
              placeholder='blur'
              className='object-cover h-fit'
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Features;
