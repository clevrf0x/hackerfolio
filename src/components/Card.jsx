import React from 'react';
import { getActiveColor } from '../utils/colors';

const Card = ({ children, colorMode, className = '', hover = true }) => {
  const activeColor = getActiveColor(colorMode);

  return (
    <div
      className={`bg-[rgba(51,65,85,0.5)] border border-gray-500/50 rounded-xl p-6 md:p-8 font-mono text-gray-100 shadow-lg shadow-black/10 ${
        hover ? `hover:border-${activeColor}-400` : ''
      } transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
