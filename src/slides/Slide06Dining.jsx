import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { motion } from 'framer-motion';

const Slide06Dining = ({ isActive }) => {
  const columns = [
    {
      icon: "🍽",
      number: "100+",
      label: "Dining Concepts",
      body: "Celebrity chefs, international food halls, and premium bars",
      bg: "#0F0F0F"
    },
    {
      icon: "⭐",
      number: "30%",
      label: "Return Visits Driven by F&B",
      body: "Dining is the #1 driver of repeat visits to the property",
      bg: "#141414"
    },
    {
      icon: "🥂",
      number: "2×",
      label: "Longer Dwell Near Dining",
      body: "Guests stay twice as long in F&B zones vs. retail-only areas",
      bg: "#0F0F0F"
    }
  ];

  return (
    <div className="w-full h-full relative overflow-y-auto md:overflow-hidden flex flex-col bg-[#080808]">
      <div className="relative md:absolute top-0 md:top-20 left-0 right-0 z-10 text-center pt-24 md:pt-10 px-6">
        <EyebrowText>Dining & Lifestyle</EyebrowText>
        <h2 className="headline-lg font-display text-white">Beyond the Food Court</h2>
      </div>

      <div className="flex flex-col md:flex-row flex-grow mt-12 md:mt-32 min-h-screen md:min-h-0">
        {columns.map((col, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={isActive ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            style={{ backgroundColor: col.bg }}
            className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12 overflow-hidden py-16 md:py-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="text-4xl md:text-5xl mb-4 md:mb-8">{col.icon}</div>
              <div className="text-gold font-display font-bold text-5xl md:text-7xl mb-1 md:mb-2 leading-none">
                {col.number}
              </div>
              <div className="text-white text-[10px] md:text-sm uppercase tracking-widest font-bold mb-2 md:mb-4 px-4">
                {col.label}
              </div>
              <p className="text-gray-text text-xs md:text-sm leading-relaxed max-w-[250px] mx-auto">
                {col.body}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slide06Dining;
