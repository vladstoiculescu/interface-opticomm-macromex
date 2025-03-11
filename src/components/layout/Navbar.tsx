
import React from 'react';
import { Search, Bell, Grid, Menu } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  username?: string;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ username = 'Viviana!', toggleSidebar }) => {
  return (
    <div className="w-full h-14 bg-opticomm-dark border-b border-opticomm-border flex items-center justify-between px-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-opticomm-text">
          <Menu size={20} />
        </Button>
        <div className="ml-4">
          <Logo variant="small" />
        </div>
      </div>
      
      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search" 
            className="neo-input w-full pl-10" 
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} className="text-opticomm-muted" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-opticomm-text relative">
          <Grid size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-opticomm-text relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-opticomm-text">Hello, {username}</span>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
            VI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
