import React from 'react';
import Image from 'next/image';
import LinkButton from './LinkButton';
import Checkmark from '@public/static/checkmark.svg';

type PricingDataType = {
  heading: string;
  pricing: string;
  desc: string[];
  buttonLink: string;
};

const PricingList = (
  { heading, pricing, desc, buttonLink }: PricingDataType,
  index: number
) => {
  return (
    <div className='premium max-w-[350px] w-full px-8 py-4 border-4' key={index}>
      <div className='header px-12 py-4 border-b-4 text-center'>
        <h3 className='text-2xl uppercase font-semibold'>{heading}</h3>
        <p className='text-xl md:text-xl font-light'>${pricing}</p>
      </div>
      <div className='body py-6'>
        <ul className='flex flex-col'>
          {desc.map((elem, index) => {
            return (
              <li className='md:text-lg inline-flex py-[5px]' key={index}>
                <Image
                  src={Checkmark}
                  width={20}
                  height={20}
                  alt='checkmark icon'
                  className='w-100 h-100'
                />
                {elem}
              </li>
            );
          })}
          <li className='md:text-lg inline-flex items-start py-[5px]'>
            <Image
              src={Checkmark}
              width={20}
              height={20}
              alt='checkmark icon'
              className='pt-1'
            />
            Gallery Access 24hrs after event
          </li>
        </ul>
        <div className='text-center mt-2'>
          <LinkButton
            href={buttonLink}
            style='uppercase border py-2 px-6 hover:border-2 hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
          >
            Book
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default PricingList;
