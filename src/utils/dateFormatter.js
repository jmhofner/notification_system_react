import { format, formatDistanceToNow } from 'date-fns';

export const formatDateTime = (date) => {
  return format(new Date(date), 'PPpp');
};

export const formatRelativeTime = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
