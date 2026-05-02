import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import StatCounter from '../components/StatCounter';
import { motion } from 'framer-motion';

const Slide02Scale = ({ isActive }) => {
  const stats = [
    { end: 3.5, suffix: "M", label: "Square Feet" },
    { end: 55, suffix: "M+", label: "Annual Visitors" },
    { end: 450, suffix: "+", label: "Brands & Retailers" },
    { end: 5, suffix: "B", prefix: "$", label: "Total Investment" }
  ];

  return (
    <SlideWrapper isActive={isActive} className="items-center text-center">
      <EyebrowText>By the Numbers</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-20">Built for a Different League</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-6xl mx-auto mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <StatCounter {...stat} isActive={isActive} />
          </motion.div>
        ))}
      </div>

      <p className="text-gray-text text-sm tracking-wide max-w-3xl mx-auto border-t border-border-color pt-12">
        10 miles from Manhattan · 20M people within 50 miles · #1 most visited destination in the United States
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold/30" />
    </SlideWrapper>
  );
};

export default Slide02Scale;
