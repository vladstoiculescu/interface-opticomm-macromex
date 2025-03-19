
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { TrendingUp, DollarSign, Target, Star, Mail, Search, Package, Send, BarChart3, ShoppingCart, PieChart } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart as RePieChart, Pie, Cell, Tooltip } from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const GrowthOptimization = () => {
  const [selectedClient, setSelectedClient] = useState('HoReCa');
  const [selectedLocation, setSelectedLocation] = useState('Oceanul Indian');
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');

  const crossSellProducts = [
    { 
      id: 1, 
      name: 'Chifla Kaiser', 
      image: '/lovable-uploads/766f6b91-de33-4ac4-875f-44c1e473d6bb.png', 
      probability: 95, 
      minQty: 30 
    },
    { 
      id: 2, 
      name: 'Orez cu Pui', 
      image: '/lovable-uploads/766f6b91-de33-4ac4-875f-44c1e473d6bb.png', 
      probability: 93, 
      minQty: 30 
    },
    { 
      id: 3, 
      name: 'Salata Vinete', 
      image: '/lovable-uploads/766f6b91-de33-4ac4-875f-44c1e473d6bb.png', 
      probability: 92, 
      minQty: 30 
    },
  ];

  const productAffinities = [
    { product1: 'CHICKEN NUGGETS', product2: 'CARTOFI CONGELATI', affinity: 94 },
    { product1: 'CORDON BLEU', product2: 'FARM FRITES', affinity: 92 },
    { product1: 'PIEPT CURCAN', product2: 'LEGUME MEXICANE', affinity: 91 },
    { product1: 'CARNE DE PUI', product2: 'OREZ CU CIUPERCI', affinity: 90 },
    { product1: 'SOMON CONGELAT', product2: 'OREZ CU CIUPERCI', affinity: 90 },
    { product1: 'ARIPI PUI', product2: 'CARTOFI DULCI', affinity: 89 },
    { product1: 'CARNE PORC', product2: 'OREZ CONGELAT', affinity: 88 },
    { product1: 'PULPA RATA', product2: 'LEGUME MEXICANE', affinity: 87 },
  ];

  const whiteSpaceOpportunities = [
    { 
      id: 1, 
      name: 'Brio Food', 
      status: 'Never Bought', 
      probability: 95, 
      icon: '🍔' 
    },
    { 
      id: 2, 
      name: 'Oceanul Indian', 
      status: 'Never Bought', 
      probability: 91, 
      icon: '🌊' 
    },
    { 
      id: 3, 
      name: 'Hanul Berarilor', 
      status: 'Bought 2 Times', 
      probability: 85, 
      icon: '🍺' 
    },
  ];

  const inventoryPlanning = [
    { product: 'COD ALASKA PANE', demand: '+0.3%', action: 'Buy' },
    { product: 'MAZARE FINA', demand: '+0.2%', action: 'Buy' },
    { product: 'SPANAC INGHETAT', demand: '+0.3%', action: 'Hold' },
    { product: 'STRUDEL CU MERE', demand: '+0.2%', action: 'Hold' },
    { product: 'GOGOSARI BERLINEZA', demand: '-0.2%', action: 'Hold' },
    { product: 'NUGGETS PUI 1KG', demand: '+0.0%', action: 'Hold' },
    { product: 'PACHETELE PRIMAVARA', demand: '-0.3%', action: 'Sell' },
    { product: 'LEGUME MEXICANE', demand: '+0.0%', action: 'Hold' },
    { product: 'TOFU INEDIT 200g', demand: '+0.4%', action: 'Buy' },
  ];

  const inventoryDistribution = [
    { name: 'Buy', value: 25 },
    { name: 'Hold', value: 50 },
    { name: 'Sell', value: 25 },
  ];

  const COLORS = ['#3B82F6', '#6B7280', '#EF4444'];

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
          <h1 className="text-2xl font-bold text-gradient mb-6">Growth Optimization</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Cross-Sell Per Client */}
            <DashboardCard title="CROSS-SELL PER CLIENT">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <div className="chip-filter">
                    <span>{selectedClient}</span>
                    <ChevronDown size={14} />
                  </div>
                  <div className="chip-filter">
                    <span>{selectedLocation}</span>
                    <ChevronDown size={14} />
                  </div>
                  <div className="chip-filter">
                    <span>{selectedPeriod}</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {crossSellProducts.map((product) => (
                    <div key={product.id} className="bg-opticomm-darker border border-opticomm-border rounded-md p-3 flex items-center">
                      <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden mr-3 bg-opticomm-card flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-opticomm-muted">Probability to Buy: {product.probability}%</div>
                        <div className="text-sm text-opticomm-muted">Min Qty: {product.minQty} Pcs</div>
                      </div>
                      <button className="text-opticomm-muted hover:text-white transition-colors">
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button className="w-full" variant="outline">
                    <Star className="mr-2" size={18} />
                    Send to Sales
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2" size={18} />
                    Marketing Email
                  </Button>
                </div>
              </div>
            </DashboardCard>
            
            {/* Best Product Affinities */}
            <DashboardCard title="BEST PRODUCT AFFINITIES">
              <div className="space-y-4">
                {productAffinities.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-1 truncate">{item.product1}</div>
                    <div className="mx-2 text-opticomm-blue">+</div>
                    <div className="flex-1 truncate">{item.product2}</div>
                    <div className="ml-2 w-12 text-right">{item.affinity}%</div>
                    <div className="w-24 ml-3 bg-opticomm-darker rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${item.affinity}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* White Space Analysis - Opportunities */}
            <DashboardCard title="WHITE SPACE ANALYSIS - OPPORTUNITIES">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <div className="chip-filter">
                    <span>Burger Waigu</span>
                    <ChevronDown size={14} />
                  </div>
                  <div className="chip-filter">
                    <span>HoReCa</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  {whiteSpaceOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="bg-opticomm-darker border border-opticomm-border rounded-md p-3 flex items-center">
                      <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden mr-3 bg-opticomm-card flex items-center justify-center text-xl">
                        {opportunity.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{opportunity.name}</div>
                        <div className="text-sm text-opticomm-muted">{opportunity.status}</div>
                        <div className="text-sm text-opticomm-muted">Probability: {opportunity.probability}%</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  <Star className="mr-2" size={18} />
                  Send to Sales
                </Button>
              </div>
            </DashboardCard>
            
            {/* White Space Analysis - New Products */}
            <DashboardCard title="WHITE SPACE ANALYSIS - NEW PRODUCTS">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="chip-filter w-full">
                    <span>Product Category</span>
                    <ChevronDown size={14} />
                  </div>
                  <Input placeholder="Name Your Product" className="neo-input" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="chip-filter w-full">
                    <span>Type of Store</span>
                    <ChevronDown size={14} />
                  </div>
                  <Button>
                    <Package className="mr-2" size={18} />
                    Save Product
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="chip-filter w-full">
                    <span>Price per Unit</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="chip-filter w-full">
                    <span>Segment</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="chip-filter w-full">
                    <span>Brand</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="bg-opticomm-darker border border-opticomm-border rounded-md p-3">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 flex-shrink-0 rounded overflow-hidden mr-3 bg-opticomm-card flex items-center justify-center">
                        🌊
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Oceanul Indian</div>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-opticomm-muted">Probability to Buy:</span>
                        <span>98%</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-opticomm-muted">Potential Quantity:</span>
                        <span>24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-opticomm-muted">Potential Revenue:</span>
                        <span>2500 Eur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
          
          {/* Inventory Planning */}
          <DashboardCard title="INVENTORY PLANNING">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <div className="chip-filter">
                  <span>Daily</span>
                  <ChevronDown size={14} />
                </div>
                <div className="chip-filter">
                  <span>Distribution Center</span>
                  <ChevronDown size={14} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="space-y-3">
                    {inventoryPlanning.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-opticomm-border">
                        <div className="flex-1">{item.product}</div>
                        <div className={`w-24 text-right ${item.demand.includes('+') ? 'text-green-500' : item.demand.includes('-') ? 'text-red-500' : ''}`}>
                          {item.demand} demand
                        </div>
                        <div className="w-12 text-right">
                          <span className={`inline-block w-3 h-3 rounded-full ${
                            item.action === 'Buy' ? 'bg-blue-500' : 
                            item.action === 'Sell' ? 'bg-red-500' : 
                            'bg-gray-500'
                          }`}></span>
                        </div>
                        <div className="w-12 text-right">
                          {item.action}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                    <Button variant="outline" className="w-full">
                      <ShoppingCart className="mr-2" size={18} />
                      Send to Procurement
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Send className="mr-2" size={18} />
                      Send to Sales Team
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Search className="mr-2" size={18} />
                      Verify in Other Centers
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RePieChart>
                        <Pie
                          data={inventoryDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={0}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {inventoryDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RePieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-around mt-3">
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      <span className="text-sm">Buy: 25%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
                      <span className="text-sm">On Hold: 50%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                      <span className="text-sm">Sell: 25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default GrowthOptimization;
