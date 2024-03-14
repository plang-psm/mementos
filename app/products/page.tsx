import React from 'react';
import ThreePB from '@public/static/Three-pb.svg';
import clocksvg from '@public/static/clocksvg.svg';
import backdropsvg from '@public/static/backdropsvg.svg';
import Image from 'next/image';
import Checkmark from '@public/static/checkmark.svg';
import BottomWave4 from '@public/static/BottomWave4.svg';
import LinkButton from '@components/LinkButton';
import AdData from '@data/AdData';
import IconData from '@data/IconData';

const products = () => {
  type MediaDataType = {
    img: string;
    heading: string;
    desc: string;
  };

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
        {AdData.map(({ img, heading, desc }: MediaDataType, index: number) => {
          return (
            <div
              className='max-w-[400px] w-full sm-md:basis-5/12 mx-auto'
              key={index}
            >
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='w-full h-full relative '>
                  <img
                    src={img}
                    alt={`${heading} image`}
                    className='h-[450px] md:h-[700px] object-cover w-full'
                  />
                  <div className='absolute p-6 h-[175px] sm-md:h-[190px] md:h-[255px] bottom-0 left-0 right-0 text-white'>
                    <h2 className='font-extrabold text-lg md:text-2xl py-2 uppercase'>
                      {heading}
                    </h2>
                    <p className='font-thin text-md'>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='feature-container py-6 md:py-12 tracking-[.15em] max-w-[1000px] w-full mx-auto'>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase pb-6 md:pb-12 text-center'>
          whats included
        </h2>
        <div className='mx-auto text-center px-6'>
          <div className='features sm-md:flex sm-md:flex-wrap md:flex-row w-full justify-center mx-auto'>
            {IconData.map(
              ({ img, heading, desc }: MediaDataType, index: number) => {
                return (
                  <div
                    className='max-w-[325px] w-full h-[225px] mx-auto flex flex-col justify-center items-center sm-md:basis-5/12 md:basis-1/3'
                    key={index}
                  >
                    <div className='max-w-[75px] max-h-[75px] '>
                      <img src={img} alt={`${heading} image`} />
                    </div>
                    <div className='h-[125px] pt-2'>
                      <h2 className='font-extrabold text-lg md:text-xl py-2 uppercase'>
                        {heading}
                      </h2>
                      <p className='md:text-lg'>{desc}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className='feature-container py-6 md:py-12 tracking-[.15em] max-w-[1000px] mx-auto'>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase pb-6 md:pb-12 text-center'>
          Packages
        </h2>
        <div className='flex flex-col gap-10 justify-center items-center md:gap-0 md:flex-row md:justify-around px-6'>
          <div className='standard max-w-[350px] w-full px-8 py-4 border-4 '>
            <div className='header px-12 py-4 border-b-4 text-center'>
              <h3 className='text-2xl uppercase font-semibold'>Standard</h3>
              <p className='text-lg md:text-xl font-light'>$250</p>
            </div>
            <div className='body py-6'>
              <ul className='flex flex-col'>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  2 hours
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Unlimited Photos
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Digital Prints
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Instant Digital Sharing
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Photo, GIFs, Etc
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Custom Tap Screen
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Custom Photo Templates
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Basic Backdrop
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  100% Satisfaction
                </li>
                <li className='md:text-lg inline-flex items-start py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='pt-1 w-100 h-100'
                  />
                  Gallery Access 24hrs after event
                </li>
              </ul>
              <div className='text-center mt-2'>
                <LinkButton
                  href={'/'}
                  style='uppercase border py-2 px-6 hover:border-2 hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
                >
                  Book
                </LinkButton>
              </div>
            </div>
          </div>
          <div className='premium max-w-[350px] w-full px-8 py-4 border-4'>
            <div className='header px-12 py-4 border-b-4 text-center'>
              <h3 className='text-2xl uppercase font-semibold'>Premium</h3>
              <p className='text-xl md:text-xl font-light'>$350</p>
            </div>
            <div className='body py-6'>
              <ul className='flex flex-col'>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  3 hours
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Unlimited Photos
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Digital Prints
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Instant Digital Sharing
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Photo, GIFs, Etc
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Custom Tap Screen
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Custom Photo Templates
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  Basic Backdrop
                </li>
                <li className='md:text-lg inline-flex py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='w-100 h-100'
                  />
                  100% Satisfaction
                </li>
                <li className='md:text-lg inline-flex items-start py-[5px]'>
                  <Image
                    src={Checkmark}
                    width={20}
                    height={20}
                    alt='checkmark icon'
                    className='pt-1'
                  />
                  Gallery Access 24hrs after event
                </li>
              </ul>
              <div className='text-center mt-2'>
                <LinkButton
                  href={'/'}
                  style='uppercase border py-2 px-6 hover:border-2 hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
                >
                  Book
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='add ons px-6 py-6 md:py-12 max-w-[1000px] mx-auto'>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase pb-6 md:pb-12 text-center'>
          Add ons
        </h2>
        <div className='flex flex-col md:flex-row gap-10 h-full text-center mx-auto'>
          <div className='extra-time p-4 border-4 max-w-[350px] mx-auto w-full'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <div className='max-w-[75px] max-h-[75px]'>
                <Image
                  src={clocksvg}
                  width={0}
                  height={0}
                  alt='Smiley icon'
                  className=''
                />
              </div>
              <div className='w-full h-100 pt-4'>
                <h2 className='font-extrabold text-lg md:text-xl py-2 uppercase'>
                  Add To The Fun
                </h2>
                <p className='md:text-lg'>+$100 per/hr</p>
              </div>
            </div>
          </div>
          <div className='backdrop py-6 border-4 max-w-[350px] mx-auto w-full'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <div className='max-w-[75px] max-h-[75px]'>
                <Image
                  src={backdropsvg}
                  width={0}
                  height={0}
                  alt='Smiley icon'
                  className=''
                />
              </div>
              <div className='h-100 pt-4'>
                <h2 className='font-extrabold text-lg md:text-xl py-2 uppercase'>
                  Onsite Assistance
                </h2>
                <p className='md:text-lg'>+$75 per/hr</p>
              </div>
            </div>
          </div>
          <div className='travel py-6 border-4 max-w-[350px] mx-auto w-full'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <div className='max-w-[75px] max-h-[75px]'>
                <Image
                  src={backdropsvg}
                  width={0}
                  height={0}
                  alt='Smiley icon'
                  className=''
                />
              </div>
              <LinkButton href='/' style='h-full pt-4'>
                <h2 className='font-extrabold text-lg md:text-xl  py-2 uppercase'>
                  Travel fee
                </h2>
                <p className='md:text-lg'>+$30 for +20miles</p>
              </LinkButton>
            </div>
          </div>
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
