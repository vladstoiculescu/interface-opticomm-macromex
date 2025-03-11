
import React from 'react';
import DashboardCard from './DashboardCard';
import { ChevronDown, BarChart3, Flag } from 'lucide-react';

const predictionItems = [
  {
    name: 'DIGI ROMANIA SA BV',
    product: 'Chifla Kaiser 35g',
    quantity: 140,
    date: '15.02.2025',
    image: 'public/lovable-uploads/c92ca928-cba2-4d5f-9e4d-de3cfb6a1bb8.png'
  },
  {
    name: 'RO ALIMENTA SRL',
    product: 'Vinete Coapte Tocate',
    quantity: 110,
    date: '15.02.2025',
    image: 'public/lovable-uploads/aad45cb6-5a08-404d-9d1f-0c67f1987ae4.png'
  },
  {
    name: 'RO ALIMENTA SRL',
    product: 'Tofu Inedit 300g',
    quantity: 40,
    date: '16.02.2025',
    image: 'public/lovable-uploads/49185eea-d7a8-4863-82c9-b066012387a6.png'
  }
];

const LiveOrderPrediction: React.FC = () => {
  return (
    <DashboardCard title="LIVE ORDER PREDICTION">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {predictionItems.map((item, index) => (
            <div key={index} className="bg-opticomm-darker border border-opticomm-border rounded-md p-3 flex flex-col">
              <div className="text-sm font-medium mb-2">{item.name}</div>
              <div className="flex space-x-3 mb-3">
                <div className="w-16 h-16 rounded overflow-hidden bg-opticomm-border flex-shrink-0">
                  <img src={item.image} alt={item.product} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
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
