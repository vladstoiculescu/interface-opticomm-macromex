
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'small';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const size = variant === 'small' ? 'h-8' : 'h-10';

  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/2ac3b912-2179-4e09-b3a0-28e96bb28550.png" 
        alt="OptiComm Logo" 
        className={`${size} w-auto`} 
      />
    </div>
  );
};

export default Logo;
