'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '@/public/static/Logo.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const LogoDivider = () => {
  const logoRef = useRef(null);
  const isLogoRefInView = useInView(logoRef, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isLogoRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='max-w-[1200px] mx-auto flex items-center px-6 py-12 lg:py-24'
        ref={logoRef}
      >
        <hr className='flex-grow hidden md:block h-[4px] bg-gray-700' />
        <span className='mx-auto text-3xl md:text-4xl font-extrabold uppercase px-4 text-center'>
          <Image src={Logo} width={300} height={300} alt='Logo Image' />
        </span>
        <hr className='flex-grow hidden md:block h-[4px] bg-gray-700' />
      </motion.div>
    </>
  );
};

export default LogoDivider;
