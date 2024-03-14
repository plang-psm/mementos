import React from 'react';
import ThreePB from '@public/static/Three-pb.svg';
import Image from 'next/image';
import BottomWave4 from '@public/static/BottomWave4.svg';
import LinkButton from '@components/LinkButton';
import AdData from '@data/AdData';
import IconData from '@data/IconData';
import PricingData from '@data/PricingData';
import ADList from '@components/ADList';
import FeaturedList from '@components/FeaturedList';
import PricingList from '@components/PricingList';
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

      <div className='max-w-[1300px] px-6 mx-auto flex flex-row md:justify-center flex-wrap lg:flex-nowrap pb-12 pt-32 gap-4 w-full h-full text-center'>
        {AdData.map(({ img, heading, desc }, index) => {
          return <ADList key={index} img={img} heading={heading} desc={desc} />;
        })}
      </div>
      <div className='feature-container py-6 md:py-12 tracking-[.15em] max-w-[1000px] w-full mx-auto'>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase pb-6 md:pb-12 text-center'>
          whats included
        </h2>
        <div className='mx-auto text-center px-6'>
          <div className='features sm-md:flex sm-md:flex-wrap md:flex-row w-full justify-center mx-auto'>
            {IconData.map(({ img, heading, desc }, index) => {
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
      <div className='feature-container py-6 md:py-12 tracking-[.15em] max-w-[1000px] mx-auto'>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase pb-6 md:pb-12 text-center'>
          Packages
        </h2>
        <div className='flex flex-col gap-10 justify-center items-center md:gap-0 md:flex-row md:justify-around px-6'>
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
      <div className='add ons px-6 py-6 md:py-12 max-w-[1000px] mx-auto'>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase pb-6 md:pb-12 text-center'>
          Add ons
        </h2>
        <div className='flex flex-col md:flex-row gap-10 h-full text-center mx-auto'>
          {AddOnData.map(({ img, heading, desc }, index) => {
            return (
              <AddOnList key={index} img={img} heading={heading} desc={desc} />
            );
          })}
        </div>
      </div>
      <Image
        src={BottomWave4}
        width={100}
        height={100}
        alt='wave image'
        className='w-full h-full p-0 m-0'
      />
    </>
  );
};

export default products;
