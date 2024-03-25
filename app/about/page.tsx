import React from 'react';
import Image from 'next/image';
import PBStem from '@public/static/PBStem.svg';
import BottomWave3 from '@/public/static/BottomWave3.svg';
import Placeholder from '@/public/static/Placeholder.svg';
import WeddingTL from '@/public/static/WeddingTL.svg';
import WeddingTR from '@/public/static/WeddingTR.svg';
import WeddingBL from '@/public/static/WeddingBL.svg';
import WeddingBR from '@/public/static/WeddingBR.svg';

const about = () => {
  return (
    <>
      <div className='header-container pt-12 lg:py-36 max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] m-auto'>
        <div className='title pt-6 px-6 flex flex-col items-center'>
          <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl pb-4 tracking-[.05em] lg:leading-[5rem]'>
            We Specialize In Bringing People Together & Capturing The Essence Of
            Every Event
          </h1>
          <Image
            src={PBStem}
            width={100}
            height={100}
            alt='Photo Booth with stem image'
            className='lg:ml-[25em] w-auto h-auto'
          />
        </div>
      </div>
      <div className='about-section bg-[#FFF1DB] pt-12 lg:pt-20 lg:mt-4 '>
        <div className='max-w-[1100px] md:flex md:justify-between gap-10 m-auto px-6'>
          <div className='title md:w-[25%]'>
            <h2 className='text-3xl md:text-4xl font-extrabold pb-4'>
              About Us
            </h2>
          </div>
          <div className='desc md:w-[75%] max-w-[800px]'>
            <p className='md:text-xl tracking-wider'>
              Welcome to Mementos Photobooth, where every snapshot tells a
              story. Nestled in the vibrant heart of Los Angeles, our
              Latina-owned company is dedicated to capturing the magic of life's
              most precious moments. Founded by a passionate entrepreneur with a
              love for photography and a deep appreciation for our diverse
              community, Mementos Photobooth is more than just a rental service
              – it's a celebration of culture, connection, and cherished
              memories.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={BottomWave3}
        width={100}
        height={100}
        alt='wave image'
        className='w-full h-full p-0 m-0 rotate-180'
      />
      <div className='story-section max-w-[1100px] px-6 py-12 md:pt-24 tracking-[.15em] mx-auto'>
        <div className='lg:flex lg:justify-between md:gap-10 m-auto'>
          <div className='title w-full pb-4'>
            <h2 className='text-3xl md:text-5xl font-extrabold pb-4 md:leading-[4rem]'>
              The Person Behind The Moment
            </h2>
            <p className='desc md:text-xl tracking-wider'>
              Welcome to Mementos Photobooth, where every snapshot tells a
              story. Nestled in the vibrant heart of Los Angeles, our
              Latina-owned company is dedicated to capturing the magic of life's
              most precious moments. Founded by a passionate entrepreneur with a
              love for photography and a deep appreciation for our diverse
              community, Mementos Photobooth is more than just a rental service
              – it's a celebration of culture, connection, and cherished
              memories.
            </p>
          </div>
          <div className='image max-w-[500px] max-h-[500px] w-full h-full m-auto'>
            <Image
              src={Placeholder}
              width={500}
              height={500}
              alt='Placeholder image'
              className='object-contain w-full h-full shadow-xl'
            />
          </div>
        </div>
      </div>
      <div className='images-section max-w-[1100px] px-6 py-12 md:py-24 m-auto'>
        <h2 className='title text-3xl md:text-5xl font-extrabold pb-4 md:leading-[4rem] text-center'>
          Your <span className='text-[#B4794D]'>Memento</span> Starts With Us
        </h2>
        <div className='images grid grid-cols-2 gap-8 w-full'>
          <div className='image'>
            <Image
              src={WeddingTL}
              width={300}
              height={300}
              alt='Wedding top left image'
              className='object-contain w-full h-full'
            />
          </div>
          <div className='image'>
            <Image
              src={WeddingTR}
              width={300}
              height={300}
              alt='Wedding top right image'
              className='object-contain w-full h-full'
            />
          </div>
          <div className='image'>
            <Image
              src={WeddingBL}
              width={300}
              height={300}
              alt='Wedding bottom left image'
              className='object-contain w-full h-full'
            />
          </div>
          <div className='image'>
            <Image
              src={WeddingBR}
              width={300}
              height={300}
              alt='Wedding top right image'
              className='object-contain w-full h-full'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
