import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { motion } from 'framer-motion';

const Slide03Location = ({ isActive }) => {
  const demographics = [
    { label: "Ages 18–34", percentage: 38 },
    { label: "Ages 35–54", percentage: 41 },
    { label: "Ages 55+", percentage: 21 },
    { label: "$75K+ HHI", percentage: 64 },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-[#080808]">
      <SlideWrapper isActive={isActive} className="w-full md:w-1/2 justify-center p-8 md:p-8 bg-black min-h-screen md:min-h-0">
        <EyebrowText>Location & Reach</EyebrowText>
        <h2 className="headline-lg font-display text-white mb-8 md:mb-6">At the Center of Everything</h2>
        
        <ul className="space-y-4 md:space-y-6 mb-6 md:mb-6">
          {["Direct access from NJ Transit, I-95, NJ Turnpike", "10 minutes from Manhattan by rail", "20M+ residents within 50-mile catchment area"].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-start text-white text-base md:text-lg font-light"
            >
              <span className="text-gold mr-3 md:mr-4 text-xl md:text-2xl leading-none">·</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        <div className="space-y-6 md:space-y-8 max-w-md">
          {demographics.map((demo, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
                <span className="text-white">{demo.label}</span>
                <span className="text-gold">{demo.percentage}%</span>
              </div>
              <div className="w-full h-[4px] md:h-[6px] bg-[#1A1A1A]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${demo.percentage}%` } : { width: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.3)]"
                />
              </div>
            </div>
          ))}
        </div>
      </SlideWrapper>

      <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden order-first md:order-last">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/grand-entrance.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 md:hidden" />
      </div>
    </div>
  );
};

export default Slide03Location;
