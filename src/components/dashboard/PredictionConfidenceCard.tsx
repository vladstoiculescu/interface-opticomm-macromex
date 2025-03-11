
import React from 'react';
import DashboardCard from './DashboardCard';

interface PredictionConfidenceProps {
  percentage: number;
  categoryPercentage: number;
  customerPercentage: number;
}

const PredictionConfidenceCard: React.FC<PredictionConfidenceProps> = ({
  percentage = 94.4,
  categoryPercentage = 95.3,
  customerPercentage = 94.5
}) => {
  // Calculate the angle for the gauge based on percentage (0-100 -> 0-180 degrees)
  const gaugeAngle = (percentage / 100) * 180;
  
  return (
    <DashboardCard title="PREDICTION CONFIDENCE">
      <div className="flex flex-col space-y-5">
        <div className="text-center">
          <div className="text-3xl font-bold text-opticomm-text">{percentage.toFixed(1)}%</div>
        </div>
        
        <div className="relative h-28 w-full flex justify-center">
          {/* Gauge background */}
          <div className="absolute w-36 h-36 rounded-full border-[16px] border-opticomm-border opacity-30" style={{ 
            clipPath: 'polygon(50% 50%, 0 0, 0 50%, 0 100%, 100% 100%, 100% 50%, 100% 0)'
          }}></div>
          
          {/* Gauge fill */}
          <div className="absolute w-36 h-36 rounded-full border-[16px] border-opticomm-blue" style={{ 
            clipPath: `polygon(50% 50%, 50% 0, ${gaugeAngle <= 90 ? (50 + 50 * Math.sin(gaugeAngle * Math.PI / 180)) + '% ' + (50 - 50 * Math.cos(gaugeAngle * Math.PI / 180)) + '%' : '100% 0'}, ${gaugeAngle > 90 ? (50 + 50 * Math.sin(gaugeAngle * Math.PI / 180)) + '% ' + (50 - 50 * Math.cos(gaugeAngle * Math.PI / 180)) + '%' : ''})`
          }}></div>
          
          {/* Gauge needle */}
          <div className="absolute top-[18px] left-1/2 w-1 h-16 bg-white rounded-full origin-bottom transform -translate-x-1/2" style={{
            transform: `translateX(-50%) rotate(${gaugeAngle - 90}deg)`
          }}></div>
          
          {/* Center point */}
          <div className="absolute top-[64px] left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2"></div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-opticomm-blue">+{categoryPercentage}% per Category</span>
          </div>
          <div className="flex justify-between">
            <span className="text-opticomm-blue">+{customerPercentage}% per Customer</span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default PredictionConfidenceCard;
