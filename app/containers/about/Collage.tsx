'use client';
import React from 'react';
import Image from 'next/image';
import AboutImg1 from '@/public/static/AboutImg1.png';
import AboutImg2 from '@/public/static/AboutImg2.png';
import AboutImg3 from '@/public/static/AboutImg3.jpg';
import Babyshower3 from '@/public/static/BabyShower3.png';
import Birthday5 from '@/public/static/Birthday5.png';
import LinkButton from '@components/LinkButton';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Collage = () => {
  const collageRef = useRef(null);
  const isCollageRefInView = useInView(collageRef, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isCollageRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='images-section max-w-[1200px] px-6 py-12 md:pb-24 m-auto'
        ref={collageRef}
      >
        <div className='flex flex-col gap-12'>
          <div className='content-center text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:leading-[4rem]'>
              Your{' '}
              <span className='text-[#B4794D] font-wf text-5xl lg:text-7xl'>
                Memento
              </span>{' '}
              Starts With Us
            </h2>
            <LinkButton
              href={
                'https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
              }
              style='py-2 px-6 mr-2 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
            >
              Book Here
            </LinkButton>
          </div>
          <div className='image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Image
              src={AboutImg1}
              width={0}
              height={0}
              quality={100}
              alt='Wedding top left image'
              className='object-cover max-w-[400px] w-full h-[400px] mx-auto'
            />
            <Image
              src={AboutImg2}
              width={0}
              height={0}
              quality={100}
              alt='Wedding top left image'
              className='object-cover max-w-[400px] w-full h-[400px] mx-auto'
            />
            <Image
              src={Birthday5}
              width={0}
              height={0}
              quality={100}
              alt='Wedding top left image'
              className='object-cover max-w-[400px] w-full h-[400px] mx-auto'
            />
            <Image
              src={AboutImg3}
              width={0}
              height={0}
              quality={100}
              alt='Wedding top left image'
              className='object-cover object-bottom max-w-[400px] md:max-w-full h-[400px] w-full mx-auto md:col-span-2'
            />
            <Image
              src={Babyshower3}
              width={0}
              height={0}
              quality={100}
              alt='Wedding top left image'
              className='object-cover max-w-[400px] w-full h-[400px] mx-auto md:row-start-2'
            />
          </div>
        </div>{' '}
      </motion.div>
    </>
  );
};

export default Collage;
