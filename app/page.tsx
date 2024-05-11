import Image from 'next/image';
import Logo from '@/public/static/Logo.png';
import VdayGif from '@/public/static/Vday.gif';
import CustomTemplate from '@/public/static/TapScreen.gif';
import PhotoBooth from '@/public/static/PhotoBooth.png';
import HeaderImg1 from '@/public/static/HeaderImg1.png';
import LinkButton from '@components/LinkButton';
import FooterLine from '@/public/static/FooterLine.svg';
import AdData from '@data/AdData';
import ADList from '@components/ADList';
import CTA from '@components/CTA';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function Home() {
  return (
    <>
      <div className='hero h-svh relative overflow-hidde'>
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
      <div className='about max-w-[1200px] mx-auto px-6'>
        <div className='about-logo md:mx-auto flex flex-col md:flex-row md:justify-between md:items-center md:gap-8'>
          <div className='content mx-auto max-w-[500px] md:md:min-w-[300px] md:max-w-[600px] py-12 md:py-24 text-center order-2'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              The Perfect Booth <br />
              For Your{' '}
              <span className='text-[#B4794D] font-wf text-4xl md:text-5xl lg:text-7xl'>
                Memento
              </span>
            </h2>
            <p className='py-4 md:text-lg tracking-wide'>
              Memento's is a Latino owned Photo Booth rental company based out
              of <span className='font-extrabold'>Los Angeles, CA</span>. Our
              state-of-the-art booths are equipped with{' '}
              <span className='font-extrabold'>high-quality photos</span> and a
              wide array of fun props, ensuring every snapshot is a moment to
              cherish. Whether it's a{' '}
              <span className='font-extrabold'>wedding, birthday bash,</span> or{' '}
              <span className='font-extrabold'>corporate event</span>, our
              customizable packages cater to your specific needs, complete with
              personalized tap screens and themed props.
            </p>
            <div className='button text-center'>
              <LinkButton
                style='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
                href={'/about'}
              >
                Our Story
              </LinkButton>
            </div>
          </div>
          <div className='image w-full py-4 pt-12 md:py-8'>
            <Image
              src={Logo}
              className='mx-auto w-full object-cover md:min-w-[330px] max-w-[400px]'
              width={0}
              height={0}
              sizes='100vw'
              quality={100}
              alt='Logo image'
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className='bg-[#101720] text-white'>
        <div className='header-transition max-w-[1400px] w-full flex flex-col items-center text-start justify-center md:mx-auto'>
          <div className='py-12 px-6'>
            <div className='unlimited-photos pb-0 md:mx-auto md:flex md:justify-between md:items-center md:gap-8'>
              <div className='content mx-auto w-full text-center'>
                <h2 className='text-3xl md:text-5xl font-extrabold pb-0 uppercase'>
                  We've got every event covered
                </h2>
              </div>
            </div>
            <div className='ad-container mx-auto grid grid-cols-1 md:grid-cols-3 pt-8 gap-12 w-full h-full text-center'>
              {AdData.map(({ img, heading, desc }, index) => {
                return (
                  <ADList key={index} img={img} heading={heading} desc={desc} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='products-container max-w-[1200px] py-12 md:py-24 px-6 w-full md:mx-auto'>
        <div className='unlimited-photos md:mx-auto md:flex md:justify-between md:items-center md:gap-4'>
          <div className='image order-2 w-full pb-4 md:pb-0'>
            <Image
              src={PhotoBooth}
              className='mx-auto md:ml-auto md:mr-0 w-full h-[450px] object-cover md:min-w-[330px] max-w-[500px]'
              width={0}
              height={0}
              sizes='100vw'
              placeholder='blur'
              loading='lazy'
              alt='Photobooth image'
            />
          </div>
          <div className='content mx-auto max-w-[500px] md:md:min-w-[300px] md:max-w-[600px]'>
            <h3 className='text-3xl md:text-5xl font-bold uppercase'>
              Unlimited Digital Photos
            </h3>
            <p className='py-4 md:text-lg tracking-wide'>
              Snap away knowing that every snapshot will be preserved digitally
              to treasure and share for years to come. Capture the joy of your
              special occasion with Mementos – where the memories are unlimited.
            </p>
            <LinkButton
              style='text-gray-900 text-xl font-bold hover:opacity-70 flex items-center gap-1'
              href={'/products'}
            >
              Product details <IoIosArrowDroprightCircle size={25} />
            </LinkButton>
          </div>
        </div>
        <Image
          src={FooterLine}
          width={0}
          height={0}
          sizes='100vw'
          loading='lazy'
          className='mx-auto py-12 md:py-20 w-[50%] h-full'
          alt='Image of line break'
        />
        <div className='photo-templates md:mx-auto md:flex md:justify-between md:items-center md:gap-4'>
          <div className='image w-full pb-4 md:pb-0'>
            <Image
              src={CustomTemplate}
              className='mx-auto md:mr-auto md:ml-0 w-full h-[450px] object-cover object-center md:min-w-[330px] max-w-[500px]'
              width={0}
              height={0}
              sizes='100vw'
              loading='lazy'
              alt='Customer Template image'
            />
          </div>
          <div className='content mx-auto max-w-[500px] text-end md:md:min-w-[300px] md:max-w-[600px]'>
            <h3 className='text-3xl md:text-5xl font-bold uppercase text-end'>
              Custom Photo Templates
            </h3>
            <p className='py-4 md:text-lg tracking-wide'>
              From corporate branding to birthday celebrations, our tailored
              templates elevate every photo, making each moment truly
              one-of-a-kind. With Mementos, your memories aren't just captured –
              they're crafted into stunning keepsakes that you'll cherish
              forever.
            </p>
            <LinkButton
              style='text-gray-900 text-xl font-bold hover:opacity-70 w-full flex justify-end items-center gap-1'
              href={'/products'}
            >
              Product details <IoIosArrowDroprightCircle size={25} />
            </LinkButton>
          </div>
        </div>
        <Image
          src={FooterLine}
          width={0}
          height={0}
          sizes='100vw'
          loading='lazy'
          className='mx-auto py-12 md:py-20 w-[50%] h-full'
          alt='Image of line break'
        />
        <div className='instant-photos md:mx-auto md:flex md:justify-between md:items-center md:gap-4'>
          <div className='image order-2 w-full pb-4 md:pb-0'>
            <Image
              src={VdayGif}
              className='mx-auto md:ml-auto md:mr-0 w-full h-[450px] object-cover object-top md:min-w-[330px] max-w-[500px]'
              width={0}
              height={0}
              sizes='100vw'
              alt='Valentine Day gif'
              loading='lazy'
            />
          </div>
          <div className='content mx-auto max-w-[500px] md:md:min-w-[300px] md:max-w-[600px]'>
            <h3 className='text-3xl md:text-5xl font-bold uppercase'>
              Instant Photos, GIFs, & Boomerangs
            </h3>
            <p className='py-4 md:text-lg tracking-wide'>
              Bring your memories to life with dynamic GIFs and boomerangs!
              Whether you're striking a pose with friends or showing off your
              dance moves at a party, our photobooth experience ensures that
              every moment is captured in a unique and unforgettable way.
            </p>
            <LinkButton
              style='text-gray-900 text-xl font-bold hover:opacity-70 flex items-center gap-1'
              href={'/products'}
            >
              Product details <IoIosArrowDroprightCircle size={25} />
            </LinkButton>
          </div>
        </div>
      </div>
      <div className='pb-12 md:pb-24'>
        <CTA />
      </div>
    </>
  );
}
