import React from 'react';
type MediaDataType = {
  img: string;
  heading: string;
  desc: string;
};

const FeaturedList = ({ img, heading, desc }: MediaDataType, index: number) => {
  return (
    <div
      className='max-w-[325px] w-full h-[225px] mx-auto flex flex-col justify-center items-center sm-md:basis-5/12 md:basis-1/3'
      key={index}
    >
      <div className='max-w-[75px] max-h-[75px] '>
        <img src={img} alt={`${heading} image`} />
      </div>
      <div className='h-[125px] pt-2'>
        <h2 className='font-extrabold text-lg md:text-xl py-2 uppercase'>
          {heading}
        </h2>
        <p className='md:text-lg'>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedList;
