
import React from 'react';
import { ExportButton } from '@/components/ui/export-button';
import DataHealthCard from '@/components/dashboard/DataHealthCard';
import PredictionConfidenceCard from '@/components/dashboard/PredictionConfidenceCard';
import ModelPerformanceCard from '@/components/dashboard/ModelPerformanceCard';
import ActualVsPredictedChart from '@/components/dashboard/ActualVsPredictedChart';
import TopRegionsMap from '@/components/dashboard/TopRegionsMap';
import PlatformSavingsCard from '@/components/dashboard/PlatformSavingsCard';
import TopRevenueDrivers from '@/components/dashboard/TopRevenueDrivers';
import LiveOrderPrediction from '@/components/dashboard/LiveOrderPrediction';

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <ExportButton />
      </div>
      
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <DataHealthCard percentage={99.9} integrity={100} processingOn={true} />
        <PredictionConfidenceCard percentage={94.4} categoryPercentage={95.3} customerPercentage={94.5} />
        <ModelPerformanceCard version="1.02b" lastUpdate="19.02.2025" accuracyImprovement="+0.02%" />
      </div>
      
      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ActualVsPredictedChart />
        <TopRegionsMap />
      </div>
      
      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <PlatformSavingsCard />
        <TopRevenueDrivers />
      </div>
      
      {/* Fourth Row */}
      <div className="mb-4">
        <LiveOrderPrediction />
      </div>
    </div>
  );
};

export default Dashboard;
