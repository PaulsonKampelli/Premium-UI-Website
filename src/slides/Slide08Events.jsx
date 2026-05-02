import React, { useState } from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import TabGroup from '../components/TabGroup';
import { GoldButton, OutlineButton } from '../components/Buttons';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

const CaseStudyCard = ({ title, eyebrow, image, videoId, isActive, onPlay }) => (
  <div className="space-y-8">
    <div 
      className="aspect-video bg-bg-card border border-border-color group relative cursor-pointer overflow-hidden"
      onClick={() => onPlay(videoId)}
    >
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div 
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
          >
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        ) : (
          <motion.div 
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <div className="bg-gold text-black p-4 rounded-full scale-90 group-hover:scale-100 transition-transform shadow-2xl">
                <Play fill="currentColor" size={32} />
              </div>
            </div>
            <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-gold text-[10px] font-bold uppercase tracking-widest block mb-2">{eyebrow}</span>
              <h4 className="text-white font-display text-2xl">{title}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const Slide08Events = ({ isActive, onInquire }) => {
  const [showDeepDive, setShowDeepDive] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const tabs = [
    {
      label: "Live Events",
      content: "Concert-ready venues with flexible staging and capacity configurations up to 5,000. Past programming includes major brand activations, celebrity appearances, and holiday spectaculars drawing millions of visitors.",
      pills: ["5,000 Capacity", "Year-Round", "Full AV Infrastructure"]
    },
    {
      label: "Brand Activations",
      content: "Place your brand inside an experience 55 million people choose every year. Custom activation spaces from 500 to 50,000 sq ft with full production support.",
      pills: ["500–50,000 sq ft", "Full Production Support", "Social Amplification"]
    },
    {
      label: "Corporate & Expo",
      content: "Convention-scale spaces ideal for product launches, trade events, corporate summits, and large-format brand experiences. On-site hospitality and catering.",
      pills: ["Convention Scale", "On-Site Catering", "AV & Tech Ready"]
    }
  ];

  return (
    <SlideWrapper isActive={isActive} className="relative">
      <EyebrowText>Events & Programming</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-12">200+ Events a Year. One Destination.</h2>

      <div className="mb-16">
        <TabGroup tabs={tabs} />
      </div>

      <div className="flex space-x-6">
        <GoldButton onClick={() => onInquire("Venue & Event Booking")}>Book a Venue</GoldButton>
        <OutlineButton onClick={() => setShowDeepDive(true)}>View Case Studies</OutlineButton>
      </div>

      <AnimatePresence>
        {showDeepDive && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 bg-[#0A0A0A] z-[100] p-24 flex flex-col"
          >
            <button 
              onClick={() => { setShowDeepDive(false); setActiveVideo(null); }}
              className="absolute top-12 right-12 text-gray-text hover:text-white flex items-center space-x-2 uppercase tracking-widest text-xs font-bold"
            >
              <X size={20} />
              <span>Close Deep Dive</span>
            </button>

            <EyebrowText>Module: Case Studies</EyebrowText>
            <h3 className="font-display text-5xl text-white mb-16">Past Programming Highlights</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow overflow-y-auto pr-8">
              <CaseStudyCard 
                eyebrow="Concert Series"
                title="Summer Kickoff 2024"
                image="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800"
                videoId="fJ9rUzIMcZQ"
                isActive={activeVideo === 'fJ9rUzIMcZQ'}
                onPlay={setActiveVideo}
              />
              <CaseStudyCard 
                eyebrow="Brand Activation"
                title="Tesla Cyber-Hub Expo"
                image="/assets/exposition-hall.png"
                videoId="bTqVqk7FSmY" 
                isActive={activeVideo === 'bTqVqk7FSmY'}
                onPlay={setActiveVideo}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideWrapper>
  );
};

export default Slide08Events;
