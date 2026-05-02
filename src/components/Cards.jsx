import React from 'react';
import { motion } from 'framer-motion';

export const AttractionCard = ({ icon, title, stat, body, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-bg-card border-t-[3px] border-gold p-6 flex flex-col items-start space-y-4 hover:border-white transition-colors cursor-default"
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="font-display text-xl text-white tracking-wide uppercase">{title}</h3>
      <div className="text-gold font-bold text-lg uppercase tracking-widest">{stat}</div>
      <p className="text-gray-text text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
};

export const TierCard = ({ title, badge, points, buttonText, onInquire, highlight = false }) => {
  return (
    <div className={`bg-bg-card border p-8 flex flex-col h-full ${highlight ? 'border-gold' : 'border-border-color'}`}>
      {badge && (
        <div className="bg-gold text-black text-[10px] font-bold px-2 py-1 mb-4 w-fit uppercase tracking-tighter">
          {badge}
        </div>
      )}
      <h3 className="font-display text-2xl text-white mb-6 tracking-wide">{title}</h3>
      <ul className="space-y-4 mb-10 flex-grow">
        {points.map((point, i) => (
          <li key={i} className="flex items-start text-sm text-gray-text">
            <span className="text-gold mr-2">·</span>
            {point}
          </li>
        ))}
      </ul>
      <button
        onClick={onInquire}
        className={`w-full py-4 text-xs font-bold uppercase tracking-widest border transition-all ${
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
