import Image from 'next/image';
import HeaderSvg from '@/public/static/HeaderSvg.svg';
import PhotoboothSvg from '@/public/static/PhotoboothSvg.svg';
import InstantPhotosSvg from '@/public/static/InstantPhotosSvg.svg';
import TemplateSvg from '@/public/static/TemplateSvg.svg';
import mementoslogo from '@/public/static/mementoslogo.svg';
import LinkButton from '@components/LinkButton';
import FooterLine from '@/public/static/FooterLine.svg';
import BottomWave3 from '@/public/static/BottomWave3.svg';
import BottomWave4 from '@/public/static/BottomWave4.svg';
import TopWave1 from '@/public/static/TopWave1.svg';
import TopWave2 from '@/public/static/TopWave2.svg';

export default function Home() {
  return (
    <div className='bg-[#FFF1DB]'>
      <div className='header w-full px-8'>
        <div className='background '>
          <div className='max-w-[1100px] md:mx-auto md:flex md:justify-around md:items-center md:py-40'>
            <div className='image p-4'>
              <Image
                className='m-auto'
                src={HeaderSvg}
                width={600}
                height={600}
                alt='Header image'
                priority
              />
            </div>
            <div className='content text-center'>
              <h1 className='text-[#B4794D] text-4xl md:text-6xl font-extrabold uppercase py-4'>
                #Mementos Photobooth
              </h1>
              <p className='font-extralight pb-4 tracking-[.1em]'>
                WEDDINGS • CELEBRATIONS • CORPORATE EVENTS
              </p>
              <LinkButton
                style='border p-2 border-2 border-black hover:border-[#B4794D] hover:opacity-70 hover:text-white hover:bg-[#B4794D]'
                href={'/pricing'}
              >
                Book Here
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <div className='header w-full flex flex-col items-center text-center justify-center md:mx-auto bg-white'>
        <Image
          src={TopWave2}
          width={100}
          height={100}
          alt='wave image'
          className='w-full h-full p-0 m-0'
        />
        <div className='py-12 md:my-20 px-6'>
          <h2 className='text-3xl md:text-4xl font-extrabold uppercase tracking-[.15em]'>
            Our Promise
          </h2>
          <h3 className='text-2xl font-semibold uppercase py-2 tracking-[.27em]'>
            Simple. Fast. Effective.
          </h3>
          <p className='py-2 md:text-lg max-w-[600px] mx-auto'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. <br />
            <span className='text-[#B4794D] text-2xl'>
              y si, hablamos espanol!
            </span>
          </p>
          <p className='pt-4 md:text-xl tracking-[.27em] uppercase'>
            Now serving the <span className='font-bold'>Los Angeles</span> area
          </p>
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
            <div className='image order-2'>
              <Image
                src={PhotoboothSvg}
                className='m-auto p-4 min-w-[330px]'
                width={400}
                height={400}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px]'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase'>
                Unlimited Digital Photos
              </h2>
              <p className='py-4 md:text-lg tracking-wide'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <LinkButton
                style='border p-2 border-2 border-black hover:border-[#B4794D] hover:opacity-70 hover:text-white hover:bg-[#B4794D]'
                href={'/pricing'}
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
            <div className='image'>
              <Image
                src={TemplateSvg}
                className='m-auto p-4 min-w-[330px]'
                width={400}
                height={400}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px] text-end'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase text-end'>
                Custom Photo Templates
              </h2>
              <p className='py-4 md:text-lg tracking-wide'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <LinkButton
                style='border p-2 border-2 border-black hover:border-[#B4794D] hover:opacity-70 hover:text-white hover:bg-[#B4794D]'
                href={'/pricing'}
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
            <div className='image order-2'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto p-4 min-w-[330px]'
                width={400}
                height={400}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px]'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase'>
                Instant Photos, GIFs, & Boomerangs
              </h2>
              <p className='py-4 md:text-lg tracking-wide'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <LinkButton
                style='border p-2 border-2 border-black hover:border-[#B4794D] hover:opacity-70 hover:text-white hover:bg-[#B4794D]'
                href={'/pricing'}
              >
                Learn More
              </LinkButton>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <Image
          src={TopWave1}
          width={100}
          height={100}
          alt='wave image'
          className='w-full h-full p-0 m-0'
        />

        <div className='instagram max-w-[1100px] py-12 px-6 mx-auto'>
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
              style='border p-2 border-2 border-black hover:border-[#B4794D] hover:opacity-70 hover:text-white hover:bg-[#B4794D]'
            >
              Show more
            </LinkButton>
          </div>
        </div>
        <Image
          src={BottomWave4}
          width={100}
          height={100}
          alt='wave image'
          className='w-full h-full p-0 m-0'
        />
      </div>
      <div className='contact bg-[#FBF7F3]'>
        <div className='image'></div>
        <div className='contact-form'></div>
      </div>
    </div>
  );
}
