import React from 'react';
import LinkButton from './LinkButton';

const CTA = () => {
  return (
    <>
      <div className='CTA pb-12 md:pb-24'>
        <div className='max-w-[1400px] my-12 md:my-24 px-6 md:px-0 h-[400px] mx-auto bg-[url("/static/Squad.gif")] bg-cover bg-center'>
          <div className='content text-white text-center h-full content-center'>
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-extrabold pb-4 [text-shadow:_0_0_80px_rgb(0_0_0_/_100%)] uppercase'>
              Capture Your Mementos <br /> With Us!
            </h2>
            <LinkButton
              style='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
              href={'/products'}
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
