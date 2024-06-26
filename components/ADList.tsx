import React from 'react';
import Image from 'next/image';

type MediaDataType = {
  img: string;
  heading: string;
  desc: string;
};

const ADList = ({ img, heading, desc }: MediaDataType, index: number) => {
  return (
    <>
      <div
        className='max-w-[400px] max-h-[575px] w-full h-full mx-auto'
        key={index}
      >
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <div className='w-full h-full relative'>
            <Image
              src={img}
              width={0}
              height={0}
              sizes='100vw'
              alt={`${heading} image`}
              className='w-[400px] h-[400px] object-cover object-top rounded-3xl mx-auto'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-3xl'></div>

            <div className='absolute max-h-[150px] md:max-w-[400px] w-full h-full bottom-0 left-0 right-0 text-white'>
              <h2 className='font-extrabold text-3xl py-2 uppercase'>
                {heading}
              </h2>
              <p className='px-0'>{desc} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ADList;
