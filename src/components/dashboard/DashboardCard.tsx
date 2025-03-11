
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  headerContent?: ReactNode;
  animate?: boolean;
  delay?: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  children, 
  className, 
  headerContent,
  animate = true,
  delay = 0
}) => {
  const animationClass = animate 
    ? `animate-slideIn opacity-0 [animation-delay:${delay}ms] [animation-fill-mode:forwards]`
    : '';
  
  return (
    <div className={cn(
      'card-dashboard h-full', 
      animationClass,
      className
    )}>
      {(title || headerContent) && (
        <div className="data-card-header px-4 pt-4">
          {title && <h3 className="font-semibold text-opticomm-text uppercase text-sm tracking-wide">{title}</h3>}
          {headerContent}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
