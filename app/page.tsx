import Image from 'next/image';
import HeaderCollage from '@/public/static/HeaderCollage.svg';
import VdayGif from '@/public/static/Vday.gif';
import CustomTemplate from '@/public/static/CustomTemplate.svg';
import PhotoboothSvg from '@/public/static/PhotoboothSvg.svg';
import InstantPhotosSvg from '@/public/static/InstantPhotosSvg.svg';
import mementoslogo from '@/public/static/mementoslogo.svg';
import BottomWave3 from '@/public/static/BottomWave3.svg';
import LinkButton from '@components/LinkButton';
import FooterLine from '@/public/static/FooterLine.svg';
import AdData from '@data/AdData';
import ADList from '@components/ADList';

export default function Home() {
  return (
    <div className='bg-[#FFF1DB]'>
      <div className='header'>
        <div className='w-100 h-100 flex flex-col md:flex-row justify-center content-center  m-auto'>
          <div className='image hidden md:block md:w-[50%] '>
            <Image
              className='object-cover'
              src={HeaderCollage}
              width={1000}
              height={1000}
              alt='Header image'
              priority
            />
          </div>
          <div className='content w-100 md:w-[50%] h-full text-center pt-4 md:pt-0 md:m-auto md:px-4 bg-[url("/static/HeaderCollageLight.svg")] md:bg-none bg-top '>
            <div className='h-[400px] flex flex-col justify-center content-center px-6 '>
              <h1 className='text-[#B4794D] text-4xl sm-md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase pb-4 [text-shadow:_0_0_15px_rgb(0_0_0_/_25%)]'>
                #Mementos Photobooth
              </h1>
              <p className='font-normal pb-6 tracking-[.1em] [text-shadow:_0_0_15px_rgb(0_0_0_/_70%)]'>
                WEDDINGS • CELEBRATIONS • CORPORATE EVENTS
              </p>
              <LinkButton
            style='uppercase border py-2 px-6 hover:border-2 hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
            href={'/products'}
              >
                Book Here
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header 
      w-full flex flex-col items-center text-center justify-center md:mx-auto bg-white`}
      >
        <div className='py-12 lg:my-20 px-6'>
          <h2 className='text-3xl md:text-4xl font-extrabold uppercase tracking-[.15em]'>
            Bienvenidos
          </h2>
          {/* <h3 className='text-2xl font-semibold uppercase py-2 tracking-[.27em]'>
            Simple. Fast. Effective.
          </h3> */}
          <p className='py-2 md:text-lg max-w-[1200px] tracking-[.05em] mx-auto'>
            Here at Mementos, we promise an experience that blends authenticity,
            warmth, and excitement. Whether it's a wedding, quinceañera,
            corporate event, or birthday celebration, we're here to create
            memories that last a lifetime. With our reliable and top-notch
            quality service, Mementos is your trusted partner for unforgettable
            experiences in the heart of Los Angeles. <br />
            <span className='text-[#B4794D] text-2xl'>
              y si, hablamos espanol!
            </span>
          </p>
          <p className='pt-4 md:text-2xl tracking-[.27em] uppercase'>
            Now serving the <span className='font-bold'>Los Angeles</span> area
          </p>
          <div className='max-w-[1400px] px-6 mx-auto flex flex-row md:justify-center flex-wrap lg:flex-nowrap pb-12 pt-8 gap-4 w-full h-full text-center'>
            {AdData.map(({ img, heading, desc }, index) => {
              return (
                <ADList key={index} img={img} heading={heading} desc={desc} />
              );
            })}
          </div>
        </div>
        <Image
          src={BottomWave3}
          width={100}
          height={100}
          alt='wave image'
          className='w-full h-full p-0 m-0'
        />
      </div>
      <div className='background-ad py-12 px-6'>
        <div className='max-w-[1100px] w-full md:mx-auto'>
          <h2 className='pb-12 md:pb-20 p-4 text-3xl md:text-5xl  font-extrabold uppercase tracking-[.15em]'>
            Featured
          </h2>
          <div className='unlimited-photos md:mx-auto md:flex md:justify-between md:items-center'>
            <div className='image order-2 w-full'>
              <Image
                src={PhotoboothSvg}
                className='m-auto p-4 w-100 h-[415px] object-cover object-center min-w-[330px]'
                width={400}
                height={415}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px]'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase'>
                Unlimited Digital Photos
              </h2>
              <p className='py-4 md:text-lg tracking-wide'>
                Snap away knowing that every snapshot will be preserved
                digitally to treasure and share for years to come. Capture the
                joy of your special occasion with Mementos – where the memories
                are unlimited.
              </p>
              <LinkButton
                style='border p-2 hover:border-2  hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
                href={'/products'}
              >
                Learn More
              </LinkButton>
            </div>
          </div>
          <Image
            src={FooterLine}
            width={500}
            height={500}
            className='mx-auto py-8 md:py-20'
            alt='Image of line break'
          />
          <div className='photo-templates md:mx-auto md:flex md:justify-between md:items-center'>
            <div className='image w-full'>
              <Image
                src={CustomTemplate}
                className='m-auto p-4 w-100 h-[415px] object-cover object-center min-w-[330px]'
                width={400}
                height={415}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px] text-end'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase text-end'>
                Custom Photo Templates
              </h2>
              <p className='py-4 md:text-lg tracking-wide'>
                From corporate branding to birthday celebrations, our tailored
                templates elevate every photo, making each moment truly
                one-of-a-kind. With Mementos, your memories aren't just captured
                – they're crafted into stunning keepsakes that you'll cherish
                forever.
              </p>
              <LinkButton
                style='border p-2 hover:border-2  hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
                href={'/products'}
              >
                Learn More
              </LinkButton>
            </div>
          </div>

          <Image
            src={FooterLine}
            width={500}
            height={500}
            className='mx-auto py-8 md:py-20'
            alt='Image of line break'
          />
          <div className='instant-photos md:mx-auto md:flex md:justify-between md:items-center'>
            <div className='image order-2 w-full'>
              <Image
                src={VdayGif}
                className='m-auto p-4 w-100 h-[415px] object-cover object-center min-w-[330px]'
                width={400}
                height={415}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px]'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase'>
                Instant Photos, GIFs, & Boomerangs
              </h2>
              <p className='py-4 md:text-lg tracking-wide'>
                Bring your memories to life with dynamic GIFs and boomerangs!
                Whether you're striking a pose with friends or showing off your
                dance moves at a party, our photobooth experience ensures that
                every moment is captured in a unique and unforgettable way.
              </p>
              <LinkButton
                style='border p-2 hover:border-2  hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
                href={'/products'}
              >
                Learn More
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <Image
          src={BottomWave3}
          width={100}
          height={100}
          alt='wave image'
          className='w-full h-full p-0 m-0 rotate-180'
        />
        <div className='instagram max-w-[1100px] py-24 px-6 mx-auto'>
          <div className='profile text-center md:text-start flex flex-col md:flex-row md:items-start md:gap-4'>
            <div className='image md:'>
              <Image
                src={mementoslogo}
                width={150}
                height={150}
                alt='Mementos logo images'
                className='mx-auto'
              />
            </div>
            <div className='profile-content pb-2 md:py-2'>
              <p className='text-2xl'>@mementosbooth</p>
              <p className='py-2'>11 Posts 116 Followers 224 Following</p>
              <p>Bio</p>
            </div>
            <button className='follow my-2 border max-w-[350px] mx-auto md:mr-0 p-2'>
              Follow
            </button>
          </div>
          <div className='grid-images py-4 grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-8'>
            <div className='image'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto'
                width={350}
                height={350}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='image'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto'
                width={350}
                height={350}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='image'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto'
                width={350}
                height={350}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='image'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto'
                width={350}
                height={350}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='image'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto'
                width={350}
                height={350}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='image'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto'
                width={350}
                height={350}
                alt='Photobooth image'
                priority
              />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <LinkButton
              href='/gallery'
              style='border p-2 hover:border-2  hover:border-[#B4794D] hover:opacity-50 text-white bg-[#B4794D]'
            >
              Show more
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
