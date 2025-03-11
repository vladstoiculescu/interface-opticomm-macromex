
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItem {
  icon: React.ReactNode;
  title: string;
  options: string[];
}

interface IntroCardProps {
  navItems: NavItem[];
}

const IntroCard: React.FC<IntroCardProps> = ({ navItems }) => {
  return (
    <div className="card-dashboard max-w-3xl w-full mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-8">BEFORE WE START</h2>
        
        <div className="space-y-6 text-sm">
          <p className="text-opticomm-text">
            Note that the following is only a preview of the OptiComm interface and that the
            final product may differ. Nothing in the current version should be considered final or
            representative of the eventual release product.
          </p>
          
          <p className="text-opticomm-text">
            Use the menu on the left side of the screen to see what each panel has to offer and
            explore each of the data representations.
          </p>
        </div>
      </div>
      
      <div className="p-6 border-t border-opticomm-border">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 bg-opticomm-darker p-3 rounded-md">
            <h3 className="text-sm font-medium text-center mb-4">Navigation</h3>
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 hover:bg-opticomm-card rounded-md transition-colors cursor-pointer">
                  <div className="text-opticomm-muted">{item.icon}</div>
                  <div className="text-sm">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-span-3">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <div key={index} className="group">
                  {item.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center justify-between bg-opticomm-darker hover:bg-opticomm-card p-3 rounded-md mb-2 transition-all cursor-pointer hover:translate-x-1">
                      <span className="text-sm">{option}</span>
                      <ChevronRight size={16} className="text-opticomm-blue" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
