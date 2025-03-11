
import React from 'react';
import Layout from '@/components/layout/Layout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { User, PhoneCall, Mail, MapPin } from 'lucide-react';

const CustomerHub = () => {
  const customers = [
    {
      name: 'DIGI ROMANIA SA BV',
      status: 'active',
      location: 'Bucharest',
      contact: 'Maria Popescu',
      email: 'maria.p@digi.ro',
      phone: '+40 721 234 567'
    },
    {
      name: 'RO ALIMENTA SRL',
      status: 'active',
      location: 'Cluj-Napoca',
      contact: 'Ion Ionescu',
      email: 'ion.i@roalimenta.ro',
      phone: '+40 722 345 678'
    },
    {
      name: 'MEGA FOOD DISTRIBUTION',
      status: 'pending',
      location: 'Timisoara',
      contact: 'George Georgescu',
      email: 'george.g@megafood.ro',
      phone: '+40 723 456 789'
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gradient mb-6">Customer Hub</h1>
        
        <div className="grid gap-4">
          {customers.map((customer, index) => (
            <DashboardCard key={index}>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-full">
                      <User className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{customer.name}</h3>
                      <p className="text-sm text-opticomm-muted">Contact: {customer.contact}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    customer.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {customer.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-opticomm-muted">
                    <MapPin size={16} />
                    <span>{customer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-opticomm-muted">
                    <Mail size={16} />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-opticomm-muted">
                    <PhoneCall size={16} />
                    <span>{customer.phone}</span>
                  </div>
                </div>
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CustomerHub;
