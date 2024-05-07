import React from 'react';
import LinkButton from './LinkButton';
import Image from 'next/image';

type MediaDataType = {
  img: string;
  heading: string;
  desc: string;
};

const ADList = ({ img, heading }: MediaDataType, index: number) => {
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

              <div className='absolute p-6 max-h-[150px] md:max-w-[400px] w-full h-full bottom-0 left-0 right-0 text-white'>
                <h2 className='font-extrabold text-lg md:text-2xl py-2 uppercase'>
                  {heading}
                </h2>
                <LinkButton
                  style='py-2 px-4 bg-red-600 text-lg font-semibold hover:opacity-80'
                  href={
                    'https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
                  }
                  tab='_blank'
                >
                  Book
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ADList;
