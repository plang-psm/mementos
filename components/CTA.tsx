import React from 'react';
import LinkButton from './LinkButton';
import SquadGif from '@/public/static/Squad.gif';
import Image from 'next/image';

const CTA = () => {
  return (
    <>
      <div className='CTA'>
        <div className='max-w-[1400px] px-6 md:px-0 h-[400px] mx-auto relative'>
          <Image
            alt='Header image'
            src={SquadGif}
            quality={100}
            fill
            priority
            className='object-cover relative z-0 w-full h-full'
          />
          <div className='content relative text-white text-center h-full content-center'>
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-extrabold pb-4 [text-shadow:_0_0_80px_rgb(0_0_0_/_100%)] uppercase'>
              Capture Your Mementos <br /> With Us!
            </h2>
            <LinkButton
              style='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
              href={
                'https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
              }
              tab='_blank'
            >
              Book now
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
