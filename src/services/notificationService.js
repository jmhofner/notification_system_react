import api from './api';

export const sendNotification = async (data) => {
  return await api.post('/notifications/send', data);
};

export const getNotificationLogs = async (category, page = 0, size = 20) => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  params.append('page', page);
  params.append('size', size);
  
  return await api.get(`/notifications/logs?${params.toString()}`);
};

export const getUserLogs = async (userId, category) => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  
  return await api.get(`/notifications/logs/${userId}?${params.toString()}`);
};