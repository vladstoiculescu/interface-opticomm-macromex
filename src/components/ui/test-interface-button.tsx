
import React from 'react';
import { RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestInterfaceButtonProps {
  onClick?: () => void;
  className?: string;
}

export function TestInterfaceButton({ onClick, className }: TestInterfaceButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-6 py-3 rounded-md",
        "bg-transparent text-opticomm-blue border border-opticomm-blue",
        "hover:bg-opticomm-blue/10 transition-all duration-300",
        className
      )}
    >
      <RotateCw size={18} className="animate-pulse" />
      <span>Test the Interface</span>
    </button>
  );
}
