import React from 'react';
import Image from 'next/image';
import PBStem from '@public/static/PBStem.png';
import Logo from '@/public/static/Logo.png';
import Placeholder from '@/public/static/Placeholder.png';

const about = () => {
  return (
    <>
      <div className='header-container relative py-24 md:py-36 max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] m-auto'>
        <div className='title pb-24 lg:pb-48 px-6 flex flex-col items-center'>
          <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl pb-4 tracking-[.05em] md:tracking-[.1em] lg:leading-[5rem]'>
            We Specialize In Bringing People Together & Capturing The Essence Of
            Every Event
          </h1>
        </div>
        <div className='absolute bottom-0 right-[37%] md:right-[15em]'>
          <Image
            src={PBStem}
            width={200}
            height={200}
            alt='Photo Booth with stem image'
            className='w-auto md:w-[130px] h-auto'
          />
        </div>
      </div>
      <div className='about-section py-12 lg:py-28 bg-gradient-to-br from-[#C89A77] via-[#8F553F] to-[#8f563fd9]'>
        <div className='max-w-[1200px] md:flex md:justify-between gap-10 m-auto px-6 text-white'>
          <div className='title md:w-[25%]'>
            <h2 className='font-bold pb-4 text-center text-3xl md:text-4xl lg:text-5xl'>
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
      <div className='story-section max-w-[1200px] px-6 py-12 md:py-24 tracking-[.15em] mx-auto'>
        <div className='lg:flex lg:justify-between md:gap-10 mx-auto text-center lg:text-start'>
          <div className='title-desc w-full pb-4 max-w-[500px] lg:max-w-[600px] m-auto'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:leading-[4rem]'>
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
          <div className='image max-w-[500px] max-h-[500px] w-full h-full mx-auto lg:ml-auto lg:mr-0'>
            <Image
              src={Placeholder}
              width={500}
              height={500}
              alt='Placeholder image'
              className='object-contain  w-full h-full shadow-xl'
            />
          </div>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto flex items-center px-6 py-12'>
        <hr className='flex-grow h-[4px] bg-gray-700' />
        <span className='text-3xl md:text-4xl font-extrabold uppercase px-4 text-center'>
          <Image src={Logo} width={300} height={300} alt='Logo Image' />
        </span>
        <hr className='flex-grow h-[4px] bg-gray-700' />
      </div>
      <div className='images-section max-w-[1200px] px-6  md:py-24 m-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-12 md:leading-[4rem] text-center'>
          Your <span className='text-[#B4794D]'>Memento</span> Starts With Us
        </h2>
        <div className='images grid grid-cols-2 md:grid-cols-4 gap-8 w-full'>
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt='Wedding top left image'
            className='object-contain w-full h-full'
          />
        </div>
      </div>
    </>
  );
};

export default about;
