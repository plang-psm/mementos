'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import LinkButton from './LinkButton';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  // Dynamic link array
  const LINK_ARR = [
    {
      index: 0,
      label: 'Home',
      link: '/',
    },
    {
      index: 1,
      label: 'About',
      link: '/about',
    },
    {
      index: 2,
      label: 'Pricing',
      link: '/pricing',
    },
    {
      index: 3,
      label: 'Gallery',
      link: '/gallery',
    },
    {
      index: 4,
      label: 'Contact',
      link: '/#contact',
    },
  ];

  // Handler to toggle opening and hiding the nav menu in mobile.
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className='w-full p-6'>
      {/* Navbar */}
      <div className='flex justify-between'>
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
            <LinkButton
              style='border p-2 border-2 border-black hover:border-[#B4794D] hover:opacity-70 hover:text-white hover:bg-[#B4794D]'
              href='/'
            >
              Book
            </LinkButton>
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
          <LinkButton
            style='my-8 border p-2 border-2 border-black hover:border-[#B4794D] hover:opacity-70 hover:text-white hover:bg-[#B4794D]'
            href='/'
          >
            Book
          </LinkButton>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
