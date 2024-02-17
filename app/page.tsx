import Image from 'next/image';
import HeaderSvg from '@/public/assets/HeaderSvg.svg';
import PhotoboothSvg from '@/public/assets/PhotoboothSvg.svg';
import Button from '@components/LinkButton';
import LinkButton from '@components/LinkButton';

export default function Home() {
  return (
    <>
      <div className='header p-4'>
        <div className='background bg-[#FBF7F3]'>
          <div className='image p-4'>
            <Image
              className='m-auto'
              src={HeaderSvg}
              width={350}
              height={350}
              alt='Header image'
              priority
            />
          </div>
          <div className='content text-center p-4'>
            <h1 className='text-2xl tracking-[.27em]'>
              Capture your <br />{' '}
              <span className='text-2xl text-[#B4794D]'>#MEMENTOS</span> <br />{' '}
              with us
            </h1>
            <p className='font-extralight py-4 tracking-[.1em]'>
              WEDDINGS • CELEBRATIONS • CORPORATE EVENTS
            </p>
            <LinkButton 
              bgColor={'#C89A77'}
              textColor={'white'}
              href={'/pricing'}
            >Book Here</LinkButton>
            {/* <button className='border border-[#C89A77] p-2 bg-[#C89A77] text-white hover:opacity-70'>
              Book Here
            </button> */}
          </div>
        </div>
      </div>
      <div className='header text-center p-4'>
        <h2 className='text-2xl font-bold uppercase'>Our Promise</h2>
        <h3 className='text-lg font-semibold uppercase py-2'>
          Simple. Fast. Effective.
        </h3>
        <p className='py-2'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. <br />
          <span className='text-[#B4794D]'>y si, hablamos espanol!</span>
        </p>
        <p className='pt-4 tracking-[.27em] uppercase'>
          Now serving the <span className='font-bold'>Los Angeles</span> area
        </p>
      </div>
      <div className='background-ad p-4 bg-[#FBF7F3]'>
        {/* <div className='ads'> */}
          <div className='unlimited-photos'>
            <div className='image'></div>
            <div className='content'>
              <h2 className='text-2xl font-bold uppercase'>Unlimited Digital Photos</h2>
              <p className=''>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className='photo-templates'>
            {' '}
            <div className='image order-1'></div>
            <div className='content'>Desc</div>
          </div>
          <div className='instant-photos'>
            {' '}
            <div className='image'></div>
            <div className='content'>Desc</div>
          </div>
        {/* </div> */}
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
