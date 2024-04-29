'use client';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface props {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: props, index: number) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div
        className='max-w-[800px] mx-auto w-full mt-8 grid border-b-2'
        key={index}
      >
        <div className='py-4'>
          <button
            id={`${index}-accordion-button`}
            aria-expanded={isExpanded}
            aria-controls={`${index}-accordion-panel`}
            aria-label={question}
            onClick={() => setIsExpanded(!isExpanded)}
            className='flex justify-between cursor-pointer items-center w-full'
          >
            <h3 className='font-bold md:text-xl tracking-wide'>{question}</h3>

            <MdKeyboardArrowDown
              size={35}
              className={isExpanded ? 'transition rotate-180' : ''}
            />
          </button>
        </div>
        {isExpanded && (
          <section
            id={`${index}-accordion-panel`}
            aria-labelledby={`${index}-accordion-button`}
            aria-label={answer}
          >
            <p className='mt-3 text-neutral-600 md:text-lg tracking-wide'>
              {answer}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default FAQ;
