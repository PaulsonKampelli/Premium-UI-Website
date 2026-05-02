import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import StatCounter from '../components/StatCounter';
import { GoldButton } from '../components/Buttons';
import { motion } from 'framer-motion';

const Slide01Opening = ({ isActive, onNext }) => {
  return (
    <SlideWrapper isActive={isActive} className="relative w-full h-full overflow-hidden flex items-center justify-center !p-0">
      {/* YouTube Background */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/grand-entrance.png)' }}
      >
        <iframe 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[120vw] h-[120vh]"
          src="https://www.youtube.com/embed/ZqvAzBGQoAc?autoplay=1&mute=1&loop=1&playlist=ZqvAzBGQoAc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        ></iframe>
        <div className="absolute inset-0 bg-black/70 z-[1]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-24">
        <EyebrowText>East Rutherford, New Jersey</EyebrowText>
        <h1 className="headline-xl font-display text-white mb-6">AMERICAN DREAM</h1>
        <p className="subheadline text-gray-text mb-12 max-w-2xl mx-auto">
          North America's Most Extraordinary Destination
        </p>
        
        <div className="mb-12">
          <StatCounter end={55000000} suffix="+" label="Annual Visitors" isActive={isActive} />
        </div>

        <GoldButton onClick={onNext}>
          Explore the Opportunity &rarr;
        </GoldButton>

        <div className="absolute bottom-12 left-12 flex flex-col items-center">
           <div className="w-[1px] h-12 bg-gold mb-4" />
           <span className="text-[10px] font-bold tracking-widest text-gold rotate-180" style={{ writingMode: 'vertical-rl' }}>
            EST. 2019
           </span>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide01Opening;
