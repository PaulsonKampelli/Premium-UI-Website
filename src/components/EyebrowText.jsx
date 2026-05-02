import React from 'react';

const EyebrowText = ({ children, className = "" }) => {
  return (
    <span className={`eyebrow block mb-4 ${className}`}>
      {children}
    </span>
  );
};

export default EyebrowText;
