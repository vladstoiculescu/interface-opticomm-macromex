
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'small';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  if (variant === 'small') {
    return (
      <div className="flex items-center">
        <div className="text-opticomm-blue font-bold text-xl flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-opticomm-blue relative overflow-hidden">
            <div className="absolute w-4 h-4 rounded-full bg-opticomm-blue left-0.5 top-1"></div>
          </span>
          <span className="ml-1">OPTICOMM</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="text-opticomm-blue font-bold text-2xl flex items-center">
        <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-opticomm-blue relative overflow-hidden">
          <div className="absolute w-5 h-5 rounded-full bg-opticomm-blue left-0.5 top-1"></div>
        </span>
        <span className="ml-2">OPTICOMM</span>
      </div>
    </div>
  );
};

export default Logo;
