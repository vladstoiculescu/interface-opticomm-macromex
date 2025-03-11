
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LineChart, ClipboardList, BarChart3, Users, User, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const navigationLinks = [
    { section: 'Navigation', items: [
      { name: 'Demand Prediction', path: '/dashboard', icon: <LineChart size={20} /> },
      { name: 'Action Center', path: '/action-center', icon: <ClipboardList size={20} /> },
      { name: 'Growth Optimization', path: '/growth', icon: <BarChart3 size={20} /> },
      { name: 'Customer Hub', path: '/customers', icon: <Users size={20} /> },
    ]},
    { section: 'User Management', items: [
      { name: 'Profile', path: '/profile', icon: <User size={20} /> },
      { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
      { name: 'Helper', path: '/helper', icon: <HelpCircle size={20} /> },
    ]}
  ];
  
  if (!isOpen) return null;
  
  return (
    <aside className="w-60 flex-shrink-0 border-r border-opticomm-border bg-opticomm-dark h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="p-4 flex flex-col space-y-8">
        {navigationLinks.map((section, index) => (
          <div key={index} className="space-y-1">
            <p className="text-xs uppercase text-opticomm-muted font-semibold tracking-wider mb-2 px-4">
              {section.section}
            </p>
            {section.items.map((item, i) => (
              <Link 
                key={i} 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
