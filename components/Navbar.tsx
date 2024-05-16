'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import LinkButton from './LinkButton';
import LINK_ARR from '@data/LinkArr';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const pathname = usePathname();

  // Handler to toggle opening and hiding the nav menu in mobile.
  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  // Function that handles resize at 768px
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNavIsOpen(false);
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
    navIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [navIsOpen]);

  // Defualt animation settings for navbar pop out
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.nav
      initial='hidden'
      animate={navIsOpen ? 'visible' : 'hidden'}
      className='w-full p-6'
    >
      {/* Navbar */}
      <div className='flex justify-between gap-4'>
        <div className='logo'>
          <LinkButton href={'/'}>
            <h1 className='logo text-[#B4794D] font-bold tracking-[.27em] text-2xl md:text-3xl w-100 cursor-pointer uppercase'>
              Mementos
            </h1>
          </LinkButton>
        </div>
        {/* Mobile Hamburger menu */}
        <div className='hamburger-menu md:hidden cursor-pointer'>
          {navIsOpen ? (
            <TfiClose
              size={25}
              className='my-auto cursor-pointer'
              onClick={() => setNavIsOpen(false)}
            />
          ) : (
            <RxHamburgerMenu size={25} onClick={() => setNavIsOpen(true)} />
          )}
        </div>
        {/* Desktop nav bar */}
        <div className='desktop-nav hidden md:flex items-center'>
          <ul className='links flex items-center gap-4 md:gap-8'>
            {LINK_ARR.map(({ index, link, label }) => (
              <li key={index}>
                <LinkButton
                  href={link}
                  style={`${
                    pathname === link
                      ? 'border-b-4 border-[#E3CCBC] cursor-pointer'
                      : 'font-light cursor-pointer'
                  }`}
                >
                  {label}
                </LinkButton>
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
      {/* Mobile navbar listing */}
      {navIsOpen && (
        <div className='nav-pop-out mt-20 w-full h-screen bg-white'>
          <motion.ul
            initial='hidden'
            animate='visible'
            transition={{ staggerChildren: 0.1 }}
            className='list-links flex flex-col justify-center items-center text-xl'
          >
            {LINK_ARR.map(({ index, link, label }) => (
              <motion.li
                variants={defaultAnimations}
                key={index}
                onClick={handleNav}
                className='my-8'
              >
                <LinkButton
                  href={link}
                  style={`${
                    pathname === link
                      ? 'border-b-4 border-[#E3CCBC] cursor-pointer'
                      : 'font-light cursor-pointer'
                  } `}
                >
                  {label}
                </LinkButton>
              </motion.li>
            ))}
            <motion.li variants={defaultAnimations}>
              {' '}
              <LinkButton
                style='py-2 px-2 mt-8 lg:px-3 bg-red-600 text-white text-lg font-semibold hover:opacity-80'
                href='https://book.usesession.com/i/QXUI37JLqa/session-type/155499'
              >
                Book
              </LinkButton>
            </motion.li>
          </motion.ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
