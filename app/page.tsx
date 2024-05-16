import Hero from '@app/containers/home/Hero';
import ADCard from '@app/containers/home/ADCard';
import About from '@app/containers/home/About';
import Features from '@app/containers/home/Features';
import CTA from '@components/CTA';


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ADCard />
      <Features />
      <div className='pb-12 md:pb-24'>
        <CTA />
      </div>
    </>
  );
}
