'use client';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface props {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: props, index: number) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className='max-w-[800px] mx-auto w-full mt-8 grid border-b-2'
        key={index}
      >
        <div className='py-4'>
          <div className='flex justify-between cursor-pointer items-center '>
            <h3 className='font-bold md:text-xl tracking-wide '>{question}</h3>
            <button  onClick={() => setOpen(!open)} role='button' aria-label={`${index} dropdown icon`}>
              <MdKeyboardArrowDown
                size={35}
                className={open ? 'transition rotate-180' : ''}
              />
            </button>
          </div>
          {open && (
            <p className='mt-3 text-neutral-600 md:text-lg tracking-wide'>
              {answer}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQ;
