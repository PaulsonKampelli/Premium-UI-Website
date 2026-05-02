import React from 'react';
import SlideWrapper from '../components/SlideWrapper';
import EyebrowText from '../components/EyebrowText';
import { OutlineButton } from '../components/Buttons';
import { motion } from 'framer-motion';

const Slide04Retail = ({ isActive, onInquire }) => {
  const categories = [
    {
      title: "Luxury Flagship",
      body: "Join Hermès, Dior, and Saks in the most premium retail corridor in the Northeast",
      modal: "Luxury Leasing Inquiry"
    },
    {
      title: "Flagship & Mid-Tier",
      body: "High-traffic anchor zones with Nike, Zara, Uniqlo, H&M, and Primark",
      modal: "Retail Leasing Inquiry"
    },
    {
      title: "Pop-Up & Experiential",
      body: "Short-term, high-impact activations in premium footfall corridors",
      modal: "Pop-Up Leasing Inquiry"
    }
  ];

  return (
    <SlideWrapper isActive={isActive}>
      <EyebrowText>Retail Leasing</EyebrowText>
      <h2 className="headline-lg font-display text-white mb-16">450+ Brands. Room for Yours.</h2>

      <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20 overflow-x-auto pb-4 snap-x custom-scrollbar w-full">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="bg-bg-card border border-border-color p-6 md:p-10 flex flex-col items-start h-full group hover:border-gold transition-colors cursor-pointer min-w-[280px] md:min-w-0 shrink-0 snap-center"
            onClick={() => onInquire(cat.modal)}
          >
            <h3 className="font-display text-xl md:text-2xl text-white mb-4 md:mb-6 tracking-wide group-hover:text-gold transition-colors">{cat.title}</h3>
            <p className="text-gray-text text-xs md:text-base leading-relaxed mb-6 md:mb-10 flex-grow">
              {cat.body}
            </p>
            <OutlineButton onClick={(e) => { e.stopPropagation(); onInquire(cat.modal); }}>Inquire</OutlineButton>
          </motion.div>
        ))}
      </div>

      <div className="bg-gold p-6 w-full flex flex-col md:flex-row justify-between items-center text-black font-bold uppercase tracking-widest text-[11px] md:text-sm">
        <span>Avg. Dwell Time: 4.2 hrs</span>
        <span className="hidden md:block">·</span>
        <span>Repeat Visit Rate: 68%</span>
        <span className="hidden md:block">·</span>
        <span>3.1× Conversion vs. Regional Mall Average</span>
      </div>
    </SlideWrapper>
  );
};

export default Slide04Retail;
