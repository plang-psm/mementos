'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  style?: string;
  tab?: string;
}

const LinkButton = ({ style, href, children, tab }: LinkButtonProps) => {
  return (
    <Link href={href} target={tab}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={style}
      >
        {children}
      </motion.button>
    </Link>
  );
};

export default LinkButton;
