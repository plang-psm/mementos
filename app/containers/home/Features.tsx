'use client';
import React from 'react';
import Image from 'next/image';
import LinkButton from '@components/LinkButton';
import VdayGif from '@/public/static/Vday.gif';
import CustomTemplate from '@/public/static/TapScreen.gif';
import PhotoBooth from '@/public/static/PhotoBooth.png';
import FooterLine from '@/public/static/FooterLine.svg';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
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
        className='products-container max-w-[1200px] py-12 md:py-24 px-6 w-full md:mx-auto'
        ref={featRef}
      >
        <div className='unlimited-photos py-12 md:py-24 md:mx-auto md:flex md:justify-between md:items-center md:gap-4'>
          <div className='image order-2 w-full pb-4 md:pb-0'>
            <Image
              src={PhotoBooth}
              className='mx-auto md:ml-auto md:mr-0 w-full h-[450px] object-cover md:min-w-[330px] max-w-[450px] rounded-3xl'
              width={0}
              height={0}
              sizes='100vw'
              placeholder='blur'
              alt='Photobooth image'
            />
          </div>
          <div className='content mx-auto max-w-[500px] md:md:min-w-[300px] md:max-w-[600px]'>
            <h3 className='text-3xl md:text-5xl font-bold uppercase'>
              Unlimited Digital Photos
            </h3>
            <p className='py-4 md:text-lg tracking-wide'>
              Snap away knowing that every snapshot will be preserved digitally
              to treasure and share for years to come. Capture the joy of your
              special occasion with Mementos – where the memories are unlimited.
            </p>
            <LinkButton
              style='text-gray-900 text-xl font-bold hover:opacity-70 flex items-center gap-1'
              href={'/products'}
            >
              Product details <IoIosArrowDroprightCircle size={25} />
            </LinkButton>
          </div>
        </div>
        <Image
          src={FooterLine}
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto py-12 md:py-20 w-[50%] h-full'
          alt='Image of line break'
        />
        <div className='photo-templates py-12 md:py-24 md:mx-auto md:flex md:justify-between md:items-center md:gap-4'>
          <div className='image w-full pb-4 md:pb-0'>
            <Image
              src={CustomTemplate}
              className='mx-auto md:mr-auto md:ml-0 w-full h-[450px] object-cover object-center md:min-w-[330px] max-w-[450px] rounded-3xl'
              width={0}
              height={0}
              sizes='100vw'
              alt='Customer Template image'
            />
          </div>
          <div className='content mx-auto max-w-[500px] text-end md:md:min-w-[300px] md:max-w-[600px]'>
            <h3 className='text-3xl md:text-5xl font-bold uppercase text-end'>
              Custom Photo Templates
            </h3>
            <p className='py-4 md:text-lg tracking-wide'>
              From corporate branding to birthday celebrations, our tailored
              templates elevate every photo, making each moment truly
              one-of-a-kind. With Mementos, your memories aren't just captured –
              they're crafted into stunning keepsakes that you'll cherish
              forever.
            </p>
            <LinkButton
              style='text-gray-900 text-xl font-bold hover:opacity-70 w-full flex justify-end items-center gap-1'
              href={'/products'}
            >
              Product details <IoIosArrowDroprightCircle size={25} />
            </LinkButton>
          </div>
        </div>
        <Image
          src={FooterLine}
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto py-12 md:py-20 w-[50%] h-full'
          alt='Image of line break'
        />
        <div className='instant-photos py-12 md:py-24  md:mx-auto md:flex md:justify-between md:items-center md:gap-4'>
          <div className='image order-2 w-full pb-4 md:pb-0'>
            <Image
              src={VdayGif}
              className='mx-auto md:ml-auto md:mr-0 w-full h-[450px] object-cover object-top md:min-w-[330px] max-w-[450px] rounded-3xl'
              width={0}
              height={0}
              sizes='100vw'
              alt='Valentine Day gif'
            />
          </div>
          <div className='content mx-auto max-w-[500px] md:md:min-w-[300px] md:max-w-[600px]'>
            <h3 className='text-3xl md:text-5xl font-bold uppercase'>
              Instant Photos, GIFs, & Boomerangs
            </h3>
            <p className='py-4 md:text-lg tracking-wide'>
              Bring your memories to life with dynamic GIFs and boomerangs!
              Whether you're striking a pose with friends or showing off your
              dance moves at a party, our photobooth experience ensures that
              every moment is captured in a unique and unforgettable way.
            </p>
            <LinkButton
              style='text-gray-900 text-xl font-bold hover:opacity-70 flex items-center gap-1'
              href={'/products'}
            >
              Product details <IoIosArrowDroprightCircle size={25} />
            </LinkButton>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Features;
