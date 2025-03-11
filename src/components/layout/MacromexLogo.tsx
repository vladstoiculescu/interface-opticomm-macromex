
import React from 'react';

interface MacromexLogoProps {
  variant?: 'default' | 'small';
}

const MacromexLogo: React.FC<MacromexLogoProps> = ({ variant = 'default' }) => {
  const size = variant === 'small' ? 'h-8' : 'h-10';

  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/784f4993-0d5e-426f-af05-446b469bfcce.png" 
        alt="Macromex Logo" 
        className={`${size} w-auto`} 
      />
    </div>
  );
};

export default MacromexLogo;
