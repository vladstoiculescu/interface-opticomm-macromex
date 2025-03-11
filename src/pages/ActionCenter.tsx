
import React from 'react';
import Layout from '@/components/layout/Layout';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import DashboardCard from '@/components/dashboard/DashboardCard';

const ActionCenter = () => {
  const actions = [
    {
      type: 'warning',
      title: 'Order Volume Drop Detected',
      description: 'DIGI ROMANIA SA BV order volume is 23% below forecast',
      date: '2h ago',
      status: 'Requires Action'
    },
    {
      type: 'success',
      title: 'New Customer Onboarded',
      description: 'Successfully onboarded RO ALIMENTA SRL',
      date: '4h ago',
      status: 'Completed'
    },
    {
      type: 'warning',
      title: 'Delivery Delay Risk',
      description: 'Potential delay for 3 orders in Cluj region',
      date: '5h ago',
      status: 'In Progress'
    }
  ];

  return (
    <Layout>
      <div 
        className="p-6 relative"
        style={{
          backgroundImage: "url('/lovable-uploads/a2546473-8701-4255-bdb7-4eddedb3442c.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-opticomm-darkest/70 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-gradient mb-6">Action Center</h1>
          
          <div className="grid gap-4">
            {actions.map((action, index) => (
              <DashboardCard key={index}>
                <div className="flex items-start gap-4">
                  {action.type === 'warning' ? (
                    <AlertTriangle className="text-yellow-500 mt-1" size={20} />
                  ) : (
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{action.title}</h3>
                    <p className="text-opticomm-muted text-sm mb-2">{action.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-opticomm-muted">{action.date}</span>
                      <span className={action.type === 'warning' ? 'text-yellow-500' : 'text-green-500'}>
                        {action.status}
                      </span>
                    </div>
                  </div>
                </div>
              </DashboardCard>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActionCenter;
