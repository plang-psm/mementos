import React from 'react';
import Image from 'next/image';
import mementoslogo from '@/public/static/mementoslogo.svg';
import InstantPhotosSvg from '@/public/static/InstantPhotosSvg.svg';
import LinkButton from '../../components/LinkButton';

import GalleryList from './GalleryPageList';

const gallery = () => {
  return (
    <div className='instagram max-w-[1100px] py-24 px-6 mx-auto'>
          <div className='profile text-center md:text-start flex flex-col md:flex-row md:items-start md:gap-4'>
            <div className='image md:'>
              <Image
                src={mementoslogo}
                width={150}
                height={150}
                alt='Mementos logo images'
                className='mx-auto'
              />
            </div>
            <div className='profile-content pb-2 md:py-2'>
              <p className='text-2xl'>@mementosbooth</p>
              {/* <p className='py-2'>11 Posts 116 Followers 224 Following</p> */}
              <p>
                {' '}
                Weddings • Celebrations • Corporate Events <br /> 📸✨ Quality
                Digital Booth Photos 📸✨ <br /> BOOKING NOW FOR MARCH -JULY
                2024 DM US📲💌
              </p>
            </div>
            <button className='follow my-2 border max-w-[350px] mx-auto md:mr-0 p-2'>
              Follow
            </button>
          </div>
        <div className='grid-images py-4 grid grid-cols-3 grid-flow-row gap-8'>
          <GalleryList />
          {/* List */}
        </div>
      </div>
  );
};

export default gallery;
