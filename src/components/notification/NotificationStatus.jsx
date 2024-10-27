import React from 'react';
import { STATUS_COLORS } from '../../utils/constants';
import { cn } from '../../utils/cn';

export function NotificationStatus({ status }) {
  const baseClasses = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";
  const colorClasses = status.startsWith('ERROR') 
    ? STATUS_COLORS.ERROR 
    : STATUS_COLORS.SUCCESS;

  return (
    <span className={cn(baseClasses, colorClasses)}>
      {status}
    </span>
  );
}