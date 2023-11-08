'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import BackgroundImage from './backgroundImage';


const AnimationLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <AnimatePresence>
      <header>
        <Navbar />
      </header>
      <main>

      </main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>

        {children}

      </motion.div>
      <aside>
        <BackgroundImage />
      </aside>
    </AnimatePresence>
  );
}

export default AnimationLayout;