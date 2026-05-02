import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import StatCounter from '../components/StatCounter';
import { GoldButton } from '../components/Buttons';

const Slide01Opening = ({ isActive, onNext }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#080808]">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/assets/grand-entrance.png)' }}
        />
        {/* Video Background */}
        <iframe 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[120vw] h-[120vh] opacity-80 scale-110 pointer-events-none z-10"
          src="https://www.youtube.com/embed/Z6f7v8_m4Sg?autoplay=1&mute=1&loop=1&playlist=Z6f7v8_m4Sg&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/80 z-30" />
      </div>

      {/* Content Layer */}
      <SlideWrapper isActive={isActive} className="relative flex flex-col items-center text-center justify-center h-full px-6">
        <EyebrowText>East Rutherford, New Jersey</EyebrowText>
        <h1 className="headline-xl font-display text-white mb-4 md:mb-6 leading-tight">AMERICAN DREAM</h1>
        <p className="subheadline text-gray-text mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          North America's Most Extraordinary Destination
        </p>
        
        <div className="mb-8 md:mb-12">
          <StatCounter end={55000000} suffix="+" label="Annual Visitors" isActive={isActive} />
        </div>

        <GoldButton onClick={onNext} className="px-12 py-5 text-lg">
          Explore the Opportunity &rarr;
        </GoldButton>

        <div className="hidden md:flex absolute bottom-12 left-12 flex-col items-center">
           <div className="w-[1px] h-12 bg-gold mb-4" />
           <span className="text-[10px] font-bold tracking-widest text-gold rotate-180" style={{ writingMode: 'vertical-rl' }}>
            EST. 2019
           </span>
        </div>
      </SlideWrapper>
    </div>
  );
};

export default Slide01Opening;
