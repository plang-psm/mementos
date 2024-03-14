import React from 'react';

type MediaDataType = {
  img: string;
  heading: string;
  desc: string;
};

const AddOnList = ({ img, heading, desc }: MediaDataType, index: number) => {
  return (
    <div
      className='extra-time p-4 border-4 max-w-[350px] mx-auto w-full'
      key={index}
    >
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='max-w-[75px] max-h-[75px]'>
          <img src={img} alt={`${heading} image`} className='h-[75px]' />
        </div>
        <div className='w-full h-100 pt-4'>
          <h2 className='font-extrabold text-lg md:text-xl py-2 uppercase'>
            {heading}
          </h2>
          <p className='md:text-lg'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AddOnList;
