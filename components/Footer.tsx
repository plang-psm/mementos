import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import Contact from './Contact';

const Footer = () => {
  return (
    <div className=' w-100 bg-[#FFF1DB] py-12 md:py-24'>
      <div className=''>
        <p className='text-[#B4794D] text-3xl md:text-4xl font-bold tracking-[.1em] uppercase py-4 text-center'>
          Mementos Photobooth
        </p>
      </div>
      <div className='max-w-[1100px] text-center px-6 flex flex-col md:flex-row items-center md:items-start justify-between mx-auto'>
        <div className=''>
          <ul className='socials text-start font-light text-md py-4 max-w-[350px] '>
            <li className='py-2'>
              <div className=' flex gap-4 items-center uppercase'>
                <FaPhoneAlt className='inline-block' size={25} />
                <div className=''>
                  <p className='font-bold'>Phone</p>
                  <p className='font-thin'>(555)555-5555</p>
                </div>
              </div>
            </li>
            <li className='py-2'>
              <div className=' flex gap-4 content-center items-center uppercase'>
                <FaRegEnvelope className='inline-block' size={25} />
                <div className=''>
                  <p className='font-bold'>Email</p>
                  <p className='font-thin'>Mementos@gmail.com</p>
                </div>
              </div>
            </li>
            <li className='py-2'>
              <div className=' flex gap-4 content-center items-center uppercase'>
                <FaMapMarkerAlt className='inline-block' size={25} />
                <div className=''>
                  <p className='font-bold'>Location</p>
                  <p className='font-thin'>Los Angeles, CA</p>
                </div>
              </div>
            </li>
            <li className='py-2'>
              <div className=' flex gap-4 content-center items-center uppercase'>
                <FaRegClock className='inline-block' size={25} />
                <div className=''>
                  <p className='font-bold'>time</p>
                  <p className='font-thin'>Monday-Sunday 8AM - 5PM</p>
                </div>
              </div>
            </li>
          </ul>
          <div className='flex gap-4'>
            <p>Follow us</p>
            <ul className='flex gap-4'>
              <li>insta</li>
              <li>face</li>
              <li>yelp</li>
            </ul>
          </div>
        </div>
        <div className=''>
          <Contact />
        </div>
      </div>
      <p className='py-20 tracking-widest text-center'>
        Designed and developed by <span className='font-bold'>plang-psm</span>
      </p>
    </div>
  );
};

export default Footer;
