
import React from 'react';
import DashboardCard from './DashboardCard';
import { ChevronDown, Monitor } from 'lucide-react';

const TopRegionsMap: React.FC = () => {
  return (
    <DashboardCard title="TOP REGIONS BY NUMBER OF ORDERS">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <div className="chip-filter">
            <span>This Month</span>
            <ChevronDown size={14} />
          </div>
          <div className="chip-filter">
            <span>All Product Categories</span>
            <ChevronDown size={14} />
          </div>
          <div className="ml-auto">
            <button className="btn-secondary">
              <Monitor size={16} />
              <span>Show Prediction</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-stretch h-[400px]">
          {/* Map Container */}
          <div className="flex-1 relative">
            <img 
              src="/lovable-uploads/0aba8e82-0361-481b-9081-bf379a51e309.png" 
              alt="Romania regions map"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Legend */}
          <div className="w-40 ml-4 p-3 bg-opticomm-darker border border-opticomm-border rounded-lg">
            <div className="text-xs font-semibold mb-3">TOP REGIONS</div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Bucharest</span>
                <span>9,420</span>
              </div>
              <div className="flex justify-between">
                <span>Cluj-Napoca</span>
                <span>8,350</span>
              </div>
              <div className="flex justify-between">
                <span>Iasi</span>
                <span>7,890</span>
              </div>
              <div className="flex justify-between">
                <span>Timisoara</span>
                <span>7,450</span>
              </div>
              <div className="flex justify-between">
                <span>Constanta</span>
                <span>6,980</span>
              </div>
              <div className="flex justify-between">
                <span>Brasov</span>
                <span>6,740</span>
              </div>
              <div className="flex justify-between">
                <span>Craiova</span>
                <span>6,230</span>
              </div>
              <div className="flex justify-between">
                <span>Galati</span>
                <span>5,890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default TopRegionsMap;
