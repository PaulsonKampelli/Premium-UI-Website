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

      <div className="flex flex-col md:flex-row gap-6 mb-24">
        <GoldButton onClick={() => onInquire("Leasing Inquiry")}>Lease a Space</GoldButton>
        <OutlineButton onClick={() => onInquire("Partnership Inquiry")}>Become a Partner</OutlineButton>
        <OutlineButton onClick={() => onInquire("Event Booking")}>Book an Event</OutlineButton>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-text">
          <span>americandream.com</span>
          <span className="text-gold">·</span>
          <span>East Rutherford, NJ</span>
          <span className="text-gold">·</span>
          <span>info@americandream.com</span>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide12CTA;
