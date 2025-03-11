
import React from 'react';

interface MacromexLogoProps {
  variant?: 'default' | 'small';
}

const MacromexLogo: React.FC<MacromexLogoProps> = ({ variant = 'default' }) => {
  if (variant === 'small') {
    return (
      <div className="flex items-center">
        <div className="text-white font-bold text-xl flex items-center">
          <span className="flex items-center justify-center w-8 h-8 relative overflow-hidden">
            <div className="absolute w-6 h-6 rotate-45 bg-white top-1 left-1"></div>
          </span>
          <span className="ml-1">MACROMEX</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="text-white font-bold text-2xl flex items-center">
        <span className="flex items-center justify-center w-10 h-10 relative overflow-hidden">
          <div className="absolute w-7 h-7 rotate-45 bg-white top-1.5 left-1.5"></div>
        </span>
        <span className="ml-2">MACROMEX</span>
      </div>
    </div>
  );
};

export default MacromexLogo;
