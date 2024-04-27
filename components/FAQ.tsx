import React from 'react';
import FaqData from '@data/FaqData';
import { MdKeyboardArrowDown } from "react-icons/md";

interface props {
  question: string;
  answer: string;
}

const FAQ = () => {
  return (
    <>
      {FaqData.map(({ question, answer }: props, index: number) => {
        return (
          <div
            className='max-w-[800px] mx-auto w-full mt-8 grid divide-y border-b-2 divide-neutral-200'
            key={index}
          >
            <div className='py-4'>
              <details className='group'>
                <summary className='flex cursor-pointer list-none items-center justify-between'>
                  <span className='font-bold md:text-xl tracking-wide '>{question}</span>
                  <span className='transition group-open:rotate-180'>
                    <MdKeyboardArrowDown size={35} />
                  </span>
                </summary>
                <p className='mt-3 text-neutral-600 md:text-lg tracking-wide'>
                  {answer}
                </p>
              </details>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FAQ;
