
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
        
        <div className="flex items-stretch h-56">
          {/* Map Container */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-opticomm-dark rounded-lg border border-opticomm-border flex items-center justify-center text-opticomm-muted">
              {/* Simplified Map Visualization */}
              <div className="w-full h-full relative p-4">
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70" style={{ top: '30%', left: '40%' }}></div>
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70" style={{ top: '20%', left: '70%' }}></div>
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70" style={{ top: '60%', left: '30%' }}></div>
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70" style={{ top: '50%', left: '70%' }}></div>
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70" style={{ top: '80%', left: '40%' }}></div>
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70" style={{ top: '70%', left: '60%' }}></div>
                
                <div className="absolute w-16 text-center text-xs px-1 py-0.5 bg-opticomm-blue/20 border border-opticomm-blue/40 rounded text-opticomm-blue" style={{ top: '28%', left: '38%' }}>
                  Craiova
                </div>
                <div className="absolute w-16 text-center text-xs px-1 py-0.5 bg-opticomm-blue/20 border border-opticomm-blue/40 rounded text-opticomm-blue" style={{ top: '18%', left: '68%' }}>
                  Iasi
                </div>
                <div className="absolute w-16 text-center text-xs px-1 py-0.5 bg-opticomm-blue/20 border border-opticomm-blue/40 rounded text-opticomm-blue" style={{ top: '58%', left: '28%' }}>
                  Timisoara
                </div>
                <div className="absolute w-16 text-center text-xs px-1 py-0.5 bg-opticomm-blue/20 border border-opticomm-blue/40 rounded text-opticomm-blue" style={{ top: '48%', left: '68%' }}>
                  Brasov
                </div>
                <div className="absolute w-16 text-center text-xs px-1 py-0.5 bg-opticomm-blue/20 border border-opticomm-blue/40 rounded text-opticomm-blue" style={{ top: '78%', left: '38%' }}>
                  Bucuresti
                </div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="w-32 ml-2 p-2 bg-opticomm-darker border border-opticomm-border rounded-lg">
            <div className="text-xs font-semibold mb-2">TOP REGIONS</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Bucharest</span>
                <span>9000</span>
              </div>
              <div className="flex justify-between">
                <span>Iasi</span>
                <span>7800</span>
              </div>
              <div className="flex justify-between">
                <span>Cluj-Napoca</span>
                <span>6700</span>
              </div>
              <div className="flex justify-between">
                <span>Constanta</span>
                <span>6600</span>
              </div>
              <div className="flex justify-between">
                <span>Timisoara</span>
                <span>6300</span>
              </div>
              <div className="flex justify-between">
                <span>Brasov</span>
                <span>6300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default TopRegionsMap;
