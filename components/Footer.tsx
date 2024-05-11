import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { SiZelle } from 'react-icons/si';
import { BiLogoVenmo } from 'react-icons/bi';
import { SiCashapp } from 'react-icons/si';

import Logo from '@public/static/Logo.png';
import Link from 'next/link';
import LinkButton from './LinkButton';

const Footer = () => {
  return (
    <>
      <div className='w-full bg-black text-white py-24'>
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
              <LinkButton
                href={'/'}
                style={
                  'font-extrabold text-2xl text-center pb-5 hover:text-red-600'
                }
              >
                Book now
              </LinkButton>
            </div>
          </div>
          <div className='md:w-[30%] flex flex-col gap-12 pb-12'>
            <div className='navigation text-center md:pb-0 flex flex-col gap-8'>
              <h3 className='font-extrabold text-xl'>Menu</h3>
              <Link href={'/'} className='hover:opacity-70 text-lg'>
                Home
              </Link>
              <Link href={'/about'} className='hover:opacity-70 text-lg'>
                About
              </Link>
              <Link href={'/products'} className='hover:opacity-70 text-lg'>
                Product
              </Link>
              <Link href={'/gallery'} className='hover:opacity-70 text-lg'>
                Gallery
              </Link>
            </div>
            <div className='payments w-full'>
              <h3 className='font-extrabold text-xl text-center pb-5'>
                We Accept
              </h3>
              <div className='contact w-[200px] flex justify-between mx-auto'>
                <div className=''>
                  <SiZelle className='inline-block' size={35} />
                </div>
                <div className=''>
                  <BiLogoVenmo className='inline-block' size={35} />
                </div>
                <div className=''>
                  <SiCashapp className='inline-block' size={35} />
                </div>
              </div>
            </div>
          </div>
          <div className='contact-location md:w-[30%] pb-12 md:pb-0 text-center lg:text-start'>
            <div className='contact flex flex-col gap-4 pb-12'>
              <h3 className='font-extrabold text-xl'>Contact</h3>
              <div className=' flex gap-2 justify-center lg:justify-start content-center items-center uppercase'>
                <FaInstagram className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>@Mementos</p>
                </div>
              </div>
              <div className=' flex gap-2 justify-center lg:justify-start content-center items-center uppercase'>
                <FaPhoneAlt className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>(555)555-5555</p>
                </div>
              </div>
              <div className=' flex gap-2 justify-center lg:justify-start content-center items-center uppercase'>
                <FaRegEnvelope className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>Mementosbooth@gmail.com</p>
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
      </div>
    </>
  );
};

export default Footer;
