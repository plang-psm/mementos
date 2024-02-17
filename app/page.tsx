import Image from 'next/image';
import HeaderSvg from '@/public/assets/HeaderSvg.svg';
import PhotoboothSvg from '@/public/assets/PhotoboothSvg.svg';
import InstantPhotosSvg from '@/public/assets/InstantPhotosSvg.svg';
import TemplateSvg from '@/public/assets/TemplateSvg.svg';
import LinkButton from '@components/LinkButton';
import FooterLine from '@/public/assets//FooterLine.svg';

export default function Home() {
  return (
    <>
      <div className='header w-full'>
        <div className='background py-12 bg-[#FBF7F3]'>
          <div className='max-w-[1200px] md:mx-auto md:flex md:justify-around md:items-center'>
            <div className='image p-4 md:order-2'>
              <Image
                className='m-auto border'
                src={HeaderSvg}
                width={500}
                height={500}
                alt='Header image'
                priority
              />
            </div>
            <div className='content text-center p-4'>
              <h1 className='text-4xl md:text-4xl md:leading-[1.2] tracking-[.27em]'>
                Capture your <br />{' '}
                <span className='text-[#B4794D]'>#MEMENTOS</span>{' '}
                <br /> with us
              </h1>
              <p className='font-extralight py-4 tracking-[.1em]'>
                WEDDINGS • CELEBRATIONS • CORPORATE EVENTS
              </p>
              <LinkButton
                style='border p-2 text-white bg-[#C89A77] hover:opacity-70'
                href={'/pricing'}
              >
                Book Here
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <div className='header text-center py-12 md:py-20 px-6 max-w-[700px] md:mx-auto '>
        <h2 className='text-3xl md:text-4xl font-extrabold uppercase tracking-[.15em]'>
          Our Promise
        </h2>
        <h3 className='text-2xl font-semibold uppercase py-2 tracking-[.27em]'>
          Simple. Fast. Effective.
        </h3>
        <p className='py-2 md:text-lg'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. <br />
          <span className='text-[#B4794D]'>y si, hablamos espanol!</span>
        </p>
        <p className='pt-4 md:text-xl tracking-[.27em] uppercase'>
          Now serving the <span className='font-bold'>Los Angeles</span> area
        </p>
      </div>
      <div className='background-ad py-6 px-6 bg-[#FBF7F3]'>
        <div className='max-w-[1200px] w-full md:mx-auto'>
          <div className='unlimited-photos md:mx-auto md:flex md:justify-around md:items-center'>
            <div className='image order-2'>
              <Image
                src={PhotoboothSvg}
                className='m-auto p-4'
                width={500}
                height={500}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px]'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase'>
                Unlimited Digital Photos
              </h2>
              <p className='py-2 md:text-lg'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <LinkButton
                style='border p-2 text-white bg-[#C89A77] hover:opacity-70'
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

          <div className='photo-templates md:mx-auto md:flex md:justify-around md:items-center'>
            <div className='image'>
              <Image
                src={TemplateSvg}
                className='m-auto p-4'
                width={500}
                height={500}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px] text-end'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase text-end'>
                Customer Photo Templates
              </h2>
              <p className='py-2 md:text-lg'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <LinkButton
                style='border p-2 text-white bg-[#C89A77] hover:opacity-70'
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

          <div className='instant-photos md:mx-auto md:flex md:justify-around md:items-center'>
            <div className='image order-2'>
              <Image
                src={InstantPhotosSvg}
                className='m-auto p-4'
                width={500}
                height={500}
                alt='Photobooth image'
                priority
              />
            </div>
            <div className='content p-4 max-w-[600px]'>
              <h2 className='text-3xl md:text-5xl font-bold uppercase'>
                Instant Photos, GIFs, & Boomerangs
              </h2>
              <p className='py-2 md:text-lg'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <LinkButton
                style='border p-2 text-white bg-[#C89A77] hover:opacity-70'
                href={'/pricing'}
              >
                Learn More
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <div className='package-guide'></div>
      <div className='instagram'></div>
      <div className='contact bg-[#FBF7F3]'>
        <div className='image'></div>
        <div className='contact-form'></div>
      </div>
    </>
  );
}
