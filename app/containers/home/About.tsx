'use client';
import React from 'react';
import Image from 'next/image';
import LinkButton from '@components/LinkButton';
import Logo from '@/public/static/Logo.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);
  const isAboutRefInView = useInView(aboutRef, { once: true });

  return (
    <>
      <div className='about max-w-[1400px] mx-auto px-6' ref={aboutRef}>
        <div className='about-logo md:mx-auto flex flex-col lg:flex-row lg:justify-evenly lg:items-center lg:gap-8'>
          <motion.div
            initial={{ opacity: 0, y: '50px' }}
            animate={isAboutRefInView ? { opacity: 1, y: '0' } : {}}
            transition={{ duration: 1 }}
            className='image md:mx-auto max-w-[700px] py-12 lg:py-24 md:order-2'
          >
            <Image
              src={Logo}
              className='mx-auto w-full object-cover md:min-w-[330px] max-w-[400px]'
              width={0}
              height={0}
              sizes='100vw'
              quality={100}
              alt='Logo image'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '50px' }}
            animate={isAboutRefInView ? { opacity: 1, y: '0' } : {}}
            transition={{ duration: 1 }}
            className='content mx-auto lg:min-w-[300px] max-w-[700px] pb-12 lg:py-24 text-center order-2 lg:order-1'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              The Perfect Booth <br />
              For Your{' '}
              <span className='text-[#B4794D] font-wf text-5xl lg:text-7xl'>
                Memento
              </span>
            </h2>
            <p className='py-4 md:text-lg tracking-wide'>
              Memento's is a{' '}
              <span className='font-extrabold'>
                Latino owned Photo Booth rental
              </span>{' '}
              company based out of{' '}
              <span className='font-extrabold'>Los Angeles, CA</span>. Our
              state-of-the-art booths are equipped with{' '}
              <span className='font-extrabold'>high-quality photos</span> and a
              wide array of <span className='font-extrabold'>fun props</span>,
              ensuring every snapshot is a moment to cherish. Whether it's a{' '}
              <span className='font-extrabold'>wedding, birthday bash,</span> or{' '}
              <span className='font-extrabold'>corporate event</span>, our
              customizable packages cater to your specific needs, complete with
              personalized <span className='font-extrabold'>tap screens</span>{' '}
              and <span className='font-extrabold'>themed props.</span>
            </p>
            <div className='button text-center'>
              <LinkButton
                style='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
                href={'/about'}
              >
                Our Story
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
