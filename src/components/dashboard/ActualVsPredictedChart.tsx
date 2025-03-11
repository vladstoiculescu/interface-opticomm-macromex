
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import DashboardCard from './DashboardCard';
import { ChevronDown } from 'lucide-react';

// Sample data
const data = [
  { name: 'Mon', actual: 120, forecast: 110, potential: 130 },
  { name: 'Tue', actual: 150, forecast: 140, potential: 160 },
  { name: 'Wed', actual: 210, forecast: 200, potential: 230 },
  { name: 'Thu', actual: 230, forecast: 250, potential: 270 },
  { name: 'Fri', actual: 240, forecast: 260, potential: 280 },
  { name: 'Sat', actual: 250, forecast: 270, potential: 290 },
  { name: 'Sun', actual: 270, forecast: 280, potential: 300 },
];

interface ActualVsPredictedChartProps {
  timeframe?: string;
  productCategory?: string;
  client?: string;
}

const ActualVsPredictedChart: React.FC<ActualVsPredictedChartProps> = ({
  timeframe = 'Weekly',
  productCategory = 'All Product Categories',
  client = 'All Clients'
}) => {
  return (
    <DashboardCard title="ACTUAL VS PREDICTED">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <div className="chip-filter">
            <span>{timeframe}</span>
            <ChevronDown size={14} />
          </div>
          <div className="chip-filter">
            <span>{productCategory}</span>
            <ChevronDown size={14} />
          </div>
          <div className="chip-filter">
            <span>{client}</span>
            <ChevronDown size={14} />
          </div>
        </div>
        
        <div className="h-64 -mx-4">
          <div className="flex items-center mb-2 px-4 text-xs">
            <div className="flex items-center mr-4">
              <div className="w-4 h-3 bg-blue-400 rounded-sm mr-1"></div>
              <span>Placed Orders</span>
            </div>
            <div className="flex items-center mr-4">
              <div className="w-4 h-3 bg-gray-400 rounded-sm mr-1"></div>
              <span>Forecasted</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-3 bg-green-400 rounded-sm mr-1"></div>
              <span>Potential</span>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2A3A4D" vertical={false} />
              <XAxis dataKey="name" stroke="#8596A6" />
              <YAxis stroke="#8596A6" />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#3B82F6" 
                strokeWidth={2} 
                dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 2, fill: '#3B82F6' }}
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#9CA3AF" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={{ stroke: '#9CA3AF', strokeWidth: 2, r: 2, fill: '#9CA3AF' }}
              />
              <Line 
                type="monotone" 
                dataKey="potential" 
                stroke="#10B981" 
                strokeWidth={2} 
                dot={{ stroke: '#10B981', strokeWidth: 2, r: 2, fill: '#10B981' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  );
};

export default ActualVsPredictedChart;
