import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { GoldButton, OutlineButton } from '../components/Buttons';
import { motion } from 'framer-motion';

const Slide12CTA = ({ isActive, onInquire }) => {
  return (
    <SlideWrapper isActive={isActive} className="items-center text-center justify-center">
      <div className="w-16 h-[1px] bg-gold mb-10" />
      <EyebrowText>The Opportunity is Now</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-10">Your Brand Belongs Here.</h2>
      <p className="text-gray-text text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        Whether you're leasing a flagship space, activating a sponsorship, or booking our venues — the conversation starts here.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-16 md:mb-24 w-full max-w-xl px-6">
        <GoldButton onClick={() => onInquire("Leasing Inquiry")} className="w-full">Lease a Space</GoldButton>
        <OutlineButton onClick={() => onInquire("Partnership Inquiry")} className="w-full md:w-auto">Partner</OutlineButton>
        <OutlineButton onClick={() => onInquire("Event Booking")} className="w-full md:w-auto">Book</OutlineButton>
      </div>

      <div className="flex flex-col items-center space-y-4 px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gray-text text-center">
          <span>americandream.com</span>
          <span className="hidden md:inline text-gold">·</span>
          <span>East Rutherford, NJ</span>
          <span className="hidden md:inline text-gold">·</span>
          <span>info@americandream.com</span>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide12CTA;
