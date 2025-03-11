
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive?: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
  valueClassName?: string;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon, 
  className,
  valueClassName 
}: StatCardProps) {
  return (
    <div className={cn("p-4 rounded-lg border border-opticomm-border bg-opticomm-card flex flex-col", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-opticomm-muted">{title}</p>
        {icon && <div className="text-opticomm-blue">{icon}</div>}
      </div>
      <div className="mt-2 flex items-end justify-between">
        <h4 className={cn("text-2xl font-semibold", valueClassName)}>{value}</h4>
        {change && (
          <div className={cn(
            "flex items-center text-xs font-medium",
            change.isPositive ? "text-emerald-500" : "text-red-500"
          )}>
            {change.isPositive ? <ArrowUpIcon className="mr-1 h-3 w-3" /> : <ArrowDownIcon className="mr-1 h-3 w-3" />}
            {Math.abs(change.value)}%
          </div>
        )}
      </div>
    </div>
  );
}
