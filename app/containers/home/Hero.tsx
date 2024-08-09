import React from 'react';
import Image from 'next/image';
import LinkButton from '@components/LinkButton';
import HeaderImg1 from '@/public/static/HeaderImg1.png';

const Hero = () => {
  return (
    <>
      <div className='hero h-[800px] lg:h-svh relative overflow-hidde'>
        <Image
          alt='Header image'
          src={HeaderImg1}
          placeholder='blur'
          quality={100}
          fill
          priority
          sizes='100vw'
          className='object-cover relative z-0 w-full h-full'
        />
        <div className='hero-header relative h-full text-center  text-white flex flex-col justify-center'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold uppercase pb-6 [text-shadow:_0_0_80px_rgb(0_0_0_/_100%)]'>
            Mementos
          </h1>
          <h2 className='text-3xl md:text-5xl font-semibold pb-14 [text-shadow:_0_0_80px_rgb(0_0_0_/_100%)]'>
            LA's Trending Photo Booth
          </h2>
          <div className='button'>
            <LinkButton
              style='py-2 px-6 mr-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
              href={
                'https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
              }
              tab='_blank'
            >
              Book Now
            </LinkButton>
            <LinkButton
              style='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
              href={'/about'}
            >
              Our Story
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
