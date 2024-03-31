import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import Logo from '@public/static/Logo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className='w-full bg-black text-white py-24'>
        <div className='footer-container max-w-[1100px] px-6 uppercase md:flex justify-between mx-auto font-light'>
          <div className='logo-socials pb-12 md:pb-0'>
            <div className='logo mx-auto pb-12'>
              <Image
                src={Logo}
                width={250}
                height={250}
                alt='Logo image'
                className='mx-auto'
              />
            </div>
            <div className='socials max-w-[250px] mx-auto flex justify-between'>
              <p>Temp</p>
              <p>Temp</p>
              <p>Temp</p>
            </div>
          </div>
          <div className='navigation text-center pb-12 md:pb-0 flex flex-col gap-4'>
            <h3 className='font-extrabold text-xl'>Menu</h3>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/products'}>Product</Link>
            <Link href={'/gallery'}>Gallery</Link>
            <Link href={'/'}>Contact</Link>
          </div>
          <div className='contact-location pb-12 md:pb-0 text-center md:text-start'>
            <div className='contact flex flex-col gap-4 pb-12'>
              <h3 className='font-extrabold text-xl'>Contact</h3>
              <div className=' flex gap-2 justify-center md:justify-start content-center items-center uppercase'>
                <FaPhoneAlt className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>(555)555-5555</p>
                </div>
              </div>
              <div className=' flex gap-2 justify-center md:justify-start content-center items-center uppercase'>
                <FaRegEnvelope className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>Mementos@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='location flex flex-col gap-4'>
              <h3 className='font-extrabold text-xl'>Locations</h3>
              <div className=' flex gap-2 justify-center md:justify-start content-center items-center uppercase'>
                <FaMapMarkerAlt className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>Los Angeles, CA</p>
                </div>
              </div>
              <div className=' flex gap-2 justify-center md:justify-start content-center items-center uppercase'>
                <FaRegClock className='inline-block' size={25} />
                <div className=''>
                  <p className='font-thin'>Mon - Sun 8AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
