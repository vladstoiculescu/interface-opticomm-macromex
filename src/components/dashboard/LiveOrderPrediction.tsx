
import React from 'react';
import DashboardCard from './DashboardCard';
import { ChevronDown, BarChart3, Flag, Package, ShoppingCart, Sandwich } from 'lucide-react';

const predictionItems = [
  {
    name: 'DIGI ROMANIA SA BV',
    product: 'Chifla Kaiser 35g',
    quantity: 140,
    date: '15.02.2025',
    icon: <Sandwich size={32} className="text-blue-400" />
  },
  {
    name: 'RO ALIMENTA SRL',
    product: 'Vinete Coapte Tocate',
    quantity: 110,
    date: '15.02.2025',
    icon: <ShoppingCart size={32} className="text-green-400" />
  },
  {
    name: 'RO ALIMENTA SRL',
    product: 'Tofu Inedit 300g',
    quantity: 40,
    date: '16.02.2025',
    icon: <Package size={32} className="text-purple-400" />
  }
];

const LiveOrderPrediction: React.FC = () => {
  return (
    <DashboardCard title="LIVE ORDER PREDICTION">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {predictionItems.map((item, index) => (
            <div key={index} className="bg-opticomm-darker border border-opticomm-border rounded-md p-3">
              <div className="text-sm font-medium mb-3">{item.name}</div>
              <div className="flex flex-col items-center space-y-3 mb-3">
                <div className="w-16 h-16 rounded overflow-hidden bg-opticomm-darker flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="text-sm truncate">{item.product}</div>
                  <div className="text-sm mt-1">
                    <span className="text-opticomm-muted">Predicted Quantity:</span> {item.quantity}
                  </div>
                  <div className="text-sm mt-1">
                    <span className="text-opticomm-muted">Next Order:</span> {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between pt-4">
          <button className="btn-outline hidden">
            <ChevronDown size={16} />
          </button>
          
          <div className="space-x-3 ml-auto">
            <button className="btn-secondary">
              <BarChart3 size={16} />
              <span>Adjust Prediction</span>
            </button>
            <button className="btn-secondary">
              <Flag size={16} />
              <span>Flag Prediction</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default LiveOrderPrediction;
