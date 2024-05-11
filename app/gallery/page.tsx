'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import GalleryData from '@data/GalleryData';
import FilterButton from '@components/FilterButton';

const gallery = () => {
  const [filterTab, setFilterTab] = useState('all');

  const filteredImages = GalleryData.filter((img) =>
    img.type.includes(filterTab)
  );

  return (
    <>
      <h1 className='w-full py-12 px-6 font-bold text-4xl md:text-5xl lg:text-7xl tracking-[.05em] lg:leading-[5rem] text-center'>
        Some of Our Favorite{' '}
        <span className='text-[#B4794D] font-wf text-6xl md:text-7xl lg:text-8xl'>
          Mementos
        </span>
      </h1>
      <div className='max-w-[700px] md:pt-0 mx-auto flex flex-col gap-4 md:flex-row md:justify-between pb-12'>
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
      </div>
      {filteredImages.length > 0 ? (
        <div className='grid-images w-full pb-12 md:pb-24 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] m-auto'>
          {filteredImages.map(({ img, alt }, index: number) => (
            <div className='image mx-auto px-6' key={index}>
              <Image
                src={img}
                width={0}
                height={0}
                sizes='100vw'
                quality={100}
                loading='lazy'
                className='w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] object-cover lg:object-cover'
                alt={alt}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full h-[300px] flex justify-center items-center pb-12'>
          <p className='text-center text-2xl'>Uh Oh...No images found</p>
        </div>
      )}
    </>
  );
};

export default gallery;
