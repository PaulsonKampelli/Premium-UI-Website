import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { GoldButton } from '../components/Buttons';
import { motion } from 'framer-motion';

const Slide05Luxury = ({ isActive, onInquire }) => {
  const brands = ["Hermès", "Dior", "Saks Fifth Avenue", "Versace"];

  return (
    <SlideWrapper isActive={isActive} className="items-center text-center">
      <div className="w-20 h-[1px] bg-gold mb-12" />
      <EyebrowText>The Luxury District</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-8 italic">
        Where the World's Most Iconic Brands Choose to Grow
      </h2>
      <p className="text-gray-text text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
        A curated luxury corridor designed to rival Madison Avenue — with 55 million annual visitors as your captive audience.
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-6xl mx-auto mb-12 md:mb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="w-full md:w-1/2 aspect-video bg-bg-card border border-gold overflow-hidden"
        >
          <img 
            src="/assets/luxury-corridor.png" 
            alt="Luxury Corridor" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        
        <div className="w-full md:w-1/2 text-left space-y-6 md:space-y-8">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="border border-gold/30 px-4 md:px-6 py-2 text-white text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] bg-white/5"
              >
                {brand}
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 md:mb-4 text-gold">Premium Positioning</h4>
              <p className="text-gray-text text-sm leading-relaxed mb-4">
                Our luxury corridor is a curated ecosystem where brand equity is protected by strict category exclusivity.
              </p>
              <ul className="space-y-2 text-gray-text text-xs md:text-sm leading-relaxed">
                <li className="flex items-start"><span className="text-gold mr-3">·</span> Dedicated luxury concierge services</li>
                <li className="flex items-start"><span className="text-gold mr-3">·</span> Private VIP shopping suites</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <GoldButton onClick={() => onInquire("Luxury Leasing Inquiry")}>
        Inquire About Luxury Leasing
      </GoldButton>
    </SlideWrapper>
  );
};

export default Slide05Luxury;
