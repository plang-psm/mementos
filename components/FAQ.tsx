import React from 'react';
import FaqData from '@data/FaqData';

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
            <div className='py-5'>
              <details className='group'>
                <summary className='flex cursor-pointer list-none items-center justify-between'>
                  <span>{question}</span>
                  <span className='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shapeRendering='geometricPrecision'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      width='24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
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
