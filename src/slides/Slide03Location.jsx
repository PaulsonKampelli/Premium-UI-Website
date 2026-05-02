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
    <div className="w-full h-full flex flex-col md:flex-row">
      <SlideWrapper isActive={isActive} className="md:w-1/2 justify-center p-12 md:p-24 bg-black">
        <EyebrowText>Location & Reach</EyebrowText>
        <h2 className="headline-lg font-display text-white mb-12">At the Center of Everything</h2>
        
        <ul className="space-y-6 mb-16">
          {["Direct access from NJ Transit, I-95, NJ Turnpike", "10 minutes from Manhattan by rail", "20M+ residents within 50-mile catchment area"].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center text-white text-lg font-light"
            >
              <span className="text-gold mr-4 text-2xl">·</span>
              {item}
            </motion.li>
          ))}
        </ul>

        <div className="space-y-8">
          {demographics.map((demo, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                <span className="text-white">{demo.label}</span>
                <span className="text-gold">{demo.percentage}%</span>
              </div>
              <div className="w-full h-[6px] bg-[#1A1A1A]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${demo.percentage}%` } : { width: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                  className="h-full bg-gold"
                />
              </div>
            </div>
          ))}
        </div>
      </SlideWrapper>

      <div className="md:w-1/2 h-full relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={isActive ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/grand-entrance.png)' }}
        />
        {/* Fallback pattern if image fails */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(45deg, transparent 48%, #C9A84C10 49%, #C9A84C10 51%, transparent 52%)', backgroundSize: '40px 40px' }} />
      </div>
    </div>
  );
};

export default Slide03Location;
