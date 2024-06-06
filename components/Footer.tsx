'use client';
import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Logo from '@public/static/Logo.png';
import Link from 'next/link';
import LinkButton from './LinkButton';

const Footer = () => {
  const footerRef = useRef(null);
  const isFooterRefInView = useInView(footerRef, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isFooterRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='w-full bg-[#101720] text-white py-24'
        ref={footerRef}
      >
        <div className='footer-container max-w-[1400px] px-6 uppercase md:flex justify-between gap-6 mx-auto font-light'>
          <div className='logo-socials md:w-[30%] mx-auto pb-12 md:pb-0'>
            <div className='logo mx-auto pb-12'>
              <Image
                src={Logo}
                width={350}
                height={350}
                quality={100}
                alt='Logo image'
                className='mx-auto'
              />
            </div>
            <div className='payments w-full text-center'>
              <p className='font-extrabold text-xl'>Mementos Photo Booth</p>
              <p className='font-normal text-xl font-'>Los Angeles, CA</p>
            </div>
          </div>
          <div className='md:w-[20%] lg:w-[30%] flex flex-col gap-12 pb-12'>
            <div className='navigation text-center md:pb-0 flex flex-col gap-8'>
              <h3 className='font-extrabold text-xl'>Menu</h3>
              <Link href={'/'} className='hover:font-normal text-lg'>
                Home
              </Link>
              <Link href={'/about'} className='hover:font-normal text-lg'>
                About
              </Link>
              <Link href={'/products'} className='hover:font-normal text-lg'>
                Product
              </Link>
              <Link href={'/gallery'} className='hover:font-normal text-lg'>
                Gallery
              </Link>
            </div>
            <div className='book w-full text-center'>
              <LinkButton
                style='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
                href={
                  'https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
                }
                tab='_blank'
              >
                Book now
              </LinkButton>
            </div>
          </div>
          <div className='contact-location md:w-[40%] lg:w-[30%] pb-12 md:pb-0 text-center lg:text-start'>
            <div className='contact flex flex-col gap-4 pb-12'>
              <h3 className='font-extrabold text-xl'>Contact</h3>
              <div className=' flex gap-2 justify-center lg:justify-start content-center items-center uppercase'>
                <FaInstagram className='inline-block' size={25} />
                <div className=''>
                  <a
                    className='font-thin hover:font-normal'
                    href='https://www.instagram.com/mementosbooth/'
                  >
                    @Mementosbooth
                  </a>
                  <p className='font-thin'></p>
                </div>
              </div>
              <div className=' flex gap-2 justify-center lg:justify-start content-center items-center uppercase'>
                <FaRegEnvelope className='inline-block' size={25} />
                <div className=''>
                  <a
                    className='font-thin hover:font-normal'
                    href='mailto:Mementosbooth@gmail.com'
                  >
                    Mementosbooth@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className='location flex flex-col gap-4'>
              <h3 className='font-extrabold text-xl'>Locations</h3>
              <div className=' flex gap-2 justify-center lg:justify-start content-center items-center uppercase'>
                <FaMapMarkerAlt className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>Los Angeles, CA</p>
                </div>
              </div>
              <div className=' flex gap-2 justify-center lg:justify-start content-center items-center uppercase'>
                <FaRegClock className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>Mon - Sun 8AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='md:pt-12 px-10 text-center tracking-[.1em] font-light'>
          Designed and developed by{' '}
          <a
            href={'https://www.psicode.dev/'}
            className='hover:opacity-70'
            rel='noopener noreferrer'
            target='_blank'
          >
            <span className='font-extrabold'>PLANG-PSM</span>
          </a>
        </p>
      </motion.div>
    </>
  );
};

export default Footer;
