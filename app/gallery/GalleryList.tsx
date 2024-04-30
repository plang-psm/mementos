import React from 'react';
import Image from 'next/image';
import GalleryData from '@data/GalleryData';

const GalleryPageList = () => {
  return (
    <>
      {GalleryData.map(({ img, alt }, index: number) => (
        <div className='image overflow-hidden' key={index}>
          <Image
            src={img}
            width={0}
            height={250}
            className='w-full h-[250px] object-cover transition-transform transform hover:scale-95 duration-300 ease-in-out'
            alt={alt}
          />
        </div>
      ))}
      {GalleryData.length === 0 && (
        <p className='mx-auto col-start-2'>Error: No images found</p>
      )}
    </>
  );
};

export default GalleryPageList;
