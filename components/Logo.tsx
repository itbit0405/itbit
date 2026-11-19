import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ITBIT Logo Symbol">
      {/* Outer frame representing hardware/chip */}
      <rect x="8" y="8" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="3" />
      
      {/* Inner connection lines representing software/logic */}
      <path d="M20 15V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15 20H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Accent dot representing the 'bit' or signal */}
      <circle cx="28" cy="12" r="3" fill="currentColor" />
    </svg>
  );
};

export default Logo;