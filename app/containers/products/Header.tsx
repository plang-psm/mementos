import React from 'react';
import ThreePB from '@public/static/PBThree.png';
import Image from 'next/image';
import LinkButton from '@components/LinkButton';

const Header = () => {
  return (
    <>
      <div className='header-container pb-12 lg:py-32 md:flex justify-between max-w-[1500px] m-auto'>
        <div className='image max-w-[600px] py-4 mx-auto'>
          <Image
            src={ThreePB}
            width={0}
            height={0}
            alt='Photobooth image'
            quality={100}
            priority
            className='w-100 h-100'
          />
        </div>
        <div className='title uppercase text-center md:text-start h-100 m-auto py-6 px-4'>
          <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl pb-4'>
            Digital <br /> Photobooth
          </h1>
          <p className='text-xl md:text-2xl pb-4'>Packages starting at $250</p>
          <LinkButton
            href={
              'https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
            }
            style='py-2 px-6 mr-2 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
          >
            Book Here
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default Header;
