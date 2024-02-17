import React from 'react';
import Image from 'next/image';
import FooterLine from '@/public/assets/FooterLine.svg';

const Footer = () => {
  return (
    <div className=' w-100 bg-[#FBF7F3]'>
      {/* <div className='image'>
        {' '}
        <Image
          src={FooterLine}
          width={300}
          height={200}
          alt='Breakpoint line'
        />
      </div> */}
      <div className='border-t-2 border-[#AC7B55] w-80 mx-auto text-center'>
        <div className='py-8'>
          <p className='text-[#B4794D] text-xl tracking-[.27em] uppercase'>Mementos</p>
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
