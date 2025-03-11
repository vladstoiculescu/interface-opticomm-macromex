
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/layout/Logo';
import MacromexLogo from '@/components/layout/MacromexLogo';
import IntroCard from '@/components/welcome/IntroCard';
import { TestInterfaceButton } from '@/components/ui/test-interface-button';
import { LineChart, ClipboardList, BarChart3, Users } from 'lucide-react';

const navItems = [
  {
    icon: <LineChart size={20} />,
    title: 'Demand Prediction',
    options: ['Demand Prediction, Model and Data Health']
  },
  {
    icon: <ClipboardList size={20} />,
    title: 'Action Center',
    options: ['Orders and Customers at Risk']
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Growth Optimization',
    options: ['Revenue Simulator, Growth Breakdown, Margin']
  },
  {
    icon: <Users size={20} />,
    title: 'Customer Hub',
    options: ['Client Comparison Tool']
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full filter blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full filter blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/4"></div>
      </div>
      
      {/* Header with Logos */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center mb-16 px-6 z-10">
        <Logo />
        <MacromexLogo />
      </div>
      
      {/* Main Content Card */}
      <div className="w-full max-w-7xl mx-auto px-6 z-10">
        <IntroCard navItems={navItems} />
      </div>
      
      {/* Action Button */}
      <div className="mt-12 z-10">
        <Link to="/login">
          <TestInterfaceButton />
        </Link>
      </div>
    </div>
  );
};

export default Index;
