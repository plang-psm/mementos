'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import LinkButton from './LinkButton';
import LINK_ARR from '@data/LinkArr';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  // Handler to toggle opening and hiding the nav menu in mobile.
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  // Function that handles resize at 768px
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    // Set up event listener
    window.addEventListener('resize', handleResize);

    // Clean up event lister
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Handles overflow based on navs state
    openNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [openNav]);

  return (
    <nav className='w-full p-6'>
      {/* Navbar */}
      <div className='flex justify-between gap-4'>
        <div className='logo'>
          <Link href={'/'}>
            <h1 className='logo text-[#B4794D] font-bold tracking-[.27em] text-2xl md:text-3xl w-100 cursor-pointer uppercase'>
              Mementos
            </h1>
          </Link>
        </div>
        {/* Mobile Hamburger menu */}
        <div className='hamburger-menu md:hidden cursor-pointer'>
          <RxHamburgerMenu size={25} onClick={() => handleNav()} />
        </div>
        {/* Desktop navbar listing */}
        <div className='desktop-nav hidden md:flex items-center'>
          <ul className='links flex items-center gap-4 md:gap-8'>
            {LINK_ARR.map(({ index, link, label }) => (
              <li key={index}>
                <Link
                  href={link}
                  className={`${
                    pathname === link
                      ? 'border-b-4 border-[#E3CCBC] cursor-pointer'
                      : 'font-light cursor-pointer'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <LinkButton
                style='py-2 px-2 lg:px-3 bg-red-600 text-white text-lg font-semibold hover:opacity-80'
                href='https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
              >
                Book
              </LinkButton>
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar mobile pop out */}
      <div
        className={
          openNav
            ? 'nav-pop-out md:hidden fixed z-50 left-0 top-0 w-full h-full bg-white transition-all text-center'
            : 'nav-pop-out md:hidden fixed left-[-100%]'
        }
      >
        <div className='nav-open p-4 flex justify-between content-center'>
          <Link href='/'>
            <h1 className='logo text-[#B4794D] tracking-[.27em] text-2xl md:text-3xl font-bold p-2 w-100 uppercase'>
              Mementos
            </h1>
          </Link>
          <TfiClose
            size={25}
            className='my-auto mx-4 cursor-pointer'
            onClick={handleNav}
          />
        </div>
        <ul className='list-links flex flex-col absolute top-[13%] right-[43%] text-xl'>
          {LINK_ARR.map(({ index, link, label }) => (
            <li key={index} onClick={handleNav} className='my-8'>
              <Link
                href={link}
                className={`${
                  pathname === link
                    ? 'border-b-4 border-[#E3CCBC] cursor-pointer'
                    : 'font-light cursor-pointer'
                } `}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <LinkButton
              style='py-2 px-2 lg:px-3 bg-red-600 text-white text-lg font-semibold hover:opacity-80'
              href='https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
            >
              Book
            </LinkButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
