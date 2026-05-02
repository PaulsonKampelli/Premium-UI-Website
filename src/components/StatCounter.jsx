import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

const StatCounter = ({ end, suffix = "", prefix = "", label, isActive = false }) => {
  const count = useCountUp(end, 1500, isActive);
  
  // Format based on whether it's an integer or float
  const formattedCount = Number.isInteger(end) 
    ? Math.floor(count).toLocaleString()
    : count.toFixed(1);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-gold font-display font-bold text-5xl md:text-6xl mb-2">
        {prefix}{formattedCount}{suffix}
      </div>
      <div className="text-white text-sm uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
