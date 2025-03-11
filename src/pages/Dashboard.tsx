
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
      <div 
        className="p-2 sm:p-4 md:p-6 relative"
        style={{
          backgroundImage: "url('/lovable-uploads/a2546473-8701-4255-bdb7-4eddedb3442c.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-opticomm-darkest/70 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gradient">AI Analytics Dashboard</h1>
            <p className="text-opticomm-muted mt-1">Real-time predictions and insights for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <ModelPerformanceCard 
              version="1.02b" 
              lastUpdate="19.02.2025" 
              accuracyImprovement="+0.02%" 
            />
            <PredictionConfidenceCard 
              percentage={94.4} 
              categoryPercentage={95.3} 
              customerPercentage={94.5} 
            />
            <DataHealthCard 
              percentage={99.9} 
              integrity={100} 
              processingOn={true} 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2">
              <ActualVsPredictedChart />
            </div>
            <div>
              <LiveOrderPrediction />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <div className="lg:col-span-2">
                <TopRegionsMap />
              </div>
              <div>
                <TopRevenueDrivers />
              </div>
            </div>
            <div>
              <PlatformSavingsCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
