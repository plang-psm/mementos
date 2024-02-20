import React from 'react';
import Image from 'next/image';
import FooterLine from '@/public/static/FooterLine.svg';

const Footer = () => {
  return (
    <div className=' w-100 bg-[#FFF1DB]'>
      <Image
        src={FooterLine}
        width={500}
        height={500}
        className='mx-auto py-8 md:py-8'
        alt='Image of line break'
      />
      <div className='mx-auto text-center'>
        <div className='py-8'>
          <p className='text-[#B4794D] text-2xl tracking-[.27em] uppercase'>
            Mementos
          </p>
          <p className='py-2'> Designed and developed by plang-psm</p>
          <ul className='socials flex justify-center gap-4'>
            <li>Inst</li>
            <li>Inst</li>
            <li>Inst</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
