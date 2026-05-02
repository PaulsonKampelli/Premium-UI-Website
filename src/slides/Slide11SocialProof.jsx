import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { motion } from 'framer-motion';

const Slide11SocialProof = ({ isActive }) => {
  const brands = [
    "Nike", "Hermès", "Uniqlo",
    "H&M", "Primark", "Zara",
    "Saks Fifth", "Dior", "Versace",
    "Nickelodeon", "Dreamworks", "Sea Life"
  ];

  const stats = [
    { value: "#1", label: "Most Visited Destination in the US" },
    { value: "Top 5", label: "Largest Malls Worldwide" },
    { value: "$5B", label: "Total Development Investment" }
  ];

  return (
    <SlideWrapper isActive={isActive} className="items-center text-center">
      <EyebrowText>Trusted by the World's Leading Brands</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-8 md:mb-20">The Brands That Chose American Dream</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-8 md:gap-x-20 mb-12 md:mb-24 max-w-5xl px-4">
        {brands.map((brand, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="text-gray-text hover:text-white transition-colors cursor-default font-inter font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-lg md:text-3xl"
          >
            {brand}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl border-t border-border-color pt-8 md:pt-16 px-8 gap-8 md:gap-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-gold font-display font-bold text-3xl md:text-4xl mb-1 md:mb-2">{stat.value}</span>
            <span className="text-gray-text text-[8px] md:text-[10px] uppercase tracking-widest font-bold max-w-[150px]">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center">
        <div className="w-12 h-[1px] bg-gold mb-4" />
        <p className="text-[10px] text-gray-text uppercase tracking-widest">
          Recognized by Forbes, CNN Travel, and TIME as a landmark destination
        </p>
      </div>
    </SlideWrapper>
  );
};

export default Slide11SocialProof;
