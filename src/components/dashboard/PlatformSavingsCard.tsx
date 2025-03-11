
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import DashboardCard from './DashboardCard';
import { ChevronDown } from 'lucide-react';

// Sample data
const data = [
  { name: 'W1', revenue: 320, withOpticomm: 380 },
  { name: 'W2', revenue: 380, withOpticomm: 430 },
  { name: 'W3', revenue: 400, withOpticomm: 480 },
  { name: 'W4', revenue: 350, withOpticomm: 420 },
];

const PlatformSavingsCard: React.FC = () => {
  return (
    <DashboardCard title="PLATFORM SAVINGS">
      <div className="flex flex-col space-y-4">
        <div className="flex">
          <div className="chip-filter">
            <span>This Month</span>
            <ChevronDown size={14} />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {/* Stats */}
          <div className="col-span-1 bg-opticomm-darker border border-opticomm-border rounded-md p-3 space-y-4">
            <div className="space-y-1">
              <div className="text-sm text-opticomm-muted">Savings</div>
              <div className="text-lg font-semibold">25 000 Eur</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-opticomm-muted">Revenue Growth</div>
              <div className="text-lg font-semibold">9 000 Eur</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-opticomm-muted">Cross-Sell Recovered Orders</div>
              <div className="flex justify-between">
                <div className="text-lg font-semibold">8 000 Eur</div>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-opticomm-muted">Cost Savings Inventory Optimization</div>
              <div className="text-lg font-semibold">8 000 Eur</div>
            </div>
          </div>
          
          {/* Chart */}
          <div className="col-span-2">
            <div className="mb-2 text-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-300 mr-1"></div>
                  <span>Revenue</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 mr-1"></div>
                  <span>With OptiComm</span>
                </div>
              </div>
            </div>
            
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3A4D" />
                  <XAxis dataKey="name" stroke="#8596A6" />
                  <YAxis stroke="#8596A6" />
                  <Bar dataKey="revenue" fill="#7EB6E9" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="withOpticomm" fill="#2E7DAF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default PlatformSavingsCard;
