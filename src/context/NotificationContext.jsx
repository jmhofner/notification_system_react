import React, { createContext, useContext, useState, useCallback } from 'react';
import { getNotificationLogs, sendNotification } from '../services/notificationService';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLogs = useCallback(async (category) => {
    try {
      setLoading(true);
      const data = await getNotificationLogs(category);
      setLogs(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const send = useCallback(async (notificationData) => {
    try {
      setLoading(true);
      await sendNotification(notificationData);
      await fetchLogs();
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchLogs]);

  const value = {
    logs,
    loading,
    error,
    fetchLogs,
    send
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }
  return context;
};