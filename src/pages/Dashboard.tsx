
import React from 'react';
import Layout from '@/components/layout/Layout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import ModelPerformanceCard from '@/components/dashboard/ModelPerformanceCard';
import ActualVsPredictedChart from '@/components/dashboard/ActualVsPredictedChart';
import LiveOrderPrediction from '@/components/dashboard/LiveOrderPrediction';
import DataHealthCard from '@/components/dashboard/DataHealthCard';
import PredictionConfidenceCard from '@/components/dashboard/PredictionConfidenceCard';
import TopRegionsMap from '@/components/dashboard/TopRegionsMap';
import TopRevenueDrivers from '@/components/dashboard/TopRevenueDrivers';
import PlatformSavingsCard from '@/components/dashboard/PlatformSavingsCard';

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-2 sm:p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gradient">AI Analytics Dashboard</h1>
          <p className="text-opticomm-muted mt-1">Real-time predictions and insights for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <ModelPerformanceCard />
          <PredictionConfidenceCard />
          <DataHealthCard />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <ActualVsPredictedChart />
          </div>
          <div>
            <LiveOrderPrediction />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <TopRegionsMap />
          </div>
          <div className="flex flex-col gap-4">
            <TopRevenueDrivers />
            <PlatformSavingsCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
