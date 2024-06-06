'use client';
import React from 'react';
import LinkButton from './LinkButton';
import SquadGif from '@/public/static/Squad.gif';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
  const ctaRef = useRef(null);
  const isCTARefInView = useInView(ctaRef, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isCTARefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='CTA'
        ref={ctaRef}
      >
        <div className='max-w-[1400px] w-full px-6 md:px-0 h-[400px] mx-auto'>
          <Image
            alt='Header image'
            src={SquadGif}
            quality={100}
            fill
            className='object-cover max-w-[1400px] mx-auto h-full'
          />
          <div className='content relative w-full h-full flex flex-col justify-center text-white text-center content-center'>
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-extrabold pb-4 [text-shadow:_0_0_80px_rgb(0_0_0_/_100%)] uppercase'>
              Capture Your Mementos <br /> With Us!
            </h2>
            <LinkButton
              style='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
              href={
                'https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
              }
              tab='_blank'
            >
              Book Now
            </LinkButton>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CTA;
