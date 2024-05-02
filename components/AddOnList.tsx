import React from 'react';

type MediaDataType = {
  heading: string;
  desc: string;
};

const AddOnList = ({ heading, desc }: MediaDataType, index: number) => {
  return (
    <div
      className='max-w-[350px] lg:max-w-[450px] h-[300px] mx-auto w-full shadow-lg'
      key={index}
    >
      <div className='w-full h-full flex flex-col justify-center items-center p-10'>
        <div className='w-full pt-4'>
          <h2 className='text-5xl lg:text-5xl text-start font-extrabold pb-6'>
            {heading}
          </h2>
          <p className='text-xl'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AddOnList;
