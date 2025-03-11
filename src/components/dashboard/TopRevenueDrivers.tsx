
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import DashboardCard from './DashboardCard';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Chifla Kaiser', value: 850 },
  { name: 'Bagheta', value: 430 },
  { name: 'Mini Chifla', value: 320 },
  { name: 'Secara', value: 620 },
  { name: 'Alti Produse', value: 180 },
];

const TopRevenueDrivers: React.FC = () => {
  return (
    <DashboardCard title="TOP REVENUE DRIVERS">
      <div className="space-y-6">
        <div className="flex gap-2">
          <div className="chip-filter">
            <span>This Month</span>
            <ChevronDown size={14} />
          </div>
          <div className="chip-filter">
            <span>Bakery</span>
            <ChevronDown size={14} />
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 5, left: 70, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2A3A4D" horizontal={true} vertical={false} />
              <XAxis type="number" stroke="#8596A6" />
              <YAxis dataKey="name" type="category" stroke="#8596A6" tick={{ fontSize: 12 }} />
              <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  );
};

export default TopRevenueDrivers;
