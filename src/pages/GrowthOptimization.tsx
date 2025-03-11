
import React from 'react';
import Layout from '@/components/layout/Layout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { TrendingUp, DollarSign, Target } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const GrowthOptimization = () => {
  const performanceData = [
    { month: 'Jan', revenue: 65000, target: 60000 },
    { month: 'Feb', revenue: 75000, target: 65000 },
    { month: 'Mar', revenue: 85000, target: 70000 },
    { month: 'Apr', revenue: 95000, target: 80000 }
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gradient mb-6">Growth Optimization</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <DashboardCard>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <TrendingUp className="text-blue-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-opticomm-muted">Growth Rate</p>
                <p className="text-2xl font-bold">+24.8%</p>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <DollarSign className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-opticomm-muted">Revenue</p>
                <p className="text-2xl font-bold">$95,400</p>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <Target className="text-yellow-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-opticomm-muted">Target Achievement</p>
                <p className="text-2xl font-bold">118.7%</p>
              </div>
            </div>
          </DashboardCard>
        </div>

        <DashboardCard>
          <h2 className="font-semibold mb-4">Revenue vs Target</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3A4D" vertical={false} />
                <XAxis dataKey="month" stroke="#8596A6" />
                <YAxis stroke="#8596A6" />
                <Bar dataKey="revenue" fill="#3B82F6" />
                <Bar dataKey="target" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default GrowthOptimization;
