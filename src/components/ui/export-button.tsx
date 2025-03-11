
import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ExportButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ExportButton({ onClick, className }: ExportButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className={cn(
        "flex items-center justify-center gap-2 px-6 py-2 rounded-md",
        "bg-opticomm-card text-opticomm-text border border-opticomm-border",
        "hover:bg-opticomm-card/80 transition-all duration-300",
        className
      )}
    >
      <Download size={18} />
      <span>Export Data</span>
    </Button>
  );
}
