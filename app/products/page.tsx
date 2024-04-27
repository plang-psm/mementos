import React from 'react';
import ThreePB from '@public/static/Three-pb.svg';
import Image from 'next/image';
import Collage from '@public/static/Collage.png';
import Checkmark from '@public/static/checkmark.svg';
import LinkButton from '@components/LinkButton';
import PricingList from '@components/PricingList';
import PricingData from '@data/PricingData';
import AddOnList from '@components/AddOnList';
import AddOnData from '@data/AddOnData';
import CTA from '@components/CTA';
import FAQ from '@components/FAQ';
import FaqData from '@data/FaqData';

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
            style='py-2 px-6 mr-2 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
          >
            Book Here
          </LinkButton>
        </div>
      </div>
      <div className='call to action pb-12 md:pb-36'>
        <CTA />
      </div>
      <div className='feature-container max-w-[1400px] tracking-[.15em] mx-auto pb-12 md:pb-36'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='whats-included w-full px-6 order-2'>
            <h2 className='text-3xl md:text-3xl lg:text-5xl text-center md:text-start font-bold '>
              Whats <br /> Included
            </h2>
            <div className='body py-6 w-full'>
              <ul className='flex flex-col'>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  Instant Photo Sharing
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  Custom Photo Templates
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  GIFs and Boomerangs
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  High Quality Photos
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  Basic Backdrop
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  Tap to Start
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  Custom Props
                </li>
                <li className='md:text-lg inline-flex py-2'>
                  <Image
                    src={Checkmark}
                    width={0}
                    height={0}
                    alt='checkmark icon'
                    className='w-[20px] h-auto'
                  />
                  Gallery Access 24hrs after event
                </li>
              </ul>
            </div>
          </div>
          <div className='image w-full h-full order-2'>
            <Image
              src={Collage}
              width={1000}
              height={1000}
              alt='Collage of images'
              placeholder='blur'
              className='object-cover h-fit'
            />
          </div>
        </div>
      </div>
      <div className='pricing max-w-[1400px] mx-auto pb-12 md:pb-24 lg:pb-36'>
        <h2 className='text-3xl md:text-3xl lg:text-5xl font-bold pb-12 md:pb-24 text-center'>
          The Perfect Prices <br />
          For The Perfect Moment
        </h2>
        <div className='max-w-[1400px] mx-auto px-6 pb-12 md:pb-24 lg:pb-36 lg:px-0 flex flex-col gap-12 justify-center items-center md:gap-16 md:flex-row md:justify-between rounded-2xl'>
          {PricingData.map(
            ({ title, text, pricing, time, link, favorite }, index) => {
              return (
                <PricingList
                  key={index}
                  title={title}
                  text={text}
                  pricing={pricing}
                  time={time}
                  link={link}
                  favorite={favorite}
                />
              );
            }
          )}
        </div>
        <div className='w-full pb-12 md:pb-24 lg:pb-36 px-6 lg:px-0 text-center content-center'>
          <div className='px-4 py-12 bg-[#101720] text-white'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold pb-4'>
              Have A Special Accomodation?
            </h2>
            <p className='max-w-[900px] mx-auto md:text-lg tracking-wide pb-4'>
              Have a special request? Reach out to the team and we will work to
              meet your accommodation. Our mission is to ensure every event is
              as memorable as the last, and that includes meeting any special
              request we're capable of. We look forward to hearing from you!
            </p>
            <LinkButton
              style='py-2 px-6 mr-2 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
              href={'/products'}
            >
              Contact Us
            </LinkButton>
          </div>
        </div>
        <div className='add-ons px-6 mx-auto md:pb-24 lg:pb-36'>
          <div className='flex items-center pb-12 md:pb-24 '>
            <hr className='flex-grow h-[2px] bg-gray-700' />
            <span className='text-3xl md:text-3xl lg:text-5xl font-extrabold uppercase px-4 text-center'>
              Add ons
            </span>
            <hr className='flex-grow h-[2px] bg-gray-700' />
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {AddOnData.map(({ img, heading, desc }, index) => {
              return (
                <AddOnList
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

      <div className='faq mx-auto h-full py-12 md:pb-36 px-6 bg-gray-100'>
        <div className='max-w-[1400px] w-full mx-auto'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[40%] md:p-8 lg:p-24 text-3xl md:text-4xl'>
              Lets clarify <br />A Few Things
            </div>
            <div className='w-full md:w-[60%]'>
              {FaqData.map(({ question, answer }, index) => {
                return <FAQ question={question} answer={answer} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default products;
