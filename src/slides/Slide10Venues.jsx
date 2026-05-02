import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { GoldButton } from '../components/Buttons';
import { motion } from 'framer-motion';

const Slide10Venues = ({ isActive, onInquire }) => {
  return (
    <SlideWrapper isActive={isActive}>
      <EyebrowText>Signature Venues</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-8 md:mb-16">Every Event Has Its Stage</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex-grow md:max-h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-bg-card border border-border-color flex flex-col hover:border-gold transition-colors overflow-hidden"
        >
          <div className="h-48 overflow-hidden">
            <img src="/assets/concert-venue.png" alt="Performing Arts Center" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="p-6 md:p-10 flex flex-col flex-grow">
            <EyebrowText className="mb-2">Venue One</EyebrowText>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4 md:mb-6">Performing Arts Center</h3>
            <p className="text-gray-text mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
              Flexible staging for concerts, award shows, fashion events, and corporate spectacles.
            </p>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow text-xs md:text-[13px]">
              <li className="flex items-center text-white"><span className="text-gold mr-3">·</span> Configurable capacity: 500–5,000</li>
              <li className="flex items-center text-white"><span className="text-gold mr-3">·</span> Full fly-rigging and backstage facilities</li>
              <li className="flex items-center text-white"><span className="text-gold mr-3">·</span> Broadcast-ready AV infrastructure</li>
            </ul>
            <GoldButton onClick={() => onInquire("Performing Arts Center Booking")}>Book This Venue</GoldButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-bg-card border border-border-color flex flex-col hover:border-gold transition-colors overflow-hidden"
        >
          <div className="h-48 overflow-hidden">
            <img src="/assets/exposition-hall.png" alt="Exposition Center" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="p-6 md:p-10 flex flex-col flex-grow">
            <EyebrowText className="mb-2">Venue Two</EyebrowText>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4 md:mb-6">Exposition Center</h3>
            <p className="text-gray-text mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
              Convention-scale floor space for trade shows, product launches, and large-format brand experiences.
            </p>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow text-xs md:text-[13px]">
              <li className="flex items-center text-white"><span className="text-gold mr-3">·</span> Flexible open floor: up to 100,000 sq ft</li>
              <li className="flex items-center text-white"><span className="text-gold mr-3">·</span> Drive-in load access</li>
              <li className="flex items-center text-white"><span className="text-gold mr-3">·</span> Integrated lighting grid</li>
            </ul>
            <GoldButton onClick={() => onInquire("Exposition Center Booking")}>Book This Venue</GoldButton>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};

export default Slide10Venues;
