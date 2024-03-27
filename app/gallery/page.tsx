import React from 'react';
import Image from 'next/image';
import mementoslogo from '@/public/static/mementoslogo.svg';
import LinkButton from '../../components/LinkButton';

import GalleryList from './GalleryList';

const gallery = () => {
  return (
    <>
      <div className='instagram max-w-[1300px] py-12 px-6 mx-auto md:flex gap-4'>
        <div className='profile text-center flex flex-col gap-4'>
          <div className='image'>
            <Image
              src={mementoslogo}
              width={150}
              height={150}
              alt='Mementos logo images'
              className='mx-auto'
            />
          </div>
          <div className='profile-content'>
            <p className='text-2xl'>@mementosbooth</p>
            <p>
              Weddings • Celebrations • Corporate Events <br /> 📸✨ Quality
              Digital Booth Photos 📸✨ <br /> BOOKING NOW FOR MARCH -JULY 2024
              DM US📲💌
            </p>
          </div>
          <LinkButton
            href='https://www.instagram.com/mementosbooth/'
            style='follow border max-w-[350px] mx-auto p-2'
          >
            Follow
          </LinkButton>
        </div>
        <div className='grid-images py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-[950px] m-auto'>
          <GalleryList />
        </div>
      </div>
    </>
  );
};

export default gallery;
