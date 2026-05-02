import React, { useState } from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { AttractionCard } from '../components/Cards';
import { GoldButton, OutlineButton } from '../components/Buttons';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const Slide07Attractions = ({ isActive, onInquire }) => {
  const [showVideo, setShowVideo] = useState(false);

  const attractions = [
    {
      icon: "🎢",
      title: "Nickelodeon Universe",
      stat: "35+ Rides",
      body: "Largest indoor theme park in the Western Hemisphere"
    },
    {
      icon: "🌊",
      title: "DreamWorks Water Park",
      stat: "40+ Slides",
      body: "Largest indoor water park in North America"
    },
    {
      icon: "⛷",
      title: "Big SNOW",
      stat: "Only One in N. America",
      body: "The only indoor real-snow ski slope in North America"
    },
    {
      icon: "🐠",
      title: "SEA LIFE Aquarium",
      stat: "Immersive",
      body: "Walk-through marine experience for all ages"
    },
    {
      icon: "🏒",
      title: "NHL Ice Rink",
      stat: "NHL Regulation",
      body: "Year-round skating, events, and hockey programming"
    },
    {
      icon: "🎡",
      title: "Observation Wheel",
      stat: "360° Views",
      body: "Iconic indoor wheel with views across the entire property"
    }
  ];

  return (
    <SlideWrapper isActive={isActive} className="relative">
      <EyebrowText>Attractions & Entertainment</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-6">No Mall on Earth Competes With This</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-6 md:mb-6">
        {attractions.map((attr, i) => (
          <AttractionCard key={i} {...attr} index={i} />
        ))}
      </div>

      <div className="flex space-x-6">
        <GoldButton onClick={() => setShowVideo(true)} className="flex items-center space-x-2">
          <Play size={16} fill="currentColor" />
          <span>Experience the Energy</span>
        </GoldButton>
        <OutlineButton onClick={() => onInquire("Attractions Partnership")}>Partner with Us</OutlineButton>
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 z-[200] flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-12 right-12 text-white/50 hover:text-white flex items-center space-x-2 uppercase tracking-widest text-xs font-bold"
            >
              <X size={20} />
              <span>Close Video</span>
            </button>
            <div className="w-full max-w-6xl aspect-video bg-black shadow-2xl border border-white/10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/_2j9eHP8yXg?autoplay=1&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideWrapper>
  );
};

export default Slide07Attractions;
