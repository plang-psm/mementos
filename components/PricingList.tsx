import React from 'react';
import Link from 'next/link';
import { TfiArrowCircleRight } from 'react-icons/tfi';

type PricingDataType = {
  title: string;
  text: string;
  pricing: string;
  time: string;
  link: string;
  favorite: boolean;
};

const PricingList = (
  { title, text, pricing, time, link, favorite }: PricingDataType,
  index: number
) => {
  const favoriteStyles =
    favorite === true
      ? 'w-full shadow-lg text-white bg-gradient-to-br from-[#C89A77] via-[#8F553F] to-[#8f563fd9] '
      : 'w-full shadow-lg';

  return (
    <>
      <div className={favoriteStyles} key={index}>
        <div className='p-10 lg:py-12 text-center'>
          <h2 className='text-4xl md:text-4xl lg:text-6xl font-extrabold text-center pb-6'>
            {title}
          </h2>
          <p className='pb-6 text-xl md:text-xl'>{text}</p>
          <div className='price-time flex justify-center gap-8 pb-6'>
            <p className='text-xl md:text-xl font-light'>
              <span className='font-bold'>Price: </span>${pricing}
            </p>
            <p className='text-xl md:text-xl font-light'>
              <span className='font-bold'>Time: </span>
              {time} hours
            </p>
          </div>
          <Link href={link} aria-label={`${title} pricing link`}>
            <TfiArrowCircleRight
              size={35}
              className='mx-auto rounded-2xl hover:-translate-y-1'
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingList;
