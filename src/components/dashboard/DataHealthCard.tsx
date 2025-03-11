
import React from 'react';
import DashboardCard from './DashboardCard';
import { motion } from 'framer-motion';

interface DataHealthCardProps {
  percentage: number;
  integrity: number;
  processingOn: boolean;
}

const DataHealthCard: React.FC<DataHealthCardProps> = ({ 
  percentage = 99.9, 
  integrity = 100,
  processingOn = true 
}) => {
  return (
    <DashboardCard title="DATA HEALTH CHECK">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-opticomm-blue flex items-baseline">
            <span>+</span>
            <span>{percentage.toFixed(1)}%</span>
          </div>
          
          {/* Progress Bars */}
          <div className="flex flex-col space-y-3 w-32">
            <div className="bg-opticomm-border h-2 rounded-full overflow-hidden">
              <div 
                className="bg-opticomm-blue h-full rounded-full" 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="bg-opticomm-border h-2 rounded-full overflow-hidden">
              <div 
                className="bg-opticomm-blue h-full rounded-full" 
                style={{ width: `${integrity}%` }}
              ></div>
            </div>
            <div className="bg-opticomm-border h-2 rounded-full overflow-hidden">
              <div 
                className="bg-opticomm-blue h-full rounded-full" 
                style={{ width: `${processingOn ? 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-opticomm-muted">+{integrity}%</span>
            <span>Overall Data Integrity</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-green-500 font-medium">ON</span>
            <span>Real-Time Data Processing</span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default DataHealthCard;
