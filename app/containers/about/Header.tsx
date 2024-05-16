import React from 'react';
import Image from 'next/image';
import PBStem from '@public/static/PBStem.png';

const Header = () => {
  return (
    <>
      <div className='header-container relative py-24 md:py-36 max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] m-auto'>
        <div className='title pb-24 lg:pb-48 px-6 flex flex-col items-center'>
          <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl pb-4 tracking-[.05em] md:tracking-[.1em] lg:leading-[5rem]'>
            We Specialize In Bringing People Together & Capturing The Essence Of
            Every Event
          </h1>
        </div>
        <div className='absolute bottom-0 right-[37%] md:right-[15em]'>
          <Image
            src={PBStem}
            width={200}
            height={200}
            alt='Photo Booth with stem image'
            className='w-auto md:w-[130px] h-auto'
          />
        </div>
      </div>
    </>
  );
};

export default Header;
