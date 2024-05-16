'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  active: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  style?: string;
  selectTab: () => void;
}

const FilterButton = ({ active, style, children, selectTab }: Props) => {
  const btnClasses = active ? 'bg-red-600 !text-white' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`${style} bg-[#101720] md:bg-white `}
      onClick={selectTab}
    >
      <p
        className={`text-xl px-4 py-2 ${btnClasses} text-white md:text-black hover:-translate-y-1`}
      >
        {children}
      </p>
    </motion.button>
  );
};

export default FilterButton;
