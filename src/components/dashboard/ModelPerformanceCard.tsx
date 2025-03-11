
import React from 'react';
import DashboardCard from './DashboardCard';

interface ModelPerformanceProps {
  version: string;
  lastUpdate: string;
  accuracyImprovement: string;
}

const ModelPerformanceCard: React.FC<ModelPerformanceProps> = ({
  version = '1.02b',
  lastUpdate = '19.02.2025',
  accuracyImprovement = '+0.02%'
}) => {
  return (
    <DashboardCard title="MODEL PERFORMANCE">
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-opticomm-muted">Model Version:</span>
            <span className="font-medium">{version}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-opticomm-muted">Latest Update:</span>
            <span className="font-medium">{lastUpdate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-opticomm-muted">Accuracy Improvement:</span>
            <span className="font-medium text-emerald-500">{accuracyImprovement}</span>
          </div>
        </div>
        
        <div className="relative pt-4">
          <div className="flex items-end h-16 space-x-1">
            <div className="w-8 h-10 bg-opticomm-blue/30 rounded-sm"></div>
            <div className="w-8 h-16 bg-opticomm-blue rounded-sm"></div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default ModelPerformanceCard;
