'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity:0, y: 0, x: -500}}
        animate={{ opacity:1, y: 0, x: 0}}
        transition={{ type:'Spring' }}
      >
        {children}
      </motion.div>
    </>
  );
}
