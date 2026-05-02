import React from 'react';
import { motion } from 'framer-motion';

const SlideWrapper = ({ children, className = "", isActive = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`slide-wrapper flex flex-col justify-start md:justify-center p-4 md:p-6 lg:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SlideWrapper;
