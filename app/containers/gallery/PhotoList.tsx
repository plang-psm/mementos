'use client';
import React, { useState } from 'react';
import GalleryData from '@data/GalleryData';
import FilterButton from '@components/FilterButton';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PhotoList = () => {
  const filterRef = useRef(null);
  const isFilterRefInView = useInView(filterRef, { once: true });
  const photoListRef = useRef(null);
  const isPhotoListRefInView = useInView(photoListRef, { once: true });

  const [filterTab, setFilterTab] = useState('all');
  const filteredImages = GalleryData.filter((img) =>
    img.type.includes(filterTab)
  );
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50px' }}
        animate={isFilterRefInView ? { opacity: 1, y: '0' } : {}}
        transition={{ duration: 1 }}
        className='max-w-[700px] md:pt-0 mx-auto flex flex-col md:gap-4 md:flex-row md:justify-between pb-12'
        ref={filterRef}
      >
        <FilterButton
          selectTab={() => setFilterTab('all')}
          active={filterTab === 'all'}
        >
          All
        </FilterButton>
        <FilterButton
          selectTab={() => setFilterTab('weddings')}
          active={filterTab === 'weddings'}
        >
          Weddings
        </FilterButton>
        <FilterButton
          selectTab={() => setFilterTab('birthdays')}
          active={filterTab === 'birthdays'}
        >
          Birthdays
        </FilterButton>
        <FilterButton
          selectTab={() => setFilterTab('gatherings')}
          active={filterTab === 'gatherings'}
        >
          Gathering & Events
        </FilterButton>
      </motion.div>
      {filteredImages.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: '50px' }}
          animate={isPhotoListRefInView ? { opacity: 1, y: '0' } : {}}
          transition={{ duration: 1 }}
          className='grid-images w-full pb-12 md:pb-24 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] m-auto'
          ref={photoListRef}
        >
          {filteredImages.map(({ img, alt }, index: number) => (
            <div className='image mx-auto px-6' key={index}>
              <Image
                src={img}
                width={0}
                height={0}
                sizes='100vw'
                quality={100}
                className='w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] object-cover lg:object-cover'
                alt={alt}
              />
            </div>
          ))}
        </motion.div>
      ) : (
        <div className='w-full h-[300px] flex justify-center items-center pb-12'>
          <p className='text-center text-2xl'>Uh Oh...No images found</p>
        </div>
      )}{' '}
    </>
  );
};

export default PhotoList;
