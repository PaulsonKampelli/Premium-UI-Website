import React from 'react';
import { motion } from 'framer-motion';

export const AttractionCard = ({ icon, title, stat, body, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-bg-card border-t-[3px] border-gold p-4 md:p-6 flex flex-col items-start space-y-2 md:space-y-4 hover:border-white transition-colors cursor-default"
    >
      <div className="text-2xl md:text-3xl">{icon}</div>
      <h3 className="font-display text-base md:text-xl text-white tracking-wide uppercase">{title}</h3>
      <div className="text-gold font-bold text-sm md:text-lg uppercase tracking-widest">{stat}</div>
      <p className="text-gray-text text-[10px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">{body}</p>
    </motion.div>
  );
};

export const TierCard = ({ title, badge, points, buttonText, onInquire, highlight = false }) => {
  return (
    <div className={`bg-bg-card border p-4 md:p-8 flex flex-col h-full ${highlight ? 'border-gold shadow-[0_0_15px_rgba(201,168,76,0.15)]' : 'border-border-color'}`}>
      {badge && (
        <div className="bg-gold text-black text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:py-1 mb-2 md:mb-4 w-fit uppercase tracking-tighter">
          {badge}
        </div>
      )}
      <h3 className="font-display text-base md:text-2xl text-white mb-3 md:mb-6 tracking-wide">{title}</h3>
      <ul className="space-y-2 md:space-y-4 mb-6 md:mb-10 flex-grow">
        {points.map((point, i) => (
          <li key={i} className="flex items-start text-[10px] md:text-sm text-gray-text">
            <span className="text-gold mr-2 leading-none">·</span>
            <span className="leading-tight">{point}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onInquire}
        className={`w-full py-2 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all ${
          highlight 
            ? 'bg-gold border-gold text-black hover:bg-transparent hover:text-gold' 
            : 'border-gold text-gold hover:bg-gold hover:text-black'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};
