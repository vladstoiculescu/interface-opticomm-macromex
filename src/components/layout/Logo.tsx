
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'small';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const size = variant === 'small' ? 'h-8' : 'h-10';

  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/9eccdf44-79db-4d8e-8cb3-759d468220a5.png" 
        alt="OptiComm Logo" 
        className={`${size} w-auto`} 
      />
    </div>
  );
};

export default Logo;
