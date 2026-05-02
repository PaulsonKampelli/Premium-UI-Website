import React from 'react';

export const GoldButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gold text-black px-8 py-4 font-inter font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#B39340] active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export const OutlineButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border border-gold text-gold px-8 py-4 font-inter font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-gold hover:text-black active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};
