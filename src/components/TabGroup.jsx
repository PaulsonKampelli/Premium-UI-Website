import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabGroup = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto border-b border-border-color mb-8 custom-scrollbar whitespace-nowrap">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 md:px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative shrink-0 ${
              activeTab === i ? 'text-white' : 'text-gray-text hover:text-white'
            }`}
          >
            {tab.label}
            {activeTab === i && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-bg-card border-l-[3px] border-gold p-8 min-h-[250px]"
        >
          <p className="text-white text-lg leading-relaxed mb-8 max-w-3xl">
            {tabs[activeTab].content}
          </p>
          <div className="flex flex-wrap gap-4">
            {tabs[activeTab].pills.map((pill, i) => (
              <span key={i} className="px-4 py-2 border border-border-color text-[10px] uppercase tracking-widest text-gray-text">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabGroup;
