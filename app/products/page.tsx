import React from 'react';
import ThreePB from '@public/static/Three-pb.svg';
import Image from 'next/image';
import BottomWave3 from '@public/static/BottomWave3.svg';
import LinkButton from '@components/LinkButton';
import FeaturedList from '@components/FeaturedList';
import PricingList from '@components/PricingList';
import FeatureData from '@data/FeatureData';
import PricingData from '@data/PricingData';
import AddOnList from '@components/AddOnList';
import AddOnData from '@data/AddOnData';

const products = () => {
  return (
    <>
      <div className='header-container pb-12 lg:py-32 md:flex justify-between max-w-[1500px] m-auto'>
        <div className='image max-w-[600px] py-4 mx-auto'>
          <Image
            src={ThreePB}
            width={0}
            height={0}
            alt='Photobooth image'
            priority
            className='w-100 h-100'
          />
        </div>
        <div className='title uppercase text-center md:text-start h-100 m-auto py-6 px-4'>
          <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl pb-2'>
            Digital <br /> Photobooth
          </h1>
          <p className='text-xl md:text-2xl pb-2'>Packages starting at $250</p>
          <LinkButton
            href={'/'}
            style='uppercase border py-2 px-6 hover:border-2 hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
          >
            Book Here
          </LinkButton>
        </div>
      </div>
      <div className='feature-container max-w-[1300px] md:py-12 md:pt-24 tracking-[.15em] mx-auto'>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase text-center pb-4'>
          Discover Our Packages
        </h2>
        <p className='text-center max-w-[1000px] mx-auto pb-4'>At Mementos Photobooth Rental, we offer a range of packages to suit every event and budget. Whether you're planning an intimate gathering or a large-scale celebration, we have the perfect package for you:</p>
        <div className='flex flex-col gap-10 justify-center items-center md:gap-8 md:flex-row md:justify-around px-6 p-10 rounded-2xl'>
          {PricingData.map(({ heading, pricing, desc, buttonLink }, index) => {
            return (
              <PricingList
                key={index}
                heading={heading}
                pricing={pricing}
                desc={desc}
                buttonLink={buttonLink}
              />
            );
          })}
        </div>
      </div>
      <div className=''>
        <div className='feature-container max-w-[1300px] py-6  tracking-[.15em] w-full mx-auto '>
          <h2 className='text-3xl md:text-4xl font-extrabold uppercase pb-6 md:pb-12 text-center'>
            whats included
          </h2>
          <div className='mx-auto text-center px-6'>
            <div className='features sm-md:flex sm-md:flex-wrap md:flex-row w-full justify-center mx-auto'>
              {FeatureData.map(({ img, heading, desc }, index) => {
                return (
                  <FeaturedList
                    key={index}
                    img={img}
                    heading={heading}
                    desc={desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='add ons max-w-[1300px] px-6 pt-6 md:pt-12 pb-36 mx-auto'>
        <div className='flex items-center pb-6 md:pb-24'>
          <hr className='flex-grow h-[2px] bg-gray-700' />
          <span className='text-3xl md:text-4xl font-extrabold uppercase px-4 text-center'>
            Add ons
          </span>
          <hr className='flex-grow h-[2px] bg-gray-700' />
        </div>
        <div className='flex flex-col gap-10 md:gap-8 md:flex-row h-full text-center mx-auto'>
          {AddOnData.map(({ img, heading, desc }, index) => {
            return (
              <AddOnList key={index} img={img} heading={heading} desc={desc} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default products;
