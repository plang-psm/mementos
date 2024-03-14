import React from 'react';

type MediaDataType = {
  img: string;
  heading: string;
  desc: string;
};

const ADList = ({ img, heading, desc }: MediaDataType, index: number) => {
  return (
    <div className='max-w-[400px] w-full sm-md:basis-5/12 mx-auto' key={index}>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full h-full relative '>
          <img
            src={img}
            alt={`${heading} image`}
            className='h-[450px] md:h-[700px] object-cover w-full'
          />
          <div className='absolute p-6 h-[175px] sm-md:h-[190px] md:h-[255px] bottom-0 left-0 right-0 text-white'>
            <h2 className='font-extrabold text-lg md:text-2xl py-2 uppercase'>
              {heading}
            </h2>
            <p className='font-thin text-md'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADList;
